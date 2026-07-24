"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { Search, Calendar, Clock, ArrowRight, ChevronRight, BookOpen, CheckCircle2, Sparkles, Tag, ShieldCheck } from "lucide-react";

export default function BlogListClient({ initialBlogs }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTag, setSelectedTag] = useState("All");

  // Extract unique categories
  const allCategories = useMemo(() => {
    const tags = new Set(["All"]);
    initialBlogs.forEach((blog) => {
      if (blog.category) tags.add(blog.category);
    });
    return Array.from(tags);
  }, [initialBlogs]);

  // Featured Post
  const featuredPost = useMemo(() => {
    return initialBlogs.find((b) => b.featured) || initialBlogs[0];
  }, [initialBlogs]);

  // Filtered Posts
  const filteredBlogs = useMemo(() => {
    return initialBlogs.filter((blog) => {
      const matchesSearch =
        blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        blog.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        blog.category.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesTag =
        selectedTag === "All" || blog.category === selectedTag;

      return matchesSearch && matchesTag;
    });
  }, [initialBlogs, searchQuery, selectedTag]);

  return (
    <div className="w-full bg-[#f8fafc] pb-24 font-barlow">
      {/* ───── Simplified & Professional Hero Header ───── */}
      <section className="bg-white border-b border-slate-200/60 py-12 md:py-16 px-6 relative overflow-hidden">
        {/* Background Dot Polish */}
        <div 
          className="absolute inset-0 opacity-[0.015] pointer-events-none" 
          style={{ backgroundImage: 'radial-gradient(#0F6393 1px, transparent 1px)', backgroundSize: '32px 32px' }} 
        />
        <div className="absolute -right-20 -top-20 w-[500px] h-[500px] bg-[#00AEEF]/5 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs font-semibold text-slate-400 mb-6">
            <Link href="/" className="hover:text-[#0F6393] transition-colors">Home</Link>
            <ChevronRight size={12} className="text-slate-300" />
            <span className="text-[#0F6393] font-bold">Blog & Insights</span>
          </div>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="max-w-2xl">
              <span className="text-[12px] font-black tracking-[0.3em] text-[#00AEEF] uppercase mb-3 block">
                PrintX Technical Knowledge Base
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-[46px] font-extrabold leading-[1.15] tracking-tight text-[#0F6393] mb-4">
                Pin Craftsmanship & Design Guides.
              </h1>
              <p className="text-sm sm:text-base text-slate-500 font-medium leading-relaxed">
                Technical recommendations, metal plating comparisons, artwork line weight rules, and corporate badge standards directly from our master pin craftsmen in Dubai.
              </p>
            </div>

            {/* Search Bar */}
            <div className="w-full md:w-[380px] shrink-0">
              <div className="flex w-full rounded-full border-2 border-slate-200 overflow-hidden focus-within:border-[#0F6393] focus-within:shadow-[0_0_0_3px_rgba(15,99,147,0.1)] transition-all bg-white">
                <input
                  type="text"
                  placeholder="Search technical guides..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="flex-1 px-5 py-3 text-[13.5px] text-slate-700 outline-none bg-transparent placeholder:text-slate-400 font-medium"
                />
                <button className="bg-[#0F6393] hover:bg-[#00AEEF] text-white px-5 flex items-center justify-center transition-colors">
                  <Search size={16} strokeWidth={2.5} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ───── Content Area ───── */}
      <div className="max-w-7xl mx-auto px-6 pt-10 relative z-20">
        {/* Category Filter Buttons */}
        <div className="flex items-center gap-2 overflow-x-auto pb-6 scrollbar-none">
          {allCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedTag(cat)}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all duration-200 whitespace-nowrap border ${
                selectedTag === cat
                  ? "bg-[#0F6393] text-white border-[#0F6393] shadow-sm"
                  : "bg-white text-slate-600 border-slate-200 hover:border-[#0F6393]/40 hover:text-[#0F6393]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* ───── Featured Article Spotlight Banner ───── */}
        {featuredPost && selectedTag === "All" && !searchQuery && (
          <div className="mb-14">
            <div className="bg-white rounded-3xl border border-slate-200/80 shadow-[0_10px_30px_-15px_rgba(0,0,0,0.05)] overflow-hidden relative group hover:shadow-[0_20px_40px_-12px_rgba(15,99,147,0.12)] transition-all duration-500">
              <div className="p-8 sm:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-8 space-y-4">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="text-[#0F6393] bg-[#0F6393]/10 px-3 py-1 rounded-full text-[11px] font-extrabold uppercase tracking-wider flex items-center gap-1.5">
                      <Sparkles size={12} className="text-[#00AEEF]" />
                      Featured Master Guide • {featuredPost.category}
                    </span>
                    <span className="text-slate-400 text-xs font-bold flex items-center gap-1">
                      <Clock size={12} />
                      {featuredPost.readTime}
                    </span>
                  </div>

                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0F6393] leading-snug tracking-tight group-hover:text-[#00AEEF] transition-colors">
                    <Link href={`/blog/${featuredPost.slug}`}>
                      {featuredPost.title}
                    </Link>
                  </h2>

                  <p className="text-slate-500 text-sm sm:text-base font-medium leading-relaxed">
                    {featuredPost.excerpt}
                  </p>

                  <div className="pt-4 flex items-center gap-4 text-xs font-bold text-slate-400">
                    <span className="text-slate-700">By {featuredPost.author.name}</span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Calendar size={12} />
                      {featuredPost.date}
                    </span>
                  </div>
                </div>

                <div className="lg:col-span-4 bg-[#f8fafc] rounded-2xl p-6 border border-slate-100 flex flex-col justify-between h-full space-y-4">
                  <div>
                    <span className="text-[11px] font-extrabold text-[#0F6393] uppercase tracking-wider block mb-3">
                      Key Takeaways Preview
                    </span>
                    {featuredPost.keyTakeaways && (
                      <ul className="space-y-2 mb-4">
                        {featuredPost.keyTakeaways.slice(0, 2).map((pt, i) => (
                          <li key={i} className="text-xs font-medium text-slate-600 flex items-start gap-2 leading-tight">
                            <CheckCircle2 size={14} className="text-[#0F6393] shrink-0 mt-0.5" />
                            <span>{pt}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>

                  <Link
                    href={`/blog/${featuredPost.slug}`}
                    className="w-full bg-[#0F6393] hover:bg-[#00AEEF] text-white font-extrabold text-xs px-5 py-3 rounded-xl transition-all shadow-sm text-center flex items-center justify-center gap-2 group/btn"
                  >
                    <span>Read Complete Guide</span>
                    <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ───── Articles Grid (Distinctive Knowledge Cards) ───── */}
        <div className="mb-8 flex items-center justify-between">
          <h3 className="text-xl sm:text-2xl font-extrabold text-[#0F6393] tracking-tight">
            {searchQuery ? `Search Results (${filteredBlogs.length})` : selectedTag !== "All" ? `${selectedTag} Articles` : "Technical Articles"}
          </h3>
          <span className="text-xs text-slate-400 font-semibold">{filteredBlogs.length} articles</span>
        </div>

        {filteredBlogs.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {filteredBlogs.map((blog, idx) => (
              <article
                key={blog.slug}
                className="bg-white rounded-3xl border border-slate-200/80 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.04)] hover:border-[#0F6393]/30 hover:shadow-[0_20px_40px_-12px_rgba(15,99,147,0.12)] transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
              >
                <div className="p-8 flex flex-col flex-1">
                  {/* Category Pill & Index Number */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="text-[10px] font-black tracking-widest text-[#0F6393] uppercase bg-[#0F6393]/8 px-3 py-1 rounded-full border border-[#0F6393]/10">
                      {blog.category}
                    </span>
                    <span className="text-[11px] font-black text-slate-300 tracking-wider">
                      0{idx + 1}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-[19px] font-extrabold text-[#0F6393] leading-snug mb-3 group-hover:text-[#00AEEF] transition-colors duration-300">
                    <Link href={`/blog/${blog.slug}`}>
                      {blog.title}
                    </Link>
                  </h3>

                  {/* Excerpt */}
                  <p className="text-slate-500 text-[13.5px] leading-relaxed mb-5 font-medium line-clamp-3">
                    {blog.excerpt}
                  </p>

                  {/* Takeaway Bullets Preview */}
                  {blog.keyTakeaways && blog.keyTakeaways.length > 0 && (
                    <div className="bg-[#f8fafc] rounded-2xl p-3.5 border border-slate-100 mb-6 mt-auto">
                      <div className="text-[10px] font-extrabold text-slate-400 uppercase tracking-wider mb-2">Key Takeaways</div>
                      <div className="text-[11.5px] font-semibold text-slate-600 flex items-start gap-1.5 leading-snug line-clamp-2">
                        <CheckCircle2 size={13} className="text-[#0F6393] shrink-0 mt-0.5" />
                        <span>{blog.keyTakeaways[0]}</span>
                      </div>
                    </div>
                  )}
                </div>

                {/* Footer Metadata */}
                <div className="px-8 pb-7 pt-4 border-t border-slate-100 flex items-center justify-between">
                  <div className="flex items-center gap-3 text-slate-400 text-[11px] font-bold">
                    <span className="flex items-center gap-1">
                      <Clock size={12} />
                      {blog.readTime}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Calendar size={12} />
                      {blog.date}
                    </span>
                  </div>

                  <Link href={`/blog/${blog.slug}`} className="flex items-center gap-1.5 text-[#0F6393] font-extrabold text-[12.5px] group/link">
                    <span>Read</span>
                    <ArrowRight size={14} className="group-hover/link:translate-x-1 transition-transform text-[#00AEEF]" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-3xl p-12 text-center border border-slate-200 shadow-sm max-w-md mx-auto my-12">
            <BookOpen size={36} className="mx-auto text-slate-300 mb-3" />
            <h4 className="text-lg font-bold text-slate-700 mb-1">No articles found</h4>
            <p className="text-xs text-slate-500 mb-6 font-medium">
              We couldn't find any articles matching your search criteria.
            </p>
            <button
              onClick={() => { setSearchQuery(""); setSelectedTag("All"); }}
              className="bg-[#0F6393] text-white text-xs font-bold px-5 py-2.5 rounded-xl hover:bg-[#00AEEF] transition-colors"
            >
              Clear Filters
            </button>
          </div>
        )}

        {/* ───── Uniform CTA Section ───── */}
        <div className="mt-20 bg-[#0F6393] rounded-3xl p-8 sm:p-12 text-white relative overflow-hidden shadow-lg">
          <div className="max-w-2xl relative z-10">
            <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight mb-3">
              Need custom pins for your brand or event?
            </h3>
            <p className="text-sm sm:text-base text-white/85 font-medium leading-relaxed mb-6">
              Get high-precision custom pins manufactured in Dubai with fast turnaround, free digital artwork proof, and MOQs starting at 25 pieces.
            </p>
            <Link
              href="/quote"
              className="inline-flex items-center gap-2 bg-white text-[#0F6393] hover:bg-slate-100 font-extrabold text-sm px-6 py-3.5 rounded-xl transition-all shadow-md"
            >
              <span>Get a Free Quote</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
