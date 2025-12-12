/**
 * CV Intelligence Engine v2.3 - Schemas
 * Pure v2.3 implementation - no legacy compatibility
 * 
 * @version 2.3.0
 * @file v23-cv-intelligence-schemas.ts
 */

import { z } from "zod";

// ============================================================================
// ENUMS
// ============================================================================

export const OutputModeEnum = z.enum(["LITE", "STANDARD", "FULL"]);
export const AudienceTypeEnum = z.enum(["STUDENT", "HR"]);
export const SeverityLevelEnum = z.enum(["info", "low", "medium", "high", "critical"]);
export const GradeEnum = z.enum(["A", "A-", "B+", "B", "B-", "C+", "C", "D", "F"]);
export const RiskLevelEnum = z.enum(["LOW", "MODERATE", "HIGH", "CRITICAL"]);
export const HireDecisionEnum = z.enum(["STRONG_HIRE", "HIRE", "CONDITIONAL_HIRE", "NO_HIRE"]);
export const SeniorityLevelEnum = z.enum(["Entry", "Mid", "Senior", "Lead", "Principal", "Director", "VP", "C-Level"]);

export type OutputMode = z.infer<typeof OutputModeEnum>;
export type AudienceType = z.infer<typeof AudienceTypeEnum>;
export type SeverityLevel = z.infer<typeof SeverityLevelEnum>;
export type Grade = z.infer<typeof GradeEnum>;
export type RiskLevel = z.infer<typeof RiskLevelEnum>;
export type HireDecision = z.infer<typeof HireDecisionEnum>;
export type SeniorityLevel = z.infer<typeof SeniorityLevelEnum>;

// ============================================================================
// CORE SCHEMAS
// ============================================================================

export const IssueSchema = z.object({
  code: z.string().describe("Issue code A1-H9"),
  issue: z.string().describe("Issue description"),
  severity: SeverityLevelEnum,
  count: z.number().default(1),
  fix: z.string().optional().describe("How to fix"),
});

export const StrengthSchema = z.object({
  code: z.string().describe("Strength code D1-D8"),
  strength: z.string().describe("Strength description"),
});

export const ScoresSchema = z.object({
  overall: z.number().min(0).max(100).describe("Overall CV quality 0-100"),
  grade: GradeEnum.describe("Letter grade A-F"),
  rawCompatibility: z.number().min(0).max(100).nullable().describe("JD match score (null if no JD)"),
  tei: z.number().min(1).max(5).nullable().describe("Transformation Effort Index 1-5"),
  candidateRisk: z.number().min(0).max(100).nullable().describe("Risk score for candidate"),
  employerRisk: z.number().min(0).max(100).nullable().describe("Risk score for employer"),
});

// ============================================================================
// LITE OUTPUT (~800 tokens)
// ============================================================================

export const LiteOutputSchema = z.object({
  version: z.literal("2.3"),
  mode: z.literal("LITE"),
  audience: AudienceTypeEnum,
  generatedAt: z.string(),
  
  candidate: z.string(),
  hasJd: z.boolean(),
  scores: ScoresSchema,
  verdict: z.string(),
  
  topIssues: z.array(IssueSchema).max(3),
  topStrengths: z.array(StrengthSchema).max(3),
  
  bestFitRole: z.string().nullable(),
  nextAction: z.string(),
  
  hireRecommendation: HireDecisionEnum.optional(),
});

// ============================================================================
// STANDARD OUTPUT (~2,500 tokens)
// ============================================================================

export const CvSummarySchema = z.object({
  candidateName: z.string(),
  totalYears: z.number(),
  currentRole: z.string(),
  seniorityLevel: SeniorityLevelEnum,
  topSkills: z.array(z.string()),
  certificationCount: z.number(),
});

