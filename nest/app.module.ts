import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { CvModule } from "./cv/cv.module";
import { DatabaseModule } from "./database/database.module";
import { AssessmentModule } from "./assessment/assessment.module";

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    DatabaseModule,
    CvModule,
    AssessmentModule,
  ],
})
export class AppModule {}
