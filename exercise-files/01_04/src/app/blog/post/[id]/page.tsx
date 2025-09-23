import { getPostById } from "@/app/lib/data";
import Post from "@/app/ui/components/posts/Post";
import { notFound } from "next/navigation";

export default async function Page({ params }: { params: { id: string } }) {
  // Fetch the single post from the database using the new function
  const post = await getPostById(params.id);

  if (!post) {
    // If the post is not found, use the Next.js `notFound()` utility
    // to render the not-found page.
    notFound();
  }

  // The 'post' is guaranteed to be found and non-undefined here.
  return (
    <>
      <h1>Post</h1>
      <Post {...post} />
    </>
  );
}
