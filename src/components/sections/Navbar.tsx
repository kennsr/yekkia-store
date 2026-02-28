import { useTranslations } from "next-intl";
import Logo from "@/components/Logo";
import LanguageSwitcher from "@/components/LanguageSwitcher";

export default function Navbar() {
  const t = useTranslations();

  return (
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
  );
}
