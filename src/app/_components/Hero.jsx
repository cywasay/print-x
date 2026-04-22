import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <>
      <section
        className="relative w-full overflow-hidden flex items-center py-12 md:py-20 lg:py-0"
        style={{ minHeight: "calc(100vh - 120px)", maxHeight: "900px" }}
      >
        {/* Background Image */}
        {/* Desktop Background Image */}
        <div className="hidden md:block">
          <Image
            src="/banners/lapel-pin-banner-updated.jpg"
            alt="PrintX Hero Banner"
            fill
            sizes="100vw"
            className="object-cover object-[50%_50%]"
            priority
            quality={90}
          />
        </div>

        {/* Mobile Background Image */}
        <div className="block md:hidden">
          <Image
            src="/banners/updated-mobile-baner.jpg"
            alt="PrintX Hero Banner Mobile"
            fill
            sizes="100vw"
            className="object-cover object-[50%_50%]"
            priority
            quality={90}
          />
        </div>

        {/* Soft Overlay for readability if needed (optional) */}
        <div className="absolute inset-0 bg-[#0F6393]/15 md:bg-[#0F6393]/10 pointer-events-none" />

        <div className="max-w-7xl w-full mx-auto px-6 lg:px-12 relative z-10 flex items-center h-full">
          {/* Left Content */}
          <div className="w-full md:w-[65%] lg:w-[60%] flex flex-col items-start justify-start md:justify-center space-y-5 md:space-y-8 z-20">
            <h1 className="text-[40px] sm:text-4xl md:text-5xl lg:text-[72px] font-semibold leading-[1.1] md:leading-[1.05] tracking-tight text-white drop-shadow-md">
              Custom{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-400">
                Pins.
              </span>
              <br />
              Crafted{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-400">
                Perfection.
              </span>
            </h1>
            <p className="text-[17px] sm:text-base lg:text-[22px] text-white/90 font-medium leading-relaxed max-w-xl mt-1 md:mt-2">
              The UAE's premier manufacturer of custom lapel pins,
              <br className="hidden md:block" />
              enamel pins, and premium metal badges.
            </p>
            <div className="pt-4 md:pt-6 w-full sm:w-auto">
              <Link
                href="/quote"
                className="px-8 md:px-10 py-3.5 md:py-4 bg-white text-[#0F6393] hover:bg-blue-50 text-[15px] md:text-base font-bold rounded-full transition-all shadow-[0_10px_30px_rgba(255,255,255,0.2)] hover:shadow-[0_15px_40px_rgba(255,255,255,0.3)] hover:-translate-y-1 inline-block text-center"
              >
                Get a Quote
              </Link>
            </div>
          </div>
        </div>
      </section>
      <div className="bg-[#00AEEF] py-3 md:py-4 text-white">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-center items-center gap-3 md:gap-8 text-[11px] md:text-[13px] font-bold uppercase tracking-[0.05em] text-center">
          <span className="opacity-100">
            Top-Quality, Affordable, Custom-Made Pin Badges with Premium
            Craftsmanship
          </span>

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
