module.exports = [
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[project]/lib/langchain/v23-cv-intelligence-schemas.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * CV Intelligence Engine v2.3 - Schemas
 * Pure v2.3 implementation - no legacy compatibility
 * 
 * @version 2.3.0
 * @file v23-cv-intelligence-schemas.ts
 */ __turbopack_context__.s([
    "AlternativeRoleSchema",
    ()=>AlternativeRoleSchema,
    "AnalysisOutputSchema",
    ()=>AnalysisOutputSchema,
    "AnalysisResponseSchema",
    ()=>AnalysisResponseSchema,
    "AudienceTypeEnum",
    ()=>AudienceTypeEnum,
    "BulletAnalysisSchema",
    ()=>BulletAnalysisSchema,
    "BulletHealthSchema",
    ()=>BulletHealthSchema,
    "CvAnalysisSchema",
    ()=>CvAnalysisSchema,
    "CvSummarySchema",
    ()=>CvSummarySchema,
    "ExperienceFactorsSchema",
    ()=>ExperienceFactorsSchema,
    "ExperienceMatchSchema",
    ()=>ExperienceMatchSchema,
    "FullOutputSchema",
    ()=>FullOutputSchema,
    "GRADE_LABELS",
    ()=>GRADE_LABELS,
    "GradeEnum",
    ()=>GradeEnum,
    "HireDecisionEnum",
    ()=>HireDecisionEnum,
    "HrAnalysisSchema",
    ()=>HrAnalysisSchema,
    "ImprovementSchema",
    ()=>ImprovementSchema,
    "ImprovementsSchema",
    ()=>ImprovementsSchema,
    "IssueSchema",
    ()=>IssueSchema,
    "JdAnalysisSchema",
    ()=>JdAnalysisSchema,
    "JdSummarySchema",
    ()=>JdSummarySchema,
    "LiteOutputSchema",
    ()=>LiteOutputSchema,
    "OutputModeEnum",
    ()=>OutputModeEnum,
    "ProviderTypeEnum",
    ()=>ProviderTypeEnum,
    "RiskLevelEnum",
    ()=>RiskLevelEnum,
    "RoleSchema",
    ()=>RoleSchema,
    "ScoresSchema",
    ()=>ScoresSchema,
    "SeniorityLevelEnum",
    ()=>SeniorityLevelEnum,
    "SeverityLevelEnum",
    ()=>SeverityLevelEnum,
    "SkillMatchSchema",
    ()=>SkillMatchSchema,
    "StandardOutputSchema",
    ()=>StandardOutputSchema,
    "StrengthSchema",
    ()=>StrengthSchema,
    "StudentAnalysisSchema",
    ()=>StudentAnalysisSchema,
    "TEI_LABELS",
    ()=>TEI_LABELS,
    "clamp",
    ()=>clamp,
    "isValidIssueCode",
    ()=>isValidIssueCode,
    "scoreToGrade",
    ()=>scoreToGrade,
    "scoreToRiskLevel",
    ()=>scoreToRiskLevel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__ = __turbopack_context__.i("[project]/node_modules/zod/v3/external.js [app-route] (ecmascript) <export * as z>");
;
const OutputModeEnum = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum([
    "LITE",
    "STANDARD",
    "FULL"
]);
const AudienceTypeEnum = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum([
    "STUDENT",
    "HR"
]);
const SeverityLevelEnum = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum([
    "info",
    "low",
    "medium",
    "high",
    "critical"
]);
const GradeEnum = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum([
    "A",
    "A-",
    "B+",
    "B",
    "B-",
    "C+",
    "C",
    "D",
    "F"
]);
const RiskLevelEnum = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum([
    "LOW",
    "MODERATE",
    "HIGH",
    "CRITICAL"
]);
const HireDecisionEnum = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum([
    "STRONG_HIRE",
    "HIRE",
    "CONDITIONAL_HIRE",
    "NO_HIRE"
]);
const SeniorityLevelEnum = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum([
    "Entry",
    "Mid",
    "Senior",
    "Lead",
    "Principal",
    "Director",
    "VP",
    "C-Level"
]);
const IssueSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    code: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().describe("Issue code A1-H9"),
    issue: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().describe("Issue description"),
    severity: SeverityLevelEnum,
    count: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().default(1),
    fix: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional().describe("How to fix")
});
const StrengthSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    code: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().describe("Strength code D1-D8"),
    strength: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().describe("Strength description")
});
const ScoresSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    overall: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().min(0).max(100).describe("Overall CV quality 0-100"),
    grade: GradeEnum.describe("Letter grade A-F"),
    rawCompatibility: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().min(0).max(100).nullable().describe("JD match score (null if no JD)"),
    tei: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().min(1).max(5).nullable().describe("Transformation Effort Index 1-5"),
    candidateRisk: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().min(0).max(100).nullable().describe("Risk score for candidate"),
    employerRisk: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().min(0).max(100).nullable().describe("Risk score for employer")
});
const LiteOutputSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    version: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal("2.3"),
    mode: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal("LITE"),
    audience: AudienceTypeEnum,
    generatedAt: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    candidate: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    hasJd: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].boolean(),
    scores: ScoresSchema,
    verdict: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    topIssues: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(IssueSchema).max(3),
    topStrengths: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(StrengthSchema).max(3),
    bestFitRole: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().nullable(),
    nextAction: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    hireRecommendation: HireDecisionEnum.optional()
});
const CvSummarySchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    candidateName: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    totalYears: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number(),
    currentRole: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    seniorityLevel: SeniorityLevelEnum,
    topSkills: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()),
    certificationCount: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number()
});
const JdSummarySchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    jobTitle: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    company: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().nullable(),
    seniorityLevel: SeniorityLevelEnum,
    mustHaveSkills: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()),
    niceToHaveSkills: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()),
    experienceRequired: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()
});
const SkillMatchSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    tier1: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
        matched: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number(),
        total: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number(),
        score: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number()
    }),
    tier2: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
        matched: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number(),
        total: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number(),
        score: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number()
    }),
    tier3: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
        matched: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number(),
        total: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number(),
        score: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number()
    }),
    missingCritical: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()),
    ghostSkills: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string())
});
const ExperienceMatchSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    totalYearsMatch: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].boolean(),
    domainYearsMatch: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].boolean(),
    domainGap: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().nullable(),
    scopeMatch: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].boolean()
});
const BulletHealthSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    totalBullets: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number(),
    averageScore: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().min(0).max(100),
    distribution: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
        excellent: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number(),
        good: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number(),
        fair: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number(),
        poor: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number()
    }),
    topIssue: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    topFix: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()
});
const ImprovementSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    code: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    priority: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum([
        "critical",
        "high",
        "medium",
        "low"
    ]),
    action: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    impact: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    effort: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()
});
const ImprovementsSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    critical: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(ImprovementSchema),
    high: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(ImprovementSchema),
    medium: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(ImprovementSchema),
    scorePotential: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
        current: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number(),
        afterCritical: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number(),
        afterAll: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number(),
        ceiling: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number()
    })
});
const AlternativeRoleSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    role: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    fitScore: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().min(0).max(100),
    reason: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()
});
const StandardOutputSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    version: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal("2.3"),
    mode: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal("STANDARD"),
    audience: AudienceTypeEnum,
    generatedAt: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    cvSummary: CvSummarySchema,
    jdSummary: JdSummarySchema.optional(),
    scores: ScoresSchema,
    skillMatch: SkillMatchSchema.optional(),
    experienceMatch: ExperienceMatchSchema.optional(),
    bulletHealth: BulletHealthSchema,
    topIssues: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(IssueSchema).optional(),
    topStrengths: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(StrengthSchema).optional(),
    improvements: ImprovementsSchema,
    verdict: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    alternativeRoles: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(AlternativeRoleSchema).optional(),
    nextSteps: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
        immediate: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()),
        thisWeek: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()),
        beforeApplication: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string())
    }).optional(),
    encouragement: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
    riskLevel: RiskLevelEnum.optional(),
    hireRecommendation: HireDecisionEnum.optional(),
    verificationItems: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
        item: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
        priority: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum([
            "high",
            "medium",
            "low"
        ]),
        reason: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()
    })).optional(),
    interviewQuestions: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
        question: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
        probing: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
        redFlag: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()
    })).optional()
});
const BulletAnalysisSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    text: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    index: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number(),
    score: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number(),
    actionVerb: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
        word: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().nullable(),
        strength: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum([
            "strong",
            "moderate",
            "weak",
            "none"
        ]),
        score: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number()
    }),
    quantification: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
        hasQuantification: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].boolean(),
        type: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().nullable(),
        score: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number()
    }),
    result: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
        hasResult: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].boolean(),
        type: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum([
            "quantified",
            "implied",
            "missing"
        ]),
        score: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number()
    }),
    issues: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
        code: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
        issue: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()
    })),
    rewrite: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
        suggested: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
        projectedScore: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number()
    }).optional()
});
const RoleSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    title: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    company: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    location: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().nullable(),
    startDate: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    endDate: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    durationMonths: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number(),
    seniorityLevel: SeniorityLevelEnum,
    bullets: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(BulletAnalysisSchema),
    bulletSummary: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
        count: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number(),
        averageScore: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number(),
        excellent: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number(),
        poor: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number()
    })
});
const ExperienceFactorsSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    h1TotalYears: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
        years: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number(),
        score: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number(),
        assessment: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()
    }),
    h2DomainYears: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
        domain: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
        years: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number(),
        isPrimary: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].boolean(),
        score: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number()
    })),
    h3IndustryYears: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
        industry: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
        years: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number()
    })),
    h4Recency: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
        recentRelevance: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum([
            "Current",
            "Recent",
            "Dated"
        ]),
        score: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number()
    }),
    h5Scope: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
        level: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
        evidence: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()),
        score: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number()
    }),
    h6Complexity: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
        level: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
        evidence: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()),
        score: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number()
    }),
    h7Impact: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
        quantifiedCount: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number(),
        totalValue: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
        score: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number()
    }),
    h8Progression: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
        pattern: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
        trajectory: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
        score: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number()
    }),
    h9Specialization: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
        type: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
        primaryArea: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
        score: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number()
    })
});
const CvAnalysisSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    metadata: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
        candidateName: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
        email: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().nullable(),
        phone: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().nullable(),
        location: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().nullable(),
        linkedin: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().nullable(),
        documentStats: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
            pages: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number(),
            wordCount: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number(),
            bulletCount: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number()
        })
    }),
    professionalSummary: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
        text: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
        yearsMentioned: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().nullable(),
        keyThemes: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()),
        qualityScore: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number(),
        issues: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(IssueSchema)
    }),
    experience: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
        totalYears: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number(),
        roles: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(RoleSchema),
        progression: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
            pattern: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum([
                "Stagnant",
                "Slow",
                "Steady",
                "Accelerated",
                "Exceptional"
            ]),
            isHealthy: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].boolean(),
            assessment: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()
        }),
        gaps: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
            start: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
            end: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
            durationMonths: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number(),
            explained: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].boolean()
        }))
    }),
    skills: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
        validated: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
            skill: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
            evidence: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
            proficiency: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number()
        })),
        implied: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
            skill: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
            source: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()
        })),
        ghost: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
            skill: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
            reason: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()
        })),
        validationRate: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number()
    }),
    education: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
        degrees: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
            degree: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
            field: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
            institution: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
            year: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().nullable()
        })),
        certifications: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
            name: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
            issuer: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
            year: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().nullable(),
            status: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum([
                "Active",
                "Expired",
                "Unknown"
            ]),
            relevance: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum([
                "High",
                "Medium",
                "Low"
            ])
        }))
    }),
    experienceFactors: ExperienceFactorsSchema,
    bulletAnalysis: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
        totalBullets: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number(),
        averageScore: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number(),
        distribution: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
            excellent: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number(),
            good: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number(),
            fair: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number(),
            poor: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number()
        }),
        codeScores: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
            A10: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number(),
            A11: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number(),
            A12: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number(),
            A13: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number()
        }),
        rewritePriorities: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
            roleIndex: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number(),
            bulletIndex: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number(),
            currentText: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
            currentScore: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number(),
            suggestedRewrite: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
            projectedScore: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number()
        }))
    }),
    issuesDetected: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(IssueSchema),
    strengthsDetected: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(StrengthSchema)
});
const JdAnalysisSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    metadata: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
        jobTitle: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
        company: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().nullable(),
        seniorityLevel: SeniorityLevelEnum,
        location: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().nullable()
    }),
    requirements: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
        tier1Skills: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()),
        tier2Skills: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()),
        tier3Skills: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()),
        minimumYears: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number(),
        preferredYears: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().nullable(),
        education: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().nullable(),
        certifications: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string())
    }),
    hardGates: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
        requirement: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
        met: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].boolean(),
        scoreCap: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().nullable()
    })),
    jdNature: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
        roleType: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
        workStyle: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().nullable(),
        travelRequired: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].boolean(),
        managementLevel: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().nullable()
    })
});
const StudentAnalysisSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    overallCvQuality: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
        score: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number(),
        grade: GradeEnum,
        label: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
        summary: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()
    }),
    honestAssessment: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
        rawCompatibility: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
            score: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number(),
            analysis: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()
        }),
        transformationEffort: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
            level: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number(),
            timeline: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
            description: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()
        }),
        candidateRisk: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
            score: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number(),
            factors: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string())
        }),
        successProbability: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()
    }).optional(),
    improvements: ImprovementsSchema,
    bulletImprovements: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
        original: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
        rewritten: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
        scoreGain: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number(),
        issuesFixed: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string())
    })),
    gapStrategy: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
        fixable: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
            gap: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
            solution: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
            timeline: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()
        })),
        unfixable: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
            gap: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
            mitigation: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()
        }))
    }).optional(),
    alternatives: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
        betterFitRoles: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(AlternativeRoleSchema),
        steppingStones: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
            role: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
            gap: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
            timeline: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()
        }))
    }),
    nextSteps: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
        immediate: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()),
        thisWeek: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()),
        beforeApplication: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string())
    }),
    encouragement: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
        message: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
        competitiveAdvantages: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string())
    })
});
const HrAnalysisSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    riskAssessment: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
        employerRiskScore: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number(),
        breakdown: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
            skillVerification: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number(),
            experienceInflation: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number(),
            cultureFit: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number(),
            retention: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number(),
            performance: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number()
        }),
        redFlags: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
            flag: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
            severity: SeverityLevelEnum,
            evidence: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()
        }))
    }),
    verificationChecklist: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
        highPriority: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
            item: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
            reason: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
            method: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()
        })),
        mediumPriority: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
            item: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
            reason: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()
        }))
    }),
    interviewGuide: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
        mustAsk: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
            question: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
            lookFor: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
            redFlag: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()
        })),
        technicalProbes: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
            skill: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
            question: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
            expectedDepth: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()
        })),
        behavioralQuestions: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
            competency: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
            question: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()
        }))
    }),
    decisionSupport: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
        recommendation: HireDecisionEnum,
        confidence: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number(),
        conditions: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()),
        dealBreakers: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()),
        alternativeRoles: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string())
    }),
    compensationGuidance: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
        marketRange: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
        suggestedOffer: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
        negotiationFactors: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string())
    }).optional()
});
const FullOutputSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    version: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal("2.3"),
    mode: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal("FULL"),
    audience: AudienceTypeEnum,
    generatedAt: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    cvAnalysis: CvAnalysisSchema,
    jdAnalysis: JdAnalysisSchema.optional(),
    studentAnalysis: StudentAnalysisSchema.optional(),
    hrAnalysis: HrAnalysisSchema.optional()
});
const AnalysisOutputSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].discriminatedUnion("mode", [
    LiteOutputSchema,
    StandardOutputSchema,
    FullOutputSchema
]);
const ProviderTypeEnum = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum([
    "gemini",
    "openai"
]);
const AnalysisResponseSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    success: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].boolean(),
    error: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
    data: AnalysisOutputSchema,
    meta: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
        processingTimeMs: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number(),
        tokensUsed: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
            input: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number(),
            output: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number()
        }),
        modelUsed: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
        provider: ProviderTypeEnum.optional(),
        outputMode: OutputModeEnum,
        audience: AudienceTypeEnum
    })
});
function scoreToGrade(score) {
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
function scoreToRiskLevel(score) {
    if (score <= 25) return "LOW";
    if (score <= 50) return "MODERATE";
    if (score <= 75) return "HIGH";
    return "CRITICAL";
}
function isValidIssueCode(code) {
    return /^[A-H]\d{1,2}$/.test(code);
}
function clamp(value, min, max) {
    return Math.min(Math.max(value, min), max);
}
const GRADE_LABELS = {
    "A": "Excellent Match",
    "A-": "Strong Match",
    "B+": "Good Match",
    "B": "Moderate Match",
    "B-": "Fair Match",
    "C+": "Stretch Match",
    "C": "Weak Match",
    "D": "Poor Match",
    "F": "No Match"
};
const TEI_LABELS = {
    1: "Minimal (1-2 days)",
    2: "Light (1 week)",
    3: "Moderate (2-4 weeks)",
    4: "Heavy (1-6 months)",
    5: "Major Pivot (6+ months)"
};
}),
"[externals]/child_process [external] (child_process, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("child_process", () => require("child_process"));

