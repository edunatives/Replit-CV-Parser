/**
 * @fileoverview LangChain-style CV Assessment Module
 * @description Uses Google GenAI SDK with Zod for structured output parsing.
 * Provides reliable JSON parsing through Zod validation.
 * Uses Replit's Gemini integration with custom base URL.
 */

import { GoogleGenAI } from "@google/genai";
import { z } from "zod";

// ============================================================================
// ZOD SCHEMAS (Pydantic-equivalent for JavaScript)
// ============================================================================

/**
 * Schema for forensic highlight annotations
 */
export const ForensicHighlightSchema = z.object({
  snippet: z.string().describe("The exact text snippet from the CV"),
  type: z.enum(["red", "green", "yellow"]).describe("Highlight type: red=issue, green=strength, yellow=caution"),
  comment: z.string().describe("Brief explanation of the highlight"),
});

/**
 * Schema for section scores
 */
export const SectionScoreSchema = z.object({
  name: z.string().describe("Section name"),
  score: z.number().min(0).max(100).describe("Section score 0-100"),
  feedback: z.string().describe("Specific feedback for this section"),
});

/**
 * Schema for category scores (v2.11)
 */
export const CategoryScoreSchema = z.object({
  category: z.string().describe("Category name"),
  score: z.number().min(0).max(100).describe("Category score 0-100"),
  weight: z.number().describe("Weight multiplier"),
  weighted_contribution: z.number().describe("Score * weight contribution"),
  feedback: z.string().describe("Specific feedback"),
  issues: z.array(z.string()).optional().describe("List of specific issues found"),
});

/**
 * Schema for improvement suggestions
 */
export const ImprovementSchema = z.object({
  priority: z.enum(["high", "medium", "low"]).describe("Priority level"),
  category: z.string().describe("Which category this affects"),
  suggestion: z.string().describe("The improvement suggestion"),
  impact: z.string().describe("Expected impact if implemented"),
});

/**
 * Full CV Assessment Schema (v2.11 format)
 */
export const CVAssessmentSchema = z.object({
  overallScore: z.number().min(0).max(100).describe("Overall CV quality score 0-100"),
  level: z.enum(["Exceptional", "Strong", "Good", "Fair", "Needs Work"]).describe("Quality level"),
  inflation: z.boolean().describe("True if claims appear inflated or exaggerated"),
  verdict: z.string().describe("2-3 sentence summary of the CV quality"),
  
  categories: z.array(CategoryScoreSchema).describe("Detailed category breakdown"),
  
  strengths: z.array(z.string()).min(1).max(5).describe("Top 3-5 CV strengths"),
  weaknesses: z.array(z.string()).min(1).max(5).describe("Top 3-5 CV weaknesses"),
  recommendations: z.array(ImprovementSchema).min(1).max(5).describe("Priority-ranked improvements"),
  
  highlights: z.array(ForensicHighlightSchema).describe("Text snippets for inline highlighting"),
  
  studentAdvice: z.object({
    headline: z.string().describe("One-line summary for the candidate"),
    quickWins: z.array(z.string()).describe("Easy fixes they can do today"),
    longTermPath: z.string().describe("6-12 month improvement strategy"),
  }).optional().describe("Student-friendly advice section"),
});

export type CVAssessment = z.infer<typeof CVAssessmentSchema>;
export type ForensicHighlight = z.infer<typeof ForensicHighlightSchema>;
export type CategoryScore = z.infer<typeof CategoryScoreSchema>;
export type Improvement = z.infer<typeof ImprovementSchema>;

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
// LANGCHAIN-STYLE ASSESSOR CLASS
// ============================================================================

/**
 * CV Assessor with Zod-validated structured output
 * Uses Google GenAI SDK with Replit's Gemini integration
 */
export class LangChainAssessor {
  private ai: GoogleGenAI;
  
