"use client";

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Search, ShoppingCart, MessageSquare, ChevronDown, Menu, X, Phone, Mail, MapPin, Clock, User } from 'lucide-react';

const navLinks = [
  { 
    label: "Categories", 
    href: "#", 
    hasDropdown: true,
    dropdownItems: [
      { label: "Hard Enamel Pins", href: "/category/hard-enamel-pins" },
      { label: "Soft Enamel Pins", href: "/category/soft-enamel-pins" },
      { label: "Die Struck Pin Badges", href: "/category/die-struck-pin-badges" },
      { label: "3D Cast Pin Badges", href: "/category/3d-cast-pin-badges" },
      { label: "Epoxy Pins", href: "/category/photo-dome-pins" },
      { label: "Custom UV Pins", href: "/category/trading-pin-badges" }
    ]
  },
  { label: "Reviews", href: "#", hasDropdown: false },
  { label: "Portfolio", href: "#", hasDropdown: false },
  { label: "Contact Us", href: "#", hasDropdown: false },
];

export default function Header() {
  const [isVisible, setIsVisible] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchFocused, setSearchFocused] = useState(false);
  const headerRef = useRef(null);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const delta = currentScrollY - lastScrollY.current;

      setIsScrolled(currentScrollY > 10);

      // Only toggle visibility if scroll delta exceeds 5px to prevent jitter
      if (Math.abs(delta) < 5) return;

      if (delta > 0 && currentScrollY > 120) {
        setIsVisible(false);
        setIsMobileMenuOpen(false);
      } else if (delta < 0 || currentScrollY <= 120) {
        setIsVisible(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isMobileMenuOpen]);

  return (
    <>
      <header
        ref={headerRef}
        className={`w-full flex flex-col z-50 sticky top-0 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          isVisible ? 'translate-y-0' : '-translate-y-full'
        } ${isScrolled ? 'shadow-[0_4px_30px_rgba(0,0,0,0.08)]' : 'shadow-none'}`}
      >

        {/* ───── Top Utility Bar ───── */}
        <div className={`bg-[#0F6393] w-full transition-all duration-300 ease-in-out ${isScrolled ? 'h-0 opacity-0 overflow-hidden' : 'h-[38px] opacity-100'}`}>
          <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-[38px]">
            <div className="hidden md:flex items-center gap-6 text-[12px] text-white/70 font-medium">
              <a href="tel:+971XXXXXXXX" className="flex items-center gap-1.5 hover:text-white transition-colors">
                <Phone size={12} strokeWidth={2} />
                <span>+971-XX-XXX-XXXX</span>
              </a>
              <a href="mailto:info@pinbadges.ae" className="flex items-center gap-1.5 hover:text-white transition-colors">
                <Mail size={12} strokeWidth={2} />
                <span>info@pinbadges.ae</span>
              </a>
              <span className="flex items-center gap-1.5">
                <MapPin size={12} strokeWidth={2} />
                <span>Dubai, UAE</span>
              </span>
            </div>
            <div className="flex items-center gap-4 mx-auto md:mx-0">
              <span className="text-[12px] text-amber-300/90 font-semibold tracking-wide flex items-center gap-1.5">
                <Clock size={12} />
                Mon – Sat: 9AM – 7PM
              </span>
              <span className="hidden sm:inline text-white/30">|</span>
              <span className="hidden sm:inline text-[12px] text-white/60 font-medium">Leading Custom Lapel & Enamel Pins Supplier in Dubai</span>
            </div>
          </div>
        </div>

        {/* ───── Main Header Bar ───── */}
        <div className="bg-white w-full border-b border-slate-100">
          <div className={`max-w-7xl mx-auto px-6 flex items-center justify-between gap-6 lg:gap-10 transition-all duration-300 ${isScrolled ? 'py-2.5' : 'py-4'}`}>

            {/* Logo */}
            <Link href="/" className="flex items-center gap-0 shrink-0 group select-none">
              <div className={`relative transition-all duration-500 ease-in-out ${isScrolled ? 'h-7 w-24 xl:h-8 xl:w-28' : 'h-9 w-32 xl:h-10 xl:w-36'}`}>
                <Image
                  src="/logo-web.png"
                  alt="PinBadges Logo"
                  fill
                  className="object-contain"
                  priority
                  quality={90}
                />
              </div>
            </Link>

            {/* Search Bar */}
            <div className={`flex-1 max-w-[680px] relative hidden md:flex transition-all duration-300 ${searchFocused ? 'max-w-[720px]' : ''}`}>
              <div className={`flex w-full rounded-full border-2 overflow-hidden transition-all duration-300 ${
                searchFocused 
                  ? 'border-[#0F6393] shadow-[0_0_0_3px_rgba(15,99,147,0.1)]' 
                  : 'border-slate-200 hover:border-slate-300'
              }`}>
                <input
                  type="text"
                  placeholder="Search custom pins, badges, styles..."
                  className="flex-1 px-5 py-2.5 text-[13.5px] text-slate-700 outline-none bg-transparent placeholder:text-slate-400 font-medium"
                  onFocus={() => setSearchFocused(true)}
                  onBlur={() => setSearchFocused(false)}
                />
                <button className={`px-5 flex items-center justify-center text-white shrink-0 transition-all duration-300 ${
                  searchFocused ? 'bg-[#0F6393]' : 'bg-[#0F6393]/90 hover:bg-[#0F6393]'
                }`}>
                  <Search size={17} strokeWidth={2.5} />
                </button>
              </div>
            </div>

            {/* Right Actions */}
            <div className="flex items-center gap-2 shrink-0">

              {/* Help Center */}
              <Link
                href="#"
                className="hidden lg:flex items-center gap-2 text-slate-500 hover:text-[#0F6393] transition-all duration-200 text-[13px] font-semibold px-3 py-2 rounded-lg hover:bg-[#0F6393]/5"
              >
                <MessageSquare size={16} strokeWidth={2} />
                <span>Help Center</span>
              </Link>

              {/* Divider */}
              <div className="hidden lg:block w-px h-6 bg-slate-200 mx-1"></div>

              {/* Account */}
              <Link
                href="#"
                className="hidden sm:flex items-center justify-center w-10 h-10 rounded-full text-slate-500 hover:text-[#0F6393] hover:bg-[#0F6393]/5 transition-all duration-200"
                title="Account"
              >
                <User size={20} strokeWidth={1.8} />
              </Link>

              {/* Cart */}
              <Link
                href="#"
                className="relative flex items-center justify-center w-10 h-10 rounded-full text-slate-500 hover:text-[#0F6393] hover:bg-[#0F6393]/5 transition-all duration-200"
                title="Cart"
              >
                <ShoppingCart size={20} strokeWidth={1.8} />
                <span className="absolute -top-0.5 -right-0.5 w-[18px] h-[18px] bg-gradient-to-br from-pink-500 to-rose-500 text-white text-[10px] font-bold rounded-full flex items-center justify-center shadow-sm">
                  0
                </span>
              </Link>

              {/* WhatsApp CTA */}
              <a
                href="https://wa.me/971XXXXXXXX"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden md:flex items-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white text-[12.5px] font-bold px-4 py-2.5 rounded-full transition-all duration-200 shadow-sm hover:shadow-md ml-1"
              >
                {/* WhatsApp SVG Icon */}
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                <span>WhatsApp</span>
              </a>

              {/* Mobile Toggle */}
              <button
                className="md:hidden flex items-center justify-center w-10 h-10 rounded-full text-slate-600 hover:bg-slate-100 transition-colors ml-1"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? <X size={22} strokeWidth={2} /> : <Menu size={22} strokeWidth={2} />}
              </button>
            </div>
          </div>
        </div>

        {/* ───── Bottom Navigation Tier ───── */}
        <div className="bg-white w-full border-b border-slate-100 hidden md:block">
          <div className="max-w-7xl mx-auto px-6">
            <nav className="flex items-center gap-0">
              {navLinks.map((link, idx) => (
                <div key={idx} className="relative group">
                  <Link
                    href={link.href}
                    className="relative flex items-center gap-1 px-4 py-3 text-[13.5px] font-semibold text-slate-600 hover:text-[#0F6393] transition-colors duration-200"
                  >
                    <span>{link.label}</span>
                    {link.hasDropdown && (
                      <ChevronDown size={13} strokeWidth={2.5} className="text-slate-400 group-hover:text-[#0F6393] transition-all duration-200" />
                    )}
                    {/* Hover underline */}
                    <span className="absolute bottom-0 left-4 right-4 h-[2px] bg-gradient-to-r from-[#0F6393] to-[#1a8bc4] rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                  </Link>

                  {/* Dropdown Menu */}
                  {link.hasDropdown && link.dropdownItems && (
                    <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                      <div className="bg-white rounded-2xl shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] border border-slate-100 p-2.5 min-w-[240px] flex flex-col gap-1">
                        {link.dropdownItems.map((item, i) => (
                          <Link 
                            key={i} 
                            href={item.href}
                            className="px-4 py-3 rounded-xl text-[13px] font-semibold text-slate-600 hover:text-[#0F6393] hover:bg-[#0F6393]/5 transition-colors"
                          >
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </nav>
          </div>
        </div>

      </header>

      {/* ───── Mobile Drawer Overlay ───── */}
      <div
        className={`fixed inset-0 bg-black/40 z-[60] transition-opacity duration-300 md:hidden ${
          isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
      />

      {/* ───── Mobile Drawer ───── */}
      <div
        className={`fixed top-0 right-0 h-full w-[85%] max-w-[380px] bg-white z-[70] transition-transform duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] flex flex-col md:hidden ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Drawer Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-slate-100">
          <Link href="/" className="flex items-center" onClick={() => setIsMobileMenuOpen(false)}>
            <div className="relative h-8 w-28">
              <Image
                src="/logo-web.png"
                alt="PinBadges Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
          </Link>
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="w-10 h-10 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center transition-colors"
            aria-label="Close menu"
          >
            <X size={18} strokeWidth={2.5} className="text-slate-600" />
          </button>
        </div>

        {/* Drawer Search */}
        <div className="px-6 pt-5 pb-2">
          <div className="flex w-full rounded-full border-2 border-slate-200 overflow-hidden focus-within:border-[#0F6393] focus-within:shadow-[0_0_0_3px_rgba(15,99,147,0.1)] transition-all">
            <input
              type="text"
              placeholder="Search..."
              className="flex-1 px-4 py-2.5 text-[13px] text-slate-700 outline-none placeholder:text-slate-400 font-medium"
            />
            <button className="bg-[#0F6393] text-white px-4 flex items-center justify-center">
              <Search size={16} strokeWidth={2.5} />
            </button>
          </div>
        </div>

        {/* Drawer Links */}
        <nav className="flex-1 overflow-y-auto px-3 py-3">
          {navLinks.map((link, idx) => (
            <div key={idx} className="flex flex-col">
              <Link
                href={link.href}
                onClick={!link.hasDropdown ? () => setIsMobileMenuOpen(false) : undefined}
                className="flex items-center justify-between px-4 py-3.5 rounded-xl text-[15px] font-semibold text-slate-700 hover:bg-[#0F6393]/5 hover:text-[#0F6393] transition-all duration-200"
              >
                <span>{link.label}</span>
                {link.hasDropdown && <ChevronDown size={16} className="text-slate-400" />}
              </Link>
              
              {link.hasDropdown && link.dropdownItems && (
                <div className="flex flex-col pl-4 pb-2">
                  {link.dropdownItems.map((item, i) => (
                    <Link
                      key={i}
                      href={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="px-4 py-2.5 text-[14px] font-medium text-slate-500 hover:text-[#0F6393] transition-colors"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Drawer Footer */}
        <div className="border-t border-slate-100 px-6 py-5 space-y-3">
          <Link
            href="#"
            onClick={() => setIsMobileMenuOpen(false)}
            className="flex items-center gap-3 text-[14px] font-semibold text-slate-600 hover:text-[#0F6393] transition-colors"
          >
            <MessageSquare size={18} />
            <span>Help Center</span>
          </Link>
          <a
            href="https://wa.me/971XXXXXXXX"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white text-[14px] font-bold py-3 rounded-full transition-all w-full shadow-sm"
          >
            <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            <span>Chat on WhatsApp</span>
          </a>
        </div>
      </div>
    </>
  );
}
