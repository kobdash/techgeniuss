import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class PasswordService {
  constructor(private db: PrismaService) {}

//to do 1 *********************************************************************************************



  async resetPassword(data: {
    password_reset_token: string;
    new_password: string;
  }) {
    const { password_reset_token, new_password } = data;

    // Check if the user exists and has the correct password reset token
    const user = await this.db.users.findFirst({
      where: {
        password_reset_token,
      },
    });


    // Hash the new password
    const hashedPassword = await bcrypt.hash(new_password, 5);

    // Update the user's password in the database
    await this.db.users.update({
      where: { id: user.id },
      data: {
        password: hashedPassword,
        password_reset_token: null, // Clear the reset token after password reset
      },
    });

    return 'Password reset successfully.';
  }


  //To do 2 ********************************************************************************************

  async isTokenAvailable(passwordResetToken: string) {
    // Check if a user with the provided password reset token exists
    const user = await this.db.users.findFirst({
      where: { password_reset_token: passwordResetToken },
    });

    return user; // Return the user if token is available
  }


//To do 3 *************************************************************************************


  async generatePasswordResetToken(data: { email: string }) {
    const { email } = data;

    // Find the user by email
    const user = await this.db.users.findFirst({
      where: {
        email,
      },
    });

    // Generate unique strings and combine them into a token
    const uniqueString1 = bcrypt.genSaltSync(5);
    const uniqueString2 = bcrypt.genSaltSync(5);
    const token = `${uniqueString1}${uniqueString2}`;

    // Save the token to the user's password_reset_token field
    await this.db.users.update({
      where: { id: user.id },
      data: {
        password_reset_token: token,
      },
    });

    return token;
  }

}

