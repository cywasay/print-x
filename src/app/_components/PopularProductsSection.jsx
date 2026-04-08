"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';

const popularProductsData = [
  { name: "Premium Sublimation Lanyards", img: "/hero_gifts_1775637506200.png" },
  { name: "Barlow PU Notebooks with Pocket", img: "/hero_products_1775637475637.png" },
  { name: "Metal Ballpen - Deluxe Series", img: "/hero_products_1775637475637.png" },
  { name: "Round Epoxy Lapel Pins", img: "/hero_gifts_1775637506200.png" },
  { name: "Custom Branded Lapel Badges", img: "/hero_gifts_1775637506200.png" },
  { name: "Double Clip Lanyards", img: "/hero_gifts_1775637506200.png" },
  { name: "Full Set Sublimation Pack", img: "/hero_gifts_1775637506200.png" },
  { name: "Advanced USB Flash Drives", img: "/hero_printing_1775637492071.png" }
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

export default function PopularProductsSection() {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background Polish */}
      <div className="absolute inset-0 opacity-[0.012] pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(#146b9a 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

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
              Popular{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#146b9a] to-[#00a9e0]">
                Products.
              </span>
            </h2>
            <p className="text-sm md:text-base text-slate-500/90 font-medium leading-relaxed">
              Discover our most sought-after products, favored by top corporate brands for their quality and durability.
            </p>
          </motion.div>
        </div>

        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {popularProductsData.map((item, idx) => (
            <motion.div key={idx} variants={itemVariants} className="flex flex-col items-start group">
              <div className="w-full aspect-square bg-slate-50 rounded-2xl border border-slate-100 p-6 flex items-center justify-center relative mb-4 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.06)] transition-all duration-500">
                <div className="relative w-full h-full transition-transform duration-700">
                  <Image 
                    src={item.img} 
                    alt={item.name} 
                    fill 
                    className="object-contain drop-shadow-sm" 
                  />
                </div>
              </div>
              
              <h3 className="text-[#0d2b3e] text-[14.5px] font-bold leading-tight mb-4 group-hover:text-[#146b9a] transition-colors line-clamp-1">
                {item.name}
              </h3>
              
              <button className="bg-slate-100 hover:bg-[#146b9a] hover:text-white text-slate-600 text-[11px] font-black uppercase tracking-widest px-4 py-2.5 rounded-lg transition-all shadow-sm">
                Get Quote
              </button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
