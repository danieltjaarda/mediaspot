import { GeistSans } from "geist/font/sans";
import type { Metadata, Viewport } from "next";
import { Playfair_Display } from "next/font/google";
import Script from "next/script";
import "./globals.css";

import ContactModal from "@/components/ContactModal";
import JsonLd from "@/components/JsonLd";
import { organizationSchema, websiteSchema } from "@/lib/seo";
import { SITE_NAME, SITE_URL } from "@/lib/site";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["500"],
  style: ["italic"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default:
      "Mediaspot | Videograaf voor bruiloften, events en bedrijven",
    template: `%s | ${SITE_NAME}`,
  },
  description:
    "Videograaf uit Joure voor bruiloften, aftermovies, bedrijfsfilms en social content. 4K, geleverd binnen 7 dagen en actief in heel Noord- en Midden-Nederland.",
  applicationName: SITE_NAME,
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  category: "Videoproductie",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "nl_NL",
    siteName: SITE_NAME,
    url: "/",
    title: "Mediaspot | Videograaf voor bruiloften, events en bedrijven",
    description:
      "Van bruiloft tot bedrijfsfilm en aftermovie: strak gefilmd, scherp gemonteerd. Bekijk ons werk en onze tarieven.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mediaspot | Videograaf voor bruiloften, events en bedrijven",
    description:
      "Van bruiloft tot bedrijfsfilm en aftermovie: strak gefilmd, scherp gemonteerd.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
  colorScheme: "light",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="nl-NL"
      className={`${GeistSans.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
        <ContactModal />
        <JsonLd nodes={[organizationSchema(), websiteSchema()]} />

        {/* Google-tag (gtag.js) voor Google Ads-conversiemeting */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-18383248376"
          strategy="afterInteractive"
        />
        <Script id="google-tag" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'AW-18383248376');`}
        </Script>
      </body>
    </html>
  );
}
