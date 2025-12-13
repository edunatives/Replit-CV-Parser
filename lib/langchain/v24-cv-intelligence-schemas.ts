/**
 * CV Intelligence Engine v2.4 - Schemas with Rewrite Support
 * Full v2.4 implementation with per-bullet, summary, and full CV rewrites
 * 
 * @version 2.4.0
 * @file v24-cv-intelligence-schemas.ts
 */

import { z } from "zod";

// ============================================================================
// ENUMS
// ============================================================================

export const AudienceTypeEnum = z.enum(["STUDENT", "HR"]);
export const SeverityLevelEnum = z.enum(["info", "low", "medium", "high", "critical"]);
export const GradeEnum = z.enum(["A", "A-", "B+", "B", "B-", "C+", "C", "D", "F"]);
export const HealthStatusEnum = z.enum(["healthy", "needs_attention", "critical"]);
export const FieldStatusEnum = z.enum(["valid", "invalid", "missing"]);
export const SkillStatusEnum = z.enum(["validated", "implied", "ghost"]);
export const SkillActionEnum = z.enum(["keep", "remove", "add_evidence"]);
export const SkillCategoryEnum = z.enum(["technical", "tools", "frameworks", "soft", "languages", "methodologies"]);
export const VerbStrengthEnum = z.enum(["strong", "moderate", "weak", "none"]);
export const ResultTypeEnum = z.enum(["quantified", "implied", "missing"]);
export const QuantificationTypeEnum = z.enum(["percentage", "currency", "count", "scale"]);
export const ProgressionEnum = z.enum(["Exceptional", "Accelerated", "Steady", "Slow", "Stagnant"]);
export const CertStatusEnum = z.enum(["active", "expired"]);
export const RelevanceEnum = z.enum(["high", "medium", "low"]);
export const HireDecisionEnum = z.enum(["STRONG_HIRE", "HIRE", "CONDITIONAL_HIRE", "NO_HIRE"]);

export type AudienceType = z.infer<typeof AudienceTypeEnum>;
export type SeverityLevel = z.infer<typeof SeverityLevelEnum>;
export type Grade = z.infer<typeof GradeEnum>;
export type HealthStatus = z.infer<typeof HealthStatusEnum>;
export type VerbStrength = z.infer<typeof VerbStrengthEnum>;
export type Progression = z.infer<typeof ProgressionEnum>;

// ============================================================================
// REWRITE SCHEMAS (Core v2.4 feature)
// ============================================================================

export const BaseRewriteSchema = z.object({
  needed: z.boolean(),
  projectedScore: z.number().min(0).max(100),
});

export const ContactRewriteSchema = BaseRewriteSchema.extend({
  suggested: z.string().optional(),
  changes: z.array(z.string()).optional(),
});

export const SummaryRewriteSchema = BaseRewriteSchema.extend({
  original: z.string().optional(),
  suggested: z.string().optional(),
  changes: z.array(z.string()).optional(),
});

export const BulletRewriteSchema = BaseRewriteSchema.extend({
  original: z.string().optional(),
  suggested: z.string().optional(),
  changes: z.array(z.string()).optional(),
  placeholders: z.array(z.string()).optional(),
});

export const RoleRewriteSchema = z.object({
  needed: z.boolean(),
  allBulletsRewritten: z.array(z.string()).optional(),
  projectedRoleScore: z.number().min(0).max(100).optional(),
});

export const SkillsRewriteSchema = BaseRewriteSchema.extend({
  original: z.array(z.string()).optional(),
  suggested: z.object({
    technical: z.array(z.string()).optional(),
    tools: z.array(z.string()).optional(),
    frameworks: z.array(z.string()).optional(),
    methodologies: z.array(z.string()).optional(),
  }).optional(),
  removed: z.array(z.string()).optional(),
  reorganized: z.boolean().optional(),
});

export const EducationRewriteSchema = z.object({
  needed: z.boolean(),
  suggestions: z.array(z.string()).optional(),
});

// ============================================================================
// SECTION SCHEMAS
// ============================================================================

export const ContactFieldSchema = z.object({
  value: z.string().nullable(),
  status: FieldStatusEnum,
  issue: z.string().nullable().optional(),
});

