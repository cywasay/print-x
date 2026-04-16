"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const VISUAL_STEPS = [
  {
    step: "Step 1",
    title: "Artwork & Design",
    desc: "Share your logo, artwork, or creative idea with us. Our design team carefully prepares the layout and ensures it's fully suitable for production, giving you a clear preview before we start.",
    img: "/steps/step-1-label-pin-size.jpg"
  },
  {
    step: "Step 2",
    title: "Pin Style & Finish",
    desc: "Choose the type of pin that fits your vision such as Soft Enamel, Hard Enamel, or Die Struck. You can also select the plating and finishing options like Gold, Silver, or Antique for the perfect look.",
    img: "/steps/step-2-label-pin-size.jpg"
  },
  {
    step: "Step 3",
    title: "Attachments & Packaging",
    desc: "Decide how your pin will be worn or presented. From butterfly clutch and magnets to poly bags, custom cards, or presentation boxes, we have you covered.",
    img: "/steps/step-3-label-pin-size.jpg"
  }
];

export default function VisualSteps() {
  return (
    <section className="py-12 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-[44px] font-bold text-[#0F6393] mb-6 tracking-tight">
            How to Make Custom Pins in Easy Steps
          </h2>
          <p className="text-slate-500 text-[15px] md:text-base font-medium max-w-4xl mx-auto leading-relaxed">
            We make buying custom pins easy with our fast and simple process. We only need a little information to get started on your customized lapel pin order. Once we&apos;ve received your information, our expert custom pin team will bring your idea to life! With our experienced Print-X specialists, you can expect beautiful custom lapel pins of the highest quality.
          </p>
        </div>

        <div className="flex flex-col gap-12 md:gap-16">
          {VISUAL_STEPS.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className={`flex flex-col ${
                idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              } items-center gap-8 lg:gap-16`}
            >
              {/* Text Content */}
              <div className="flex-1 w-full">
                <span className="text-xl md:text-2xl font-black text-[#00AEEF] block mb-1">
                  {step.step}:
                </span>
                <h3 className="text-2xl md:text-3xl font-bold leading-tight text-[#0F6393] mb-4">
                  {step.title}
                </h3>
                <p className="text-[15px] text-slate-500 leading-relaxed font-medium max-w-lg">
                  {step.desc}
                </p>
              </div>

              {/* Image Content */}
              <div className="flex-1 w-full flex justify-center">
                <div className="rounded-xl overflow-hidden shadow-sm border border-slate-100 w-full max-w-[500px]">
                  <img
                    src={step.img}
                    alt={step.title}
                    className="w-full h-auto block transition-transform duration-700 hover:scale-105"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
