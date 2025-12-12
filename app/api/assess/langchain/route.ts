/**
 * @fileoverview LangChain CV Assessment API
 * @description CV assessment using LangChain.js with structured output for reliable parsing.
 * 
 * @endpoint POST /api/assess/langchain
 * @accepts application/json with { cv: ParsedCV }
 * @returns {Object} { assessment: CVAssessment }
 */

import { NextRequest, NextResponse } from "next/server";
import type { ParsedCV } from "@/types/cv";
import { formatCVSummary } from "@/lib/ai/rules";
import { assessCVWithLangChain, transformToForensicV211 } from "@/lib/langchain/assessor";

/**
 * Analyze a CV using LangChain with structured output
 * 
 * @param {NextRequest} request - Request containing ParsedCV data
 * @returns {Promise<NextResponse>} JSON response with CVAssessment
 * 
 * @example
 * // Request
 * POST /api/assess/langchain
 * {
 *   cv: {
 *     name: "John Doe",
 *     title: "Software Engineer",
 *     experience: [...],
 *     ...
 *   }
 * }
 * 
 * // Response
 * {
 *   assessment: {
 *     overallScore: 78,
 *     level: "Strong",
 *     verdict: "...",
 *     categories: [...],
 *     strengths: [...],
 *     weaknesses: [...],
 *     recommendations: [...],
 *     highlights: [...]
 *   },
 *   engine: "langchain"
 * }
 */
export async function POST(request: NextRequest) {
  try {
    const body = await request.json() as { cv: ParsedCV };
    const { cv } = body;

    if (!cv) {
      return NextResponse.json({ error: "CV data is required" }, { status: 400 });
    }

    const userApiKey = process.env.GOOGLE_API_KEY;
    const replitApiKey = process.env.AI_INTEGRATIONS_GEMINI_API_KEY;
    if (!userApiKey && !replitApiKey) {
      return NextResponse.json({ error: "AI service not configured (GOOGLE_API_KEY or AI_INTEGRATIONS_GEMINI_API_KEY required)" }, { status: 500 });
    }

    const cvSummary = formatCVSummary(cv);
    const filename = cv.originalFilename || "cv.pdf";
    
    console.log("LangChain assessment starting for:", filename);
    
    const assessment = await assessCVWithLangChain(cvSummary, filename);
    
    console.log("LangChain assessment complete, score:", assessment.overallScore);

    const analysis = transformToForensicV211(assessment, filename);

    return NextResponse.json({ 
      analysis,
      engine: "langchain",
      version: "2.11"
    });
  } catch (error) {
    console.error("LangChain CV Assessment error:", error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Failed to assess CV with LangChain" },
      { status: 500 }
    );
  }
}
