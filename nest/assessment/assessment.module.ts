import { Module } from "@nestjs/common";
import { AssessmentController } from "./assessment.controller";
import { AssessmentService } from "./assessment.service";
import { LangchainService } from "./langchain.service";

@Module({
  controllers: [AssessmentController],
  providers: [AssessmentService, LangchainService],
  exports: [AssessmentService, LangchainService],
})
export class AssessmentModule {}
