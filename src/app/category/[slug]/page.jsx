import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Header from "@/app/_components/Header";
import Footer from "@/app/_components/Footer";
import GetAQuote from "@/app/_components/GetAQuote";
import HowItWorks from "@/app/_components/HowItWorks";
import VisualSteps from "@/app/_components/VisualSteps";
import ImageShowcase from "@/app/_components/ImageShowcase";
import GoogleReviews from "@/app/_components/GoogleReviews";
import FAQ from "@/app/_components/FAQ";

const categoryData = {
  "hard-enamel-pins": {
    pinStyleId: "hard-enamel",
    name: "Hard Enamel Pins",
    desc: "The highest quality, jewelry-like pin with a smooth finish.",
    detailedDesc: "Hard enamel pins are highly durable and offer a classic, premium look. They are baked at high temperatures to cure the enamel, then polished flat so the metal borders and enamel colors are on the exact same level. Perfect for high-end corporate gifts and creative artist pins.",
    img: "/lapel-categories/hard-enamel-pin.jpg",
    features: ["Smooth, flush surface", "Highest perceived value", "Extremely durable", "Bright, vivid colors"],
    video: "/videos/hard-enamel-pin.mp4",
    gallery: [
      "/hard-lapel-pins/1.jpg",
      "/hard-lapel-pins/6.jpg",
      "/hard-lapel-pins/5.jpg",
      "/hard-lapel-pins/4.jpg",
      "/hard-lapel-pins/2.jpg",
      "/hard-lapel-pins/3.jpg",
    ],
    faqs: [
      { question: "Is hard enamel better than soft enamel?", answer: "It's considered higher quality. Because it's polished flat, the surface is smooth and jewelry-like. It's the best option for corporate branding and high-end merchandise." },
      { question: "Can I use detailed artwork with hard enamel?", answer: "Yes, but very thin lines may be broadened slightly during the polishing process. Our designers will review your art to ensure it's hard-enamel compatible." },
      { question: "Are hard enamel pins scratch-resistant?", answer: "They are highly durable and much more resistant to daily wear and tear compared to other pin styles." }
    ]
  },
  "soft-enamel-pins": {
    pinStyleId: "soft-enamel",
    name: "Soft Enamel Pins",
    desc: "The most popular, budget-friendly pin with a textured, 3D feel.",
    detailedDesc: "Soft enamel pins have raised metal borders and recessed enamel colors, giving them a textured feel. Fast, cost-effective, and versatile, they are the most popular choice for trading pins, promotional merch, and creative designs.",
    img: "/lapel-categories/soft-enamel-pin.jpg",
    features: ["Textured 3D feel", "More cost-effective", "Great for intricate designs", "Can be combined with epoxy dome"],
    video: "/videos/product.mp4",
    gallery: [
      "/soft-lapel-pins/1.jpg",
      "/soft-lapel-pins/6.jpg",
      "/soft-lapel-pins/5.jpg",
      "/soft-lapel-pins/4.jpg",
      "/soft-lapel-pins/2.jpg",
      "/soft-lapel-pins/3.jpg",
    ],
    faqs: [
      { question: "What is the main difference with soft enamel?", answer: "The enamel sits lower than the metal walls, creating a textured 3D feel that many collectors prefer. It's also categorized as the most budget-friendly option." },
      { question: "What is an epoxy dome?", answer: "It's a clear protective coating we can add over soft enamel to protect the paint and give it a smooth, rounded finish like a hard enamel pin." },
      { question: "Can I have custom shapes for soft enamel?", answer: "Absolutely! Soft enamel is perfect for unique custom shapes that follow the outline of your logo or character." }
    ]
  },
  "die-struck-pin-badges": {
    pinStyleId: "die-struck",
    name: "Die Struck Pin Badges",
    desc: "Classic all-metal pins with no enamel colors, featuring raised and recessed areas.",
    detailedDesc: "Die-struck pins offer a highly sophisticated, jewelry-like finish without the use of enamel. The design is stamped into the metal, creating raised and recessed areas. Perfect for subdued branding, corporate recognition, and academic awards.",
    img: "/lapel-categories/die-cast-pin.jpg",
    features: ["All-metal finish", "Elegant, timeless look", "Variety of metal platings", "Sandblasted options available"],
    video: "/videos/die-struct-pin.mp4",
    gallery: [
      "/die-struck-pin-badges/1.jpg",
      "/die-struck-pin-badges/6.jpg",
      "/die-struck-pin-badges/5.jpg",
      "/die-struck-pin-badges/4.jpg",
      "/die-struck-pin-badges/2.jpg",
      "/die-struck-pin-badges/3.jpg",
    ],
    faqs: [
      { question: "What are die struck pins best for?", answer: "They are ideal for professional, clean branding where color isn't needed. They rely on the contrast between polished and recessed (sandblasted) metal surfaces." },
      { question: "What metal platings do you offer?", answer: "We offer Gold, Silver, Copper, Bronze, and Black Nickel in both high-polish and antique finishes." },
      { question: "Can you make these in antique gold?", answer: "Yes, antique finishes are very popular for die-struck pins as they make the recessed details stand out with a vintage look." }
    ]
  },
  "3d-cast-pin-badges": {
    pinStyleId: "3d-cast",
    name: "3D Cast Pin Badges",
    desc: "Incredible depth and detail for sculptural, multi-level designs.",
    detailedDesc: "Unlike standard 2D pins, 3D cast pins are crafted using a mold to allow for rounded edges, complex curves, and varying levels of depth. They're perfect for recreating lifelike faces, detailed vehicles, miniature animals, or sculptural logos.",
    img: "/lapel-categories/3d-cast-pin.jpg",
    features: ["Sculptural 3D levels", "High-impact realism", "Heavier, premium weight", "Ideal for complex objects"],
    video: "/videos/3D-cast-pin.mp4",
    gallery: [
      "/3d-cast-pin-badges/1.jpg",
      "/3d-cast-pin-badges/6.jpg",
      "/3d-cast-pin-badges/5.jpg",
      "/3d-cast-pin-badges/4.jpg",
      "/3d-cast-pin-badges/2.jpg",
      "/3d-cast-pin-badges/3.jpg",
    ],
    faqs: [
      { question: "How is 3D casting different from 2D?", answer: "Standard pins have two levels (raised and recessed). 3D casting allows for infinite levels of depth, rounded edges, and complex curves like a statue." },
      { question: "Is there an extra mold fee for 3D?", answer: "3D molds are more complex to create, so the initial setup cost is higher, but the final product is significantly more impressive." },
      { question: "Can I add color to 3D pins?", answer: "Yes, we can combine 3D sculptural metal with soft enamel coloring in specific areas." }
    ]
  },
  "photo-dome-pins": {
    pinStyleId: "epoxy-pin",
    name: "Photo Dome Pins",
    heading: "Epoxy Pins",
    desc: "Offset-printed designs sealed with a protective crystal-clear epoxy dome.",
    detailedDesc: "When a design has gradients, drop shadows, or intricate photographic details that cannot be broken down into solid enamel colors, photo dome (offset printed) pins are the solution. The art is printed directly onto the metal and protected with a durable epoxy dome.",
    img: "/epoxy.png",
    features: ["Supports full-color gradients", "Exact color matching", "Clear protective epoxy dome", "Fastest production time"],
    video: "/videos/epoxy.mp4",
    gallery: [
      "/epoxy-pins/1.jpg",
      "/epoxy.png",
      "/epoxy-pins/5.jpg",
      "/epoxy-pins/4.jpg",
      "/epoxy-pins/2.jpg",
      "/epoxy-pins/3.jpg",
    ],
    faqs: [
      { question: "When should I choose photo dome pins?", answer: "Whenever your artwork contains gradients, shadows, or photo-realistic details that can't be separated by metal lines." },
      { question: "How do you match my brand colors?", answer: "We print using CMYK or Pantone matching directly onto the metal, ensuring your brand colors are accurately represented." },
      { question: "What is the turnaround time?", answer: "Photo dome pins have the fastest production time, making them the best choice for urgent events and tight deadlines." }
    ]
  },
  "trading-pin-badges": {
    pinStyleId: "custom-uv",
    name: "Custom UV Pins",
    desc: "Highly customized, interactive pins perfect for events, sports teams, and collections.",
    detailedDesc: "Trading pins are an essential part of sports tournaments and fan events. To make them truly stand out, they often incorporate special add-ons like glitters, spinners, sliders, bobbleheads, or blinking LED lights to increase their trade value.",
    img: "/lapel-categories/custom-UV-pin.jpg",
    features: ["Interactive options (sliders, spinners)", "High collectible value", "Glow-in-the-dark & glitter options", "Perfect for youth sports"],
    video: "/videos/custom-UV-pin.mp4",
    gallery: [
      "/custom-UV-pins/1.jpg",
      "/custom-UV-pins/6.jpg",
      "/custom-UV-pins/5.jpg",
      "/custom-UV-pins/4.jpg",
      "/custom-UV-pins/2.jpg",
      "/custom-UV-pins/3.jpg",
    ],
    faqs: [
      { question: "What are the most popular add-ons for trading pins?", answer: "Glitters and glow-in-the-dark paints are the most cost-effective. For maximum trade value, we recommend sliders, spinners, or bobbleheads." },
      { question: "Can you help with team trading designs?", answer: "Yes! Our design team specializes in sports trading pins and can help incorporate your team's logo, colors, and player numbers into a highly tradable design." },
      { question: "How fast can I get custom trading pins?", answer: "Standard production is 10-14 days, but for peak tournament seasons, we recommend ordering at least 4 weeks in advance to ensure on-time delivery." }
    ]
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
        <section className="pt-12 pb-20 md:py-24 relative overflow-hidden bg-white border-b border-slate-200/50">
          {/* Enhanced Banner Background */}
          <div className="absolute inset-0 z-0 overflow-hidden">
            <div className="absolute inset-0 bg-slate-50/50" />
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
                 style={{ backgroundImage: 'radial-gradient(#0F6393 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
            
            {/* Subtle category-themed background element */}
            <div className="absolute -right-20 -top-20 w-[600px] h-[600px] bg-[#00AEEF]/5 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute -left-20 -bottom-20 w-[600px] h-[600px] bg-[#0F6393]/5 rounded-full blur-[100px] pointer-events-none" />
          </div>

          <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center gap-12 lg:gap-20">
            <div className="flex-1 w-full">
              <span className="text-[12px] font-black tracking-[0.4em] text-[#00AEEF] uppercase mb-4 block">Premium Category</span>
              <h1 className="text-4xl md:text-5xl lg:text-[56px] font-bold leading-[1.1] tracking-tight text-[#0F6393] mb-6">
                {category.heading || `Custom ${category.name}.`}
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
              <div className="w-full aspect-[4/3] relative rounded-3xl overflow-hidden shadow-[0_20px_50px_-20px_rgba(0,0,0,0.2)] ring-1 ring-slate-100 bg-slate-100">
                {category.video ? (
                  <video
                    src={category.video}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <Image
                    src={category.gallery[0]}
                    alt={`${category.name} featured product`}
                    fill
                    className="object-cover"
                    priority
                    quality={90}
                    sizes="(max-width: 768px) 100vw, 600px"
                  />
                )}
                
                {/* Floating Content Indicator over media */}
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/20 to-transparent p-6 pointer-events-none">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-[#00AEEF] animate-pulse" />
                    <span className="text-[10px] text-white/90 font-bold uppercase tracking-widest pl-1">
                      {category.video ? "Live Product Showcase" : "Featured Product"}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <ImageShowcase images={category.gallery} />
        <VisualSteps />
        <HowItWorks />
        <GetAQuote />
        <FAQ faqs={category.faqs} title="Information" subtitle={`${category.name} FAQ`} />
        <GoogleReviews />
      </main>
      <Footer />
    </>
  );
}
