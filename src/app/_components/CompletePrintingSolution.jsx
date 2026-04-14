"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const solutionsData = [
  {
    title: "Custom 3D Lapel Pins",
    desc: "Feature your realistic, eye-catching designs with stunning 3D lapel pins that are designed with cutout 3D shapes.",
    img: "/services/tech-gear.jpg",
    accent: "#00AEEF"
  },
  {
    title: "Hard Enamel Pins",
    desc: "Eyeing something durable and high-quality for promotion or personalized gifts? Hard enamel pins can be your best call.",
    img: "/services/note-book.jpg",
    accent: "#FF51A9"
  },
  {
    title: "Soft Enamel Pins",
    desc: "Known for budget-friendly designs, these pins have glossy surfaces and are used as promotional merchandise.",
    img: "/services/gift-set.jpg",
    accent: "#FFB551"
  },
  {
    title: "Custom Die Cast Pins",
    desc: "Opt for die-cast lapel pins if you need detailed pins for awards, branding or recognition, as they're very similar to metal badges.",
    img: "/services/special-pens.jpg",
    accent: "#51FFB5"
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { y: 40, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function CompletePrintingSolution() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Dynamic Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[40%] h-[40%] bg-blue-50/50 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[40%] h-[40%] bg-slate-50 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <span className="text-[12px] font-black tracking-[0.4em] text-[#00AEEF] uppercase mb-4 block">Our Expertise</span>
            <h2 className="text-4xl md:text-5xl lg:text-[60px] font-bold leading-[1.05] tracking-tighter text-[#0F6393]">
              Premium Pin{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0F6393] to-[#00AEEF]">
                Collections.
              </span>
            </h2>
          </motion.div>
          
          <motion.p 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-slate-500 text-lg md:text-xl font-medium max-w-md pb-2"
          >
            Choose from 50+ Types of Custom Enamel & Lapel Pins, crafted with premium materials.
          </motion.p>
        </div>

        {/* Sophisticated Cards Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {solutionsData.map((item, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="group relative flex flex-col h-full bg-[#fcfdfe] rounded-[2.5rem] p-8 transition-all duration-700 hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.12)] border border-slate-100 hover:border-[#0F6393]/20 overflow-hidden"
            >
              {/* Animated Accent Glow */}
              <div 
                className="absolute -top-24 -right-24 w-48 h-48 rounded-full blur-[60px] opacity-0 group-hover:opacity-20 transition-opacity duration-700"
                style={{ backgroundColor: item.accent }}
              />

              <div className="relative z-10 flex flex-col h-full">
                <div className="mb-8">
                  <h3 className="text-2xl font-semibold text-[#0F6393] leading-tight mb-4 group-hover:text-[#0F6393] transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-slate-500 text-[15px] leading-relaxed font-medium">
                    {item.desc}
                  </p>
                </div>

                <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden bg-slate-50 mt-auto shadow-inner group-hover:shadow-2xl transition-shadow duration-500">
                  <Image
                    src={item.img}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    className="object-cover group-hover:scale-110 transition-transform duration-1000 cubic-bezier(0.16, 1, 0.3, 1)"
                  />
                  {/* Subtle Image Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F6393]/20 to-transparent" />
                </div>

                <div className="mt-8 flex items-center justify-between">
                  <div className="flex items-center gap-2 text-[#00AEEF] font-black text-[12px] uppercase tracking-widest">
                    <span>Explore More</span>
                    <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform duration-300" />
                  </div>
                  <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 group-hover:bg-[#0F6393] group-hover:text-white transition-all duration-300">
                    <ArrowRight size={18} />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
