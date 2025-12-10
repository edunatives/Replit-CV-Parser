import "reflect-metadata";
import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { ValidationPipe } from "@nestjs/common";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  app.setGlobalPrefix("api");
  
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      whitelist: true,
      forbidNonWhitelisted: true,
    })
  );
  
  app.enableCors({
    origin: true,
    credentials: true,
  });
  
  const port = process.env.NEST_PORT || 3001;
  await app.listen(port, "0.0.0.0");
  console.log(`NestJS backend running on http://0.0.0.0:${port}`);
}

bootstrap().catch(console.error);
