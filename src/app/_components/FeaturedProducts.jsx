'use client';

import Link from "next/link";
import { motion } from "framer-motion";

const offerData = [
  { name: "Note Books" },
  { name: "Lapel Pins" },
  { name: "Drinkware" },
  { name: "Lanyards" },
  { name: "Gift Sets" },
  { name: "Trophies" },
  { name: "Special Pens" },
  { name: "Tech Gear" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export default function FeaturedProducts() {
  return (
    <section className="bg-white py-20 w-full relative overflow-hidden group/section">
      <div className="max-w-[1300px] mx-auto px-6 relative z-10">
        
        {/* Uniform Header (Keeping it consistent with Hero) */}
        <div className="flex flex-col items-center text-center mb-16 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-[48px] font-extrabold leading-[1.1] tracking-tight text-[#0d2b3e] mb-4">
              What We{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#146b9a] to-[#00a9e0]">
                Offer.
              </span>
            </h2>
            
            <p className="text-sm md:text-base text-slate-500/90 font-medium leading-relaxed max-w-2xl mx-auto">
              Premium quality printing and branding solutions meticulously crafted 
              to elevate your presence and leave a lasting impression.
            </p>
          </motion.div>
        </div>

        {/* Compact Cards Grid with Placeholders */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {offerData.map((item, idx) => (
            <motion.div key={idx} variants={itemVariants}>
              <Link
                href="#"
                className="group flex flex-col items-center bg-white rounded-2xl p-5 md:p-6 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.06)] hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] transition-all duration-500 text-center border border-slate-100/50"
              >
                {/* Compact Title */}
                <h3 className="text-[15px] md:text-[17px] font-bold text-[#0d2b3e] mb-6 group-hover:text-[#146b9a] transition-colors duration-300">
                  {item.name}
                </h3>

                {/* Subtile Compact Placeholder */}
                <div className="w-full aspect-square max-w-[100px] md:max-w-[130px] bg-slate-50/80 rounded-xl border border-dashed border-slate-200 flex items-center justify-center group-hover:border-[#146b9a]/20 transition-colors duration-500">
                  <div className="w-6 h-6 border-2 border-slate-200/50 rounded-full opacity-30 group-hover:opacity-50 transition-opacity" />
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
