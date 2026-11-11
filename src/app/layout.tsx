import type { Metadata, Viewport } from "next";
import { IBM_Plex_Sans, IBM_Plex_Sans_Arabic } from "next/font/google";
import { cookies } from "next/headers";
import { JsonLd } from "@/components/json-ld";
import { MetaPixel } from "@/components/meta-pixel";
import { isLang } from "@/i18n/detect";
import { dictionary } from "@/i18n/dictionary";
import { LanguageProvider } from "@/i18n/language";
import { BookingProvider } from "@/lib/booking";
import "./globals.css";

const arabic = IBM_Plex_Sans_Arabic({
  subsets: ["arabic"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-arabic",
  display: "swap",
});

const latin = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-latin",
  display: "swap",
});

const title = "Prestige Oral | تجميل الأسنان والفينير المركب في تمارة";
const description =
  "اكتشف عروض تجميل الأسنان بالفينير المركب لدى Prestige Oral في تمارة. تواصل معنا عبر واتساب لحجز استشارتك.";
const frenchDescription =
  "Prestige Oral à Témara. Offre sur les facettes composites : 16 dents à 2 000 MAD, 20 dents à 2 300 MAD. Réservez votre consultation sur WhatsApp.";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"),
  title,
  description,
  keywords: [
    "فينير مركب",
    "تجميل الأسنان",
    "تمارة",
    "Prestige Oral",
    "facettes composites",
    "dentiste Témara",
  ],
  openGraph: {
    title: "Prestige Oral | ابتسامتك الجديدة تبدأ من هنا",
    description,
    locale: "ar_MA",
    alternateLocale: ["fr_MA"],
    type: "website",
    url: "/",
    siteName: "Prestige Oral",
    images: [
      {
        url: "/images/veneer-still.jpg",
        width: 1200,
        height: 675,
        alt: "ابتسامة طبيعية في إضاءة دافئة",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/images/veneer-still.jpg"],
  },
  alternates: {
    canonical: "/",
  },
  other: {
    "description:fr": frenchDescription,
  },
};

export const viewport: Viewport = {
  themeColor: "#FAF7F2",
  width: "device-width",
  initialScale: 1,
};

export const instant = false;

export default async function RootLayout({ children }: LayoutProps<"/">) {
  const saved = (await cookies()).get("prestige-lang")?.value;
  const lang = isLang(saved) ? saved : "ar";
  return (
    <html lang={lang} dir={dictionary[lang].dir} suppressHydrationWarning className={`${arabic.variable} ${latin.variable} antialiased`}>
      <head>
        <meta name="description" lang="fr" content={frenchDescription} />
      </head>
      <body suppressHydrationWarning className="min-h-dvh bg-ivory text-ink">
        <LanguageProvider initialLang={lang}>
          <BookingProvider>{children}</BookingProvider>
        </LanguageProvider>
        <JsonLd />
        <MetaPixel />
      </body>
    </html>
  );
}