export const ContactSectionSchema = z.object({
  score: z.number().min(0).max(100),
  health: HealthStatusEnum,
  fields: z.object({
    name: ContactFieldSchema,
    email: ContactFieldSchema,
    phone: ContactFieldSchema,
    location: ContactFieldSchema,
    linkedin: ContactFieldSchema,
  }),
  issues: z.array(z.object({
    code: z.string(),
    severity: SeverityLevelEnum,
    issue: z.string(),
    fix: z.string().optional(),
    effort: z.string().optional(),
  })).optional(),
  rewrite: ContactRewriteSchema.optional(),
});

export const SummaryAnalysisSchema = z.object({
  clarity: z.number().min(0).max(100),
  specificity: z.number().min(0).max(100),
  alignment: z.number().min(0).max(100),
  hasQuantifiedAchievement: z.boolean(),
  genericPhrases: z.array(z.string()),
});

export const SummarySectionSchema = z.object({
  score: z.number().min(0).max(100),
  health: HealthStatusEnum,
  data: z.object({
    text: z.string(),
    wordCount: z.number(),
    yearsMentioned: z.number().nullable(),
    keyThemes: z.array(z.string()),
  }),
  analysis: SummaryAnalysisSchema,
  issues: z.array(z.any()).optional(),
  strengths: z.array(z.any()).optional(),
  rewrite: SummaryRewriteSchema.optional(),
});

// ============================================================================
// BULLET ANALYSIS SCHEMAS
// ============================================================================

export const ActionVerbAnalysisSchema = z.object({
  word: z.string().nullable(),
  strength: VerbStrengthEnum,
  score: z.number().min(0).max(100),
});

export const QuantificationAnalysisSchema = z.object({
  hasQuantification: z.boolean(),
  type: z.string().nullable(),
  value: z.string().nullable().optional(),
  score: z.number().min(0).max(100),
});

export const ResultAnalysisSchema = z.object({
  hasResult: z.boolean(),
  type: ResultTypeEnum,
  score: z.number().min(0).max(100),
});

export const ScopeAnalysisSchema = z.object({
  hasScope: z.boolean(),
  indicators: z.array(z.string()).optional(),
  score: z.number().min(0).max(100),
});

export const BulletIssueSchema = z.object({
  code: z.string(),
  issue: z.string(),
  severity: SeverityLevelEnum.optional(),
});

export const BulletSchema = z.object({
  text: z.string(),
  index: z.number(),
  wordCount: z.number().optional(),
  score: z.number().min(0).max(100),
  actionVerb: ActionVerbAnalysisSchema,
  quantification: QuantificationAnalysisSchema,
  result: ResultAnalysisSchema,
  scope: ScopeAnalysisSchema.optional(),
  issues: z.array(BulletIssueSchema).optional(),
  rewrite: BulletRewriteSchema.optional(),
});

export const BulletSummarySchema = z.object({
  count: z.number(),
  averageScore: z.number().min(0).max(100),
  distribution: z.object({
    excellent: z.number(),
    good: z.number(),
    fair: z.number(),
    poor: z.number(),
  }),
  needsRewrite: z.number().optional(),
});

// ============================================================================
// ROLE & EXPERIENCE SCHEMAS
// ============================================================================

export const RoleSchema = z.object({
  roleIndex: z.number(),
  title: z.string(),
  company: z.string(),
  location: z.string().nullable(),
  startDate: z.string(),
  endDate: z.string(),
  durationMonths: z.number(),
  isCurrent: z.boolean().optional(),
  seniorityLevel: z.string(),
  roleScore: z.number().min(0).max(100),
  bullets: z.array(BulletSchema),
  bulletSummary: BulletSummarySchema,
  roleRewrite: RoleRewriteSchema.optional(),
});

export const CareerGapSchema = z.object({
  period: z.string(),
  durationMonths: z.number(),
  severity: SeverityLevelEnum,
  suggestedExplanation: z.string().optional(),
});

export const CareerAnalysisSchema = z.object({
  progression: ProgressionEnum,
  seniorityTrajectory: z.string(),
  industryFocus: z.array(z.string()),
  domainExpertise: z.array(z.string()),
});

