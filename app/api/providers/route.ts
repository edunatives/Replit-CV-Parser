/**
 * @fileoverview Get available LLM providers
 * @endpoint GET /api/providers
 * @returns {Object} { providers: ["gemini", "openai"], default: "gemini" }
 */

import { NextResponse } from "next/server";
import { getAvailableProviders } from "@/lib/langchain/v23-cv-intelligence-chain";

export async function GET() {
  const providers = getAvailableProviders();
  const defaultProvider = providers.includes("gemini") ? "gemini" : providers[0] || null;
  
  return NextResponse.json({
    providers,
    default: defaultProvider,
    models: {
      gemini: ["gemini-2.5-flash", "gemini-2.0-flash", "gemini-1.5-pro"],
      openai: ["gpt-4o", "gpt-4o-mini", "gpt-5", "gpt-5-mini"],
    },
  });
}