module.exports = mod;
}),
"[externals]/fs [external] (fs, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("fs", () => require("fs"));

module.exports = mod;
}),
"[externals]/https [external] (https, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("https", () => require("https"));

module.exports = mod;
}),
"[externals]/stream [external] (stream, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("stream", () => require("stream"));

module.exports = mod;
}),
"[externals]/os [external] (os, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("os", () => require("os"));

module.exports = mod;
}),
"[externals]/events [external] (events, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("events", () => require("events"));

module.exports = mod;
}),
"[externals]/process [external] (process, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("process", () => require("process"));

module.exports = mod;
}),
"[externals]/util [external] (util, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("util", () => require("util"));

module.exports = mod;
}),
"[externals]/path [external] (path, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("path", () => require("path"));

module.exports = mod;
}),
"[externals]/crypto [external] (crypto, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("crypto", () => require("crypto"));

module.exports = mod;
}),
"[externals]/querystring [external] (querystring, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("querystring", () => require("querystring"));

module.exports = mod;
}),
"[externals]/buffer [external] (buffer, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("buffer", () => require("buffer"));

module.exports = mod;
}),
"[externals]/fs/promises [external] (fs/promises, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("fs/promises", () => require("fs/promises"));

module.exports = mod;
}),
"[externals]/node:stream [external] (node:stream, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:stream", () => require("node:stream"));

