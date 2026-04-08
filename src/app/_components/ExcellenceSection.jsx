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

  return (
    <section 
      ref={containerRef}
      className="relative w-full h-[160px] md:h-[220px] lg:h-[260px] bg-[#f8fafc] overflow-hidden flex items-center justify-center border-y border-slate-200/40"
    >
      {/* Background Texture/Pattern */}
      <div className="absolute inset-0 opacity-[0.012] pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(#146b9a 1px, transparent 1px)', backgroundSize: '20px 20px' }} />

      {/* Left Image (Branded Flatlay) */}
      <motion.div 
        style={{ rotate: leftImageRotate, y: leftImageY }}
        className="absolute -left-12 sm:left-4 md:left-[12%] lg:left-[18%] w-[130px] h-[130px] sm:w-[170px] sm:h-[170px] md:w-[220px] md:h-[220px] z-10 pointer-events-none"
      >
        <div className="relative w-full h-full transform shadow-[0_20px_40px_-10px_rgba(0,0,0,0.1)] rounded-lg overflow-hidden border-[4px] border-white">
          <Image
            src="/corporate_gift_flatlay_1775649747680.png"
            alt="Corporate Gift Flatlay"
            fill
            className="object-cover"
          />
        </div>
      </motion.div>

      {/* Center Text Section */}
      <div className="relative z-20 flex flex-col items-center justify-center text-center px-4 w-full max-w-xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h3 className="text-[11px] sm:text-[13px] md:text-[16px] lg:text-[18px] font-black text-[#64748b] tracking-[0.4em] uppercase mb-0.5 leading-none">
            IT'S ALL ABOUT
          </h3>
          <h2 className="text-[30px] sm:text-[44px] md:text-[56px] lg:text-[72px] font-extrabold text-[#146b9a] tracking-tighter uppercase leading-[0.85] transform scale-y-110 origin-center">
            EXCELLENCE<span className="text-[#00a9e0]">!</span>
          </h2>
        </motion.div>
      </div>

      {/* Right Image (Production Floor) */}
      <motion.div 
        style={{ rotate: rightImageRotate, y: rightImageY }}
        className="absolute -right-14 sm:right-4 md:right-[12%] lg:right-[18%] w-[140px] h-[140px] sm:w-[180px] sm:h-[180px] md:w-[240px] md:h-[240px] z-10 pointer-events-none"
      >
        <div className="relative w-full h-full transform shadow-[0_20px_40px_-10px_rgba(0,0,0,0.1)] rounded-lg overflow-hidden border-[4px] border-white">
          <Image
            src="/printing_facility_action_1775649793909.png"
            alt="Advanced Printing Facility"
            fill
            className="object-cover"
          />
        </div>
      </motion.div>

      {/* Subtle Depth Overlay */}
      <div className="absolute inset-x-0 top-0 h-4 bg-gradient-to-b from-white to-transparent opacity-40 pointer-events-none" />
      <div className="absolute inset-x-0 bottom-0 h-4 bg-gradient-to-t from-white to-transparent opacity-40 pointer-events-none" />
    </section>
  );
}
