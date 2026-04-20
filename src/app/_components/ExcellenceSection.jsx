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
      className="relative w-full h-[300px] md:h-[400px] lg:h-[450px] overflow-hidden flex items-center justify-center border-y border-slate-200/40 shadow-inner bg-[#0F6393]"
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
          sizes="100vw"
          className="object-cover object-center"
          priority
        />
      </motion.div>
      
      {/* Enhanced Dark Overlay */}
      <div className="absolute inset-0 bg-[#0F6393]/60 mix-blend-multiply z-[1]" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/60 z-[2]" />

      {/* Background Texture/Pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none z-[3]" 
           style={{ backgroundImage: 'radial-gradient(white 1px, transparent 1px)', backgroundSize: '24px 24px' }} />

      {/* Left Image (Custom Pin) */}
      <motion.div 
        style={{ rotate: leftImageRotate, y: leftImageY }}
        initial={{ opacity: 0, x: -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="absolute hidden lg:block left-[5%] xl:left-[10%] w-[260px] h-[260px] z-10 pointer-events-none will-change-transform"
      >
        <div className="relative w-full h-full shadow-[0_30px_60px_-15px_rgba(0,0,0,0.6)] rounded-3xl overflow-hidden border-[8px] border-white ring-1 ring-black/5">
          <Image
            src="/services/lapel-pin.jpg"
            alt="Custom Pin Example"
            fill
            sizes="260px"
            className="object-cover"
          />
        </div>
      </motion.div>

      {/* Center Text Section - Glassmorphism Box */}
      <div className="relative z-20 flex flex-col items-center justify-center text-center px-4 w-full">
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="bg-black/40 backdrop-blur-xl px-8 py-10 md:px-16 md:py-14 rounded-[2.5rem] border border-white/20 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.7)] flex flex-col items-center relative overflow-hidden"
        >
          {/* Inner Glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none" />
          
          <h3 className="relative z-10 text-[11px] md:text-[15px] font-black text-cyan-400 tracking-[0.6em] uppercase mb-4 leading-none">
            IT'S ALL ABOUT
          </h3>
          <h2 className="relative z-10 text-[42px] sm:text-[64px] md:text-[84px] lg:text-[104px] font-black text-white tracking-tighter uppercase leading-[0.8] transform scale-y-110 origin-center drop-shadow-2xl">
            EXCELLENCE<span className="text-cyan-400">.</span>
          </h2>
          
          <div className="relative z-10 mt-6 h-1 w-24 bg-gradient-to-r from-transparent via-cyan-400 to-transparent rounded-full opacity-50" />
        </motion.div>
      </div>

      {/* Right Image (Tech Gear) */}
      <motion.div 
        style={{ rotate: rightImageRotate, y: rightImageY }}
        initial={{ opacity: 0, x: 60 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="absolute hidden lg:block right-[5%] xl:right-[10%] w-[280px] h-[280px] z-10 pointer-events-none will-change-transform"
      >
        <div className="relative w-full h-full shadow-[0_30px_60px_-15px_rgba(0,0,0,0.6)] rounded-3xl overflow-hidden border-[8px] border-white ring-1 ring-black/5">
          <Image
            src="/services/tech-gear.jpg"
            alt="Custom Badge Example"
            fill
            sizes="280px"
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
