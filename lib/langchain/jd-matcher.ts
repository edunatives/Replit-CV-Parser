/**
 * @fileoverview LangChain-based JD Match Module
 * @description Uses LangChain.js with Google Gemini and Zod for structured JD matching output.
 * Aligned with EnhancedJDMatchResult interface from types/cv.ts for compatibility.
 */

import { ChatGoogleGenerativeAI } from "@langchain/google-genai";
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
// LANGCHAIN JD MATCHER CLASS
// ============================================================================

/**
 * LangChain-based JD Matcher with structured output
 */
export class LangChainJDMatcher {
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
   * Match a CV against a job description using LangChain with structured output
   * @param cvSummary - Formatted CV text summary
   * @param jobDescription - The job description text
   * @returns Structured JD match result compatible with EnhancedJDMatchResult
   */
  async matchJD(cvSummary: string, jobDescription: string): Promise<EnhancedJDMatchResult> {
    const structuredModel = this.model.withStructuredOutput(EnhancedJDMatchResultSchema, {
      name: "jd_match_analysis",
    });
    
    const prompt = this.buildMatchPrompt(cvSummary, jobDescription);
    
    const result = await structuredModel.invoke(prompt);
    
    return result;
  }
  
  /**
   * Build the JD match prompt
   */
  private buildMatchPrompt(cvSummary: string, jobDescription: string): string {
    return `You are an expert JD Match Analyst. Analyze this CV against the job description thoroughly.

JOB DESCRIPTION:
${jobDescription}

CV CONTENT:
${cvSummary}

ANALYSIS REQUIREMENTS:

1. JD PARSING: Extract role_title, company, mandatory_skills, nice_to_have_skills

2. MATCH ANALYSIS: 
   - overall_match_score (0-100): Honest assessment
   - verdict: "Excellent Match" (85+), "Good Match" (70-84), "Partial Match" (55-69), "Limited Match" (<55)
   - matched_skills: Skills from CV that match JD
   - missing_skills: Required skills not in CV
   - experience_match: Score and feedback
   - education_match: Score and feedback
   - keyword_optimizations: Keywords to add
   - suggestions: Improvement tips

3. EVIDENCE MAP: For each JD requirement, provide cv_evidence and status (Match/Weak/Missing)

4. JD NATURE: Analyze role_level, domain_required, industry_preferred, education_required, years_required, work_arrangement, company_stage

5. EXPERIENCE FACTORS:
   - years_analysis: total_years, relevant_domain_years, recency_score, meets_requirement, student_message
   - depth_analysis: depth_level, scope_score, impact_score, complexity_handled, student_message
   - issues: List experience gaps with codes H1-H9

6. NATURE FIT:
   - overall_fit: Excellent/Good/Partial/Challenging
   - fit_score: 0-100
   - issues: List nature fit gaps with codes G1-G9
   - strengths: What makes this candidate strong

7. STUDENT SUMMARY:
   - headline: One-line encouraging summary
   - encouragement: Supportive message
   - quick_wins: 3-5 easy improvements

RULES:
- Be honest but encouraging
- Skills must only come from explicit Skills sections in the CV
- Provide specific, actionable feedback
- Use student-friendly language in messages

Provide your structured analysis following the exact schema provided.`;
  }
}

/**
 * Create a singleton matcher instance
 */
let matcherInstance: LangChainJDMatcher | null = null;

export function getMatcher(): LangChainJDMatcher {
  if (!matcherInstance) {
    matcherInstance = new LangChainJDMatcher();
  }
  return matcherInstance;
}

/**
 * Match JD using LangChain (convenience function)
 */
export async function matchJDWithLangChain(
  cvSummary: string, 
  jobDescription: string
): Promise<EnhancedJDMatchResult> {
  const matcher = getMatcher();
  return matcher.matchJD(cvSummary, jobDescription);
}
