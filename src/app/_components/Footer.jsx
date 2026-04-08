"use client";

import Link from 'next/link';
import { Phone, Mail, MapPin, Globe } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="w-full bg-[#0d2b3e] text-white pt-20 overflow-hidden relative">
      <div className="absolute inset-0 opacity-[0.01] pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(white 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

      <div className="max-w-[1300px] mx-auto px-6 pb-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-16 relative z-10">
        
        {/* Column 1: Brand & Contact */}
        <div className="flex flex-col gap-8">
           <div className="flex flex-col leading-none">
             <div className="text-[32px] font-black tracking-[-0.04em] flex items-baseline text-white">
               PRINT
               <span className="bg-gradient-to-br from-amber-400 via-pink-500 to-rose-500 bg-clip-text text-transparent italic font-black ml-[-1px]" style={{ fontSize: '1.15em' }}>X</span>
             </div>
             <span className="text-[8px] tracking-[0.4em] font-bold text-blue-200/50 uppercase ml-[2px] mt-1">
               Advertising & Solutions
             </span>
           </div>

           <ul className="space-y-4 text-[13.5px] text-blue-100/60 font-medium">
             <li className="flex items-start gap-4 hover:text-white transition-colors cursor-pointer group">
               <Phone size={16} className="text-blue-300/50 group-hover:text-blue-300 transition-colors" />
               <span>+971 4 223 6434</span>
             </li>
             <li className="flex items-start gap-4 hover:text-white transition-colors cursor-pointer group">
               <Mail size={16} className="text-blue-300/50 group-hover:text-blue-300 transition-colors" />
               <span>info@printx.ae</span>
             </li>
             <li className="flex items-start gap-4 group">
               <MapPin size={16} className="text-blue-300/50 group-hover:text-blue-300 transition-colors shrink-0" />
               <span className="leading-relaxed">
                 Bin Shabib Building 29, Deira, Dubai, UAE
               </span>
             </li>
           </ul>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h4 className="font-bold text-[14px] uppercase tracking-[0.2em] mb-8 text-blue-200/80">Collections</h4>
          <ul className="space-y-4 text-[13.5px] text-blue-100/60 font-medium">
            {['Tech & Accessories', 'Eco-Friendly Gifts', 'Drinkware Series', 'Stationery Systems', 'Recognition Awards'].map(link => (
              <li key={link}>
                <Link href="#" className="hover:text-white transition-colors inline-block transform duration-300">{link}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Services */}
        <div>
          <h4 className="font-bold text-[14px] uppercase tracking-[0.2em] mb-8 text-blue-200/80">Services</h4>
          <ul className="space-y-4 text-[13.5px] text-blue-100/60 font-medium">
            {['Graphic Designing', 'Promotional Gifts', 'Large Format Printing', 'Digital & Offset', 'Brand Consultation'].map(link => (
              <li key={link}>
                <Link href="#" className="hover:text-white transition-colors inline-block transform duration-300">{link}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 4: Newsletter */}
        <div className="flex flex-col">
          <h4 className="font-bold text-[14px] uppercase tracking-[0.2em] mb-8 text-blue-200/80">Newsletter</h4>
          <p className="text-[13px] text-blue-100/50 mb-6 leading-relaxed font-medium">Get the latest insights and branding tips delivered weekly.</p>
          <div className="flex bg-white/5 rounded-2xl p-1.5 focus-within:bg-white/10 transition-all border border-white/5">
             <input 
               type="email" 
               placeholder="Email address" 
               className="bg-transparent border-none outline-none text-[13px] px-4 py-2 text-white placeholder:text-white/20 flex-1 font-medium" 
             />
             <button className="bg-white text-[#0d2b3e] px-5 py-2 rounded-xl text-[11px] font-black uppercase tracking-widest hover:bg-blue-50 transition-colors">Join</button>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/5 py-8">
        <div className="max-w-[1300px] mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-[12px] font-bold text-blue-200/30 uppercase tracking-widest">
            © 2024 PrintX Advertising. All rights reserved.
          </p>
          
          <div className="flex items-center gap-6 text-blue-200/40">
             {/* Facebook */}
             <a href="#" className="hover:text-white transition-colors">
               <svg size={18} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-[18px] h-[18px]"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
             </a>
             {/* Instagram */}
             <a href="#" className="hover:text-white transition-colors">
               <svg size={18} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-[18px] h-[18px]"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
             </a>
             {/* LinkedIn */}
             <a href="#" className="hover:text-white transition-colors">
               <svg size={18} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-[18px] h-[18px]"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
             </a>
             {/* YouTube */}
             <a href="#" className="hover:text-white transition-colors">
               <svg size={18} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-[18px] h-[18px]"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.42a2.78 2.78 0 0 0-1.94 2C1 8.11 1 12 1 12s0 3.89.46 5.58a2.78 2.78 0 0 0 1.94 2c1.72.42 8.6.42 8.6.42s6.88 0 8.6-.42a2.78 2.78 0 0 0 1.94-2C23 15.89 23 12 23 12s0-3.89-.46-5.58z"></path><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"></polygon></svg>
             </a>
             <a href="#" className="hover:text-white transition-colors"><Globe size={18} /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}
