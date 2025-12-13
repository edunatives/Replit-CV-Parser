import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { CvModule } from "./cv/cv.module";
import { DatabaseModule } from "./database/database.module";

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    DatabaseModule,
    CvModule,
  ],
})
export class AppModule {}
