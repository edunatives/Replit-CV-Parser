/**
 * @fileoverview LangChain-style JD Match Module
 * @description Uses Google GenAI SDK with Zod for structured JD matching output.
 * Aligned with EnhancedJDMatchResult interface from types/cv.ts for compatibility.
 * Uses Replit's Gemini integration with custom base URL.
 */

import { GoogleGenAI } from "@google/genai";
import { z } from "zod";

// ============================================================================
// ZOD SCHEMAS - Aligned with types/cv.ts
// ============================================================================

/**
 * JD Parsing Schema - matches JDParsing interface
 */
export const JDParsingSchema = z.object({
  role_title: z.string().describe("The job title from the JD"),
  company: z.string().describe("Company name if mentioned"),
  mandatory_skills: z.array(z.string()).describe("Must-have skills from the JD"),
  nice_to_have_skills: z.array(z.string()).describe("Nice-to-have skills from the JD"),
});

/**
 * Evidence Map Entry Schema - matches EvidenceMapEntry interface
 */
export const EvidenceMapEntrySchema = z.object({
  jd_requirement: z.string().describe("The JD requirement"),
  cv_evidence: z.string().describe("Evidence from CV"),
  status: z.enum(["Match", "Weak", "Missing"]).describe("Match status"),
});

/**
 * Match Analysis Schema - matches MatchAnalysis interface
 */
export const MatchAnalysisSchema = z.object({
  overall_match_score: z.number().min(0).max(100).describe("Overall match score 0-100"),
  verdict: z.enum(["Excellent Match", "Good Match", "Partial Match", "Limited Match"]).describe("Match verdict"),
  summary: z.string().describe("Summary of the match"),
  matched_skills: z.array(z.string()).describe("Skills that match"),
  missing_skills: z.array(z.string()).describe("Skills missing from CV"),
  experience_match: z.object({
    score: z.number().min(0).max(100).describe("Experience match score"),
    feedback: z.string().describe("Experience feedback"),
  }),
  education_match: z.object({
    score: z.number().min(0).max(100).describe("Education match score"),
    feedback: z.string().describe("Education feedback"),
  }),
  keyword_optimizations: z.array(z.string()).describe("Keywords to add to CV"),
  suggestions: z.array(z.string()).describe("Improvement suggestions"),
});

/**
 * JD Nature Schema - matches JDNature interface
 */
export const JDNatureSchema = z.object({
  role_level: z.enum(["Junior", "Mid", "Senior", "Lead", "Staff", "Principal", "Director", "VP", "C-Level"]).describe("Seniority level"),
  domain_required: z.string().describe("Primary domain required"),
  industry_preferred: z.string().nullable().describe("Preferred industry"),
  education_required: z.string().nullable().describe("Education requirement"),
  years_required: z.number().nullable().describe("Years of experience required"),
  work_arrangement: z.enum(["Remote", "On-site", "Hybrid", "Flexible"]).nullable().describe("Work arrangement"),
  company_stage: z.enum(["Startup", "Growth", "Enterprise"]).nullable().describe("Company stage"),
});

/**
 * Experience Factor Issue Schema - matches ExperienceFactorIssue interface
 */
export const ExperienceFactorIssueSchema = z.object({
  code: z.string().describe("Issue code (H1-H9)"),
  type: z.string().describe("Issue type"),
  message: z.string().describe("Student-friendly message"),
  cv_value: z.string().describe("What the CV shows"),
  jd_requirement: z.string().describe("What the JD requires"),
  gap_severity: z.enum(["minor", "moderate", "significant"]).describe("Gap severity"),
});

/**
 * Experience Years Analysis Schema - matches ExperienceYearsAnalysis interface
 */
export const ExperienceYearsAnalysisSchema = z.object({
  total_years: z.number().describe("Total years of experience"),
  relevant_domain_years: z.number().describe("Relevant domain years"),
  recency_score: z.number().min(0).max(100).describe("Recency score 0-100"),
  meets_requirement: z.boolean().describe("Meets years requirement"),
  student_message: z.string().describe("Student-friendly message"),
});

/**
 * Experience Depth Analysis Schema - matches ExperienceDepthAnalysis interface
 */
export const ExperienceDepthAnalysisSchema = z.object({
  depth_level: z.enum(["Entry", "Developing", "Proficient", "Expert"]).describe("Depth level"),
  scope_score: z.number().min(0).max(100).describe("Scope score 0-100"),
  impact_score: z.number().min(0).max(100).describe("Impact score 0-100"),
  complexity_handled: z.string().describe("Complexity level handled"),
  student_message: z.string().describe("Student-friendly message"),
});

/**
 * Nature Fit Issue Schema - matches NatureFitIssue interface
 */
export const NatureFitIssueSchema = z.object({
  code: z.string().describe("Issue code (G1-G9)"),
  type: z.string().describe("Issue type"),
  message: z.string().describe("Student-friendly message"),
  cv_nature: z.string().describe("CV nature"),
  jd_expects: z.string().describe("JD expectation"),
  transferable: z.boolean().describe("Is transferable"),
});

/**
 * Full Enhanced JD Match Result Schema - matches EnhancedJDMatchResult interface
 */
