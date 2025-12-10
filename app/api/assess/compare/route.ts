/**
 * @fileoverview Prompt Comparison API - Temporary test endpoint
 * Runs both old and new assessment prompts on the same CV to compare outputs
 */

import { NextRequest, NextResponse } from "next/server";
import { GoogleGenAI } from "@google/genai";
import type { ParsedCV } from "@/types/cv";
import { formatCVSummary, cleanAIResponse, sanitizeAIInput } from "@/lib/ai/rules";

// OLD prompt (from backup) - simple generic approach
function buildOldAssessmentPrompt(cvSummary: string): string {
  return `You are an expert CV/Resume analyst and career advisor. Analyze the following CV and provide a comprehensive assessment.

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

SCORING RUBRIC:
- 90-100: Exceptional - Industry-leading, no improvements needed
- 80-89: Strong - Minor refinements could enhance
- 70-79: Good - Some improvements recommended
- 60-69: Fair - Needs attention in key areas
- Below 60: Needs Work - Significant improvements required

IMPORTANT:
- Return ONLY valid JSON, no markdown, no code blocks, no explanations
- Be specific and actionable in your feedback
- Consider ATS (Applicant Tracking System) compatibility
- Score based on completeness, clarity, impact, and professional presentation
- Recommendations should be specific and actionable`;
}

// NEW prompt (v10.0) - forensic approach with weighted scoring
function buildNewAssessmentPrompt(cvSummary: string): string {
  const sanitized = sanitizeAIInput(cvSummary);
  
  return `You are the EduNatives Forensic CV Analyst (v10.0). Analyze the following CV using our strict weighted scoring system.

CV DATA:
"""
${sanitized}
"""

--- WEIGHTED SCORING SYSTEM ---
Calculate the overall score as a WEIGHTED AVERAGE based on these exact weights:
- Work Experience: 30% weight
- Professional Summary: 20% weight
- Education: 15% weight
- Skills: 15% weight
- Contact Information: 10% weight
- Overall Presentation: 10% weight

Formula: overallScore = (section1Score * 30 + section2Score * 20 + ...) / 100

--- SCORING RUBRIC (apply strictly) ---
- 90-100: Exceptional (No improvements needed)
- 80-89: Strong (Minor refinements)
- 70-79: Good (Some improvements needed)
- 60-69: Fair (Needs attention)
- Below 60: Needs Work (Significant improvements required)

--- FORENSIC ANALYSIS CRITERIA ---
For each section, evaluate:
1. COMPLETENESS: Is all expected information present?
2. CLARITY: Is the content clear, concise, and well-organized?
3. IMPACT: Are achievements quantified? Are action verbs used?
4. ATS COMPATIBILITY: Will it pass Applicant Tracking Systems?
5. AUTHENTICITY: Do claims seem realistic and verifiable? Flag any inflation.

--- OUTPUT FORMAT ---
Return ONLY a valid JSON object with this exact structure:
{
  "overallScore": <number 0-100, calculated using weighted average>,
  "sections": [
    {"name": "Contact Information", "score": <0-100>, "feedback": "<detailed forensic feedback on completeness, professional email, LinkedIn presence, etc.>"},
    {"name": "Professional Summary", "score": <0-100>, "feedback": "<forensic analysis of clarity, impact, quantified achievements, keyword optimization>"},
    {"name": "Work Experience", "score": <0-100>, "feedback": "<forensic review of job progression, achievement quantification, action verbs, gaps analysis>"},
    {"name": "Education", "score": <0-100>, "feedback": "<analysis of relevance, completeness, certifications, honors>"},
    {"name": "Skills", "score": <0-100>, "feedback": "<review of skill relevance, categorization, proficiency indicators>"},
    {"name": "Overall Presentation", "score": <0-100>, "feedback": "<assessment of formatting, consistency, length, visual organization>"}
  ],
  "strengths": ["<specific strength with evidence from CV>", "<strength 2>", "<strength 3>"],
  "weaknesses": ["<specific weakness with recommendation>", "<weakness 2>", "<weakness 3>"],
  "recommendations": [
    "<specific actionable recommendation with example>",
    "<recommendation 2>",
    "<recommendation 3>",
    "<recommendation 4>",
    "<recommendation 5>"
  ]
}

CRITICAL INSTRUCTIONS:
- Return ONLY valid JSON, no markdown code blocks, no explanations
- Calculate overallScore using the weighted formula above - do NOT just average
- Be forensically specific - cite actual content from the CV in feedback
- Flag any claims that appear inflated or unverifiable
- Consider ATS keyword optimization in recommendations
- Each recommendation should be immediately actionable`;
}

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

    const cvSummary = formatCVSummary(cv);
    
    // Run both prompts in parallel
    const [oldResponse, newResponse] = await Promise.all([
      ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: buildOldAssessmentPrompt(cvSummary),
      }),
      ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: buildNewAssessmentPrompt(cvSummary),
      }),
    ]);

    // Parse both responses
    const oldText = oldResponse.text?.trim() || "";
    const newText = newResponse.text?.trim() || "";
    
    let oldAssessment, newAssessment;
    try {
      oldAssessment = JSON.parse(cleanAIResponse(oldText));
    } catch {
      oldAssessment = { error: "Failed to parse old prompt response", raw: oldText.substring(0, 500) };
    }
    
    try {
      newAssessment = JSON.parse(cleanAIResponse(newText));
    } catch {
      newAssessment = { error: "Failed to parse new prompt response", raw: newText.substring(0, 500) };
    }

    return NextResponse.json({
      comparison: {
        oldPrompt: {
          label: "OLD (Simple Generic)",
          assessment: oldAssessment,
          tokenUsage: {
            promptTokens: oldResponse.usageMetadata?.promptTokenCount || 0,
            completionTokens: oldResponse.usageMetadata?.candidatesTokenCount || 0,
          },
        },
        newPrompt: {
          label: "NEW (Forensic v10.0)",
          assessment: newAssessment,
          tokenUsage: {
            promptTokens: newResponse.usageMetadata?.promptTokenCount || 0,
            completionTokens: newResponse.usageMetadata?.candidatesTokenCount || 0,
          },
        },
        scoreDifference: {
          oldScore: oldAssessment.overallScore || 0,
          newScore: newAssessment.overallScore || 0,
          diff: (newAssessment.overallScore || 0) - (oldAssessment.overallScore || 0),
        },
      },
    });
  } catch (error) {
    console.error("Comparison error:", error);
    return NextResponse.json(
      { error: "Failed to run comparison" },
      { status: 500 }
    );
  }
}
