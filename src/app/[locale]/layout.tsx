import type { Metadata } from "next";
import { Nunito, Quicksand } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations } from "next-intl/server";
import { Analytics } from "@vercel/analytics/next";
import "../globals.css";

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
});

const quicksand = Quicksand({
  variable: "--font-quicksand",
  subsets: ["latin"],
});

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
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className={`${nunito.variable} ${quicksand.variable}`}>
        <NextIntlClientProvider messages={messages}>
          {children}
          <Analytics />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
