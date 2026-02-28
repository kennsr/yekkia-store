import type { Metadata } from "next";
import { Nunito, Quicksand } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import {
  getMessages,
  getTranslations,
  setRequestLocale,
} from "next-intl/server";
import { Analytics } from "@vercel/analytics/next";
import "../globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
});

const quicksand = Quicksand({
  variable: "--font-quicksand",
  subsets: ["latin"],
});

export function generateStaticParams() {
  return [{ locale: "id" }, { locale: "en" }];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale });

  return {
    metadataBase: new URL("https://yekkia.store"),
    title: t("Hero.title"),
    description: t("Hero.subtitle"),
    keywords: [
      "yekkia store",
      "kue karakter",
      "bekasi",
      "jabodetabek",
      "royal icing cookies",
      "custom cookies",
      "YEKKIA",
      "decorated cookies",
      "birthday cookies",
    ],
    openGraph: {
      title: t("Hero.title"),
      description: t("Hero.subtitle"),
      url: "https://yekkia.store",
      siteName: "YEKKIA",
      images: [
        {
          url: "/og-image.jpg",
          width: 1200,
          height: 630,
          alt: "YEKKIA Character Cookies",
        },
      ],
      locale: locale === "id" ? "id_ID" : "en_US",
      type: "website",
    },
    alternates: {
      canonical: "https://yekkia.store",
      languages: {
        id: "https://yekkia.store/id",
        en: "https://yekkia.store/en",
      },
    },
  };
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  setRequestLocale(locale);
  const messages = await getMessages({ locale });

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "YEKKIA Character Cookies",
    image: "https://yekkia.store/og-image.jpg",
    url: "https://yekkia.store",
    telephone: "+6287775109697",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Bekasi",
      addressRegion: "West Java",
      addressCountry: "ID",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: -6.2383,
      longitude: 106.9756,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      opens: "09:00",
      closes: "18:00",
    },
    sameAs: [
      "https://www.instagram.com/yekkiacookies",
      "https://www.tiktok.com/@yekkia.cookies",
    ],
  };

  return (
    <html lang={locale}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${nunito.variable} ${quicksand.variable}`}>
        <NextIntlClientProvider messages={messages} locale={locale}>
          {children}
          <Analytics />
          <SpeedInsights />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
