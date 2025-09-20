import Image from "next/image";
import styles from "@/app/ui/styles/home.module.css";

export default function Home() {
  return (
    <main className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="container mx-auto p-4 relative">
        <div className="bg-white border-2 border-emerald-200 rounded-lg p-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex flex-col justify-center">
            <h1 className={`text-4xl font-bold mb-4 ${styles.text_green}`}>
              Nextjs Dynamic Blog Application
            </h1>
            <p className="text-lg text-gray-700 mb-4">
              This web application was built using Next.Js and deployed to cloud
              hosting. There is the Home page (current), along with About Us,
              Post (archieve), and the (dynamically) generated - individual -
              post pages for view with 'dummy' text.
            </p>
            <a
              href="/blog/posts"
              className={`outline outline-1 outline-offset-2 border-emerald-300 text-emerald-500 hover:text-white py-2 px-4 rounded hover:bg-emerald-500 md:w-auto ${styles.fit_content}`}
            >
              Go to Blog
            </a>
          </div>

          <div className="relative flex justify-center items-center">
            {/* Image */}
            <Image
              src="/image-desktop.jpeg"
              alt="Screenshots of the dashboard project showing desktop version"
              width={1000}
              height={760}
              className="hidden rounded-lg md:block z-10"
            />

            <Image
              src="/image-mobile.jpeg"
              width={560}
              height={620}
              className="block rounded-md md:hidden"
              alt="Screenshot of the dashboard project showing mobile version"
            />
          </div>
        </div>
      </div>
      <div
        className={`hidden md:block absolute top-0 right-0 bottom-0 left-2/3 z-0 ${styles.bg_green}`}
      ></div>
    </main>
  );
}
