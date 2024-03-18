import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

// ! You should only have to use prisma operations, bcryptjs and common javascript knowledge to do the following
// ! For prisma there is a example in the isTokenAvailable function
// ! All the (data: any) parameters are being passed from a api call, so check the comments above each function to know what parameters are being paased
// ! When doing checks remember to to throw errors where needed (for example when no user was found when doing a query)

// * Below is the user Model as defined in the prisma schema

/* model users {
  id                       Int                        @id(map: "PK__users__3213E83F0B77CBB0") @default(autoincrement())
  email                    String?                    @db.VarChar(255)
  enabled                  Boolean
  first_name               String?                    @db.VarChar(255)
  last_name                String?                    @db.VarChar(255)
  otp_token                String?                    @db.VarChar(255)
  password                 String?                    @db.VarChar(255)
  password_reset_token     String?                    @db.VarChar(255)
  phone_number             String?                    @db.VarChar(255)
  username                 String                     @unique(map: "UK_r43af9ap4edm43mmtq01oddj6") @db.VarChar(255)
  organization_id          Int
  role_id                  BigInt?
  organization             organization               @relation(fields: [organization_id], references: [id], onUpdate: NoAction, map: "FKd7nfqfnt5fxrhuarn5q03d9lk")
  roles                    roles?                     @relation(fields: [role_id], references: [id], onDelete: NoAction, onUpdate: NoAction, map: "FKp5sxbjiwpsgy5kuqrhpqi5tod")
  organization_group_users organization_group_users[] @ignore
  survey                   survey[]
  user_surveys             user_surveys[]
}
*/

// ? Also use the better Comments vscode extension for visually pleasing comments
@Injectable()
export class PasswordService {
  constructor(private db: PrismaService) {}

  // TODO: Here you should reset the password field to a new password.
  // 1. The data object will contain the following : a unique password Reset token and a new password
  // 2. Do the correct checks needed to update the password. (User exists, has correct reset token)
  // 3. Then update the users password with prisma
  async resetPassword(data: {
    password_reset_token: string;
    new_password: string;
  }) {
    return 'TODO';
  }

  // TODO: Go over this function for errors and you can also edit this to your needs.
  // Hint: Maybe return the user to use in another function
  async isTokenAvailable(passwordResetToken: string) {
    const user = this.db.users.findFirst({
      where: {
        password_reset_token: passwordResetToken,
      },
    });
    if (!user) {
      throw new Error('Oops! This is an invalid password reset link.');
    }
  }

  // TODO: Generate 2 unique Strings, combine them into a token variable and save the token to the user.password_reset_token field and also return the token.
  //  Use prisma to query for the correct user
  //  The data parameter contains a email object with the user email that wants to reset his password reset
  async generatePasswordResetToken(data: { email: string }) {
    return 'todo';
  }
}
