"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const GALLERY_IMAGES = [
  "/lapel-categories/hard-enamel-pin.jpg",
  "/lapel-categories/soft-enamel-pin.jpg",
  "/lapel-categories/3d-cast-pin.jpg",
  "/lapel-categories/die-cast-pin.jpg",
  "/lapel-categories/epoxy-pin.jpg",
  "/lapel-categories/custom-UV-pin.jpg",
];

export default function ImageShowcase({ images }) {
  const displayImages = images && images.length > 0 ? images : GALLERY_IMAGES;
  return (
    <section className="py-20 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0F6393] mb-4">
            Product Showcase
          </h2>
          <p className="text-slate-500 font-medium">
            Explore our premium collection of custom-crafted pins.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 items-start">
          
          {/* Column 1 */}
          <div className="flex flex-col gap-4 md:gap-6">
            <div className="relative aspect-square rounded-3xl overflow-hidden shadow-lg border border-slate-100">
              <Image 
                src={displayImages[0]} 
                alt="Custom lapel pin showcase 1" 
                fill 
                className="object-cover"
                sizes="(max-width: 768px) 50vw, 25vw"
                quality={85}
              />
            </div>
            <div className="relative aspect-square rounded-3xl overflow-hidden shadow-lg border border-slate-100">
              <Image 
                src={displayImages[4]} 
                alt="Custom lapel pin showcase 2" 
                fill 
                className="object-cover"
                sizes="(max-width: 768px) 50vw, 25vw"
                quality={85}
              />
            </div>
          </div>

          {/* Combined Middle Section (Col 2 & 3) */}
          <div className="col-span-2 flex flex-col gap-4 md:gap-6">
            {/* The two tall images side by side */}
            <div className="grid grid-cols-2 gap-4 md:gap-6">
              <div className="relative aspect-[3/5] rounded-3xl overflow-hidden shadow-lg border border-slate-100">
                <Image 
                  src={displayImages[1]} 
                  alt="Premium pin design detail 1" 
                  fill 
                  className="object-cover"
                  sizes="(max-width: 768px) 50vw, 25vw"
                  quality={85}
                />
              </div>
              <div className="relative aspect-[3/5] rounded-3xl overflow-hidden shadow-lg border border-slate-100">
                <Image 
                  src={displayImages[2]} 
                  alt="Premium pin design detail 2" 
                  fill 
                  className="object-cover"
                  sizes="(max-width: 768px) 50vw, 25vw"
                  quality={85}
                />
              </div>
            </div>
            
            {/* The Text Block - Now directly inside the same vertical flow as the images, filling the "Empty Space" */}
            <div className="flex flex-col items-center text-center px-4 pt-2">
              <h3 className="text-xl md:text-[28px] font-bold text-[#0F6393] leading-tight mb-2">
                Premium Craftsmanship & Quality
              </h3>
              <p className="text-slate-500 font-medium max-w-md leading-relaxed text-sm">
                Every pin we create is a masterpiece of precision and detail, handcrafted with the highest quality materials.
              </p>
            </div>
          </div>

          {/* Column 4 */}
          <div className="flex flex-col gap-4 md:gap-6">
            <div className="relative aspect-square rounded-3xl overflow-hidden shadow-lg border border-slate-100">
              <Image 
                src={displayImages[3]} 
                alt="Custom badge showcase 1" 
                fill 
                className="object-cover"
                sizes="(max-width: 768px) 50vw, 25vw"
                quality={85}
              />
            </div>
            <div className="relative aspect-square rounded-3xl overflow-hidden shadow-lg border border-slate-100">
              <Image 
                src={displayImages[5]} 
                alt="Custom badge showcase 2" 
                fill 
                className="object-cover"
                sizes="(max-width: 768px) 50vw, 25vw"
                quality={85}
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
