"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar } from 'lucide-react';

const blogData = [
  {
    title: "Design Tips for Custom Lapel Pins That Stand Out",
    date: "July 2, 2025",
    excerpt: "Custom lapel pins are powerful branding tools. Whether for business or events, they must leave a lasting impression.",
    img: "/hero_gifts_1775637506200.png"
  },
  {
    title: "Choosing the Right Plating Options for Enamel Badges",
    date: "April 7, 2025",
    excerpt: "Discover the best metal finishes for your custom pins, from classic gold to sleek black nickel depending on your design.",
    img: "/hero_printing_1775637492071.png"
  },
  {
    title: "Why Custom Lapel Pins Are Essential for Corporate Events",
    date: "April 7, 2025",
    excerpt: "Despite the digital shift, wearing custom branded badges carries an unmatched weight in professional brand promotion.",
    img: "/hero_products_1775637475637.png"
  }
];

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
            <a href="#" className="flex items-center gap-2 text-[#0F6393] font-bold text-sm hover:translate-x-1 transition-all duration-300">
              View All Articles <ArrowRight size={16} />
            </a>
          </motion.div>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {blogData.map((blog, idx) => (
            <motion.div key={idx} variants={itemVariants} className="bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.06)] flex flex-col group hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.12)] transition-all duration-500">
              
              <div className="w-full aspect-[16/10] relative overflow-hidden bg-slate-50 border-b border-slate-50">
                <Image 
                  src={blog.img} 
                  alt={blog.title} 
                  fill 
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-1000 cubic-bezier(0.16, 1, 0.3, 1)" 
                  quality={85}
                />
              </div>
              
              <div className="p-8 flex flex-col flex-grow">
                <div className="flex items-center gap-2 text-slate-400 text-[11px] font-bold uppercase tracking-widest mb-4">
                   <Calendar size={12} />
                   {blog.date}
                </div>
                
                <h3 className="text-[19px] font-extrabold text-[#0F6393] leading-snug mb-3 group-hover:text-[#0F6393] transition-colors duration-300">
                  {blog.title}
                </h3>
                
                <p className="text-slate-500 text-[14px] leading-relaxed mb-6 font-medium line-clamp-2">
                  {blog.excerpt}
                </p>
                
                <a href="#" className="mt-auto flex items-center gap-2 text-[#0F6393] font-bold text-[13px] group/link">
                  <span className="relative">
                    Read Article
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#0F6393]/20 group-hover/link:w-full transition-all duration-300"></span>
                  </span>
                  <ArrowRight size={14} className="group-hover/link:translate-x-1 transition-transform" />
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
