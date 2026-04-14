"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';

const clientLogos = [
  "/lapel-categories/hard-enamel-pin.jpg",
  "/lapel-categories/soft-enamel-pin.jpg",
  "/lapel-categories/die-cast-pin.jpg",
  "/lapel-categories/3d-cast-pin.jpg",
  "/lapel-categories/epoxy-pin.jpg",
  "/lapel-categories/custom-UV-pin.jpg",
  "/lapel-categories/other-pins-pin.jpg",
];

export default function PrestigiousClients() {
  return (
    <section className="py-12 md:py-24 bg-white border-y border-slate-100 relative overflow-hidden">
      {/* Background Decorative Accent */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-32 md:w-64 h-32 md:h-64 bg-blue-50/50 rounded-full blur-[60px] md:blur-[100px] pointer-events-none" />
 
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-16 items-center">
          
          {/* Left Column: Brand Statement & Stats */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-[10px] md:text-[12px] font-black tracking-[0.4em] text-[#00AEEF] uppercase mb-3 md:mb-4 block">Proven Track Record</span>
              <h2 className="text-2xl md:text-5xl font-bold leading-[1.2] md:leading-[1.1] tracking-tighter text-[#0F6393] mb-6 md:mb-8">
                Empowering the World's Most <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0F6393] to-[#00AEEF]">Ambitious Brands.</span>
              </h2>
              <p className="text-slate-500 text-sm md:text-lg font-medium leading-relaxed mb-8 md:mb-12 max-w-md">
                We've partnered with industry leaders to deliver high-precision branding solutions that scale with their vision.
              </p>
 
              {/* Stats Row */}
              <div className="grid grid-cols-2 gap-8 md:gap-12 border-t border-slate-100 pt-8 md:pt-12">
                <div>
                  <div className="text-2xl md:text-4xl font-medium text-[#0F6393] mb-1 tracking-tight">500<span className="text-[#00AEEF]">+</span></div>
                  <p className="text-slate-400 font-bold text-[9px] md:text-[11px] uppercase tracking-widest">Global Clients</p>
                </div>
                <div>
                  <div className="text-2xl md:text-4xl font-medium text-[#0F6393] mb-1 tracking-tight">12<span className="text-[#00AEEF]">M</span></div>
                  <p className="text-slate-400 font-bold text-[9px] md:text-[11px] uppercase tracking-widest">Prints Delivered</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Dynamic Logo Marquee */}
          <div className="lg:col-span-7 relative h-[300px] md:h-[500px] flex flex-col justify-center gap-4 md:gap-6 overflow-hidden">
            {/* Top Row - Scroll Left */}
            <div className="flex gap-4 md:gap-6 overflow-hidden group">
              <motion.div 
                className="flex gap-4 md:gap-6 shrink-0"
                animate={{ x: [0, -1000] }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              >
                {[...clientLogos, ...clientLogos].map((logo, idx) => (
                  <div key={idx} className="w-[100px] h-[100px] md:w-[200px] md:h-[200px] rounded-2xl md:rounded-[2.5rem] bg-[#fcfdfe] border border-slate-100 flex items-center justify-center p-0 overflow-hidden hover:border-[#00AEEF]/30 transition-all duration-500 shadow-sm hover:shadow-xl group/logo">
                    <div className="relative w-full h-full opacity-70 group-hover:opacity-100 transition-opacity duration-500">
                      <Image src={logo} alt="Client" fill sizes="(max-width: 768px) 100px, 200px" className="object-cover group-hover:scale-110 transition-transform duration-700" />
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>
 
            {/* Bottom Row - Scroll Right */}
            <div className="flex gap-4 md:gap-6 overflow-hidden">
               <motion.div 
                className="flex gap-4 md:gap-6 shrink-0"
                animate={{ x: [-1000, 0] }}
                transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
              >
                {[...clientLogos, ...clientLogos].map((logo, idx) => (
                  <div key={idx} className="w-[100px] h-[100px] md:w-[200px] md:h-[200px] rounded-2xl md:rounded-[2.5rem] bg-[#fcfdfe] border border-slate-100 flex items-center justify-center p-0 overflow-hidden hover:border-[#00AEEF]/30 transition-all duration-500 shadow-sm hover:shadow-xl group/logo">
                    <div className="relative w-full h-full opacity-70 group-hover:opacity-100 transition-opacity duration-500">
                      <Image src={logo} alt="Client" fill sizes="(max-width: 768px) 100px, 200px" className="object-cover group-hover:scale-110 transition-transform duration-700" />
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>
 
            {/* Masking Gradients for Marquee */}
            <div className="absolute inset-y-0 left-0 w-20 md:w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-20 md:w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
          </div>

        </div>
      </div>
    </section>
  );
}
