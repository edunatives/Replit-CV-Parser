import { Injectable } from "@nestjs/common";
import { GoogleGenAI } from "@google/genai";
import OpenAI from "openai";

export type ProviderType = "gemini" | "openai";

export interface LLMConfig {
  provider?: ProviderType;
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

const DEFAULT_MODELS: Record<ProviderType, string> = {
  gemini: "gemini-2.5-flash",
  openai: "gpt-4o",
};

@Injectable()
export class LangchainService {
  private geminiClient: GoogleGenAI | null = null;
  private openaiClient: OpenAI | null = null;

  constructor() {
    const googleKey = process.env.GOOGLE_API_KEY || process.env.AI_INTEGRATIONS_GEMINI_API_KEY;
    const geminiBaseUrl = process.env.AI_INTEGRATIONS_GEMINI_BASE_URL;
    
    if (googleKey) {
      if (process.env.GOOGLE_API_KEY) {
        this.geminiClient = new GoogleGenAI({ apiKey: googleKey });
      } else {
        this.geminiClient = new GoogleGenAI({
          apiKey: googleKey,
          httpOptions: { apiVersion: "", baseUrl: geminiBaseUrl || undefined },
        });
      }
    }

    const openaiKey = process.env.AI_INTEGRATIONS_OPENAI_API_KEY;
    const openaiBaseUrl = process.env.AI_INTEGRATIONS_OPENAI_BASE_URL;
    
    if (openaiKey) {
      this.openaiClient = new OpenAI({
        apiKey: openaiKey,
        baseURL: openaiBaseUrl,
      });
    }
  }

  getAvailableProviders(): ProviderType[] {
    const available: ProviderType[] = [];
    if (this.geminiClient) available.push("gemini");
    if (this.openaiClient) available.push("openai");
    return available;
  }

  async generate(
    systemPrompt: string,
    userPrompt: string,
    config: LLMConfig = {}
  ): Promise<LLMResponse> {
    const provider = config.provider || (this.openaiClient ? "openai" : "gemini");
    const model = config.model || DEFAULT_MODELS[provider];
    const temperature = config.temperature ?? 0.2;
    const maxOutputTokens = config.maxOutputTokens ?? 8192;

    if (provider === "openai" && this.openaiClient) {
      return this.generateOpenAI(systemPrompt, userPrompt, model, temperature, maxOutputTokens);
    } else if (provider === "gemini" && this.geminiClient) {
      return this.generateGemini(systemPrompt, userPrompt, model, temperature, maxOutputTokens);
    }

    throw new Error("No AI provider available");
  }

  private async generateGemini(
    systemPrompt: string,
    userPrompt: string,
    model: string,
    temperature: number,
    maxOutputTokens: number
  ): Promise<LLMResponse> {
    if (!this.geminiClient) throw new Error("Gemini not configured");

    const response = await this.geminiClient.models.generateContent({
      model,
      contents: [
        { role: "user", parts: [{ text: `${systemPrompt}\n\n${userPrompt}` }] }
      ],
      config: {
        maxOutputTokens,
        temperature,
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

  private async generateOpenAI(
    systemPrompt: string,
    userPrompt: string,
    model: string,
    temperature: number,
    maxOutputTokens: number
  ): Promise<LLMResponse> {
    if (!this.openaiClient) throw new Error("OpenAI not configured");

    const response = await this.openaiClient.chat.completions.create({
      model,
      messages: [
        { role: "system", content: systemPrompt },
        { role: "user", content: userPrompt },
      ],
      max_tokens: maxOutputTokens,
      temperature,
    });

    return {
      text: response.choices[0]?.message?.content?.trim() || "",
      usage: {
        inputTokens: response.usage?.prompt_tokens || 0,
        outputTokens: response.usage?.completion_tokens || 0,
      },
    };
  }
}
