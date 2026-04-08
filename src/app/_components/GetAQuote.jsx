"use client";

import { motion } from 'framer-motion';

export default function GetAQuote() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background Polish */}
      <div className="absolute inset-0 opacity-[0.012] pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(#146b9a 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        <motion.div 
           initial={{ opacity: 0, scale: 0.98 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
           className="rounded-[3rem] overflow-hidden bg-gradient-to-br from-[#0d2b3e] to-[#146b9a] shadow-[0_30px_60px_-15px_rgba(13,43,62,0.3)] flex flex-col md:flex-row p-8 md:p-14 gap-10 md:gap-16 items-center"
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

          {/* Right side: Form Container */}
          <div className="flex-[1.1] flex flex-col gap-4 w-full max-w-[500px] ml-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <input 
                type="text" 
                placeholder="Name" 
                className="flex-1 bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-[14px] outline-none focus:bg-white/10 focus:border-white/20 placeholder:text-white/30 text-white transition-all font-medium"
              />
              <input 
                type="email" 
                placeholder="Email address" 
                className="flex-1 bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-[14px] outline-none focus:bg-white/10 focus:border-white/20 placeholder:text-white/30 text-white transition-all font-medium"
              />
            </div>
            
            <input 
              type="tel" 
              placeholder="Phone number" 
              className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-[14px] outline-none focus:bg-white/10 focus:border-white/20 placeholder:text-white/30 text-white transition-all font-medium"
            />
            
            <textarea 
              placeholder="How can we help you?" 
              rows="4"
              className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-[14px] outline-none focus:bg-white/10 focus:border-white/20 placeholder:text-white/30 text-white resize-none transition-all font-medium"
            ></textarea>
            
            <div className="mt-2">
              <button 
                className="w-full bg-white text-[#0d2b3e] font-black uppercase tracking-widest text-[13px] py-4 rounded-2xl hover:bg-white/90 transition-all shadow-xl"
              >
                Send Request
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
