"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function ExcellenceSection() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const leftImageRotate = useTransform(scrollYProgress, [0, 1], [-5, -10]);
  const rightImageRotate = useTransform(scrollYProgress, [0, 1], [3, 7]);
  const leftImageY = useTransform(scrollYProgress, [0, 1], [0, -15]);
  const rightImageY = useTransform(scrollYProgress, [0, 1], [0, -10]);

  const bgY = useTransform(scrollYProgress, [0, 1], ["-10px", "10px"]);

  return (
    <section 
      ref={containerRef}
      className="relative w-full h-[300px] md:h-[400px] lg:h-[450px] overflow-hidden flex items-center justify-center border-y border-slate-200/40 shadow-inner bg-[#0d2b3e]"
    >
      {/* Background Banner with Heavy Parallax (Almost Fixed) */}
      <motion.div 
        style={{ y: bgY }}
        className="absolute inset-x-0 -top-[30%] -bottom-[30%] w-full h-[160%] z-0 will-change-transform"
      >
        <Image
          src="/banners/banner-image2.jpg"
          alt="Excellence Background"
          fill
          className="object-cover object-center"
          priority
        />
      </motion.div>
      
      {/* Optimized Overlay (Removed backdrop-blur for performance) */}
      <div className="absolute inset-0 bg-black/40 transition-all duration-700" />

      {/* Background Texture/Pattern */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(white 1px, transparent 1px)', backgroundSize: '32px 32px' }} />

      {/* Left Image (Random Service: Gift Set) */}
      <motion.div 
        style={{ rotate: leftImageRotate, y: leftImageY }}
        initial={{ opacity: 0, x: -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="absolute hidden sm:block left-4 md:left-[8%] lg:left-[15%] w-[170px] h-[170px] md:w-[240px] md:h-[240px] z-10 pointer-events-none will-change-transform"
      >
        <div className="relative w-full h-full shadow-[0_20px_40px_-10px_rgba(0,0,0,0.5)] rounded-2xl overflow-hidden border-[6px] border-white/95">
          <Image
            src="/services/gift-set.jpg"
            alt="Service Highlight"
            fill
            className="object-cover"
          />
        </div>
      </motion.div>

      {/* Center Text Section */}
      <div className="relative z-20 flex flex-col items-center justify-center text-center px-4 w-full max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="will-change-transform"
        >
          <h3 className="text-[12px] sm:text-[14px] md:text-[18px] lg:text-[20px] font-black text-white/80 tracking-[0.5em] uppercase mb-1 leading-none drop-shadow-md">
            IT'S ALL ABOUT
          </h3>
          <h2 className="text-[32px] sm:text-[48px] md:text-[64px] lg:text-[86px] font-black text-white tracking-tighter uppercase leading-[0.85] transform scale-y-110 origin-center drop-shadow-xl">
            EXCELLENCE<span className="text-cyan-400">!</span>
          </h2>
        </motion.div>
      </div>

      {/* Right Image (Random Service: Note Book) */}
      <motion.div 
        style={{ rotate: rightImageRotate, y: rightImageY }}
        initial={{ opacity: 0, x: 60 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="absolute hidden sm:block right-4 md:right-[8%] lg:left-auto lg:right-[15%] w-[180px] h-[180px] md:w-[260px] md:h-[260px] z-10 pointer-events-none will-change-transform"
      >
        <div className="relative w-full h-full shadow-[0_20px_40px_-10px_rgba(0,0,0,0.5)] rounded-2xl overflow-hidden border-[6px] border-white/95">
          <Image
            src="/services/note-book.jpg"
            alt="Service Highlight"
            fill
            className="object-cover"
          />
        </div>
      </motion.div>

      {/* Subtle Depth Overlays */}
      <div className="absolute inset-x-0 top-0 h-10 bg-gradient-to-b from-black/10 to-transparent pointer-events-none" />
      <div className="absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-black/10 to-transparent pointer-events-none" />
    </section>
  );
}
