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

    const apiKey = process.env.AI_INTEGRATIONS_GEMINI_API_KEY;
    if (!apiKey) {
      return NextResponse.json({ error: "AI service not configured" }, { status: 500 });
    }

    const cvSummary = formatCVSummaryForMatch(cv);
    
    console.log("LangChain JD match starting...");
    
    const match = await matchJDWithLangChain(cvSummary, jobDescription);
    
    console.log("LangChain JD match complete, score:", match.match_analysis.overall_match_score);

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
