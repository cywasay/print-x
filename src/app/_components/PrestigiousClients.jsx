"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function PrestigiousClients() {
  return (
    <section className="py-20 bg-[#f8fafc] border-t border-slate-200/50 relative overflow-hidden">
      {/* Background Polish */}
      <div className="absolute inset-0 opacity-[0.012] pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(#146b9a 1px, transparent 1px)', backgroundSize: '32px 32px' }} />

      <div className="max-w-[1300px] mx-auto px-6 relative z-10">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
           className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-[48px] font-extrabold leading-[1.1] tracking-tight text-[#0d2b3e] mb-2">
            Prestigious{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#146b9a] to-[#00a9e0]">
              Clients.
            </span>
          </h2>
          <p className="text-sm md:text-base text-slate-500/90 font-medium">Trusted by industry leaders across the region.</p>
        </motion.div>
        
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
          {[1, 2, 3, 4, 5].map((item) => (
            <motion.div 
               key={item} 
               initial={{ opacity: 0, scale: 0.9 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               transition={{ duration: 0.5, delay: item * 0.1 }}
               className="w-[120px] h-[120px] md:w-[180px] md:h-[180px] bg-white rounded-2xl flex items-center justify-center p-8 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.06)] hover:shadow-[0_15px_30px_-10px_rgba(0,0,0,0.1)] transition-all duration-300 border border-slate-100/50"
            >
              <div className="relative w-full h-full opacity-60 hover:opacity-100 transition-opacity grayscale hover:grayscale-0">
                <Image 
                  src={item % 2 === 0 ? "/hero_gifts_1775637506200.png" : "/hero_printing_1775637492071.png"} 
                  alt={`Client Logo ${item}`} 
                  fill 
                  className="object-contain mix-blend-multiply" 
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
