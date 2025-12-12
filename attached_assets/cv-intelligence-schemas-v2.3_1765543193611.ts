/**
 * @fileoverview CV Intelligence Engine v2.3 - Zod Schemas
 * @description Complete Zod schema definitions aligned with v2.3 architecture.
 * Supports LITE, STANDARD, FULL output modes for both STUDENT and HR audiences.
 */

import { z } from "zod";

// ============================================================================
// ENUMS & CONSTANTS
// ============================================================================

export const OutputModeEnum = z.enum(["LITE", "STANDARD", "FULL"]);
export const AudienceTypeEnum = z.enum(["STUDENT", "HR"]);
export const SeverityLevelEnum = z.enum(["info", "low", "medium", "high", "critical"]);
export const GradeEnum = z.enum(["A", "A-", "B+", "B", "B-", "C+", "C", "D", "F"]);
export const RiskLevelEnum = z.enum(["LOW", "MODERATE", "HIGH", "CRITICAL"]);
export const HireDecisionEnum = z.enum(["STRONG_HIRE", "HIRE", "CONDITIONAL_HIRE", "NO_HIRE"]);
export const SeniorityLevelEnum = z.enum(["Entry", "Mid", "Senior", "Lead", "Principal", "Director", "VP", "C-Level"]);
export const EvidenceLevelEnum = z.enum(["Validated", "Implied", "Ghost"]);
export const ActionVerbStrengthEnum = z.enum(["strong", "moderate", "weak", "none"]);

export type OutputMode = z.infer<typeof OutputModeEnum>;
export type AudienceType = z.infer<typeof AudienceTypeEnum>;
export type SeverityLevel = z.infer<typeof SeverityLevelEnum>;
export type Grade = z.infer<typeof GradeEnum>;
export type RiskLevel = z.infer<typeof RiskLevelEnum>;
export type HireDecision = z.infer<typeof HireDecisionEnum>;
export type SeniorityLevel = z.infer<typeof SeniorityLevelEnum>;

// ============================================================================
// ISSUE CODE SCHEMAS
// ============================================================================

/**
 * Issue codes A1-H9 as defined in v2.3
 */
export const IssueCodeSchema = z.string().regex(/^[A-H]\d{1,2}$/).describe("Issue code (A1-H9)");

export const IssueDetectedSchema = z.object({
  code: IssueCodeSchema,
  type: z.string().describe("Issue type name"),
  severity: SeverityLevelEnum,
  count: z.number().default(1).describe("Number of occurrences"),
  detail: z.string().describe("Specific detail about the issue"),
  location: z.string().optional().describe("Where in CV this was found"),
  impact: z.string().describe("Impact on CV quality"),
  fix: z.string().describe("How to fix this issue"),
});

export const StrengthDetectedSchema = z.object({
  code: z.string().regex(/^D\d$/).describe("Strength code (D1-D8)"),
  type: z.string().describe("Strength type"),
  count: z.number().optional(),
  detail: z.string().describe("Evidence of this strength"),
  examples: z.array(z.string()).optional(),
});

// ============================================================================
// BULLET ANALYSIS SCHEMAS (A10-A13)
// ============================================================================

export const QuantificationSchema = z.object({
  type: z.enum(["percentage", "currency", "count", "time", "multiplier"]),
  value: z.string(),
  raw: z.string().describe("Original text"),
});

export const BulletAnalysisSchema = z.object({
  text: z.string(),
  index: z.number(),
  wordCount: z.number(),
  score: z.number().min(0).max(100),
  
  actionVerb: z.object({
    word: z.string().nullable(),
    strength: ActionVerbStrengthEnum,
    score: z.number().min(0).max(100),
  }),
  
  quantification: z.object({
    hasQuantification: z.boolean(),
    items: z.array(QuantificationSchema),
    score: z.number().min(0).max(100),
  }),
  
  result: z.object({
    hasResult: z.boolean(),
    resultType: z.enum(["quantified", "implied", "missing"]),
    score: z.number().min(0).max(100),
  }),
  
  issues: z.array(z.object({
    code: IssueCodeSchema,
    issue: z.string(),
    severity: SeverityLevelEnum,
  })),
  
  rewriteSuggestion: z.object({
    suggested: z.string(),
    projectedScore: z.number(),
    issuesFixed: z.array(z.string()),
  }).optional(),
});

