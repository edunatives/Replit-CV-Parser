/**
 * @fileoverview CV Assessment API v2.3
 * @description Direct v2.3 implementation - no legacy compatibility
 * 
 * @endpoint POST /api/assess/langchain
 * @accepts application/json with { cv: ParsedCV, outputMode?: "LITE"|"STANDARD"|"FULL", audience?: "STUDENT"|"HR" }
 * @returns {Object} v2.3 AnalysisResponse
 */

import { NextRequest, NextResponse } from "next/server";
import type { ParsedCV } from "@/types/cv";
import { analyzeCV, type OutputMode, type AudienceType } from "@/lib/langchain/v23-cv-intelligence-chain";

function formatCVText(cv: ParsedCV): string {
  const sections: string[] = [];
  
  if (cv.name) sections.push(`NAME: ${cv.name}`);
  if (cv.title) sections.push(`TITLE: ${cv.title}`);
  if (cv.email) sections.push(`EMAIL: ${cv.email}`);
  if (cv.phone) sections.push(`PHONE: ${cv.phone}`);
  if (cv.location) sections.push(`LOCATION: ${cv.location}`);
  if (cv.linkedin) sections.push(`LINKEDIN: ${cv.linkedin}`);
  if (cv.github) sections.push(`GITHUB: ${cv.github}`);
  if (cv.website) sections.push(`WEBSITE: ${cv.website}`);
  
  if (cv.summary) sections.push(`\nPROFESSIONAL SUMMARY:\n${cv.summary}`);
  
  if (cv.experience && cv.experience.length > 0) {
    sections.push("\nEXPERIENCE:");
    cv.experience.forEach((exp, i) => {
      sections.push(`\n${i + 1}. ${exp.role} at ${exp.company}`);
      if (exp.duration) sections.push(`   Duration: ${exp.duration}`);
      if (exp.location) sections.push(`   Location: ${exp.location}`);
      if (exp.description) sections.push(`   ${exp.description}`);
    });
  }
  
  if (cv.education && cv.education.length > 0) {
    sections.push("\nEDUCATION:");
    cv.education.forEach((edu, i) => {
      sections.push(`${i + 1}. ${edu.degree} - ${edu.institution} (${edu.year || "N/A"})`);
    });
  }
  
  if (cv.certifications && cv.certifications.length > 0) {
    sections.push("\nCERTIFICATIONS:");
    cv.certifications.forEach((cert, i) => {
      sections.push(`${i + 1}. ${cert.name} - ${cert.issuer} (${cert.year || "N/A"})`);
    });
  }
  
  if (cv.skills && cv.skills.length > 0) {
    sections.push(`\nSKILLS: ${cv.skills.join(", ")}`);
  }
  
  if (cv.strengths && cv.strengths.length > 0) {
    sections.push(`\nSTRENGTHS: ${cv.strengths.join(", ")}`);
  }
  
  return sections.join("\n");
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json() as { 
      cv: ParsedCV; 
      outputMode?: OutputMode;
      audience?: AudienceType;
    };
    const { cv, outputMode = "STANDARD", audience = "STUDENT" } = body;

    if (!cv) {
      return NextResponse.json({ error: "CV data is required" }, { status: 400 });
    }

    const userApiKey = process.env.GOOGLE_API_KEY;
    const replitApiKey = process.env.AI_INTEGRATIONS_GEMINI_API_KEY;
    if (!userApiKey && !replitApiKey) {
      return NextResponse.json({ 
        error: "AI service not configured (GOOGLE_API_KEY or AI_INTEGRATIONS_GEMINI_API_KEY required)" 
      }, { status: 500 });
    }

    const cvText = cv.rawText || formatCVText(cv);
    const filename = cv.originalFilename || "cv.pdf";
    
    console.log(`[v2.3] Assessment starting for: ${filename}, mode: ${outputMode}, audience: ${audience}`);
    
    const result = await analyzeCV(cvText, {
      outputMode,
      audience,
    });
    
    const score = result.data && "scores" in result.data ? result.data.scores.overall : "N/A";
    console.log(`[v2.3] Assessment complete, score: ${score}`);

    return NextResponse.json(result);
  } catch (error) {
    console.error("[v2.3] CV Assessment error:", error);
    return NextResponse.json(
      { 
        success: false,
        error: error instanceof Error ? error.message : "Failed to assess CV" 
      },
      { status: 500 }
    );
  }
}
