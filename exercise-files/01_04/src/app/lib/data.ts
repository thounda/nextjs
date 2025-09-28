// src/app/lib/data.ts
import { PrismaClient } from "@prisma/client";
import { unstable_noStore } from "next/cache"; // Import the function
import { resolve } from "path";

// Instantiate a single PrismaClient instance to avoid multiple connections in development
// and for efficient use of serverless functions.
const prisma = new PrismaClient();

// This is an async function that fetches all posts from the database.
export async function getPosts() {
  // 1. Opt-out of Next.js Data Cache
  unstable_noStore();
  await new Promise((resolve) => setTimeout(resolve, 3000));

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
  // 2. Opt-out of Next.js Data Cache
  unstable_noStore();

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
