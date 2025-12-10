/**
 * @fileoverview AI Career Advisor Chat API
 * @description Conversational AI endpoint for personalized CV improvement advice.
 * Uses Gemini 2.5 Flash with conversation history for contextual responses.
 * Maintains up to 10 messages of history for context continuity.
 * 
 * @endpoint POST /api/advisor
 * @accepts application/json with { cv: ParsedCV, message: string, history?: ChatMessage[] }
 * @returns {Object} { response: string, tokenUsage: TokenUsage }
 */

import { NextRequest, NextResponse } from "next/server";
import { GoogleGenAI } from "@google/genai";
import type { ParsedCV } from "@/types/cv";

/**
 * Chat message structure for conversation history
 * @typedef {Object} ChatMessage
 * @property {"user" | "assistant"} role - Message sender role
 * @property {string} content - Message content
 */
interface ChatMessage {
  role: "user" | "assistant";
  content: string;
}

/**
 * Handle career advisor chat message and generate personalized response
 * 
 * @param {NextRequest} request - Request with CV, message, and optional history
 * @returns {Promise<NextResponse>} JSON response with AI-generated advice
 * 
 * @example
 * // Request
 * {
 *   cv: { name: "John", title: "Engineer", ... },
 *   message: "How can I improve my summary section?",
 *   history: [
 *     { role: "user", content: "Hello" },
 *     { role: "assistant", content: "Hi! How can I help with your CV?" }
 *   ]
 * }
 * 
 * // Response
 * {
 *   response: "Looking at your current summary, I'd suggest focusing on your key achievements...",
 *   tokenUsage: { promptTokens: 800, completionTokens: 300, totalTokens: 1100 }
 * }
 * 
 * @throws {400} CV or message not provided
 * @throws {500} AI service not configured
 * @throws {500} Response generation failed
 */
export async function POST(request: NextRequest) {
  try {
    const body = await request.json() as {
      cv: ParsedCV;
      message: string;
      history?: ChatMessage[];
    };
    
    const { cv, message, history = [] } = body;

    if (!cv || !message) {
      return NextResponse.json({ error: "CV and message are required" }, { status: 400 });
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

    const cvContext = `
CANDIDATE'S CV INFORMATION:
Name: ${cv.name || "Not provided"}
Title: ${cv.title || "Not provided"}
Summary: ${cv.summary || "Not provided"}

Experience:
${cv.experience?.map(exp => `- ${exp.role} at ${exp.company} (${exp.duration}): ${exp.description}`).join("\n") || "None listed"}

Education:
${cv.education?.map(edu => `- ${edu.degree} from ${edu.institution} (${edu.year})`).join("\n") || "None listed"}

Skills: ${cv.skills?.join(", ") || "None listed"}

Certifications:
${cv.certifications?.map(cert => `- ${cert.name} by ${cert.issuer}`).join("\n") || "None listed"}
`;

    const conversationHistory = history
      ?.slice(-10)
      .map(msg => `${msg.role === "user" ? "User" : "Advisor"}: ${msg.content}`)
      .join("\n\n") || "";

    const systemPrompt = `You are an expert career advisor and CV consultant helping a job seeker improve their resume. You have access to their CV information and should provide personalized, actionable advice.

${cvContext}

PREVIOUS CONVERSATION:
${conversationHistory}

GUIDELINES:
- Be friendly, encouraging, and professional
- Provide specific, actionable advice based on their actual CV content
- Reference specific sections of their CV when giving feedback
- Consider industry best practices and ATS optimization
- Keep responses concise but helpful (2-3 paragraphs max)
- If asked about something not in the CV, suggest they add it
- Focus on practical improvements they can make immediately

USER'S QUESTION: ${message}

Provide a helpful response:`;

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: systemPrompt,
    });

    const responseText = response.text?.trim() || "I apologize, but I couldn't generate a response. Please try again.";

    const tokenUsage = {
      promptTokens: response.usageMetadata?.promptTokenCount || 0,
      completionTokens: response.usageMetadata?.candidatesTokenCount || 0,
      totalTokens: response.usageMetadata?.totalTokenCount || 0,
    };

    return NextResponse.json({
      response: responseText,
      tokenUsage,
    });
  } catch (error) {
    console.error("AI Advisor error:", error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Failed to get advice" },
      { status: 500 }
    );
  }
}
