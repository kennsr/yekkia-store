import { useTranslations } from "next-intl";
import Image from "next/image";

export default function HeroSection() {
  const t = useTranslations();

  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-title animate-fade-in-up">{t("Hero.title")}</h1>
        <p className="hero-subtitle animate-fade-in-up delay-100">
          {t("Hero.subtitle")}
        </p>
        <div className="hero-actions animate-fade-in-up delay-200">
          <a href="#gallery" className="primary-btn">
            {t("Hero.explore")}
          </a>
          <a
            href="https://wa.me/6287775109697"
            target="_blank"
            rel="noopener noreferrer"
            className="secondary-btn"
          >
            {t("Hero.order")}
          </a>
        </div>
      </div>
      <div className="hero-visual animate-fade-in-up delay-300">
        <div
          className="float-anim"
          style={{
            position: "relative",
            width: "100%",
            maxWidth: "400px",
            aspectRatio: "1 / 1",
            borderRadius: "50%",
            overflow: "hidden",
            border: "8px solid white",
            boxShadow:
              "0 20px 40px rgba(0,0,0,0.1), 0 0 60px rgba(255, 183, 178, 0.4)",
          }}
        >
          <Image
            src="/assets/hero_cookie.jpg"
            alt="Yekkia Hero Cookie"
            fill
            style={{ objectFit: "cover" }}
            sizes="(max-width: 768px) 100vw, 400px"
            priority
          />
        </div>
      </div>
    </section>
  );
}
