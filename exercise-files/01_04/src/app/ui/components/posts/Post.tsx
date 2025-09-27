import Link from "next/link";
import { Post as PostType } from "@prisma/client";

// Define the shape of the props the component expects
interface PostProps extends PostType {}

export default function Post({ id, title, content, date, author }: PostProps) {
  // FIX: Removed the * 1000 multiplier, as 'date' is now a valid ISO string
  const formattedDate = date
    ? new Date(date).toLocaleDateString()
    : "Date not provided";

  return (
    <div className="bg-white p-6 rounded-xl shadow-lg mb-6 border border-gray-100 transition-shadow duration-300 hover:shadow-xl">
      <h2 className="text-3xl font-bold text-indigo-700 mb-2">
        <Link
          href={`/blog/post/${id}`}
          className="hover:text-indigo-500 transition-colors duration-200"
        >
          {title}
        </Link>
      </h2>
      <p className="text-sm text-gray-500 mb-4 flex justify-between">
        <span className="font-medium text-gray-600">By: {author}</span>
        <span>Posted on: {formattedDate}</span>
      </p>
      <p className="text-gray-700 leading-relaxed">{content}</p>
    </div>
  );
}
