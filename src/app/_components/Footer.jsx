"use client";

import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, MessageCircle, Send } from "lucide-react";
import { motion } from "framer-motion";

export default function Footer() {
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Column 1: Logo & Contact */}
            <div className="flex flex-col gap-8">
              <Link href="/" className="inline-block">
                <Image
                  src="/logo-web.png"
                  alt="PrintX Advertising"
                  width={160}
                  height={50}
                  style={{ height: 'auto', width: 'auto' }}
                />
              </Link>

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="mt-1">
                    <Phone size={18} className="text-white" />
                  </div>
                  <span className="text-[15px] font-medium">
                    +971 4 223 6434
                  </span>
                </div>

                <div className="flex items-start gap-4">
                  <div className="mt-1 text-[#25D366]">
                    <MessageCircle
                      size={18}
                      fill="currentColor"
                      className="text-white"
                    />
                  </div>
                  <span className="text-[15px] font-medium">
                    +971 50 718 0562
                  </span>
                </div>

                <div className="flex items-start gap-4">
                  <div className="mt-1">
                    <Mail size={18} className="text-white" />
                  </div>
                  <span className="text-[15px] font-medium">
                    info@printx.ae
                  </span>
                </div>

                <div className="flex items-start gap-4">
                  <div className="mt-1">
                    <MapPin size={18} className="text-white" />
                  </div>
                  <span className="text-[15px] font-medium leading-relaxed">
                    Shop # 6, Bin Shabib Building 29
                    <br />
                    Hor Al Anz, Deira, Dubai. UAE.
                    <br />
                    P.O. Box: 81998
                  </span>
                </div>
              </div>
            </div>

            {/* Column 2: E-Catalogues */}
            <div>
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

            {/* Column 3: Services & More Links */}
            <div>
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

            {/* Column 4: Weekly Newsletter */}
            <div>
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
      <div className="bg-[#00AEEF] text-white py-4">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[14px] font-medium">© All rights reserved</p>

          <div className="flex items-center gap-6">
            <Link href="#" className="hover:scale-110 transition-transform">
              {/* Facebook SVG */}
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
            </Link>
            <Link href="#" className="hover:scale-110 transition-transform">
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
            </Link>
            <Link href="#" className="hover:scale-110 transition-transform">
              {/* Linkedin SVG */}
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2zM4 2a2 2 0 1 1-2 2 2 2 0 0 1 2-2z" />
              </svg>
            </Link>
            <Link href="#" className="hover:scale-110 transition-transform">
              {/* Sitemap/Grid icon */}
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
                <path d="M3 3h7v7H3zM14 3h7v7h-7zM14 14h7v7h-7zM3 14h7v7H3z" />
              </svg>
            </Link>
            <Link href="#" className="hover:scale-110 transition-transform">
              {/* Behance-like stylized 'b' or similar social icon */}
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M8.228 15.01h2.203c.493 0 .858-.067 1.094-.203.238-.135.433-.338.58-.608.147-.271.221-.606.221-1.007 0-.411-.082-.746-.245-1.002-.164-.257-.396-.447-.696-.569.231-.129.407-.306.524-.53.118-.225.177-.482.177-.773 0-.341-.06-.628-.18-.859-.12-.231-.284-.41-.492-.536-.207-.126-.445-.213-.715-.261-.271-.048-.553-.072-.848-.072H8.228v6.42zm1.488-3.778h.412c.451 0 .783.076.996.228.213.153.319.418.319.794 0 .195-.034.359-.101.492-.069.133-.182.235-.339.309-.158.073-.422.11-.795.11h-.487v-1.933zm0-1.89h.286c.375 0 .647.059.815.177.168.117.252.327.252.628 0 .141-.027.26-.081.356-.053.097-.138.172-.255.226-.118.053-.321.08-.611.08h-.406v-1.467zM16.947 11.026c-.463 0-.853.082-1.171.246-.317.164-.564.398-.74.7-.176.302-.264.664-.264 1.083 0 .428.082.783.246 1.063.164.28.401.491.71.631.309.141.677.211 1.104.211.383 0 .72-.05 1.01-.15.289-.1.542-.256.758-.466l-.371-.853c-.309.245-.662.368-1.059.368-.261 0-.472-.047-.633-.14-.161-.093-.271-.233-.331-.421h2.516l.013-.231c0-.422-.09-.777-.271-1.066-.181-.29-.429-.517-.745-.681-.316-.164-.683-.245-1.103-.245zm-.827 1.63c.03-.217.118-.393.264-.526.147-.134.341-.201.583-.201.218 0 .4.062.546.187s.245.305.295.54h-1.688z" />
              </svg>
            </Link>
          </div>
        </div>
      </div>

      {/* Floating WhatsApp Button */}
      <div className="fixed bottom-6 right-6 z-[9999] flex items-center gap-3">
        <div className="bg-white px-4 py-2 rounded-lg shadow-lg hidden md:block border border-gray-100">
          <p className="text-[13px] font-bold text-gray-800">
            Need Quote?{" "}
            <span className="text-gray-500 font-medium">Chat with us</span>
          </p>
        </div>
        <a
          href="https://wa.me/971507180562"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#25D366] text-white p-3 rounded-full shadow-2xl hover:scale-110 transition-transform duration-300 flex items-center justify-center"
        >
          <svg viewBox="0 0 24 24" className="w-8 h-8 fill-current">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
        </a>
      </div>
    </footer>
  );
}
