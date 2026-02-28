import Navbar from "@/components/sections/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import ProcessSection from "@/components/sections/ProcessSection";
import GallerySection from "@/components/sections/GallerySection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import FAQSection from "@/components/sections/FAQSection";
import OrderSection from "@/components/sections/OrderSection";
import Footer from "@/components/sections/Footer";
import WhatsAppFAB from "@/components/sections/WhatsAppFAB";
import { setRequestLocale } from "next-intl/server";
import "./page.css";

export function generateStaticParams() {
  return [{ locale: "id" }, { locale: "en" }];
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <div className="page-wrapper">
      <div className="bg-blobs">
        <div className="blob blob-1"></div>
        <div className="blob blob-2"></div>
        <div className="blob blob-3"></div>
      </div>

      <Navbar />
      <HeroSection />
      <AboutSection />
      <ProcessSection />
      <GallerySection />
      <TestimonialsSection />
      <FAQSection />
      <OrderSection />
      <Footer />
      <WhatsAppFAB />
    </div>
  );
}
