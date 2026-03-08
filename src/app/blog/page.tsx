import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

const BlogPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-950 via-indigo-900 to-purple-900 text-white">
      <SiteHeader />
      <main className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <h1 className="text-4xl font-bold tracking-tight">Blog</h1>
        <p className="mt-4 text-purple-100">Blog content coming next.</p>
      </main>
      <SiteFooter />
    </div>
  );
};

export default BlogPage;