export const BulletSummarySchema = z.object({
  totalBullets: z.number(),
  averageScore: z.number().min(0).max(100),
  
  distribution: z.object({
    excellent: z.number().describe("Score 90+"),
    good: z.number().describe("Score 75-89"),
    fair: z.number().describe("Score 60-74"),
    poor: z.number().describe("Score <60"),
  }),
  
  codeScores: z.object({
    A10_length: z.number(),
    A11_density: z.number(),
    A12_structure: z.number(),
    A13_consistency: z.number(),
  }),
  
  issuesSummary: z.object({
    missingResults: z.number(),
    noActionVerb: z.number(),
    tooLong: z.number(),
    tooShort: z.number(),
    weakVerbs: z.number(),
    typosGrammar: z.number(),
  }),
  
  topIssues: z.array(z.object({
    issue: z.string(),
    count: z.number(),
    examples: z.array(z.string()),
    severity: SeverityLevelEnum,
    fixEffort: z.string(),
  })),
  
  rewritePriorities: z.array(z.object({
    roleIndex: z.number(),
    bulletIndex: z.number(),
    currentScore: z.number(),
    currentText: z.string(),
    suggestedRewrite: z.string(),
    projectedScore: z.number(),
    priority: z.enum(["high", "medium", "low"]),
  })),
});

// ============================================================================
// EXPERIENCE FACTORS SCHEMAS (H1-H9)
// ============================================================================

export const ExperienceFactorsSchema = z.object({
  // Years of Experience
  h1TotalYears: z.object({
    years: z.number(),
    score: z.number().min(0).max(100),
    assessment: z.string(),
  }),
  
  h2DomainYears: z.array(z.object({
    domain: z.string(),
    years: z.number(),
    score: z.number(),
    isPrimary: z.boolean(),
  })),
  
  h3IndustryYears: z.array(z.object({
    industry: z.string(),
    years: z.number(),
    isPrimary: z.boolean(),
  })),
  
  h4RecencyWeightedYears: z.object({
    years: z.number(),
    recentRelevance: z.enum(["Current", "Recent", "Dated"]),
  }),
  
  // Depth of Experience
  h5Scope: z.object({
    level: z.enum(["Individual", "Team", "Department", "Division", "Enterprise", "Global"]),
    evidence: z.array(z.string()),
    score: z.number(),
  }),
  
  h6Complexity: z.object({
    level: z.enum(["Routine", "Moderate", "Complex", "Highly Complex", "Transformational"]),
    evidence: z.array(z.string()),
    score: z.number(),
  }),
  
  h7Impact: z.object({
    level: z.enum(["Task", "Project", "Program", "Strategic", "Industry"]),
    quantifiedAchievements: z.number(),
    totalAchievements: z.number(),
    quantificationRate: z.number(),
    totalValueDocumented: z.string(),
    score: z.number(),
  }),
  
  h8Progression: z.object({
    pattern: z.enum(["Stagnant", "Slow", "Steady", "Accelerated", "Exceptional"]),
    trajectory: z.string(),
    assessment: z.string(),
    score: z.number(),
  }),
  
  h9Specialization: z.object({
    type: z.enum(["Deep Specialist", "T-Shaped", "Broad Generalist", "Transitioning"]),
    primaryDepth: z.object({
      area: z.string(),
      years: z.number(),
      level: z.number(),
    }),
    secondaryBreadth: z.array(z.string()),
    score: z.number(),
  }),
});

// ============================================================================
// SKILL ANALYSIS SCHEMAS
// ============================================================================

export const SkillAnalysisSchema = z.object({
  skill: z.string(),
  category: z.enum(["Technical", "Soft", "Domain", "Tool", "Business", "Management"]),
  evidenceLevel: EvidenceLevelEnum,
  proficiency: z.number().min(1).max(5),
  recency: z.enum(["Current", "Recent", "Dated"]),
  yearsUsed: z.number(),
  
  evidence: z.array(z.object({
    location: z.string(),
    text: z.string(),
    strength: z.enum(["strong", "moderate", "weak"]),
  })),
  
  issues: z.array(z.object({
    code: IssueCodeSchema,
    detail: z.string(),
  })),
  
  verificationNeeded: z.boolean(),
  verificationReason: z.string().optional(),
});

export const SkillsSummarySchema = z.object({
  totalSkills: z.number(),
  validated: z.number(),
  implied: z.number(),
  ghost: z.number(),
  validationRate: z.number(),
  
  byCategory: z.record(z.string(), z.number()),
  
  ghostSkills: z.array(z.object({
    skill: z.string(),
    reason: z.string(),
  })),
  
  topSkills: z.array(z.object({
    skill: z.string(),
    proficiency: z.number(),
    evidence: z.string(),
  })),
});

// ============================================================================
// ROLE & EXPERIENCE SCHEMAS
// ============================================================================

