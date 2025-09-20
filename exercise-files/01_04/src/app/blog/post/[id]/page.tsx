import { posts } from "@/app/lib/placeholder-data";
import Post from "@/app/ui/components/posts/Post";

export default function Page({ params }: { params: { id: string } }) {
  const post = posts.find((post) => post.id === params.id);

  if (!post) {
    return (
      <>
        <h1>Post Not Found</h1>
        <p>Sorry, the post with ID: {params.id} could not be located.</p>
      </>
    );
  }
  // The 'post' is guaranteed to be found and non-undefined here.
  return (
    <>
      <h1>Post</h1>
      <Post {...post} />
    </>
  );
}
