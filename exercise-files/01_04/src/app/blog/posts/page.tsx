import Post from "@/app/ui/components/posts/Post";
import { getPosts } from "@/app/lib/data";
import { Post as PostType } from "@prisma/client";

// This is a Server Component, so it can be async and fetch data directly
// without needing the 'use client' directive.
export default async function Page() {
  // We await the result of the server-side data fetching function.
  const { posts } = await getPosts();

  return (
    <>
      <h1>Posts</h1>
      {/* Conditionally render posts if they exist, otherwise show a message */}
      {posts && posts.length > 0 ? (
        posts.map((post: PostType) => <Post key={post.id} {...post} />)
      ) : (
        <p>No posts found.</p>
      )}
    </>
  );
}
