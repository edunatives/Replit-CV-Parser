/**
 * @fileoverview CV Parsing Engine
 * @description Core parsing module for extracting structured data from CV documents.
 * Supports PDF, DOCX, DOC, and TXT file formats.
 * Uses AI-powered extraction (Gemini 2.5 Flash) with regex-based fallback.
 * 
 * @exports parseCV - Main parsing function
 * 
 * @example
 * const buffer = fs.readFileSync('resume.pdf');
 * const { cv, rawText } = await parseCV(buffer, 'resume.pdf', 'file-123');
 */

import type { ParsedCV, Experience, Education, Certification, TokenUsage } from "@/types/cv";
import {
  normalizeText,
  normalizeWhitespace,
  generateStableId,
  normalizeDateRange,
  normalizeEmail,
  normalizePhone,
  normalizeUrl,
  normalizeSkills,
  validateAndNormalizeCV,
} from "./normalize";
import { GoogleGenAI } from "@google/genai";

type PdfParseResult = { text: string; numpages: number };

/**
 * Parse PDF file buffer using pdf-parse v2 API
 * @internal
 * @param {Buffer} buffer - PDF file buffer
 * @returns {Promise<PdfParseResult>} Extracted text and page count
 */
async function parsePdfBuffer(buffer: Buffer): Promise<PdfParseResult> {
  const pdfModule = await import("pdf-parse");
  const PDFParse = pdfModule.PDFParse;
  
  if (!PDFParse) {
    throw new Error("PDFParse class not found in pdf-parse module");
  }
  
  const parser = new PDFParse({ data: buffer, verbosity: 0 });
  const result = await parser.getText();
  
  await parser.destroy();
  
  return { text: result.text || "", numpages: result.total || 1 };
}

/**
 * Parse Word document (DOCX) buffer using mammoth
 * @internal
 * @param {Buffer} buffer - DOCX file buffer
 * @returns {Promise<string>} Extracted text content
 */
async function parseDocxBuffer(buffer: Buffer): Promise<string> {
  const mammothModule = await import("mammoth");
  const mammoth = mammothModule.default ?? mammothModule;
  const result = await mammoth.extractRawText({ buffer });
  return result.value;
}

interface GeminiCVResponse {
  name: string;
  title: string;
  email: string;
  phone: string;
  location: string;
  website: string;
  linkedin: string;
  github: string;
  summary: string;
  experience: Array<{
    company: string;
    role: string;
    duration: string;
    description: string;
  }>;
  education: Array<{
    institution: string;
    degree: string;
    year: string;
  }>;
  certifications: Array<{
    name: string;
    issuer: string;
    year: string;
  }>;
  skills: string[];
}

interface GeminiExtractionResult {
  data: GeminiCVResponse;
  tokenUsage: TokenUsage;
}

/**
 * Extract structured CV data using Gemini 2.5 Flash AI
 * Sends CV text to Gemini for intelligent parsing and returns structured JSON
 * 
 * @internal
 * @param {string} text - Raw text extracted from CV document
 * @returns {Promise<GeminiExtractionResult | null>} Parsed data with token usage, or null if AI unavailable
 */
