import { notFound } from "next/navigation";
import { getPostById } from "@/app/lib/data";

// Define the shape of the props this page component receives
interface PageProps {
  params: {
    id: string; // The dynamic segment from the URL, e.g., the post ID
  };
}

// This is an async Server Component that fetches data based on the URL parameter
export default async function SinglePostPage({ params }: PageProps) {
  const { id } = params;

  // Fetch the single post from the database using the ID from the URL
  const post = await getPostById(id);

  // If the post is not found, render the Next.js built-in 404 page
  if (!post) {
    notFound();
  }

  // Helper variable to format the date
  // FIX: Removed the * 1000 multiplier, as 'post.date' is now a valid ISO string
  const formattedDate = post.date
    ? new Date(post.date).toLocaleDateString()
    : "Date unavailable";

  // If the post is found, render its details
  return (
    <div className="max-w-4xl mx-auto p-4 py-8">
      <div className="bg-white p-8 rounded-xl shadow-2xl border border-indigo-100">
        <h1 className="text-4xl font-extrabold text-indigo-800 mb-4 border-b pb-2">
          {post.title}
        </h1>
        <p className="text-md text-gray-600 mb-6 flex justify-between">
          <span className="font-semibold text-indigo-600">
            By: {post.author}
          </span>
          <span>Posted on: {formattedDate}</span>
        </p>

        <div className="prose max-w-none text-gray-800 leading-relaxed space-y-4">
          <p>{post.content}</p>
          {/* You could render longer content here */}
        </div>
      </div>

      {/* Basic navigation back to the post list */}
      <div className="mt-8">
        <a
          href="/blog/posts"
          className="inline-block text-indigo-700 hover:text-indigo-900 transition-colors duration-200 font-medium text-lg"
        >
          &larr; Back to all posts
        </a>
      </div>
    </div>
  );
}
