/**
 * CV Intelligence Engine v2.3 - UI Transformers
 * Converts v2.3 output to legacy UI formats (v2.11 Assessment, v2.2 JD Match)
 * 
 * @version 2.3.0
 * @file v23-transformers.ts
 */

import {
  AnalysisResponse,
  LiteOutput,
  StandardOutput,
  FullOutput,
  Grade,
  GRADE_LABELS,
  TEI_LABELS,
} from "./v23-cv-intelligence-schemas";

// ============================================================================
// GRADE TO LEVEL MAPPING
// ============================================================================

const GRADE_TO_LEVEL: Record<Grade, "Exceptional" | "Strong" | "Good" | "Fair" | "Needs Work"> = {
  "A": "Exceptional",
  "A-": "Strong",
  "B+": "Strong",
  "B": "Good",
  "B-": "Good",
  "C+": "Fair",
  "C": "Fair",
  "D": "Needs Work",
  "F": "Needs Work",
};

// ============================================================================
// TRANSFORM V2.3 → V2.11 (Assessment UI Format)
// ============================================================================

export function transformV23ToV211(
  response: AnalysisResponse,
  filename: string
): Record<string, unknown> {
  const data = response.data;
  const mode = data.mode;
  
  if (mode === "LITE") {
    return transformLiteToV211(data as LiteOutput, filename);
  } else if (mode === "STANDARD") {
    return transformStandardToV211(data as StandardOutput, filename);
  } else {
    return transformFullToV211(data as FullOutput, filename);
  }
}

function transformLiteToV211(data: LiteOutput, filename: string): Record<string, unknown> {
  const level = GRADE_TO_LEVEL[data.scores.grade];
  
  const uiStrengths = data.topStrengths.map((s, i) => ({
    icon: i === 0 ? "star" : i === 1 ? "trending_up" : "verified",
    title: s.strength.substring(0, 30),
    detail: s.strength,
    evidence: [],
  }));
  
  const uiWeaknesses = data.topIssues.map((issue) => ({
    code: issue.code,
    icon: "error",
    severity: issue.severity,
    text: issue.issue,
  }));
  
  return {
    version: "2.11",
    input: {
      cv_filename: filename,
      jd_provided: data.hasJd,
      jd_title: null,
    },
    analysis_metadata: {
      cv_name: filename,
      analysis_date: data.generatedAt,
      engine_version: "2.3-lite",
    },
    ui_output: {
      overallScore: data.scores.overall,
      level,
      inflation: false,
      verdict: data.verdict,
      sections: [],
      strengths: uiStrengths,
      weaknesses: uiWeaknesses,
      recommendations: data.topIssues.filter(i => i.fix).map((issue, idx) => ({
        priority: issue.severity === "critical" || issue.severity === "high" ? "high" : issue.severity === "medium" ? "medium" : "low",
        icon: issue.severity === "critical" || issue.severity === "high" ? "priority_high" : "schedule",
        text: issue.fix || issue.issue,
        impact: "Improves CV quality",
      })),
      highlights: [],
      quickStats: {
        professionalYears: 0,
        validatedSkills: 0,
        ghostSkills: 0,
        validationRate: 0,
        quantificationRate: 0,
        issueCount: {
          critical: data.topIssues.filter(i => i.severity === "critical").length,
          high: data.topIssues.filter(i => i.severity === "high").length,
          medium: data.topIssues.filter(i => i.severity === "medium").length,
          low: data.topIssues.filter(i => i.severity === "low" || i.severity === "info").length,
        },
      },
    },
    reports: {
      student_view: {
        headline: data.verdict,
        overall_score: {
          score: data.scores.overall,
          grade: level,
          message: data.verdict,
        },
        quick_wins: data.topIssues.filter(i => i.fix).slice(0, 3).map((issue, idx) => ({
          action: issue.fix || issue.issue,
          impact: "+5 points",
          time: "15 min",
          priority: idx === 0 ? "do_first" : "do_soon",
        })),
        encouragement: "Keep improving your CV!",
      },
    },
  };
}

