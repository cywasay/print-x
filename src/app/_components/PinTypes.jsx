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
    href: "/category/hard-enamel-pins",
    features: ["Smooth surface", "High durability", "Premium look"],
    popular: true
  },
  {
    title: "Soft Enamel Pins",
    desc: "Known for budget-friendly designs, these pins have textured surfaces and are heavily used as promotional merchandise and artistic accessories.",
    img: "/lapel-categories/soft-enamel-pin.jpg",
    href: "/category/soft-enamel-pins",
    features: ["Textured 3D feel", "Cost-effective", "Vibrant colors"],
    popular: false
  },
  {
    title: "3D Cast Lapel Pins",
    desc: "Feature your realistic, eye-catching designs with stunning 3D lapel pins. Perfect for sculptural logos, coins, and multifaceted designs.",
    img: "/lapel-categories/3d-cast-pin.jpg",
    href: "/category/3d-cast-pin-badges",
    features: ["Multiple levels", "Classic metal look", "High detail"],
    popular: false
  },
  {
    title: "Die Cast Metal Badges",
    desc: "Opt for die-cast lapel pins if you need detailed pins for awards, branding, or recognition, as they're very similar to heavy metal badges.",
    img: "/lapel-categories/die-cast-pin.jpg",
    href: "/category/die-struck-pin-badges",
    features: ["Heavyweight feel", "Sharp details", "Custom shapes"],
    popular: false
  }
];

export default function PinTypes() {
  return (
    <section className="py-12 md:py-16 bg-white relative overflow-hidden">
      {/* Background Polish */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(#0F6393 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
 
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center mb-8 md:mb-12 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-[10px] md:text-[11px] font-black tracking-[0.4em] text-[#00AEEF] uppercase mb-2 md:mb-3 block">Our Portfolio</span>
            <h2 className="text-2xl md:text-4xl lg:text-[48px] font-bold leading-[1.2] md:leading-[1.1] tracking-tight text-[#0F6393] mb-3 md:mb-4">
              Choose From 50+ Types of{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0F6393] to-[#00AEEF]">
                Custom Pins.
              </span>
            </h2>
            <p className="text-[13px] md:text-base text-slate-500 font-medium leading-relaxed px-1 md:px-0">
              We guarantee premium quality custom pins using high-quality material that can withstand harsh and tough conditions without eroding.
            </p>
          </motion.div>
        </div>
 
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {PIN_TYPES.map((type, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-slate-50 rounded-2xl p-5 md:p-6 border border-slate-100 hover:shadow-[0_15px_30px_-10px_rgba(0,0,0,0.08)] transition-all duration-500 group flex flex-col h-full"
            >
              <Link href={type.href} className="w-full aspect-[4/3] relative rounded-xl overflow-hidden mb-4 md:mb-5 shadow-sm block">
                <Image 
                  src={type.img} 
                  alt={`Custom ${type.title} example`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700" 
                  quality={85}
                />
                {type.popular && (
                  <div className="absolute top-3 right-3 bg-amber-400 text-amber-900 text-[9px] font-black tracking-widest uppercase px-2.5 py-1 rounded-full shadow-sm z-10">
                    Popular
                  </div>
                )}
              </Link>

              <h3 className="text-[17px] md:text-lg font-bold text-[#0F6393] mb-2">{type.title}</h3>
              <p className="text-slate-500 text-[11px] md:text-xs font-medium mb-4 md:mb-5 flex-1 line-clamp-3 leading-relaxed">
                {type.desc}
              </p>

              <div className="space-y-2 mb-4 md:mb-6">
                {type.features.map((feat, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <CheckCircle2 size={13} className="text-[#0F6393] shrink-0" />
                    <span className="text-[11px] md:text-xs font-semibold text-slate-700">{feat}</span>
                  </div>
                ))}
              </div>

              <Link 
                href={type.href}
                className="flex items-center justify-between w-full p-2.5 md:p-3 rounded-xl bg-white border border-slate-200 text-[#0F6393] group-hover:border-[#0F6393] group-hover:bg-[#0F6393] group-hover:text-white transition-all duration-300 font-bold text-[11px] md:text-xs"
              >
                <span>Learn More</span>
                <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-12 text-center flex justify-center">
             <Link href="/quote" className="inline-block px-8 py-3.5 rounded-xl bg-[#0F6393] text-white font-black tracking-widest text-[10px] uppercase hover:bg-[#0F6393] transition-colors shadow-lg">
                 View All Pin Styles
             </Link>
        </div>
      </div>
    </section>
  );
}