module.exports = mod;
}),
"[externals]/node:stream/promises [external] (node:stream/promises, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:stream/promises", () => require("node:stream/promises"));

module.exports = mod;
}),
"[externals]/zlib [external] (zlib, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("zlib", () => require("zlib"));

module.exports = mod;
}),
"[externals]/http [external] (http, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("http", () => require("http"));

module.exports = mod;
}),
"[externals]/net [external] (net, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("net", () => require("net"));

module.exports = mod;
}),
"[externals]/tls [external] (tls, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("tls", () => require("tls"));

module.exports = mod;
}),
"[externals]/url [external] (url, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("url", () => require("url"));

module.exports = mod;
}),
"[project]/lib/langchain/llm-providers.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * LLM Provider Abstraction Layer
 * Allows switching between different LLM providers (Gemini, OpenAI, etc.)
 * 
 * @version 1.0.0
 */ __turbopack_context__.s([
    "GeminiProvider",
    ()=>GeminiProvider,
    "OpenAIProvider",
    ()=>OpenAIProvider,
    "createProvider",
    ()=>createProvider,
    "getAvailableProviders",
    ()=>getAvailableProviders
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$google$2f$genai$2f$dist$2f$node$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@google/genai/dist/node/index.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$openai$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/openai/index.mjs [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$openai$2f$client$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__OpenAI__as__default$3e$__ = __turbopack_context__.i("[project]/node_modules/openai/client.mjs [app-route] (ecmascript) <export OpenAI as default>");
;
;
const DEFAULT_MODELS = {
    gemini: "gemini-2.5-flash",
    openai: "gpt-4o"
};
class GeminiProvider {
    name = "gemini";
    model;
    ai;
    temperature;
    maxOutputTokens;
    constructor(config = {}){
        this.model = config.model || DEFAULT_MODELS.gemini;
        this.temperature = config.temperature ?? 0.2;
        this.maxOutputTokens = config.maxOutputTokens ?? 16000;
        const userKey = process.env.GOOGLE_API_KEY;
        const replitKey = process.env.AI_INTEGRATIONS_GEMINI_API_KEY;
        const baseUrl = process.env.AI_INTEGRATIONS_GEMINI_BASE_URL;
        if (userKey) {
            this.ai = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$google$2f$genai$2f$dist$2f$node$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["GoogleGenAI"]({
                apiKey: userKey
            });
        } else if (replitKey) {
            this.ai = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$google$2f$genai$2f$dist$2f$node$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["GoogleGenAI"]({
                apiKey: replitKey,
                httpOptions: {
                    apiVersion: "",
                    baseUrl: baseUrl || undefined
                }
            });
        } else {
            throw new Error("No Gemini API key configured (GOOGLE_API_KEY or AI_INTEGRATIONS_GEMINI_API_KEY)");
        }
    }
    async generate(systemPrompt, userPrompt) {
        const response = await this.ai.models.generateContent({
            model: this.model,
            contents: [
                {
                    role: "user",
                    parts: [
                        {
                            text: `${systemPrompt}\n\n${userPrompt}`
                        }
                    ]
                }
            ],
            config: {
                maxOutputTokens: this.maxOutputTokens,
                temperature: this.temperature
            }
        });
        return {
            text: response.text?.trim() || "",
            usage: {
                inputTokens: response.usageMetadata?.promptTokenCount || 0,
                outputTokens: response.usageMetadata?.candidatesTokenCount || 0
            }
        };
    }
}
class OpenAIProvider {
    name = "openai";
    model;
    client;
    temperature;
    maxOutputTokens;
    constructor(config = {}){
        this.model = config.model || DEFAULT_MODELS.openai;
        this.temperature = config.temperature ?? 0.2;
        this.maxOutputTokens = config.maxOutputTokens ?? 8192;
        const apiKey = process.env.AI_INTEGRATIONS_OPENAI_API_KEY;
        const baseURL = process.env.AI_INTEGRATIONS_OPENAI_BASE_URL;
        if (!apiKey) {
            throw new Error("No OpenAI API key configured (AI_INTEGRATIONS_OPENAI_API_KEY)");
        }
        this.client = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$openai$2f$client$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__OpenAI__as__default$3e$__["default"]({
            apiKey,
            baseURL
        });
    }
    async generate(systemPrompt, userPrompt) {
        const isGpt5OrNewer = this.model.startsWith("gpt-5") || this.model.startsWith("o3") || this.model.startsWith("o4");
        const requestParams = {
            model: this.model,
            messages: [
                {
                    role: "system",
                    content: systemPrompt
                },
                {
                    role: "user",
                    content: userPrompt
                }
            ]
        };
        if (isGpt5OrNewer) {
            requestParams.max_completion_tokens = this.maxOutputTokens;
        } else {
            requestParams.max_tokens = this.maxOutputTokens;
            requestParams.temperature = this.temperature;
        }
        const response = await this.client.chat.completions.create(requestParams);
        const text = response.choices[0]?.message?.content?.trim() || "";
        return {
            text,
            usage: {
                inputTokens: response.usage?.prompt_tokens || 0,
                outputTokens: response.usage?.completion_tokens || 0
            }
        };
    }
}
function createProvider(config = {}) {
    const provider = config.provider || "gemini";
    switch(provider){
        case "openai":
            return new OpenAIProvider(config);
        case "gemini":
        default:
            return new GeminiProvider(config);
    }
}
function getAvailableProviders() {
    const available = [];
    if (process.env.GOOGLE_API_KEY || process.env.AI_INTEGRATIONS_GEMINI_API_KEY) {
        available.push("gemini");
    }
    if (process.env.AI_INTEGRATIONS_OPENAI_API_KEY) {
        available.push("openai");
    }
    return available;
}
}),
"[project]/lib/langchain/v23-cv-intelligence-chain.ts [app-route] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

/**
 * CV Intelligence Engine v2.3 - Main Chain
 * Pure v2.3 implementation - no legacy compatibility
 * Supports multiple LLM providers (Gemini, OpenAI, etc.)
 * 
 * @version 2.3.1
 * @file v23-cv-intelligence-chain.ts
 */ __turbopack_context__.s([
    "CvIntelligenceChain",
    ()=>CvIntelligenceChain,
    "analyzeCV",
    ()=>analyzeCV,
    "clearChainCache",
    ()=>clearChainCache,
    "getChain",
    ()=>getChain,
    "transformOutput",
    ()=>transformOutput
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$langchain$2f$v23$2d$cv$2d$intelligence$2d$schemas$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/langchain/v23-cv-intelligence-schemas.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$langchain$2f$llm$2d$providers$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/langchain/llm-providers.ts [app-route] (ecmascript)");
;
;
const DEFAULT_CONFIG = {
    provider: "gemini",
    model: "gemini-2.5-flash",
    temperature: 0.2,
    maxOutputTokens: 16000,
    maxRetries: 3,
    retryDelayMs: 1000
};
;
// ============================================================================
// UTILITIES
// ============================================================================
function repairAndParseJSON(text) {
    let cleaned = text.trim();
    const match = cleaned.match(/```(?:json)?\s*([\s\S]*?)```/);
    if (match) cleaned = match[1].trim();
    else {
        if (cleaned.startsWith("```json")) cleaned = cleaned.slice(7);
        else if (cleaned.startsWith("```")) cleaned = cleaned.slice(3);
        if (cleaned.endsWith("```")) cleaned = cleaned.slice(0, -3);
        cleaned = cleaned.trim();
    }
    try {
        return JSON.parse(cleaned);
    } catch  {}
    cleaned = cleaned.replace(/,(\s*[}\]])/g, "$1").replace(/([{,]\s*)(\w+)(\s*:)/g, '$1"$2"$3').replace(/'/g, '"').replace(/[\x00-\x1F\x7F]/g, "");
    try {
        return JSON.parse(cleaned);
    } catch  {}
    const objMatch = cleaned.match(/\{[\s\S]*\}/);
    if (objMatch) return JSON.parse(objMatch[0]);
    throw new Error("Failed to parse JSON from response");
}
async function withRetry(fn, maxRetries, delayMs) {
    let lastError;
    for(let attempt = 1; attempt <= maxRetries; attempt++){
        try {
            return await fn();
        } catch (e) {
            lastError = e instanceof Error ? e : new Error(String(e));
            if (attempt < maxRetries) {
                await new Promise((r)=>setTimeout(r, delayMs * Math.pow(2, attempt - 1)));
            }
        }
    }
    throw lastError;
}
function safeNum(v, d = 0) {
    const n = Number(v);
    return isNaN(n) ? d : n;
}
function safeStr(v, d = "") {
    return typeof v === "string" ? v : d;
}
function safeArr(v, d = []) {
    return Array.isArray(v) ? v : d;
}
function getPath(obj, ...paths) {
    for (const path of paths){
        let result = obj;
        for (const key of path.split(".")){
            if (result == null) break;
            const r = result;
            result = r[key] ?? r[key.replace(/_([a-z])/g, (_, l)=>l.toUpperCase())] ?? r[key.replace(/[A-Z]/g, (l)=>`_${l.toLowerCase()}`)];
        }
        if (result != null) return result;
    }
    return undefined;
}
// ============================================================================
// TRANSFORMERS
// ============================================================================
function transformToLite(raw, audience) {
    const data = raw || {};
    const result = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$langchain$2f$v23$2d$cv$2d$intelligence$2d$schemas$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["LiteOutputSchema"].safeParse(data);
    if (result.success) return result.data;
    const scores = getPath(data, "scores") || {};
    const overall = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$langchain$2f$v23$2d$cv$2d$intelligence$2d$schemas$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["clamp"])(safeNum(scores.overall, 70), 0, 100);
    const output = {
        version: "2.3",
        mode: "LITE",
        audience,
        generatedAt: new Date().toISOString(),
        candidate: safeStr(getPath(data, "candidate", "candidateName"), "Unknown"),
        hasJd: Boolean(getPath(data, "hasJd", "has_jd")),
        scores: {
            overall,
            grade: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$langchain$2f$v23$2d$cv$2d$intelligence$2d$schemas$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["scoreToGrade"])(overall),
            rawCompatibility: scores.rawCompatibility != null ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$langchain$2f$v23$2d$cv$2d$intelligence$2d$schemas$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["clamp"])(safeNum(scores.rawCompatibility), 0, 100) : null,
            tei: scores.tei != null ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$langchain$2f$v23$2d$cv$2d$intelligence$2d$schemas$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["clamp"])(safeNum(scores.tei), 1, 5) : null,
            candidateRisk: scores.candidateRisk != null ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$langchain$2f$v23$2d$cv$2d$intelligence$2d$schemas$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["clamp"])(safeNum(scores.candidateRisk), 0, 100) : null,
            employerRisk: scores.employerRisk != null ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$langchain$2f$v23$2d$cv$2d$intelligence$2d$schemas$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["clamp"])(safeNum(scores.employerRisk), 0, 100) : null
        },
        verdict: safeStr(getPath(data, "verdict"), `Score: ${overall}/100`),
        topIssues: safeArr(getPath(data, "topIssues", "top_issues")).slice(0, 3).map((i)=>{
            const issue = i;
            return {
                code: safeStr(issue.code, "A1"),
                issue: safeStr(issue.issue || issue.detail, "Unknown issue"),
                severity: issue.severity || "medium",
                count: safeNum(issue.count, 1),
                fix: issue.fix
            };
        }),
        topStrengths: safeArr(getPath(data, "topStrengths", "top_strengths")).slice(0, 3).map((s)=>{
            const str = s;
            return {
                code: safeStr(str.code, "D1"),
                strength: safeStr(str.strength || str.detail, "Unknown strength")
            };
        }),
        bestFitRole: getPath(data, "bestFitRole", "best_fit_role"),
        nextAction: safeStr(getPath(data, "nextAction", "next_action"), "Review and improve CV")
    };
    if (audience === "HR") {
        const hire = getPath(data, "hireRecommendation", "hire_recommendation");
        if (hire) output.hireRecommendation = hire;
    }
    return output;
}
function transformToStandard(raw, audience) {
    const data = raw || {};
    const result = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$langchain$2f$v23$2d$cv$2d$intelligence$2d$schemas$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["StandardOutputSchema"].safeParse(data);
    if (result.success) return result.data;
    const lite = transformToLite(raw, audience);
    const cvSum = getPath(data, "cvSummary", "cv_summary") || {};
    const jdSum = getPath(data, "jdSummary", "jd_summary");
    const bullet = getPath(data, "bulletHealth", "bullet_health") || {};
    const impr = getPath(data, "improvements") || {};
    const skillMatch = getPath(data, "skillMatch", "skill_match");
    const expMatch = getPath(data, "experienceMatch", "experience_match");
    const output = {
        version: "2.3",
        mode: "STANDARD",
        audience,
        generatedAt: new Date().toISOString(),
        cvSummary: {
            candidateName: safeStr(cvSum.candidateName || cvSum.candidate_name, lite.candidate),
            totalYears: safeNum(cvSum.totalYears || cvSum.total_years),
            currentRole: safeStr(cvSum.currentRole || cvSum.current_role, "Unknown"),
            seniorityLevel: cvSum.seniorityLevel || cvSum.seniority_level || "Mid",
            topSkills: safeArr(cvSum.topSkills || cvSum.top_skills).map(String),
            certificationCount: safeNum(cvSum.certificationCount || cvSum.certification_count)
        },
        jdSummary: jdSum ? {
            jobTitle: safeStr(jdSum.jobTitle || jdSum.job_title, "Unknown"),
            company: jdSum.company,
            seniorityLevel: jdSum.seniorityLevel || jdSum.seniority_level || "Mid",
            mustHaveSkills: safeArr(jdSum.mustHaveSkills || jdSum.must_have_skills).map(String),
            niceToHaveSkills: safeArr(jdSum.niceToHaveSkills || jdSum.nice_to_have_skills).map(String),
            experienceRequired: safeStr(jdSum.experienceRequired || jdSum.experience_required, "Not specified")
        } : undefined,
        scores: lite.scores,
        skillMatch: skillMatch ? {
            tier1: {
                matched: safeNum(skillMatch.tier1?.matched),
                total: safeNum(skillMatch.tier1?.total),
                score: safeNum(skillMatch.tier1?.score)
            },
            tier2: {
                matched: safeNum(skillMatch.tier2?.matched),
                total: safeNum(skillMatch.tier2?.total),
                score: safeNum(skillMatch.tier2?.score)
            },
            tier3: {
                matched: safeNum(skillMatch.tier3?.matched),
                total: safeNum(skillMatch.tier3?.total),
                score: safeNum(skillMatch.tier3?.score)
            },
            missingCritical: safeArr(skillMatch.missingCritical || skillMatch.missing_critical).map(String),
            ghostSkills: safeArr(skillMatch.ghostSkills || skillMatch.ghost_skills).map(String)
        } : undefined,
        experienceMatch: expMatch ? {
            totalYearsMatch: Boolean(expMatch.totalYearsMatch || expMatch.total_years_match),
            domainYearsMatch: Boolean(expMatch.domainYearsMatch || expMatch.domain_years_match),
            domainGap: expMatch.domainGap || expMatch.domain_gap,
            scopeMatch: Boolean(expMatch.scopeMatch || expMatch.scope_match)
        } : undefined,
        bulletHealth: {
            totalBullets: safeNum(bullet.totalBullets || bullet.total_bullets),
            averageScore: safeNum(bullet.averageScore || bullet.average_score, 70),
            distribution: {
                excellent: safeNum(bullet.distribution?.excellent),
                good: safeNum(bullet.distribution?.good),
                fair: safeNum(bullet.distribution?.fair),
                poor: safeNum(bullet.distribution?.poor)
            },
            topIssue: safeStr(bullet.topIssue || bullet.top_issue, "None identified"),
            topFix: safeStr(bullet.topFix || bullet.top_fix, lite.nextAction)
        },
        topIssues: safeArr(getPath(data, "topIssues", "top_issues")).map((i)=>{
            const issue = i;
            return {
                code: safeStr(issue.code, "A1"),
                issue: safeStr(issue.issue),
                severity: issue.severity || "medium",
                count: safeNum(issue.count, 1),
                fix: issue.fix
            };
        }),
        topStrengths: safeArr(getPath(data, "topStrengths", "top_strengths")).map((s)=>{
            const str = s;
            return {
                code: safeStr(str.code, "D1"),
                strength: safeStr(str.strength)
            };
        }),
        improvements: {
            critical: safeArr(impr.critical).map((i)=>typeof i === "string" ? {
                    code: "A1",
                    priority: "critical",
                    action: i,
                    impact: "High",
                    effort: "Medium"
                } : i),
            high: safeArr(impr.high).map((i)=>typeof i === "string" ? {
                    code: "A1",
                    priority: "high",
                    action: i,
                    impact: "Medium",
                    effort: "Medium"
                } : i),
            medium: safeArr(impr.medium).map((i)=>typeof i === "string" ? {
                    code: "A1",
                    priority: "medium",
                    action: i,
                    impact: "Low",
                    effort: "Low"
                } : i),
            scorePotential: {
                current: lite.scores.overall,
                afterCritical: safeNum(impr.scorePotential?.afterCritical, lite.scores.overall + 5),
                afterAll: safeNum(impr.scorePotential?.afterAll || impr.scorePotential?.afterFixes, lite.scores.overall + 10),
                ceiling: safeNum(impr.scorePotential?.ceiling, lite.scores.overall + 15)
            }
        },
        verdict: lite.verdict
    };
    if (audience === "STUDENT") {
        output.alternativeRoles = safeArr(getPath(data, "alternativeRoles", "alternative_roles")).map((r)=>{
            const role = r;
            return {
                role: safeStr(role.role),
                fitScore: safeNum(role.fitScore || role.fit_score),
                reason: safeStr(role.reason, "Good fit based on skills")
            };
        });
        const nextSteps = getPath(data, "nextSteps", "next_steps");
        output.nextSteps = typeof nextSteps === "object" && nextSteps ? nextSteps : {
            immediate: safeArr(nextSteps).map(String),
            thisWeek: [],
            beforeApplication: []
        };
        output.encouragement = safeStr(getPath(data, "encouragement"), "Keep improving your CV!");
    } else {
        output.riskLevel = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$langchain$2f$v23$2d$cv$2d$intelligence$2d$schemas$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["scoreToRiskLevel"])(lite.scores.employerRisk || 50);
        output.hireRecommendation = lite.hireRecommendation || "CONDITIONAL_HIRE";
        output.verificationItems = safeArr(getPath(data, "verificationItems", "topVerificationItems")).map((v)=>typeof v === "string" ? {
                item: v,
                priority: "medium",
                reason: "Requires verification"
            } : v);
        output.interviewQuestions = safeArr(getPath(data, "interviewQuestions")).map((q)=>{
            const ques = q;
            return {
                question: safeStr(ques.question),
                probing: safeStr(ques.probing, "Follow up on details"),
                redFlag: safeStr(ques.redFlag, "Vague or inconsistent answers")
            };
        });
    }
    return output;
}
function transformToFull(raw, audience) {
    const data = raw || {};
    const cvAnalysisRaw = getPath(data, "cvAnalysis", "cv_analysis") || {};
    const studentAnalysisRaw = getPath(data, "studentAnalysis", "student_analysis") || {};
    const hrAnalysisRaw = getPath(data, "hrAnalysis", "hr_analysis") || {};
    const metadataRaw = cvAnalysisRaw.metadata || {};
    const experienceRaw = cvAnalysisRaw.experience || {};
    const skillsRaw = cvAnalysisRaw.skills || {};
    const bulletAnalysisRaw = cvAnalysisRaw.bulletAnalysis || cvAnalysisRaw.bullet_analysis || {};
    const summaryRaw = cvAnalysisRaw.professionalSummary || cvAnalysisRaw.professional_summary || {};
    const educationRaw = cvAnalysisRaw.education || {};
    const expFactorsRaw = cvAnalysisRaw.experienceFactors || cvAnalysisRaw.experience_factors || {};
    const overallCvQualityRaw = studentAnalysisRaw.overallCvQuality || studentAnalysisRaw.overall_cv_quality;
    let overallScore = 0;
    let overallGrade = "B";
    let overallLabel = "Candidate Assessment";
    let overallSummary = "";
    if (typeof overallCvQualityRaw === "object" && overallCvQualityRaw !== null) {
        const qualityObj = overallCvQualityRaw;
        overallScore = safeNum(qualityObj.score, safeNum(bulletAnalysisRaw.averageScore, 70));
        overallGrade = qualityObj.grade || (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$langchain$2f$v23$2d$cv$2d$intelligence$2d$schemas$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["scoreToGrade"])(overallScore);
        overallLabel = safeStr(qualityObj.label, "Candidate Assessment");
        overallSummary = safeStr(qualityObj.summary, "");
    } else if (typeof overallCvQualityRaw === "string") {
        overallSummary = overallCvQualityRaw;
        overallScore = safeNum(bulletAnalysisRaw.averageScore, 70);
        overallGrade = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$langchain$2f$v23$2d$cv$2d$intelligence$2d$schemas$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["scoreToGrade"])(overallScore);
        overallLabel = overallScore >= 85 ? "Strong Candidate" : overallScore >= 70 ? "Good Candidate" : overallScore >= 50 ? "Needs Improvement" : "Weak Candidate";
    } else {
        overallScore = safeNum(hrAnalysisRaw.overallScore || bulletAnalysisRaw.averageScore, 70);
        overallGrade = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$langchain$2f$v23$2d$cv$2d$intelligence$2d$schemas$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["scoreToGrade"])(overallScore);
    }
    const cvAnalysis = {
        metadata: {
            candidateName: safeStr(metadataRaw.candidateName || metadataRaw.candidate_name, "Unknown"),
            email: metadataRaw.email || null,
            phone: metadataRaw.phone || null,
            location: metadataRaw.location || null,
            linkedin: metadataRaw.linkedin || null,
            documentStats: {
                pages: safeNum(metadataRaw.documentStats?.pages, 1),
                wordCount: safeNum(metadataRaw.documentStats?.wordCount || metadataRaw.documentStats?.word_count, 0),
                bulletCount: safeNum(metadataRaw.documentStats?.bulletCount || metadataRaw.documentStats?.bullet_count, 0)
            }
        },
        professionalSummary: {
            text: safeStr(summaryRaw.text, ""),
            yearsMentioned: safeNum(summaryRaw.yearsMentioned || summaryRaw.years_mentioned, 0) || null,
            keyThemes: safeArr(summaryRaw.keyThemes || summaryRaw.key_themes).map(String),
            qualityScore: safeNum(summaryRaw.qualityScore || summaryRaw.quality_score, 50),
            issues: safeArr(summaryRaw.issues).map((i)=>{
                const issue = i;
                return {
                    code: safeStr(issue.code, "A1"),
                    issue: safeStr(issue.issue, ""),
                    severity: issue.severity || "medium",
                    count: safeNum(issue.count, 1),
                    fix: safeStr(issue.fix)
                };
            })
        },
        experience: {
            totalYears: safeNum(experienceRaw.totalYears || experienceRaw.total_years, 0),
            roles: safeArr(experienceRaw.roles).map((r)=>{
                const role = r;
                const bullets = safeArr(role.bullets);
                return {
                    title: safeStr(role.title, ""),
                    company: safeStr(role.company, ""),
                    location: role.location || null,
                    startDate: safeStr(role.startDate || role.start_date, ""),
                    endDate: safeStr(role.endDate || role.end_date, "Present"),
                    durationMonths: safeNum(role.durationMonths || role.duration_months, 12),
                    seniorityLevel: role.seniorityLevel || role.seniority_level || "Mid",
                    bullets: bullets.map((b, idx)=>{
                        const bullet = typeof b === "string" ? {
                            text: b
                        } : b;
                        const av = bullet.actionVerb || bullet.action_verb || {};
                        const q = bullet.quantification || {};
                        const res = bullet.result || {};
                        return {
                            text: safeStr(bullet.text, ""),
                            index: safeNum(bullet.index, idx),
                            score: safeNum(bullet.score, 50),
                            actionVerb: {
                                word: av.word || null,
                                strength: av.strength || "moderate",
                                score: safeNum(av.score, 50)
                            },
                            quantification: {
                                hasQuantification: !!q.hasQuantification,
                                type: q.type || null,
                                score: safeNum(q.score, 50)
                            },
                            result: {
                                hasResult: !!res.hasResult,
                                type: res.type || "missing",
                                score: safeNum(res.score, 30)
                            },
                            issues: safeArr(bullet.issues).map((i)=>({
                                    code: safeStr(i.code, "A10"),
                                    issue: safeStr(i.issue, "")
                                })),
                            rewrite: bullet.rewrite ? {
                                suggested: safeStr(bullet.rewrite.suggested, ""),
                                projectedScore: safeNum(bullet.rewrite.projectedScore, 70)
                            } : undefined
                        };
                    }),
                    bulletSummary: {
                        count: bullets.length,
                        averageScore: safeNum(role.bulletSummary?.averageScore, 50),
                        excellent: safeNum(role.bulletSummary?.excellent, 0),
                        poor: safeNum(role.bulletSummary?.poor, 0)
                    }
                };
            }),
            progression: {
                pattern: experienceRaw.progression?.pattern || "Steady",
                isHealthy: !!experienceRaw.progression?.isHealthy,
                assessment: safeStr(experienceRaw.progression?.assessment, "Career progression appears steady")
            },
            gaps: safeArr(experienceRaw.gaps).map((g)=>{
                const gap = g;
                return {
                    start: safeStr(gap.start, ""),
                    end: safeStr(gap.end, ""),
                    durationMonths: safeNum(gap.durationMonths || gap.duration_months, 0),
                    explained: !!gap.explained
                };
            })
        },
        skills: {
            validated: safeArr(skillsRaw.validated).map((s)=>{
                const skill = s;
                return {
                    skill: safeStr(skill.skill, ""),
                    evidence: safeStr(skill.evidence, ""),
                    proficiency: safeNum(skill.proficiency, 70)
                };
            }),
            implied: safeArr(skillsRaw.implied).map((s)=>{
                const skill = s;
                return {
                    skill: safeStr(skill.skill, ""),
                    source: safeStr(skill.source, "")
                };
            }),
            ghost: safeArr(skillsRaw.ghost).map((s)=>{
                const skill = s;
                return {
                    skill: safeStr(skill.skill, ""),
                    reason: safeStr(skill.reason, "Not validated")
                };
            }),
            validationRate: safeNum(skillsRaw.validationRate || skillsRaw.validation_rate, 70)
        },
        education: {
            degrees: safeArr(educationRaw.degrees).map((d)=>{
                const deg = d;
                return {
                    degree: safeStr(deg.degree, ""),
                    field: safeStr(deg.field, ""),
                    institution: safeStr(deg.institution, ""),
                    year: deg.year || null
                };
            }),
            certifications: safeArr(educationRaw.certifications).map((c)=>{
                const cert = c;
                return {
                    name: safeStr(cert.name, ""),
                    issuer: safeStr(cert.issuer, ""),
                    year: cert.year || null,
                    status: cert.status || "Unknown",
                    relevance: cert.relevance || "Medium"
                };
            })
        },
        experienceFactors: {
            h1TotalYears: {
                years: safeNum(expFactorsRaw.h1TotalYears?.years, 0),
                score: safeNum(expFactorsRaw.h1TotalYears?.score, 50),
                assessment: safeStr(expFactorsRaw.h1TotalYears?.assessment, "")
            },
            h2DomainYears: safeArr(expFactorsRaw.h2DomainYears).map((d)=>{
                const domain = d;
                return {
                    domain: safeStr(domain.domain, ""),
                    years: safeNum(domain.years, 0),
                    isPrimary: !!domain.isPrimary,
                    score: safeNum(domain.score, 50)
                };
            }),
            h3IndustryYears: safeArr(expFactorsRaw.h3IndustryYears).map((i)=>({
                    industry: safeStr(i.industry, ""),
                    years: safeNum(i.years, 0)
                })),
            h4Recency: {
                recentRelevance: expFactorsRaw.h4Recency?.recentRelevance || "Recent",
                score: safeNum(expFactorsRaw.h4Recency?.score, 70)
            },
            h5Scope: {
                level: safeStr(expFactorsRaw.h5Scope?.level, ""),
                evidence: safeArr(expFactorsRaw.h5Scope?.evidence).map(String),
                score: safeNum(expFactorsRaw.h5Scope?.score, 50)
            },
            h6Complexity: {
                level: safeStr(expFactorsRaw.h6Complexity?.level, ""),
                evidence: safeArr(expFactorsRaw.h6Complexity?.evidence).map(String),
                score: safeNum(expFactorsRaw.h6Complexity?.score, 50)
            },
            h7Impact: {
                quantifiedCount: safeNum(expFactorsRaw.h7Impact?.quantifiedCount, 0),
                totalValue: safeStr(expFactorsRaw.h7Impact?.totalValue, ""),
                score: safeNum(expFactorsRaw.h7Impact?.score, 50)
            },
            h8Progression: {
                pattern: safeStr(expFactorsRaw.h8Progression?.pattern, ""),
                trajectory: safeStr(expFactorsRaw.h8Progression?.trajectory, ""),
                score: safeNum(expFactorsRaw.h8Progression?.score, 50)
            },
            h9Specialization: {
                type: safeStr(expFactorsRaw.h9Specialization?.type, ""),
                primaryArea: safeStr(expFactorsRaw.h9Specialization?.primaryArea, ""),
                score: safeNum(expFactorsRaw.h9Specialization?.score, 50)
            }
        },
        bulletAnalysis: {
            totalBullets: safeNum(bulletAnalysisRaw.totalBullets || bulletAnalysisRaw.total_bullets, 0),
            averageScore: Math.min(100, safeNum(bulletAnalysisRaw.averageScore || bulletAnalysisRaw.average_score, 50)),
            distribution: {
                excellent: safeNum(bulletAnalysisRaw.distribution?.excellent, 0),
                good: safeNum(bulletAnalysisRaw.distribution?.good, 0),
                fair: safeNum(bulletAnalysisRaw.distribution?.fair, 0),
                poor: safeNum(bulletAnalysisRaw.distribution?.poor, 0)
            },
            codeScores: {
                A10: safeNum(bulletAnalysisRaw.codeScores?.A10, 50),
                A11: safeNum(bulletAnalysisRaw.codeScores?.A11, 50),
                A12: safeNum(bulletAnalysisRaw.codeScores?.A12, 50),
                A13: safeNum(bulletAnalysisRaw.codeScores?.A13, 50)
            },
            rewritePriorities: safeArr(bulletAnalysisRaw.rewritePriorities || bulletAnalysisRaw.rewrite_priorities).map((r)=>{
                const rewrite = r;
                return {
                    roleIndex: safeNum(rewrite.roleIndex || rewrite.role_index, 0),
                    bulletIndex: safeNum(rewrite.bulletIndex || rewrite.bullet_index, 0),
                    currentText: safeStr(rewrite.currentText || rewrite.current_text, ""),
                    currentScore: safeNum(rewrite.currentScore || rewrite.current_score, 30),
                    suggestedRewrite: safeStr(rewrite.suggestedRewrite || rewrite.suggested_rewrite, ""),
                    projectedScore: safeNum(rewrite.projectedScore || rewrite.projected_score, 70)
                };
            })
        },
        issuesDetected: safeArr(cvAnalysisRaw.issuesDetected || cvAnalysisRaw.issues_detected).map((i)=>{
            const issue = i;
            return {
                code: safeStr(issue.code, "A1"),
                issue: safeStr(issue.issue, ""),
                severity: issue.severity || "medium",
                count: safeNum(issue.count, 1),
                fix: safeStr(issue.fix)
            };
        }),
        strengthsDetected: safeArr(cvAnalysisRaw.strengthsDetected || cvAnalysisRaw.strengths_detected).map((s)=>{
            const strength = s;
            return {
                code: safeStr(strength.code, "D1"),
                strength: safeStr(strength.strength, "")
            };
        })
    };
    let studentAnalysis = undefined;
    let hrAnalysis = undefined;
    if (audience === "STUDENT") {
        const improvementsRaw = studentAnalysisRaw.improvements || {};
        const alternativesRaw = studentAnalysisRaw.alternatives || {};
        const nextStepsRaw = studentAnalysisRaw.nextSteps || studentAnalysisRaw.next_steps || {};
        const encouragementRaw = studentAnalysisRaw.encouragement;
        const honestRaw = studentAnalysisRaw.honestAssessment || studentAnalysisRaw.honest_assessment || {};
        const gapStrategyRaw = studentAnalysisRaw.gapStrategy || studentAnalysisRaw.gap_strategy || {};
        studentAnalysis = {
            overallCvQuality: {
                score: Math.min(100, Math.max(0, overallScore)),
                grade: overallGrade,
                label: overallLabel,
                summary: overallSummary
            },
            honestAssessment: typeof honestRaw === "string" ? undefined : {
                rawCompatibility: {
                    score: safeNum(honestRaw.rawCompatibility?.score, 70),
                    analysis: safeStr(honestRaw.rawCompatibility?.analysis, "")
                },
                transformationEffort: {
                    level: safeNum(honestRaw.transformationEffort?.level, 2),
                    timeline: safeStr(honestRaw.transformationEffort?.timeline, "1-2 weeks"),
                    description: safeStr(honestRaw.transformationEffort?.description, "")
                },
                candidateRisk: {
                    score: safeNum(honestRaw.candidateRisk?.score, 30),
                    factors: safeArr(honestRaw.candidateRisk?.factors).map(String)
                },
                successProbability: safeStr(honestRaw.successProbability, "Moderate")
            },
            improvements: {
                critical: safeArr(improvementsRaw.critical).map((i)=>typeof i === "string" ? {
                        code: "A1",
                        priority: "critical",
                        action: i,
                        impact: "High",
                        effort: "Medium"
                    } : i),
                high: safeArr(improvementsRaw.high).map((i)=>typeof i === "string" ? {
                        code: "A1",
                        priority: "high",
                        action: i,
                        impact: "Medium",
                        effort: "Medium"
                    } : i),
                medium: safeArr(improvementsRaw.medium).map((i)=>typeof i === "string" ? {
                        code: "A1",
                        priority: "medium",
                        action: i,
                        impact: "Low",
                        effort: "Low"
                    } : i),
                scorePotential: {
                    current: overallScore,
                    afterCritical: safeNum(improvementsRaw.scorePotential?.afterCritical, Math.min(100, overallScore + 5)),
                    afterAll: safeNum(improvementsRaw.scorePotential?.afterAll, Math.min(100, overallScore + 10)),
                    ceiling: safeNum(improvementsRaw.scorePotential?.ceiling, Math.min(100, overallScore + 15))
                }
            },
            bulletImprovements: safeArr(studentAnalysisRaw.bulletImprovements || studentAnalysisRaw.bullet_improvements).map((b)=>{
                const bullet = b;
                return {
                    original: safeStr(bullet.original, ""),
                    rewritten: safeStr(bullet.rewritten || bullet.improved, ""),
                    scoreGain: safeNum(bullet.scoreGain || bullet.score_gain, 10),
                    issuesFixed: safeArr(bullet.issuesFixed || bullet.issues_fixed).map(String)
                };
            }),
            gapStrategy: {
                fixable: safeArr(gapStrategyRaw.fixable).map((g)=>({
                        gap: safeStr(g.gap, ""),
                        solution: safeStr(g.solution, ""),
                        timeline: safeStr(g.timeline, "")
                    })),
                unfixable: safeArr(gapStrategyRaw.unfixable).map((g)=>({
                        gap: safeStr(g.gap, ""),
                        mitigation: safeStr(g.mitigation, "")
                    }))
            },
            alternatives: {
                betterFitRoles: safeArr(alternativesRaw.betterFitRoles || alternativesRaw.better_fit_roles).map((r)=>({
                        role: safeStr(r.role, ""),
                        fitScore: safeNum(r.fitScore || r.fit_score, 70),
                        reason: safeStr(r.reason, "")
                    })),
                steppingStones: safeArr(alternativesRaw.steppingStones || alternativesRaw.stepping_stones).map((s)=>({
                        role: safeStr(s.role, ""),
                        gap: safeStr(s.gap, ""),
                        timeline: safeStr(s.timeline, "")
                    }))
            },
            nextSteps: {
                immediate: safeArr(nextStepsRaw.immediate).map(String),
                thisWeek: safeArr(nextStepsRaw.thisWeek || nextStepsRaw.this_week).map(String),
                beforeApplication: safeArr(nextStepsRaw.beforeApplication || nextStepsRaw.before_application).map(String)
            },
            encouragement: typeof encouragementRaw === "string" ? {
                message: encouragementRaw,
                competitiveAdvantages: []
            } : {
                message: safeStr(encouragementRaw?.message, "Keep improving your CV!"),
                competitiveAdvantages: safeArr(encouragementRaw?.competitiveAdvantages || encouragementRaw?.competitive_advantages).map(String)
            }
        };
    } else if (audience === "HR") {
        hrAnalysis = hrAnalysisRaw;
    }
    const output = {
        version: "2.3",
        mode: "FULL",
        audience,
        generatedAt: new Date().toISOString(),
        cvAnalysis,
        jdAnalysis: getPath(data, "jdAnalysis", "jd_analysis"),
        studentAnalysis,
        hrAnalysis
    };
    return output;
}
function transformOutput(raw, mode, audience) {
    switch(mode){
        case "LITE":
            return transformToLite(raw, audience);
        case "STANDARD":
            return transformToStandard(raw, audience);
        case "FULL":
            return transformToFull(raw, audience);
    }
}
// ============================================================================
// PROMPTS
// ============================================================================
function buildSystemPrompt() {
    return `You are CV Intelligence Analyst v2.3.

CORE PRINCIPLES:
1. HONEST - Never inflate scores. A 52% is a 52%.
2. ACTIONABLE - Every issue has a specific fix with effort estimate.
3. SPECIFIC - Use exact quotes, numbers, and issue codes.
4. BALANCED - Acknowledge strengths before issues.

ISSUE CODES:
- A1-A13: ATS & Structure (A10-A13 for bullet analysis)
- B1-B8: Content Realism
- C1-C6: Skill Validation
- D1-D8: Strengths
- E1-E6: Tone & Clarity
- F1-F5: Timeline
- G1-G9: Nature & Fit
- H1-H9: Experience Depth

SCORING:
- Grade: A(90+), A-(85-89), B+(80-84), B(70-79), B-(65-69), C+(60-64), C(50-59), D(40-49), F(<40)
- TEI: 1(Minimal 1-2d), 2(Light 1w), 3(Moderate 2-4w), 4(Heavy 1-6mo), 5(Major 6mo+)
- Hard Gates: Missing >50% Tier1 → Max 50, Domain <50% → Max 55, Seniority gap >2 → Max 45

BULLET SCORING:
- Strong verbs (100): Led, Delivered, Achieved, Built, Pioneered
- Moderate (70): Supported, Contributed, Collaborated
- Weak (40): Helped, Worked on, Was responsible for
- Result types: Quantified(100), Implied(70), Missing(30)

Always respond with valid JSON only. No markdown formatting around the JSON.`;
}
function buildUserPrompt(cv, jd, mode, audience) {
    let prompt = `## ANALYSIS REQUEST
**Output Mode**: ${mode}
**Audience**: ${audience}

## CV CONTENT
\`\`\`
${cv}
\`\`\`
`;
    if (jd) {
        prompt += `
## JOB DESCRIPTION
\`\`\`
${jd}
\`\`\`
`;
    }
    prompt += `
## REQUIRED OUTPUT (${mode} format)
`;
    if (mode === "LITE") {
        prompt += `Return ~800 tokens JSON:
{
  "version": "2.3",
  "mode": "LITE",
  "audience": "${audience}",
  "generatedAt": "<ISO timestamp>",
  "candidate": "<Full Name>",
  "hasJd": ${!!jd},
  "scores": {
    "overall": <0-100>,
    "grade": "<A|A-|B+|B|B-|C+|C|D|F>",
    "rawCompatibility": ${jd ? "<0-100>" : "null"},
    "tei": ${jd ? "<1-5>" : "null"},
    "candidateRisk": ${jd ? "<0-100>" : "null"},
    "employerRisk": ${jd ? "<0-100>" : "null"}
  },
  "verdict": "<One sentence summary>",
  "topIssues": [{"code": "<A1-H9>", "issue": "<description>", "severity": "<critical|high|medium|low>", "count": <N>, "fix": "<how to fix>"}],
  "topStrengths": [{"code": "<D1-D8>", "strength": "<description>"}],
  "bestFitRole": "<Role Name (XX%)>" or null,
  "nextAction": "<Most important single action>"${audience === "HR" ? ',\n  "hireRecommendation": "<STRONG_HIRE|HIRE|CONDITIONAL_HIRE|NO_HIRE>"' : ""}
}`;
    } else if (mode === "STANDARD") {
        prompt += `Return ~2500 tokens JSON with all of:
- cvSummary: {candidateName, totalYears, currentRole, seniorityLevel, topSkills[], certificationCount}
${jd ? "- jdSummary: {jobTitle, company, seniorityLevel, mustHaveSkills[], niceToHaveSkills[], experienceRequired}" : ""}
- scores: {overall, grade, rawCompatibility, tei, candidateRisk, employerRisk}
${jd ? "- skillMatch: {tier1/2/3 {matched, total, score}, missingCritical[], ghostSkills[]}" : ""}
${jd ? "- experienceMatch: {totalYearsMatch, domainYearsMatch, domainGap, scopeMatch}" : ""}
- bulletHealth: {totalBullets, averageScore, distribution{excellent,good,fair,poor}, topIssue, topFix}
- topIssues: [{code, issue, severity, count, fix}] (top 5 issues detected A1-H9)
- topStrengths: [{code, strength}] (top 5 strengths D1-D8)
- improvements: {critical[], high[], medium[]} where each item is {code, priority, action, impact, effort}
- improvements.scorePotential: {current, afterCritical, afterAll, ceiling}
- verdict: "<assessment summary>"
${audience === "STUDENT" ? "- alternativeRoles: [{role, fitScore, reason}]\n- nextSteps: {immediate[], thisWeek[], beforeApplication[]}\n- encouragement" : "- riskLevel, hireRecommendation\n- verificationItems: [{item, priority, reason}]\n- interviewQuestions: [{question, probing, redFlag}]"}`;
    } else {
        prompt += `Return ~5000 tokens comprehensive JSON with:
- cvAnalysis: {metadata, professionalSummary, experience{totalYears, roles[], progression, gaps[]}, skills{validated[], implied[], ghost[], validationRate}, education, experienceFactors{h1-h9}, bulletAnalysis{totalBullets, averageScore, distribution, codeScores, rewritePriorities[]}, issuesDetected[], strengthsDetected[]}
${jd ? "- jdAnalysis: {metadata, requirements{tier1/2/3Skills[], minimumYears, education, certifications[]}, hardGates[], jdNature}" : ""}
${audience === "STUDENT" ? `- studentAnalysis: {
  overallCvQuality: {score: <0-100>, grade: "<A|A-|B+|B|B-|C+|C|D|F>", label: "<e.g. Strong Candidate>", summary: "<brief assessment>"},
  honestAssessment: {rawCompatibility: {score, analysis}, transformationEffort: {level: 1-5, timeline, description}, candidateRisk: {score, factors[]}, successProbability: "<assessment>"},
  improvements: {critical[], high[], medium[], scorePotential: {current, afterCritical, afterAll, ceiling}},
  bulletImprovements: [{original, rewritten, scoreGain, issuesFixed[]}],
  gapStrategy: {fixable: [{gap, solution, timeline}], unfixable: [{gap, mitigation}]},
  alternatives: {betterFitRoles: [{role, fitScore, reason}], steppingStones: [{role, gap, timeline}]},
  nextSteps: {immediate[], thisWeek[], beforeApplication[]},
  encouragement: {message, competitiveAdvantages[]}
}` : `- hrAnalysis: {
  riskAssessment: {employerRiskScore, breakdown: {skillVerification, experienceInflation, cultureFit, retention, performance}, redFlags: [{flag, severity, evidence}]},
  verificationChecklist: {highPriority: [{item, reason, method}], mediumPriority: [{item, reason}]},
  interviewGuide: {mustAsk: [{question, lookFor, redFlag}], technicalProbes: [{skill, question, expectedDepth}], behavioralQuestions: [{competency, question}]},
  decisionSupport: {recommendation: "<STRONG_HIRE|HIRE|CONDITIONAL_HIRE|NO_HIRE>", confidence: <0-100>, conditions[], dealBreakers[], alternativeRoles[]},
  compensationGuidance: {marketRange, suggestedOffer, negotiationFactors[]}
}`}`;
    }
    return prompt;
}
class CvIntelligenceChain {
    provider;
    config;
    constructor(config = {}){
        const mergedConfig = {
            ...DEFAULT_CONFIG,
            ...config
        };
        if (config.provider === "openai" && !config.model) {
            mergedConfig.model = "gpt-4o";
        }
        this.config = mergedConfig;
        this.provider = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$langchain$2f$llm$2d$providers$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createProvider"])({
            provider: this.config.provider,
            model: this.config.model,
            temperature: this.config.temperature,
            maxOutputTokens: this.config.maxOutputTokens
        });
        console.log(`[CvIntelligenceChain] Initialized with provider: ${this.provider.name}, model: ${this.provider.model}`);
    }
    get providerName() {
        return this.provider.name;
    }
    get modelName() {
        return this.provider.model;
    }
    async analyze(request) {
        const startTime = Date.now();
        const timings = {};
        const { cvContent, jdContent, outputMode = "STANDARD", audience = "STUDENT" } = request;
        console.log(`[TIMING] Assessment starting - mode: ${outputMode}, audience: ${audience}, cvLength: ${cvContent.length} chars`);
        try {
            const result = await withRetry(async ()=>{
                const promptStart = Date.now();
                const systemPrompt = buildSystemPrompt();
                const userPrompt = buildUserPrompt(cvContent, jdContent, outputMode, audience);
                timings.promptBuild = Date.now() - promptStart;
                console.log(`[TIMING] Prompt build: ${timings.promptBuild}ms, total prompt length: ${(systemPrompt + userPrompt).length} chars`);
                const apiStart = Date.now();
                console.log(`[TIMING] Calling ${this.provider.name} API (model: ${this.provider.model})...`);
                const response = await this.provider.generate(systemPrompt, userPrompt);
                const apiDuration = Date.now() - apiStart;
                console.log(`[TIMING] ${this.provider.name} API response: ${apiDuration}ms, input tokens: ${response.usage.inputTokens}, output tokens: ${response.usage.outputTokens}`);
                const text = response.text;
                if (!text) throw new Error("Empty response from AI");
                const parseStart = Date.now();
                const parsed = repairAndParseJSON(text);
                const parseDuration = Date.now() - parseStart;
                console.log(`[TIMING] JSON parsing: ${parseDuration}ms, response length: ${text.length} chars`);
                const transformStart = Date.now();
                const transformed = transformOutput(parsed, outputMode, audience);
                const transformDuration = Date.now() - transformStart;
                console.log(`[TIMING] Transform output: ${transformDuration}ms`);
                return {
                    data: transformed,
                    tokens: {
                        input: response.usage.inputTokens,
                        output: response.usage.outputTokens
                    },
                    timings: {
                        promptBuild: timings.promptBuild,
                        apiCall: apiDuration,
                        jsonParse: parseDuration,
                        transform: transformDuration
                    }
                };
            }, this.config.maxRetries, this.config.retryDelayMs);
            const totalDuration = Date.now() - startTime;
            console.log(`[TIMING] Assessment Complete - Total: ${totalDuration}ms | Breakdown: prompt=${result.timings?.promptBuild || 0}ms, API=${result.timings?.apiCall || 0}ms, parse=${result.timings?.jsonParse || 0}ms, transform=${result.timings?.transform || 0}ms`);
            return {
                success: true,
                data: result.data,
                meta: {
                    processingTimeMs: totalDuration,
                    tokensUsed: result.tokens,
                    modelUsed: this.provider.model,
                    provider: this.provider.name,
                    outputMode,
                    audience
                }
            };
        } catch (e) {
            const errorMsg = e instanceof Error ? e.message : "Unknown error";
            const fallback = transformToLite({
                candidate: "Unknown",
                hasJd: !!jdContent,
                scores: {
                    overall: 0
                },
                verdict: `Analysis failed: ${errorMsg}`,
                topIssues: [],
                topStrengths: [],
                nextAction: "Retry analysis"
            }, audience);
            return {
                success: false,
                error: errorMsg,
                data: fallback,
                meta: {
                    processingTimeMs: Date.now() - startTime,
                    tokensUsed: {
                        input: 0,
                        output: 0
                    },
                    modelUsed: this.provider.model,
                    provider: this.provider.name,
                    outputMode,
                    audience
                }
            };
        }
    }
    async quickCheck(cvContent) {
        const response = await this.analyze({
            cvContent,
            outputMode: "LITE",
            audience: "STUDENT"
        });
        return response.data;
    }
    async assessCV(cvContent, outputMode = "STANDARD") {
        return this.analyze({
            cvContent,
            outputMode,
            audience: "STUDENT"
        });
    }
    async matchForStudent(cvContent, jdContent, outputMode = "STANDARD") {
        return this.analyze({
            cvContent,
            jdContent,
            outputMode,
            audience: "STUDENT"
        });
    }
    async matchForHR(cvContent, jdContent, outputMode = "STANDARD") {
        return this.analyze({
            cvContent,
            jdContent,
            outputMode,
            audience: "HR"
        });
    }
}
// ============================================================================
// SINGLETON & CONVENIENCE FUNCTIONS
// ============================================================================
const chainInstances = new Map();
function getChainKey(config) {
    return `${config?.provider || "gemini"}-${config?.model || "default"}`;
}
function getChain(config) {
    const key = getChainKey(config);
    let instance = chainInstances.get(key);
    if (!instance) {
        instance = new CvIntelligenceChain(config);
        chainInstances.set(key, instance);
    }
    return instance;
}
function clearChainCache() {
    chainInstances.clear();
}
async function analyzeCV(cvContent, options) {
    const chain = getChain({
        provider: options?.provider,
        model: options?.model
    });
    return chain.analyze({
        cvContent,
        jdContent: options?.jdContent,
        outputMode: options?.outputMode || "STANDARD",
        audience: options?.audience || "STUDENT"
    });
}
}),
"[project]/app/api/assess/langchain/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @fileoverview CV Assessment API v2.3
 * @description Direct v2.3 implementation with multi-provider support
 * 
 * @endpoint POST /api/assess/langchain
 * @accepts application/json with { cv: ParsedCV, outputMode?: "LITE"|"STANDARD"|"FULL", audience?: "STUDENT"|"HR", provider?: "gemini"|"openai", model?: string }
 * @returns {Object} v2.3 AnalysisResponse
 */ __turbopack_context__.s([
    "POST",
    ()=>POST
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$langchain$2f$v23$2d$cv$2d$intelligence$2d$chain$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/lib/langchain/v23-cv-intelligence-chain.ts [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$langchain$2f$llm$2d$providers$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/langchain/llm-providers.ts [app-route] (ecmascript)");
;
;
function formatCVText(cv) {
    const sections = [];
    if (cv.name) sections.push(`NAME: ${cv.name}`);
    if (cv.title) sections.push(`TITLE: ${cv.title}`);
    if (cv.email) sections.push(`EMAIL: ${cv.email}`);
    if (cv.phone) sections.push(`PHONE: ${cv.phone}`);
    if (cv.location) sections.push(`LOCATION: ${cv.location}`);
    if (cv.linkedin) sections.push(`LINKEDIN: ${cv.linkedin}`);
    if (cv.github) sections.push(`GITHUB: ${cv.github}`);
    if (cv.website) sections.push(`WEBSITE: ${cv.website}`);
    if (cv.summary) sections.push(`\nPROFESSIONAL SUMMARY:\n${cv.summary}`);
    if (cv.experience && cv.experience.length > 0) {
        sections.push("\nEXPERIENCE:");
        cv.experience.forEach((exp, i)=>{
            sections.push(`\n${i + 1}. ${exp.role} at ${exp.company}`);
            if (exp.duration) sections.push(`   Duration: ${exp.duration}`);
            if (exp.location) sections.push(`   Location: ${exp.location}`);
            if (exp.description) sections.push(`   ${exp.description}`);
        });
    }
    if (cv.education && cv.education.length > 0) {
        sections.push("\nEDUCATION:");
        cv.education.forEach((edu, i)=>{
            sections.push(`${i + 1}. ${edu.degree} - ${edu.institution} (${edu.year || "N/A"})`);
        });
    }
    if (cv.certifications && cv.certifications.length > 0) {
        sections.push("\nCERTIFICATIONS:");
        cv.certifications.forEach((cert, i)=>{
            sections.push(`${i + 1}. ${cert.name} - ${cert.issuer} (${cert.year || "N/A"})`);
        });
    }
    if (cv.skills && cv.skills.length > 0) {
        sections.push(`\nSKILLS: ${cv.skills.join(", ")}`);
    }
    if (cv.strengths && cv.strengths.length > 0) {
        sections.push(`\nSTRENGTHS: ${cv.strengths.join(", ")}`);
    }
    return sections.join("\n");
}
async function POST(request) {
    try {
        const body = await request.json();
        const { cv, outputMode = "STANDARD", audience = "STUDENT", provider, model } = body;
        if (!cv) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: "CV data is required"
            }, {
                status: 400
            });
        }
        const availableProviders = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$langchain$2f$llm$2d$providers$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getAvailableProviders"])();
        const selectedProvider = provider || (availableProviders.includes("gemini") ? "gemini" : availableProviders[0]);
        if (!selectedProvider || availableProviders.length === 0) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: "No AI service configured. Please configure GOOGLE_API_KEY (Gemini) or AI_INTEGRATIONS_OPENAI_API_KEY (OpenAI)."
            }, {
                status: 500
            });
        }
        if (provider && !availableProviders.includes(provider)) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: `Provider "${provider}" is not available. Available providers: ${availableProviders.join(", ")}`
            }, {
                status: 400
            });
        }
        const cvText = cv.rawText || formatCVText(cv);
        const filename = cv.originalFilename || "cv.pdf";
        console.log(`[v2.3] Assessment starting for: ${filename}, mode: ${outputMode}, audience: ${audience}, provider: ${selectedProvider}${model ? `, model: ${model}` : ""}`);
        const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$langchain$2f$v23$2d$cv$2d$intelligence$2d$chain$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["analyzeCV"])(cvText, {
            outputMode,
            audience,
            provider: selectedProvider,
            model
        });
        const score = result.data && "scores" in result.data ? result.data.scores.overall : "N/A";
        console.log(`[v2.3] Assessment complete, score: ${score}, provider: ${result.meta.provider || selectedProvider}`);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json(result);
    } catch (error) {
        console.error("[v2.3] CV Assessment error:", error);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            success: false,
            error: error instanceof Error ? error.message : "Failed to assess CV"
        }, {
            status: 500
        });
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__dfc8c9e9._.js.map