export const RoleAnalysisSchema = z.object({
  title: z.string(),
  company: z.string(),
  location: z.string(),
  dateRange: z.object({
    start: z.string(),
    end: z.string(),
    durationMonths: z.number(),
  }),
  seniorityLevel: SeniorityLevelEnum,
  
  bullets: z.array(BulletAnalysisSchema),
  bulletSummary: z.object({
    count: z.number(),
    averageScore: z.number(),
    densityStatus: z.enum(["too_few", "optimal", "too_many"]),
  }),
  
  keyAchievements: z.array(z.string()),
  skillsUsed: z.array(z.string()),
  
  issues: z.array(IssueDetectedSchema),
});

export const ExperienceAnalysisSchema = z.object({
  totalYears: z.number(),
  calculationMethod: z.string(),
  careerSpan: z.string(),
  
  roles: z.array(RoleAnalysisSchema),
  
  progression: z.object({
    pattern: z.enum(["Stagnant", "Slow", "Steady", "Accelerated", "Exceptional"]),
    promotionsCount: z.number(),
    avgTimeBetweenPromotions: z.string(),
    isHealthy: z.boolean(),
    assessment: z.string(),
  }),
  
  gaps: z.array(z.object({
    start: z.string(),
    end: z.string(),
    durationMonths: z.number(),
    explained: z.boolean(),
    concern: SeverityLevelEnum,
  })),
});

// ============================================================================
// CV ANALYSIS SCHEMA (Complete)
// ============================================================================

export const CvMetadataSchema = z.object({
  candidateName: z.string(),
  contact: z.object({
    email: z.string().nullable(),
    phone: z.string().nullable(),
    location: z.string().nullable(),
    linkedin: z.string().nullable(),
    portfolio: z.string().nullable(),
  }),
  documentStats: z.object({
    pages: z.number(),
    wordCount: z.number(),
    bulletCount: z.number(),
  }),
});

export const ProfessionalSummarySchema = z.object({
  text: z.string(),
  yearsMentioned: z.number().nullable(),
  keyThemes: z.array(z.string()),
  titleClaimed: z.string().nullable(),
  qualityScore: z.number(),
  issues: z.array(IssueDetectedSchema),
});

export const EducationSchema = z.object({
  degrees: z.array(z.object({
    degree: z.string(),
    field: z.string(),
    institution: z.string(),
    year: z.number(),
    honors: z.string().nullable(),
  })),
  
  certifications: z.array(z.object({
    name: z.string(),
    issuer: z.string(),
    year: z.number().nullable(),
    expiry: z.string().nullable(),
    status: z.enum(["Active", "Expired", "Unknown"]),
    relevance: z.enum(["High", "Medium", "Low"]),
  })),
  
  certificationStrength: z.string(),
});

export const CvAnalysisSchema = z.object({
  metadata: CvMetadataSchema,
  professionalSummary: ProfessionalSummarySchema,
  experience: ExperienceAnalysisSchema,
  skills: z.object({
    extracted: z.array(SkillAnalysisSchema),
    summary: SkillsSummarySchema,
  }),
  education: EducationSchema,
  experienceFactors: ExperienceFactorsSchema,
  bulletAnalysis: BulletSummarySchema,
  issuesDetected: z.array(IssueDetectedSchema),
  strengthsDetected: z.array(StrengthDetectedSchema),
});

// ============================================================================
// SCORES SCHEMA
// ============================================================================

export const ScoresSchema = z.object({
  overall: z.number().min(0).max(100),
  grade: GradeEnum,
  rawCompatibility: z.number().nullable(),
  tei: z.number().min(1).max(5).nullable(),
  candidateRisk: z.number().nullable(),
  employerRisk: z.number().nullable(),
});

// ============================================================================
// OUTPUT SCHEMAS BY MODE
// ============================================================================

/**
 * LITE Output Schema (~800 tokens)
 */
export const LiteOutputSchema = z.object({
  version: z.literal("2.3-lite"),
  mode: z.literal("LITE"),
  audience: AudienceTypeEnum,
  generatedAt: z.string(),
  
  candidate: z.string(),
  hasJd: z.boolean(),
  
  scores: ScoresSchema,
  
  verdict: z.string(),
  
  topIssues: z.array(z.object({
    code: IssueCodeSchema,
    issue: z.string(),
    severity: SeverityLevelEnum,
    count: z.number(),
  })).max(3),
  
  topStrengths: z.array(z.object({
    code: z.string(),
    strength: z.string(),
  })).max(3),
  
  bestFitRole: z.string().nullable(),
  nextAction: z.string(),
  
  hireRecommendation: HireDecisionEnum.optional(),
});

/**
 * STANDARD Output Schema (~2,500 tokens)
 */
