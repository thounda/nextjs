"use client";

import { createPost } from "@/app/lib/actions";
import { Button } from "@/app/ui/components/button";

export default function Page() {
  return (
    <div className="bg-white p-8 rounded shadow">
      <h2 className="text-2xl mb-4 text-purple-700">New Blog Post</h2>
      <form action={createPost} className="space-y-4">
        <div>
          <label htmlFor="title" className="block font-medium">
            Title:
          </label>
          <input
            type="text"
            id="title"
            name="title"
            className="w-full border-2 border-purple-100 p-2 rounded-md focus:border-purple-200 focus:outline-none"
            required
          />
        </div>
        <div>
          <label htmlFor="author" className="block font-medium">
            Author:
          </label>
          <input
            type="text"
            id="author"
            name="author"
            className="w-full border-2 border-purple-100 p-2 rounded-md focus:border-purple-200 focus:outline-none"
            required
          />
        </div>
        <div>
          <label htmlFor="content" className="block font-medium">
            Content:
          </label>
          <textarea
            id="content"
            name="content"
            rows={4}
            className="w-full border-2 border-purple-100 p-2 rounded-md focus:border-purple-200 focus:outline-none"
          ></textarea>
        </div>
        <div>
          <Button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-purple-700"
          >
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
}
