/**
 * LLM Provider Abstraction Layer
 * Allows switching between different LLM providers (Gemini, OpenAI, etc.)
 * 
 * @version 1.0.0
 */

import { GoogleGenAI } from "@google/genai";
import OpenAI from "openai";

export type ProviderType = "gemini" | "openai";

export interface LLMConfig {
  provider: ProviderType;
  model?: string;
  temperature?: number;
  maxOutputTokens?: number;
}

export interface LLMResponse {
  text: string;
  usage: {
    inputTokens: number;
    outputTokens: number;
  };
}

export interface LLMProvider {
  readonly name: ProviderType;
  readonly model: string;
  generate(systemPrompt: string, userPrompt: string): Promise<LLMResponse>;
}

const DEFAULT_MODELS: Record<ProviderType, string> = {
  gemini: "gemini-2.5-flash",
  openai: "gpt-4o",
};

export class GeminiProvider implements LLMProvider {
  readonly name: ProviderType = "gemini";
  readonly model: string;
  private ai: GoogleGenAI;
  private temperature: number;
  private maxOutputTokens: number;

  constructor(config: Partial<LLMConfig> = {}) {
    this.model = config.model || DEFAULT_MODELS.gemini;
    this.temperature = config.temperature ?? 0.2;
    this.maxOutputTokens = config.maxOutputTokens ?? 16000;

    const userKey = process.env.GOOGLE_API_KEY;
    const replitKey = process.env.AI_INTEGRATIONS_GEMINI_API_KEY;
    const baseUrl = process.env.AI_INTEGRATIONS_GEMINI_BASE_URL;

    if (userKey) {
      this.ai = new GoogleGenAI({ apiKey: userKey });
    } else if (replitKey) {
      this.ai = new GoogleGenAI({
        apiKey: replitKey,
        httpOptions: { apiVersion: "", baseUrl: baseUrl || undefined },
      });
    } else {
      throw new Error("No Gemini API key configured (GOOGLE_API_KEY or AI_INTEGRATIONS_GEMINI_API_KEY)");
    }
  }

  async generate(systemPrompt: string, userPrompt: string): Promise<LLMResponse> {
    const response = await this.ai.models.generateContent({
      model: this.model,
      contents: [
        { role: "user", parts: [{ text: `${systemPrompt}\n\n${userPrompt}` }] }
      ],
      config: {
        maxOutputTokens: this.maxOutputTokens,
        temperature: this.temperature,
      },
    });

    return {
      text: response.text?.trim() || "",
      usage: {
        inputTokens: response.usageMetadata?.promptTokenCount || 0,
        outputTokens: response.usageMetadata?.candidatesTokenCount || 0,
      },
    };
  }
}

export class OpenAIProvider implements LLMProvider {
  readonly name: ProviderType = "openai";
  readonly model: string;
  private client: OpenAI;
  private temperature: number;
  private maxOutputTokens: number;

  constructor(config: Partial<LLMConfig> = {}) {
    this.model = config.model || DEFAULT_MODELS.openai;
    this.temperature = config.temperature ?? 0.2;
    this.maxOutputTokens = config.maxOutputTokens ?? 8192;

    const apiKey = process.env.AI_INTEGRATIONS_OPENAI_API_KEY;
    const baseURL = process.env.AI_INTEGRATIONS_OPENAI_BASE_URL;

    if (!apiKey) {
      throw new Error("No OpenAI API key configured (AI_INTEGRATIONS_OPENAI_API_KEY)");
    }

    this.client = new OpenAI({
      apiKey,
      baseURL,
    });
  }

  async generate(systemPrompt: string, userPrompt: string): Promise<LLMResponse> {
    const isGpt5OrNewer = this.model.startsWith("gpt-5") || this.model.startsWith("o3") || this.model.startsWith("o4");
    
    const requestParams: OpenAI.Chat.ChatCompletionCreateParams = {
      model: this.model,
      messages: [
        { role: "system", content: systemPrompt },
        { role: "user", content: userPrompt },
      ],
    };

    if (isGpt5OrNewer) {
      requestParams.max_completion_tokens = this.maxOutputTokens;
    } else {
      requestParams.max_tokens = this.maxOutputTokens;
      requestParams.temperature = this.temperature;
    }

    const response = await this.client.chat.completions.create(requestParams);

    const text = response.choices[0]?.message?.content?.trim() || "";
    
    return {
      text,
      usage: {
        inputTokens: response.usage?.prompt_tokens || 0,
        outputTokens: response.usage?.completion_tokens || 0,
      },
    };
  }
}

export function createProvider(config: Partial<LLMConfig> = {}): LLMProvider {
  const provider = config.provider || "gemini";
  
  switch (provider) {
    case "openai":
      return new OpenAIProvider(config);
    case "gemini":
    default:
      return new GeminiProvider(config);
  }
}

export function getAvailableProviders(): ProviderType[] {
  const available: ProviderType[] = [];
  
  if (process.env.GOOGLE_API_KEY || process.env.AI_INTEGRATIONS_GEMINI_API_KEY) {
    available.push("gemini");
  }
  
  if (process.env.AI_INTEGRATIONS_OPENAI_API_KEY) {
    available.push("openai");
  }
  
  return available;
}
