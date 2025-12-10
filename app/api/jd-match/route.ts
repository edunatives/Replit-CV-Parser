import { NextRequest, NextResponse } from "next/server";
import { GoogleGenAI } from "@google/genai";
import type { ParsedCV } from "@/types/cv";

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

    const cvSummary = `
CANDIDATE'S CV:
Name: ${cv.name || "Not provided"}
Title: ${cv.title || "Not provided"}
Summary: ${cv.summary || "Not provided"}

Experience:
${cv.experience?.map(exp => `- ${exp.role} at ${exp.company} (${exp.duration})\n  ${exp.description}`).join("\n") || "None"}

Education:
${cv.education?.map(edu => `- ${edu.degree} from ${edu.institution} (${edu.year})`).join("\n") || "None"}

Skills: ${cv.skills?.join(", ") || "None"}

Certifications:
${cv.certifications?.map(cert => `- ${cert.name} by ${cert.issuer}`).join("\n") || "None"}
`;

    const prompt = `You are an expert recruiter and ATS (Applicant Tracking System) specialist. Compare the candidate's CV against the job description and provide a detailed match analysis.

${cvSummary}

JOB DESCRIPTION:
${jobDescription}

Analyze the match and provide your assessment as a valid JSON object with this exact structure:
{
  "matchScore": <number 0-100 representing overall match percentage>,
  "matchedSkills": ["<skill from CV that matches JD>", "<skill 2>", ...],
  "missingSkills": ["<required skill not in CV>", "<skill 2>", ...],
  "experienceMatch": {
    "score": <0-100>,
    "feedback": "<specific feedback about experience alignment>"
  },
  "educationMatch": {
    "score": <0-100>,
    "feedback": "<specific feedback about education requirements>"
  },
  "overallFeedback": "<2-3 sentence summary of how well the candidate matches>",
  "suggestions": [
    "<specific suggestion to improve match>",
    "<suggestion 2>",
    "<suggestion 3>"
  ],
  "keywordOptimizations": [
    "<keyword from JD to add to CV>",
    "<keyword 2>",
    "<keyword 3>"
  ]
}

IMPORTANT:
- Return ONLY valid JSON, no markdown, no code blocks
- Be specific about which skills match and which are missing
- Consider both hard skills and soft skills
- Factor in experience level requirements
- Provide actionable suggestions for improving the match
- List keywords that should be added to the CV for ATS optimization`;

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