export const JdSummarySchema = z.object({
  jobTitle: z.string(),
  company: z.string().nullable(),
  seniorityLevel: SeniorityLevelEnum,
  mustHaveSkills: z.array(z.string()),
  niceToHaveSkills: z.array(z.string()),
  experienceRequired: z.string(),
});

export const SkillMatchSchema = z.object({
  tier1: z.object({ matched: z.number(), total: z.number(), score: z.number() }),
  tier2: z.object({ matched: z.number(), total: z.number(), score: z.number() }),
  tier3: z.object({ matched: z.number(), total: z.number(), score: z.number() }),
  missingCritical: z.array(z.string()),
  ghostSkills: z.array(z.string()),
});

export const ExperienceMatchSchema = z.object({
  totalYearsMatch: z.boolean(),
  domainYearsMatch: z.boolean(),
  domainGap: z.string().nullable(),
  scopeMatch: z.boolean(),
});

export const BulletHealthSchema = z.object({
  totalBullets: z.number(),
  averageScore: z.number().min(0).max(100),
  distribution: z.object({
    excellent: z.number(),
    good: z.number(),
    fair: z.number(),
    poor: z.number(),
  }),
  topIssue: z.string(),
  topFix: z.string(),
});

export const ImprovementSchema = z.object({
  code: z.string(),
  priority: z.enum(["critical", "high", "medium", "low"]),
  action: z.string(),
  impact: z.string(),
  effort: z.string(),
});

export const ImprovementsSchema = z.object({
  critical: z.array(ImprovementSchema),
  high: z.array(ImprovementSchema),
  medium: z.array(ImprovementSchema),
  scorePotential: z.object({
    current: z.number(),
    afterCritical: z.number(),
    afterAll: z.number(),
    ceiling: z.number(),
  }),
});

export const AlternativeRoleSchema = z.object({
  role: z.string(),
  fitScore: z.number().min(0).max(100),
  reason: z.string(),
});

export const StandardOutputSchema = z.object({
  version: z.literal("2.3"),
  mode: z.literal("STANDARD"),
  audience: AudienceTypeEnum,
  generatedAt: z.string(),
  
  cvSummary: CvSummarySchema,
  jdSummary: JdSummarySchema.optional(),
  scores: ScoresSchema,
  
  skillMatch: SkillMatchSchema.optional(),
  experienceMatch: ExperienceMatchSchema.optional(),
  bulletHealth: BulletHealthSchema,
  
  topIssues: z.array(IssueSchema).optional(),
  topStrengths: z.array(StrengthSchema).optional(),
  improvements: ImprovementsSchema,
  
  verdict: z.string(),
  
  alternativeRoles: z.array(AlternativeRoleSchema).optional(),
  nextSteps: z.object({
    immediate: z.array(z.string()),
    thisWeek: z.array(z.string()),
    beforeApplication: z.array(z.string()),
  }).optional(),
  encouragement: z.string().optional(),
  
  riskLevel: RiskLevelEnum.optional(),
  hireRecommendation: HireDecisionEnum.optional(),
  verificationItems: z.array(z.object({
    item: z.string(),
    priority: z.enum(["high", "medium", "low"]),
    reason: z.string(),
  })).optional(),
  interviewQuestions: z.array(z.object({
    question: z.string(),
    probing: z.string(),
    redFlag: z.string(),
  })).optional(),
});

// ============================================================================
// FULL OUTPUT (~5,000 tokens)
// ============================================================================

export const BulletAnalysisSchema = z.object({
  text: z.string(),
  index: z.number(),
  score: z.number(),
  actionVerb: z.object({
    word: z.string().nullable(),
    strength: z.enum(["strong", "moderate", "weak", "none"]),
    score: z.number(),
  }),
  quantification: z.object({
    hasQuantification: z.boolean(),
    type: z.string().nullable(),
    score: z.number(),
  }),
  result: z.object({
    hasResult: z.boolean(),
    type: z.enum(["quantified", "implied", "missing"]),
    score: z.number(),
  }),
  issues: z.array(z.object({ code: z.string(), issue: z.string() })),
  rewrite: z.object({
    suggested: z.string(),
    projectedScore: z.number(),
  }).optional(),
});

