"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';

const popularProductsData = [
  { name: "Premium Hard Enamel Pins", img: "/services/note-book.jpg" },
  { name: "Custom 3D Die-Cast Pins", img: "/services/special-pens.jpg" },
  { name: "Glitter Soft Enamel Pins", img: "/services/gift-set.jpg" },
  { name: "Round Epoxy Lapel Pins", img: "/services/lapel-pin.jpg" },
  { name: "Custom Branded Metal Badges", img: "/services/drinkware.jpg" },
  { name: "Offset Printed Pins", img: "/services/laneyrd.jpg" },
  { name: "Custom Baseball Pins", img: "/services/trophies.jpg" },
  { name: "Custom Hat Pins", img: "/services/tech-gear.jpg" }
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
    <section className="py-12 md:py-20 bg-[#f8fafc] border-y border-slate-200/50 relative overflow-hidden">
      {/* Background Polish */}
      <div className="absolute inset-0 opacity-[0.012] pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(#0F6393 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
 
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header - Consistent with Section Themes */}
        <div className="flex flex-col items-center text-center mb-10 md:mb-16 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-2xl md:text-4xl lg:text-[48px] font-extrabold leading-[1.2] md:leading-[1.1] tracking-tight text-[#0F6393] mb-3 md:mb-4">
              Popular{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0F6393] to-[#00AEEF]">
                Pins.
              </span>
            </h2>
            <p className="text-[13px] md:text-base text-slate-500/90 font-medium leading-relaxed px-2 md:px-0">
              Discover our most sought-after custom pins, favored by top corporate brands for their vibrant details and durability.
            </p>
          </motion.div>
        </div>

        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {popularProductsData.map((item, idx) => (
            <motion.div key={idx} variants={itemVariants} className="flex flex-col items-center sm:items-start group">
              <div className="w-full aspect-square bg-slate-50 rounded-2xl border border-slate-100 p-4 md:p-6 flex items-center justify-center relative mb-3 md:mb-4 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.06)] transition-all duration-500">
                <div className="relative w-full h-full transition-transform duration-700">
                  <Image 
                    src={item.img} 
                    alt={item.name} 
                    fill 
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 25vw"
                    className="object-contain drop-shadow-sm" 
                  />
                </div>
              </div>
              
              <h3 className="text-[#0F6393] text-[13px] md:text-[14.5px] font-bold leading-tight mb-3 md:mb-4 group-hover:text-[#0F6393] transition-colors line-clamp-1 text-center sm:text-left">
                {item.name}
              </h3>
              
              <button className="w-full sm:w-auto bg-slate-100 hover:bg-[#0F6393] hover:text-white text-slate-600 text-[10px] md:text-[11px] font-black uppercase tracking-widest px-4 py-2.5 rounded-lg transition-all shadow-sm">
                Get Quote
              </button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
