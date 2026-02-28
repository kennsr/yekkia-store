import { useTranslations } from "next-intl";
import Image from "next/image";

export default function AboutSection() {
  const t = useTranslations();

  return (
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
              loading="lazy"
            />
          </div>
        </div>
        <div className="about-content">
          <h2>{t("About.title")}</h2>
          <p>{t("About.description")}</p>
          <div style={{ marginTop: "32px" }}>
            <h3>{t("About.story_title")}</h3>
            <p>{t("About.story_description")}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
