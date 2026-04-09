"use client";

import Link from 'next/link';
import Image from 'next/image';
import { Phone, Mail, MapPin, Globe, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

const SocialIcon = ({ d, size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d={d} />
  </svg>
);

const socialData = [
  { name: 'Facebook', d: "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" },
  { name: 'Instagram', d: "M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z M17.5 6.5h.01" }, // simplified Instagram path
  { name: 'Linkedin', d: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" }, // simplified path
  { name: 'Youtube', d: "M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.42a2.78 2.78 0 0 0-1.94 2C1 8.11 1 12 1 12s0 3.89.46 5.58a2.78 2.78 0 0 0 1.94 2c1.72.42 8.6.42 8.6.42s6.88 0 8.6-.42a2.78 2.78 0 0 0 1.94-2C23 15.89 23 12 23 12s0-3.89-.46-5.58z" }
];

export default function Footer() {
  return (
    <footer className="w-full pt-24 overflow-hidden relative">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/banners/baner-image1.jpg" 
          alt="Footer Background" 
          fill 
          className="object-cover"
        />
        {/* Minimal gradient for readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0d2b3e]/80 via-[#0d2b3e]/60 to-[#0d2b3e]/90" />
      </div>

      {/* Background Polish */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-white/10 z-10" />
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(white 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        
        {/* Top CTA Row */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 pb-20 border-b border-white/5 mb-20">
          <div className="max-w-xl text-center lg:text-left">
             <h3 className="text-3xl md:text-4xl font-bold mb-4 tracking-tighter">Ready to bring your brand <span className="text-[#51A9FF]">to life?</span></h3>
             <p className="text-blue-100/40 font-medium italic">Connect with our design experts today for personal consultation.</p>
          </div>
          <Link 
            href="/contact" 
            className="flex items-center gap-3 bg-[#146b9a] text-white px-8 py-4 rounded-2xl font-bold uppercase tracking-widest text-[12px] shadow-2xl"
          >
            Start a Project
            <ArrowUpRight size={16} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-x-12 gap-y-16 pb-20">
          
          {/* Column 1: Brand & Contact (4 cols) */}
          <div className="lg:col-span-4 flex flex-col gap-8">
             <Link href="/" className="inline-block">
               <Image
                 src="/logo-web.png"
                 alt="PrintX Logo"
                 width={160}
                 height={50}
                 className="h-12 w-auto object-contain brightness-0 invert"
               />
             </Link>
             <p className="text-[14px] text-blue-100/40 font-medium leading-relaxed max-w-sm">
                Middle East's leading high-precision branding partner, delivering world-class printing solutions since 2004.
             </p>

             <div className="space-y-4">
                <a href="tel:+97142236434" className="flex items-center gap-4 text-blue-100/60 group">
                   <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center">
                      <Phone size={14} />
                   </div>
                   <span className="font-bold text-[13px] tracking-tight">+971 4 223 6434</span>
                </a>
                <a href="mailto:info@printx.ae" className="flex items-center gap-4 text-blue-100/60 group">
                   <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center">
                      <Mail size={14} />
                   </div>
                   <span className="font-bold text-[13px] tracking-tight">info@printx.ae</span>
                </a>
             </div>
          </div>

          {/* Column 2: Solutions (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="font-bold text-[11px] uppercase tracking-[0.4em] mb-10 text-white/20">Solutions</h4>
            <ul className="space-y-5 text-[14px] text-blue-100/40 font-medium">
              {['Tech Accessories', 'Eco-Friendly Gifts', 'Drinkware Series', 'Stationery Systems', 'Recognition Awards'].map(link => (
                <li key={link}>
                  <Link href="#" className="flex items-center gap-2">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services (2 cols) */}
          <div className="lg:col-span-2">
            <h4 className="font-bold text-[11px] uppercase tracking-[0.4em] mb-10 text-white/20">Services</h4>
            <ul className="space-y-5 text-[14px] text-blue-100/40 font-medium">
              {['Graphic Design', 'Logo Branding', 'Large Format', 'Digital Print', 'Offset Print'].map(link => (
                <li key={link}>
                  <Link href="#" className="flex items-center gap-2">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Location (3 cols) */}
          <div className="lg:col-span-3">
             <h4 className="font-bold text-[11px] uppercase tracking-[0.4em] mb-10 text-white/20">Our Home</h4>
             <div className="flex gap-4 p-6 rounded-3xl bg-white/5 border border-white/5">
                <MapPin size={20} className="text-[#51A9FF] shrink-0" />
                <p className="text-[13px] leading-relaxed text-blue-100/60 font-medium">
                   Bin Shabib Building 29,<br />
                   Deira, Dubai, UAE
                </p>
             </div>
             
             <div className="mt-8 flex gap-3">
                {socialData.map((social, i) => (
                  <Link 
                    key={i} 
                    href="#" 
                    className="w-10 h-10 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center shadow-xl"
                  >
                     <SocialIcon d={social.d} size={16} className="text-white/20" />
                  </Link>
                ))}
                <Link href="#" className="w-10 h-10 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center shadow-xl">
                   <Globe size={16} className="text-white/20" />
                </Link>
             </div>
          </div>
        </div>
      </div>

      {/* Legal Bar */}
      <div className="bg-black/20 py-10">
        <div className="max-w-[1400px] mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-[11px] font-bold text-blue-200/20 uppercase tracking-[0.3em]">
            © 2024 PrintX Advertising LLC. Crafting perfection in Dubai.
          </p>
          
          <div className="flex items-center gap-8 text-[11px] font-bold text-blue-200/20 uppercase tracking-[0.2em]">
             <Link href="#" className="hover:text-[#51A9FF] transition-colors">Privacy Policy</Link>
             <Link href="#" className="hover:text-[#51A9FF] transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