function transformStandardToV211(data: StandardOutput, filename: string): Record<string, unknown> {
  const level = GRADE_TO_LEVEL[data.scores.grade];
  
  const uiStrengths = (data.cvSummary.topSkills || []).slice(0, 3).map((skill, i) => ({
    icon: i === 0 ? "star" : i === 1 ? "trending_up" : "verified",
    title: skill,
    detail: `Proficient in ${skill}`,
    evidence: [],
  }));
  
  const allImprovements = [
    ...data.improvements.critical.map(i => ({ ...i, severity: "critical" as const })),
    ...data.improvements.high.map(i => ({ ...i, severity: "high" as const })),
    ...data.improvements.medium.map(i => ({ ...i, severity: "medium" as const })),
  ];
  
  const uiWeaknesses = allImprovements.slice(0, 5).map((imp, i) => ({
    code: imp.code || `W${(i + 1).toString().padStart(2, "0")}`,
    icon: "error",
    severity: imp.severity === "critical" ? "high" : imp.severity,
    text: imp.action,
  }));
  
  const uiRecommendations = allImprovements.slice(0, 5).map((imp) => ({
    priority: imp.priority,
    icon: imp.priority === "critical" || imp.priority === "high" ? "priority_high" : "schedule",
    text: imp.action,
    impact: imp.impact,
  }));
  
  return {
    version: "2.11",
    input: {
      cv_filename: filename,
      jd_provided: !!data.jdSummary,
      jd_title: data.jdSummary?.jobTitle || null,
    },
    analysis_metadata: {
      cv_name: filename,
      analysis_date: data.generatedAt,
      engine_version: "2.3-standard",
    },
    cv_nature: {
      detected_level: data.cvSummary.seniorityLevel,
      experience_years: data.cvSummary.totalYears,
      domain: "General",
      specialization: data.cvSummary.currentRole,
    },
    ui_output: {
      overallScore: data.scores.overall,
      level,
      inflation: false,
      verdict: data.verdict,
      sections: [],
      strengths: uiStrengths,
      weaknesses: uiWeaknesses,
      recommendations: uiRecommendations,
      highlights: [],
      quickStats: {
        professionalYears: data.cvSummary.totalYears,
        validatedSkills: data.cvSummary.topSkills.length,
        ghostSkills: data.skillMatch?.ghostSkills.length || 0,
        validationRate: data.skillMatch ? Math.round((data.skillMatch.tier1.matched / Math.max(1, data.skillMatch.tier1.total)) * 100) : 0,
        quantificationRate: 0,
        issueCount: {
          critical: data.improvements.critical.length,
          high: data.improvements.high.length,
          medium: data.improvements.medium.length,
          low: 0,
        },
      },
    },
    reports: {
      student_view: {
        headline: data.verdict,
        overall_score: {
          score: data.scores.overall,
          grade: level,
          message: data.verdict,
        },
        your_strengths: uiStrengths.map(s => ({
          title: s.title,
          detail: s.detail,
          icon: s.icon,
        })),
        your_background: {
          summary: data.verdict,
          unique_value: data.cvSummary.topSkills[0] || "",
          growth_areas: data.skillMatch?.missingCritical.slice(0, 3) || [],
        },
        quick_wins: data.improvements.critical.slice(0, 3).map((imp, i) => ({
          action: imp.action,
          impact: "+5 points",
          time: "15 min",
          priority: i === 0 ? "do_first" : "do_soon",
        })),
        improvement_roadmap: {
          this_week: { actions: data.nextSteps?.immediate || [], projected_gain: 5 },
          this_month: { actions: data.nextSteps?.thisWeek || [], projected_gain: 10 },
          long_term: { actions: data.nextSteps?.beforeApplication || [], projected_gain: 15 },
        },
        encouragement: data.encouragement || "Keep improving your CV!",
      },
    },
    recommended_rewrites: [],
  };
}

