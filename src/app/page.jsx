import Header from "@/app/_components/Header";
import Hero from "@/app/_components/Hero";
import FeaturedProducts from "@/app/_components/FeaturedProducts";
import ExcellenceSection from "@/app/_components/ExcellenceSection";
import CompletePrintingSolution from "@/app/_components/CompletePrintingSolution";
import PopularProductsSection from "@/app/_components/PopularProductsSection";
import PrestigiousClients from "@/app/_components/PrestigiousClients";
import BlogsSection from "@/app/_components/BlogsSection";
import SeoContent from "@/app/_components/SeoContent";
import GoogleReviews from "@/app/_components/GoogleReviews";
import GetAQuote from "@/app/_components/GetAQuote";
import Services from "@/app/_components/Services";
import Footer from "@/app/_components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1 w-full overflow-hidden">
        <Hero />
        <FeaturedProducts />
        <ExcellenceSection />
        <CompletePrintingSolution />
        <PopularProductsSection />
        <PrestigiousClients />
        <BlogsSection />
        <SeoContent />
        <GoogleReviews />
        <GetAQuote />
        <Services />
      </main>
      <Footer />
    </>
  );
}
