import { PrismaClient, users } from '@prisma/client';
import { Injectable, OnModuleDestroy } from '@nestjs/common';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleDestroy {
  constructor() {
    super();
  }

  async onModuleDestroy() {
    await this.$disconnect();
  }

  async getUsers(): Promise<users[]> {
    return this.users.findMany();
  }
}