export const ExperienceMetricsSchema = z.object({
  totalYears: z.number(),
  roleCount: z.number(),
  totalBullets: z.number(),
  averageBulletScore: z.number().min(0).max(100),
  quantificationRate: z.number().min(0).max(100),
  strongVerbRate: z.number().min(0).max(100),
  bulletsNeedingRewrite: z.number(),
});

export const ExperienceSectionSchema = z.object({
  score: z.number().min(0).max(100),
  health: HealthStatusEnum,
  metrics: ExperienceMetricsSchema,
  careerAnalysis: CareerAnalysisSchema,
  gaps: z.array(CareerGapSchema).optional(),
  roles: z.array(RoleSchema),
});

// ============================================================================
// SKILLS SECTION
// ============================================================================

export const SkillEntrySchema = z.object({
  skill: z.string(),
  category: z.string(),
  status: SkillStatusEnum,
  evidence: z.string().nullable(),
  action: SkillActionEnum,
});

export const SkillsMetricsSchema = z.object({
  totalSkills: z.number(),
  validatedSkills: z.number(),
  impliedSkills: z.number(),
  ghostSkills: z.number(),
  validationRate: z.number().min(0).max(100),
});

export const MissingSkillsForJdSchema = z.object({
  critical: z.array(z.string()),
  important: z.array(z.string()),
  niceToHave: z.array(z.string()),
});

export const SkillsSectionSchema = z.object({
  score: z.number().min(0).max(100),
  health: HealthStatusEnum,
  metrics: SkillsMetricsSchema,
  allSkills: z.array(SkillEntrySchema),
  rewrite: SkillsRewriteSchema.optional(),
  missingForJd: MissingSkillsForJdSchema.optional(),
});

// ============================================================================
// EDUCATION & CERTIFICATIONS
// ============================================================================

export const EducationEntrySchema = z.object({
  degree: z.string(),
  field: z.string(),
  institution: z.string(),
  year: z.number().nullable(),
});

export const EducationSectionSchema = z.object({
  score: z.number().min(0).max(100),
  health: HealthStatusEnum,
  entries: z.array(EducationEntrySchema),
  rewrite: EducationRewriteSchema.optional(),
});

export const CertificationEntrySchema = z.object({
  name: z.string(),
  issuer: z.string(),
  status: CertStatusEnum,
  relevance: RelevanceEnum,
});

export const CertificationsSectionSchema = z.object({
  score: z.number().min(0).max(100),
  health: HealthStatusEnum,
  entries: z.array(CertificationEntrySchema),
  rewrite: EducationRewriteSchema.optional(),
});

// ============================================================================
// BULLET ANALYSIS AGGREGATE
// ============================================================================

export const WorstBulletSchema = z.object({
  roleTitle: z.string(),
  company: z.string(),
  original: z.string(),
  score: z.number(),
  mainIssues: z.array(z.string()),
  rewrite: z.string(),
  projectedScore: z.number(),
  changes: z.array(z.string()),
});

export const BulletAnalysisAggregateSchema = z.object({
  totalBullets: z.number(),
  averageScore: z.number().min(0).max(100),
  distribution: z.object({
    excellent: z.number(),
    good: z.number(),
    fair: z.number(),
    poor: z.number(),
  }),
  needingRewrite: z.number(),
  verbAnalysis: z.object({
    strongCount: z.number(),
    moderateCount: z.number(),
    weakCount: z.number(),
    strongRate: z.number().min(0).max(100),
  }),
  worstBullets: z.array(WorstBulletSchema).optional(),
});

// ============================================================================
// CV ANALYSIS (SECTIONS CONTAINER)
// ============================================================================

export const DocumentStatsSchema = z.object({
  wordCount: z.number(),
  pageEstimate: z.number(),
  sectionCount: z.number(),
});

export const MetadataSchema = z.object({
  candidateName: z.string(),
  email: z.string().nullable(),
  phone: z.string().nullable(),
  location: z.string().nullable(),
  linkedin: z.string().nullable(),
  documentStats: DocumentStatsSchema,
});

