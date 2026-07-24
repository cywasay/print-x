import Header from "@/app/_components/Header";
import Footer from "@/app/_components/Footer";
import StructuredData from "@/app/_components/StructuredData";
import { WhatsAppProvider } from "@/app/_components/WhatsAppWidget";
import { BLOG_SEO, buildPageMetadata } from "@/lib/seo";
import BlogListClient from "./BlogListClient";
import { getAllBlogs } from "@/lib/blogs";

export const metadata = buildPageMetadata({
  title: BLOG_SEO.title,
  description: BLOG_SEO.description,
  path: "/blog",
});

export default function BlogPage() {
  const blogs = getAllBlogs();

  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "PrintX DXB Custom Pins & Badges Blog",
    description: BLOG_SEO.description,
    publisher: {
      "@type": "Organization",
      name: "PrintX DXB",
    },
  };

  return (
    <WhatsAppProvider>
      <StructuredData data={blogSchema} />
      <Header />
      <main className="flex-1 w-full bg-[#FAFCFF] min-h-screen">
        <BlogListClient initialBlogs={blogs} />
      </main>
      <Footer />
    </WhatsAppProvider>
  );
}
