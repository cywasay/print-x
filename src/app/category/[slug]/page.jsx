import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Header from "@/app/_components/Header";
import Footer from "@/app/_components/Footer";
import GetAQuote from "@/app/_components/GetAQuote";
import HowItWorks from "@/app/_components/HowItWorks";
import GoogleReviews from "@/app/_components/GoogleReviews";

const categoryData = {
  "hard-enamel-pins": {
    pinStyleId: "hard-enamel",
    name: "Hard Enamel Pins",
    desc: "The highest quality, jewelry-like pin with a smooth finish.",
    detailedDesc: "Hard enamel pins are highly durable and offer a classic, premium look. They are baked at high temperatures to cure the enamel, then polished flat so the metal borders and enamel colors are on the exact same level. Perfect for high-end corporate gifts and creative artist pins.",
    img: "/lapel-categories/hard-enamel-pin.jpg",
    features: ["Smooth, flush surface", "Highest perceived value", "Extremely durable", "Bright, vivid colors"]
  },
  "soft-enamel-pins": {
    pinStyleId: "soft-enamel",
    name: "Soft Enamel Pins",
    desc: "The most popular, budget-friendly pin with a textured, 3D feel.",
    detailedDesc: "Soft enamel pins have raised metal borders and recessed enamel colors, giving them a textured feel. Fast, cost-effective, and versatile, they are the most popular choice for trading pins, promotional merch, and creative designs.",
    img: "/lapel-categories/soft-enamel-pin.jpg",
    features: ["Textured 3D feel", "More cost-effective", "Great for intricate designs", "Can be combined with epoxy dome"]
  },
  "die-struck-pin-badges": {
    pinStyleId: "die-struck",
    name: "Die Struck Pin Badges",
    desc: "Classic all-metal pins with no enamel colors, featuring raised and recessed areas.",
    detailedDesc: "Die-struck pins offer a highly sophisticated, jewelry-like finish without the use of enamel. The design is stamped into the metal, creating raised and recessed areas. Perfect for subdued branding, corporate recognition, and academic awards.",
    img: "/lapel-categories/die-cast-pin.jpg",
    features: ["All-metal finish", "Elegant, timeless look", "Variety of metal platings", "Sandblasted options available"]
  },
  "3d-cast-pin-badges": {
    pinStyleId: "3d-cast",
    name: "3D Cast Pin Badges",
    desc: "Incredible depth and detail for sculptural, multi-level designs.",
    detailedDesc: "Unlike standard 2D pins, 3D cast pins are crafted using a mold to allow for rounded edges, complex curves, and varying levels of depth. They're perfect for recreating lifelike faces, detailed vehicles, miniature animals, or sculptural logos.",
    img: "/lapel-categories/3d-cast-pin.jpg",
    features: ["Sculptural 3D levels", "High-impact realism", "Heavier, premium weight", "Ideal for complex objects"]
  },
  "photo-dome-pins": {
    pinStyleId: "epoxy-pin",
    name: "Photo Dome Pins",
    desc: "Offset-printed designs sealed with a protective crystal-clear epoxy dome.",
    detailedDesc: "When a design has gradients, drop shadows, or intricate photographic details that cannot be broken down into solid enamel colors, photo dome (offset printed) pins are the solution. The art is printed directly onto the metal and protected with a durable epoxy dome.",
    img: "/lapel-categories/epoxy-pin.jpg",
    features: ["Supports full-color gradients", "Exact color matching", "Clear protective epoxy dome", "Fastest production time"]
  },
  "trading-pin-badges": {
    pinStyleId: "custom-uv",
    name: "Trading Pin Badges",
    desc: "Highly customized, interactive pins perfect for events, sports teams, and collections.",
    detailedDesc: "Trading pins are an essential part of sports tournaments and fan events. To make them truly stand out, they often incorporate special add-ons like glitters, spinners, sliders, bobbleheads, or blinking LED lights to increase their trade value.",
    img: "/lapel-categories/custom-UV-pin.jpg",
    features: ["Interactive options (sliders, spinners)", "High collectible value", "Glow-in-the-dark & glitter options", "Perfect for youth sports"]
  }
};

export function generateStaticParams() {
  return Object.keys(categoryData).map((slug) => ({ slug }));
}

export default async function CategoryPage({ params }) {
  const { slug } = await params;
  const category = categoryData[slug];

  if (!category) {
    notFound();
  }

  return (
    <>
      <Header />
      <main className="flex-1 w-full bg-slate-50">
        <section className="py-24 relative overflow-hidden bg-white border-b border-slate-200/50">
          <div className="absolute inset-0 opacity-[0.02] pointer-events-none" 
               style={{ backgroundImage: 'radial-gradient(#0F6393 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

          <div className="max-w-[1200px] mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center gap-12 lg:gap-20">
            <div className="flex-1 w-full">
              <span className="text-[12px] font-black tracking-[0.4em] text-[#00AEEF] uppercase mb-4 block">Premium Category</span>
              <h1 className="text-4xl md:text-5xl lg:text-[56px] font-bold leading-[1.1] tracking-tight text-[#0F6393] mb-6">
                Custom {category.name}.
              </h1>
              <p className="text-lg text-slate-500 font-bold leading-relaxed mb-4">
                {category.desc}
              </p>
              <p className="text-[15px] text-slate-600 font-medium leading-relaxed mb-8">
                {category.detailedDesc}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                {category.features.map((feat, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 size={18} className="text-[#0F6393]" />
                    <span className="text-sm font-bold text-slate-700">{feat}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href={`/quote?style=${category.pinStyleId}`}
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-[#0F6393] text-white font-black tracking-widest text-[11px] uppercase hover:bg-[#0F6393] transition-colors shadow-lg"
                >
                  Start Your Design
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>

            <div className="flex-1 w-full relative">
              <div className="w-full aspect-[4/3] relative rounded-3xl overflow-hidden shadow-[0_20px_50px_-20px_rgba(0,0,0,0.15)] ring-1 ring-slate-100">
                <img 
                  src={category.img} 
                  alt={category.name}
                  className="w-full h-full object-cover" 
                />
              </div>
            </div>
          </div>
        </section>

        <HowItWorks />
        <GetAQuote />
        <GoogleReviews />
      </main>
      <Footer />
    </>
  );
}
