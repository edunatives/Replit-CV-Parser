/**
 * @fileoverview JD Match API v2.3
 * @description Direct v2.3 implementation with honest three-score system
 * 
 * @endpoint POST /api/jd-match/langchain
 * @accepts application/json with { cv: ParsedCV, jobDescription: string, outputMode?, audience? }
 * @returns {Object} v2.3 AnalysisResponse with JD matching
 */

import { NextRequest, NextResponse } from "next/server";
import type { ParsedCV } from "@/types/cv";
import { analyzeCV, type OutputMode, type AudienceType } from "@/lib/langchain/v23-cv-intelligence-chain";
import { getEffectiveModelConfig } from "@/lib/langchain/model-config";

function formatCVText(cv: ParsedCV): string {
  const sections: string[] = [];
  
  if (cv.name) sections.push(`NAME: ${cv.name}`);
  if (cv.title) sections.push(`TITLE: ${cv.title}`);
  if (cv.email) sections.push(`EMAIL: ${cv.email}`);
  if (cv.phone) sections.push(`PHONE: ${cv.phone}`);
  if (cv.location) sections.push(`LOCATION: ${cv.location}`);
  if (cv.linkedin) sections.push(`LINKEDIN: ${cv.linkedin}`);
  
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
  
  return sections.join("\n");
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json() as { 
      cv: ParsedCV; 
      jobDescription: string;
      outputMode?: OutputMode;
      audience?: AudienceType;
    };
    const { cv, jobDescription, outputMode = "STANDARD", audience = "STUDENT" } = body;

    if (!cv) {
      return NextResponse.json({ error: "CV data is required" }, { status: 400 });
    }
    
    if (!jobDescription) {
      return NextResponse.json({ error: "Job description is required" }, { status: 400 });
    }

    // Get model config for JD matching (defaults to OpenAI)
    let modelConfig;
    try {
      modelConfig = getEffectiveModelConfig("jd_match");
    } catch (err) {
      return NextResponse.json({ 
        error: err instanceof Error ? err.message : "AI service not configured" 
      }, { status: 500 });
    }

    const cvText = cv.rawText || formatCVText(cv);
    const filename = cv.originalFilename || "cv.pdf";
    
    console.log(`[v2.3] JD Match starting for: ${filename}, mode: ${outputMode}, audience: ${audience}, provider: ${modelConfig.provider}`);
    
    const result = await analyzeCV(cvText, {
      jdContent: jobDescription,
      outputMode,
      audience,
      provider: modelConfig.provider,
      model: modelConfig.model,
      temperature: modelConfig.temperature,
    });
    
    const rawCompat = result.data && "scores" in result.data ? result.data.scores.rawCompatibility : "N/A";
    console.log(`[v2.3] JD Match complete, raw compatibility: ${rawCompat}`);

    return NextResponse.json(result);
  } catch (error) {
    console.error("[v2.3] JD Match error:", error);
    return NextResponse.json(
      { 
        success: false,
        error: error instanceof Error ? error.message : "Failed to match JD" 
      },
      { status: 500 }
    );
  }
}
