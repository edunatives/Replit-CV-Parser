/**
 * CV Intelligence Engine v2.3 - Main Chain
 * Pure v2.3 implementation - no legacy compatibility
 * Supports multiple LLM providers (Gemini, OpenAI, etc.)
 * 
 * @version 2.3.1
 * @file v23-cv-intelligence-chain.ts
 */

import {
  OutputMode,
  AudienceType,
  LiteOutput,
  StandardOutput,
  FullOutput,
  AnalysisOutput,
  AnalysisResponse,
  LiteOutputSchema,
  StandardOutputSchema,
  scoreToGrade,
  scoreToRiskLevel,
  clamp,
} from "./v23-cv-intelligence-schemas";
import {
  ProviderType,
  LLMProvider,
  createProvider,
  getAvailableProviders,
} from "./llm-providers";

// ============================================================================
// CONFIGURATION
// ============================================================================

export interface ChainConfig {
  provider?: ProviderType;
  model?: string;
  temperature?: number;
  maxOutputTokens?: number;
  maxRetries?: number;
  retryDelayMs?: number;
}

const DEFAULT_CONFIG: Required<ChainConfig> = {
  provider: "gemini",
  model: "gemini-2.5-flash",
  temperature: 0.2,
  maxOutputTokens: 16000,
  maxRetries: 3,
  retryDelayMs: 1000,
};

export type { ProviderType };
export { getAvailableProviders };

// ============================================================================
// UTILITIES
// ============================================================================

function repairAndParseJSON(text: string): unknown {
  let cleaned = text.trim();
  
  const match = cleaned.match(/```(?:json)?\s*([\s\S]*?)```/);
  if (match) cleaned = match[1].trim();
  else {
    if (cleaned.startsWith("```json")) cleaned = cleaned.slice(7);
    else if (cleaned.startsWith("```")) cleaned = cleaned.slice(3);
    if (cleaned.endsWith("```")) cleaned = cleaned.slice(0, -3);
    cleaned = cleaned.trim();
  }
  
  try { return JSON.parse(cleaned); } catch {}
  
  cleaned = cleaned
    .replace(/,(\s*[}\]])/g, "$1")
    .replace(/([{,]\s*)(\w+)(\s*:)/g, '$1"$2"$3')
    .replace(/'/g, '"')
    .replace(/[\x00-\x1F\x7F]/g, "");
  
  try { return JSON.parse(cleaned); } catch {}
  
  const objMatch = cleaned.match(/\{[\s\S]*\}/);
  if (objMatch) return JSON.parse(objMatch[0]);
  
  throw new Error("Failed to parse JSON from response");
}

async function withRetry<T>(fn: () => Promise<T>, maxRetries: number, delayMs: number): Promise<T> {
  let lastError: Error | undefined;
  
  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    try {
      return await fn();
    } catch (e) {
      lastError = e instanceof Error ? e : new Error(String(e));
      if (attempt < maxRetries) {
        await new Promise(r => setTimeout(r, delayMs * Math.pow(2, attempt - 1)));
      }
    }
  }
  throw lastError;
}

function safeNum(v: unknown, d = 0): number { const n = Number(v); return isNaN(n) ? d : n; }
function safeStr(v: unknown, d = ""): string { return typeof v === "string" ? v : d; }
function safeArr<T>(v: unknown, d: T[] = []): T[] { return Array.isArray(v) ? v : d; }

function getPath(obj: unknown, ...paths: string[]): unknown {
  for (const path of paths) {
    let result: unknown = obj;
    for (const key of path.split(".")) {
      if (result == null) break;
      const r = result as Record<string, unknown>;
      result = r[key] ?? r[key.replace(/_([a-z])/g, (_, l) => l.toUpperCase())] ?? r[key.replace(/[A-Z]/g, l => `_${l.toLowerCase()}`)];
    }
    if (result != null) return result;
  }
  return undefined;
}

// ============================================================================
// TRANSFORMERS
// ============================================================================

