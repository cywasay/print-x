'use client';

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const offerData = [
  { name: "3D Lapel Pins", img: "/services/tech-gear.jpg" },
  { name: "Hard Enamel Pins", img: "/services/note-book.jpg" },
  { name: "Soft Enamel Pins", img: "/services/gift-set.jpg" },
  { name: "Die Cast Pins", img: "/services/special-pens.jpg" },
  { name: "Offset Pins", img: "/services/lapel-pin.jpg" },
  { name: "UV Pins", img: "/services/drinkware.jpg" },
  { name: "Baseball Pins", img: "/services/laneyrd.jpg" },
  { name: "Hat Pins", img: "/services/trophies.jpg" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export default function FeaturedProducts() {
  return (
    <section className="bg-white py-20 w-full relative overflow-hidden group/section">
      <div className="max-w-[1300px] mx-auto px-6 relative z-10">
        
        {/* Uniform Header */}
        <div className="flex flex-col items-center text-center mb-16 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-[48px] font-extrabold leading-[1.1] tracking-tight text-[#0d2b3e] mb-4">
              Pin{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#146b9a] to-[#00a9e0]">
                Types.
              </span>
            </h2>
            
            <p className="text-sm md:text-base text-slate-500/90 font-medium leading-relaxed max-w-2xl mx-auto">
              Top-recommended lapel pin manufacturer all over the UAE with 100% customization.
              From glossy soft enamel to premium die-cast finishes.
            </p>
          </motion.div>
        </div>

        {/* Categories Grid */}
        <motion.div 
          className="grid grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {offerData.map((item, idx) => (
            <motion.div key={idx} variants={itemVariants}>
              <Link
                href="#"
                className="group flex flex-col items-center bg-white rounded-3xl p-5 md:p-6 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.06)] hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.12)] transition-all duration-500 text-center border border-slate-100/50"
              >
                {/* Image Container */}
                <div className="w-full aspect-square relative mb-6 rounded-2xl overflow-hidden bg-slate-50 border border-slate-100/50">
                  <Image
                    src={item.img}
                    alt={item.name}
                    fill
                    sizes="(max-width: 768px) 50vw, 25vw"
                    className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                {/* Title */}
                <h3 className="text-[15px] md:text-[18px] font-bold text-[#0d2b3e] group-hover:text-[#146b9a] transition-colors duration-300">
                  {item.name}
                </h3>
                
                <div className="mt-2 w-0 h-0.5 bg-gradient-to-r from-[#146b9a] to-[#00a9e0] group-hover:w-full transition-all duration-500 rounded-full" />
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
