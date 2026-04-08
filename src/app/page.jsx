import Header from "@/components/Header";
import ServiceCarousel from "@/components/ServiceCarousel";
import Hero from "@/components/Hero";
import FeaturedProducts from "@/components/FeaturedProducts";
import LandingSections from "@/components/LandingSections";
import Services from "@/components/Services";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1 w-full overflow-hidden">
        <ServiceCarousel />
        <Hero />
        <FeaturedProducts />
        <LandingSections />
        <Services />
      </main>
      <Footer />
    </>
  );
}
