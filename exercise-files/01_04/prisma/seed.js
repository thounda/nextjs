const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

// Hardcoded data with 10 posts, using correct ISO date strings (2025)
const posts = [
  {
    id: "a5e08164-b12b-4e72-9191-2f7daadb4e88",
    title: "Post Title 1",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do ei",
    date: "2025-09-15T10:00:00.000Z",
    author: "Sandra B",
  },
  {
    id: "6bd38af3-8a95-4a7a-add7-fd69c6b8f124",
    title: "Post Title 2",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    date: "2025-09-18T12:30:00.000Z",
    author: "Sandra B",
  },
  {
    id: "836b0611-e82e-4b5e-8ab9-8e9f98e43549",
    title: "Post Title 3",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    date: "2025-09-20T09:15:00.000Z",
    author: "Sandy L",
  },
  {
    id: "b08212a4-fd01-4d39-892c-15d49b8a96a4",
    title: "Post Title 4",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut ",
    date: "2025-09-21T15:45:00.000Z",
    author: "Jane S",
  },
  {
    id: "bd0f47c5-3cd0-48ee-9b52-104a914e2354",
    title: "Post Title 5",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    date: "2025-09-22T08:00:00.000Z",
    author: "Jane S",
  },
  {
    id: "e7c26aa0-76f7-4037-b341-4a794c9c8f64",
    title: "Post Title 6",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliq",
    date: "2025-09-23T11:20:00.000Z",
    author: "Sandra B",
  },
  {
    id: "2375388b-3b07-401b-9f70-fd69b4ef5ead",
    title: "Post Title 7",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    date: "2025-09-24T14:50:00.000Z",
    author: "Jane S",
  },
  {
    id: "b1a5ffb6-1152-4a9f-a997-9f4e66e140af",
    title: "Post Title 8",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusm",
    date: "2025-09-25T17:30:00.000Z",
    author: "John D",
  },
  {
    id: "7f9622bb-eb4d-4f42-b66a-7dfa28f5e32a",
    title: "Post Title 9",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore e",
    date: "2025-09-26T07:10:00.000Z",
    author: "John D",
  },
  {
    id: "724688be-3911-4bf7-8717-4ac8931daf8c",
    title: "Post Title 10",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    date: "2025-09-27T10:40:00.000Z",
    author: "Sandy L",
  },
];

async function main() {
  // Use a transaction to ensure all posts are created or none are
  await prisma.$transaction(async (tx) => {
    // Delete existing posts to ensure we start clean
    await tx.post.deleteMany();

    // Loop through the data
    for (const post of posts) {
      await tx.post.create({
        data: {
          id: post.id,
          title: post.title,
          content: post.content,
          date: post.date, // Now using correct ISO date
          author: post.author,
        },
      });
    }
  });

  console.log(`Successfully seeded the database with ${posts.length} posts.`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
