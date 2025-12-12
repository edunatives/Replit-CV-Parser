/**
 * @fileoverview LangChain-based JD Match Module
 * @description Uses LangChain.js with Google Gemini and Zod for structured JD matching output.
 * Implements v2.2 honest-first three-score system with reliable JSON parsing.
 */

import { ChatGoogleGenerativeAI } from "@langchain/google-genai";
import { z } from "zod";

// ============================================================================
// ZOD SCHEMAS FOR JD MATCH v2.2
// ============================================================================

/**
 * JD Parsing Schema - Extracted job requirements
 */
export const JDParsingSchema = z.object({
  role_title: z.string().describe("The job title from the JD"),
  company: z.string().describe("Company name if mentioned"),
  mandatory_skills: z.array(z.string()).describe("Must-have skills from the JD"),
  nice_to_have_skills: z.array(z.string()).describe("Nice-to-have skills from the JD"),
  years_required: z.number().nullable().describe("Years of experience required"),
  education_required: z.string().nullable().describe("Education requirement if specified"),
});

/**
 * JD Nature Schema - Role characteristics
 */
export const JDNatureSchema = z.object({
  role_level: z.enum(["Junior", "Mid", "Senior", "Lead", "Staff", "Principal", "Director", "VP", "C-Level"]).describe("Seniority level"),
  domain_required: z.string().describe("Primary domain/field required"),
  industry_preferred: z.string().nullable().describe("Preferred industry if specified"),
  education_required: z.string().nullable().describe("Education requirement"),
  years_required: z.number().nullable().describe("Years of experience required"),
  work_arrangement: z.enum(["Remote", "On-site", "Hybrid", "Flexible"]).nullable().describe("Work arrangement"),
  company_stage: z.enum(["Startup", "Growth", "Enterprise"]).nullable().describe("Company stage"),
});

/**
 * Component Score Schema - Individual scoring component
 */
export const ComponentScoreSchema = z.object({
  component: z.string().describe("Component name"),
  raw_score: z.number().min(0).max(100).describe("Raw score 0-100"),
  weight: z.number().describe("Weight multiplier (e.g., 0.25)"),
  weighted_contribution: z.number().describe("Score * weight"),
  status: z.enum(["exceeds", "strong", "good", "mismatch", "critical"]).describe("Status level"),
  feedback: z.string().describe("Specific feedback"),
});

/**
 * Transformation Gap Schema
 */
export const TransformationGapSchema = z.object({
  area: z.string().describe("Gap area"),
  points_deducted: z.number().describe("Points deducted for this gap"),
  fixable_by_cv: z.boolean().describe("Can be fixed by CV changes"),
  what_would_help: z.string().describe("What would actually help"),
});

/**
 * Transformation Effort Schema - TEI score
 */
export const TransformationEffortSchema = z.object({
  tei_score: z.number().min(1).max(5).describe("Transformation Effort Index 1-5"),
  tei_label: z.enum(["Minimal", "Low", "Moderate", "High", "Extensive"]).describe("TEI label"),
  timeline: z.string().describe("Estimated timeline to close gaps"),
  honest_assessment: z.string().describe("Honest assessment of transformation needed"),
  gap_breakdown: z.array(TransformationGapSchema).describe("Breakdown of gaps"),
});

/**
 * Risk Factor Schema
 */
export const RiskFactorSchema = z.object({
  factor: z.string().describe("Risk factor name"),
  score: z.number().min(0).max(100).describe("Risk score 0-100"),
  detail: z.string().describe("Detailed explanation"),
});

/**
 * Risk Assessment Schema - Dual risk view
 */
export const RiskAssessmentSchema = z.object({
  candidate_risk: z.object({
    score: z.number().min(0).max(100).describe("Overall candidate risk score"),
    level: z.enum(["Low", "Moderate", "High", "Critical"]).describe("Risk level"),
    factors: z.array(RiskFactorSchema).describe("Individual risk factors"),
  }),
  employer_risk: z.object({
    score: z.number().min(0).max(100).describe("Overall employer risk score"),
    level: z.enum(["Low", "Moderate", "High", "Critical"]).describe("Risk level"),
    factors: z.array(RiskFactorSchema).describe("Individual risk factors"),
  }),
});

/**
 * Better Fit Role Schema
 */
export const BetterFitRoleSchema = z.object({
  role: z.string().describe("Alternative role title"),
  fit_score: z.number().min(0).max(100).describe("Fit score for this role"),
  reason: z.string().describe("Why this role is a better fit"),
});

/**
 * Critical Gap Schema
 */
