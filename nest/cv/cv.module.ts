import { Module } from "@nestjs/common";
import { CvController } from "./cv.controller";
import { CvService } from "./cv.service";
import { ParseService } from "./parse.service";

@Module({
  controllers: [CvController],
  providers: [CvService, ParseService],
  exports: [CvService, ParseService],
})
export class CvModule {}
