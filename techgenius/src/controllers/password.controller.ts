import { Controller, Post, Body } from '@nestjs/common';
import { PasswordService } from '../services/password.service';

@Controller('auth') // Prefix for routes, e.g., /auth/reset-password
export class PasswordController {
  constructor(private readonly passwordService: PasswordService) {}

  @Post('reset-password')
  async resetPassword(@Body() data: { password_reset_token: string, new_password: string }) {
    return this.passwordService.resetPassword(data);
  }

  @Post('generate-reset-token')
  async generateResetToken(@Body() data: { email: string }) {
    return this.passwordService.generatePasswordResetToken(data);
  }
}
