import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import JsonLd from "@/components/JsonLd";
import Portfolio from "@/components/Portfolio";
import Reviews from "@/components/Reviews";
import Tarieven from "@/components/Tarieven";
import Werkgebied from "@/components/Werkgebied";
import Werkwijze from "@/components/Werkwijze";
import WieBenIk from "@/components/WieBenIk";
import {
  breadcrumbSchema,
  pageMetadata,
  serviceSchema,
  videoSchema,
} from "@/lib/seo";

const PATH = "/trouwerij";

export const metadata = pageMetadata({
  title: "Trouwfilm laten maken vanaf € 799",
  description:
    "Bruiloftsvideograaf voor jullie trouwfilm: van ja-woord tot avondfeest, in 4K gefilmd en binnen 3 weken geleverd. Vaste pakketten vanaf € 799, zonder reiskosten.",
  path: PATH,
  keywords: [
    "trouwfilm laten maken",
    "bruiloftsvideograaf",
    "trouwvideo",
    "videograaf bruiloft Friesland",
    "trouwfilm prijzen",
  ],
});

export default function Trouwerij() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <Werkwijze />
        <Portfolio />
        <Reviews />
        <Tarieven />
        <WieBenIk />
        <Werkgebied />
      </main>
      <Footer />
      <JsonLd
        nodes={[
          serviceSchema({
            name: "Trouwfilm laten maken",
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
          breadcrumbSchema([{ name: "Trouwfilm", path: PATH }]),
        ]}
      />
    </>
  );
}
