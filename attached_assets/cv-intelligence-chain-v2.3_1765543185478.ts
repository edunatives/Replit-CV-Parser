/**
 * @fileoverview CV Intelligence Engine v2.3 - Main Chain
 * @description Unified chain for CV analysis with LITE/STANDARD/FULL output modes.
 * Compatible with Google GenAI SDK and proper LangChain patterns.
 */

import { GoogleGenAI } from "@google/genai";
import { z } from "zod";
import {
  OutputMode,
  AudienceType,
  LiteOutput,
  StandardOutput,
  FullOutput,
  AnalysisOutput,
  AnalysisRequest,
  AnalysisResponse,
  LiteOutputSchema,
  StandardOutputSchema,
  FullOutputSchema,
  scoreToGrade,
  scoreToRiskLevel,
} from "./cv-intelligence-schemas-v2.3";

// ============================================================================
// CONFIGURATION
// ============================================================================

interface ChainConfig {
  model?: string;
  temperature?: number;
  maxOutputTokens?: number;
  maxRetries?: number;
  retryDelayMs?: number;
}

const DEFAULT_CONFIG: Required<ChainConfig> = {
  model: "gemini-2.5-flash",
  temperature: 0.2,
  maxOutputTokens: 16000,
  maxRetries: 3,
  retryDelayMs: 1000,
};

// ============================================================================
// JSON REPAIR UTILITY
// ============================================================================

/**
 * Robust JSON parser with repair capabilities
 */
function repairAndParseJSON(text: string): unknown {
  let cleanedText = text.trim();
  
  // Remove markdown code blocks
  if (cleanedText.startsWith("```json")) {
    cleanedText = cleanedText.slice(7);
  } else if (cleanedText.startsWith("```")) {
    cleanedText = cleanedText.slice(3);
  }
  if (cleanedText.endsWith("```")) {
    cleanedText = cleanedText.slice(0, -3);
  }
  cleanedText = cleanedText.trim();
  
  // Try direct parse
  try {
    return JSON.parse(cleanedText);
  } catch {
    // Attempt repairs
  }
  
  // Repair common issues
  cleanedText = cleanedText
    // Remove trailing commas
    .replace(/,(\s*[}\]])/g, "$1")
    // Quote unquoted keys
    .replace(/([{,]\s*)(\w+)(\s*:)/g, '$1"$2"$3')
    // Fix single quotes
    .replace(/'/g, '"')
    // Remove control characters
    .replace(/[\x00-\x1F\x7F]/g, "");
  
  try {
    return JSON.parse(cleanedText);
  } catch (e) {
    // Last resort: try to find JSON object in string
    const match = cleanedText.match(/\{[\s\S]*\}/);
    if (match) {
      try {
        return JSON.parse(match[0]);
      } catch {
        throw new Error(`Failed to parse JSON: ${e}`);
      }
    }
    throw new Error(`Failed to parse JSON: ${e}`);
  }
}

// ============================================================================
// RETRY UTILITY
// ============================================================================

async function withRetry<T>(
  fn: () => Promise<T>,
  maxRetries: number,
  delayMs: number
): Promise<T> {
  let lastError: Error | undefined;
  
  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    try {
      return await fn();
    } catch (e) {
      lastError = e instanceof Error ? e : new Error(String(e));
      
      if (attempt < maxRetries) {
        const delay = delayMs * Math.pow(2, attempt - 1); // Exponential backoff
        console.warn(`Attempt ${attempt} failed, retrying in ${delay}ms...`);
        await new Promise(resolve => setTimeout(resolve, delay));
      }
    }
  }
  
  throw lastError;
}

// ============================================================================
// PROMPT BUILDERS
// ============================================================================

