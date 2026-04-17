"use client";

import { motion } from "framer-motion";
import { CopyPlus, FileCheck, Hammer, Truck } from "lucide-react";

const STEPS = [
  {
    icon: <CopyPlus size={32} strokeWidth={1.5} />,
    title: "1. Show Us Your Idea",
    desc: "Share your design or logo, no matter how rough. If you don't have a design, our professional team will create a custom artwork for free."
  },
  {
    icon: <FileCheck size={32} strokeWidth={1.5} />,
    title: "2. Approve Digital Mockup",
    desc: "We will send you a highly detailed, 100% accurate digital proof of your pin badge. You can request unlimited revisions until it's perfect."
  },
  {
    icon: <Hammer size={32} strokeWidth={1.5} />,
    title: "3. Craft & Production",
    desc: "Once approved, your pins move to manufacturing. We use premium grade materials and meticulous die-casting/enameling processes."
  },
  {
    icon: <Truck size={32} strokeWidth={1.5} />,
    title: "4. Quality Check & Ship",
    desc: "Every pin undergoes rigorous quality assurance. After passing QC, we provide super-fast worldwide shipping directly to your door."
  }
];

export default function HowItWorks() {
  return (
    <section className="py-24 bg-[#0F608E] relative overflow-hidden">
      {/* Creative Background Elements */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(#00AEEF 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#0F6393]/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[#00AEEF]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="mb-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <span className="text-[12px] font-black tracking-[0.4em] text-[#00AEEF] uppercase mb-4 block">Hassle-Free Process</span>
            <h2 className="text-4xl md:text-5xl lg:text-[56px] font-bold leading-[1.05] tracking-tight text-white mb-6">
              Easy Process to Order{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-[#00AEEF]">
                Custom Pins.
              </span>
            </h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-slate-400 text-lg md:text-xl font-medium max-w-2xl mx-auto"
            >
              Ordering your custom enamel pins is quick, cheap, and entirely hassle-free from start to finish!
            </motion.p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {STEPS.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white rounded-[32px] p-8 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.3)] hover:shadow-[0_40px_80px_-15px_rgba(0,0,0,0.5)] transition-all duration-500 relative group hover:-translate-y-3"
            >
              {/* Floating Step Number */}
              <div className="absolute -top-4 -right-4 w-12 h-12 bg-[#00AEEF] text-white rounded-2xl flex items-center justify-center font-black text-xl shadow-lg transform group-hover:rotate-12 transition-transform">
                {idx + 1}
              </div>

              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#0F6393] to-[#00AEEF] text-white flex items-center justify-center mb-8 shadow-[0_10px_20px_-5px_rgba(0,174,239,0.2)] group-hover:scale-110 transition-transform duration-300">
                {step.icon}
              </div>
              
              <h3 className="text-xl font-bold text-[#0F172A] mb-4 leading-tight">
                {step.title.split(". ")[1]}
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed font-medium">
                {step.desc}
              </p>
              
              {/* Subtle hover indicator */}
              <div className="mt-6 w-8 h-1 bg-[#00AEEF] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
