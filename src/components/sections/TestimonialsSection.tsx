import { useTranslations } from "next-intl";
import { Quote } from "lucide-react";

export default function TestimonialsSection() {
  const t = useTranslations();

  const quotes = [
    t("Testimonials.quote1"),
    t("Testimonials.quote2"),
    t("Testimonials.quote3"),
  ];

  return (
    <section id="testimonials" className="testimonials-section">
      <div className="section-container">
        <h2 className="section-title">{t("Testimonials.title")}</h2>
        <div className="testimonials-grid">
          {quotes.map((quote, index) => (
            <div key={index} className="testimonial-card glass-panel">
              <Quote className="quote-icon" size={24} />
              <p>&quot;{quote}&quot;</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