function transformToLite(raw: unknown, audience: AudienceType): LiteOutput {
  const data = (raw || {}) as Record<string, unknown>;
  
  const result = LiteOutputSchema.safeParse(data);
  if (result.success) return result.data;
  
  const scores = (getPath(data, "scores") || {}) as Record<string, unknown>;
  const overall = clamp(safeNum(scores.overall, 70), 0, 100);
  
  const output: LiteOutput = {
    version: "2.3",
    mode: "LITE",
    audience,
    generatedAt: new Date().toISOString(),
    candidate: safeStr(getPath(data, "candidate", "candidateName"), "Unknown"),
    hasJd: Boolean(getPath(data, "hasJd", "has_jd")),
    scores: {
      overall,
      grade: scoreToGrade(overall),
      rawCompatibility: scores.rawCompatibility != null ? clamp(safeNum(scores.rawCompatibility), 0, 100) : null,
      tei: scores.tei != null ? clamp(safeNum(scores.tei), 1, 5) : null,
      candidateRisk: scores.candidateRisk != null ? clamp(safeNum(scores.candidateRisk), 0, 100) : null,
      employerRisk: scores.employerRisk != null ? clamp(safeNum(scores.employerRisk), 0, 100) : null,
    },
    verdict: safeStr(getPath(data, "verdict"), `Score: ${overall}/100`),
    topIssues: safeArr(getPath(data, "topIssues", "top_issues")).slice(0, 3).map((i: unknown) => {
      const issue = i as Record<string, unknown>;
      return {
        code: safeStr(issue.code, "A1"),
        issue: safeStr(issue.issue || issue.detail, "Unknown issue"),
        severity: (issue.severity || "medium") as "info" | "low" | "medium" | "high" | "critical",
        count: safeNum(issue.count, 1),
        fix: issue.fix as string | undefined,
      };
    }),
    topStrengths: safeArr(getPath(data, "topStrengths", "top_strengths")).slice(0, 3).map((s: unknown) => {
      const str = s as Record<string, unknown>;
      return {
        code: safeStr(str.code, "D1"),
        strength: safeStr(str.strength || str.detail, "Unknown strength"),
      };
    }),
    bestFitRole: getPath(data, "bestFitRole", "best_fit_role") as string | null,
    nextAction: safeStr(getPath(data, "nextAction", "next_action"), "Review and improve CV"),
  };
  
  if (audience === "HR") {
    const hire = getPath(data, "hireRecommendation", "hire_recommendation");
    if (hire) output.hireRecommendation = hire as "STRONG_HIRE" | "HIRE" | "CONDITIONAL_HIRE" | "NO_HIRE";
  }
  
  return output;
}

