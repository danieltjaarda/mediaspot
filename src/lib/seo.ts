import type { Metadata } from "next";

import {
  AGGREGATE_RATING,
  AREA_SERVED,
  CITY,
  COUNTRY,
  EMAIL,
  GEO,
  PHONE_E164,
  REGION,
  SITE_NAME,
  SITE_URL,
  SOCIAL_PROFILES,
} from "@/lib/site";

type PageMetaInput = {
  title: string;
  description: string;
  /** Pad inclusief leading slash, bijvoorbeeld "/trouwerij". */
  path: string;
  keywords?: string[];
};

/**
 * De route die app/opengraph-image.tsx genereert. Expliciet meegeven is nodig:
 * eigen openGraph-velden op paginaniveau vervangen de overgeërfde afbeelding.
 */
const OG_IMAGE = {
  url: "/opengraph-image",
  width: 1200,
  height: 630,
  alt: "Mediaspot, videograaf voor bruiloften, events en bedrijven",
};

/** Bouwt per pagina unieke metadata met canonical en Open Graph-varianten. */
export function pageMetadata({
  title,
  description,
  path,
  keywords,
}: PageMetaInput): Metadata {
  return {
    title,
    description,
    keywords,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      locale: "nl_NL",
      siteName: SITE_NAME,
      url: path,
      title: `${title} | ${SITE_NAME}`,
      description,
      images: [OG_IMAGE],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${SITE_NAME}`,
      description,
      images: [OG_IMAGE.url],
    },
  };
}

export const ORGANIZATION_ID = `${SITE_URL}/#organization`;
export const WEBSITE_ID = `${SITE_URL}/#website`;

type JsonLdNode = Record<string, unknown>;

export function organizationSchema(): JsonLdNode {
  return {
    "@type": ["LocalBusiness", "ProfessionalService"],
    "@id": ORGANIZATION_ID,
    name: SITE_NAME,
    alternateName: "Mediaspot Videoproducties",
    url: SITE_URL,
    description:
      "Videograaf uit Heerenveen voor bruiloften, evenementen, bedrijfsfilms en social content. Van concept tot montage.",
    telephone: PHONE_E164,
    email: EMAIL,
    logo: {
      "@type": "ImageObject",
      url: `${SITE_URL}/images/logo-mark.png`,
      width: 1000,
      height: 1000,
    },
    image: `${SITE_URL}/images/hero-main.jpg`,
    address: {
      "@type": "PostalAddress",
      addressLocality: CITY,
      addressRegion: REGION,
      addressCountry: COUNTRY,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: GEO.latitude,
      longitude: GEO.longitude,
    },
    areaServed: AREA_SERVED.map((name) => ({
      "@type": "AdministrativeArea",
      name,
    })),
    knowsLanguage: ["nl", "en"],
    priceRange: "€€",
    currenciesAccepted: "EUR",
    openingHoursSpecification: [
      {
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
        closes: "20:00",
      },
    ],
    ...(SOCIAL_PROFILES.length ? { sameAs: SOCIAL_PROFILES } : {}),
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: AGGREGATE_RATING.value,
      bestRating: AGGREGATE_RATING.best,
      reviewCount: AGGREGATE_RATING.count,
    },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "sales",
      telephone: PHONE_E164,
      email: EMAIL,
      areaServed: COUNTRY,
      availableLanguage: ["nl", "en"],
    },
  };
}

export function websiteSchema(): JsonLdNode {
  return {
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    url: SITE_URL,
    name: SITE_NAME,
    inLanguage: "nl-NL",
    publisher: { "@id": ORGANIZATION_ID },
  };
}

type ServiceInput = {
  name: string;
  description: string;
  path: string;
  serviceType: string;
  offers?: { name: string; price: number; description?: string }[];
};

export function serviceSchema({
  name,
  description,
  path,
  serviceType,
  offers,
}: ServiceInput): JsonLdNode {
  const schema: JsonLdNode = {
    "@type": "Service",
    "@id": `${SITE_URL}${path}#service`,
    name,
    description,
    serviceType,
    url: `${SITE_URL}${path}`,
    provider: { "@id": ORGANIZATION_ID },
    areaServed: AREA_SERVED.map((area) => ({
      "@type": "AdministrativeArea",
      name: area,
    })),
  };

  if (offers?.length) {
    schema.hasOfferCatalog = {
      "@type": "OfferCatalog",
      name,
      itemListElement: offers.map((offer) => ({
        "@type": "Offer",
        name: offer.name,
        description: offer.description,
        price: offer.price,
        priceCurrency: "EUR",
        availability: "https://schema.org/InStock",
        url: `${SITE_URL}${path}#tarieven`,
      })),
    };
  }

  return schema;
}

export function breadcrumbSchema(
  trail: { name: string; path: string }[],
): JsonLdNode {
  return {
    "@type": "BreadcrumbList",
    itemListElement: [{ name: "Home", path: "/" }, ...trail].map(
      (item, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: item.name,
        item: `${SITE_URL}${item.path === "/" ? "" : item.path}`,
      }),
    ),
  };
}

type VideoInput = {
  name: string;
  description: string;
  contentPath: string;
  thumbnailPath: string;
  uploadDate: string;
};

export function videoSchema({
  name,
  description,
  contentPath,
  thumbnailPath,
  uploadDate,
}: VideoInput): JsonLdNode {
  return {
    "@type": "VideoObject",
    name,
    description,
    thumbnailUrl: `${SITE_URL}${thumbnailPath}`,
    contentUrl: `${SITE_URL}${contentPath}`,
    uploadDate,
    inLanguage: "nl-NL",
    isFamilyFriendly: true,
    publisher: { "@id": ORGANIZATION_ID },
  };
}

export function faqSchema(
  items: { question: string; answer: string }[],
): JsonLdNode {
  return {
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };
}

/** Bundelt losse schema's in één @graph, zoals Google aanraadt. */
export function jsonLdGraph(nodes: JsonLdNode[]) {
  return {
    "@context": "https://schema.org",
    "@graph": nodes,
  };
}
