import FAQ from "@/app/_components/FAQ";
import StructuredData from "@/app/_components/StructuredData";
import Header from "@/app/_components/Header";
import {
  BING_SITE_VERIFICATION,
  HOME_SEO,
  buildFaqJsonLd,
  buildPageMetadata,
} from "@/lib/seo";
import Hero from "@/app/_components/Hero";
import PinTypes from "@/app/_components/PinTypes";
import HowItWorks from "@/app/_components/HowItWorks";
import PrestigiousClients from "@/app/_components/PrestigiousClients";
import SeoContent from "@/app/_components/SeoContent";
import ExcellenceSection from "@/app/_components/ExcellenceSection";
import GoogleReviews from "@/app/_components/GoogleReviews";
import GetAQuote from "@/app/_components/GetAQuote";
import Footer from "@/app/_components/Footer";

export const metadata = {
  ...buildPageMetadata({
    title: HOME_SEO.title,
    description: HOME_SEO.description,
    path: "/",
  }),
  verification: {
    other: {
      "msvalidate.01": BING_SITE_VERIFICATION,
    },
  },
};

const HOME_FAQS = [
  { question: "What is the minimum order quantity (MOQ)?", answer: "Our standard MOQ starts at 25 pieces for most pin styles. This allows even small organizations and artists to create high-quality custom merchandise." },
  { question: "How long is the turnaround time?", answer: "Usually, design and production take between 10-15 business days. We also offer express shipping options if you have a tight deadline for an event." },
  { question: "Can I see a proof before I pay?", answer: "We provide a 100% free digital proof for every order. Our design team will work with you to refine the artwork until you are completely satisfied before we start production." },
  { question: "Do you offer international shipping?", answer: "Yes! We ship our custom pins worldwide with reliable tracking. Shipping costs and delivery times vary depending on your location." },
  { question: "What file formats do you accept for designs?", answer: "We prefer vector files like AI, PDF, or EPS for the highest quality. However, we can also work with high-resolution JPG, PNG, and PSD files." }
];

export default function Home() {
  return (
    <>
      <StructuredData data={buildFaqJsonLd(HOME_FAQS)} />
      <Header />
      <main className="flex-1 w-full overflow-hidden relative">
        <Hero />
        <PinTypes />
        <HowItWorks />
        <PrestigiousClients />
        <SeoContent />
        <ExcellenceSection />
        <GetAQuote />
        <FAQ faqs={HOME_FAQS} title="Knowledge Base" subtitle="General FAQ" />
        <GoogleReviews />
      </main>
      <Footer />
    </>
  );
}