export const SectionsSchema = z.object({
  contact: ContactSectionSchema,
  summary: SummarySectionSchema,
  experience: ExperienceSectionSchema,
  skills: SkillsSectionSchema,
  education: EducationSectionSchema,
  certifications: CertificationsSectionSchema,
});

export const CvAnalysisSchema = z.object({
  metadata: MetadataSchema,
  sections: SectionsSchema,
  bulletAnalysis: BulletAnalysisAggregateSchema.optional(),
});

// ============================================================================
// FULL REWRITE SECTION
// ============================================================================

export const FullRewriteRoleSchema = z.object({
  title: z.string(),
  company: z.string(),
  dates: z.string(),
  originalBullets: z.array(z.string()),
  rewrittenBullets: z.array(z.string()),
});

export const FullRewriteSchema = z.object({
  available: z.boolean(),
  currentScore: z.number(),
  projectedScore: z.number(),
  effortEstimate: z.string(),
  contact: z.object({
    original: z.string(),
    rewritten: z.string(),
  }).optional(),
  summary: z.object({
    original: z.string(),
    rewritten: z.string(),
  }).optional(),
  experience: z.object({
    roles: z.array(FullRewriteRoleSchema),
  }).optional(),
  skills: z.object({
    original: z.string(),
    rewritten: z.object({
      technical: z.array(z.string()).optional(),
      tools: z.array(z.string()).optional(),
      frameworks: z.array(z.string()).optional(),
    }),
    removed: z.array(z.string()).optional(),
  }).optional(),
  completeRewrittenCV: z.string(),
});

// ============================================================================
// AGGREGATED METRICS
// ============================================================================

export const TotalIssuesSchema = z.object({
  critical: z.number(),
  high: z.number(),
  medium: z.number(),
  low: z.number(),
  total: z.number(),
});

export const SectionHealthSchema = z.object({
  contact: HealthStatusEnum,
  summary: HealthStatusEnum,
  experience: HealthStatusEnum,
  skills: HealthStatusEnum,
  education: HealthStatusEnum,
  certifications: HealthStatusEnum,
});

export const SectionScoresSchema = z.object({
  contact: z.number(),
  summary: z.number(),
  experience: z.number(),
  skills: z.number(),
  education: z.number(),
  certifications: z.number(),
});

export const PriorityFixSchema = z.object({
  rank: z.number(),
  section: z.string(),
  action: z.string(),
  currentText: z.string().optional(),
  suggestedText: z.string().optional(),
  effort: z.string(),
  impact: z.string(),
  quick: z.boolean(),
});

export const ScorePotentialSchema = z.object({
  current: z.number(),
  afterQuickFixes: z.number(),
  afterAllRewrites: z.number(),
  ceiling: z.number(),
});

export const AggregatedSchema = z.object({
  totalIssues: TotalIssuesSchema,
  sectionHealth: SectionHealthSchema,
  sectionScores: SectionScoresSchema,
  topPriorityFixes: z.array(PriorityFixSchema).optional(),
  scorePotential: ScorePotentialSchema,
});

// ============================================================================
// ISSUES & STRENGTHS
// ============================================================================

export const IssueDetectedSchema = z.object({
  code: z.string(),
  section: z.string(),
  severity: SeverityLevelEnum,
  issue: z.string(),
  sourceText: z.string().optional(),
  fix: z.string().optional(),
  effort: z.string().optional(),
  impact: z.string().optional(),
});

export const StrengthDetectedSchema = z.object({
  code: z.string(),
  section: z.string(),
  category: z.string().optional(),
  strength: z.string(),
  evidence: z.string().optional(),
  impact: z.string().optional(),
});

export const PriorityActionSchema = z.object({
  priority: z.number(),
  section: z.string(),
  action: z.string(),
  currentText: z.string().optional(),
  suggestedText: z.string().optional(),
  effort: z.string(),
  impact: z.string(),
  quick: z.boolean(),
});

// ============================================================================
// STUDENT ANALYSIS
// ============================================================================

export const TransformationEffortSchema = z.object({
  level: z.number().min(1).max(5),
  timeline: z.string(),
  description: z.string(),
});

