import React, { JSX } from "react";
import Link from "next/link";

// Update the props to match the data from your Prisma schema.
// 'content' and 'date' are optional (string | null).
export default function Component({
  id,
  title,
  content,
  date,
  user, // Added the 'user' prop to match your seeded data
}: {
  id: string;
  title: string;
  content: string | null;
  date: string | null;
  user: string | null; // Added the 'user' prop
}) {
  return (
    <div key={id} className="border border-gray-200 p-4 my-4">
      <Link href={`/blog/post/${id}`}>
        <h2>{title}</h2>
      </Link>

      {/* Conditionally render content to handle null values gracefully */}
      <p className="text-gray-500">{date ? date : 'No date available'}</p>
      <p>{content ? content : 'No content available'}</p>
    </div>
  );
}
