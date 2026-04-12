import Header from "@/app/_components/Header";
import Hero from "@/app/_components/Hero";
import PinTypes from "@/app/_components/PinTypes";
import HowItWorks from "@/app/_components/HowItWorks";
import PrestigiousClients from "@/app/_components/PrestigiousClients";
import SeoContent from "@/app/_components/SeoContent";
import GoogleReviews from "@/app/_components/GoogleReviews";
import GetAQuote from "@/app/_components/GetAQuote";
import Footer from "@/app/_components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1 w-full overflow-hidden">
        <Hero />
        <PinTypes />
        <HowItWorks />
        <PrestigiousClients />
        <SeoContent />
        <GetAQuote />
        <GoogleReviews />
      </main>
      <Footer />
    </>
  );
}
