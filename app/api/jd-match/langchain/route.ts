/**
 * @fileoverview LangChain JD Match API
 * @description JD matching using LangChain.js with structured output for reliable parsing.
 * Implements v2.2 honest-first three-score system.
 * 
 * @endpoint POST /api/jd-match/langchain
 * @accepts application/json with { cv: ParsedCV, jobDescription: string }
 * @returns {Object} { match: JDMatchResult, engine: "langchain" }
 */

import { NextRequest, NextResponse } from "next/server";
import type { ParsedCV } from "@/types/cv";
import { formatCVForJDMatch } from "@/lib/ai/rules";
import { matchJDWithLangChain, type EnhancedJDMatchResult } from "@/lib/langchain/jd-matcher";

/**
 * Transform LangChain JD match output to v2.2 UI format
 * Maps: match_analysis → raw_compatibility, experience_factors → component_scores, etc.
 */
function transformToV22Format(match: EnhancedJDMatchResult): Record<string, unknown> {
  const score = match.match_analysis.overall_match_score;
  const grade = score >= 90 ? "A+" : score >= 80 ? "A" : score >= 70 ? "B" : score >= 60 ? "C" : score >= 50 ? "D" : "F";
  const label = match.match_analysis.verdict;
  
  const missingSkillsCount = match.match_analysis.missing_skills?.length || 0;
  const teiScore = missingSkillsCount === 0 ? 1 : missingSkillsCount <= 2 ? 2 : missingSkillsCount <= 4 ? 3 : missingSkillsCount <= 6 ? 4 : 5;
  const teiLabels = ["Minimal", "Low", "Moderate", "Significant", "Extensive"];
  
  const riskLevel = score >= 70 ? "Low" : score >= 50 ? "Moderate" : score >= 30 ? "High" : "Critical";

  return {
    jd_parsing: {
      role_title: match.jd_parsing.role_title,
      company: match.jd_parsing.company || null,
      mandatory_skills: match.jd_parsing.mandatory_skills,
      nice_to_have_skills: match.jd_parsing.nice_to_have_skills,
      years_required: match.jd_nature?.years_required || null,
      education_required: match.jd_nature?.education_required || null,
      seniority_level: match.jd_nature?.role_level || "",
    },
    raw_compatibility: {
      score,
      grade,
      label,
      hard_gate_applied: null,
      uncapped_score: score,
      component_scores: {
        must_have_skills: {
          score: match.match_analysis.matched_skills.length > 0 
            ? Math.round((match.match_analysis.matched_skills.length / 
                (match.match_analysis.matched_skills.length + match.match_analysis.missing_skills.length)) * 100)
            : 0,
          matched: match.match_analysis.matched_skills,
          missing: match.match_analysis.missing_skills,
        },
        domain_experience: {
          score: match.match_analysis.experience_match.score,
          cv_years: match.experience_factors?.years_analysis.total_years,
          required_years: match.jd_nature?.years_required,
        },
        total_experience: {
          score: match.experience_factors?.years_analysis.recency_score || 70,
          cv_years: match.experience_factors?.years_analysis.total_years,
          required_years: match.jd_nature?.years_required,
        },
        depth_scope: {
          score: match.experience_factors?.depth_analysis.scope_score || 70,
        },
        nature_fit: {
          score: match.nature_fit?.fit_score || 70,
          alignment: match.nature_fit?.overall_fit,
        },
        should_have_skills: {
          score: 70,
          matched: [],
          missing: [],
        },
        nice_to_have_skills: {
          score: 50,
          matched: [],
          missing: match.jd_parsing.nice_to_have_skills,
        },
      },
    },
    transformation_effort: {
      tei_score: teiScore,
      tei_label: teiLabels[teiScore - 1],
      timeline: teiScore <= 2 ? "1-2 weeks" : teiScore <= 3 ? "1-2 months" : "3-6 months",
      gap_breakdown: match.match_analysis.missing_skills.slice(0, 5).map((skill) => ({
        area: skill,
        points: 10,
        fixable_by_cv: false,
      })),
      honest_assessment: match.experience_factors?.depth_analysis.student_message || 
        `Based on your current profile, this role requires ${teiLabels[teiScore - 1].toLowerCase()} effort to bridge skill gaps.`,
    },
    risk_assessment: {
      candidate_risk: {
        score: 100 - score,
        level: riskLevel,
        factors: match.match_analysis.missing_skills.slice(0, 3).map((skill) => ({
          factor: `Missing ${skill}`,
          score: 15,
          detail: `JD requires ${skill} which is not evident in your CV`,
        })),
      },
      employer_risk: {
        score: Math.max(0, 50 - score / 2),
        level: score >= 70 ? "Low" : score >= 50 ? "Moderate" : "High",
        factors: [],
      },
    },
    honest_verdict: {
      headline: match.student_summary?.headline || match.match_analysis.summary,
      reality_check: match.experience_factors?.depth_analysis.student_message || 
        `Your profile shows ${match.match_analysis.verdict.toLowerCase()} for this role.`,
      should_apply: score >= 60 ? "Yes, with tailored application" : score >= 40 ? "Consider if motivated" : "Look for better-fit roles",
      success_probability: score >= 80 ? "High" : score >= 60 ? "Moderate" : score >= 40 ? "Low" : "Very Low",
      better_fit_roles: [],
    },
    strengths_reality_check: match.nature_fit?.strengths?.slice(0, 3).map((s) => ({
      strength: s,
      reality: "Relevant to this role",
      helps: "Demonstrates capability",
      doesnt_help: "",
    })) || [],
    critical_gaps: match.match_analysis.missing_skills.slice(0, 5).map((skill, i) => ({
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
        your_profile: match.jd_nature?.role_level || "Professional",
        target_role: match.jd_parsing.role_title,
        reality: match.student_summary?.encouragement || match.match_analysis.summary,
        option_a: {
          title: "Apply with tailored CV",
          action: "Customize your CV to highlight relevant experience",
        },
        option_b: {
          title: "Build missing skills first",
          action: `Focus on: ${match.match_analysis.missing_skills.slice(0, 2).join(", ")}`,
        },
      },
    },
    student_guidance: {
      if_dream_role: match.student_summary?.encouragement || "Keep building relevant skills",
      if_practical: "Consider roles that better match current skills",
      quick_wins: match.student_summary?.quick_wins || match.match_analysis.suggestions.slice(0, 3),
      long_term_path: `Develop expertise in ${match.jd_parsing.mandatory_skills.slice(0, 2).join(" and ")}`,
    },
    evidence_map: match.evidence_map.map((e) => ({
      jd_requirement: e.jd_requirement,
      cv_evidence: e.cv_evidence,
      status: e.status,
      gap_severity: e.status === "Missing" ? "critical" : e.status === "Weak" ? "moderate" : "none",
    })),
  };
}

/**
 * Format CV data for JD matching
 */
function formatCVSummaryForMatch(cv: ParsedCV): string {
  const sections: string[] = [];
  
  if (cv.name) sections.push(`NAME: ${cv.name}`);
  if (cv.title) sections.push(`TITLE: ${cv.title}`);
  if (cv.summary) sections.push(`SUMMARY:\n${cv.summary}`);
  
  if (cv.experience && cv.experience.length > 0) {
    sections.push("EXPERIENCE:");
    cv.experience.forEach((exp, i) => {
      sections.push(`${i + 1}. ${exp.role} at ${exp.company} (${exp.duration || "N/A"})`);
      if (exp.description) sections.push(`   ${exp.description}`);
    });
  }
  
  if (cv.education && cv.education.length > 0) {
    sections.push("EDUCATION:");
    cv.education.forEach((edu, i) => {
      sections.push(`${i + 1}. ${edu.degree} - ${edu.institution} (${edu.year || "N/A"})`);
    });
  }
  
  if (cv.skills && cv.skills.length > 0) {
    sections.push(`SKILLS: ${cv.skills.join(", ")}`);
  }
  
  if (cv.certifications && cv.certifications.length > 0) {
    sections.push(`CERTIFICATIONS: ${cv.certifications.join(", ")}`);
  }
  
  return sections.join("\n\n");
}

/**
 * Match a CV against a job description using LangChain with structured output
 * 
 * @param {NextRequest} request - Request containing CV and job description
 * @returns {Promise<NextResponse>} JSON response with JDMatchResult
 * 
 * @example
 * // Request
 * POST /api/jd-match/langchain
 * {
 *   cv: { name: "John Doe", skills: [...], ... },
 *   jobDescription: "Senior Software Engineer at..."
 * }
 * 
 * // Response
 * {
 *   match: {
 *     raw_compatibility_score: 72,
 *     raw_compatibility_grade: "B",
 *     transformation_effort: { tei_score: 2, ... },
 *     risk_assessment: { ... },
 *     ...
 *   },
 *   engine: "langchain"
 * }
 */
export async function POST(request: NextRequest) {
  try {
    const body = await request.json() as { cv: ParsedCV; jobDescription: string };
    const { cv, jobDescription } = body;

    if (!cv) {
      return NextResponse.json({ error: "CV data is required" }, { status: 400 });
    }
    
    if (!jobDescription) {
      return NextResponse.json({ error: "Job description is required" }, { status: 400 });
    }

    const userApiKey = process.env.GOOGLE_API_KEY;
    const replitApiKey = process.env.AI_INTEGRATIONS_GEMINI_API_KEY;
    if (!userApiKey && !replitApiKey) {
      return NextResponse.json({ error: "AI service not configured (GOOGLE_API_KEY or AI_INTEGRATIONS_GEMINI_API_KEY required)" }, { status: 500 });
    }

    const cvSummary = formatCVSummaryForMatch(cv);
    
    console.log("LangChain JD match starting...");
    
    const rawMatch = await matchJDWithLangChain(cvSummary, jobDescription);
    
    console.log("LangChain JD match complete, score:", rawMatch.match_analysis.overall_match_score);
    
    // Transform to v2.2 UI format
    const match = transformToV22Format(rawMatch);

    return NextResponse.json({ 
      match,
      engine: "langchain",
      version: "2.2"
    });
  } catch (error) {
    console.error("LangChain JD Match error:", error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Failed to match JD with LangChain" },
      { status: 500 }
    );
  }
}
