/**
 * Centralized Model Configuration
 * Single source of truth for which model/provider to use for each prompt type
 * 
 * @version 1.0.0
 */

import type { ProviderType } from "./llm-providers";

export type PromptType = 
  | "cv_assessment"
  | "jd_match"
  | "cv_parsing"
  | "advisor";

export interface ModelConfig {
  provider: ProviderType;
  model: string;
  temperature?: number;
  maxOutputTokens?: number;
}

const MODEL_CONFIGS: Record<PromptType, ModelConfig> = {
  cv_assessment: {
    provider: "openai",
    model: "gpt-4o",
    temperature: 0.2,
    maxOutputTokens: 16000,
  },
  jd_match: {
    provider: "openai",
    model: "gpt-4o",
    temperature: 0.2,
    maxOutputTokens: 16000,
  },
  cv_parsing: {
    provider: "openai",
    model: "gpt-4o",
    temperature: 0.1,
    maxOutputTokens: 8000,
  },
  advisor: {
    provider: "openai",
    model: "gpt-4o",
    temperature: 0.7,
    maxOutputTokens: 4000,
  },
};

/**
 * Get the model configuration for a specific prompt type
 * @param promptType The type of prompt/task
 * @returns ModelConfig with provider, model, and settings
 */
export function getModelConfig(promptType: PromptType): ModelConfig {
  return MODEL_CONFIGS[promptType];
}

/**
 * Check if a provider is available based on environment variables
 */
export function isProviderAvailable(provider: ProviderType): boolean {
  if (provider === "openai") {
    return !!process.env.AI_INTEGRATIONS_OPENAI_API_KEY;
  }
  if (provider === "gemini") {
    return !!(process.env.GOOGLE_API_KEY || process.env.AI_INTEGRATIONS_GEMINI_API_KEY);
  }
  return false;
}

/**
 * Get the effective model config, falling back if preferred provider unavailable
 */
export function getEffectiveModelConfig(promptType: PromptType): ModelConfig {
  const config = getModelConfig(promptType);
  
  if (isProviderAvailable(config.provider)) {
    return config;
  }
  
  const fallbackProvider: ProviderType = config.provider === "openai" ? "gemini" : "openai";
  if (isProviderAvailable(fallbackProvider)) {
    console.log(`[model-config] ${config.provider} unavailable, falling back to ${fallbackProvider} for ${promptType}`);
    return {
      ...config,
      provider: fallbackProvider,
      model: fallbackProvider === "openai" ? "gpt-4o" : "gemini-2.5-flash",
    };
  }
  
  throw new Error(`No AI provider available for ${promptType}. Configure AI_INTEGRATIONS_OPENAI_API_KEY or GOOGLE_API_KEY.`);
}