function transformFullToV211(data: FullOutput, filename: string): Record<string, unknown> {
  const cvAnalysis = data.cvAnalysis;
  const studentAnalysis = data.studentAnalysis;
  const level = studentAnalysis ? GRADE_TO_LEVEL[studentAnalysis.overallCvQuality.grade] : "Good";
  const overall = studentAnalysis?.overallCvQuality.score || 70;
  
  const uiStrengths = (cvAnalysis.strengthsDetected || []).slice(0, 5).map((s, i) => ({
    icon: i === 0 ? "star" : i === 1 ? "trending_up" : "verified",
    title: s.strength.substring(0, 30),
    detail: s.strength,
    evidence: [],
  }));
  
  const uiWeaknesses = (cvAnalysis.issuesDetected || []).slice(0, 5).map((issue) => ({
    code: issue.code,
    icon: "error",
    severity: issue.severity,
    text: issue.issue,
  }));
  
  const allImprovements = studentAnalysis ? [
    ...studentAnalysis.improvements.critical,
    ...studentAnalysis.improvements.high,
    ...studentAnalysis.improvements.medium,
  ] : [];
  
  const uiRecommendations = allImprovements.slice(0, 5).map((imp) => ({
    priority: imp.priority,
    icon: imp.priority === "critical" || imp.priority === "high" ? "priority_high" : "schedule",
    text: imp.action,
    impact: imp.impact,
  }));
  
  const uiHighlights = (cvAnalysis.bulletAnalysis.rewritePriorities || []).slice(0, 5).map((r) => ({
    type: "concern",
    color: "yellow" as const,
    text: r.currentText,
    source: "CV",
    note: `Score: ${r.currentScore} → ${r.projectedScore} with rewrite`,
  }));
  
  return {
    version: "2.11",
    input: {
      cv_filename: filename,
      jd_provided: !!data.jdAnalysis,
      jd_title: data.jdAnalysis?.metadata.jobTitle || null,
    },
    analysis_metadata: {
      cv_name: filename,
      analysis_date: data.generatedAt,
      engine_version: "2.3-full",
    },
    cv_nature: {
      detected_level: cvAnalysis.experience.progression.pattern === "Exceptional" ? "Senior" : 
                      cvAnalysis.experience.progression.pattern === "Accelerated" ? "Mid" : "Junior",
      experience_years: cvAnalysis.experience.totalYears,
      domain: cvAnalysis.experienceFactors.h9Specialization.primaryArea,
      specialization: cvAnalysis.experienceFactors.h9Specialization.type,
    },
    category_scores: {
      contact: 75,
      summary: cvAnalysis.professionalSummary.qualityScore,
      experience: cvAnalysis.experienceFactors.h1TotalYears.score,
      education: 70,
      skills: cvAnalysis.skills.validationRate,
      formatting: cvAnalysis.bulletAnalysis.averageScore,
    },
    ui_output: {
      overallScore: overall,
      level,
      inflation: false,
      verdict: studentAnalysis?.overallCvQuality.summary || "Analysis complete",
      sections: [],
      strengths: uiStrengths,
      weaknesses: uiWeaknesses,
      recommendations: uiRecommendations,
      highlights: uiHighlights,
      quickStats: {
        professionalYears: cvAnalysis.experience.totalYears,
        validatedSkills: cvAnalysis.skills.validated.length,
        ghostSkills: cvAnalysis.skills.ghost.length,
        validationRate: cvAnalysis.skills.validationRate,
        quantificationRate: cvAnalysis.bulletAnalysis.codeScores.A11 || 0,
        issueCount: {
          critical: cvAnalysis.issuesDetected.filter(i => i.severity === "critical").length,
          high: cvAnalysis.issuesDetected.filter(i => i.severity === "high").length,
          medium: cvAnalysis.issuesDetected.filter(i => i.severity === "medium").length,
          low: cvAnalysis.issuesDetected.filter(i => i.severity === "low" || i.severity === "info").length,
        },
      },
    },
    reports: {
      student_view: studentAnalysis ? {
        headline: studentAnalysis.overallCvQuality.summary,
        overall_score: {
          score: studentAnalysis.overallCvQuality.score,
          grade: GRADE_TO_LEVEL[studentAnalysis.overallCvQuality.grade],
          message: studentAnalysis.overallCvQuality.summary,
        },
        quick_wins: studentAnalysis.improvements.critical.slice(0, 3).map((imp, i) => ({
          action: imp.action,
          impact: "+5 points",
          time: "15 min",
          priority: i === 0 ? "do_first" : "do_soon",
        })),
        improvement_roadmap: {
          this_week: { actions: studentAnalysis.nextSteps.immediate, projected_gain: 5 },
          this_month: { actions: studentAnalysis.nextSteps.thisWeek, projected_gain: 10 },
          long_term: { actions: studentAnalysis.nextSteps.beforeApplication, projected_gain: 15 },
        },
        encouragement: studentAnalysis.encouragement.message,
      } : undefined,
    },
    recommended_rewrites: studentAnalysis?.bulletImprovements.slice(0, 5).map((b) => ({
      original: b.original,
      rewritten: b.rewritten,
      score_gain: b.scoreGain,
      issues_fixed: b.issuesFixed,
    })) || [],
  };
}

// ============================================================================
// TRANSFORM V2.3 → V2.2 (JD Match UI Format)
// ============================================================================

