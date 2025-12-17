import { Injectable } from "@nestjs/common";
import { ChatGoogleGenerativeAI } from "@langchain/google-genai";
import { ChatOpenAI } from "@langchain/openai";
import { ChatPromptTemplate, SystemMessagePromptTemplate, HumanMessagePromptTemplate } from "@langchain/core/prompts";
import { StringOutputParser } from "@langchain/core/output_parsers";
import { RunnableSequence } from "@langchain/core/runnables";
import { BaseChatModel } from "@langchain/core/language_models/chat_models";
import { HumanMessage, AIMessage, SystemMessage, BaseMessage } from "@langchain/core/messages";

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

const MAX_RETRIES = 2;
const RETRY_DELAY_MS = 1000;

@Injectable()
export class LangchainService {
  private geminiAvailable: boolean;
  private openaiAvailable: boolean;
  private geminiApiKey: string | undefined;
  private geminiBaseUrl: string | undefined;
  private openaiApiKey: string | undefined;
  private openaiBaseUrl: string | undefined;

  constructor() {
    this.geminiApiKey = process.env.GOOGLE_API_KEY || process.env.AI_INTEGRATIONS_GEMINI_API_KEY;
    this.geminiBaseUrl = process.env.AI_INTEGRATIONS_GEMINI_BASE_URL;
    this.geminiAvailable = !!this.geminiApiKey;

    this.openaiApiKey = process.env.AI_INTEGRATIONS_OPENAI_API_KEY;
    this.openaiBaseUrl = process.env.AI_INTEGRATIONS_OPENAI_BASE_URL;
    this.openaiAvailable = !!this.openaiApiKey;

    console.log(`[LangchainService] Initialized - OpenAI: ${this.openaiAvailable}, Gemini: ${this.geminiAvailable}`);
  }

  getAvailableProviders(): ProviderType[] {
    const available: ProviderType[] = [];
    if (this.geminiAvailable) available.push("gemini");
    if (this.openaiAvailable) available.push("openai");
    return available;
  }

  private createGeminiModel(model: string, temperature: number, maxOutputTokens: number): ChatGoogleGenerativeAI {
    if (!this.geminiApiKey) throw new Error("Gemini not configured");

    const useProxy = this.geminiBaseUrl && !process.env.GOOGLE_API_KEY;

    return new ChatGoogleGenerativeAI({
      apiKey: this.geminiApiKey,
      model,
      temperature,
      maxOutputTokens,
      ...(useProxy && { 
        clientOptions: { 
          apiEndpoint: this.geminiBaseUrl 
        } 
      }),
    });
  }

  private createOpenAIModel(model: string, temperature: number, maxOutputTokens: number): ChatOpenAI {
    if (!this.openaiApiKey) throw new Error("OpenAI not configured");

    return new ChatOpenAI({
      apiKey: this.openaiApiKey,
      model,
      temperature,
      maxTokens: maxOutputTokens,
      configuration: this.openaiBaseUrl ? { baseURL: this.openaiBaseUrl } : undefined,
    });
  }

  private getModel(config: LLMConfig = {}): { model: BaseChatModel; provider: ProviderType } {
    const provider = config.provider || (this.openaiAvailable ? "openai" : "gemini");
    const modelName = config.model || DEFAULT_MODELS[provider];
    const temperature = config.temperature ?? 0.2;
    const maxOutputTokens = config.maxOutputTokens ?? 8192;

    if (provider === "openai" && this.openaiAvailable) {
      return { model: this.createOpenAIModel(modelName, temperature, maxOutputTokens), provider: "openai" };
    } else if (provider === "gemini" && this.geminiAvailable) {
      return { model: this.createGeminiModel(modelName, temperature, maxOutputTokens), provider: "gemini" };
    }

    throw new Error("No AI provider available");
  }

