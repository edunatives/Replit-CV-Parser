import { Module } from "@nestjs/common";
import { CvController } from "./cv.controller";
import { CvService } from "./cv.service";
import { ParseService } from "./parse.service";
import { OpenAIService } from "./openai.service";
import { LangchainService } from "../assessment/langchain.service";

@Module({
  controllers: [CvController],
  providers: [CvService, ParseService, OpenAIService, LangchainService],
  exports: [CvService, ParseService, OpenAIService],
})
export class CvModule {}