export function transformV23ToV22(
  response: AnalysisResponse,
): Record<string, unknown> {
  const data = response.data;
  
  if (data.mode === "LITE") {
    return transformLiteToV22(data as LiteOutput);
  } else if (data.mode === "STANDARD") {
    return transformStandardToV22(data as StandardOutput);
  } else {
    return transformFullToV22(data as FullOutput);
  }
}

function transformLiteToV22(data: LiteOutput): Record<string, unknown> {
  const score = data.scores.rawCompatibility || data.scores.overall;
  const tei = data.scores.tei || 3;
  const riskLevel = data.scores.candidateRisk && data.scores.candidateRisk <= 25 ? "Low" : 
                    data.scores.candidateRisk && data.scores.candidateRisk <= 50 ? "Moderate" : 
                    data.scores.candidateRisk && data.scores.candidateRisk <= 75 ? "High" : "Critical";
  
  return {
    jd_parsing: {
      role_title: data.bestFitRole?.split(" (")[0] || "Unknown Role",
      company: null,
      mandatory_skills: [],
      nice_to_have_skills: [],
      years_required: null,
      education_required: null,
      seniority_level: "",
    },
    raw_compatibility: {
      score,
      grade: data.scores.grade,
      label: GRADE_LABELS[data.scores.grade],
      hard_gate_applied: null,
      uncapped_score: score,
      component_scores: {
        must_have_skills: { score: 0, matched: [], missing: [] },
        domain_experience: { score: 0, cv_years: 0, required_years: null },
        total_experience: { score: 0, cv_years: 0, required_years: null },
        depth_scope: { score: 0 },
        nature_fit: { score: 0, alignment: "" },
      },
    },
    transformation_effort: {
      tei_score: tei,
      tei_label: TEI_LABELS[tei],
      timeline: TEI_LABELS[tei].split("(")[1]?.replace(")", "") || "Unknown",
      gap_breakdown: [],
      honest_assessment: data.verdict,
    },
    risk_assessment: {
      candidate_risk: {
        score: data.scores.candidateRisk || 50,
        level: riskLevel,
        factors: [],
      },
      employer_risk: {
        score: data.scores.employerRisk || 50,
        level: riskLevel,
        factors: [],
      },
    },
    honest_verdict: {
      headline: data.verdict,
      reality_check: data.verdict,
      should_apply: score >= 60 ? "Yes" : score >= 40 ? "Consider" : "No",
      success_probability: score >= 80 ? "High" : score >= 60 ? "Moderate" : score >= 40 ? "Low" : "Very Low",
      better_fit_roles: [],
    },
    student_guidance: {
      if_dream_role: data.nextAction,
      if_practical: "Consider roles that better match current skills",
      quick_wins: data.topIssues.filter(i => i.fix).map(i => i.fix || i.issue),
      long_term_path: "Continue building relevant skills",
    },
  };
}