function transformToStandard(raw: unknown, audience: AudienceType): StandardOutput {
  const data = (raw || {}) as Record<string, unknown>;
  
  const result = StandardOutputSchema.safeParse(data);
  if (result.success) return result.data;
  
  const lite = transformToLite(raw, audience);
  
  const cvSum = (getPath(data, "cvSummary", "cv_summary") || {}) as Record<string, unknown>;
  const jdSum = getPath(data, "jdSummary", "jd_summary") as Record<string, unknown> | undefined;
  const bullet = (getPath(data, "bulletHealth", "bullet_health") || {}) as Record<string, unknown>;
  const impr = (getPath(data, "improvements") || {}) as Record<string, unknown>;
  const skillMatch = getPath(data, "skillMatch", "skill_match") as Record<string, unknown> | undefined;
  const expMatch = getPath(data, "experienceMatch", "experience_match") as Record<string, unknown> | undefined;
  
  const output: StandardOutput = {
    version: "2.3",
    mode: "STANDARD",
    audience,
    generatedAt: new Date().toISOString(),
    cvSummary: {
      candidateName: safeStr(cvSum.candidateName || cvSum.candidate_name, lite.candidate),
      totalYears: safeNum(cvSum.totalYears || cvSum.total_years),
      currentRole: safeStr(cvSum.currentRole || cvSum.current_role, "Unknown"),
      seniorityLevel: (cvSum.seniorityLevel || cvSum.seniority_level || "Mid") as "Entry" | "Mid" | "Senior" | "Lead" | "Principal" | "Director" | "VP" | "C-Level",
      topSkills: safeArr(cvSum.topSkills || cvSum.top_skills).map(String),
      certificationCount: safeNum(cvSum.certificationCount || cvSum.certification_count),
    },
    jdSummary: jdSum ? {
      jobTitle: safeStr(jdSum.jobTitle || jdSum.job_title, "Unknown"),
      company: jdSum.company as string | null,
      seniorityLevel: (jdSum.seniorityLevel || jdSum.seniority_level || "Mid") as "Entry" | "Mid" | "Senior" | "Lead" | "Principal" | "Director" | "VP" | "C-Level",
      mustHaveSkills: safeArr(jdSum.mustHaveSkills || jdSum.must_have_skills).map(String),
      niceToHaveSkills: safeArr(jdSum.niceToHaveSkills || jdSum.nice_to_have_skills).map(String),
      experienceRequired: safeStr(jdSum.experienceRequired || jdSum.experience_required, "Not specified"),
    } : undefined,
    scores: lite.scores,
    skillMatch: skillMatch ? {
      tier1: { matched: safeNum((skillMatch.tier1 as Record<string, unknown>)?.matched), total: safeNum((skillMatch.tier1 as Record<string, unknown>)?.total), score: safeNum((skillMatch.tier1 as Record<string, unknown>)?.score) },
      tier2: { matched: safeNum((skillMatch.tier2 as Record<string, unknown>)?.matched), total: safeNum((skillMatch.tier2 as Record<string, unknown>)?.total), score: safeNum((skillMatch.tier2 as Record<string, unknown>)?.score) },
      tier3: { matched: safeNum((skillMatch.tier3 as Record<string, unknown>)?.matched), total: safeNum((skillMatch.tier3 as Record<string, unknown>)?.total), score: safeNum((skillMatch.tier3 as Record<string, unknown>)?.score) },
      missingCritical: safeArr(skillMatch.missingCritical || skillMatch.missing_critical).map(String),
      ghostSkills: safeArr(skillMatch.ghostSkills || skillMatch.ghost_skills).map(String),
    } : undefined,
    experienceMatch: expMatch ? {
      totalYearsMatch: Boolean(expMatch.totalYearsMatch || expMatch.total_years_match),
      domainYearsMatch: Boolean(expMatch.domainYearsMatch || expMatch.domain_years_match),
      domainGap: (expMatch.domainGap || expMatch.domain_gap) as string | null,
      scopeMatch: Boolean(expMatch.scopeMatch || expMatch.scope_match),
    } : undefined,
    bulletHealth: {
      totalBullets: safeNum(bullet.totalBullets || bullet.total_bullets),
      averageScore: safeNum(bullet.averageScore || bullet.average_score, 70),
      distribution: {
        excellent: safeNum((bullet.distribution as Record<string, unknown>)?.excellent),
        good: safeNum((bullet.distribution as Record<string, unknown>)?.good),
        fair: safeNum((bullet.distribution as Record<string, unknown>)?.fair),
        poor: safeNum((bullet.distribution as Record<string, unknown>)?.poor),
      },
      topIssue: safeStr(bullet.topIssue || bullet.top_issue, "None identified"),
      topFix: safeStr(bullet.topFix || bullet.top_fix, lite.nextAction),
    },
    topIssues: safeArr(getPath(data, "topIssues", "top_issues")).map((i: unknown) => {
      const issue = i as Record<string, unknown>;
      return {
        code: safeStr(issue.code, "A1"),
        issue: safeStr(issue.issue),
        severity: (issue.severity || "medium") as "info" | "low" | "medium" | "high" | "critical",
        count: safeNum(issue.count, 1),
        fix: issue.fix as string | undefined,
      };
    }),
    topStrengths: safeArr(getPath(data, "topStrengths", "top_strengths")).map((s: unknown) => {
      const str = s as Record<string, unknown>;
      return {
        code: safeStr(str.code, "D1"),
        strength: safeStr(str.strength),
      };
    }),
    improvements: {
      critical: safeArr(impr.critical).map((i: unknown) => typeof i === "string" ? { code: "A1", priority: "critical" as const, action: i, impact: "High", effort: "Medium" } : i as { code: string; priority: "critical" | "high" | "medium" | "low"; action: string; impact: string; effort: string }),
      high: safeArr(impr.high).map((i: unknown) => typeof i === "string" ? { code: "A1", priority: "high" as const, action: i, impact: "Medium", effort: "Medium" } : i as { code: string; priority: "critical" | "high" | "medium" | "low"; action: string; impact: string; effort: string }),
      medium: safeArr(impr.medium).map((i: unknown) => typeof i === "string" ? { code: "A1", priority: "medium" as const, action: i, impact: "Low", effort: "Low" } : i as { code: string; priority: "critical" | "high" | "medium" | "low"; action: string; impact: string; effort: string }),
      scorePotential: {
        current: lite.scores.overall,
        afterCritical: safeNum((impr.scorePotential as Record<string, unknown>)?.afterCritical, lite.scores.overall + 5),
        afterAll: safeNum((impr.scorePotential as Record<string, unknown>)?.afterAll || (impr.scorePotential as Record<string, unknown>)?.afterFixes, lite.scores.overall + 10),
        ceiling: safeNum((impr.scorePotential as Record<string, unknown>)?.ceiling, lite.scores.overall + 15),
      },
    },
    verdict: lite.verdict,
  };
  
  if (audience === "STUDENT") {
    output.alternativeRoles = safeArr(getPath(data, "alternativeRoles", "alternative_roles")).map((r: unknown) => {
      const role = r as Record<string, unknown>;
      return {
        role: safeStr(role.role),
        fitScore: safeNum(role.fitScore || role.fit_score),
        reason: safeStr(role.reason, "Good fit based on skills"),
      };
    });
    const nextSteps = getPath(data, "nextSteps", "next_steps");
    output.nextSteps = typeof nextSteps === "object" && nextSteps ? nextSteps as { immediate: string[]; thisWeek: string[]; beforeApplication: string[] } : {
      immediate: safeArr(nextSteps).map(String),
      thisWeek: [],
      beforeApplication: [],
    };
    output.encouragement = safeStr(getPath(data, "encouragement"), "Keep improving your CV!");
  } else {
    output.riskLevel = scoreToRiskLevel(lite.scores.employerRisk || 50);
    output.hireRecommendation = lite.hireRecommendation || "CONDITIONAL_HIRE";
    output.verificationItems = safeArr(getPath(data, "verificationItems", "topVerificationItems")).map((v: unknown) => 
      typeof v === "string" ? { item: v, priority: "medium" as const, reason: "Requires verification" } : v as { item: string; priority: "high" | "medium" | "low"; reason: string }
    );
    output.interviewQuestions = safeArr(getPath(data, "interviewQuestions")).map((q: unknown) => {
      const ques = q as Record<string, unknown>;
      return {
        question: safeStr(ques.question),
        probing: safeStr(ques.probing, "Follow up on details"),
        redFlag: safeStr(ques.redFlag, "Vague or inconsistent answers"),
      };
    });
  }
  
  return output;
}

