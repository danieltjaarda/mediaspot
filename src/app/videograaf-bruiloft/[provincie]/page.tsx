import type { Metadata } from "next";
import { notFound } from "next/navigation";

import Faq from "@/components/Faq";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import JsonLd from "@/components/JsonLd";
import Portfolio from "@/components/Portfolio";
import Reviews from "@/components/Reviews";
import Tarieven from "@/components/Tarieven";
import TrouwIntro from "@/components/TrouwIntro";
import Werkgebied from "@/components/Werkgebied";
import Werkwijze from "@/components/Werkwijze";
import { PROVINCIES, provincieBySlug } from "@/lib/provincies";
import {
  breadcrumbSchema,
  faqSchema,
  pageMetadata,
  serviceSchema,
} from "@/lib/seo";
import { TROUW_FAQ } from "@/lib/trouw-faq";

type Params = { provincie: string };

export function generateStaticParams(): Params[] {
  return PROVINCIES.map((p) => ({ provincie: p.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { provincie } = await params;
  const p = provincieBySlug(provincie);
  if (!p) return {};
  return pageMetadata({
    title: `Videograaf bruiloft ${p.naam} | Trouwfilm vanaf € 799`,
    description: `Videograaf voor jullie bruiloft in ${p.naam} (${p.plaatsen.slice(0, 3).join(", ")}): cinematische trouwfilm in 4K, binnen 3 weken geleverd. Vaste pakketten vanaf € 799, zonder reiskosten.`,
    path: `/videograaf-bruiloft/${p.slug}`,
    keywords: [
      `videograaf bruiloft ${p.naam}`,
      `bruiloft videograaf ${p.naam}`,
      `trouwfilm ${p.naam}`,
      `trouwvideograaf ${p.naam}`,
      ...p.plaatsen.slice(0, 3).map((s) => `videograaf bruiloft ${s}`),
    ],
  });
}

export default async function ProvinciePagina({
  params,
}: {
  params: Promise<Params>;
}) {
  const { provincie } = await params;
  const p = provincieBySlug(provincie);
  if (!p) notFound();

  const path = `/videograaf-bruiloft/${p.slug}`;
  // Lokale vragen eerst, daarna de algemene (zonder de vraag over regio's).
  const faq = [
    ...p.faq,
    ...TROUW_FAQ.filter((f) => !f.question.includes("regio")),
  ];

  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero
          title={
            <>
              Videograaf voor jullie bruiloft in {p.naam}, cinematisch
              vastgelegd.
            </>
          }
          tagline={`Trouwfilms in ${p.plaatsen.slice(0, 3).join(", ")} en de rest van ${p.naam}. Vanaf € 799, zonder reiskosten.`}
        />
        <TrouwIntro
          regio={p.naam}
          plaatsen={p.plaatsen}
          intro={p.intro}
          sfeer={p.sfeer}
        />
        <Werkwijze />
        <Portfolio />
        <Reviews />
        <Tarieven />
        <Faq
          items={faq}
          intro={`Vragen die stellen uit ${p.naam} ons stellen voordat ze boeken. Reistijd: ${p.reistijd}.`}
        />
        <Werkgebied linkProvincies highlightId={p.mapId} />
      </main>
      <Footer />
      <JsonLd
        nodes={[
          serviceSchema({
            name: `Videograaf bruiloft ${p.naam}`,
            serviceType: "Bruiloftsvideografie",
            description: `Cinematische trouwfilm van jullie bruiloft in ${p.naam}, inclusief professionele nabewerking en color grading. Geleverd in 4K en Full HD.`,
            path,
            areaServed: p.naam,
            offers: [
              {
                name: "Film Bruiloft Zilver",
                price: 799,
                description: "8 uur filmen, trouwfilm van circa 6–7 minuten",
              },
              {
                name: "Film Bruiloft Goud",
                price: 899,
                description: "10 uur filmen, trouwfilm van circa 7–8 minuten",
              },
              {
                name: "Film Bruiloft Diamant",
                price: 1199,
                description:
                  "12 uur filmen met drone-opnames, trouwfilm van circa 8–10 minuten",
              },
            ],
          }),
          faqSchema(faq),
          breadcrumbSchema([
            { name: "Videograaf bruiloft", path: "/videograaf-bruiloft" },
            { name: p.naam, path },
          ]),
        ]}
      />
    </>
  );
}
