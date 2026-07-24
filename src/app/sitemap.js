import { SITE_URL, CATEGORY_SLUGS } from "@/lib/seo";
import { BLOG_POSTS } from "@/lib/blogs";

export default function sitemap() {
  const staticRoutes = [
    { path: "", priority: 1 },
    { path: "/quote", priority: 0.9 },
    { path: "/blog", priority: 0.85 },
  ];

  const categoryRoutes = CATEGORY_SLUGS.map((slug) => ({
    path: `/category/${slug}`,
    priority: 0.8,
  }));

  const blogRoutes = BLOG_POSTS.map((post) => ({
    path: `/blog/${post.slug}`,
    priority: 0.75,
  }));

  return [...staticRoutes, ...categoryRoutes, ...blogRoutes].map(({ path, priority }) => ({
    url: `${SITE_URL}${path}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority,
  }));
}

