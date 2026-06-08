import { QUOTE_SEO, buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: QUOTE_SEO.title,
  description: QUOTE_SEO.description,
  path: "/quote",
});

export default function QuoteLayout({ children }) {
  return children;
}
