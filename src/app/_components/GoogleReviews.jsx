"use client";

import { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const reviewsData = [
  {
    name: "Athi Rokith",
    initial: "A",
    bgColor: "bg-[#e8701a]",
    time: "1 year ago",
    text: "Your approach, the quality of the items, and the fast delivery are all great. World-class service and unmatched professionalism!",
    rating: 5,
  },
  {
    name: "Annette Engelbrecht",
    initial: "A",
    bgColor: "bg-[#e15031]",
    time: "1 year ago",
    text: "Great service, I ordered with limited time and they went over and beyond to assist me. Price was also really good.",
    rating: 5,
  },
  {
    name: "KUO LI",
    initial: "K",
    bgColor: "bg-[#e87717]",
    time: "1 year ago",
    text: "Very good quality and excellent service. Highly recommended for corporate printing solutions in Dubai and beyond.",
    rating: 5,
  },
  {
    name: "Sarah J.",
    initial: "S",
    bgColor: "bg-[#146b9a]",
    time: "6 months ago",
    text: "The bespoke gift sets exceeded our expectations. The attention to detail in packaging and finish is simply world-class.",
    rating: 5,
  }
];

export default function GoogleReviews() {
  const [active, setActive] = useState(0);

  const next = () => setActive((prev) => (prev + 1) % reviewsData.length);
  const prev = () => setActive((prev) => (prev - 1 + reviewsData.length) % reviewsData.length);

  return (
    <section className="py-24 bg-[#f8fafc] border-y border-slate-200/50 relative overflow-hidden">
      {/* Background Polish */}
      <div className="absolute inset-0 opacity-[0.015] pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(#146b9a 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        
        {/* Modern Header */}
        <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-8">
           <div className="max-w-xl">
              <span className="text-[12px] font-black tracking-[0.4em] text-[#51A9FF] uppercase mb-4 block">Testimonials</span>
              <h2 className="text-4xl md:text-5xl lg:text-[56px] font-bold tracking-tighter text-[#0d2b3e] leading-none mb-6">
                Voices Of <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#146b9a] to-[#00a9e0]">Trust.</span>
              </h2>
           </div>

           <div className="flex items-center gap-6 pb-2">
              <div className="text-right hidden sm:block">
                 <div className="text-2xl font-black text-[#0d2b3e]">4.9/5</div>
                 <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Google Rating</div>
              </div>
              <div className="flex gap-2">
                 <button onClick={prev} className="w-14 h-14 rounded-full border border-slate-200 flex items-center justify-center hover:bg-white hover:shadow-xl hover:border-blue-100 transition-all group">
                    <ChevronLeft className="text-slate-400 group-hover:text-[#146b9a] transition-colors" />
                 </button>
                 <button onClick={next} className="w-14 h-14 rounded-full border border-slate-200 flex items-center justify-center hover:bg-white hover:shadow-xl hover:border-blue-100 transition-all group">
                    <ChevronRight className="text-slate-400 group-hover:text-[#146b9a] transition-colors" />
                 </button>
              </div>
           </div>
        </div>

        {/* 3D Spotlight Carousel */}
        <div className="relative h-[550px] md:h-[450px] flex items-center justify-center">
           <AnimatePresence mode="wait">
              {reviewsData.map((review, idx) => {
                 if (idx !== active) return null;
                 return (
                    <motion.div
                       key={idx}
                       initial={{ opacity: 0, x: 100, scale: 0.95 }}
                       animate={{ opacity: 1, x: 0, scale: 1 }}
                       exit={{ opacity: 0, x: -100, scale: 0.95 }}
                       transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                       className="absolute w-full max-w-[540px] h-full"
                    >
                       <div className="w-full h-full bg-white rounded-[3rem] p-8 md:p-12 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.08)] border border-white flex flex-col items-center text-center relative overflow-hidden group">
                          {/* Giant Quote Icon */}
                          <div className="absolute top-[-5%] left-[-5%] text-slate-50 opacity-[0.4] pointer-events-none">
                             <Quote size={200} fill="currentColor" />
                          </div>

                          <div className="relative z-10 flex flex-col items-center">
                             <div className="flex gap-1 text-amber-400 mb-6">
                                {[...Array(5)].map((_, i) => <Star key={i} fill="currentColor" size={20} className="stroke-none" />)}
                             </div>

                             <p className="text-[#0d2b3e] text-lg md:text-xl font-medium leading-relaxed italic mb-8 max-w-md px-2">
                                "{review.text}"
                             </p>

                             <div className="flex flex-col items-center">
                                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-white font-bold text-xl shadow-lg ${review.bgColor} mb-4`}>
                                   {review.initial}
                                </div>
                                <h4 className="text-[17px] font-bold text-[#0d2b3e]">{review.name}</h4>
                                <p className="text-[11px] text-slate-400 font-bold uppercase tracking-[0.3em] mt-1">{review.time}</p>
                             </div>
                          </div>
                       </div>
                    </motion.div>
                 );
              })}
           </AnimatePresence>
        </div>

        {/* Small Progress Indicators */}
        <div className="mt-12 flex justify-center gap-3">
           {reviewsData.map((_, idx) => (
              <button 
                 key={idx}
                 onClick={() => setActive(idx)}
                 className={`h-2 rounded-full transition-all duration-500 ${idx === active ? 'w-12 bg-[#146b9a]' : 'w-2 bg-slate-200 hover:bg-slate-300'}`}
              />
           ))}
        </div>
      </div>
    </section>
  );
}
