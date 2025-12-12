/**
 * @fileoverview LangChain-style CV Parser Module
 * @description Uses Google GenAI SDK with Zod for structured CV parsing output.
 * Provides reliable JSON parsing through Zod validation.
 * Uses user's Google API key or falls back to Replit's Gemini integration.
 */

import { GoogleGenAI } from "@google/genai";
import { z } from "zod";

// ============================================================================
// ZOD SCHEMAS - Aligned with ParsedCV interface from types/cv.ts
// ============================================================================

/**
 * Experience entry schema
 */
export const ExperienceSchema = z.object({
  company: z.string().describe("Company name"),
  role: z.string().describe("Job title/role"),
  duration: z.string().describe("Employment duration (e.g., 'Jan 2020 - Present')"),
  description: z.string().describe("Job description and responsibilities"),
  location: z.string().optional().describe("Work location"),
});

/**
 * Education entry schema
 */
export const EducationSchema = z.object({
  institution: z.string().describe("School/university name"),
  degree: z.string().describe("Degree or qualification"),
  year: z.string().describe("Graduation year or date range"),
});

/**
 * Certification entry schema
 */
export const CertificationSchema = z.object({
  name: z.string().describe("Certification name"),
  issuer: z.string().describe("Issuing organization"),
  year: z.string().describe("Year obtained"),
});

/**
 * Full CV Parsing Schema
 * Note: Optional contact fields use .default("") to handle missing data gracefully
 */
export const ParsedCVSchema = z.object({
  name: z.string().default("").describe("Full name of the candidate"),
  title: z.string().default("").describe("Professional title or current role"),
  email: z.string().default("").describe("Email address"),
  phone: z.string().default("").describe("Phone number"),
  location: z.string().default("").describe("Location/address"),
  website: z.string().default("").describe("Personal website URL"),
  linkedin: z.string().default("").describe("LinkedIn profile URL"),
  github: z.string().default("").describe("GitHub profile URL"),
  summary: z.string().default("").describe("Professional summary or objective"),
  experience: z.array(ExperienceSchema).default([]).describe("Work experience entries"),
  education: z.array(EducationSchema).default([]).describe("Education entries"),
  certifications: z.array(CertificationSchema).default([]).describe("Certifications"),
  skills: z.array(z.string()).default([]).describe("Technical and professional skills"),
  strengths: z.array(z.string()).default([]).describe("Key strengths or competencies"),
});

export type ParsedCVResult = z.infer<typeof ParsedCVSchema>;

// ============================================================================
// HELPER: Parse and Repair JSON
// ============================================================================

function repairAndParseJSON(text: string): unknown {
  let cleanedText = text.trim();
  
  if (cleanedText.startsWith("```json")) {
    cleanedText = cleanedText.slice(7);
  } else if (cleanedText.startsWith("```")) {
    cleanedText = cleanedText.slice(3);
  }
  if (cleanedText.endsWith("```")) {
    cleanedText = cleanedText.slice(0, -3);
  }
  cleanedText = cleanedText.trim();
  
  try {
    return JSON.parse(cleanedText);
  } catch {
    cleanedText = cleanedText
      .replace(/,(\s*[}\]])/g, '$1')
      .replace(/([{,]\s*)(\w+)(\s*:)/g, '$1"$2"$3');
    
    return JSON.parse(cleanedText);
  }
}

// ============================================================================
// LANGCHAIN-STYLE CV PARSER CLASS
// ============================================================================

/**
 * CV Parser with Zod-validated structured output
 * Uses Google GenAI SDK with user's API key or Replit's Gemini integration
 */
export class LangChainCVParser {
  private ai: GoogleGenAI;
  
