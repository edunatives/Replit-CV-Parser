import { Injectable } from "@nestjs/common";
import { ChatGoogleGenerativeAI } from "@langchain/google-genai";
import { ChatOpenAI } from "@langchain/openai";
import { ChatPromptTemplate, SystemMessagePromptTemplate, HumanMessagePromptTemplate } from "@langchain/core/prompts";
import { StringOutputParser } from "@langchain/core/output_parsers";
import { RunnableSequence } from "@langchain/core/runnables";
import { BaseChatModel } from "@langchain/core/language_models/chat_models";
import { HumanMessage, AIMessage, SystemMessage, BaseMessage } from "@langchain/core/messages";
import * as fs from "fs";
import * as path from "path";

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

interface LogEntry {
  timestamp: string;
  requestId: string;
  type: "request" | "response" | "error" | "retry";
  provider: ProviderType;
  model: string;
  attempt?: number;
  maxAttempts?: number;
  durationMs?: number;
  promptLength?: number;
  responseLength?: number;
  temperature?: number;
  maxOutputTokens?: number;
  success?: boolean;
  error?: string;
  parseSuccess?: boolean;
}

const DEFAULT_MODELS: Record<ProviderType, string> = {
  gemini: "gemini-2.5-flash",
  openai: "gpt-4o",
};

const MAX_RETRIES = 2;
const RETRY_DELAY_MS = 1000;
const LOG_DIR = "/tmp/ai-logs";

@Injectable()
export class LangchainService {
  private geminiAvailable: boolean;
  private openaiAvailable: boolean;
  private geminiApiKey: string | undefined;
  private geminiBaseUrl: string | undefined;
  private openaiApiKey: string | undefined;
  private openaiBaseUrl: string | undefined;
  private requestCounter = 0;

  constructor() {
    this.geminiApiKey = process.env.GOOGLE_API_KEY || process.env.AI_INTEGRATIONS_GEMINI_API_KEY;
    this.geminiBaseUrl = process.env.AI_INTEGRATIONS_GEMINI_BASE_URL;
    this.geminiAvailable = !!this.geminiApiKey;

    this.openaiApiKey = process.env.AI_INTEGRATIONS_OPENAI_API_KEY;
    this.openaiBaseUrl = process.env.AI_INTEGRATIONS_OPENAI_BASE_URL;
    this.openaiAvailable = !!this.openaiApiKey;

    this.ensureLogDir();
    this.log({
      timestamp: new Date().toISOString(),
      requestId: "INIT",
      type: "request",
      provider: "openai",
      model: "N/A",
      success: true,
    }, `Service initialized - OpenAI: ${this.openaiAvailable}, Gemini: ${this.geminiAvailable}`);

    console.log(`[LangchainService] Initialized - OpenAI: ${this.openaiAvailable}, Gemini: ${this.geminiAvailable}`);
    console.log(`[LangchainService] Logs saved to: ${LOG_DIR}`);
  }

  private ensureLogDir(): void {
    try {
      if (!fs.existsSync(LOG_DIR)) {
        fs.mkdirSync(LOG_DIR, { recursive: true });
      }
    } catch (err) {
      console.error("[LangchainService] Failed to create log directory:", err);
    }
  }

  private getLogFilePath(): string {
    const date = new Date().toISOString().split("T")[0];
    return path.join(LOG_DIR, `ai-provider-${date}.log`);
  }

  private log(entry: LogEntry, message?: string): void {
    const logLine = JSON.stringify({ ...entry, message }) + "\n";
    const consoleMsg = `[LangchainService] [${entry.requestId}] ${message || entry.type}`;
    
    console.log(consoleMsg);
    
    try {
      fs.appendFileSync(this.getLogFilePath(), logLine);
    } catch (err) {
      console.error("[LangchainService] Failed to write log:", err);
    }
  }

