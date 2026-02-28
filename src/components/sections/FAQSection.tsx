import { useTranslations } from "next-intl";

export default function FAQSection() {
  const t = useTranslations();

  const faqs = [
    { q: t("FAQ.q1"), a: t("FAQ.a1") },
    { q: t("FAQ.q2"), a: t("FAQ.a2") },
    { q: t("FAQ.q3"), a: t("FAQ.a3") },
    { q: t("FAQ.q4"), a: t("FAQ.a4") },
  ];

  return (
    <section id="faq" className="faq-section">
      <div className="section-container">
        <h2 className="section-title">{t("FAQ.title")}</h2>
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div key={index} className="faq-item glass-panel">
              <h3>{faq.q}</h3>
              <p>{faq.a}</p>
            </div>
          ))}
        </div>
        <div className="booking-info">
          <h2>{t("Booking.title")}</h2>
          <p>{t("Booking.description")}</p>
          <p className="highlight">{t("Booking.corporate")}</p>
        </div>
      </div>
    </section>
  );
}
