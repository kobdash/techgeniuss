// Import necessary modules and services
import { PasswordService } from './password.service';
import { PrismaService } from '../prisma/prisma.service';
import * as bcrypt from 'bcryptjs';
import * as crypto from 'crypto';

// Mock PrismaService instance
const prismaService = new PrismaService();

// Mocked data
const userData = {
  id: 1,
  email: 'test@example.com',
  password_reset_token: 'mocked-token',
};

// Mock implementations for PrismaService methods
jest.mock('../prisma/prisma.service', () => ({
  __esModule: true,
  PrismaService: jest.fn().mockImplementation(() => ({
    users: {
      findFirst: jest.fn().mockResolvedValue(userData),
      update: jest.fn().mockResolvedValue(userData),
    },
  })),
}));

// Mock implementations for bcrypt methods
jest.mock('bcryptjs', () => ({
  __esModule: true,
  hash: jest.fn().mockReturnValue('hashed-password'),
}));

// Mock implementations for crypto methods
jest.mock('crypto', () => ({
  __esModule: true,
  randomBytes: jest.fn().mockReturnValue({ toString: jest.fn().mockReturnValue('mocked-token') }),
}));

describe('PasswordService', () => {
  let service: PasswordService;

  beforeEach(() => {
    service = new PasswordService(prismaService as any);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('resetPassword', () => {
    it('should reset password successfully', async () => {
      // Mock data
      const data = {
        password_reset_token: 'mocked-token',
        new_password: 'newpassword',
      };

      // Call the method
      const result = await service.resetPassword(data);

      // Assertion
      expect(result).toEqual('Password reset successfully.');

      // Verify PrismaService method calls
      expect(prismaService.users.findFirst).toHaveBeenCalledWith({
        where: { password_reset_token: 'mocked-token' },
      });
      expect(prismaService.users.update).toHaveBeenCalledWith({
        where: { id: 1 },
        data: { password: 'hashed-password', password_reset_token: null },
      });

      // Verify bcrypt method call
      expect(bcrypt.hash).toHaveBeenCalledWith('newpassword', 10);
    });
  });

  // Add more test cases for other methods
});