export const RoleSchema = z.object({
  title: z.string(),
  company: z.string(),
  location: z.string().nullable(),
  startDate: z.string(),
  endDate: z.string(),
  durationMonths: z.number(),
  seniorityLevel: SeniorityLevelEnum,
  bullets: z.array(BulletAnalysisSchema),
  bulletSummary: z.object({
    count: z.number(),
    averageScore: z.number(),
    excellent: z.number(),
    poor: z.number(),
  }),
});

export const ExperienceFactorsSchema = z.object({
  h1TotalYears: z.object({ years: z.number(), score: z.number(), assessment: z.string() }),
  h2DomainYears: z.array(z.object({ domain: z.string(), years: z.number(), isPrimary: z.boolean(), score: z.number() })),
  h3IndustryYears: z.array(z.object({ industry: z.string(), years: z.number() })),
  h4Recency: z.object({ recentRelevance: z.enum(["Current", "Recent", "Dated"]), score: z.number() }),
  h5Scope: z.object({ level: z.string(), evidence: z.array(z.string()), score: z.number() }),
  h6Complexity: z.object({ level: z.string(), evidence: z.array(z.string()), score: z.number() }),
  h7Impact: z.object({ quantifiedCount: z.number(), totalValue: z.string(), score: z.number() }),
  h8Progression: z.object({ pattern: z.string(), trajectory: z.string(), score: z.number() }),
  h9Specialization: z.object({ type: z.string(), primaryArea: z.string(), score: z.number() }),
});

export const CvAnalysisSchema = z.object({
  metadata: z.object({
    candidateName: z.string(),
    email: z.string().nullable(),
    phone: z.string().nullable(),
    location: z.string().nullable(),
    linkedin: z.string().nullable(),
    documentStats: z.object({
      pages: z.number(),
      wordCount: z.number(),
      bulletCount: z.number(),
    }),
  }),
  professionalSummary: z.object({
    text: z.string(),
    yearsMentioned: z.number().nullable(),
    keyThemes: z.array(z.string()),
    qualityScore: z.number(),
    issues: z.array(IssueSchema),
  }),
  experience: z.object({
    totalYears: z.number(),
    roles: z.array(RoleSchema),
    progression: z.object({
      pattern: z.enum(["Stagnant", "Slow", "Steady", "Accelerated", "Exceptional"]),
      isHealthy: z.boolean(),
      assessment: z.string(),
    }),
    gaps: z.array(z.object({
      start: z.string(),
      end: z.string(),
      durationMonths: z.number(),
      explained: z.boolean(),
    })),
  }),
  skills: z.object({
    validated: z.array(z.object({ skill: z.string(), evidence: z.string(), proficiency: z.number() })),
    implied: z.array(z.object({ skill: z.string(), source: z.string() })),
    ghost: z.array(z.object({ skill: z.string(), reason: z.string() })),
    validationRate: z.number(),
  }),
  education: z.object({
    degrees: z.array(z.object({
      degree: z.string(),
      field: z.string(),
      institution: z.string(),
      year: z.number().nullable(),
    })),
    certifications: z.array(z.object({
      name: z.string(),
      issuer: z.string(),
      year: z.number().nullable(),
      status: z.enum(["Active", "Expired", "Unknown"]),
      relevance: z.enum(["High", "Medium", "Low"]),
    })),
  }),
  experienceFactors: ExperienceFactorsSchema,
  bulletAnalysis: z.object({
    totalBullets: z.number(),
    averageScore: z.number(),
    distribution: z.object({ excellent: z.number(), good: z.number(), fair: z.number(), poor: z.number() }),
    codeScores: z.object({ A10: z.number(), A11: z.number(), A12: z.number(), A13: z.number() }),
    rewritePriorities: z.array(z.object({
      roleIndex: z.number(),
      bulletIndex: z.number(),
      currentText: z.string(),
      currentScore: z.number(),
      suggestedRewrite: z.string(),
      projectedScore: z.number(),
    })),
  }),
  issuesDetected: z.array(IssueSchema),
  strengthsDetected: z.array(StrengthSchema),
});