function transformStandardToV22(data: StandardOutput): Record<string, unknown> {
  const score = data.scores.rawCompatibility || data.scores.overall;
  const tei = data.scores.tei || 3;
  const riskLevel = data.scores.candidateRisk && data.scores.candidateRisk <= 25 ? "Low" : 
                    data.scores.candidateRisk && data.scores.candidateRisk <= 50 ? "Moderate" : 
                    data.scores.candidateRisk && data.scores.candidateRisk <= 75 ? "High" : "Critical";
  
  const missingSkills = data.skillMatch?.missingCritical || [];
  
  return {
    jd_parsing: data.jdSummary ? {
      role_title: data.jdSummary.jobTitle,
      company: data.jdSummary.company,
      mandatory_skills: data.jdSummary.mustHaveSkills,
      nice_to_have_skills: data.jdSummary.niceToHaveSkills,
      years_required: parseInt(data.jdSummary.experienceRequired) || null,
      education_required: null,
      seniority_level: data.jdSummary.seniorityLevel,
    } : {
      role_title: "Unknown Role",
      company: null,
      mandatory_skills: [],
      nice_to_have_skills: [],
      years_required: null,
      education_required: null,
      seniority_level: "",
    },
    raw_compatibility: {
      score,
      grade: data.scores.grade,
      label: GRADE_LABELS[data.scores.grade],
      hard_gate_applied: null,
      uncapped_score: score,
      component_scores: {
        must_have_skills: data.skillMatch ? {
          score: data.skillMatch.tier1.score,
          matched: [],
          missing: data.skillMatch.missingCritical,
        } : { score: 0, matched: [], missing: [] },
        domain_experience: data.experienceMatch ? {
          score: data.experienceMatch.domainYearsMatch ? 80 : 50,
          cv_years: data.cvSummary.totalYears,
          required_years: data.jdSummary ? parseInt(data.jdSummary.experienceRequired) : null,
        } : { score: 0, cv_years: 0, required_years: null },
        total_experience: {
          score: data.experienceMatch?.totalYearsMatch ? 80 : 50,
          cv_years: data.cvSummary.totalYears,
          required_years: data.jdSummary ? parseInt(data.jdSummary.experienceRequired) : null,
        },
        depth_scope: {
          score: data.experienceMatch?.scopeMatch ? 80 : 50,
        },
        nature_fit: {
          score: 70,
          alignment: data.cvSummary.seniorityLevel,
        },
        should_have_skills: {
          score: data.skillMatch?.tier2.score || 50,
          matched: [],
          missing: [],
        },
        nice_to_have_skills: {
          score: data.skillMatch?.tier3.score || 50,
          matched: [],
          missing: data.jdSummary?.niceToHaveSkills || [],
        },
      },
    },
    transformation_effort: {
      tei_score: tei,
      tei_label: TEI_LABELS[tei],
      timeline: TEI_LABELS[tei].split("(")[1]?.replace(")", "") || "Unknown",
      gap_breakdown: missingSkills.slice(0, 5).map((skill) => ({
        area: skill,
        points: 10,
        fixable_by_cv: false,
      })),
      honest_assessment: data.verdict,
    },
    risk_assessment: {
      candidate_risk: {
        score: data.scores.candidateRisk || 50,
        level: riskLevel,
        factors: missingSkills.slice(0, 3).map((skill) => ({
          factor: `Missing ${skill}`,
          score: 15,
          detail: `JD requires ${skill} which is not evident in your CV`,
        })),
      },
      employer_risk: {
        score: data.scores.employerRisk || 50,
        level: data.riskLevel || "MODERATE",
        factors: [],
      },
    },
    honest_verdict: {
      headline: data.verdict,
      reality_check: data.verdict,
      should_apply: score >= 60 ? "Yes, with tailored application" : score >= 40 ? "Consider if motivated" : "Look for better-fit roles",
      success_probability: score >= 80 ? "High" : score >= 60 ? "Moderate" : score >= 40 ? "Low" : "Very Low",
      better_fit_roles: data.alternativeRoles?.map(r => r.role) || [],
    },
    strengths_reality_check: data.cvSummary.topSkills.slice(0, 3).map((skill) => ({
      strength: skill,
      reality: "Relevant to this role",
      helps: "Demonstrates capability",
      doesnt_help: "",
    })),
    critical_gaps: missingSkills.slice(0, 5).map((skill, i) => ({
      area: skill,
      severity: i === 0 ? "critical" : i < 3 ? "high" : "moderate",
      you_have: "Not demonstrated",
      jd_requires: skill,
      match_percent: 0,
      fixable_by_cv: false,
      what_would_help: `Gain experience with ${skill} or highlight any related skills`,
    })),
    real_options: {
      apply_if: [
        "You're willing to learn missing skills quickly",
        "You have transferable experience not fully captured in CV",
      ],
      dont_apply_if: [
        "Core skills are non-negotiable requirements",
        "You're looking for an exact skill match role",
      ],
      bottom_line: {
        your_profile: data.cvSummary.seniorityLevel,
        target_role: data.jdSummary?.jobTitle || "Target Role",
        reality: data.verdict,
        option_a: {
          title: "Apply with tailored CV",
          action: "Customize your CV to highlight relevant experience",
        },
        option_b: {
          title: "Build missing skills first",
          action: `Focus on: ${missingSkills.slice(0, 2).join(", ")}`,
        },
      },
    },
    student_guidance: {
      if_dream_role: data.encouragement || "Keep building relevant skills",
      if_practical: "Consider roles that better match current skills",
      quick_wins: data.nextSteps?.immediate || data.improvements.critical.map(i => i.action).slice(0, 3),
      long_term_path: `Develop expertise in ${data.jdSummary?.mustHaveSkills.slice(0, 2).join(" and ") || "key skills"}`,
    },
    evidence_map: [],
  };
}

