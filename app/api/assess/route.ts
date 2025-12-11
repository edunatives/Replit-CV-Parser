/**
 * @fileoverview CV Assessment API
 * @description AI-powered CV/resume analysis and scoring using Gemini 2.5 Flash.
 * Supports v9.3 (6 sections) and v2.11 (7 categories with multi-audience reports).
 * 
 * @endpoint POST /api/assess
 * @accepts application/json with { cv: ParsedCV, version?: "9.3" | "2.11" }
 * @returns {Object} { assessment: CVAssessment } or { analysis: ForensicAnalysisV211 }
 */

import { NextRequest, NextResponse } from "next/server";
import { GoogleGenAI } from "@google/genai";
import type { ParsedCV, ForensicAnalysisV211 } from "@/types/cv";
import { formatCVSummary, buildAssessmentPrompt, buildV211AssessmentPrompt, cleanAIResponse } from "@/lib/ai/rules";

/**
 * Forensic highlight for inline CV annotation (v9.3)
 */
export interface ForensicHighlight {
  snippet: string;
  type: "red" | "green" | "yellow";
  comment: string;
}

/**
 * CV Assessment result structure (v9.3 Forensic Engine)
 * @typedef {Object} CVAssessment
 * @property {number} overallScore - Overall CV quality score (0-100)
 * @property {string} level - Quality level (Exceptional/Strong/Good/Fair/Needs Work)
 * @property {boolean} inflation - True if claims appear inflated
 * @property {string} verdict - 2-3 sentence summary of CV quality
 * @property {SectionScore[]} sections - Individual section scores
 * @property {string[]} strengths - Top 3-5 strengths identified
 * @property {string[]} weaknesses - Top 3-5 weaknesses identified
 * @property {string[]} recommendations - 3-5 actionable improvement suggestions
 * @property {ForensicHighlight[]} highlights - Text snippets for inline highlighting
 * @property {TokenUsage} tokenUsage - AI token consumption metrics
 */
export interface CVAssessment {
  overallScore: number;
  level: string;
  inflation: boolean;
  verdict: string;
  sections: {
    name: string;
    score: number;
    feedback: string;
  }[];
  strengths: string[];
  weaknesses: string[];
  recommendations: string[];
  highlights: ForensicHighlight[];
  tokenUsage: {
    promptTokens: number;
    completionTokens: number;
    totalTokens: number;
  };
}

/**
 * Analyze a CV and return comprehensive assessment with scores
 * 
 * @param {NextRequest} request - Request containing ParsedCV data
 * @returns {Promise<NextResponse>} JSON response with CVAssessment
 * 
 * @example
 * // Request
 * {
 *   cv: {
 *     name: "John Doe",
 *     title: "Software Engineer",
 *     experience: [...],
 *     // ... other CV fields
 *   }
 * }
 * 
 * // Response
 * {
 *   assessment: {
 *     overallScore: 78,
 *     sections: [
 *       { name: "Contact Information", score: 90, feedback: "..." },
 *       { name: "Professional Summary", score: 75, feedback: "..." },
 *       // ... 6 sections total
 *     ],
 *     strengths: ["Strong technical skills", "Clear experience progression", "..."],
 *     weaknesses: ["Summary could be more concise", "..."],
 *     recommendations: ["Add quantifiable achievements", "..."],
 *     tokenUsage: { promptTokens: 1200, completionTokens: 500, totalTokens: 1700 }
 *   }
 * }
 * 
 * @throws {400} CV data not provided
 * @throws {500} AI service not configured
 * @throws {500} Assessment generation failed
 */
export async function POST(request: NextRequest) {
  try {
    const body = await request.json() as { cv: ParsedCV; version?: "9.3" | "2.11" };
    const { cv, version = "2.11" } = body;

    if (!cv) {
      return NextResponse.json({ error: "CV data is required" }, { status: 400 });
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

    const cvSummary = formatCVSummary(cv);
    
    // Use v2.11 or v9.3 prompt based on version parameter
    if (version === "2.11") {
      const prompt = buildV211AssessmentPrompt(cvSummary, cv.originalFilename || "cv.pdf");
      
      const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: prompt,
        config: {
          maxOutputTokens: 8192, // v2.11 needs more tokens for comprehensive output
        },
      });

      const responseText = response.text?.trim() || "";
      const jsonText = cleanAIResponse(responseText);
      const analysis: ForensicAnalysisV211 = JSON.parse(jsonText);

      const tokenUsage = {
        promptTokens: response.usageMetadata?.promptTokenCount || 0,
        completionTokens: response.usageMetadata?.candidatesTokenCount || 0,
        totalTokens: response.usageMetadata?.totalTokenCount || 0,
      };

      return NextResponse.json({ 
        analysis,
        tokenUsage,
        version: "2.11"
      });
    }
    
    // v9.3 legacy flow
    const prompt = buildAssessmentPrompt(cvSummary);

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
    });

    const responseText = response.text?.trim() || "";
    const jsonText = cleanAIResponse(responseText);
    const assessment = JSON.parse(jsonText);

    const tokenUsage = {
      promptTokens: response.usageMetadata?.promptTokenCount || 0,
      completionTokens: response.usageMetadata?.candidatesTokenCount || 0,
      totalTokens: response.usageMetadata?.totalTokenCount || 0,
    };

    const result: CVAssessment = {
      ...assessment,
      tokenUsage,
    };

    return NextResponse.json({ assessment: result });
  } catch (error) {
    console.error("CV Assessment error:", error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Failed to assess CV" },
      { status: 500 }
    );
  }
}
