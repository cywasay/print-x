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
    <section className="py-24 bg-[#0F6393] relative overflow-hidden">
      {/* Background Ornaments */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#0F6393]/20 to-transparent pointer-events-none blur-3xl transform translate-x-1/4" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-gradient-to-t from-[#00AEEF]/10 to-transparent pointer-events-none blur-3xl transform -translate-x-1/4" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <span className="text-[12px] font-black tracking-[0.4em] text-[#00AEEF] uppercase mb-4 block">Hassle-Free Process</span>
            <h2 className="text-4xl md:text-5xl lg:text-[56px] font-bold leading-[1.05] tracking-tight text-white mb-6">
              Easy Process to Order{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-[#00AEEF]">
                Custom Pins.
              </span>
            </h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-white/60 text-lg md:text-xl font-medium max-w-2xl"
            >
              Ordering your custom enamel pins is quick, cheap, and entirely hassle-free from start to finish!
            </motion.p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {STEPS.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white/10 border border-white/20 rounded-[32px] p-8 backdrop-blur-md hover:bg-white/15 hover:border-white/30 transition-all duration-300 relative group shadow-[0_20px_40px_-15px_rgba(0,0,0,0.2)] hover:-translate-y-2"
            >
              {/* Step indicator connecting line (desktop) */}
              {idx !== STEPS.length - 1 && (
                <div className="hidden lg:block absolute top-[4.5rem] -right-3 w-6 h-px bg-white/30 z-0"></div>
              )}

              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#0F6393] to-[#00AEEF] text-white flex items-center justify-center mb-8 shadow-[0_10px_20px_-5px_rgba(0,174,239,0.3)] group-hover:scale-110 group-hover:shadow-[0_15px_30px_-5px_rgba(0,174,239,0.5)] transition-all duration-300 relative z-10">
                {step.icon}
              </div>
              
              <h3 className="text-xl font-bold text-white mb-4 leading-tight">{step.title}</h3>
              <p className="text-white/75 text-sm leading-relaxed font-medium">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
