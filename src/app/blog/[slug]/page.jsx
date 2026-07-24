import { notFound } from "next/navigation";
import Link from "next/link";
import Header from "@/app/_components/Header";
import Footer from "@/app/_components/Footer";
import StructuredData from "@/app/_components/StructuredData";
import { WhatsAppProvider, WhatsAppTrigger } from "@/app/_components/WhatsAppWidget";
import { getBlogBySlug, getRelatedBlogs, BLOG_POSTS } from "@/lib/blogs";
import { buildBlogPostingJsonLd, buildPageMetadata } from "@/lib/seo";
import {
  Calendar,
  Clock,
  ChevronRight,
  ArrowRight,
  CheckCircle2,
  Quote,
  MessageCircle,
  User
} from "lucide-react";

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = getBlogBySlug(slug);

  if (!post) {
    return buildPageMetadata({
      title: "Article Not Found | PrintX DXB",
      description: "The requested blog article was not found.",
      path: "/blog",
    });
  }

  return buildPageMetadata({
    title: `${post.title} | PrintX DXB`,
    description: post.excerpt,
    path: `/blog/${post.slug}`,
  });
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const post = getBlogBySlug(slug);

  if (!post) {
    notFound();
  }

  const relatedBlogs = getRelatedBlogs(post.slug, 3);
  const jsonLd = buildBlogPostingJsonLd({
    title: post.title,
    description: post.excerpt,
    path: `/blog/${post.slug}`,
    datePublished: post.date,
    authorName: post.author.name,
  });

  return (
    <WhatsAppProvider>
      <StructuredData data={jsonLd} />
      <Header />
      <main className="flex-1 w-full bg-[#f8fafc] min-h-screen pb-24">
        {/* ───── Hero Header Section ───── */}
        <section className="bg-white border-b border-slate-200/60 py-12 md:py-16 px-6 relative overflow-hidden">
          <div 
            className="absolute inset-0 opacity-[0.015] pointer-events-none" 
            style={{ backgroundImage: 'radial-gradient(#0F6393 1px, transparent 1px)', backgroundSize: '32px 32px' }} 
          />

          <div className="max-w-4xl mx-auto relative z-10">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-xs font-semibold text-slate-400 mb-6">
              <Link href="/" className="hover:text-[#0F6393] transition-colors">Home</Link>
              <ChevronRight size={12} className="text-slate-300" />
              <Link href="/blog" className="hover:text-[#0F6393] transition-colors">Blog</Link>
              <ChevronRight size={12} className="text-slate-300" />
              <span className="text-[#0F6393] font-bold truncate max-w-[220px] sm:max-w-none">{post.title}</span>
            </div>

            <span className="text-[12px] font-black tracking-[0.3em] text-[#00AEEF] uppercase mb-3 block">
              {post.category}
            </span>

            <h1 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold tracking-tight leading-[1.2] text-[#0F6393] mb-4">
              {post.title}
            </h1>

            {post.subtitle && (
              <p className="text-base sm:text-lg text-slate-500 font-medium leading-relaxed mb-6">
                {post.subtitle}
              </p>
            )}

            {/* Author Meta */}
            <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-slate-100">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-[#0F6393]/10 flex items-center justify-center text-[#0F6393]">
                  <User size={16} />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-800">{post.author.name}</p>
                  <p className="text-[11px] text-slate-400 font-medium">{post.author.role}</p>
                </div>
              </div>

              <div className="flex items-center gap-4 text-xs font-semibold text-slate-400">
                <span className="flex items-center gap-1.5">
                  <Calendar size={13} />
                  {post.date}
                </span>
                <span>•</span>
                <span className="flex items-center gap-1.5">
                  <Clock size={13} />
                  {post.readTime}
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* ───── Article Content Container (No Image Room) ───── */}
        <div className="max-w-4xl mx-auto px-6 pt-10 relative z-20">
          {/* Key Takeaways Card */}
          {post.keyTakeaways && post.keyTakeaways.length > 0 && (
            <div className="bg-[#0F6393]/5 border border-[#0F6393]/15 rounded-3xl p-6 sm:p-8 mb-8">
              <h3 className="text-xs font-extrabold uppercase tracking-wider text-[#0F6393] mb-4">
                Key Takeaways
              </h3>
              <ul className="space-y-3">
                {post.keyTakeaways.map((takeaway, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm font-semibold text-slate-700 leading-relaxed">
                    <CheckCircle2 size={17} className="text-[#0F6393] shrink-0 mt-0.5" />
                    <span>{takeaway}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Article Body */}
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-100 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.06)] mb-10 space-y-6 text-slate-600 text-base leading-relaxed font-normal">
            {post.content.map((block, idx) => {
              if (block.type === "paragraph") {
                return (
                  <p key={idx} className="text-[16px] text-slate-600 leading-relaxed">
                    {block.text}
                  </p>
                );
              }
              if (block.type === "heading") {
                return (
                  <h2 key={idx} className="text-xl sm:text-2xl font-extrabold text-[#0F6393] tracking-tight pt-4 border-t border-slate-100">
                    {block.text}
                  </h2>
                );
              }
              if (block.type === "quote") {
                return (
                  <div key={idx} className="my-6 bg-[#0F6393]/5 border-l-4 border-[#0F6393] p-6 rounded-r-2xl italic text-[#0F6393] font-semibold text-base flex gap-4">
                    <Quote size={24} className="shrink-0 text-[#0F6393]/40" />
                    <p>{block.text}</p>
                  </div>
                );
              }
              if (block.type === "list") {
                return (
                  <ul key={idx} className="space-y-3 my-4">
                    {block.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-[15px] text-slate-600 font-medium leading-relaxed">
                        <CheckCircle2 size={16} className="text-[#0F6393] shrink-0 mt-1" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                );
              }
              if (block.type === "table") {
                return (
                  <div key={idx} className="my-6 overflow-x-auto rounded-2xl border border-slate-200">
                    <table className="w-full text-left text-xs sm:text-sm text-slate-700 border-collapse">
                      <thead className="bg-[#0F6393] text-white font-extrabold uppercase tracking-wider text-[11px]">
                        <tr>
                          {block.headers.map((h, i) => (
                            <th key={i} className="py-3.5 px-4 border-b border-[#0F6393]">{h}</th>
                          ))}
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100 bg-white">
                        {block.rows.map((row, rIdx) => (
                          <tr key={rIdx} className={rIdx % 2 === 0 ? "bg-slate-50/50" : "bg-white"}>
                            {row.map((cell, cIdx) => (
                              <td key={cIdx} className="py-3.5 px-4 font-medium">{cell}</td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                );
              }
              return null;
            })}

            {/* Article FAQs Section */}
            {post.faqs && post.faqs.length > 0 && (
              <div className="pt-8 border-t border-slate-100 space-y-6">
                <h3 className="text-xl sm:text-2xl font-extrabold text-[#0F6393] tracking-tight">
                  Frequently Asked Questions (FAQs)
                </h3>
                <div className="space-y-4">
                  {post.faqs.map((faq, fIdx) => (
                    <div key={fIdx} className="bg-slate-50 rounded-2xl p-5 border border-slate-100 space-y-2">
                      <h4 className="text-sm sm:text-base font-extrabold text-[#0F6393]">
                        {faq.question}
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Tags */}
            {post.tags && (
              <div className="pt-8 border-t border-slate-100 flex flex-wrap items-center gap-2">
                <span className="text-xs font-bold text-slate-400 mr-2">Tags:</span>
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-slate-100 text-slate-600 text-xs font-semibold px-3 py-1 rounded-full border border-slate-200/60"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            )}
          </div>

          {/* Inline CTA Box */}
          <div className="bg-[#0F6393] rounded-3xl p-8 text-white shadow-lg mb-14 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-xl font-extrabold mb-1">Have a custom pin project in mind?</h3>
              <p className="text-xs sm:text-sm text-white/85 font-medium">
                Send us your artwork for a free digital proof and instant price quote in Dubai.
              </p>
            </div>
            <div className="flex items-center gap-3 shrink-0">
              <Link
                href="/quote"
                className="bg-white text-[#0F6393] hover:bg-slate-100 font-extrabold text-xs px-5 py-3 rounded-xl transition-all shadow-md flex items-center gap-1.5 whitespace-nowrap"
              >
                <span>Get Free Quote</span>
                <ArrowRight size={14} />
              </Link>
              <WhatsAppTrigger className="bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs font-extrabold px-4 py-3 rounded-xl transition-all shadow-md flex items-center gap-1.5 whitespace-nowrap">
                <MessageCircle size={15} />
                <span>WhatsApp</span>
              </WhatsAppTrigger>
            </div>
          </div>

          {/* Related Articles Section (Text-only cards) */}
          {relatedBlogs.length > 0 && (
            <div>
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-extrabold text-[#0F6393]">Related Articles</h3>
                <Link href="/blog" className="text-xs font-extrabold text-[#0F6393] hover:text-[#00AEEF] flex items-center gap-1">
                  View All <ArrowRight size={14} />
                </Link>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedBlogs.map((relPost) => (
                  <div key={relPost.slug} className="bg-white rounded-3xl p-6 border border-slate-100 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.06)] flex flex-col justify-between group hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.12)] transition-all duration-500">
                    <div>
                      <span className="text-[10px] font-extrabold text-[#00AEEF] uppercase tracking-wider block mb-2">
                        {relPost.category}
                      </span>
                      <h4 className="text-sm font-extrabold text-[#0F6393] leading-snug mb-2 group-hover:text-[#00AEEF] line-clamp-2">
                        <Link href={`/blog/${relPost.slug}`}>{relPost.title}</Link>
                      </h4>
                      <p className="text-slate-500 text-xs font-medium line-clamp-2 mb-4">
                        {relPost.excerpt}
                      </p>
                    </div>
                    <Link href={`/blog/${relPost.slug}`} className="text-xs font-bold text-[#0F6393] flex items-center gap-1 mt-auto">
                      <span>Read Article</span>
                      <ArrowRight size={12} />
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </WhatsAppProvider>
  );
}
