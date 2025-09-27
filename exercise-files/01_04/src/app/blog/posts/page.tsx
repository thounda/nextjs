import Link from "next/link";
import { Button } from "@/app/ui/components/button";
import Post from "@/app/ui/components/posts/Post";
import { getPosts } from "@/app/lib/data";
import { Post as PostType } from "@prisma/client";

// This is a Server Component, so it can be async and fetch data directly
// without needing the 'use client' directive.
export default async function Page() {
  // We await the result of the server-side data fetching function.
  const { posts } = await getPosts();

  return (
    <div className="max-w-4xl mx-auto p-4">
      <Link href="/blog/post/insert">
        {/* Reusing the Button component which now supports a pending state via form status */}
        <Button className="outline outline-1 border-purple-700 text-purple-700 hover:bg-purple-700 hover:text-white my-5 py-2 px-4 rounded transition-colors duration-200">
          New Post +
        </Button>
      </Link>
      <h1 className="text-4xl font-extrabold text-gray-900 mb-6">
        All Blog Posts
      </h1>

      {/* Conditionally render posts if they exist, otherwise show a message */}
      {posts && posts.length > 0 ? (
        posts.map((post: PostType) => (
          // The PostType now correctly includes the 'author' field from Prisma
          <Post key={post.id} {...post} />
        ))
      ) : (
        <p className="text-gray-500">
          No posts found. Be the first to write one!
        </p>
      )}
    </div>
  );
}