  private async delay(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  private isRetryableError(error: unknown): boolean {
    if (error instanceof Error) {
      const message = error.message.toLowerCase();
      return (
        message.includes("timeout") ||
        message.includes("rate limit") ||
        message.includes("429") ||
        message.includes("503") ||
        message.includes("502") ||
        message.includes("500") ||
        message.includes("econnreset") ||
        message.includes("socket hang up") ||
        message.includes("network")
      );
    }
    return false;
  }

  async generate(
    systemPrompt: string,
    userPrompt: string,
    config: LLMConfig = {}
  ): Promise<LLMResponse> {
    let lastError: Error | null = null;
    
    for (let attempt = 0; attempt <= MAX_RETRIES; attempt++) {
      try {
        const { model, provider } = this.getModel(config);
        console.log(`[LangchainService] Generate attempt ${attempt + 1}/${MAX_RETRIES + 1} using ${provider}`);

        const prompt = ChatPromptTemplate.fromMessages([
          SystemMessagePromptTemplate.fromTemplate("{system}"),
          HumanMessagePromptTemplate.fromTemplate("{user}"),
        ]);

        const chain = RunnableSequence.from([
          prompt,
          model,
          new StringOutputParser(),
        ]);

        const result = await chain.invoke({
          system: systemPrompt,
          user: userPrompt,
        });

        console.log(`[LangchainService] Generate succeeded on attempt ${attempt + 1}`);
        
        return {
          text: result.trim(),
          usage: {
            inputTokens: 0,
            outputTokens: 0,
          },
        };
      } catch (error) {
        lastError = error instanceof Error ? error : new Error(String(error));
        console.error(`[LangchainService] Generate attempt ${attempt + 1} failed:`, lastError.message);

        if (attempt < MAX_RETRIES && this.isRetryableError(error)) {
          console.log(`[LangchainService] Retrying in ${RETRY_DELAY_MS}ms...`);
          await this.delay(RETRY_DELAY_MS * (attempt + 1));
        } else if (attempt < MAX_RETRIES) {
          await this.delay(RETRY_DELAY_MS);
        }
      }
    }

    throw lastError || new Error("Generate failed after all retries");
  }

  async generateWithMessages(
    messages: Array<{ role: "system" | "user" | "assistant"; content: string }>,
    config: LLMConfig = {}
  ): Promise<LLMResponse> {
    let lastError: Error | null = null;

    for (let attempt = 0; attempt <= MAX_RETRIES; attempt++) {
      try {
        const { model, provider } = this.getModel(config);
        console.log(`[LangchainService] GenerateWithMessages attempt ${attempt + 1}/${MAX_RETRIES + 1} using ${provider}`);

        const langchainMessages: BaseMessage[] = messages.map((msg) => {
          if (msg.role === "system") {
            return new SystemMessage(msg.content);
          } else if (msg.role === "user") {
            return new HumanMessage(msg.content);
          } else {
            return new AIMessage(msg.content);
          }
        });

        const chain = RunnableSequence.from([
          model,
          new StringOutputParser(),
        ]);

        const result = await chain.invoke(langchainMessages);

        console.log(`[LangchainService] GenerateWithMessages succeeded on attempt ${attempt + 1}`);

        return {
          text: result.trim(),
          usage: {
            inputTokens: 0,
            outputTokens: 0,
          },
        };
      } catch (error) {
        lastError = error instanceof Error ? error : new Error(String(error));
        console.error(`[LangchainService] GenerateWithMessages attempt ${attempt + 1} failed:`, lastError.message);

        if (attempt < MAX_RETRIES && this.isRetryableError(error)) {
          console.log(`[LangchainService] Retrying in ${RETRY_DELAY_MS}ms...`);
          await this.delay(RETRY_DELAY_MS * (attempt + 1));
        } else if (attempt < MAX_RETRIES) {
          await this.delay(RETRY_DELAY_MS);
        }
      }
    }

    throw lastError || new Error("GenerateWithMessages failed after all retries");
  }
}
