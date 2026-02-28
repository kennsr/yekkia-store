import { useTranslations } from "next-intl";
import Image from "next/image";
import { FaInstagram, FaTiktok, FaWhatsapp } from "react-icons/fa";
import Logo from "@/components/Logo";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import "./page.css";

export default function HomePage() {
  const t = useTranslations();

  return (
    <div className="page-wrapper">
      <div className="bg-blobs">
        <div className="blob blob-1"></div>
        <div className="blob blob-2"></div>
        <div className="blob blob-3"></div>
      </div>

      <nav className="navbar glass-panel">
        <div className="logo">
          <Logo width={40} height={40} className="logo-img" />
          YEKKIA
        </div>
        <div className="nav-links">
          <a href="#about">Story</a>
          <a href="#gallery">Gallery</a>
          <a href="#order">Order</a>
        </div>
        <div className="nav-actions">
          <LanguageSwitcher />
          <a
            href="https://wa.me/6287775109697"
            target="_blank"
            rel="noopener noreferrer"
            className="primary-btn nav-cta"
          >
            {t("Hero.order")}
          </a>
        </div>
      </nav>

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
              width: "400px",
              height: "400px",
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

      <section id="about" className="about-section">
        <div className="about-inner">
          <div className="about-visual">
            <div
              style={{
                position: "relative",
                width: "100%",
                height: "350px",
                overflow: "hidden",
                borderRadius: "16px",
              }}
            >
              <Image
                src="/assets/baking_process.jpg"
                alt="YEKKIA Baking Process"
                fill
                style={{ objectFit: "cover" }}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
          </div>
          <div className="about-content">
            <h2>{t("About.title")}</h2>
            <p>{t("About.description")}</p>
          </div>
        </div>
      </section>

      <section id="gallery" className="gallery-section">
        <div className="gallery-header">
          <h2>{t("Gallery.title")}</h2>
          <p>{t("Gallery.description")}</p>
        </div>
        <div className="gallery-grid">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div key={item} className="gallery-card glass-panel">
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  height: "250px",
                  overflow: "hidden",
                  borderRadius: "16px",
                }}
              >
                <Image
                  src={`/gallery/tiktok_${item}.jpg`}
                  alt={t(`Gallery.items.item${item}.alt`)}
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 20vw"
                />
              </div>
              <div className="card-info">
                <h3>{t(`Gallery.items.item${item}.label`)}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="order" className="order-section">
        <div className="order-box glass-panel">
          <h2>{t("Order.title")}</h2>
          <p>{t("Order.steps")}</p>
          <a
            href="https://wa.me/6287775109697"
            target="_blank"
            rel="noopener noreferrer"
            className="primary-btn"
          >
            {t("Order.cta")}
          </a>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-content">
          <div className="footer-brand">
            <Logo width={48} height={48} className="logo-img" />
            YEKKIA
          </div>
          <div className="footer-links">
            <a
              href="https://www.instagram.com/yekkiacookies"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram size={24} />
            </a>
            <a
              href="https://www.tiktok.com/@yekkia.cookies"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok"
            >
              <FaTiktok size={24} />
            </a>
            <a
              href="https://wa.me/6287775109697"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
            >
              <FaWhatsapp size={24} />
            </a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} YEKKIA. All rights reserved.</p>
        </div>
      </footer>
      <a
        href="https://wa.me/6287775109697"
        target="_blank"
        rel="noopener noreferrer"
        className="floating-wa"
        aria-label="Chat with us on WhatsApp"
      >
        <svg viewBox="0 0 24 24" fill="currentColor" width="32" height="32">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.888-.788-1.488-1.761-1.665-2.059-.177-.298-.018-.46.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
        </svg>
      </a>
    </div>
  );
}
