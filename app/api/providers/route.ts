/**
 * @fileoverview Get available LLM providers - Proxy to NestJS Backend
 * @endpoint GET /api/providers
 * @returns {Object} { providers: [...], default: "..." }
 */

import { NextResponse } from "next/server";

const NEST_API_URL = process.env.NEST_API_URL || "http://localhost:3001";

export async function GET() {
  try {
    const response = await fetch(`${NEST_API_URL}/api/assess/providers`);
    const data = await response.json();

    if (!response.ok) {
      return NextResponse.json({ error: "Failed to get providers" }, { status: 500 });
    }

    return NextResponse.json({
      providers: data.available || [],
      default: data.default,
      models: {
        gemini: ["gemini-2.5-flash", "gemini-2.0-flash", "gemini-1.5-pro"],
        openai: ["gpt-4o", "gpt-4o-mini", "gpt-5", "gpt-5-mini"],
      },
    });
  } catch (error) {
    console.error("[Proxy] Providers error:", error);
    return NextResponse.json({ 
      providers: [],
      default: null,
      error: "Failed to get providers" 
    }, { status: 500 });
  }
}
