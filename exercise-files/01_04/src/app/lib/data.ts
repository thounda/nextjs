import { PrismaClient } from "@prisma/client";
import { Post } from "@prisma/client";

// Instantiate the Prisma Client once to create a singleton.
// This is the recommended practice for Next.js to avoid multiple client instances
// in a serverless environment.
const prisma = new PrismaClient();

// This function now returns the posts or null.
// It is intended to be called from a Server Component.
export async function getPosts(): Promise<{ posts: Post[] | null }> {
  try {
    // The query is wrapped in a try/catch block for robust error handling.
    const posts = await prisma.post.findMany();
    console.log("Successfully fetched posts from the database.");
    return { posts };
  } catch (error) {
    console.error("Database connection or query failed:", error);
    // On the server, we can simply return null to signify an error.
    return { posts: null };
  }
}
