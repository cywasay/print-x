"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Services() {
  return (
    <div className="flex flex-col mb-16">
      <section className="py-12 bg-[#f8fafc] border-y border-slate-200/50 flex flex-col items-center text-center w-full relative overflow-hidden">
        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 opacity-[0.01] pointer-events-none" 
             style={{ backgroundImage: 'radial-gradient(#146b9a 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
        
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative z-10 px-6 max-w-xl mx-auto"
        >
          <p className="text-[14px] font-extrabold text-[#0d2b3e] uppercase tracking-[0.2em] mb-4">Personalized Experience</p>
          <div className="w-12 h-1 bg-[#146b9a]/20 mx-auto mb-6 rounded-full" />
          
          <Link 
            href="#" 
            className="inline-block w-full max-w-[280px] py-4 bg-[#0d2b3e] text-white rounded-2xl shadow-xl hover:shadow-[#0d2b3e]/20 transition-all duration-300 text-[13px] font-black uppercase tracking-widest"
          >
            Sign in securely
          </Link>
          
          <p className="text-[12px] text-slate-500 font-medium mt-6">
            New corporate client? <Link href="#" className="text-[#146b9a] hover:underline font-bold">Start your journey here.</Link>
          </p>
        </motion.div>
      </section>
    </div>
  );
}
