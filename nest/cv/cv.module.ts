import { Module } from "@nestjs/common";
import { CvController } from "./cv.controller";
import { CvService } from "./cv.service";
import { ParseService } from "./parse.service";
import { OpenAIService } from "./openai.service";
import { AssessmentModule } from "../assessment/assessment.module";

@Module({
  imports: [AssessmentModule],
  controllers: [CvController],
  providers: [CvService, ParseService, OpenAIService],
  exports: [CvService, ParseService, OpenAIService],
})
export class CvModule {}
