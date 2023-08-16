/* eslint-disable prettier/prettier */
// prisma/seed.ts

import { PrismaClient } from '@prisma/client';

// initialize Prisma Client
const prisma = new PrismaClient();

async function main() {
  // create two dummy articles
  //   const user1 = await prisma.user.create({
  //     data: {
  //       user_name: 'test',
  //       email: 'test@gmail.com',
  //       phone: '9658745689',
  //     },
  //   });
  //   console.log('user', user1);
  const getUsers = await prisma.user.findMany();

  console.log('getUsers', getUsers);
}

// execute the main function
main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    // close Prisma Client at the end
    await prisma.$disconnect();
  });
