"use client";

import Image from 'next/image';
import Link from 'next/link';

const carouselData = [
  {
    title: "CUSTOMIZED\nDRINKWARE",
    desc: "Revitalize your Refreshment Routine:\nCustomized Drinkware",
    img: "/hero_gifts_1775637506200.png",
  },
  {
    title: "CUSTOMIZED\nLAPEL PIN",
    desc: "Create Custom Lapel Pin\nthat stand out.",
    img: "/hero_products_1775637475637.png",
  },
  {
    title: "CUSTOMIZED\nLANYARD",
    desc: "Your Brand, around their neck:\nCustomized Lanyard",
    img: "/hero_gifts_1775637506200.png",
  },
  {
    title: "OFFICE\nSTATIONERY",
    desc: "Get things Done with our reliable:\nCustomized Office Stationery.",
    img: "/hero_printing_1775637492071.png",
  },
  {
    title: "CORPORATE\nUNIFORMS",
    desc: "Dress for success with premium\nCustomized Corporate Apparel.",
    img: "/hero_products_1775637475637.png",
  },
];

function Card({ item }) {
  return (
    <div className="carousel-card shrink-0 w-[350px] h-[190px] bg-[#146b9a] relative overflow-hidden flex flex-row items-center border border-sky-800 rounded">
      {/* Diagonal stripe pattern */}
      <div className="absolute inset-0 opacity-10 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.2)_25%,rgba(255,255,255,0.2)_50%,transparent_50%,transparent_75%,rgba(255,255,255,0.2)_75%,rgba(255,255,255,0.2)_100%)] bg-[length:20px_20px]"></div>

      <div className="flex-1 z-10 pl-6 py-4 flex flex-col justify-center h-full">
        <h3 className="text-white font-black text-lg md:text-[22px] leading-tight mb-2 whitespace-pre-line tracking-wide">
          {item.title}
        </h3>
        <p className="text-white/90 text-[10px] md:text-xs leading-relaxed mb-4 whitespace-pre-line font-medium pr-10">
          {item.desc}
        </p>
        <div>
          <Link href="#" className="inline-block bg-white text-slate-900 text-[10px] uppercase font-bold tracking-widest px-4 py-1.5 rounded-full hover:bg-slate-100 transition-colors shadow-sm">
            Explore Now
          </Link>
        </div>
      </div>

      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[140px] h-[140px] z-10 pointer-events-none drop-shadow-2xl">
        <Image src={item.img} alt={item.title.replace('\n', ' ')} fill className="object-contain" priority />
      </div>
    </div>
  );
}

export default function ServiceCarousel() {
  // We render the list twice so the marquee loops seamlessly
  return (
    <section className="w-full bg-[#e8eaed] py-3 overflow-hidden">
      <div className="marquee-track flex gap-4">
        {/* First copy */}
        {carouselData.map((item, idx) => (
          <Card key={`a-${idx}`} item={item} />
        ))}
        {/* Duplicate copy for seamless loop */}
        {carouselData.map((item, idx) => (
          <Card key={`b-${idx}`} item={item} />
        ))}
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .marquee-track {
          animation: marquee 30s linear infinite;
          width: max-content;
        }
        .marquee-track:hover {
          animation-play-state: paused;
        }
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}} />
    </section>
  );
}
