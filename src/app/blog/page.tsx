import type { NextPage } from "next/types";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

const BlogPage: NextPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-950 via-indigo-900 to-purple-900 text-white">
      <main className="mx-auto max-w-7xl px-6 py-24 text-center lg:px-8">
        <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">Blog</h1>
        <p className="mx-auto mt-6 max-w-xl text-lg text-purple-100">
          Stories, tips, and insights for creators. Coming soon.
        </p>
      </main>
    </div>
  );
};

export default BlogPage;

