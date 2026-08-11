import Image from "next/image";
import Link from "next/link";

import VerifiedBadge from "@/components/VerifiedBadge";

/* Vervang door de Google-reviewlink zodra het bedrijfsprofiel bekend is. */
const REVIEW_URL = "mailto:info@mediaspot.nl?subject=Review%20voor%20Mediaspot";

const reviewCount = 234;

type Review = {
  quote: string;
  name: string;
  role: string;
};

const topRow: Review[] = [
  {
    quote:
      "We kijken de film nog steeds regelmatig terug en elke keer worden we weer emotioneel. Precies de sfeer van onze dag, zonder dat we iets van de camera hebben gemerkt.",
    name: "Lotte & Sander",
    role: "Bruiloft in Heerenveen",
  },
  {
    quote:
      "Snel geschakeld, meegedacht over het concept en de aftermovie stond binnen een week online. Onze bezoekers deelden hem massaal.",
    name: "Mark de Vries",
    role: "Organisator bedrijfsevent",
  },
  {
    quote:
      "Wat een fijne samenwerking. Rustig op de vloer, scherp oog voor detail en de montage was in één keer goed.",
    name: "Iris Bakker",
    role: "Marketing, GoFatbike",
  },
  {
    quote:
      "De dronebeelden van onze locatie maken de film compleet. Familie uit het buitenland had het gevoel dat ze erbij waren.",
    name: "Anne & Ruben",
    role: "Bruiloft in Gelderland",
  },
  {
    quote:
      "Vooraf een helder draaiboek, dus geen verrassingen op de dag zelf. Precies wat je wil als organisator.",
    name: "Sanne Hoekstra",
    role: "Eventmanager",
  },
];

const bottomRow: Review[] = [
  {
    quote:
      "Onze bedrijfsfilm laat eindelijk zien wie we echt zijn. We gebruiken hem nu op de website én in sollicitatiegesprekken.",
    name: "Jeroen Postma",
    role: "Directeur",
  },
  {
    quote:
      "De short content die we maandelijks krijgen doet het beter dan alles wat we eerder zelf filmden. Duidelijke afspraken en altijd op tijd.",
    name: "Nadia el Amrani",
    role: "Webshop-eigenaar",
  },
  {
    quote:
      "Van het eerste gesprek tot de oplevering één aanspreekpunt. Dat maakte het voor ons zo relaxed.",
    name: "Tim & Fleur",
    role: "Bruiloft in Friesland",
  },
  {
    quote:
      "De aftermovie van ons festival kregen we al de volgende dag. Perfecte timing, want toen zat iedereen nog online.",
    name: "Bas Kuipers",
    role: "Festivalorganisatie",
  },
  {
    quote:
      "Professioneel materiaal, maar vooral een prettig persoon om mee te werken. Onze medewerkers voelden zich direct op hun gemak.",
    name: "Karin Veenstra",
    role: "HR-manager",
  },
];

function Stars() {
  return (
    <div className="flex items-center gap-0.5 text-accent" aria-hidden>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M12 2.5l2.9 5.9 6.5.95-4.7 4.58 1.11 6.47L12 17.35l-5.81 3.05 1.11-6.47L2.6 9.35l6.5-.95L12 2.5Z" />
        </svg>
      ))}
    </div>
  );
}

function Card({ review }: { review: Review }) {
  return (
    <figure className="relative flex w-[18rem] shrink-0 flex-col overflow-hidden rounded-3xl bg-white px-6 py-6 sm:w-[22rem]">
      <Image
        src="/images/logo-mark.png"
        alt=""
        aria-hidden
        width={160}
        height={160}
        className="pointer-events-none absolute -bottom-6 -right-6 w-28 select-none opacity-[0.05]"
      />
      <Stars />
      <blockquote className="mt-4 text-pretty text-sm leading-relaxed text-neutral-600">
        {review.quote}
      </blockquote>
      <figcaption className="mt-5">
        <p className="flex items-center gap-1.5 font-semibold text-neutral-900">
          {review.name}
          <VerifiedBadge />
        </p>
        <p className="mt-0.5 text-sm text-neutral-500">{review.role}</p>
      </figcaption>
    </figure>
  );
}

function Row({
  reviews,
  reverse,
}: {
  reviews: Review[];
  reverse?: boolean;
}) {
  return (
    <div className="social-marquee overflow-hidden">
      <div
        className={`flex w-max items-stretch ${
          reverse ? "review-marquee-track-reverse" : "review-marquee-track"
        }`}
      >
        {/* Twee identieke kopieën voor een naadloze loop */}
        {[0, 1].map((copy) => (
          <div
            key={copy}
            aria-hidden={copy === 1 || undefined}
            className="flex items-stretch gap-4 pr-4"
          >
            {reviews.map((review) => (
              <Card key={`${copy}-${review.name}`} review={review} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Reviews() {
  return (
    <section id="reviews" className="pb-16 pt-2 sm:pb-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-xl">
          <h2 className="text-balance text-3xl font-semibold tracking-tight text-neutral-900 sm:text-4xl">
            Wat klanten{" "}
            <span
              className="font-medium italic text-accent"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              zeggen
            </span>
          </h2>
          <div className="mt-4 flex flex-wrap items-center gap-3">
            <Stars />
            <p className="text-pretty text-neutral-500">
              Gemiddeld 5,0 uit{" "}
              <strong className="font-semibold text-neutral-900">
                {reviewCount} beoordelingen
              </strong>
            </p>
          </div>
        </div>
      </div>

      <div className="mt-10 space-y-4">
        <Row reviews={topRow} />
        <Row reviews={bottomRow} reverse />
      </div>

      <div className="mx-auto mt-10 flex max-w-6xl justify-center px-4 sm:px-6">
        <Link
          href={REVIEW_URL}
          target="_blank"
          rel="noopener noreferrer"
          data-lead="geen"
          className="btn-squeeze inline-flex h-12 items-center justify-center gap-2 whitespace-nowrap rounded-full border border-neutral-300 px-6 text-sm font-semibold text-neutral-900 hover:bg-neutral-900/5 sm:px-8 sm:text-base"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
            <path d="M12 2.5l2.9 5.9 6.5.95-4.7 4.58 1.11 6.47L12 17.35l-5.81 3.05 1.11-6.47L2.6 9.35l6.5-.95L12 2.5Z" />
          </svg>
          Laat een review achter
        </Link>
      </div>
    </section>
  );
}
