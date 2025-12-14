/**
 * @fileoverview JD Match API - Proxy to NestJS Backend
 * @description Forwards requests to NestJS backend on port 3001
 * 
 * @endpoint POST /api/jd-match/langchain
 * @accepts application/json with { cv: ParsedCV, jobDescription: string, outputMode?, audience? }
 * @returns {Object} AnalysisResponse from NestJS backend
 */

import { NextRequest, NextResponse } from "next/server";

const NEST_API_URL = process.env.NEST_API_URL || "http://localhost:3001";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Transform jobDescription to jd for NestJS endpoint
    const nestBody = {
      cv: body.cv,
      jd: body.jobDescription,
      outputMode: body.outputMode,
      audience: body.audience,
      provider: body.provider,
      model: body.model,
    };

    const response = await fetch(`${NEST_API_URL}/api/assess/jd-match`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(nestBody),
    });

    const data = await response.json();

    if (!response.ok) {
      return NextResponse.json(
        { success: false, error: data.message || data.error || "JD match failed" },
        { status: response.status }
      );
    }

    return NextResponse.json(data);
  } catch (error) {
    console.error("[Proxy] JD Match error:", error);
    return NextResponse.json(
      { 
        success: false,
        error: error instanceof Error ? error.message : "Failed to match JD" 
      },
      { status: 500 }
    );
  }
}
