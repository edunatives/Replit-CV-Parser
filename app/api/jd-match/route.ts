/**
 * @fileoverview Job Description Match Analysis API (v2.2)
 * @description Compares a CV against a job description with Experience Factors analysis.
 * Uses Gemini 2.5 Flash to analyze skill alignment, experience fit, nature fit, and ATS optimization.
 * Provides student-friendly encouraging feedback and actionable suggestions.
 * 
 * @endpoint POST /api/jd-match
 * @accepts application/json with { cv: ParsedCV, jobDescription: string }
 * @returns {Object} { match: EnhancedJDMatchResult }
 */

import { NextRequest, NextResponse } from "next/server";
import { GoogleGenAI } from "@google/genai";
import type { ParsedCV, EnhancedJDMatchResult, JDNature, ExperienceFactorIssue, NatureFitIssue, ExperienceYearsAnalysis, ExperienceDepthAnalysis } from "@/types/cv";
import { formatCVForJDMatch, buildJDMatchPrompt, cleanAIResponse } from "@/lib/ai/rules";

/**
 * Evidence map entry showing JD requirement to CV evidence mapping (v9.3)
 */
export interface EvidenceMapEntry {
  jd_requirement: string;
  cv_evidence: string;
  status: "Match" | "Weak" | "Missing";
}

/**
 * JD Parsing result (v9.3)
 */
export interface JDParsing {
  role_title: string;
  company: string;
  mandatory_skills: string[];
  nice_to_have_skills: string[];
}

/**
 * Job Description match analysis result (v2.2 with Experience Factors)
 * @typedef {Object} JDMatchResult
 * @property {JDParsing} jd_parsing - Parsed job description details
 * @property {JDNature} jd_nature - JD requirements profile
 * @property {number} matchScore - Overall match percentage (0-100)
 * @property {string} verdict - Match verdict (Excellent/Good/Partial/Limited Match)
 * @property {string} summary - 2-3 sentence summary of match quality
 * @property {string[]} matchedSkills - Skills from CV that match JD requirements
 * @property {string[]} missingSkills - Required skills not found in CV
 * @property {ExperienceMatch} experienceMatch - Experience alignment score and feedback
 * @property {EducationMatch} educationMatch - Education alignment score and feedback
 * @property {string[]} suggestions - Actionable improvement suggestions
 * @property {string[]} keywordOptimizations - Keywords to add for ATS optimization
 * @property {EvidenceMapEntry[]} evidenceMap - Requirement-to-evidence mappings
 * @property {Object} experienceFactors - Years and depth analysis with H1-H9 codes
 * @property {Object} natureFit - Nature alignment with G1-G9 codes
 * @property {Object} studentSummary - Encouraging headline and quick wins
 * @property {TokenUsage} tokenUsage - AI token consumption metrics
 */
export interface JDMatchResult {
  jd_parsing?: JDParsing;
  jd_nature?: JDNature;
  matchScore: number;
  verdict?: string;
  summary?: string;
  matchedSkills: string[];
  missingSkills: string[];
  experienceMatch: {
    score: number;
    feedback: string;
  };
  educationMatch: {
    score: number;
    feedback: string;
  };
  overallFeedback?: string;
  suggestions: string[];
  keywordOptimizations: string[];
  evidenceMap?: EvidenceMapEntry[];
  experienceFactors?: {
    years_analysis: ExperienceYearsAnalysis;
    depth_analysis: ExperienceDepthAnalysis;
    issues: ExperienceFactorIssue[];
  };
  natureFit?: {
    overall_fit: "Excellent" | "Good" | "Partial" | "Challenging";
    fit_score: number;
    issues: NatureFitIssue[];
    strengths: string[];
  };
  studentSummary?: {
    headline: string;
    encouragement: string;
    quick_wins: string[];
  };
  tokenUsage: {
    promptTokens: number;
    completionTokens: number;
    totalTokens: number;
  };
}

/**
 * Analyze how well a CV matches a specific job description
 * 
 * @param {NextRequest} request - Request with CV and job description text
 * @returns {Promise<NextResponse>} JSON response with match analysis
 * 
 * @example
 * // Request
 * {
 *   cv: { name: "John Doe", skills: ["Python", "React"], ... },
 *   jobDescription: "Looking for a Full Stack Developer with Python, React, and AWS experience..."
 * }
 * 
 * // Response
 * {
 *   match: {
 *     matchScore: 72,
 *     matchedSkills: ["Python", "React"],
 *     missingSkills: ["AWS", "Docker"],
 *     experienceMatch: { score: 80, feedback: "Strong backend experience..." },
 *     educationMatch: { score: 90, feedback: "CS degree exceeds requirements..." },
 *     overallFeedback: "Good match with room for improvement in cloud skills...",
 *     suggestions: ["Add AWS projects to your portfolio", "..."],
 *     keywordOptimizations: ["cloud computing", "CI/CD", "..."],
 *     tokenUsage: { promptTokens: 1500, completionTokens: 600, totalTokens: 2100 }
 *   }
 * }
 * 
 * @throws {400} CV or job description not provided
 * @throws {500} AI service not configured
 * @throws {500} Analysis generation failed
 */