export const EnhancedJDMatchResultSchema = z.object({
  jd_parsing: JDParsingSchema,
  match_analysis: MatchAnalysisSchema,
  evidence_map: z.array(EvidenceMapEntrySchema).describe("Evidence mapping"),
  
  jd_nature: JDNatureSchema.optional().describe("JD nature analysis"),
  
  experience_factors: z.object({
    years_analysis: ExperienceYearsAnalysisSchema,
    depth_analysis: ExperienceDepthAnalysisSchema,
    issues: z.array(ExperienceFactorIssueSchema),
  }).optional().describe("Experience factors analysis"),
  
  nature_fit: z.object({
    overall_fit: z.enum(["Excellent", "Good", "Partial", "Challenging"]).describe("Overall fit"),
    fit_score: z.number().min(0).max(100).describe("Fit score 0-100"),
    issues: z.array(NatureFitIssueSchema),
    strengths: z.array(z.string()).describe("Identified strengths"),
  }).optional().describe("Nature fit analysis"),
  
  student_summary: z.object({
    headline: z.string().describe("One-line summary"),
    encouragement: z.string().describe("Encouraging message"),
    quick_wins: z.array(z.string()).describe("Quick improvements"),
  }).optional().describe("Student-friendly summary"),
});

export type EnhancedJDMatchResult = z.infer<typeof EnhancedJDMatchResultSchema>;

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
// LANGCHAIN-STYLE JD MATCHER CLASS
// ============================================================================

/**
 * JD Matcher with Zod-validated structured output
 * Uses Google GenAI SDK with Replit's Gemini integration
 */
export class LangChainJDMatcher {
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
   * Match a CV against a job description with Zod-validated output
   * @param cvSummary - Formatted CV text summary
   * @param jobDescription - The job description text
   * @returns Structured JD match result validated by Zod
   */
  async matchJD(cvSummary: string, jobDescription: string): Promise<EnhancedJDMatchResult> {
    const prompt = this.buildMatchPrompt(cvSummary, jobDescription);
    
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
    const validated = EnhancedJDMatchResultSchema.parse(parsed);
    
    return validated;
  }
  
  /**
   * Build the JD match prompt requesting JSON output
   */
  private buildMatchPrompt(cvSummary: string, jobDescription: string): string {
    return `You are an expert JD Match Analyst. Analyze this CV against the job description thoroughly.
Return your analysis as a valid JSON object matching this exact structure.

JOB DESCRIPTION:
${jobDescription}

CV CONTENT:
${cvSummary}

RESPONSE FORMAT - Return this exact JSON structure:
{
  "jd_parsing": {
    "role_title": "<job title>",
    "company": "<company name or 'Not specified'>",
    "mandatory_skills": ["<skill1>", "<skill2>"],
    "nice_to_have_skills": ["<skill1>", "<skill2>"]
  },
  "match_analysis": {
    "overall_match_score": <number 0-100>,
    "verdict": "<Excellent Match|Good Match|Partial Match|Limited Match>",
    "summary": "<match summary>",
    "matched_skills": ["<skill1>", "<skill2>"],
    "missing_skills": ["<skill1>", "<skill2>"],
    "experience_match": {
      "score": <number 0-100>,
      "feedback": "<experience feedback>"
    },
    "education_match": {
      "score": <number 0-100>,
      "feedback": "<education feedback>"
    },
    "keyword_optimizations": ["<keyword1>", "<keyword2>"],
    "suggestions": ["<suggestion1>", "<suggestion2>"]
  },
  "evidence_map": [
    {
      "jd_requirement": "<requirement>",
      "cv_evidence": "<evidence or 'Not found'>",
      "status": "<Match|Weak|Missing>"
    }
  ],
  "jd_nature": {
    "role_level": "<Junior|Mid|Senior|Lead|Staff|Principal|Director|VP|C-Level>",
    "domain_required": "<domain>",
    "industry_preferred": "<industry or null>",
    "education_required": "<education or null>",
    "years_required": <number or null>,
    "work_arrangement": "<Remote|On-site|Hybrid|Flexible or null>",
    "company_stage": "<Startup|Growth|Enterprise or null>"
  },
  "experience_factors": {
    "years_analysis": {
      "total_years": <number>,
      "relevant_domain_years": <number>,
      "recency_score": <number 0-100>,
      "meets_requirement": <true|false>,
      "student_message": "<encouraging message>"
    },
    "depth_analysis": {
      "depth_level": "<Entry|Developing|Proficient|Expert>",
      "scope_score": <number 0-100>,
      "impact_score": <number 0-100>,
      "complexity_handled": "<description>",
      "student_message": "<encouraging message>"
    },
    "issues": []
  },
  "nature_fit": {
    "overall_fit": "<Excellent|Good|Partial|Challenging>",
    "fit_score": <number 0-100>,
    "issues": [],
    "strengths": ["<strength1>", "<strength2>"]
  },
  "student_summary": {
    "headline": "<one-line encouraging summary>",
    "encouragement": "<supportive message>",
    "quick_wins": ["<improvement1>", "<improvement2>"]
  }
}

RULES:
- Return ONLY the JSON object, no markdown code blocks
- Ensure all JSON is valid with proper quotes and commas
- Be honest but encouraging
- Skills must only come from explicit Skills sections in the CV
- Use student-friendly language in messages

Provide your structured analysis.`;
  }
}

// ============================================================================
// SINGLETON & CONVENIENCE FUNCTIONS
// ============================================================================

let matcherInstance: LangChainJDMatcher | null = null;

export function getMatcher(): LangChainJDMatcher {
  if (!matcherInstance) {
    matcherInstance = new LangChainJDMatcher();
  }
  return matcherInstance;
}

/**
 * Match JD using structured output (convenience function)
 */
export async function matchJDWithLangChain(
  cvSummary: string, 
  jobDescription: string
): Promise<EnhancedJDMatchResult> {
  const matcher = getMatcher();
  return matcher.matchJD(cvSummary, jobDescription);
}