export const AlternativeRoleSchema = z.object({
  role: z.string(),
  fitScore: z.number().min(0).max(100),
  reason: z.string(),
});

export const NextStepsSchema = z.object({
  immediate: z.array(z.string()),
  thisWeek: z.array(z.string()),
  beforeApplication: z.array(z.string()),
});

export const EncouragementSchema = z.object({
  message: z.string(),
  competitiveAdvantages: z.array(z.string()),
});

export const StudentAnalysisSchema = z.object({
  overallAssessment: z.object({
    score: z.number(),
    grade: z.string(),
    label: z.string(),
    summary: z.string(),
  }),
  honestFeedback: z.object({
    rawCompatibility: z.number().nullable(),
    transformationEffort: TransformationEffortSchema.nullable(),
  }),
  alternativeRoles: z.array(AlternativeRoleSchema),
  nextSteps: NextStepsSchema,
  encouragement: EncouragementSchema,
});

// ============================================================================
// HR ANALYSIS
// ============================================================================

export const RedFlagSchema = z.object({
  flag: z.string(),
  severity: SeverityLevelEnum,
  evidence: z.string().optional(),
});

export const HrRiskAssessmentSchema = z.object({
  overallRisk: z.string(),
  employerRiskScore: z.number(),
  redFlags: z.array(RedFlagSchema).optional(),
});

export const VerificationItemSchema = z.object({
  item: z.string(),
  reason: z.string(),
  method: z.string().optional(),
});

export const HrVerificationChecklistSchema = z.object({
  highPriority: z.array(VerificationItemSchema),
  mediumPriority: z.array(VerificationItemSchema),
});

export const InterviewQuestionSchema = z.object({
  question: z.string(),
  lookFor: z.string().optional(),
  redFlag: z.string().optional(),
});

export const TechnicalProbeSchema = z.object({
  skill: z.string(),
  question: z.string(),
  expectedDepth: z.string().optional(),
});

export const HrInterviewGuideSchema = z.object({
  mustAsk: z.array(InterviewQuestionSchema),
  technicalProbes: z.array(TechnicalProbeSchema),
});

export const HrDecisionSchema = z.object({
  recommendation: HireDecisionEnum,
  confidence: z.number(),
  conditions: z.array(z.string()),
});

export const HrAnalysisSchema = z.object({
  riskAssessment: HrRiskAssessmentSchema,
  verificationChecklist: HrVerificationChecklistSchema,
  interviewGuide: HrInterviewGuideSchema,
  decision: HrDecisionSchema,
});

// ============================================================================
// SCORES (TOP LEVEL)
// ============================================================================

export const ScoresSchema = z.object({
  overall: z.number().min(0).max(100),
  grade: GradeEnum,
  label: z.string(),
  rawCompatibility: z.number().min(0).max(100).nullable(),
  tei: z.number().min(1).max(5).nullable(),
});

// ============================================================================
// MAIN V2.4 OUTPUT SCHEMA
// ============================================================================

export const V24OutputSchema = z.object({
  version: z.literal("2.4"),
  audience: AudienceTypeEnum,
  generatedAt: z.string(),
  scores: ScoresSchema,
  cvAnalysis: CvAnalysisSchema,
  aggregated: AggregatedSchema,
  fullRewrite: FullRewriteSchema.nullable(),
  issuesDetected: z.array(IssueDetectedSchema),
  strengthsDetected: z.array(StrengthDetectedSchema),
  priorityActions: z.array(PriorityActionSchema),
  studentAnalysis: StudentAnalysisSchema.optional(),
  hrAnalysis: HrAnalysisSchema.optional(),
});

// ============================================================================
// REWRITE-ONLY OUTPUT SCHEMA
// ============================================================================

export const RewriteBulletSchema = z.object({
  original: z.string(),
  rewritten: z.string(),
  score: z.object({
    before: z.number(),
    after: z.number(),
  }),
  changes: z.array(z.string()),
});

export const RewriteExperienceRoleSchema = z.object({
  role: z.string(),
  bullets: z.array(RewriteBulletSchema),
});