export async function POST(request: NextRequest) {
  try {
    const { cv, jobDescription } = await request.json() as {
      cv: ParsedCV;
      jobDescription: string;
    };

    if (!cv || !jobDescription) {
      return NextResponse.json({ error: "CV and job description are required" }, { status: 400 });
    }

    const apiKey = process.env.AI_INTEGRATIONS_GEMINI_API_KEY;
    const baseUrl = process.env.AI_INTEGRATIONS_GEMINI_BASE_URL;

    if (!apiKey) {
      return NextResponse.json({ error: "AI service not configured" }, { status: 500 });
    }

    const ai = new GoogleGenAI({
      apiKey,
      httpOptions: {
        apiVersion: "",
        baseUrl: baseUrl,
      },
    });

    const cvSummary = formatCVForJDMatch(cv);
    const prompt = buildJDMatchPrompt(cvSummary, jobDescription);

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
    });

    const responseText = response.text?.trim() || "";
    const jsonText = cleanAIResponse(responseText);
    const matchResult = JSON.parse(jsonText);

    const tokenUsage = {
      promptTokens: response.usageMetadata?.promptTokenCount || 0,
      completionTokens: response.usageMetadata?.candidatesTokenCount || 0,
      totalTokens: response.usageMetadata?.totalTokenCount || 0,
    };

    // Normalize v2.2 response structure (handles both old and new formats)
    const matchAnalysis = matchResult.match_analysis || matchResult;
    const expFactors = matchResult.experience_factors;
    const natFit = matchResult.nature_fit;
    const studentSum = matchResult.student_summary;
    
    const result: JDMatchResult = {
      jd_parsing: matchResult.jd_parsing,
      jd_nature: matchResult.jd_nature,
      matchScore: matchAnalysis.overall_match_score ?? matchAnalysis.matchScore ?? 0,
      verdict: matchAnalysis.verdict,
      summary: matchAnalysis.summary,
      matchedSkills: matchAnalysis.matched_skills ?? matchAnalysis.matchedSkills ?? [],
      missingSkills: matchAnalysis.missing_skills ?? matchAnalysis.missingSkills ?? [],
      experienceMatch: {
        score: matchAnalysis.experience_match?.score ?? matchAnalysis.experienceMatch?.score ?? 0,
        feedback: matchAnalysis.experience_match?.feedback ?? matchAnalysis.experienceMatch?.feedback ?? "",
      },
      educationMatch: {
        score: matchAnalysis.education_match?.score ?? matchAnalysis.educationMatch?.score ?? 0,
        feedback: matchAnalysis.education_match?.feedback ?? matchAnalysis.educationMatch?.feedback ?? "",
      },
      overallFeedback: matchAnalysis.overallFeedback ?? matchAnalysis.summary,
      suggestions: matchAnalysis.suggestions ?? [],
      keywordOptimizations: matchAnalysis.keyword_optimizations ?? matchAnalysis.keywordOptimizations ?? [],
      evidenceMap: matchResult.evidence_map ?? [],
      // v2.2 Experience Factors
      experienceFactors: expFactors ? {
        years_analysis: {
          total_years: expFactors.years_analysis?.total_years ?? 0,
          relevant_domain_years: expFactors.years_analysis?.relevant_domain_years ?? 0,
          recency_score: expFactors.years_analysis?.recency_score ?? 0,
          meets_requirement: expFactors.years_analysis?.meets_requirement ?? false,
          student_message: expFactors.years_analysis?.student_message ?? "",
        },
        depth_analysis: {
          depth_level: expFactors.depth_analysis?.depth_level ?? "Entry",
          scope_score: expFactors.depth_analysis?.scope_score ?? 0,
          impact_score: expFactors.depth_analysis?.impact_score ?? 0,
          complexity_handled: expFactors.depth_analysis?.complexity_handled ?? "",
          student_message: expFactors.depth_analysis?.student_message ?? "",
        },
        issues: (expFactors.issues ?? []).map((issue: Record<string, unknown>) => ({
          code: (issue.code ?? "") as string,
          type: (issue.type ?? "") as string,
          message: (issue.message ?? "") as string,
          cv_value: (issue.cv_value ?? "") as string,
          jd_requirement: (issue.jd_requirement ?? "") as string,
          gap_severity: (issue.gap_severity ?? "minor") as "minor" | "moderate" | "significant",
        })),
      } : undefined,
      // v2.2 Nature Fit
      natureFit: natFit ? {
        overall_fit: natFit.overall_fit ?? "Partial",
        fit_score: natFit.fit_score ?? 0,
        issues: (natFit.issues ?? []).map((issue: Record<string, unknown>) => ({
          code: (issue.code ?? "") as string,
          type: (issue.type ?? "") as string,
          message: (issue.message ?? "") as string,
          cv_nature: (issue.cv_nature ?? "") as string,
          jd_expects: (issue.jd_expects ?? "") as string,
          transferable: (issue.transferable ?? false) as boolean,
        })),
        strengths: natFit.strengths ?? [],
      } : undefined,
      // v2.2 Student Summary
      studentSummary: studentSum ? {
        headline: studentSum.headline ?? "",
        encouragement: studentSum.encouragement ?? "",
        quick_wins: studentSum.quick_wins ?? [],
      } : undefined,
      tokenUsage,
    };

    return NextResponse.json({ match: result });
  } catch (error) {
    console.error("JD Match error:", error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Failed to analyze job match" },
      { status: 500 }
    );
  }
}