function transformToFull(raw: unknown, audience: AudienceType): FullOutput {
  const data = (raw || {}) as Record<string, unknown>;
  
  const cvAnalysisRaw = (getPath(data, "cvAnalysis", "cv_analysis") || {}) as Record<string, unknown>;
  const studentAnalysisRaw = (getPath(data, "studentAnalysis", "student_analysis") || {}) as Record<string, unknown>;
  const hrAnalysisRaw = (getPath(data, "hrAnalysis", "hr_analysis") || {}) as Record<string, unknown>;
  
  const metadataRaw = (cvAnalysisRaw.metadata || {}) as Record<string, unknown>;
  const experienceRaw = (cvAnalysisRaw.experience || {}) as Record<string, unknown>;
  const skillsRaw = (cvAnalysisRaw.skills || {}) as Record<string, unknown>;
  const bulletAnalysisRaw = (cvAnalysisRaw.bulletAnalysis || cvAnalysisRaw.bullet_analysis || {}) as Record<string, unknown>;
  const summaryRaw = (cvAnalysisRaw.professionalSummary || cvAnalysisRaw.professional_summary || {}) as Record<string, unknown>;
  const educationRaw = (cvAnalysisRaw.education || {}) as Record<string, unknown>;
  const expFactorsRaw = (cvAnalysisRaw.experienceFactors || cvAnalysisRaw.experience_factors || {}) as Record<string, unknown>;
  
  const overallScore = safeNum(studentAnalysisRaw.overallCvQuality || hrAnalysisRaw.overallScore || bulletAnalysisRaw.averageScore, 0);
  
  const cvAnalysis: FullOutput["cvAnalysis"] = {
    metadata: {
      candidateName: safeStr(metadataRaw.candidateName || metadataRaw.candidate_name, "Unknown"),
      email: metadataRaw.email as string || null,
      phone: metadataRaw.phone as string || null,
      location: metadataRaw.location as string || null,
      linkedin: metadataRaw.linkedin as string || null,
      documentStats: {
        pages: safeNum((metadataRaw.documentStats as Record<string, unknown>)?.pages, 1),
        wordCount: safeNum((metadataRaw.documentStats as Record<string, unknown>)?.wordCount || (metadataRaw.documentStats as Record<string, unknown>)?.word_count, 0),
        bulletCount: safeNum((metadataRaw.documentStats as Record<string, unknown>)?.bulletCount || (metadataRaw.documentStats as Record<string, unknown>)?.bullet_count, 0),
      },
    },
    professionalSummary: {
      text: safeStr(summaryRaw.text, ""),
      yearsMentioned: safeNum(summaryRaw.yearsMentioned || summaryRaw.years_mentioned, 0) || null,
      keyThemes: safeArr(summaryRaw.keyThemes || summaryRaw.key_themes).map(String),
      qualityScore: safeNum(summaryRaw.qualityScore || summaryRaw.quality_score, 50),
      issues: safeArr(summaryRaw.issues).map((i: unknown) => {
        const issue = i as Record<string, unknown>;
        return { code: safeStr(issue.code, "A1"), issue: safeStr(issue.issue, ""), severity: (issue.severity || "medium") as "info" | "low" | "medium" | "high" | "critical", count: safeNum(issue.count, 1), fix: safeStr(issue.fix) };
      }),
    },
    experience: {
      totalYears: safeNum(experienceRaw.totalYears || experienceRaw.total_years, 0),
      roles: safeArr(experienceRaw.roles).map((r: unknown) => {
        const role = r as Record<string, unknown>;
        const bullets = safeArr(role.bullets);
        return {
          title: safeStr(role.title, ""),
          company: safeStr(role.company, ""),
          location: role.location as string || null,
          startDate: safeStr(role.startDate || role.start_date, ""),
          endDate: safeStr(role.endDate || role.end_date, "Present"),
          durationMonths: safeNum(role.durationMonths || role.duration_months, 12),
          seniorityLevel: (role.seniorityLevel || role.seniority_level || "Mid") as FullOutput["cvAnalysis"]["experience"]["roles"][0]["seniorityLevel"],
          bullets: bullets.map((b: unknown, idx: number) => {
            const bullet = (typeof b === "string" ? { text: b } : b) as Record<string, unknown>;
            const av = (bullet.actionVerb || bullet.action_verb || {}) as Record<string, unknown>;
            const q = (bullet.quantification || {}) as Record<string, unknown>;
            const res = (bullet.result || {}) as Record<string, unknown>;
            return {
              text: safeStr(bullet.text, ""),
              index: safeNum(bullet.index, idx),
              score: safeNum(bullet.score, 50),
              actionVerb: { word: av.word as string || null, strength: (av.strength || "moderate") as "strong" | "moderate" | "weak" | "none", score: safeNum(av.score, 50) },
              quantification: { hasQuantification: !!q.hasQuantification, type: q.type as string || null, score: safeNum(q.score, 50) },
              result: { hasResult: !!res.hasResult, type: (res.type || "missing") as "quantified" | "implied" | "missing", score: safeNum(res.score, 30) },
              issues: safeArr(bullet.issues).map((i: unknown) => ({ code: safeStr((i as Record<string, unknown>).code, "A10"), issue: safeStr((i as Record<string, unknown>).issue, "") })),
              rewrite: bullet.rewrite ? { suggested: safeStr((bullet.rewrite as Record<string, unknown>).suggested, ""), projectedScore: safeNum((bullet.rewrite as Record<string, unknown>).projectedScore, 70) } : undefined,
            };
          }),
          bulletSummary: { count: bullets.length, averageScore: safeNum((role.bulletSummary as Record<string, unknown>)?.averageScore, 50), excellent: safeNum((role.bulletSummary as Record<string, unknown>)?.excellent, 0), poor: safeNum((role.bulletSummary as Record<string, unknown>)?.poor, 0) },
        };
      }),
      progression: {
        pattern: ((experienceRaw.progression as Record<string, unknown>)?.pattern || "Steady") as "Stagnant" | "Slow" | "Steady" | "Accelerated" | "Exceptional",
        isHealthy: !!(experienceRaw.progression as Record<string, unknown>)?.isHealthy,
        assessment: safeStr((experienceRaw.progression as Record<string, unknown>)?.assessment, "Career progression appears steady"),
      },
      gaps: safeArr(experienceRaw.gaps).map((g: unknown) => {
        const gap = g as Record<string, unknown>;
        return { start: safeStr(gap.start, ""), end: safeStr(gap.end, ""), durationMonths: safeNum(gap.durationMonths || gap.duration_months, 0), explained: !!gap.explained };
      }),
    },
    skills: {
      validated: safeArr(skillsRaw.validated).map((s: unknown) => {
        const skill = s as Record<string, unknown>;
        return { skill: safeStr(skill.skill, ""), evidence: safeStr(skill.evidence, ""), proficiency: safeNum(skill.proficiency, 70) };
      }),
      implied: safeArr(skillsRaw.implied).map((s: unknown) => {
        const skill = s as Record<string, unknown>;
        return { skill: safeStr(skill.skill, ""), source: safeStr(skill.source, "") };
      }),
      ghost: safeArr(skillsRaw.ghost).map((s: unknown) => {
        const skill = s as Record<string, unknown>;
        return { skill: safeStr(skill.skill, ""), reason: safeStr(skill.reason, "Not validated") };
      }),
      validationRate: safeNum(skillsRaw.validationRate || skillsRaw.validation_rate, 70),
    },
    education: {
      degrees: safeArr(educationRaw.degrees).map((d: unknown) => {
        const deg = d as Record<string, unknown>;
        return { degree: safeStr(deg.degree, ""), field: safeStr(deg.field, ""), institution: safeStr(deg.institution, ""), year: deg.year as number || null };
      }),
      certifications: safeArr(educationRaw.certifications).map((c: unknown) => {
        const cert = c as Record<string, unknown>;
        return { name: safeStr(cert.name, ""), issuer: safeStr(cert.issuer, ""), year: cert.year as number || null, status: (cert.status || "Unknown") as "Active" | "Expired" | "Unknown", relevance: (cert.relevance || "Medium") as "High" | "Medium" | "Low" };
      }),
    },
    experienceFactors: {
      h1TotalYears: { years: safeNum((expFactorsRaw.h1TotalYears as Record<string, unknown>)?.years, 0), score: safeNum((expFactorsRaw.h1TotalYears as Record<string, unknown>)?.score, 50), assessment: safeStr((expFactorsRaw.h1TotalYears as Record<string, unknown>)?.assessment, "") },
      h2DomainYears: safeArr(expFactorsRaw.h2DomainYears).map((d: unknown) => {
        const domain = d as Record<string, unknown>;
        return { domain: safeStr(domain.domain, ""), years: safeNum(domain.years, 0), isPrimary: !!domain.isPrimary, score: safeNum(domain.score, 50) };
      }),
      h3IndustryYears: safeArr(expFactorsRaw.h3IndustryYears).map((i: unknown) => ({ industry: safeStr((i as Record<string, unknown>).industry, ""), years: safeNum((i as Record<string, unknown>).years, 0) })),
      h4Recency: { recentRelevance: ((expFactorsRaw.h4Recency as Record<string, unknown>)?.recentRelevance || "Recent") as "Current" | "Recent" | "Dated", score: safeNum((expFactorsRaw.h4Recency as Record<string, unknown>)?.score, 70) },
      h5Scope: { level: safeStr((expFactorsRaw.h5Scope as Record<string, unknown>)?.level, ""), evidence: safeArr((expFactorsRaw.h5Scope as Record<string, unknown>)?.evidence).map(String), score: safeNum((expFactorsRaw.h5Scope as Record<string, unknown>)?.score, 50) },
      h6Complexity: { level: safeStr((expFactorsRaw.h6Complexity as Record<string, unknown>)?.level, ""), evidence: safeArr((expFactorsRaw.h6Complexity as Record<string, unknown>)?.evidence).map(String), score: safeNum((expFactorsRaw.h6Complexity as Record<string, unknown>)?.score, 50) },
      h7Impact: { quantifiedCount: safeNum((expFactorsRaw.h7Impact as Record<string, unknown>)?.quantifiedCount, 0), totalValue: safeStr((expFactorsRaw.h7Impact as Record<string, unknown>)?.totalValue, ""), score: safeNum((expFactorsRaw.h7Impact as Record<string, unknown>)?.score, 50) },
      h8Progression: { pattern: safeStr((expFactorsRaw.h8Progression as Record<string, unknown>)?.pattern, ""), trajectory: safeStr((expFactorsRaw.h8Progression as Record<string, unknown>)?.trajectory, ""), score: safeNum((expFactorsRaw.h8Progression as Record<string, unknown>)?.score, 50) },
      h9Specialization: { type: safeStr((expFactorsRaw.h9Specialization as Record<string, unknown>)?.type, ""), primaryArea: safeStr((expFactorsRaw.h9Specialization as Record<string, unknown>)?.primaryArea, ""), score: safeNum((expFactorsRaw.h9Specialization as Record<string, unknown>)?.score, 50) },
    },
    bulletAnalysis: {
      totalBullets: safeNum(bulletAnalysisRaw.totalBullets || bulletAnalysisRaw.total_bullets, 0),
      averageScore: safeNum(bulletAnalysisRaw.averageScore || bulletAnalysisRaw.average_score, 50),
      distribution: {
        excellent: safeNum((bulletAnalysisRaw.distribution as Record<string, unknown>)?.excellent, 0),
        good: safeNum((bulletAnalysisRaw.distribution as Record<string, unknown>)?.good, 0),
        fair: safeNum((bulletAnalysisRaw.distribution as Record<string, unknown>)?.fair, 0),
        poor: safeNum((bulletAnalysisRaw.distribution as Record<string, unknown>)?.poor, 0),
      },
      codeScores: {
        A10: safeNum((bulletAnalysisRaw.codeScores as Record<string, unknown>)?.A10, 50),
        A11: safeNum((bulletAnalysisRaw.codeScores as Record<string, unknown>)?.A11, 50),
        A12: safeNum((bulletAnalysisRaw.codeScores as Record<string, unknown>)?.A12, 50),
        A13: safeNum((bulletAnalysisRaw.codeScores as Record<string, unknown>)?.A13, 50),
      },
      rewritePriorities: safeArr(bulletAnalysisRaw.rewritePriorities || bulletAnalysisRaw.rewrite_priorities).map((r: unknown) => {
        const rewrite = r as Record<string, unknown>;
        return { roleIndex: safeNum(rewrite.roleIndex || rewrite.role_index, 0), bulletIndex: safeNum(rewrite.bulletIndex || rewrite.bullet_index, 0), currentText: safeStr(rewrite.currentText || rewrite.current_text, ""), currentScore: safeNum(rewrite.currentScore || rewrite.current_score, 30), suggestedRewrite: safeStr(rewrite.suggestedRewrite || rewrite.suggested_rewrite, ""), projectedScore: safeNum(rewrite.projectedScore || rewrite.projected_score, 70) };
      }),
    },
    issuesDetected: safeArr(cvAnalysisRaw.issuesDetected || cvAnalysisRaw.issues_detected).map((i: unknown) => {
      const issue = i as Record<string, unknown>;
      return { code: safeStr(issue.code, "A1"), issue: safeStr(issue.issue, ""), severity: (issue.severity || "medium") as "info" | "low" | "medium" | "high" | "critical", count: safeNum(issue.count, 1), fix: safeStr(issue.fix) };
    }),
    strengthsDetected: safeArr(cvAnalysisRaw.strengthsDetected || cvAnalysisRaw.strengths_detected).map((s: unknown) => {
      const strength = s as Record<string, unknown>;
      return { code: safeStr(strength.code, "D1"), strength: safeStr(strength.strength, "") };
    }),
  };
  
  const output: FullOutput = {
    version: "2.3",
    mode: "FULL",
    audience,
    generatedAt: new Date().toISOString(),
    cvAnalysis,
    jdAnalysis: getPath(data, "jdAnalysis", "jd_analysis") as FullOutput["jdAnalysis"],
    studentAnalysis: audience === "STUDENT" ? studentAnalysisRaw as FullOutput["studentAnalysis"] : undefined,
    hrAnalysis: audience === "HR" ? hrAnalysisRaw as FullOutput["hrAnalysis"] : undefined,
  };
  
  return output;
}

