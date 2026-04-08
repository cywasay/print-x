"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Search, ShoppingCart, MessageSquare, ChevronDown, Menu, X } from 'lucide-react';

export default function Header() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false); // Scrolling down, hide
      } else if (currentScrollY < lastScrollY || currentScrollY <= 100) {
        setIsVisible(true);  // Scrolling up, show
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <header className={`w-full flex flex-col z-50 bg-white shadow-sm font-sans sticky top-0 transition-transform duration-500 ease-in-out ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}>
      
      {/* 1. Top Banner */}
      <div className="bg-[#f3f4f6] w-full py-1.5 flex justify-center border-b border-slate-200">
        <span className="text-[13px] text-slate-800 font-medium">Top Corporate and Promotional Gifts Supplier in Dubai, UAE</span>
      </div>

      {/* 2. Main Header */}
      <div className="bg-white w-full py-5">
        <div className="max-w-[1400px] mx-auto px-6 flex items-center justify-between gap-12">
          
          {/* Logo Recreation based on Image */}
          <Link href="/" className="flex flex-col items-start leading-none shrink-0 group">
            <div className="text-[34px] font-black tracking-tighter flex items-center text-black">
              PRINT
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-pink-500 to-pink-500 -ml-0.5 text-[40px] italic drop-shadow-sm group-hover:scale-105 transition-transform">X</span>
            </div>
            <div className="text-[9px] tracking-[0.35em] font-bold text-slate-800 mt-[2px] ml-1">
              ADVERTISING
            </div>
          </Link>

          {/* Search Bar - Center */}
          <div className="flex-1 max-w-[800px] flex border border-[#146b9a] rounded-sm overflow-hidden hidden md:flex">
            <input 
              type="text" 
              placeholder="Search..." 
              className="flex-1 px-4 py-2 text-sm text-slate-700 outline-none placeholder:text-slate-400"
            />
            <button className="bg-[#146b9a] hover:bg-[#115a82] transition-colors w-14 flex items-center justify-center text-white shrink-0">
              <Search size={18} strokeWidth={2.5} />
            </button>
          </div>

          {/* Action Icons - Right (Desktop) & Mobile Toggle */}
          <div className="flex items-center gap-5 md:gap-8 text-[#5f6368] shrink-0">
            <Link href="#" className="hidden md:flex items-center gap-1.5 hover:text-[#146b9a] transition-colors text-sm font-medium">
              <MessageSquare size={16} /> Help center
            </Link>
            <Link href="#" className="hover:text-[#146b9a] transition-colors">
              <ShoppingCart size={22} className="text-[#4a5056] hover:text-[#146b9a]" />
            </Link>
            {/* Mobile Menu Toggle */}
            <button 
              className="md:hidden flex items-center text-[#4a5056] hover:text-[#146b9a] transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
          
        </div>

        {/* Mobile Nav Menu Dropdown */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white border-t border-slate-100 shadow-2xl py-6 px-6 flex flex-col gap-5 z-50">
            <div className="flex border border-[#146b9a] rounded-sm overflow-hidden mb-2">
              <input 
                type="text" 
                placeholder="Search..." 
                className="flex-1 px-4 py-3 text-sm text-slate-700 outline-none"
              />
              <button className="bg-[#146b9a] text-white w-14 flex items-center justify-center">
                <Search size={18} strokeWidth={2.5} />
              </button>
            </div>
            <Link href="#" className="text-[16px] font-bold text-slate-800">Products</Link>
            <Link href="#" className="text-[16px] font-bold text-slate-800">Gift Ideas</Link>
            <Link href="#" className="text-[16px] font-bold text-slate-800">Office Products</Link>
            <Link href="#" className="text-[16px] font-bold text-slate-800">E-Catalogs</Link>
            <Link href="#" className="text-[16px] font-bold text-[#146b9a] mt-4 pt-4 border-t border-slate-100 flex items-center gap-2">
               <MessageSquare size={18} /> Help Center
            </Link>
          </div>
        )}
      </div>

      {/* 3. Bottom Nav Tier */}
      <div className="bg-[#fafafa] w-full border-y border-slate-200 hidden md:block">
        <div className="max-w-[1400px] mx-auto px-6 py-3 flex items-center gap-10 text-[14px] font-bold text-[#757a80]">
          
          <Link href="#" className="flex items-center gap-1.5 hover:text-[#146b9a] transition-colors group">
            Products <ChevronDown size={14} strokeWidth={3} className="text-slate-400 group-hover:text-[#146b9a]" />
          </Link>
          
          <Link href="#" className="flex items-center gap-1.5 hover:text-[#146b9a] transition-colors group">
            Gift Ideas <ChevronDown size={14} strokeWidth={3} className="text-slate-400 group-hover:text-[#146b9a]" />
          </Link>
          
          <Link href="#" className="flex items-center gap-1.5 hover:text-[#146b9a] transition-colors group">
            Office Products <ChevronDown size={14} strokeWidth={3} className="text-slate-400 group-hover:text-[#146b9a]" />
          </Link>
          
          <Link href="#" className="flex items-center gap-1.5 hover:text-[#146b9a] transition-colors group">
            E-Catalogs <ChevronDown size={14} strokeWidth={3} className="text-slate-400 group-hover:text-[#146b9a]" />
          </Link>
          
          <Link href="#" className="hover:text-[#146b9a] transition-colors">
            Apparels & Accessories
          </Link>
          
          <Link href="#" className="hover:text-[#146b9a] transition-colors">
            Large Format Prints
          </Link>
          
        </div>
      </div>

    </header>
  );
}