export const RewriteOnlyOutputSchema = z.object({
  originalScore: z.number(),
  projectedScore: z.number(),
  summary: z.object({
    original: z.string(),
    rewritten: z.string(),
    changes: z.array(z.string()),
  }),
  experience: z.array(RewriteExperienceRoleSchema),
  skills: z.object({
    keep: z.array(z.string()),
    remove: z.array(z.string()),
    reorganize: z.object({
      technical: z.array(z.string()).optional(),
      tools: z.array(z.string()).optional(),
      frameworks: z.array(z.string()).optional(),
    }),
  }),
  completeRewrittenCV: z.string(),
});

// ============================================================================
// BULLET REWRITE OUTPUT SCHEMA
// ============================================================================

export const BulletRewriteVersionSchema = z.object({
  version: z.number(),
  text: z.string(),
  score: z.number(),
  changes: z.array(z.string()),
  placeholders: z.array(z.string()).optional(),
});

export const BulletRewriteOutputSchema = z.object({
  original: z.string(),
  analysis: z.object({
    score: z.number(),
    actionVerb: z.object({
      word: z.string(),
      strength: VerbStrengthEnum,
    }),
    hasQuantification: z.boolean(),
    hasResult: z.boolean(),
    issues: z.array(z.string()),
  }),
  rewrites: z.array(BulletRewriteVersionSchema),
  recommended: z.number(),
  reason: z.string(),
});

// ============================================================================
// SUMMARY REWRITE OUTPUT SCHEMA
// ============================================================================

export const SummaryRewriteStyleSchema = z.object({
  style: z.enum(["conservative", "balanced", "bold"]),
  text: z.string(),
  score: z.number(),
});

export const SummaryRewriteOutputSchema = z.object({
  original: z.string(),
  analysis: z.object({
    score: z.number(),
    wordCount: z.number(),
    hasQuantification: z.boolean(),
    genericPhrases: z.array(z.string()),
    issues: z.array(z.string()),
  }),
  rewrites: z.array(SummaryRewriteStyleSchema),
  recommended: z.string(),
  reason: z.string(),
});

// ============================================================================
// TYPE EXPORTS
// ============================================================================

export type V24Output = z.infer<typeof V24OutputSchema>;
export type RewriteOnlyOutput = z.infer<typeof RewriteOnlyOutputSchema>;
export type BulletRewriteOutput = z.infer<typeof BulletRewriteOutputSchema>;
export type SummaryRewriteOutput = z.infer<typeof SummaryRewriteOutputSchema>;

export type CvAnalysis = z.infer<typeof CvAnalysisSchema>;
export type Sections = z.infer<typeof SectionsSchema>;
export type ContactSection = z.infer<typeof ContactSectionSchema>;
export type SummarySection = z.infer<typeof SummarySectionSchema>;
export type ExperienceSection = z.infer<typeof ExperienceSectionSchema>;
export type SkillsSection = z.infer<typeof SkillsSectionSchema>;
export type Role = z.infer<typeof RoleSchema>;
export type Bullet = z.infer<typeof BulletSchema>;
export type FullRewrite = z.infer<typeof FullRewriteSchema>;
export type Aggregated = z.infer<typeof AggregatedSchema>;
export type StudentAnalysis = z.infer<typeof StudentAnalysisSchema>;
export type HrAnalysis = z.infer<typeof HrAnalysisSchema>;
export type Scores = z.infer<typeof ScoresSchema>;
export type IssueDetected = z.infer<typeof IssueDetectedSchema>;
export type StrengthDetected = z.infer<typeof StrengthDetectedSchema>;
export type PriorityAction = z.infer<typeof PriorityActionSchema>;

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

export function scoreToLabel(score: number): string {
  if (score >= 90) return "Excellent";
  if (score >= 80) return "Strong";
  if (score >= 70) return "Good";
  if (score >= 60) return "Fair";
  if (score >= 50) return "Needs Work";
  return "Weak";
}

export function scoreToHealth(score: number, criticalIssues: number = 0, highIssues: number = 0): HealthStatus {
  if (criticalIssues > 0 || score < 50) return "critical";
  if (score < 70 || highIssues > 2) return "needs_attention";
  return "healthy";
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

export function isV24Output(data: unknown): data is V24Output {
  return V24OutputSchema.safeParse(data).success;
}