export function transformOutput(raw: unknown, mode: OutputMode, audience: AudienceType): AnalysisOutput {
  switch (mode) {
    case "LITE": return transformToLite(raw, audience);
    case "STANDARD": return transformToStandard(raw, audience);
    case "FULL": return transformToFull(raw, audience);
  }
}

// ============================================================================
// PROMPTS
// ============================================================================

function buildSystemPrompt(): string {
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

function buildUserPrompt(cv: string, jd: string | undefined, mode: OutputMode, audience: AudienceType): string {
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
${audience === "STUDENT" ? "- studentAnalysis: {overallCvQuality, honestAssessment, improvements, bulletImprovements[], gapStrategy, alternatives, nextSteps, encouragement}" : "- hrAnalysis: {riskAssessment, verificationChecklist, interviewGuide, decisionSupport, compensationGuidance}"}`;
  }

  return prompt;
}

// ============================================================================
// MAIN CHAIN CLASS
// ============================================================================

export class CvIntelligenceChain {
  private provider: LLMProvider;
  private config: Required<ChainConfig>;
  
  constructor(config: ChainConfig = {}) {
    const mergedConfig = { ...DEFAULT_CONFIG, ...config };
    
    if (config.provider === "openai" && !config.model) {
      mergedConfig.model = "gpt-4o";
    }
    
    this.config = mergedConfig;
    this.provider = createProvider({
      provider: this.config.provider,
      model: this.config.model,
      temperature: this.config.temperature,
      maxOutputTokens: this.config.maxOutputTokens,
    });
    
    console.log(`[CvIntelligenceChain] Initialized with provider: ${this.provider.name}, model: ${this.provider.model}`);
  }
  
  get providerName(): ProviderType {
    return this.provider.name;
  }
  
  get modelName(): string {
    return this.provider.model;
  }
  
  async analyze(request: {
    cvContent: string;
    jdContent?: string;
    outputMode?: OutputMode;
    audience?: AudienceType;
  }): Promise<AnalysisResponse> {
    const startTime = Date.now();
    const timings: Record<string, number> = {};
    const { cvContent, jdContent, outputMode = "STANDARD", audience = "STUDENT" } = request;
    
    console.log(`[TIMING] Assessment starting - mode: ${outputMode}, audience: ${audience}, cvLength: ${cvContent.length} chars`);
    
    try {
      const result = await withRetry(async () => {
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
            output: response.usage.outputTokens,
          },
          timings: { promptBuild: timings.promptBuild, apiCall: apiDuration, jsonParse: parseDuration, transform: transformDuration },
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
          audience,
        },
      };
    } catch (e) {
      const errorMsg = e instanceof Error ? e.message : "Unknown error";
      
      const fallback = transformToLite({
        candidate: "Unknown",
        hasJd: !!jdContent,
        scores: { overall: 0 },
        verdict: `Analysis failed: ${errorMsg}`,
        topIssues: [],
        topStrengths: [],
        nextAction: "Retry analysis",
      }, audience);
      
      return {
        success: false,
        error: errorMsg,
        data: fallback,
        meta: {
          processingTimeMs: Date.now() - startTime,
          tokensUsed: { input: 0, output: 0 },
          modelUsed: this.provider.model,
          provider: this.provider.name,
          outputMode,
          audience,
        },
      };
    }
  }
  
  async quickCheck(cvContent: string): Promise<LiteOutput> {
    const response = await this.analyze({ cvContent, outputMode: "LITE", audience: "STUDENT" });
    return response.data as LiteOutput;
  }
  
  async assessCV(cvContent: string, outputMode: OutputMode = "STANDARD"): Promise<AnalysisResponse> {
    return this.analyze({ cvContent, outputMode, audience: "STUDENT" });
  }
  
  async matchForStudent(cvContent: string, jdContent: string, outputMode: OutputMode = "STANDARD"): Promise<AnalysisResponse> {
    return this.analyze({ cvContent, jdContent, outputMode, audience: "STUDENT" });
  }
  
  async matchForHR(cvContent: string, jdContent: string, outputMode: OutputMode = "STANDARD"): Promise<AnalysisResponse> {
    return this.analyze({ cvContent, jdContent, outputMode, audience: "HR" });
  }
}

// ============================================================================
// SINGLETON & CONVENIENCE FUNCTIONS
// ============================================================================

const chainInstances: Map<string, CvIntelligenceChain> = new Map();

function getChainKey(config?: ChainConfig): string {
  return `${config?.provider || "gemini"}-${config?.model || "default"}`;
}

export function getChain(config?: ChainConfig): CvIntelligenceChain {
  const key = getChainKey(config);
  let instance = chainInstances.get(key);
  
  if (!instance) {
    instance = new CvIntelligenceChain(config);
    chainInstances.set(key, instance);
  }
  
  return instance;
}

export function clearChainCache(): void {
  chainInstances.clear();
}

export async function analyzeCV(
  cvContent: string,
  options?: {
    jdContent?: string;
    outputMode?: OutputMode;
    audience?: AudienceType;
    provider?: ProviderType;
    model?: string;
  }
): Promise<AnalysisResponse> {
  const chain = getChain({
    provider: options?.provider,
    model: options?.model,
  });
  
  return chain.analyze({
    cvContent,
    jdContent: options?.jdContent,
    outputMode: options?.outputMode || "STANDARD",
    audience: options?.audience || "STUDENT",
  });
}

export type { OutputMode, AudienceType, LiteOutput, StandardOutput, FullOutput, AnalysisOutput, AnalysisResponse };