  constructor() {
    const userApiKey = process.env.GOOGLE_API_KEY;
    const replitApiKey = process.env.AI_INTEGRATIONS_GEMINI_API_KEY;
    const baseUrl = process.env.AI_INTEGRATIONS_GEMINI_BASE_URL;
    
    if (userApiKey) {
      this.ai = new GoogleGenAI({
        apiKey: userApiKey,
      });
    } else if (replitApiKey) {
      this.ai = new GoogleGenAI({
        apiKey: replitApiKey,
        httpOptions: {
          apiVersion: "",
          baseUrl: baseUrl || undefined,
        },
      });
    } else {
      throw new Error("No Gemini API key configured (GOOGLE_API_KEY or AI_INTEGRATIONS_GEMINI_API_KEY)");
    }
  }
  
  /**
   * Parse raw CV text into structured data with Zod validation
   * @param rawText - Raw text extracted from CV document
   * @returns Structured CV data validated by Zod
   */
  async parseCV(rawText: string): Promise<{ data: ParsedCVResult; tokenUsage: { promptTokens: number; completionTokens: number; totalTokens: number } }> {
    const prompt = this.buildParsingPrompt(rawText);
    
    const response = await this.ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
      config: {
        maxOutputTokens: 8000,
        temperature: 0.1,
      },
    });
    
    const responseText = response.text?.trim() || "";
    
    if (!responseText) {
      throw new Error("Empty response from AI");
    }
    
    const parsed = repairAndParseJSON(responseText);
    const validated = ParsedCVSchema.parse(parsed);
    
    const tokenUsage = {
      promptTokens: response.usageMetadata?.promptTokenCount || 0,
      completionTokens: response.usageMetadata?.candidatesTokenCount || 0,
      totalTokens: response.usageMetadata?.totalTokenCount || 0,
    };
    
    return { data: validated, tokenUsage };
  }
  
  /**
   * Build the CV parsing prompt requesting JSON output
   */
  private buildParsingPrompt(rawText: string): string {
    return `You are a CV/Resume parser. Extract structured information from the following CV text.
Return your extraction as a valid JSON object matching this exact structure.

CV TEXT:
${rawText}

RESPONSE FORMAT - Return this exact JSON structure:
{
  "name": "<full name>",
  "title": "<professional title or current role>",
  "email": "<email address or empty string>",
  "phone": "<phone number or empty string>",
  "location": "<location/city or empty string>",
  "website": "<personal website URL or empty string>",
  "linkedin": "<LinkedIn URL or empty string>",
  "github": "<GitHub URL or empty string>",
  "summary": "<professional summary or objective>",
  "experience": [
    {
      "company": "<company name>",
      "role": "<job title>",
      "duration": "<date range, e.g., 'Jan 2020 - Present'>",
      "description": "<job description and achievements>",
      "location": "<work location or empty string>"
    }
  ],
  "education": [
    {
      "institution": "<school/university name>",
      "degree": "<degree or qualification>",
      "year": "<graduation year or date range>"
    }
  ],
  "certifications": [
    {
      "name": "<certification name>",
      "issuer": "<issuing organization>",
      "year": "<year obtained>"
    }
  ],
  "skills": ["<skill1>", "<skill2>", "..."],
  "strengths": ["<strength1>", "<strength2>", "..."]
}

EXTRACTION RULES:
1. Return ONLY the JSON object, no markdown code blocks
2. Use empty string "" for missing fields, not null
3. Extract skills ONLY from explicit Skills sections - do not infer or add skills
4. Preserve original text as much as possible
5. For experience, extract all work history entries found
6. For education, extract all educational qualifications
7. If no certifications found, return empty array []
8. If no strengths section exists, extract key competencies mentioned or return empty array

Parse the CV and return the structured JSON.`;
  }
}

// ============================================================================
// SINGLETON & CONVENIENCE FUNCTIONS
// ============================================================================

let parserInstance: LangChainCVParser | null = null;

export function getParser(): LangChainCVParser {
  if (!parserInstance) {
    parserInstance = new LangChainCVParser();
  }
  return parserInstance;
}

/**
 * Parse CV using LangChain-style structured output (convenience function)
 */
export async function parseCVWithLangChain(rawText: string): Promise<{ data: ParsedCVResult; tokenUsage: { promptTokens: number; completionTokens: number; totalTokens: number } }> {
  const parser = getParser();
  return parser.parseCV(rawText);
}
