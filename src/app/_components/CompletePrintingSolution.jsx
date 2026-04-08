"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const solutionsData = [
  {
    title: "Large Format Printing",
    desc: "Eye-catching banners and vinyl prints delivered with speed and precision.",
    img: "/hero_printing_1775637492071.png",
  },
  {
    title: "Digital & Offset Printing",
    desc: "High-definition professional prints for all your corporate stationery and marketing collateral.",
    img: "/hero_products_1775637475637.png",
  },
  {
    title: "Custom Promotional Gifts",
    desc: "Bespoke branded gifts meticulously crafted to leave a lasting impact.",
    img: "/hero_gifts_1775637506200.png",
  },
  {
    title: "Expert Graphic Design",
    desc: "Creative, world-class designs that bring your brand's unique vision to life.",
    img: "/hero_products_1775637475637.png",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.05, delayChildren: 0.1 },
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

export default function CompletePrintingSolution() {
  return (
    <section className="py-20 bg-[#f8fafc] border-y border-slate-200/50 relative overflow-hidden">
      {/* Background Polish */}
      <div className="absolute inset-0 opacity-[0.012] pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(#146b9a 1px, transparent 1px)', backgroundSize: '32px 32px' }} />

      <div className="max-w-[1300px] mx-auto px-6 relative z-10">
        
        {/* Header - Consistent with Section Themes */}
        <div className="flex flex-col items-center text-center mb-16 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-[48px] font-extrabold leading-[1.1] tracking-tight text-[#0d2b3e] mb-4">
              Complete Printing{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#146b9a] to-[#00a9e0]">
                Solutions.
              </span>
            </h2>
            <p className="text-sm md:text-base text-slate-500/90 font-medium leading-relaxed">
              From large-format billboards to professional corporate stationery, we deliver precision at every scale.
            </p>
          </motion.div>
        </div>

        {/* Compact Grid */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {solutionsData.map((item, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="bg-white rounded-2xl p-6 flex flex-col items-center text-center shadow-[0_4px_20px_-10px_rgba(0,0,0,0.06)] hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] transition-all duration-500 hover:-translate-y-1.5 border border-slate-100/50"
            >
              <h3 className="text-[17px] font-bold text-[#0d2b3e] leading-snug mb-2 group-hover:text-[#146b9a] transition-colors">
                {item.title}
              </h3>
              <p className="text-slate-500 text-[13px] leading-relaxed mb-6 line-clamp-2 font-medium">
                {item.desc}
              </p>

              <div className="w-[140px] h-[140px] rounded-full bg-slate-50 flex items-center justify-center relative mb-6 border border-slate-100/50 shadow-inner overflow-hidden">
                <div className="relative w-[100px] h-[100px] transform hover:scale-110 transition-transform duration-700">
                  <Image
                    src={item.img}
                    alt={item.title}
                    fill
                    className="object-contain drop-shadow-md"
                  />
                </div>
              </div>

              <a
                href="#"
                className="mt-auto flex items-center gap-2 text-[#b0b9c1] hover:text-[#146b9a] font-bold text-[12px] uppercase tracking-widest transition-all group"
              >
                <span className="relative">
                  Experience Now
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#146b9a]/20 group-hover:w-full transition-all duration-300"></span>
                </span>
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