function buildSystemPrompt(): string {
  return `You are an expert CV Intelligence Analyst v2.3.

Your analysis must be:
1. HONEST - Never inflate scores to be nice
2. ACTIONABLE - Every issue needs a "how to fix"
3. SPECIFIC - Use exact quotes, numbers, and issue codes
4. BALANCED - Acknowledge strengths before issues

ISSUE CODES REFERENCE:
- A1-A13: ATS & Structure issues
- B1-B8: Content Realism issues
- C1-C6: Skill Validation codes
- D1-D8: Strength indicators
- E1-E6: Tone & Clarity issues
- F1-F5: Timeline issues
- G1-G9: Nature & Fit issues
- H1-H9: Experience Depth issues

SCORING RULES:
- Grade: A(90+), A-(85-89), B+(80-84), B(70-79), B-(65-69), C+(60-64), C(50-59), D(40-49), F(<40)
- TEI Scale: 1(Minimal), 2(Light), 3(Moderate), 4(Heavy), 5(Major Pivot)
- Apply hard gates: Missing >50% Tier 1 skills → Max 50, Domain gap >50% → Max 55

BULLET ANALYSIS (A10-A13):
- Strong verbs (100): Led, Delivered, Achieved, Built, Pioneered
- Moderate verbs (70): Supported, Contributed, Collaborated
- Weak verbs (40): Helped, Worked on, Was responsible for
- Optimal length: 15-30 words
- Require quantified results when possible

Always respond with valid JSON matching the requested output mode. No markdown formatting.`;
}

function buildUserPrompt(
  cvContent: string,
  jdContent: string | undefined,
  outputMode: OutputMode,
  audience: AudienceType
): string {
  let prompt = `## ANALYSIS REQUEST

**Output Mode**: ${outputMode}
**Audience**: ${audience}

## CV CONTENT
\`\`\`
${cvContent}
\`\`\`
`;

  if (jdContent) {
    prompt += `
## JOB DESCRIPTION
\`\`\`
${jdContent}
\`\`\`
`;
  }

  prompt += `
## OUTPUT FORMAT

Return valid JSON in ${outputMode} format:
`;

  if (outputMode === "LITE") {
    prompt += getLiteFormatInstructions(audience);
  } else if (outputMode === "STANDARD") {
    prompt += getStandardFormatInstructions(audience);
  } else {
    prompt += getFullFormatInstructions(audience);
  }

  return prompt;
}

function getLiteFormatInstructions(audience: AudienceType): string {
  return `{
  "version": "2.3-lite",
  "mode": "LITE",
  "audience": "${audience}",
  "generatedAt": "<ISO timestamp>",
  "candidate": "<Full Name>",
  "hasJd": <true|false>,
  "scores": {
    "overall": <0-100>,
    "grade": "<A|A-|B+|B|B-|C+|C|D|F>",
    "rawCompatibility": <0-100 or null if no JD>,
    "tei": <1-5 or null if no JD>,
    "candidateRisk": <0-100 or null>,
    "employerRisk": <0-100 or null>
  },
  "verdict": "<One sentence summary>",
  "topIssues": [
    {"code": "<A1-H9>", "issue": "<description>", "severity": "<high|medium|low>", "count": <N>}
  ],
  "topStrengths": [
    {"code": "<D1-D8>", "strength": "<description>"}
  ],
  "bestFitRole": "<Role (XX%)>" or null,
  "nextAction": "<Most important fix>"${audience === "HR" ? ',\n  "hireRecommendation": "<STRONG_HIRE|HIRE|CONDITIONAL_HIRE|NO_HIRE>"' : ''}
}`;
}

function getStandardFormatInstructions(audience: AudienceType): string {
  let format = `{
  "version": "2.3-standard",
  "mode": "STANDARD",
  "audience": "${audience}",
  "generatedAt": "<ISO timestamp>",
  "cvSummary": {
    "candidateName": "<name>",
    "totalYears": <N>,
    "currentRole": "<title>",
    "seniorityLevel": "<Entry|Mid|Senior|Lead|Principal|Director|VP|C-Level>",
    "topSkills": ["<skill1>", "<skill2>"],
    "certificationCount": <N>
  },
  "jdSummary": { // if JD provided
    "jobTitle": "<title>",
    "seniorityLevel": "<level>",
    "mustHaveSkills": ["<skill>"],
    "experienceRequired": "<X+ years>"
  },
  "scores": {
    "overall": <0-100>,
    "grade": "<grade>",
    "rawCompatibility": <0-100 or null>,
    "tei": <1-5 or null>,
    "candidateRisk": <0-100 or null>,
    "employerRisk": <0-100 or null>
  },
  "bulletHealth": {
    "averageScore": <0-100>,
    "excellent": <count>,
    "poor": <count>,
    "topIssue": "<description>",
    "topFix": "<action>"
  },
  "improvements": {
    "critical": ["<action1>", "<action2>"],
    "high": ["<action>"],
    "scorePotential": {"current": <N>, "afterFixes": <N>}
  },
  "verdict": "<Summary assessment>"`;

  if (audience === "STUDENT") {
    format += `,
  "alternativeRoles": [{"role": "<title>", "fitScore": <0-100>}],
  "nextSteps": ["<step1>", "<step2>"]`;
  } else {
    format += `,
  "riskLevel": "<LOW|MODERATE|HIGH|CRITICAL>",
  "hireRecommendation": "<STRONG_HIRE|HIRE|CONDITIONAL_HIRE|NO_HIRE>",
  "topVerificationItems": ["<item1>", "<item2>"]`;
  }

  format += "\n}";
  return format;
}

