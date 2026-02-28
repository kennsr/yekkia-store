import dynamic from "next/dynamic";
import Navbar from "@/components/sections/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import WhatsAppFAB from "@/components/sections/WhatsAppFAB";
import "./page.css";

// Dynamic imports for below-the-fold sections — these won't be included
// in the initial JS bundle, improving First Contentful Paint
const AboutSection = dynamic(
  () => import("@/components/sections/AboutSection"),
);
const GallerySection = dynamic(
  () => import("@/components/sections/GallerySection"),
);
const OrderSection = dynamic(
  () => import("@/components/sections/OrderSection"),
);
const Footer = dynamic(() => import("@/components/sections/Footer"));

export default function HomePage() {
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
      <GallerySection />
      <OrderSection />
      <Footer />
      <WhatsAppFAB />
    </div>
  );
}
