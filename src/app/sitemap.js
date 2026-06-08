import { SITE_URL, CATEGORY_SLUGS } from "@/lib/seo";

export default function sitemap() {
  const staticRoutes = [
    { path: "", priority: 1 },
    { path: "/quote", priority: 0.9 },
  ];

  const categoryRoutes = CATEGORY_SLUGS.map((slug) => ({
    path: `/category/${slug}`,
    priority: 0.8,
  }));

  return [...staticRoutes, ...categoryRoutes].map(({ path, priority }) => ({
    url: `${SITE_URL}${path}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority,
  }));
}