export const CriticalGapSchema = z.object({
  gap: z.string().describe("The gap description"),
  severity: z.enum(["minor", "moderate", "significant", "critical"]).describe("Gap severity"),
  you_have: z.string().describe("What the candidate has"),
  jd_requires: z.string().describe("What the JD requires"),
  fixable_by_cv: z.boolean().describe("Can be fixed by CV changes"),
  what_would_help: z.string().describe("What would actually help"),
});

/**
 * Honest Verdict Schema
 */
export const HonestVerdictSchema = z.object({
  headline: z.string().describe("One-line honest verdict"),
  reality_check: z.string().describe("Honest reality check message"),
  should_apply: z.boolean().describe("Whether candidate should apply"),
  success_probability: z.string().describe("Estimated success probability"),
});

/**
 * Student Guidance Schema
 */
export const StudentGuidanceSchema = z.object({
  if_dream_role: z.string().describe("Advice if this is their dream role"),
  if_practical: z.string().describe("Practical alternative advice"),
  quick_wins: z.array(z.string()).describe("Quick improvements they can make"),
  long_term_path: z.string().describe("6-12 month improvement strategy"),
});

/**
 * Real Options Schema
 */
export const RealOptionsSchema = z.object({
  apply_if: z.array(z.string()).describe("Conditions under which to apply"),
  dont_apply_if: z.array(z.string()).describe("Conditions under which not to apply"),
  bottom_line: z.object({
    recommendation: z.string().describe("Bottom line recommendation"),
    option_a: z.string().describe("First strategic option"),
    option_b: z.string().describe("Second strategic option"),
  }),
});

/**
 * Full JD Match Result Schema (v2.2)
 */
export const JDMatchResultSchema = z.object({
  jd_parsing: JDParsingSchema,
  jd_nature: JDNatureSchema,
  
  raw_compatibility_score: z.number().min(0).max(100).describe("Raw compatibility score 0-100"),
  raw_compatibility_grade: z.enum(["A", "B", "C", "D", "F"]).describe("Letter grade"),
  
  component_scores: z.array(ComponentScoreSchema).describe("Individual component scores"),
  
  matched_skills: z.array(z.string()).describe("Skills that match the JD"),
  missing_skills: z.array(z.string()).describe("Skills missing from CV"),
  
  transformation_effort: TransformationEffortSchema,
  risk_assessment: RiskAssessmentSchema,
  
  critical_gaps: z.array(CriticalGapSchema).describe("Critical gaps that cannot be fixed by CV"),
  
  honest_verdict: HonestVerdictSchema,
  
  better_fit_roles: z.array(BetterFitRoleSchema).describe("Alternative roles that might be better fits"),
  
  strengths_reality_check: z.array(z.object({
    strength: z.string(),
    reality: z.string(),
    transferable: z.boolean(),
  })).describe("Strengths with reality check"),
  
  student_guidance: StudentGuidanceSchema,
  real_options: RealOptionsSchema,
});

export type JDMatchResult = z.infer<typeof JDMatchResultSchema>;

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
   * @returns Structured JD match result
   */
  async matchJD(cvSummary: string, jobDescription: string): Promise<JDMatchResult> {
    const structuredModel = this.model.withStructuredOutput(JDMatchResultSchema, {
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
    return `You are an Honest JD Match Analyst v2.2. Analyze this CV against the job description with brutal honesty.

JOB DESCRIPTION:
${jobDescription}

CV CONTENT:
${cvSummary}

THREE-SCORE SYSTEM:
1. Raw Compatibility Score (0-100): Honest assessment of current fit
   - A (85-100): Exceptional match
   - B (70-84): Strong match
   - C (55-69): Partial match
   - D (40-54): Weak match
   - F (0-39): Poor match

2. Transformation Effort Index (TEI 1-5):
   - 1: Minimal - Ready now
   - 2: Low - Minor CV tweaks
   - 3: Moderate - Some skill building needed
   - 4: High - Significant gaps to close
   - 5: Extensive - Major career pivot required

3. Risk Level: Assess both candidate and employer risk

COMPONENT WEIGHTS:
- Must-Have Skills: 25%
- Domain Experience: 20%
- Depth/Scope: 15%
- Nature Fit: 15%
- Total Experience: 10%
- Should-Have Skills: 10%
- Nice-to-Have: 5%

HARD GATES (apply score caps):
- Missing >50% Tier 1 skills: Cap at 50
- Domain years <50% required: Cap at 55
- Seniority gap >2 levels: Cap at 45
- Education hard requirement not met: Cap at 40

RULES:
1. Be brutally honest - don't inflate to be nice
2. Identify REAL gaps, not just CV wording issues
3. Distinguish between fixable (CV changes) and real gaps (need actual experience)
4. Suggest better-fit roles if this isn't a good match
5. Provide actionable guidance for the candidate

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
): Promise<JDMatchResult> {
  const matcher = getMatcher();
  return matcher.matchJD(cvSummary, jobDescription);
}
