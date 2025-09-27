"use server";

import { PrismaClient } from "@prisma/client";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

// Initialize Prisma Client
// Note: In production environments, Next.js handles this initialization.
const prisma = new PrismaClient();

// Server Action to create a new post
export async function createPost(formData: FormData) {
  // Extract data from the form fields using their 'name' attribute
  const rawFormData = {
    title: formData.get("title") as string,
    content: formData.get("content") as string,
    author: formData.get("author") as string,
    // FIX: Get the full ISO string for robust storage across all environments
    date: new Date().toISOString(),
  };

  try {
    await prisma.post.create({
      data: {
        title: rawFormData.title,
        content: rawFormData.content,
        author: rawFormData.author,
        date: rawFormData.date, // Saving the full ISO string
      },
    });
  } catch (error) {
    console.error("Database Error: Failed to Create Post.", error);
    // Throw an error instead of returning an object to comply with Next.js form action types
    throw new Error("Database Error: Failed to Create Post.");
  }

  // Invalidate the cache for the posts page and redirect to show the new post
  revalidatePath("/blog/posts");
  redirect("/blog/posts");
}
