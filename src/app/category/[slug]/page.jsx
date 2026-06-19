import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import StructuredData from "@/app/_components/StructuredData";
import Header from "@/app/_components/Header";
import {
  CATEGORY_SEO,
  buildFaqJsonLd,
  buildPageMetadata,
  buildServiceJsonLd,
} from "@/lib/seo";
import Footer from "@/app/_components/Footer";
import { WhatsAppProvider } from "@/app/_components/WhatsAppWidget";
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
    detailedDesc: `Custom Hard Enamel Pins are the premium choice for businesses, organizations, artists, and brands looking for high-quality custom pin badges with a smooth, polished finish. Manufactured using a high-temperature baking process, hard enamel pins are known for their exceptional durability, vibrant colors, and professional appearance.

Unlike other pin styles like [Soft Enamel](/category/soft-enamel-pins) pins, hard enamel pins are polished until the enamel and metal borders are perfectly level, creating a jewelry-like finish that offers a refined and elegant look. Their scratch-resistant surface and long-lasting quality make them ideal for corporate branding, employee recognition, promotional events, schools, clubs, and creative merchandise.

Our Custom Hard Enamel Pins can be fully customized with your logo, artwork, brand colors, and unique design requirements. Whether you need custom lapel pins for a corporate event, premium metal badges for recognition programs, or branded pins for marketing campaigns, hard enamel pins provide a sophisticated solution that leaves a lasting impression.

As a trusted supplier of custom enamel pins in Dubai and across the UAE, we produce high-quality hard enamel pin badges in various shapes, sizes, and finishes. From small business orders to large corporate projects, we ensure precision craftsmanship, premium materials, and outstanding attention to detail.

Order Custom Hard Enamel Pins today and create durable, premium-quality pin badges that showcase your brand with style and professionalism.`,
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
    detailedDesc: `Custom Soft Enamel Pins are one of the most popular and budget-friendly options for creating high-quality custom pin badges with a detailed and textured finish. These pins feature raised metal borders with recessed enamel colors, giving them a distinctive 3D feel that makes designs stand out with depth and clarity.

Soft enamel pins are widely used for trading pins, promotional merchandise, corporate branding, events, schools, clubs, and creative artwork. Their versatile design and cost-effective production make them an ideal choice for both small and large-scale orders, alongside classic [Die Struck](/category/die-struck-pin-badges) pins.

Our Custom Soft Enamel Pins can be fully personalized with your logo, artwork, brand message, and custom shapes. Whether you need custom lapel pins for marketing campaigns, branded pins for giveaways, or creative designs for merchandise, soft enamel pins offer flexibility and strong visual impact.

As a trusted supplier of custom enamel pins in Dubai and across the UAE, we produce high-quality soft enamel pin badges using durable materials and precise manufacturing techniques. Each pin is crafted to ensure sharp detailing, vibrant colors, and a long-lasting finish suitable for everyday use.

Order Custom Soft Enamel Pins today and create affordable, eye-catching pin badges that effectively represent your brand, organization, or creative design.`,
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
    detailedDesc: `Custom Die Struck Pin Badges are classic all-metal pins designed for a timeless and premium appearance. These badges feature raised and recessed metal areas without enamel colors, giving a clean and sophisticated look with a jewelry-like finish.

The design is created using a precision stamping process where the artwork is pressed directly into high-quality metal, ensuring sharp detailing and durability. This makes them ideal for professional branding and formal recognition purposes.

[3D cast pins Badges](/category/3d-cast-pin-badges) are also a premium all-metal option, designed for more complex and detailed shapes. The casting process allows deeper textures, curves, and multi-layered effects, making them perfect for intricate logos and creative designs that require a strong 3D appearance.

Both Die Struck and 3D Cast Pin Badges are widely used for corporate recognition, employee awards, academic achievements, clubs, military insignia, and premium branding projects. Their durable metal finish ensures long-lasting quality and a professional impression.

We provide fully customized metal pin badges in Dubai and across the UAE, allowing you to design unique shapes, logos, and finishes according to your requirements. Each pin is crafted with precision to ensure high-quality detailing and a polished final look.

Order Custom Die Struck Pin Badges or 3D Cast Pin Badges today to create premium metal pins that reflect professionalism and brand identity.`,
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
    detailedDesc: `Custom 3D Cast Pin Badges are designed to deliver incredible depth and detail for sculptural, multi-level designs. These pins are ideal for brands and creators who want a highly detailed and premium metal finish that stands out with a strong visual impact.

Unlike standard 2D pins, 3D cast pins are crafted using a mold-based casting process that allows for rounded edges, complex curves, and varying levels of depth. This technique makes it possible to recreate highly detailed designs such as lifelike faces, vehicles, miniature animals, and sculptural logos with precision.

For added protection and premium finishing, 3D cast pins can also be combined with [Epoxy Pins](/category/photo-dome-pins) or Epoxy Badges coating, which adds a glossy protective layer to the surface. This improves durability, enhances color protection, and gives the pin a smooth, polished appearance.

These Custom 3D Cast Pin Badges are widely used for corporate branding, promotional merchandise, collector items, event souvenirs, and artistic designs where detail and quality matter the most.

We provide fully customized 3D cast pin solutions in Dubai and across the UAE, allowing full control over shape, texture, and finish. Each pin is manufactured with high precision to ensure a premium look and long-lasting durability.

Order Custom 3D Cast Pin Badges today and create highly detailed metal pins that showcase your brand with depth, creativity, and professional quality.`,
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
    detailedDesc: `Epoxy Pins are offset-printed custom pins designed with a protective crystal-clear epoxy dome that enhances both durability and visual appeal. These pins are ideal for highly detailed artwork that cannot be achieved with traditional enamel filling.

When a design includes gradients, drop shadows, or intricate photographic details that cannot be broken down into solid enamel colors, photo dome (offset printed) pins become the perfect solution. The artwork is printed directly onto the metal base and then sealed under a strong epoxy coating, ensuring long-lasting protection and a smooth glossy finish.

In modern manufacturing, similar effects can also be achieved using Custom UV Pins technology, which allows full-color printing with sharp details and vibrant results. This makes UV printed pins a great alternative for designs that require high-resolution graphics, logos, and complex color transitions.

Epoxy Pins are widely used for promotional merchandise, corporate branding, event giveaways, and custom collectibles. They are also popular choices for [Trading pins Badges](/category/trading-pin-badges) where fine detail and color accuracy are important.

We provide fully customized Epoxy Pins in Dubai and across the UAE, along with Custom UV Pins options for advanced full-color printing requirements. Each pin is produced with precision to ensure clarity, durability, and professional quality.

Order Epoxy Pins or Custom UV Pins today and create eye-catching, high-detail pins that represent your brand with maximum impact.`,
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
    detailedDesc: `Custom UV Pins are highly detailed, full-color printed pins designed for sharp graphics, vibrant colors, and modern branding needs. These pins use advanced UV printing technology to directly apply high-resolution artwork onto the metal surface, making them ideal for complex designs that require photo-quality results.

Highly customized Custom UV Pins are perfect for events, sports teams, promotional campaigns, and collector merchandise. Their ability to capture fine details and bright color transitions makes them a popular choice for brands looking to create visually striking pin designs.

Trading pins are an essential part of sports tournaments and fan events, and Custom UV Pins play a major role in making them stand out. To increase their value and appeal, these pins can also include special add-ons such as glitter effects, spinners, sliders, bobbleheads, or blinking LED lights, making them more interactive and collectible.

We provide fully customized [Custom Pins](/) in Dubai and across the UAE, offering complete flexibility in design, shape, and finishing. Each pin is produced with high-precision UV printing to ensure durability, sharp detailing, and long-lasting color vibrancy.

Order Custom UV Pins today and create eye-catching, interactive pins that elevate your brand, team identity, or event experience.`,
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
      { question: "How fast can I get custom trading pins?", answer: "Standard production is 10-20 days, but for peak tournament seasons, we recommend ordering at least 4 weeks in advance to ensure on-time delivery." }
    ]
  }
};

