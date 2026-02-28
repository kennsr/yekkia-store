import { FaInstagram, FaTiktok, FaWhatsapp } from "react-icons/fa";
import Logo from "@/components/Logo";

export default function Footer() {
  return (
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
  );
}