export const StandardOutputSchema = z.object({
  version: z.literal("2.3-standard"),
  mode: z.literal("STANDARD"),
  audience: AudienceTypeEnum,
  generatedAt: z.string(),
  
  cvSummary: z.object({
    candidateName: z.string(),
    totalYears: z.number(),
    currentRole: z.string(),
    seniorityLevel: SeniorityLevelEnum,
    topSkills: z.array(z.string()),
    certificationCount: z.number(),
  }),
  
  jdSummary: z.object({
    jobTitle: z.string(),
    seniorityLevel: SeniorityLevelEnum,
    mustHaveSkills: z.array(z.string()),
    experienceRequired: z.string(),
  }).optional(),
  
  scores: ScoresSchema,
  
  skillMatch: z.object({
    tier1: z.object({ matched: z.number(), total: z.number(), score: z.number() }),
    tier2: z.object({ matched: z.number(), total: z.number(), score: z.number() }),
    tier3: z.object({ matched: z.number(), total: z.number(), score: z.number() }),
    missingCritical: z.array(z.string()),
    ghostSkills: z.array(z.string()),
  }).optional(),
  
  experienceMatch: z.object({
    totalYearsMatch: z.boolean(),
    domainYearsMatch: z.boolean(),
    domainGap: z.string().nullable(),
    scopeMatch: z.boolean(),
  }).optional(),
  
  bulletHealth: z.object({
    averageScore: z.number(),
    excellent: z.number(),
    poor: z.number(),
    topIssue: z.string(),
    topFix: z.string(),
  }),
  
  improvements: z.object({
    critical: z.array(z.string()),
    high: z.array(z.string()),
    scorePotential: z.object({
      current: z.number(),
      afterFixes: z.number(),
    }),
  }),
  
  verdict: z.string(),
  
  // Student-specific
  alternativeRoles: z.array(z.object({
    role: z.string(),
    fitScore: z.number(),
  })).optional(),
  nextSteps: z.array(z.string()).optional(),
  
  // HR-specific
  riskLevel: RiskLevelEnum.optional(),
  hireRecommendation: HireDecisionEnum.optional(),
  topVerificationItems: z.array(z.string()).optional(),
});

/**
 * FULL Output Schema (~5,000 tokens)
 */
export const FullOutputSchema = z.object({
  version: z.literal("2.3-full"),
  mode: z.literal("FULL"),
  audience: AudienceTypeEnum,
  generatedAt: z.string(),
  
  cvAnalysis: CvAnalysisSchema,
  jdAnalysis: z.any().optional(), // Full JD schema would go here
  studentAnalysis: z.any().optional(), // Full student schema
  hrAnalysis: z.any().optional(), // Full HR schema
});

// ============================================================================
// UNION TYPE FOR ALL OUTPUTS
// ============================================================================

export const AnalysisOutputSchema = z.discriminatedUnion("mode", [
  LiteOutputSchema,
  StandardOutputSchema,
  FullOutputSchema,
]);

export type LiteOutput = z.infer<typeof LiteOutputSchema>;
export type StandardOutput = z.infer<typeof StandardOutputSchema>;
export type FullOutput = z.infer<typeof FullOutputSchema>;
export type AnalysisOutput = z.infer<typeof AnalysisOutputSchema>;

// ============================================================================
// API REQUEST/RESPONSE SCHEMAS
// ============================================================================

export const AnalysisRequestSchema = z.object({
  cvContent: z.string().min(100).describe("CV text content"),
  jdContent: z.string().optional().describe("Optional JD content"),
  outputMode: OutputModeEnum.default("STANDARD"),
  audience: AudienceTypeEnum.default("STUDENT"),
  options: z.object({
    includeCoverLetter: z.boolean().default(false),
    includeAlternativeRoles: z.boolean().default(true),
    maxBulletRewrites: z.number().default(10),
  }).optional(),
});

export const AnalysisResponseSchema = z.object({
  success: z.boolean(),
  error: z.string().optional(),
  data: AnalysisOutputSchema,
  meta: z.object({
    processingTimeMs: z.number(),
    tokensUsed: z.object({
      input: z.number(),
      output: z.number(),
    }),
    modelUsed: z.string(),
  }),
});

export type AnalysisRequest = z.infer<typeof AnalysisRequestSchema>;
export type AnalysisResponse = z.infer<typeof AnalysisResponseSchema>;

// ============================================================================
// HELPER FUNCTIONS
// ============================================================================

/**
 * Calculate grade from score
 */
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

/**
 * Calculate risk level from score
 */
export function scoreToRiskLevel(score: number): RiskLevel {
  if (score <= 25) return "LOW";
  if (score <= 50) return "MODERATE";
  if (score <= 75) return "HIGH";
  return "CRITICAL";
}

/**
 * Validate issue code format
 */
export function isValidIssueCode(code: string): boolean {
  return /^[A-H]\d{1,2}$/.test(code);
}