export function generateStaticParams() {
  return Object.keys(categoryData).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const seo = CATEGORY_SEO[slug];

  if (!seo) {
    return {};
  }

  return buildPageMetadata({
    title: seo.title,
    description: seo.description,
    path: `/category/${slug}`,
  });
}

function renderTextWithLinks(text) {
  const regex = /\[([^\]]+)\]\(([^)]+)\)/g;
  const parts = [];
  let lastIndex = 0;
  let match;

  while ((match = regex.exec(text)) !== null) {
    const [_, anchorText, url] = match;
    const matchIndex = match.index;

    if (matchIndex > lastIndex) {
      parts.push(text.substring(lastIndex, matchIndex));
    }

    const isExternal = url.startsWith("http");
    if (isExternal) {
      parts.push(
        <a
          key={matchIndex}
          href={url}
          className="text-[#0F6393] underline hover:text-[#00AEEF] transition-colors font-bold"
          target="_blank"
          rel="noopener noreferrer"
        >
          {anchorText}
        </a>
      );
    } else {
      parts.push(
        <Link
          key={matchIndex}
          href={url}
          className="text-[#0F6393] underline hover:text-[#00AEEF] transition-colors font-bold"
        >
          {anchorText}
        </Link>
      );
    }

    lastIndex = regex.lastIndex;
  }

  if (lastIndex < text.length) {
    parts.push(text.substring(lastIndex));
  }

  return parts.length > 0 ? parts : text;
}

export default async function CategoryPage({ params }) {
  const { slug } = await params;
  const category = categoryData[slug];

  if (!category) {
    notFound();
  }

  const seo = CATEGORY_SEO[slug];

  return (
    <WhatsAppProvider>
    <>
      {seo && (
        <StructuredData
          data={buildServiceJsonLd({
            name: seo.title.replace(" | PrintX DXB", ""),
            description: seo.description,
            path: `/category/${slug}`,
          })}
        />
      )}
      <StructuredData data={buildFaqJsonLd(category.faqs)} />
      <Header />
      <main className="flex-1 w-full bg-slate-50 relative">
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
              <div className="text-[15px] text-slate-600 font-medium leading-relaxed mb-8 space-y-4">
                {category.detailedDesc.split("\n\n").map((para, index) => (
                  <p key={index}>{renderTextWithLinks(para)}</p>
                ))}
              </div>

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
    </WhatsAppProvider>
  );
}
