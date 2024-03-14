const { PrismaClient } = require('@prisma/client');
const { user } = require('../app/lib/placeholder-data.js');
const { guitars } = require('../app/lib/placeholder-data.js');
const bcrypt = require('bcrypt');

const prisma = new PrismaClient();

async function main() {
  const hashedPassword = await bcrypt.hash(user.passwordHash, 10);
  console.log(hashedPassword);

  await prisma.user.create({
    data: {
      username: user.username,
      email: user.email,
      passwordHash: hashedPassword,
      guitars: {
        createMany: {
          data: guitars,
        },
      },
    },
  });

  console.log('created user and guitars', user, guitars);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
