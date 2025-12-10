/**
 * @fileoverview CV Assessment API
 * @description AI-powered CV/resume analysis and scoring using Gemini 2.5 Flash.
 * Evaluates CV quality across 6 sections and provides actionable recommendations.
 * 
 * @endpoint POST /api/assess
 * @accepts application/json with { cv: ParsedCV }
 * @returns {Object} { assessment: CVAssessment }
 */

import { NextRequest, NextResponse } from "next/server";
import { GoogleGenAI } from "@google/genai";
import type { ParsedCV } from "@/types/cv";

/**
 * CV Assessment result structure
 * @typedef {Object} CVAssessment
 * @property {number} overallScore - Overall CV quality score (0-100)
 * @property {SectionScore[]} sections - Individual section scores
 * @property {string[]} strengths - Top 3 strengths identified
 * @property {string[]} weaknesses - Top 3 weaknesses identified  
 * @property {string[]} recommendations - 5 actionable improvement suggestions
 * @property {TokenUsage} tokenUsage - AI token consumption metrics
 */
export interface CVAssessment {
  overallScore: number;
  sections: {
    name: string;
    score: number;
    feedback: string;
  }[];
  strengths: string[];
  weaknesses: string[];
  recommendations: string[];
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
    const { cv } = await request.json() as { cv: ParsedCV };

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

    const cvSummary = `
Name: ${cv.name || "Not provided"}
Title: ${cv.title || "Not provided"}
Email: ${cv.email || "Not provided"}
Phone: ${cv.phone || "Not provided"}
Location: ${cv.location || "Not provided"}
LinkedIn: ${cv.linkedin || "Not provided"}
GitHub: ${cv.github || "Not provided"}
Website: ${cv.website || "Not provided"}

Summary:
${cv.summary || "Not provided"}

Experience (${cv.experience?.length || 0} positions):
${cv.experience?.map(exp => `- ${exp.role} at ${exp.company} (${exp.duration})\n  ${exp.description}`).join("\n") || "None listed"}

Education (${cv.education?.length || 0} entries):
${cv.education?.map(edu => `- ${edu.degree} from ${edu.institution} (${edu.year})`).join("\n") || "None listed"}

Skills (${cv.skills?.length || 0}):
${cv.skills?.join(", ") || "None listed"}

Certifications (${cv.certifications?.length || 0}):
${cv.certifications?.map(cert => `- ${cert.name} by ${cert.issuer} (${cert.year})`).join("\n") || "None listed"}
`;

    const prompt = `You are an expert CV/Resume analyst and career advisor. Analyze the following CV and provide a comprehensive assessment.

CV DATA:
${cvSummary}

Provide your assessment as a valid JSON object with this exact structure:
{
  "overallScore": <number 0-100>,
  "sections": [
    {"name": "Contact Information", "score": <0-100>, "feedback": "<specific feedback>"},
    {"name": "Professional Summary", "score": <0-100>, "feedback": "<specific feedback>"},
    {"name": "Work Experience", "score": <0-100>, "feedback": "<specific feedback>"},
    {"name": "Education", "score": <0-100>, "feedback": "<specific feedback>"},
    {"name": "Skills", "score": <0-100>, "feedback": "<specific feedback>"},
    {"name": "Overall Presentation", "score": <0-100>, "feedback": "<specific feedback>"}
  ],
  "strengths": ["<strength 1>", "<strength 2>", "<strength 3>"],
  "weaknesses": ["<weakness 1>", "<weakness 2>", "<weakness 3>"],
  "recommendations": ["<actionable recommendation 1>", "<actionable recommendation 2>", "<actionable recommendation 3>", "<actionable recommendation 4>", "<actionable recommendation 5>"]
}

IMPORTANT:
- Return ONLY valid JSON, no markdown, no code blocks, no explanations
- Be specific and actionable in your feedback
- Consider ATS (Applicant Tracking System) compatibility
- Score based on completeness, clarity, impact, and professional presentation
- Recommendations should be specific and actionable`;

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
    });

    const responseText = response.text?.trim() || "";
    
    let jsonText = responseText;
    if (responseText.includes("```json")) {
      jsonText = responseText.replace(/```json\s*/g, "").replace(/```\s*/g, "").trim();
    } else if (responseText.includes("```")) {
      jsonText = responseText.replace(/```\s*/g, "").trim();
    }

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
