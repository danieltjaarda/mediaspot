import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import JsonLd from "@/components/JsonLd";
import Faq from "@/components/Faq";
import Portfolio from "@/components/Portfolio";
import Reviews from "@/components/Reviews";
import Tarieven from "@/components/Tarieven";
import Trouwdag from "@/components/Trouwdag";
import TrouwIntro from "@/components/TrouwIntro";
import Werkgebied from "@/components/Werkgebied";
import Werkwijze from "@/components/Werkwijze";
import WieBenIk from "@/components/WieBenIk";
import {
  breadcrumbSchema,
  faqSchema,
  pageMetadata,
  serviceSchema,
  videoSchema,
} from "@/lib/seo";
import { TROUW_FAQ } from "@/lib/trouw-faq";

const PATH = "/videograaf-bruiloft";

export const metadata = pageMetadata({
  title: "Videograaf bruiloft | Trouwfilm laten maken vanaf € 799",
  description:
    "Videograaf voor jullie bruiloft in heel Nederland: cinematische trouwfilm van ja-woord tot avondfeest, in 4K en binnen 3 weken geleverd. Vaste pakketten vanaf € 799, zonder reiskosten.",
  path: PATH,
  keywords: [
    "videograaf bruiloft",
    "bruiloft videograaf",
    "trouwfilm laten maken",
    "bruiloftsvideograaf",
    "trouwvideo",
    "trouwfilm prijzen",
  ],
});

export default function Trouwerij() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero
          title="Videograaf voor jullie bruiloft, cinematisch vastgelegd."
          tagline="Trouwfilms door heel Nederland, vanaf € 799 en zonder reiskosten."
        />
        <TrouwIntro />
        <Werkwijze />
        <Portfolio />
        <Reviews />
        <Trouwdag />
        <Tarieven />
        <Faq
          items={TROUW_FAQ}
          intro="Alles wat stellen ons vragen voordat ze een videograaf voor hun bruiloft boeken. Staat jullie vraag er niet bij? Bel of app ons gerust."
        />
        <WieBenIk />
        <Werkgebied linkProvincies />
      </main>
      <Footer />
      <JsonLd
        nodes={[
          serviceSchema({
            name: "Videograaf bruiloft: trouwfilm laten maken",
            serviceType: "Bruiloftsvideografie",
            description:
              "Cinematische trouwfilm van jullie bruiloft, inclusief professionele nabewerking en color grading. Geleverd in 4K en Full HD.",
            path: PATH,
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
          videoSchema({
            name: "Voorbeeld trouwfilm van Mediaspot",
            description:
              "Volledige bruiloftsfilm gemaakt door Mediaspot, van de voorbereiding tot het avondfeest.",
            contentPath: "/videos/pakketten-video.mp4",
            thumbnailPath: "/images/pakketten-video-poster.jpg",
            uploadDate: "2026-06-01",
          }),
          faqSchema(TROUW_FAQ),
          breadcrumbSchema([{ name: "Videograaf bruiloft", path: PATH }]),
        ]}
      />
    </>
  );
}
