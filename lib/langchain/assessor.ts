/**
 * @fileoverview LangChain-based CV Assessment Module
 * @description Uses LangChain.js with Google Gemini and Zod for structured output parsing.
 * Provides reliable JSON parsing through LangChain's structured output features.
 */

import { ChatGoogleGenerativeAI } from "@langchain/google-genai";
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
// LANGCHAIN ASSESSOR CLASS
// ============================================================================

/**
 * LangChain-based CV Assessor with structured output
 */
export class LangChainAssessor {
  private model: ChatGoogleGenerativeAI;
  
  constructor() {
    const apiKey = process.env.AI_INTEGRATIONS_GEMINI_API_KEY;
    const baseUrl = process.env.AI_INTEGRATIONS_GEMINI_BASE_URL;
    
    if (!apiKey) {
      throw new Error("AI_INTEGRATIONS_GEMINI_API_KEY not configured");
    }
    
    this.model = new ChatGoogleGenerativeAI({
      model: "gemini-2.5-flash",
      apiKey,
      maxOutputTokens: 16000,
      temperature: 0.3,
      ...(baseUrl && { 
        configuration: { 
          baseURL: baseUrl 
        } 
      }),
    });
  }
  
  /**
   * Assess a CV using LangChain with structured output
   * @param cvSummary - Formatted CV text summary
   * @param filename - Original filename for context
   * @returns Structured CV assessment
   */
  async assessCV(cvSummary: string, filename: string): Promise<CVAssessment> {
    const structuredModel = this.model.withStructuredOutput(CVAssessmentSchema, {
      name: "cv_assessment",
    });
    
    const prompt = this.buildAssessmentPrompt(cvSummary, filename);
    
    const result = await structuredModel.invoke(prompt);
    
    return result;
  }
  
  /**
   * Build the assessment prompt
   */
  private buildAssessmentPrompt(cvSummary: string, filename: string): string {
    return `You are a Forensic CV Auditor v2.11. Analyze this CV with brutal honesty.

DOCUMENT: ${filename}

CV CONTENT:
${cvSummary}

SCORING RUBRIC (must use these weights):
1. Contact & LinkedIn (10%): Complete info, professional email, LinkedIn URL
2. Professional Summary (15%): Role-specific, achievement-focused, no fluff
3. Work Experience (30%): Quantified achievements, action verbs, relevant progression
4. Education (15%): Relevant degrees, certifications, GPA if strong
5. Skills (15%): Relevant technical/soft skills, properly categorized
6. Presentation (10%): Formatting, consistency, readability
7. ATS Compatibility (5%): Keywords, standard headings, parseable format

SCORING BANDS:
- 85-100: Exceptional - Ready for top-tier roles
- 70-84: Strong - Minor improvements needed
- 55-69: Good - Several areas need work
- 40-54: Fair - Significant improvements required
- 0-39: Needs Work - Major overhaul needed

RULES:
1. Be honest - don't inflate scores to be nice
2. Identify specific issues with exact CV text snippets
3. Prioritize actionable feedback
4. Flag any inflated claims or red flags
5. Skills must only come from explicit Skills sections - never infer or generate skills

Provide your structured assessment following the exact schema provided.`;
  }
}

/**
 * Create a singleton assessor instance
 */
let assessorInstance: LangChainAssessor | null = null;

export function getAssessor(): LangChainAssessor {
  if (!assessorInstance) {
    assessorInstance = new LangChainAssessor();
  }
  return assessorInstance;
}

/**
 * Assess CV using LangChain (convenience function)
 */
export async function assessCVWithLangChain(
  cvSummary: string, 
  filename: string
): Promise<CVAssessment> {
  const assessor = getAssessor();
  return assessor.assessCV(cvSummary, filename);
}