function getFullFormatInstructions(audience: AudienceType): string {
  return `Return comprehensive JSON with:
- cvAnalysis: Complete CV extraction with metadata, experience, skills, education, experienceFactors (H1-H9), bulletAnalysis (A10-A13), issuesDetected, strengthsDetected
- jdAnalysis: If JD provided, full requirements extraction
- ${audience === "STUDENT" ? "studentAnalysis" : "hrAnalysis"}: Audience-specific analysis with scores, improvements, and recommendations

Follow the v2.3 schema structure with all issue codes (A1-H9) and scoring formulas.`;
}

// ============================================================================
// OUTPUT TRANSFORMERS
// ============================================================================

function transformToLite(raw: unknown, audience: AudienceType): LiteOutput {
  const data = raw as Record<string, unknown>;
  
  // Try to validate directly
  const result = LiteOutputSchema.safeParse(data);
  if (result.success) {
    return result.data;
  }
  
  // Manual extraction with fallbacks
  const scores = (data.scores as Record<string, unknown>) || {};
  const overall = Number(scores.overall) || 70;
  
  return {
    version: "2.3-lite",
    mode: "LITE",
    audience,
    generatedAt: new Date().toISOString(),
    candidate: String(data.candidate || "Unknown"),
    hasJd: Boolean(data.hasJd),
    scores: {
      overall,
      grade: scoreToGrade(overall),
      rawCompatibility: scores.rawCompatibility != null ? Number(scores.rawCompatibility) : null,
      tei: scores.tei != null ? Number(scores.tei) as 1|2|3|4|5 : null,
      candidateRisk: scores.candidateRisk != null ? Number(scores.candidateRisk) : null,
      employerRisk: scores.employerRisk != null ? Number(scores.employerRisk) : null,
    },
    verdict: String(data.verdict || `Score: ${overall}/100`),
    topIssues: Array.isArray(data.topIssues) ? data.topIssues.slice(0, 3).map((i: any) => ({
      code: String(i.code || "A1"),
      issue: String(i.issue || "Unknown issue"),
      severity: (i.severity as "high"|"medium"|"low") || "medium",
      count: Number(i.count) || 1,
    })) : [],
    topStrengths: Array.isArray(data.topStrengths) ? data.topStrengths.slice(0, 3).map((s: any) => ({
      code: String(s.code || "D1"),
      strength: String(s.strength || "Unknown strength"),
    })) : [],
    bestFitRole: data.bestFitRole ? String(data.bestFitRole) : null,
    nextAction: String(data.nextAction || "Review and improve CV"),
    ...(audience === "HR" && data.hireRecommendation ? {
      hireRecommendation: data.hireRecommendation as "STRONG_HIRE"|"HIRE"|"CONDITIONAL_HIRE"|"NO_HIRE"
    } : {}),
  };
}

