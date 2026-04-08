"use client";

import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

const googleReviews = [
  {
    name: "Athi Rokith",
    initial: "A",
    bgColor: "bg-[#e8701a]",
    time: "1 year ago",
    text: "Your approach, the quality of the items, and the fast delivery are all great. World-class service! 👍👍👍",
  },
  {
    name: "Annette Engelbrecht",
    initial: "A",
    bgColor: "bg-[#e15031]",
    time: "1 year ago",
    text: "Great service, I ordered with limited time and they went over and beyond to assist me. Price was also really good.",
  },
  {
    name: "KUO LI",
    initial: "K",
    bgColor: "bg-[#e87717]",
    time: "1 year ago",
    text: "Very good quality and excellent service. Highly recommended for corporate printing.",
  }
];

export default function GoogleReviews() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background Polish */}
      <div className="absolute inset-0 opacity-[0.012] pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(#146b9a 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

      <div className="max-w-[1300px] mx-auto px-6 relative z-10">
        
        {/* Header - Consistent with Section Themes */}
        <div className="flex flex-col items-center text-center mb-20 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-[48px] font-extrabold leading-[1.1] tracking-tight text-[#0d2b3e] mb-4">
              Your Love{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#146b9a] to-[#00a9e0]">
                Fuels Us.
              </span>
            </h2>
            <div className="flex gap-1.5 text-amber-400 justify-center mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} fill="currentColor" size={24} className="stroke-none" />
              ))}
            </div>
            <p className="text-sm md:text-base text-slate-500/90 font-medium leading-relaxed max-w-2xl mx-auto">
               Trusted by hundreds of businesses to deliver high-quality printing solutions with speed and precision.
            </p>
          </motion.div>
        </div>

        {/* Main Content Layout */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12">
          
          {/* Overall Rating Left Block */}
          <div className="flex flex-col items-center min-w-[200px] pt-4">
             <div className="bg-slate-50 rounded-3xl p-8 border border-slate-100 flex flex-col items-center w-full shadow-sm">
                <h3 className="text-[16px] font-black text-slate-800 mb-2 tracking-widest uppercase">EXCELLENT</h3>
                <div className="text-4xl font-extrabold text-[#0d2b3e] mb-2 tracking-tighter">4.9/5</div>
                <div className="flex gap-1 text-amber-400 mb-4">
                   {[...Array(5)].map((_, i) => (
                    <Star key={i} fill="currentColor" size={16} className="stroke-none" />
                   ))}
                </div>
                <p className="text-[11px] text-slate-400 font-bold uppercase tracking-widest">Based on 54 reviews</p>
                <div className="mt-8 opacity-40 hover:opacity-80 transition-opacity grayscale">
                   {/* Google Text Logo styling */}
                   <div className="flex items-center tracking-tighter text-[24px] font-bold">
                    <span className="text-slate-800">Google</span>
                   </div>
                </div>
             </div>
          </div>

          {/* Reviews Cards Container */}
          <div className="relative flex items-center w-full max-w-[900px]">
            <div className="flex flex-row overflow-x-auto snap-x snap-mandatory gap-6 w-full px-2 py-4 no-scrollbar pb-6">
              {googleReviews.map((review, idx) => (
                <motion.div 
                  key={idx} 
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="w-[280px] shrink-0 snap-center bg-white rounded-2xl p-7 text-left flex flex-col items-start shadow-[0_4px_20px_-10px_rgba(0,0,0,0.06)] border border-slate-100"
                >
                  <div className="flex items-center justify-between w-full mb-6">
                    <div className="flex items-center gap-3">
                      <div className={`w-9 h-9 rounded-full flex items-center justify-center text-white font-bold text-sm ${review.bgColor}`}>
                        {review.initial}
                      </div>
                      <div className="flex flex-col">
                        <span className="text-[13px] font-extrabold text-[#0d2b3e] leading-tight">
                          {review.name}
                        </span>
                        <span className="text-[11px] text-slate-400 font-bold uppercase tracking-tight mt-0.5">
                          {review.time}
                        </span>
                      </div>
                    </div>
                    <span className="text-slate-100 shrink-0">
                      <svg className="w-4 h-4" viewBox="0 0 24 24"><path fill="currentColor" d="M21.35,11.1H12.18V13.83H18.69C18.36,17.64 15.19,19.27 12.19,19.27C8.36,19.27 5,16.25 5,12C5,7.9 8.2,4.73 12.2,4.73C15.29,4.73 17.1,6.7 17.1,6.7L19,4.72C19,4.72 16.56,2 12.1,2C6.42,2 2.03,6.8 2.03,12C2.03,17.05 6.16,22 12.25,22C17.6,22 21.5,18.33 21.5,12.91C21.5,11.76 21.35,11.1 21.35,11.1V11.1Z" /></svg>
                    </span>
                  </div>

                  <div className="flex gap-[1px] text-amber-400 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} fill="currentColor" size={12} className="stroke-none" />
                    ))}
                  </div>

                  <p className="text-slate-500 text-[13.5px] leading-relaxed font-medium">
                    {review.text}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
