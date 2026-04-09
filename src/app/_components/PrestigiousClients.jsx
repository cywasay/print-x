"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';

const clientLogos = [
  "/services/drinkware.jpg",
  "/services/gift-set.jpg",
  "/services/laneyrd.jpg",
  "/services/lapel-pin.jpg",
  "/services/note-book.jpg",
  "/services/special-pens.jpg",
  "/services/tech-gear.jpg",
  "/services/trophies.jpg",
];

export default function PrestigiousClients() {
  return (
    <section className="py-24 bg-white border-y border-slate-100 relative overflow-hidden">
      {/* Background Decorative Accent */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-64 h-64 bg-blue-50/50 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Column: Brand Statement & Stats */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-[12px] font-black tracking-[0.4em] text-[#51A9FF] uppercase mb-4 block">Proven Track Record</span>
              <h2 className="text-4xl md:text-5xl font-bold leading-[1.1] tracking-tighter text-[#0d2b3e] mb-8">
                Empowering the World's Most <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#146b9a] to-[#00a9e0]">Ambitious Brands.</span>
              </h2>
              <p className="text-slate-500 text-lg font-medium leading-relaxed mb-12 max-w-md">
                We've partnered with industry leaders to deliver high-precision branding solutions that scale with their vision.
              </p>

              {/* Stats Row */}
              <div className="grid grid-cols-2 gap-12 border-t border-slate-100 pt-12">
                <div>
                  <div className="text-4xl font-medium text-[#0d2b3e] mb-1 tracking-tight">500<span className="text-[#51A9FF]">+</span></div>
                  <p className="text-slate-400 font-bold text-[11px] uppercase tracking-widest">Global Clients</p>
                </div>
                <div>
                  <div className="text-4xl font-medium text-[#0d2b3e] mb-1 tracking-tight">12<span className="text-[#51A9FF]">M</span></div>
                  <p className="text-slate-400 font-bold text-[11px] uppercase tracking-widest">Prints Delivered</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Dynamic Logo Marquee */}
          <div className="lg:col-span-7 relative h-[500px] flex flex-col justify-center gap-6 overflow-hidden">
            {/* Top Row - Scroll Left */}
            <div className="flex gap-6 overflow-hidden group">
              <motion.div 
                className="flex gap-6 shrink-0"
                animate={{ x: [0, -1000] }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              >
                {[...clientLogos, ...clientLogos].map((logo, idx) => (
                  <div key={idx} className="w-[160px] h-[160px] md:w-[200px] md:h-[200px] rounded-[2.5rem] bg-[#fcfdfe] border border-slate-100 flex items-center justify-center p-10 hover:border-[#51A9FF]/30 transition-all duration-500 shadow-sm hover:shadow-xl group/logo">
                    <div className="relative w-full h-full opacity-40 group-hover/logo:opacity-100 transition-opacity grayscale group-hover/logo:grayscale-0 scale-90 group-hover/logo:scale-100 duration-500">
                      <Image src={logo} alt="Client" fill className="object-contain mix-blend-multiply" />
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Bottom Row - Scroll Right */}
            <div className="flex gap-6 overflow-hidden">
               <motion.div 
                className="flex gap-6 shrink-0"
                animate={{ x: [-1000, 0] }}
                transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
              >
                {[...clientLogos, ...clientLogos].map((logo, idx) => (
                  <div key={idx} className="w-[160px] h-[160px] md:w-[200px] md:h-[200px] rounded-[2.5rem] bg-[#fcfdfe] border border-slate-100 flex items-center justify-center p-10 hover:border-[#51A9FF]/30 transition-all duration-500 shadow-sm hover:shadow-xl group/logo">
                    <div className="relative w-full h-full opacity-40 group-hover/logo:opacity-100 transition-opacity grayscale group-hover/logo:grayscale-0 scale-90 group-hover/logo:scale-100 duration-500">
                      <Image src={logo} alt="Client" fill className="object-contain mix-blend-multiply" />
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Masking Gradients for Marquee */}
            <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
          </div>

        </div>
      </div>
    </section>
  );
}