  constructor() {
    const apiKey = process.env.AI_INTEGRATIONS_GEMINI_API_KEY;
    const baseUrl = process.env.AI_INTEGRATIONS_GEMINI_BASE_URL;
    
    if (!apiKey) {
      throw new Error("AI_INTEGRATIONS_GEMINI_API_KEY not configured");
    }
    
    this.ai = new GoogleGenAI({
      apiKey,
      httpOptions: {
        apiVersion: "",
        baseUrl: baseUrl || undefined,
      },
    });
  }
  
  /**
   * Assess a CV using structured output with Zod validation
   * @param cvSummary - Formatted CV text summary
   * @param filename - Original filename for context
   * @returns Structured CV assessment validated by Zod
   */
  async assessCV(cvSummary: string, filename: string): Promise<CVAssessment> {
    const prompt = this.buildAssessmentPrompt(cvSummary, filename);
    
    const response = await this.ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
      config: {
        maxOutputTokens: 16000,
        temperature: 0.3,
      },
    });
    
    const responseText = response.text?.trim() || "";
    
    if (!responseText) {
      throw new Error("Empty response from AI");
    }
    
    const parsed = repairAndParseJSON(responseText);
    const validated = CVAssessmentSchema.parse(parsed);
    
    return validated;
  }
  
  /**
   * Build the assessment prompt requesting JSON output
   */
  private buildAssessmentPrompt(cvSummary: string, filename: string): string {
    return `You are a Forensic CV Auditor v2.11. Analyze this CV with brutal honesty.
Return your analysis as a valid JSON object matching this exact structure.

DOCUMENT: ${filename}

CV CONTENT:
${cvSummary}

SCORING RUBRIC (must use these weights):
1. Contact & LinkedIn (10%): Complete info, professional email, LinkedIn URL
2. Summary/Objective (15%): Clear value proposition, no clichés
3. Work Experience (30%): Quantified achievements, STAR format, career progression
4. Education & Certifications (15%): Relevant degrees, certifications, courses
5. Skills & Technologies (15%): Industry-relevant, balanced hard/soft skills
6. Formatting & Structure (15%): Consistent style, ATS-friendly, scannable

RESPONSE FORMAT - Return this exact JSON structure:
{
  "overallScore": <number 0-100>,
  "level": "<Exceptional|Strong|Good|Fair|Needs Work>",
  "inflation": <true|false>,
  "verdict": "<2-3 sentence summary>",
  "categories": [
    {
      "category": "<category name>",
      "score": <number 0-100>,
      "weight": <decimal weight>,
      "weighted_contribution": <score * weight>,
      "feedback": "<specific feedback>",
      "issues": ["<issue 1>", "<issue 2>"]
    }
  ],
  "strengths": ["<strength 1>", "<strength 2>", "<strength 3>"],
  "weaknesses": ["<weakness 1>", "<weakness 2>", "<weakness 3>"],
  "recommendations": [
    {
      "priority": "<high|medium|low>",
      "category": "<affected category>",
      "suggestion": "<what to do>",
      "impact": "<expected result>"
    }
  ],
  "highlights": [
    {
      "snippet": "<exact text from CV>",
      "type": "<red|green|yellow>",
      "comment": "<brief explanation>"
    }
  ],
  "studentAdvice": {
    "headline": "<one-line summary>",
    "quickWins": ["<easy fix 1>", "<easy fix 2>"],
    "longTermPath": "<6-12 month strategy>"
  }
}

IMPORTANT:
- Return ONLY the JSON object, no markdown code blocks
- Ensure all JSON is valid with proper quotes and commas
- Skills should only come from explicit Skills sections in the CV
- Be honest but constructive in feedback`;
  }
}

// ============================================================================
// SINGLETON & CONVENIENCE FUNCTIONS
// ============================================================================

let assessorInstance: LangChainAssessor | null = null;

export function getAssessor(): LangChainAssessor {
  if (!assessorInstance) {
    assessorInstance = new LangChainAssessor();
  }
  return assessorInstance;
}

/**
 * Assess CV using LangChain-style structured output (convenience function)
 */
export async function assessCVWithLangChain(
  cvSummary: string, 
  filename: string
): Promise<CVAssessment> {
  const assessor = getAssessor();
  return assessor.assessCV(cvSummary, filename);
}
