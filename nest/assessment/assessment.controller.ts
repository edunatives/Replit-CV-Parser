import {
  Controller,
  Post,
  Get,
  Body,
  BadRequestException,
  Inject,
} from "@nestjs/common";
import { AssessmentService } from "./assessment.service";
import type { ParsedCV } from "../../types/cv";

interface AssessRequest {
  cv: ParsedCV;
  version?: "2.3" | "2.4";
  outputMode?: "LITE" | "STANDARD" | "FULL";
  audience?: "STUDENT" | "HR";
  provider?: "gemini" | "openai";
  model?: string;
  jd?: string;
  includeFullRewrite?: boolean;
}

interface JdMatchRequest {
  cv: ParsedCV;
  jd: string;
  outputMode?: "LITE" | "STANDARD" | "FULL";
  audience?: "STUDENT" | "HR";
  provider?: "gemini" | "openai";
  model?: string;
}

@Controller("assess")
export class AssessmentController {
  constructor(
    @Inject(AssessmentService) private readonly assessmentService: AssessmentService
  ) {}

  @Get("providers")
  getProviders() {
    const providers = this.assessmentService.getAvailableProviders();
    return {
      available: providers,
      default: providers.includes("openai") ? "openai" : providers[0] || null,
    };
  }

  @Post("langchain")
  async assessCV(@Body() body: AssessRequest) {
    if (!body.cv) {
      throw new BadRequestException("CV data is required");
    }

    const result = await this.assessmentService.assessCV(body.cv, {
      version: body.version || "2.3",
      outputMode: body.outputMode || "STANDARD",
      audience: body.audience || "STUDENT",
      provider: body.provider,
      model: body.model,
      jd: body.jd,
      includeFullRewrite: body.includeFullRewrite ?? (body.outputMode === "FULL"),
    });

    return result;
  }

  @Post("jd-match")
  async matchJD(@Body() body: JdMatchRequest) {
    if (!body.cv) {
      throw new BadRequestException("CV data is required");
    }
    if (!body.jd) {
      throw new BadRequestException("Job description is required");
    }

    const result = await this.assessmentService.assessCV(body.cv, {
      outputMode: body.outputMode || "STANDARD",
      audience: body.audience || "STUDENT",
      provider: body.provider,
      model: body.model,
      jd: body.jd,
    });

    return result;
  }
}
