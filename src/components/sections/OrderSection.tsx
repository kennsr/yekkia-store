import { useTranslations } from "next-intl";

export default function OrderSection() {
  const t = useTranslations();

  return (
    <section id="order" className="order-section">
      <div className="order-box glass-panel">
        <h2>{t("Order.title")}</h2>
        <p>{t("Order.steps")}</p>
        <p style={{ margin: "16px 0 32px", fontSize: "1.1rem", opacity: 0.9 }}>
          {t("Order.description")}
        </p>
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
  );
}
