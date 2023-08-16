import { Prisma } from '@prisma/client';

export class User implements Prisma.UserCreateInput {
  user_name: string;
  email: string;
  phone: string;
  createdAt?: string | Date;
  updatedAt?: string | Date;
}
