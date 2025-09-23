// prisma/seed.js

const { PrismaClient } = require('@prisma/client');
const { posts } = require('../src/app/lib/placeholder-data.js'); // Adjust the path as needed

const prisma = new PrismaClient();

async function main() {
  // Use a transaction to ensure all posts are created or none are
  await prisma.$transaction(async (tx) => {
    // Loop through your placeholder data
    for (const post of posts) {
      await tx.post.create({
        data: {
          id: post.id,
          title: post.title,
          content: post.content,
          date: post.date,
          user: post.user,
        },
      });
    }
  });

  console.log('Seed data successfully loaded!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });