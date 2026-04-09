import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <>
    <section
      className="relative w-full overflow-hidden flex items-center py-20 lg:py-0"
      style={{ minHeight: "600px" }}
    >
      {/* Background Image */}
      <Image
        src="/web-home-page-banner.jpg"
        alt="PrintX Hero Banner"
        fill
        className="object-cover object-center md:object-right lg:object-center"
        priority
      />
      
      {/* Soft Overlay for readability if needed (optional) */}
      <div className="absolute inset-0 bg-[#0d2b3e]/10 pointer-events-none" />

      <div className="max-w-[1400px] w-full mx-auto px-6 lg:px-12 relative z-10 flex items-center h-full">
        {/* Left Content */}
        <div className="w-full md:w-[60%] flex flex-col items-start justify-center space-y-6 md:space-y-8 z-20">
          <h1 className="text-4xl md:text-5xl lg:text-[72px] font-semibold leading-[1.05] tracking-tight text-white drop-shadow-sm">
            Print{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-400">
              Smarter.
            </span>
            <br />
            Brand{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-400">
              Better.
            </span>
          </h1>
          <p className="text-base lg:text-[22px] text-white/80 font-medium leading-relaxed max-w-xl mt-2">
            Your trusted provider of high-quality printing,
            <br className="hidden md:block" />
            bespoke packaging, and premium promotional solutions.
          </p>
          <div className="pt-6 flex flex-wrap gap-5">
            <Link
              href="#"
              className="px-10 py-4 bg-white text-[#146b9a] hover:bg-blue-50 text-base font-bold rounded-full transition-all shadow-[0_10px_30px_rgba(255,255,255,0.2)] hover:shadow-[0_15px_40px_rgba(255,255,255,0.3)] hover:-translate-y-1 inline-block"
            >
              Get a Quote
            </Link>
            <Link
              href="#"
              className="px-10 py-4 border-2 border-white/40 hover:border-white text-white text-base font-bold rounded-full transition-all hover:bg-white/10 backdrop-blur-md inline-block"
            >
              Our Services
            </Link>
          </div>
        </div>
      </div>
    </section>
    <div className="bg-[#51A9FF] py-3.5 md:py-4 text-white">
      <div className="max-w-[1400px] mx-auto px-6 flex flex-col md:flex-row justify-center items-center gap-3 md:gap-8 text-[11px] md:text-[13px] font-bold uppercase tracking-[0.05em] text-center">
        <span className="opacity-100">Top-Quality, Affordable, Custom-Made Prints with Premium Craftsmanship</span>
        
        <div className="hidden md:flex items-center gap-8">
          <div className="h-4 w-px bg-white/30" />
          <span>50+ Types Available</span>
          <div className="h-4 w-px bg-white/30" />
          <span>100% Customized</span>
          <div className="h-4 w-px bg-white/30" />
          <span>100+ Shape Options</span>
        </div>

        {/* Mobile view for additional items (optional, or just stack them) */}
        <div className="flex md:hidden items-center gap-4 opacity-80 text-[10px]">
          <span>50+ Types</span>
          <div className="w-1.5 h-1.5 rounded-full bg-white/50" />
          <span>100% Custom</span>
          <div className="w-1.5 h-1.5 rounded-full bg-white/50" />
          <span>100+ Shapes</span>
        </div>
      </div>
    </div>
</>
  );
}
