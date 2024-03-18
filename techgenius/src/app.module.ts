import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PasswordController } from './controllers/password.controller';
import { PasswordService } from './services/password.service'; // Import PasswordService
import { PrismaService } from './prisma/prisma.service';


@Module({
  imports: [],
  controllers: [AppController, PasswordController],
  providers: [AppService, PasswordService, PrismaService],
})
export class AppModule {}