async function extractWithGemini(text: string): Promise<GeminiExtractionResult | null> {
  const apiKey = process.env.AI_INTEGRATIONS_GEMINI_API_KEY;
  const baseUrl = process.env.AI_INTEGRATIONS_GEMINI_BASE_URL;
  
  if (!apiKey) {
    console.log("Gemini API key not available, falling back to regex extraction");
    return null;
  }

  try {
    const ai = new GoogleGenAI({
      apiKey,
      httpOptions: {
        apiVersion: "",
        baseUrl: baseUrl,
      },
    });

    const prompt = `You are an expert CV/Resume parser. Extract structured information from the following CV text and return it as a valid JSON object.

IMPORTANT: Return ONLY a valid JSON object, no markdown formatting, no code blocks, no explanations.

Extract the following fields:
- name: Full name of the candidate
- title: Professional title or current job title
- email: Email address
- phone: Phone number (include country code if present)
- location: City, State/Country
- website: Personal website URL (not LinkedIn or GitHub)
- linkedin: LinkedIn profile URL or username
- github: GitHub profile URL or username
- summary: Professional summary or objective (combine multiple paragraphs if needed)
- experience: Array of work experiences, each with:
  - company: Company name
  - role: Job title/role
  - duration: Date range (e.g., "Jan 2020 - Present")
  - description: Key responsibilities and achievements. IMPORTANT: Preserve bullet points using "• " prefix and separate each bullet with a newline character. Example format: "• Led team of 5 engineers\n• Increased revenue by 20%\n• Implemented CI/CD pipeline"
- education: Array of education entries, each with:
  - institution: School/University name
  - degree: Degree type and field (e.g., "Bachelor of Science in Computer Science")
  - year: Graduation year or date range
- certifications: Array of certifications, each with:
  - name: Certification name
  - issuer: Issuing organization
  - year: Year obtained
- skills: Array of technical and soft skills as strings

If a field is not found in the CV, use an empty string for text fields or an empty array for array fields.

CV TEXT:
${text}

Return ONLY the JSON object:`;

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
    });

    const responseText = response.text?.trim() || "";
    
    // Extract token usage from response metadata
    const usageMetadata = response.usageMetadata;
    const tokenUsage: TokenUsage = {
      promptTokens: usageMetadata?.promptTokenCount || 0,
      completionTokens: usageMetadata?.candidatesTokenCount || 0,
      totalTokens: usageMetadata?.totalTokenCount || 0,
    };
    
    console.log(`Gemini token usage - Prompt: ${tokenUsage.promptTokens}, Completion: ${tokenUsage.completionTokens}, Total: ${tokenUsage.totalTokens}`);
    
    // Clean up response - remove markdown code blocks if present
    let jsonText = responseText;
    if (jsonText.startsWith("```json")) {
      jsonText = jsonText.slice(7);
    } else if (jsonText.startsWith("```")) {
      jsonText = jsonText.slice(3);
    }
    if (jsonText.endsWith("```")) {
      jsonText = jsonText.slice(0, -3);
    }
    jsonText = jsonText.trim();

    const parsed = JSON.parse(jsonText) as GeminiCVResponse;
    console.log("Gemini extraction successful");
    return { data: parsed, tokenUsage };
  } catch (error) {
    console.error("Gemini extraction error:", error);
    return null;
  }
}

// Fallback regex-based extraction (commented out AI, using basic regex)
const EMAIL_REGEX = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g;
const PHONE_PATTERNS = [
  /\+?\d{1,4}[-.\s]?\(?\d{1,4}\)?[-.\s]?\d{1,4}[-.\s]?\d{1,9}/g,
  /(?:\+?1[-.\s]?)?\(?[0-9]{3}\)?[-.\s]?[0-9]{3}[-.\s]?[0-9]{4}/g,
];
const LINKEDIN_REGEX = /(?:https?:\/\/)?(?:www\.)?linkedin\.com\/in\/([a-zA-Z0-9_-]+)/i;
const GITHUB_REGEX = /(?:https?:\/\/)?(?:www\.)?github\.com\/([a-zA-Z0-9_-]+)/i;

function extractEmailFallback(text: string): string {
  const matches = text.match(EMAIL_REGEX);
  return matches ? normalizeEmail(matches[0]) : "";
}

function extractPhoneFallback(text: string): string {
  for (const pattern of PHONE_PATTERNS) {
    const matches = text.match(pattern);
    if (matches) {
      const phone = matches[0].trim();
      if (phone.length >= 8 && phone.length <= 20) {
        return normalizePhone(phone);
      }
    }
  }
  return "";
}

function extractLinkedInFallback(text: string): string {
  const match = text.match(LINKEDIN_REGEX);
  return match ? `linkedin.com/in/${match[1]}` : "";
}

function extractGithubFallback(text: string): string {
  const match = text.match(GITHUB_REGEX);
  return match && match[1] !== "in" && match[1] !== "www" ? `github.com/${match[1]}` : "";
}