export const JdAnalysisSchema = z.object({
  metadata: z.object({
    jobTitle: z.string(),
    company: z.string().nullable(),
    seniorityLevel: SeniorityLevelEnum,
    location: z.string().nullable(),
  }),
  requirements: z.object({
    tier1Skills: z.array(z.string()),
    tier2Skills: z.array(z.string()),
    tier3Skills: z.array(z.string()),
    minimumYears: z.number(),
    preferredYears: z.number().nullable(),
    education: z.string().nullable(),
    certifications: z.array(z.string()),
  }),
  hardGates: z.array(z.object({
    requirement: z.string(),
    met: z.boolean(),
    scoreCap: z.number().nullable(),
  })),
  jdNature: z.object({
    roleType: z.string(),
    workStyle: z.string().nullable(),
    travelRequired: z.boolean(),
    managementLevel: z.string().nullable(),
  }),
});

export const StudentAnalysisSchema = z.object({
  overallCvQuality: z.object({
    score: z.number(),
    grade: GradeEnum,
    label: z.string(),
    summary: z.string(),
  }),
  honestAssessment: z.object({
    rawCompatibility: z.object({ score: z.number(), analysis: z.string() }),
    transformationEffort: z.object({ level: z.number(), timeline: z.string(), description: z.string() }),
    candidateRisk: z.object({ score: z.number(), factors: z.array(z.string()) }),
    successProbability: z.string(),
  }).optional(),
  improvements: ImprovementsSchema,
  bulletImprovements: z.array(z.object({
    original: z.string(),
    rewritten: z.string(),
    scoreGain: z.number(),
    issuesFixed: z.array(z.string()),
  })),
  gapStrategy: z.object({
    fixable: z.array(z.object({ gap: z.string(), solution: z.string(), timeline: z.string() })),
    unfixable: z.array(z.object({ gap: z.string(), mitigation: z.string() })),
  }).optional(),
  alternatives: z.object({
    betterFitRoles: z.array(AlternativeRoleSchema),
    steppingStones: z.array(z.object({ role: z.string(), gap: z.string(), timeline: z.string() })),
  }),
  nextSteps: z.object({
    immediate: z.array(z.string()),
    thisWeek: z.array(z.string()),
    beforeApplication: z.array(z.string()),
  }),
  encouragement: z.object({
    message: z.string(),
    competitiveAdvantages: z.array(z.string()),
  }),
});

export const HrAnalysisSchema = z.object({
  riskAssessment: z.object({
    employerRiskScore: z.number(),
    breakdown: z.object({
      skillVerification: z.number(),
      experienceInflation: z.number(),
      cultureFit: z.number(),
      retention: z.number(),
      performance: z.number(),
    }),
    redFlags: z.array(z.object({ flag: z.string(), severity: SeverityLevelEnum, evidence: z.string() })),
  }),
  verificationChecklist: z.object({
    highPriority: z.array(z.object({ item: z.string(), reason: z.string(), method: z.string() })),
    mediumPriority: z.array(z.object({ item: z.string(), reason: z.string() })),
  }),
  interviewGuide: z.object({
    mustAsk: z.array(z.object({ question: z.string(), lookFor: z.string(), redFlag: z.string() })),
    technicalProbes: z.array(z.object({ skill: z.string(), question: z.string(), expectedDepth: z.string() })),
    behavioralQuestions: z.array(z.object({ competency: z.string(), question: z.string() })),
  }),
  decisionSupport: z.object({
    recommendation: HireDecisionEnum,
    confidence: z.number(),
    conditions: z.array(z.string()),
    dealBreakers: z.array(z.string()),
    alternativeRoles: z.array(z.string()),
  }),
  compensationGuidance: z.object({
    marketRange: z.string(),
    suggestedOffer: z.string(),
    negotiationFactors: z.array(z.string()),
  }).optional(),
});