function transformFullToV22(data: FullOutput): Record<string, unknown> {
  const jdAnalysis = data.jdAnalysis;
  const studentAnalysis = data.studentAnalysis;
  const cvAnalysis = data.cvAnalysis;
  
  const score = studentAnalysis?.honestAssessment?.rawCompatibility.score || 70;
  const tei = studentAnalysis?.honestAssessment?.transformationEffort.level || 3;
  const riskLevel = studentAnalysis?.honestAssessment?.candidateRisk.score && studentAnalysis.honestAssessment.candidateRisk.score <= 25 ? "Low" : 
                    studentAnalysis?.honestAssessment?.candidateRisk.score && studentAnalysis.honestAssessment.candidateRisk.score <= 50 ? "Moderate" : 
                    "High";
  
  return {
    jd_parsing: jdAnalysis ? {
      role_title: jdAnalysis.metadata.jobTitle,
      company: jdAnalysis.metadata.company,
      mandatory_skills: jdAnalysis.requirements.tier1Skills,
      nice_to_have_skills: jdAnalysis.requirements.tier3Skills,
      years_required: jdAnalysis.requirements.minimumYears,
      education_required: jdAnalysis.requirements.education,
      seniority_level: jdAnalysis.metadata.seniorityLevel,
    } : {
      role_title: "Unknown Role",
      company: null,
      mandatory_skills: [],
      nice_to_have_skills: [],
      years_required: null,
      education_required: null,
      seniority_level: "",
    },
    raw_compatibility: {
      score,
      grade: studentAnalysis?.overallCvQuality.grade || "B",
      label: GRADE_LABELS[studentAnalysis?.overallCvQuality.grade || "B"],
      hard_gate_applied: jdAnalysis?.hardGates.find(g => !g.met)?.requirement || null,
      uncapped_score: score,
      component_scores: {
        must_have_skills: { score: 0, matched: cvAnalysis.skills.validated.map(s => s.skill), missing: cvAnalysis.skills.ghost.map(s => s.skill) },
        domain_experience: { score: cvAnalysis.experienceFactors.h2DomainYears[0]?.score || 0, cv_years: cvAnalysis.experience.totalYears, required_years: jdAnalysis?.requirements.minimumYears || null },
        total_experience: { score: cvAnalysis.experienceFactors.h1TotalYears.score, cv_years: cvAnalysis.experience.totalYears, required_years: jdAnalysis?.requirements.minimumYears || null },
        depth_scope: { score: cvAnalysis.experienceFactors.h5Scope.score },
        nature_fit: { score: cvAnalysis.experienceFactors.h9Specialization.score, alignment: cvAnalysis.experienceFactors.h9Specialization.type },
      },
    },
    transformation_effort: {
      tei_score: tei,
      tei_label: TEI_LABELS[tei] || "Moderate",
      timeline: studentAnalysis?.honestAssessment?.transformationEffort.timeline || "2-4 weeks",
      gap_breakdown: studentAnalysis?.gapStrategy?.fixable.map(g => ({ area: g.gap, points: 10, fixable_by_cv: true })) || [],
      honest_assessment: studentAnalysis?.honestAssessment?.rawCompatibility.analysis || "Analysis complete",
    },
    risk_assessment: {
      candidate_risk: {
        score: studentAnalysis?.honestAssessment?.candidateRisk.score || 50,
        level: riskLevel,
        factors: studentAnalysis?.honestAssessment?.candidateRisk.factors.map(f => ({ factor: f, score: 10, detail: f })) || [],
      },
      employer_risk: {
        score: 50,
        level: riskLevel,
        factors: [],
      },
    },
    honest_verdict: {
      headline: studentAnalysis?.overallCvQuality.summary || "Analysis complete",
      reality_check: studentAnalysis?.honestAssessment?.rawCompatibility.analysis || "",
      should_apply: studentAnalysis?.honestAssessment?.successProbability || "Moderate",
      success_probability: studentAnalysis?.honestAssessment?.successProbability || "Moderate",
      better_fit_roles: studentAnalysis?.alternatives.betterFitRoles.map(r => r.role) || [],
    },
    student_guidance: {
      if_dream_role: studentAnalysis?.encouragement.message || "Keep building your skills",
      if_practical: "Consider stepping stone roles",
      quick_wins: studentAnalysis?.nextSteps.immediate || [],
      long_term_path: studentAnalysis?.nextSteps.beforeApplication.join("; ") || "",
    },
    evidence_map: [],
  };
}
