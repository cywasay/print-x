"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function GetAQuote() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background Polish */}
      <div className="absolute inset-0 opacity-[0.012] pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(#0F6393 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        <motion.div 
           initial={{ opacity: 0, scale: 0.98 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
           className="rounded-[3rem] overflow-hidden bg-gradient-to-br from-[#0F6393] to-[#0F6393] shadow-[0_30px_60px_-15px_rgba(15,99,147,0.3)] flex flex-col md:flex-row p-8 md:p-14 gap-10 md:gap-16 items-center"
        >
          {/* Left side: Text content */}
          <div className="flex-1 flex flex-col justify-center text-white h-full">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight leading-[1.1]">
              Get a <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-amber-400">Quote.</span>
            </h2>
            <p className="text-base leading-relaxed text-blue-50/80 font-medium md:pr-10">
              Our expert team is here to assist you with high-quality corporate 
              branding solutions. Personalized, professional, and delivered with 
              unmatched precision.
            </p>
            <div className="mt-10 flex items-center gap-4">
               <div className="w-12 h-px bg-white/20" />
               <p className="text-[11px] font-black uppercase tracking-[0.3em] text-white/40">Trusted by 500+ Brands</p>
            </div>
          </div>

          {/* Right side: CTA Container */}
          <div className="flex-[0.8] flex flex-col gap-6 w-full max-w-[400px] ml-auto items-center text-center">
             <div className="bg-white/10 backdrop-blur-md p-8 rounded-[2rem] border border-white/20 w-full">
                <h3 className="text-xl font-bold text-white mb-4">Fast & Accurate Builder</h3>
                <p className="text-blue-50/70 text-sm mb-8 leading-relaxed">
                  Use our interactive quote builder to select styles, sizes, and quantities for an instant estimate.
                </p>
                <Link 
                  href="/quote"
                  className="w-full bg-white text-[#0F6393] flex items-center justify-center font-black uppercase tracking-widest text-[13px] py-4 rounded-2xl hover:bg-blue-50 transition-all shadow-xl group"
                >
                  Start My Quote 
                  <motion.span 
                    animate={{ x: [0, 5, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                    className="ml-2"
                  >
                    →
                  </motion.span>
                </Link>
             </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
