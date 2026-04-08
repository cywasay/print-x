"use client";

import Link from 'next/link';
import Image from 'next/image';
import { Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="w-full font-sans">
      
      {/* Main Footer Block */}
      <div className="bg-[#146b9a] text-white py-16">
        <div className="max-w-[1250px] mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
          
          {/* Column 1: Logo & Contact */}
          <div className="flex flex-col gap-6 tracking-wide">
            {/* Logo Text equivalent */}
            <div className="flex flex-col mb-2">
              <span className="text-[38px] font-black tracking-tight leading-none text-white flex items-end">
                PRINT<span className="text-[#fbb529] text-[46px] ml-1 leading-[0.8] tracking-tighter mix-blend-screen scale-x-110 translate-y-1">X</span>
              </span>
              <span className="text-[13px] font-medium tracking-[0.25em] text-white mt-1">ADVERTISING</span>
            </div>

            <ul className="space-y-4 text-[13px] text-[#f0f4f8]">
              <li className="flex items-start gap-4">
                <Phone size={16} className="mt-0.5" />
                <span>+971 4 223 6434</span>
              </li>
              
              <li className="flex items-start gap-4">
                {/* Whatsapp Icon SVG */}
                <svg className="w-[16px] h-[16px] mt-0.5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12.01 2.01c-5.51 0-9.99 4.48-9.99 9.99 0 1.96.56 3.79 1.52 5.34L2.01 22l4.82-1.54c1.5.88 3.25 1.39 5.14 1.39 5.51 0 10-4.48 10-10S17.52 2.01 12.01 2.01zM17.4 15.61c-.24.68-1.4 1.28-1.95 1.35-.51.06-1.15.11-3.23-.74-2.5-1.02-4.08-3.6-4.2-3.76-.12-.16-1.01-1.34-1.01-2.56 0-1.22.63-1.82.86-2.07.24-.25.52-.31.69-.31.17 0 .34 0 .49.01.16.01.37-.06.58.45.22.52.74 1.81.8 1.93.07.13.12.27.04.44-.08.16-.12.26-.24.4-.12.14-.25.31-.35.42-.12.12-.25.26-.11.51.14.25.64 1.05 1.37 1.69.94.83 1.72 1.09 1.96 1.21.25.12.39.09.54-.08.14-.17.62-.72.79-.97.16-.25.33-.21.56-.12.23.09 1.48.7 1.73.83.25.12.41.19.47.29.07.1.07.59-.17 1.27z" />
                </svg>
                <span>+971 50 718 0562</span>
              </li>

              <li className="flex items-start gap-4">
                <Mail size={16} className="mt-0.5" />
                <span>info@printx.ae</span>
              </li>

              <li className="flex items-start gap-4">
                <MapPin size={16} className="mt-0.5 shrink-0" />
                <span className="leading-snug text-[13px]">
                  Shop # 6, Bin Shabib Building 29<br/>
                  Hor Al Anz, Deira, Dubai. UAE.<br/>
                  P.O. Box: 81998
                </span>
              </li>
            </ul>
          </div>

          {/* Column 2: E-CATALOGUES */}
          <div className="flex flex-col">
            <h4 className="font-semibold text-[17px] mb-5 text-white tracking-wide">E-CATALOGUES</h4>
            <ul className="space-y-3">
              {['Technology', 'Eco-Friendly', 'USB Flash', 'Drinkware', 'Wallet & Keychain', 'Charging Cables'].map(link => (
                <li key={link}>
                  <Link href="#" className="text-[13.5px] text-[#e0e8ef] hover:text-white transition-colors">{link}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: SERVICES & MORE LINKS */}
          <div className="flex flex-col">
            <h4 className="font-semibold text-[17px] mb-5 text-white tracking-wide">SERVICES</h4>
            <ul className="space-y-3 mb-8">
              {['Graphic Designing', 'Promotional Gifts', 'Large Format Printing', 'Digital / Offset Printing'].map(link => (
                <li key={link}>
                  <Link href="#" className="text-[13.5px] text-[#e0e8ef] hover:text-white transition-colors">{link}</Link>
                </li>
              ))}
            </ul>

            <h4 className="font-semibold text-[17px] mb-4 text-white tracking-wide">MORE LINKS</h4>
            <ul className="space-y-3">
              {['FAQS', 'Reviews', 'Return & Refund Policy'].map(link => (
                <li key={link}>
                  <Link href="#" className="text-[13.5px] text-[#e0e8ef] hover:text-white transition-colors">{link}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: WEEKLY NEWSLETTER */}
          <div className="flex flex-col">
            <h4 className="font-semibold text-[17px] mb-5 text-white tracking-wide uppercase">Weekly Newsletter</h4>
            <form className="flex flex-col gap-3 max-w-[300px]">
              <input 
                type="text" 
                placeholder="Name" 
                className="w-full bg-white px-3 py-2.5 text-[13px] text-gray-800 outline-none placeholder:text-gray-400 rounded-sm"
              />
              <input 
                type="email" 
                placeholder="Your Email" 
                className="w-full bg-white px-3 py-2.5 text-[13px] text-gray-800 outline-none placeholder:text-gray-400 rounded-sm"
              />
              <button 
                type="button"
                className="w-full bg-[#38bcf8] hover:bg-[#20b1f3] text-white font-bold text-[13px] py-3 mt-1 rounded-sm transition-colors uppercase tracking-wider"
              >
                SUBSCRIBE
              </button>
            </form>
          </div>

        </div>
      </div>

      {/* Footer Bottom Bar */}
      <div className="bg-[#00a2ed] py-4">
        <div className="max-w-[1250px] mx-auto px-6 flex flex-col sm:flex-row items-center justify-between text-white text-[12.5px]">
          
          <span className="font-medium">© All rights reserved</span>
          
          <div className="flex items-center gap-5 mt-4 sm:mt-0">
             {/* FB */}
             <a href="#" className="hover:opacity-80"><svg className="w-[15px] h-[15px]" fill="currentColor" viewBox="0 0 24 24"><path d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14C17.14 2 15.52 2 14.5 2 11.5 2 10 4.28 10 7.42V9.5H7v4h3v9h4v-9z"/></svg></a>
             {/* IG */}
             <a href="#" className="hover:opacity-80"><svg className="w-[15px] h-[15px]" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg></a>
             {/* LinkedIn */}
             <a href="#" className="hover:opacity-80"><svg className="w-[15px] h-[15px]" fill="currentColor" viewBox="0 0 24 24"><path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5S.02 4.881.02 3.5 1.13 1 2.5 1 4.98 2.119 4.98 3.5zM.5 23h4V8h-4v15zm10.59-15.08c-2.18-.01-3.6 1.16-4.09 2.22V8H3v15h4v-8.31c0-2.22 1.63-2.9 2.45-2.9 1.5 0 2.55 1.05 2.55 3.32V23h4v-9.35c0-4.49-2.33-6.61-5.41-6.73z"/></svg></a>
             {/* YouTube equivalent simplified */}
             <a href="#" className="hover:opacity-80"><svg className="w-[16px] h-[16px]" fill="currentColor" viewBox="0 0 24 24"><path d="M21.58 6.55c-.21-.8-.84-1.42-1.64-1.63C18.5 4.5 12 4.5 12 4.5s-6.5 0-7.94.42c-.8.21-1.42.84-1.64 1.63C2 8.01 2 12 2 12s0 3.99.42 5.45c.21.8.84 1.42 1.64 1.63 1.44.42 7.94.42 7.94.42s6.5 0 7.94-.42c.8-.21 1.42-.84 1.64-1.63.42-1.46.42-5.45.42-5.45s0-3.99-.42-5.45zM9.5 15.5v-7l6 3.5-6 3.5z"/></svg></a>
             {/* Link */}
             <a href="#" className="hover:opacity-80"><svg className="w-[15px] h-[15px]" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/></svg></a>
          </div>

        </div>
      </div>
    </footer>
  );
}
