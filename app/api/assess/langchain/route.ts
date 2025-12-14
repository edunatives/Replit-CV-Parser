/**
 * @fileoverview CV Assessment API - Proxy to NestJS Backend
 * @description Forwards requests to NestJS backend on port 3001
 * 
 * @endpoint POST /api/assess/langchain
 * @accepts application/json with { cv: ParsedCV, version?, outputMode?, audience?, provider?, model?, includeFullRewrite? }
 * @returns {Object} AnalysisResponse from NestJS backend
 */

import { NextRequest, NextResponse } from "next/server";

const NEST_API_URL = process.env.NEST_API_URL || "http://localhost:3001";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const response = await fetch(`${NEST_API_URL}/api/assess/langchain`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    const data = await response.json();

    if (!response.ok) {
      return NextResponse.json(
        { success: false, error: data.message || data.error || "Assessment failed" },
        { status: response.status }
      );
    }

    return NextResponse.json(data);
  } catch (error) {
    console.error("[Proxy] CV Assessment error:", error);
    return NextResponse.json(
      { 
        success: false,
        error: error instanceof Error ? error.message : "Failed to assess CV" 
      },
      { status: 500 }
    );
  }
}