  private generateRequestId(): string {
    this.requestCounter++;
    return `REQ-${Date.now()}-${this.requestCounter}`;
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

  private getModel(config: LLMConfig = {}): { model: BaseChatModel; provider: ProviderType; modelName: string } {
    const provider = config.provider || (this.openaiAvailable ? "openai" : "gemini");
    const modelName = config.model || DEFAULT_MODELS[provider];
    const temperature = config.temperature ?? 0.2;
    const maxOutputTokens = config.maxOutputTokens ?? 8192;

    if (provider === "openai" && this.openaiAvailable) {
      return { model: this.createOpenAIModel(modelName, temperature, maxOutputTokens), provider: "openai", modelName };
    } else if (provider === "gemini" && this.geminiAvailable) {
      return { model: this.createGeminiModel(modelName, temperature, maxOutputTokens), provider: "gemini", modelName };
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
    const requestId = this.generateRequestId();
    const startTime = Date.now();
    let lastError: Error | null = null;
    
    const temperature = config.temperature ?? 0.2;
    const maxOutputTokens = config.maxOutputTokens ?? 8192;
    const promptLength = systemPrompt.length + userPrompt.length;

    for (let attempt = 0; attempt <= MAX_RETRIES; attempt++) {
      const attemptStartTime = Date.now();
      
      try {
        const { model, provider, modelName } = this.getModel(config);
        
        this.log({
          timestamp: new Date().toISOString(),
          requestId,
          type: "request",
          provider,
          model: modelName,
          attempt: attempt + 1,
          maxAttempts: MAX_RETRIES + 1,
          promptLength,
          temperature,
          maxOutputTokens,
        }, `Starting generate - attempt ${attempt + 1}/${MAX_RETRIES + 1}, provider: ${provider}, model: ${modelName}, promptLength: ${promptLength}`);

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

        const durationMs = Date.now() - attemptStartTime;
        const totalDurationMs = Date.now() - startTime;
        const responseLength = result.length;

        this.log({
          timestamp: new Date().toISOString(),
          requestId,
          type: "response",
          provider,
          model: modelName,
          attempt: attempt + 1,
          maxAttempts: MAX_RETRIES + 1,
          durationMs,
          promptLength,
          responseLength,
          success: true,
          parseSuccess: true,
        }, `Generate succeeded - attempt ${attempt + 1}, duration: ${durationMs}ms, total: ${totalDurationMs}ms, responseLength: ${responseLength}`);
        
        return {
          text: result.trim(),
          usage: {
            inputTokens: 0,
            outputTokens: 0,
          },
        };
      } catch (error) {
        lastError = error instanceof Error ? error : new Error(String(error));
        const durationMs = Date.now() - attemptStartTime;
        const { provider, modelName } = this.getModelInfo(config);

        this.log({
          timestamp: new Date().toISOString(),
          requestId,
          type: "error",
          provider,
          model: modelName,
          attempt: attempt + 1,
          maxAttempts: MAX_RETRIES + 1,
          durationMs,
          success: false,
          error: lastError.message,
        }, `Generate failed - attempt ${attempt + 1}, duration: ${durationMs}ms, error: ${lastError.message}`);

        if (attempt < MAX_RETRIES) {
          const isRetryable = this.isRetryableError(error);
          const delayMs = RETRY_DELAY_MS * (attempt + 1);
          
          this.log({
            timestamp: new Date().toISOString(),
            requestId,
            type: "retry",
            provider,
            model: modelName,
            attempt: attempt + 1,
            maxAttempts: MAX_RETRIES + 1,
          }, `Will retry in ${delayMs}ms, isRetryable: ${isRetryable}`);
          
          await this.delay(delayMs);
        }
      }
    }

    const totalDurationMs = Date.now() - startTime;
    const { provider, modelName } = this.getModelInfo(config);
    
    this.log({
      timestamp: new Date().toISOString(),
      requestId,
      type: "error",
      provider,
      model: modelName,
      durationMs: totalDurationMs,
      success: false,
      error: lastError?.message || "All retries exhausted",
    }, `Generate failed after all retries - total duration: ${totalDurationMs}ms`);

    throw lastError || new Error("Generate failed after all retries");
  }

  private getModelInfo(config: LLMConfig = {}): { provider: ProviderType; modelName: string } {
    const provider = config.provider || (this.openaiAvailable ? "openai" : "gemini");
    const modelName = config.model || DEFAULT_MODELS[provider];
    return { provider, modelName };
  }

  async generateWithMessages(
    messages: Array<{ role: "system" | "user" | "assistant"; content: string }>,
    config: LLMConfig = {}
  ): Promise<LLMResponse> {
    const requestId = this.generateRequestId();
    const startTime = Date.now();
    let lastError: Error | null = null;
    
    const temperature = config.temperature ?? 0.2;
    const maxOutputTokens = config.maxOutputTokens ?? 8192;
    const promptLength = messages.reduce((sum, m) => sum + m.content.length, 0);

    for (let attempt = 0; attempt <= MAX_RETRIES; attempt++) {
      const attemptStartTime = Date.now();
      
      try {
        const { model, provider, modelName } = this.getModel(config);
        
        this.log({
          timestamp: new Date().toISOString(),
          requestId,
          type: "request",
          provider,
          model: modelName,
          attempt: attempt + 1,
          maxAttempts: MAX_RETRIES + 1,
          promptLength,
          temperature,
          maxOutputTokens,
        }, `Starting generateWithMessages - attempt ${attempt + 1}/${MAX_RETRIES + 1}, messageCount: ${messages.length}`);

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

        const durationMs = Date.now() - attemptStartTime;
        const totalDurationMs = Date.now() - startTime;
        const responseLength = result.length;

        this.log({
          timestamp: new Date().toISOString(),
          requestId,
          type: "response",
          provider,
          model: modelName,
          attempt: attempt + 1,
          maxAttempts: MAX_RETRIES + 1,
          durationMs,
          promptLength,
          responseLength,
          success: true,
        }, `GenerateWithMessages succeeded - duration: ${durationMs}ms, responseLength: ${responseLength}`);

        return {
          text: result.trim(),
          usage: {
            inputTokens: 0,
            outputTokens: 0,
          },
        };
      } catch (error) {
        lastError = error instanceof Error ? error : new Error(String(error));
        const durationMs = Date.now() - attemptStartTime;
        const { provider, modelName } = this.getModelInfo(config);

        this.log({
          timestamp: new Date().toISOString(),
          requestId,
          type: "error",
          provider,
          model: modelName,
          attempt: attempt + 1,
          maxAttempts: MAX_RETRIES + 1,
          durationMs,
          success: false,
          error: lastError.message,
        }, `GenerateWithMessages failed - attempt ${attempt + 1}, error: ${lastError.message}`);

        if (attempt < MAX_RETRIES) {
          const delayMs = RETRY_DELAY_MS * (attempt + 1);
          await this.delay(delayMs);
        }
      }
    }

    throw lastError || new Error("GenerateWithMessages failed after all retries");
  }
}
