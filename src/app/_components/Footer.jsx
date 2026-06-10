"use client";

import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, MessageCircle, Send } from "lucide-react";
import { motion } from "framer-motion";
import { CONTACT, SITE_LOGO_FOOTER, SITE_LOGO_ALT, SOCIAL_LINKS } from "@/lib/contact";
import { WhatsAppFloatingButton, useWhatsAppPicker } from "@/app/_components/WhatsAppWidget";

export default function Footer() {
  const { open: openWhatsApp } = useWhatsAppPicker();
  const cataLogues = [
    "Technology",
    "Eco-Friendly",
    "USB Flash",
    "Drinkware",
    "Wallet & Keychain",
    "Charging Cables",
  ];

  const services = [
    "Graphic Designing",
    "Promotional Gifts",
    "Large Format Printing",
    "Digital / Offset Printing",
  ];

  const moreLinks = ["FAQS", "Reviews", "Return & Refund Policy"];

  return (
    <footer className="w-full font-barlow">
      {/* Main Footer Section */}
      <div className="bg-[#0F6393] text-white pt-16 pb-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
            {/* Column 1: Logo & Contact */}
            <div className="flex flex-col gap-8 lg:col-span-3 relative z-10">
              <Link href="/" className="inline-block">
                <div className="relative w-[200px] h-[52px]">
                  <Image
                    src={SITE_LOGO_FOOTER}
                    alt={SITE_LOGO_ALT}
                    fill
                    className="object-contain object-left"
                    quality={90}
                    sizes="200px"
                  />
                </div>
              </Link>

              <div className="flex flex-row items-start gap-6 md:flex-col md:gap-4 max-w-full">
                <div className="flex items-start gap-4 flex-1 min-w-0 md:order-4">
                  <div className="mt-1 shrink-0">
                    <MapPin size={18} className="text-white" />
                  </div>
                  <span className="text-[15px] font-medium leading-relaxed">
                    {CONTACT.addressLines.map((line, i) => (
                      <span key={line}>
                        {line}
                        {i < CONTACT.addressLines.length - 1 && <br />}
                      </span>
                    ))}
                  </span>
                </div>

                <div className="flex flex-col gap-4 flex-1 min-w-0 md:order-1">
                  <div className="flex items-start gap-4">
                    <div className="mt-1 shrink-0">
                      <Phone size={18} className="text-white" />
                    </div>
                    <a href={CONTACT.phoneHref} className="text-[15px] font-medium hover:text-white/80 transition-colors">
                      {CONTACT.phone}
                    </a>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="mt-1 shrink-0 text-[#25D366]">
                      <MessageCircle
                        size={18}
                        fill="currentColor"
                        className="text-white"
                      />
                    </div>
                    <button
                      type="button"
                      onClick={openWhatsApp}
                      className="text-[15px] font-medium hover:text-white/80 transition-colors text-left"
                    >
                      {CONTACT.whatsapp}
                    </button>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="mt-1 shrink-0">
                      <Mail size={18} className="text-white" />
                    </div>
                    <a href={CONTACT.emailHref} className="text-[15px] font-medium hover:text-white/80 transition-colors">
                      {CONTACT.email}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Columns 2 & 3: Footer links — centered on desktop */}
            <div className="md:col-span-2 lg:col-span-6 flex flex-col sm:flex-row gap-12 lg:gap-20 justify-center lg:justify-center relative z-20 pointer-events-auto">
              <div className="min-w-[160px]">
                <h4 className="text-[18px] font-bold uppercase tracking-wider mb-8">
                  E-CATALOGUES
                </h4>
                <ul className="space-y-4">
                  {cataLogues.map((item) => (
                    <li key={item}>
                      <Link
                        href="#"
                        className="text-blue-100/80 hover:text-white transition-colors text-[15px] font-medium"
                      >
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="min-w-[160px]">
                <h4 className="text-[18px] font-bold uppercase tracking-wider mb-8">
                  SERVICES
                </h4>
                <ul className="space-y-4 mb-10">
                  {services.map((item) => (
                    <li key={item}>
                      <Link
                        href="#"
                        className="text-blue-100/80 hover:text-white transition-colors text-[15px] font-medium"
                      >
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>

                <h4 className="text-[18px] font-bold uppercase tracking-wider mb-6">
                  MORE LINKS
                </h4>
                <ul className="space-y-4">
                  {moreLinks.map((item) => (
                    <li key={item}>
                      <Link
                        href="#"
                        className="text-blue-100/80 hover:text-white transition-colors text-[15px] font-medium"
                      >
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Column 4: Weekly Newsletter */}
            <div className="lg:col-span-3 relative z-10">
              <h4 className="text-[18px] font-bold uppercase tracking-wider mb-8">
                WEEKLY NEWSLETTER
              </h4>
              <div className="flex flex-col gap-4">
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full bg-white text-black px-4 py-3 rounded-sm outline-none placeholder:text-gray-400"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full bg-white text-black px-4 py-3 rounded-sm outline-none placeholder:text-gray-400"
                />
                <button className="w-full bg-[#34B3F1] hover:bg-[#2da3e0] text-white font-bold py-3 px-6 rounded-sm transition-all uppercase tracking-widest text-[14px]">
                  SUBSCRIBE
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar Section */}
      <div className="bg-[#00AEEF] text-white py-4 relative z-10">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative flex flex-col md:flex-row items-center justify-center min-h-[52px] gap-4">
          <p className="text-[14px] font-medium md:absolute md:left-6 lg:left-12">
            © All rights reserved
          </p>

          <div className="flex items-center gap-6 relative z-10">
            <a
              href={SOCIAL_LINKS.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="PrintX on Facebook"
              className="hover:scale-110 transition-transform"
            >
              {/* Facebook SVG */}
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
            </a>
            <a
              href={SOCIAL_LINKS.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="PrintX on Instagram"
              className="hover:scale-110 transition-transform"
            >
              {/* Instagram SVG */}
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </a>
            <a
              href={SOCIAL_LINKS.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="PrintX on LinkedIn"
              className="hover:scale-110 transition-transform"
            >
              {/* Linkedin SVG */}
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2zM4 2a2 2 0 1 1-2 2 2 2 0 0 1 2-2z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <WhatsAppFloatingButton />
    </footer>
  );
}
