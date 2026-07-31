"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar, Clock, CheckCircle2 } from 'lucide-react';
import { getAllBlogs } from '@/lib/blogs';

const blogData = getAllBlogs().slice(0, 3);

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function BlogsSection() {
  return (
    <section className="py-24 bg-[#f8fafc] border-y border-slate-200/50 relative overflow-hidden">
      {/* Background Polish */}
      <div className="absolute inset-0 opacity-[0.012] pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(#0F6393 1px, transparent 1px)', backgroundSize: '32px 32px' }} />

      <div className="max-w-[1300px] mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-[48px] font-extrabold leading-[1.1] tracking-tight text-[#0F6393] mb-2">
              Latest from{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0F6393] to-[#00AEEF]">
                Insights.
              </span>
            </h2>
            <p className="text-sm md:text-base text-slate-500/90 font-medium">Expert advice on custom pin designs and manufacturing.</p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <Link href="/blog" className="flex items-center gap-2 text-[#0F6393] font-bold text-sm hover:translate-x-1 transition-all duration-300">
              View All Articles <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>

        <motion.div 
          className={`grid grid-cols-1 ${blogData.length === 2 ? 'md:grid-cols-2 max-w-5xl mx-auto' : 'md:grid-cols-3'} gap-8`}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {blogData.map((blog, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
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
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
