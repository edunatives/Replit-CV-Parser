/**
 * @fileoverview Job Description Match Analysis API
 * @description Compares a CV against a job description to calculate match percentage.
 * Uses Gemini 2.5 Flash to analyze skill alignment, experience fit, and ATS optimization.
 * Provides actionable suggestions for improving job application success.
 * 
 * @endpoint POST /api/jd-match
 * @accepts application/json with { cv: ParsedCV, jobDescription: string }
 * @returns {Object} { match: JDMatchResult }
 */

import { NextRequest, NextResponse } from "next/server";
import { GoogleGenAI } from "@google/genai";
import type { ParsedCV } from "@/types/cv";
import { formatCVForJDMatch, buildJDMatchPrompt, cleanAIResponse } from "@/lib/ai/rules";

/**
 * Job Description match analysis result
 * @typedef {Object} JDMatchResult
 * @property {number} matchScore - Overall match percentage (0-100)
 * @property {string[]} matchedSkills - Skills from CV that match JD requirements
 * @property {string[]} missingSkills - Required skills not found in CV
 * @property {ExperienceMatch} experienceMatch - Experience alignment score and feedback
 * @property {EducationMatch} educationMatch - Education alignment score and feedback
 * @property {string} overallFeedback - Summary of match quality
 * @property {string[]} suggestions - Actionable improvement suggestions
 * @property {string[]} keywordOptimizations - Keywords to add for ATS optimization
 * @property {TokenUsage} tokenUsage - AI token consumption metrics
 */
export interface JDMatchResult {
  matchScore: number;
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
  overallFeedback: string;
  suggestions: string[];
  keywordOptimizations: string[];
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

    const result: JDMatchResult = {
      ...matchResult,
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
