import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv';



async function bootstrap() {

  dotenv.config();
  const app = await NestFactory.create(AppModule);

  // Enable CORS with custom configuration
  app.enableCors({
    origin: ['http://localhost:3001'], 
    methods: ['GET', 'POST', 'PUT', 'DELETE'], 
    credentials: true,
  });

  await app.listen(3000);
}
bootstrap();
