import { useTranslations } from "next-intl";
import { Cookie, Scale, SwatchBook } from "lucide-react";

export default function ProcessSection() {
  const t = useTranslations();

  return (
    <section id="process" className="process-section">
      <div className="section-container">
        <div className="section-header">
          <h2>{t("Process.title")}</h2>
          <p>{t("Process.description")}</p>
        </div>
        <div className="process-grid">
          <div className="process-card glass-panel">
            <div className="icon-wrapper">
              <Cookie size={32} />
            </div>
            <h3>{t("Process.craftsmanship")}</h3>
          </div>
          <div className="process-card glass-panel">
            <div className="icon-wrapper">
              <Scale size={32} />
            </div>
            <h3>Premium Ingredients</h3>
            <p>Butter, sugar, flour, milk, and high-quality egg whites.</p>
          </div>
          <div className="process-card glass-panel">
            <div className="icon-wrapper">
              <SwatchBook size={32} />
            </div>
            <h3>Custom Themes</h3>
            <p>Shapes and colors tailored to your specific event needs.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
