import { useTranslations } from "next-intl";
import Image from "next/image";

export default function AboutSection() {
  const t = useTranslations();

  return (
    <section id="about" className="about-section">
      <div className="about-inner animate-fade-in-up delay-200">
        <div className="about-visual">
          <div
            style={{
              position: "relative",
              width: "100%",
              height: "100%",
              minHeight: "400px",
              overflow: "hidden",
              borderRadius: "24px",
              boxShadow: "var(--glass-shadow)",
            }}
          >
            <Image
              src="/assets/baking_process.jpg"
              alt="YEKKIA Baking Process"
              fill
              style={{ objectFit: "cover" }}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              loading="lazy"
            />
          </div>
        </div>
        <div className="about-content">
          <h2>{t("About.title")}</h2>
          <p>{t("About.description")}</p>

          <div
            className="about-features"
            style={{
              marginTop: "32px",
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "20px",
            }}
          >
            <div className="feature-item">
              <h4
                style={{ color: "var(--primary-color)", marginBottom: "8px" }}
              >
                100% Handcrafted
              </h4>
              <p style={{ fontSize: "0.9rem" }}>
                Every detail is piped manually with passion and precision.
              </p>
            </div>
            <div className="feature-item">
              <h4
                style={{ color: "var(--primary-color)", marginBottom: "8px" }}
              >
                Premium Quality
              </h4>
              <p style={{ fontSize: "0.9rem" }}>
                We use only the finest ingredients for a classic, delicious
                taste.
              </p>
            </div>
            <div className="feature-item">
              <h4
                style={{ color: "var(--primary-color)", marginBottom: "8px" }}
              >
                Custom Designs
              </h4>
              <p style={{ fontSize: "0.9rem" }}>
                Your favorite characters brought to life in edible form.
              </p>
            </div>
            <div className="feature-item">
              <h4
                style={{ color: "var(--primary-color)", marginBottom: "8px" }}
              >
                Perfect for Gifts
              </h4>
              <p style={{ fontSize: "0.9rem" }}>
                Unique souvenirs that make every celebration more memorable.
              </p>
            </div>
          </div>

          <div style={{ marginTop: "32px" }}>
            <h3>{t("About.story_title")}</h3>
            <p>{t("About.story_description")}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
