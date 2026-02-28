import { useTranslations } from "next-intl";
import Image from "next/image";

export default function HeroSection() {
  const t = useTranslations();

  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-title">{t("Hero.title")}</h1>
        <p className="hero-subtitle">{t("Hero.subtitle")}</p>
        <div className="hero-actions">
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
      <div className="hero-visual">
        <div
          className="bounce-anim"
          style={{
            position: "relative",
            width: "100%",
            maxWidth: "400px",
            aspectRatio: "1 / 1",
            borderRadius: "50%",
            overflow: "hidden",
            border: "8px solid white",
            boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
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