function transformToStandard(raw: unknown, audience: AudienceType): StandardOutput {
  const data = raw as Record<string, unknown>;
  
  // Try to validate directly
  const result = StandardOutputSchema.safeParse(data);
  if (result.success) {
    return result.data;
  }
  
  // Extract with fallbacks
  const lite = transformToLite(raw, audience);
  const cvSummary = (data.cvSummary as Record<string, unknown>) || {};
  const bulletHealth = (data.bulletHealth as Record<string, unknown>) || {};
  const improvements = (data.improvements as Record<string, unknown>) || {};
  
  return {
    version: "2.3-standard",
    mode: "STANDARD",
    audience,
    generatedAt: new Date().toISOString(),
    cvSummary: {
      candidateName: String(cvSummary.candidateName || lite.candidate),
      totalYears: Number(cvSummary.totalYears) || 0,
      currentRole: String(cvSummary.currentRole || "Unknown"),
      seniorityLevel: (cvSummary.seniorityLevel as any) || "Mid",
      topSkills: Array.isArray(cvSummary.topSkills) ? cvSummary.topSkills.map(String) : [],
      certificationCount: Number(cvSummary.certificationCount) || 0,
    },
    jdSummary: data.jdSummary ? {
      jobTitle: String((data.jdSummary as any).jobTitle || "Unknown"),
      seniorityLevel: ((data.jdSummary as any).seniorityLevel as any) || "Mid",
      mustHaveSkills: Array.isArray((data.jdSummary as any).mustHaveSkills) 
        ? (data.jdSummary as any).mustHaveSkills.map(String) : [],
      experienceRequired: String((data.jdSummary as any).experienceRequired || "Not specified"),
    } : undefined,
    scores: lite.scores,
    bulletHealth: {
      averageScore: Number(bulletHealth.averageScore) || 70,
      excellent: Number(bulletHealth.excellent) || 0,
      poor: Number(bulletHealth.poor) || 0,
      topIssue: String(bulletHealth.topIssue || "None identified"),
      topFix: String(bulletHealth.topFix || lite.nextAction),
    },
    improvements: {
      critical: Array.isArray(improvements.critical) ? improvements.critical.map(String) : [],
      high: Array.isArray(improvements.high) ? improvements.high.map(String) : [],
      scorePotential: {
        current: lite.scores.overall,
        afterFixes: Number((improvements.scorePotential as any)?.afterFixes) || lite.scores.overall + 10,
      },
    },
    verdict: lite.verdict,
    ...(audience === "STUDENT" ? {
      alternativeRoles: Array.isArray(data.alternativeRoles) 
        ? data.alternativeRoles.map((r: any) => ({
            role: String(r.role),
            fitScore: Number(r.fitScore),
          }))
        : [],
      nextSteps: Array.isArray(data.nextSteps) ? data.nextSteps.map(String) : [],
    } : {
      riskLevel: scoreToRiskLevel(lite.scores.employerRisk || 50),
      hireRecommendation: lite.hireRecommendation || "CONDITIONAL_HIRE",
      topVerificationItems: Array.isArray(data.topVerificationItems) 
        ? data.topVerificationItems.map(String) : [],
    }),
  } as StandardOutput;
}

function transformToFull(raw: unknown, audience: AudienceType): FullOutput {
  const data = raw as Record<string, unknown>;
  
  return {
    version: "2.3-full",
    mode: "FULL",
    audience,
    generatedAt: new Date().toISOString(),
    cvAnalysis: data.cvAnalysis || data.cv_analysis || {},
    jdAnalysis: data.jdAnalysis || data.jd_analysis,
    studentAnalysis: audience === "STUDENT" ? (data.studentAnalysis || data.student_analysis) : undefined,
    hrAnalysis: audience === "HR" ? (data.hrAnalysis || data.hr_analysis) : undefined,
  };
}

function transformOutput(
  raw: unknown,
  outputMode: OutputMode,
  audience: AudienceType
): AnalysisOutput {
  switch (outputMode) {
    case "LITE":
      return transformToLite(raw, audience);
    case "STANDARD":
      return transformToStandard(raw, audience);
    case "FULL":
      return transformToFull(raw, audience);
  }
}

// ============================================================================
// MAIN CHAIN CLASS
// ============================================================================

/**
 * CV Intelligence Chain v2.3
 * Supports LITE/STANDARD/FULL output modes and STUDENT/HR audiences
 */
export class CvIntelligenceChain {
  private ai: GoogleGenAI;
  private config: Required<ChainConfig>;
  
  constructor(config: ChainConfig = {}) {
    this.config = { ...DEFAULT_CONFIG, ...config };
    
    // Initialize Google GenAI
    const userApiKey = process.env.GOOGLE_API_KEY;
    const replitApiKey = process.env.AI_INTEGRATIONS_GEMINI_API_KEY;
    const baseUrl = process.env.AI_INTEGRATIONS_GEMINI_BASE_URL;
    
    if (userApiKey) {
      this.ai = new GoogleGenAI({ apiKey: userApiKey });
    } else if (replitApiKey) {
      this.ai = new GoogleGenAI({
        apiKey: replitApiKey,
        httpOptions: {
          apiVersion: "",
          baseUrl: baseUrl || undefined,
        },
      });
    } else {
      throw new Error("No API key configured (GOOGLE_API_KEY or AI_INTEGRATIONS_GEMINI_API_KEY)");
    }
  }
  
