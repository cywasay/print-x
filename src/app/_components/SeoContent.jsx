"use client";

import { motion } from 'framer-motion';

export default function SeoContent() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background Polish */}
      <div className="absolute inset-0 opacity-[0.012] pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(#146b9a 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
           className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-[48px] font-extrabold leading-[1.1] tracking-tight text-[#0d2b3e] mb-4">
            Top Corporate & Promotional Gifts{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#146b9a] to-[#00a9e0]">
              in Dubai.
            </span>
          </h2>
          <div className="w-16 h-1.5 bg-[#146b9a]/20 rounded-full mb-8" />
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-12 text-slate-500/90 text-[14.5px] leading-relaxed font-medium">
          <div className="space-y-6">
            <p>
              Corporate gifts and promotional items are more complex than they first appear. They can boost staff relations, energize your brand, and engage your audience with extras. PrintX delivers branded <span className="text-[#146b9a] font-bold">promotional gifts</span> that bring great value to your business!
            </p>
            <p>
              PrintX has led the way in using promotional items to grab attention for over 10 years. As top promotional and corporate gifts suppliers in Dubai, UAE, we help companies connect better with their target customers through constant innovation.
            </p>

            <h3 className="text-[20px] font-extrabold text-[#0d2b3e] pt-4 leading-tight">
              High-Quality Promotional Gifts That Leave a Lasting Impact
            </h3>
            <p>
              Investing in PrintX is a creative journey. It changes ordinary items into expressions of your brand's values. Our dedicated team works in our production facilities to create every gift with unmatched precision and research into your brand's identity.
            </p>
          </div>

          <div className="space-y-6">
            <h3 className="text-[20px] font-extrabold text-[#0d2b3e] pt-0 leading-tight">
              Promotional Products That Actually Get Used
            </h3>
            <p>
              A simple way to promote your business is by adding <span className="text-[#146b9a] font-bold">promotional items</span> to your orders. Branded accessories, office equipment, and apparel enhance the perception of your business. Buy them to delight your customers or brighten your colleagues' day!
            </p>

            <h3 className="text-[20px] font-extrabold text-[#0d2b3e] pt-4 leading-tight">
              Beyond Basic Printing: Premium Finishing Touches
            </h3>
            <p>
              We work hard to boost your brand's reputation through high-end printing and finishing services. PrintX provides cutting, engraving, stitching, debossing, and embossing features. Showcase your brand with unique style and depth, with no extra effort needed.
            </p>
            <p>
              Experience the difference of PrintX. Get in touch with our expert team today and see how our world-class printing solutions can transform your brand identity.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
