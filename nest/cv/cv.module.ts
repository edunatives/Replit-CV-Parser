import { Module } from "@nestjs/common";
import { CvController } from "./cv.controller";
import { CvService } from "./cv.service";
import { ParseService } from "./parse.service";
import { OpenAIService } from "./openai.service";

@Module({
  controllers: [CvController],
  providers: [CvService, ParseService, OpenAIService],
  exports: [CvService, ParseService, OpenAIService],
})
export class CvModule {}
