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
            Premium Custom Pins{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#146b9a] to-[#00a9e0]">
              in Dubai.
            </span>
          </h2>
          <div className="w-16 h-1.5 bg-[#146b9a]/20 rounded-full mb-8" />
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-12 text-slate-500/90 text-[14.5px] leading-relaxed font-medium">
          <div className="space-y-6">
            <p>
              Custom pins and metal badges are more impactful than they first appear. They can boost staff relations, energize your brand, and engage your audience with extras. We deliver branded <span className="text-[#146b9a] font-bold">bespoke lapel pins</span> that bring great value to your business!
            </p>
            <p>
              We've led the way in using custom metallic products to grab attention for over 10 years. As the top enamel pin suppliers in Dubai, UAE, we help companies connect better with their target customers through constant innovation.
            </p>

            <h3 className="text-[20px] font-extrabold text-[#0d2b3e] pt-4 leading-tight">
              High-Quality Enamel Pins That Leave a Lasting Impact
            </h3>
            <p>
              Investing in custom lapel pins is a creative journey. It changes ordinary items into expressions of your brand's values. Our dedicated team works in our production facilities to create every badge with unmatched precision.
            </p>
          </div>

          <div className="space-y-6">
            <h3 className="text-[20px] font-extrabold text-[#0d2b3e] pt-0 leading-tight">
              Promotional Products That Actually Get Used
            </h3>
            <p>
              A simple way to promote your business is by handing out <span className="text-[#146b9a] font-bold">promotional pins</span> at events. Branded accessories and apparel pins enhance the perception of your business. Buy them to delight your customers!
            </p>

            <h3 className="text-[20px] font-extrabold text-[#0d2b3e] pt-4 leading-tight">
              Beyond Basic Badges: Premium Finishing Touches
            </h3>
            <p>
              We guarantee premium quality custom pins using high-quality material that can withstand harsh conditions. We offer premium plating options, easy-to-use pin attachment choices and exclusive upgrades to jazz up your creation.
            </p>
            <p>
              You don't have to wait forever. We ship your order within 2 weeks only! Get in touch with our expert team today and see how our world-class pins can transform your brand identity.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
