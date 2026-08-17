import { GeistSans } from "geist/font/sans";
import type { Metadata, Viewport } from "next";
import { Playfair_Display } from "next/font/google";
import "./globals.css";

import ContactModal from "@/components/ContactModal";
import JsonLd from "@/components/JsonLd";
import LeadTracker from "@/components/LeadTracker";
import MarqueeAutoPause from "@/components/MarqueeAutoPause";
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
        <LeadTracker />
        <MarqueeAutoPause />
        <JsonLd nodes={[organizationSchema(), websiteSchema()]} />

        {/* Google-tag (gtag.js): Google Analytics 4 + Google Ads-conversiemeting.
            De stub staat direct in de HTML, zodat gtag() en de dataLayer er
            meteen zijn en vroege kliks (bellen, WhatsApp) worden gebufferd.
            Het echte script (ruim 300 KB) laden we pas na het load-event, zodat
            het niet concurreert met de pagina zelf; komt de bezoeker via een
            advertentie (gclid/utm), dan laden we direct zodat de toeschrijving
            niet verloren gaat. Onafhankelijk van React, dus ook zonder hydratie. */}
        <script
          id="google-tag"
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-F39P87QKQJ');
gtag('config', 'AW-18383248376');
(function(){
  var klaar = false;
  function laad(){
    if (klaar) return; klaar = true;
    var s = document.createElement('script');
    s.async = true;
    s.src = 'https://www.googletagmanager.com/gtag/js?id=G-F39P87QKQJ';
    document.head.appendChild(s);
  }
  function rustig(){ (window.requestIdleCallback || function(f){ setTimeout(f, 1); })(laad); }
  if (/[?&](gclid|gbraid|wbraid|gad_source|gclsrc|dclid|utm_[a-z]+|fbclid|msclkid)=/i.test(location.search)) { laad(); }
  else if (document.readyState === 'complete') { rustig(); }
  else { addEventListener('load', rustig); setTimeout(laad, 6000); }
})();`,
          }}
        />
      </body>
    </html>
  );
}
