import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section
      className="relative w-full bg-white overflow-hidden flex items-center pt-8 md:pt-0"
      style={{ minHeight: "480px" }}
    >
      <div className="max-w-[1400px] w-full mx-auto px-6 lg:px-12 relative z-10 flex flex-col md:flex-row items-center justify-between h-full">
        {/* Left Content */}
        <div className="w-full md:w-1/2 flex flex-col items-start justify-center text-[#1b4363] space-y-5 lg:space-y-6 pb-12 md:pb-0 z-20">
          <h1 className="text-4xl md:text-5xl lg:text-[56px] font-extrabold leading-[1.1] tracking-tight text-[#0d2b3e]">
            Print{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#146b9a] to-[#00a9e0]">
              Smarter.
            </span>
            <br />
            Brand{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#146b9a] to-[#00a9e0]">
              Better.
            </span>
          </h1>
          <p className="text-base lg:text-[19px] text-slate-500/90 font-medium leading-relaxed max-w-sm mt-2">
            Your trusted partner of printing,
            <br className="hidden md:block" />
            packaging, and promotional solution.
          </p>
          <div className="pt-2">
            <Link
              href="#"
              className="px-8 py-3 bg-[#146b9a] hover:bg-[#0d4d70] text-white text-sm font-bold rounded-full transition-colors shadow-md inline-block"
            >
              Get a Quote
            </Link>
          </div>
        </div>

        {/* Right Image */}
        <div className="w-full md:w-1/2 h-[300px] md:h-full min-h-[400px] lg:min-h-[480px] relative mt-4 md:mt-0 flex items-end justify-end">
          {/* We use object-contain and push it to the bottom right to match the cluster in the screenshot */}
          <div className="absolute right-0 bottom-0 w-full h-[120%] lg:w-[130%] lg:-right-10 pointer-events-none">
            <Image
              src="/hero_products_1775637475637.png"
              alt="Assortment of Branded Promotional Products"
              fill
              className="object-contain object-bottom md:object-right-bottom drop-shadow-2xl"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
