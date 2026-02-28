import { useTranslations } from "next-intl";
import Image from "next/image";

export default function GallerySection() {
  const t = useTranslations();

  return (
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
                sizes="(max-width: 480px) 50vw, (max-width: 768px) 50vw, (max-width: 1200px) 33vw, 20vw"
                loading="lazy"
              />
            </div>
            <div className="card-info">
              <h3>{t(`Gallery.items.item${item}.label`)}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
