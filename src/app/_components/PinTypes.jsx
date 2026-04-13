"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const PIN_TYPES = [
  {
    title: "Hard Enamel Pins",
    desc: "Eyeing something durable and high-quality for promotion or personalized gifts? Hard enamel pins can be your best call. They offer a smooth, jewelry-like finish.",
    img: "/lapel-categories/hard-enamel-pin.jpg",
    features: ["Smooth surface", "High durability", "Premium look"],
    popular: true
  },
  {
    title: "Soft Enamel Pins",
    desc: "Known for budget-friendly designs, these pins have textured surfaces and are heavily used as promotional merchandise and artistic accessories.",
    img: "/lapel-categories/soft-enamel-pin.jpg",
    features: ["Textured 3D feel", "Cost-effective", "Vibrant colors"],
    popular: false
  },
  {
    title: "3D Cast Lapel Pins",
    desc: "Feature your realistic, eye-catching designs with stunning 3D lapel pins. Perfect for sculptural logos, coins, and multifaceted designs.",
    img: "/lapel-categories/3d-cast-pin.jpg",
    features: ["Multiple levels", "Classic metal look", "High detail"],
    popular: false
  },
  {
    title: "Die Cast Metal Badges",
    desc: "Opt for die-cast lapel pins if you need detailed pins for awards, branding, or recognition, as they're very similar to heavy metal badges.",
    img: "/lapel-categories/die-cast-pin.jpg",
    features: ["Heavyweight feel", "Sharp details", "Custom shapes"],
    popular: false
  }
];

export default function PinTypes() {
  return (
    <section className="py-16 bg-white relative overflow-hidden">
      {/* Background Polish */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(#146b9a 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center mb-12 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-[11px] font-black tracking-[0.4em] text-[#51A9FF] uppercase mb-3 block">Our Portfolio</span>
            <h2 className="text-3xl md:text-4xl lg:text-[48px] font-bold leading-[1.1] tracking-tight text-[#0d2b3e] mb-4">
              Choose From 50+ Types of{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#146b9a] to-[#00a9e0]">
                Custom Pins.
              </span>
            </h2>
            <p className="text-sm md:text-base text-slate-500 font-medium leading-relaxed">
              We guarantee premium quality custom pins using high-quality material that can withstand harsh and tough conditions without eroding.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PIN_TYPES.map((type, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-slate-50 rounded-2xl p-6 border border-slate-100 hover:shadow-[0_15px_30px_-10px_rgba(0,0,0,0.08)] transition-all duration-500 group flex flex-col h-full"
            >
              <div className="w-full aspect-[4/3] relative rounded-xl overflow-hidden mb-5 shadow-sm">
                <img 
                  src={type.img} 
                  alt={type.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                />
                {type.popular && (
                  <div className="absolute top-3 right-3 bg-amber-400 text-amber-900 text-[9px] font-black tracking-widest uppercase px-2.5 py-1 rounded-full shadow-sm">
                    Popular
                  </div>
                )}
              </div>

              <h3 className="text-lg font-bold text-[#0d2b3e] mb-2">{type.title}</h3>
              <p className="text-slate-500 text-xs leading-relaxed font-medium mb-5 flex-1 line-clamp-3">
                {type.desc}
              </p>

              <div className="space-y-2.5 mb-6">
                {type.features.map((feat, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <CheckCircle2 size={14} className="text-[#146b9a]" />
                    <span className="text-xs font-semibold text-slate-700">{feat}</span>
                  </div>
                ))}
              </div>

              <Link 
                href="/quote"
                className="flex items-center justify-between w-full p-3 rounded-lg bg-white border border-slate-200 text-[#0d2b3e] group-hover:border-[#146b9a] group-hover:bg-[#146b9a] group-hover:text-white transition-all duration-300 font-bold text-xs"
              >
                <span>Get Quote</span>
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-12 text-center flex justify-center">
             <Link href="/quote" className="inline-block px-8 py-3.5 rounded-xl bg-[#0d2b3e] text-white font-black tracking-widest text-[10px] uppercase hover:bg-[#146b9a] transition-colors shadow-lg">
                 View All Pin Styles
             </Link>
        </div>
      </div>
    </section>
  );
}
