"use client";

import { useState } from "react";
import { Plus, Minus, HelpCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const FAQItem = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className={`border-b border-slate-100 last:border-0 transition-colors duration-300 ${isOpen ? 'bg-slate-50/50' : ''}`}>
      <button
        onClick={onClick}
        className="w-full py-6 flex items-center justify-between text-left gap-4 group"
      >
        <div className="flex items-center gap-4">
          <div className={`w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-300 ${isOpen ? 'bg-[#0F6393] text-white shadow-lg' : 'bg-slate-50 text-slate-400 group-hover:bg-slate-100'}`}>
            <HelpCircle size={16} />
          </div>
          <span className={`text-[15px] font-bold tracking-tight transition-colors duration-300 ${isOpen ? 'text-[#0F6393]' : 'text-slate-700'}`}>
            {question}
          </span>
        </div>
        <div className={`shrink-0 transition-transform duration-500 ${isOpen ? 'rotate-180 text-[#0F6393]' : 'text-slate-300'}`}>
          {isOpen ? <Minus size={18} /> : <Plus size={18} />}
        </div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
            className="overflow-hidden"
          >
            <div className="pb-8 pl-12 pr-6">
              <p className="text-[14px] leading-relaxed text-slate-500 font-medium whitespace-pre-line">
                {answer}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function FAQ({ faqs, title = "Common Questions", subtitle = "Frequently Asked Questions" }) {
  const [openIndex, setOpenIndex] = useState(0);

  if (!faqs || faqs.length === 0) return null;

  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-[11px] font-black tracking-[0.4em] text-[#00AEEF] uppercase mb-3 block">
            {title}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0F6393] tracking-tight">
            {subtitle}
          </h2>
          <div className="w-12 h-1 bg-[#00AEEF] rounded-full mx-auto mt-6" />
        </div>

        <div className="bg-white rounded-3xl border border-slate-100 overflow-hidden shadow-[0_30px_60px_-15px_rgba(15,99,147,0.05)]">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
            />
          ))}
        </div>

        <div className="mt-12 text-center">
            <p className="text-sm font-bold text-slate-400">
                Still have questions? <a href="/quote" className="text-[#0F6393] hover:underline decoration-2 underline-offset-4">Get in touch with our experts.</a>
            </p>
        </div>
      </div>
    </section>
  );
}