  /**
   * Analyze a CV with optional JD matching
   */
  async analyze(request: AnalysisRequest): Promise<AnalysisResponse> {
    const startTime = Date.now();
    
    const {
      cvContent,
      jdContent,
      outputMode = "STANDARD",
      audience = "STUDENT",
    } = request;
    
    try {
      const result = await withRetry(
        async () => {
          const systemPrompt = buildSystemPrompt();
          const userPrompt = buildUserPrompt(cvContent, jdContent, outputMode, audience);
          
          const response = await this.ai.models.generateContent({
            model: this.config.model,
            contents: `${systemPrompt}\n\n${userPrompt}`,
            config: {
              maxOutputTokens: this.config.maxOutputTokens,
              temperature: this.config.temperature,
            },
          });
          
          const responseText = response.text?.trim() || "";
          
          if (!responseText) {
            throw new Error("Empty response from AI");
          }
          
          const parsed = repairAndParseJSON(responseText);
          const transformed = transformOutput(parsed, outputMode, audience);
          
          return {
            data: transformed,
            tokensUsed: {
              input: response.usageMetadata?.promptTokenCount || 0,
              output: response.usageMetadata?.candidatesTokenCount || 0,
            },
          };
        },
        this.config.maxRetries,
        this.config.retryDelayMs
      );
      
      return {
        success: true,
        data: result.data,
        meta: {
          processingTimeMs: Date.now() - startTime,
          tokensUsed: result.tokensUsed,
          modelUsed: this.config.model,
        },
      };
      
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : "Unknown error";
      
      // Return fallback lite output
      const fallback = transformToLite({
        candidate: "Unknown",
        hasJd: !!jdContent,
        scores: { overall: 0 },
        verdict: `Analysis failed: ${errorMessage}`,
        topIssues: [],
        topStrengths: [],
        nextAction: "Retry analysis",
      }, audience);
      
      return {
        success: false,
        error: errorMessage,
        data: fallback,
        meta: {
          processingTimeMs: Date.now() - startTime,
          tokensUsed: { input: 0, output: 0 },
          modelUsed: this.config.model,
        },
      };
    }
  }
  
  /**
   * Quick CV quality check (LITE mode, no JD)
   */
  async quickCheck(cvContent: string): Promise<LiteOutput> {
    const response = await this.analyze({
      cvContent,
      outputMode: "LITE",
      audience: "STUDENT",
    });
    return response.data as LiteOutput;
  }
  
  /**
   * Full CV-JD match for candidates
   */
  async matchForCandidate(
    cvContent: string,
    jdContent: string,
    outputMode: OutputMode = "STANDARD"
  ): Promise<AnalysisResponse> {
    return this.analyze({
      cvContent,
      jdContent,
      outputMode,
      audience: "STUDENT",
    });
  }
  
  /**
   * Full CV-JD match for HR
   */
  async matchForHR(
    cvContent: string,
    jdContent: string,
    outputMode: OutputMode = "STANDARD"
  ): Promise<AnalysisResponse> {
    return this.analyze({
      cvContent,
      jdContent,
      outputMode,
      audience: "HR",
    });
  }
}

// ============================================================================
// SINGLETON & CONVENIENCE FUNCTIONS
// ============================================================================

let chainInstance: CvIntelligenceChain | null = null;

export function getChain(config?: ChainConfig): CvIntelligenceChain {
  if (!chainInstance) {
    chainInstance = new CvIntelligenceChain(config);
  }
  return chainInstance;
}

/**
 * Convenience function for quick CV analysis
 */
export async function analyzeCV(
  cvContent: string,
  options?: {
    jdContent?: string;
    outputMode?: OutputMode;
    audience?: AudienceType;
  }
): Promise<AnalysisResponse> {
  const chain = getChain();
  return chain.analyze({
    cvContent,
    jdContent: options?.jdContent,
    outputMode: options?.outputMode || "STANDARD",
    audience: options?.audience || "STUDENT",
  });
}

// ============================================================================
// EXPORTS
// ============================================================================

export {
  OutputMode,
  AudienceType,
  LiteOutput,
  StandardOutput,
  FullOutput,
  AnalysisOutput,
  AnalysisRequest,
  AnalysisResponse,
  ChainConfig,
};