export const FullOutputSchema = z.object({
  version: z.literal("2.3"),
  mode: z.literal("FULL"),
  audience: AudienceTypeEnum,
  generatedAt: z.string(),
  
  cvAnalysis: CvAnalysisSchema,
  jdAnalysis: JdAnalysisSchema.optional(),
  studentAnalysis: StudentAnalysisSchema.optional(),
  hrAnalysis: HrAnalysisSchema.optional(),
});

// ============================================================================
// RESPONSE WRAPPER
// ============================================================================

export const AnalysisOutputSchema = z.discriminatedUnion("mode", [
  LiteOutputSchema,
  StandardOutputSchema,
  FullOutputSchema,
]);

export const AnalysisResponseSchema = z.object({
  success: z.boolean(),
  error: z.string().optional(),
  data: AnalysisOutputSchema,
  meta: z.object({
    processingTimeMs: z.number(),
    tokensUsed: z.object({ input: z.number(), output: z.number() }),
    modelUsed: z.string(),
    outputMode: OutputModeEnum,
    audience: AudienceTypeEnum,
  }),
});

export type LiteOutput = z.infer<typeof LiteOutputSchema>;
export type StandardOutput = z.infer<typeof StandardOutputSchema>;
export type FullOutput = z.infer<typeof FullOutputSchema>;
export type AnalysisOutput = z.infer<typeof AnalysisOutputSchema>;
export type AnalysisResponse = z.infer<typeof AnalysisResponseSchema>;
export type CvAnalysis = z.infer<typeof CvAnalysisSchema>;
export type JdAnalysis = z.infer<typeof JdAnalysisSchema>;
export type StudentAnalysis = z.infer<typeof StudentAnalysisSchema>;
export type HrAnalysis = z.infer<typeof HrAnalysisSchema>;
export type Issue = z.infer<typeof IssueSchema>;
export type Strength = z.infer<typeof StrengthSchema>;
export type Improvement = z.infer<typeof ImprovementSchema>;
export type BulletAnalysis = z.infer<typeof BulletAnalysisSchema>;

// ============================================================================
// HELPER FUNCTIONS
// ============================================================================

export function scoreToGrade(score: number): Grade {
  if (score >= 90) return "A";
  if (score >= 85) return "A-";
  if (score >= 80) return "B+";
  if (score >= 70) return "B";
  if (score >= 65) return "B-";
  if (score >= 60) return "C+";
  if (score >= 50) return "C";
  if (score >= 40) return "D";
  return "F";
}

export function scoreToRiskLevel(score: number): RiskLevel {
  if (score <= 25) return "LOW";
  if (score <= 50) return "MODERATE";
  if (score <= 75) return "HIGH";
  return "CRITICAL";
}

export function isValidIssueCode(code: string): boolean {
  return /^[A-H]\d{1,2}$/.test(code);
}

export function clamp(value: number, min: number, max: number): number {
  return Math.min(Math.max(value, min), max);
}

export const GRADE_LABELS: Record<Grade, string> = {
  "A": "Excellent Match",
  "A-": "Strong Match",
  "B+": "Good Match",
  "B": "Moderate Match",
  "B-": "Fair Match",
  "C+": "Stretch Match",
  "C": "Weak Match",
  "D": "Poor Match",
  "F": "No Match",
};

export const TEI_LABELS: Record<number, string> = {
  1: "Minimal (1-2 days)",
  2: "Light (1 week)",
  3: "Moderate (2-4 weeks)",
  4: "Heavy (1-6 months)",
  5: "Major Pivot (6+ months)",
};
