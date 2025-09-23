import { PrismaClient } from "@prisma/client";

// Instantiate a single PrismaClient instance to avoid multiple connections in development
// and for efficient use of serverless functions.
const prisma = new PrismaClient();

// This is an async function that fetches all posts from the database.
export async function getPosts() {
  try {
    const posts = await prisma.post.findMany();
    // Return an object with the posts array.
    return { posts };
  } catch (error) {
    console.error("Database Error:", error);
    // On error, return an object with an empty array and an error message.
    return { posts: [], error: "Failed to fetch posts from the database." };
  }
}

// This is a new function to fetch a single post by its ID.
export async function getPostById(id: string) {
  try {
    const post = await prisma.post.findUnique({
      where: { id: id },
    });
    return post;
  } catch (error) {
    console.error("Database Error:", error);
    return null;
  }
}
