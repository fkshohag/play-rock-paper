import { NestFactory } from '@nestjs/core';
import { loadConfig } from './envPath'
loadConfig()
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api/v1')
  app.useGlobalPipes(new ValidationPipe());
  app.enableCors({
    origin: true
  })
  await app.listen(3001);
}
bootstrap();