function extractNameFallback(text: string): string {
  const lines = text.split("\n").map(l => l.trim()).filter(l => l.length > 0);
  
  const skipPatterns = [
    /^(resume|cv|curriculum|vitae|profile|contact|email|phone|address)/i,
    /[@\d]/,
    /\.(com|org|net|edu)/i,
  ];
  
  for (const line of lines.slice(0, 8)) {
    if (line.length < 3 || line.length > 60) continue;
    if (skipPatterns.some(p => p.test(line))) continue;
    
    const words = line.split(/\s+/).filter(w => w.length > 0);
    if (words.length >= 2 && words.length <= 5) {
      const allCapitalized = words.every(w => /^[A-Z]/.test(w));
      const noSymbols = words.every(w => /^[A-Za-z'-]+$/.test(w));
      if (allCapitalized && noSymbols) {
        return normalizeWhitespace(line);
      }
    }
  }
  
  return "";
}

/**
 * Parse a CV file and extract structured data
 * Main entry point for CV parsing. Supports PDF, DOCX, DOC, and TXT formats.
 * Uses Gemini AI for intelligent extraction with regex-based fallback.
 * 
 * @param {Buffer} buffer - File buffer containing CV content
 * @param {string} fileName - Original filename (used for format detection)
 * @param {string} fileId - Unique identifier for this CV
 * @returns {Promise<{cv: ParsedCV, rawText: string}>} Parsed CV data and raw extracted text
 * 
 * @example
 * const buffer = await readFile('resume.pdf');
 * const { cv, rawText } = await parseCV(buffer, 'resume.pdf', 'file-123');
 * console.log(cv.name, cv.email, cv.skills);
 * 
 * @throws {Error} PDF text extraction fails with insufficient content (<50 chars)
 */
export async function parseCV(buffer: Buffer, fileName: string, fileId: string): Promise<{ cv: ParsedCV; rawText: string }> {
  let text = "";
  
  const extension = fileName.toLowerCase().split(".").pop();
  
  try {
    if (extension === "pdf") {
      console.log(`Parsing PDF: ${fileName}, size: ${buffer.length}`);
      const data = await parsePdfBuffer(buffer);
      text = normalizeText(data.text);
      console.log(`PDF parsed: ${text.length} chars, ${data.numpages} pages`);
      
      if (text.length < 50) {
        throw new Error(`PDF text extraction returned insufficient content (${text.length} chars)`);
      }
    } else if (extension === "docx" || extension === "doc") {
      console.log(`Parsing Word: ${fileName}, size: ${buffer.length}`);
      text = normalizeText(await parseDocxBuffer(buffer));
      console.log(`Word parsed: ${text.length} chars`);
    } else {
      console.log(`Parsing text: ${fileName}`);
      text = normalizeText(buffer.toString("utf-8"));
    }
  } catch (error) {
    console.error(`Parse error for ${fileName}:`, error);
    
    if (extension === "pdf") {
      throw new Error(`Failed to extract text from PDF: ${error instanceof Error ? error.message : "Unknown error"}`);
    }
    
    text = normalizeText(buffer.toString("utf-8"));
  }
  
  // Try Gemini AI extraction first
  const geminiResult = await extractWithGemini(text);
  
  let rawCv: ParsedCV;
  let tokenUsage: TokenUsage | undefined;
  
  if (geminiResult) {
    const geminiData = geminiResult.data;
    tokenUsage = geminiResult.tokenUsage;
    
    // Use Gemini-extracted data
    rawCv = {
      id: fileId,
      name: normalizeWhitespace(geminiData.name || ""),
      title: normalizeWhitespace(geminiData.title || ""),
      email: normalizeEmail(geminiData.email || ""),
      phone: normalizePhone(geminiData.phone || ""),
      location: normalizeWhitespace(geminiData.location || ""),
      website: normalizeUrl(geminiData.website || ""),
      linkedin: geminiData.linkedin ? 
        (geminiData.linkedin.includes("linkedin.com") ? geminiData.linkedin : `linkedin.com/in/${geminiData.linkedin}`) : "",
      github: geminiData.github ?
        (geminiData.github.includes("github.com") ? geminiData.github : `github.com/${geminiData.github}`) : "",
      summary: normalizeWhitespace(geminiData.summary || ""),
      experience: (geminiData.experience || []).map((exp, i) => ({
        id: generateStableId("exp", i, fileId),
        company: normalizeWhitespace(exp.company || ""),
        role: normalizeWhitespace(exp.role || ""),
        duration: normalizeDateRange(exp.duration || ""),
        description: normalizeWhitespace(exp.description || ""),
      })),
      education: (geminiData.education || []).map((edu, i) => ({
        id: generateStableId("edu", i, fileId),
        institution: normalizeWhitespace(edu.institution || ""),
        degree: normalizeWhitespace(edu.degree || ""),
        year: edu.year || "",
      })),
      certifications: (geminiData.certifications || []).map((cert, i) => ({
        id: generateStableId("cert", i, fileId),
        name: normalizeWhitespace(cert.name || ""),
        issuer: normalizeWhitespace(cert.issuer || ""),
        year: cert.year || "",
      })),
      skills: normalizeSkills(geminiData.skills || []),
      originalFilename: fileName,
      uploadedAt: new Date(),
      rawText: text,
      tokenUsage: tokenUsage,
    };
  } else {
    // Fallback to basic regex extraction
    console.log("Using fallback regex extraction");
    rawCv = {
      id: fileId,
      name: extractNameFallback(text),
      title: "",
      email: extractEmailFallback(text),
      phone: extractPhoneFallback(text),
      location: "",
      website: "",
      linkedin: extractLinkedInFallback(text),
      github: extractGithubFallback(text),
      summary: "",
      experience: [],
      education: [],
      certifications: [],
      skills: [],
      originalFilename: fileName,
      uploadedAt: new Date(),
      rawText: text,
    };
  }
  
  const cv = validateAndNormalizeCV(rawCv);
  
  return { cv, rawText: text };
}
