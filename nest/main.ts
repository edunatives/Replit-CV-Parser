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
  await app.listen(port);
  console.log(`NestJS backend running on port ${port}`);
}

bootstrap();
