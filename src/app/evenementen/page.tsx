import Image from "next/image";
import Link from "next/link";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HeroVideo from "@/components/HeroVideo";
import JsonLd from "@/components/JsonLd";
import LazyVideo from "@/components/LazyVideo";
import { breadcrumbSchema, pageMetadata, serviceSchema } from "@/lib/seo";

const PATH = "/evenementen";

export const metadata = pageMetadata({
  title: "Aftermovie laten maken voor je evenement",
  description:
    "Aftermovies en eventvideo's met impact: bedrijfsevenementen, festivals, feesten en jubilea. Cinematisch gefilmd, scherp gemonteerd en snel opgeleverd.",
  path: PATH,
  keywords: [
    "aftermovie laten maken",
    "eventvideograaf",
    "evenement laten filmen",
    "festival aftermovie",
    "bedrijfsevenement video",
  ],
});

type EventType = {
  title: string;
  text: string;
  media: { type: "image"; src: string } | { type: "video"; src: string; poster: string };
  alt: string;
};

const eventTypes: EventType[] = [
  {
    title: "Aftermovies",
    text: "De energie van jouw event samengevat in een film van 1 tot 3 minuten, perfect voor social media en de promotie van je volgende editie.",
    media: { type: "image", src: "/images/event-confetti.jpg" },
    alt: "Confettiregen boven een feestend publiek",
  },
  {
    title: "Bedrijfsevenementen",
    text: "Congressen, beurzen, personeelsfeesten en openingen. Professioneel vastgelegd, zonder dat we opvallen op de vloer.",
    media: { type: "image", src: "/images/event-congres.jpg" },
    alt: "Volle congreszaal tijdens een zakelijk evenement",
  },
  {
    title: "Festivals & concerten",
    text: "Van de eerste bezoeker tot de laatste beat: sfeerbeelden, publiek en artiesten, gefilmd met oog voor licht en timing.",
    media: { type: "image", src: "/images/event-concert.jpg" },
    alt: "Groot concert met lichtshow en duizenden bezoekers",
  },
  {
    title: "Feesten & jubilea",
    text: "Een verjaardag, jubileum of gala om nooit te vergeten. Wij leggen de momenten vast waar het echt om draait.",
    media: {
      type: "video",
      src: "/videos/portfolio-speeches.mp4",
      poster: "/images/portfolio-speeches-poster.jpg",
    },
    alt: "Speech en toost tijdens een feest",
  },
];

const usps = [
  {
    title: "4K cinema-kwaliteit",
    text: "Professionele camera's, licht en geluid",
  },
  {
    title: "Snelle levering",
    text: "Je aftermovie binnen 7 dagen in huis",
  },
  {
    title: "Persoonlijke aanpak",
    text: "Eén aanspreekpunt, van idee tot montage",
  },
];

export default function Evenementen() {
  return (
    <>
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <section className="relative overflow-hidden pb-8 pt-[6.5rem] sm:pt-28">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 -z-10"
          >
            <div className="absolute left-1/2 top-[-30%] hidden h-[480px] w-[800px] -translate-x-1/2 rounded-full bg-accent/10 blur-[140px] md:block" />
          </div>

          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="group relative flex min-h-[420px] flex-col justify-end overflow-hidden rounded-3xl p-8 sm:min-h-[520px] sm:p-10">
              <HeroVideo
                src="/videos/evenementen-hero-desktop.mp4"
                poster="/images/event-drone-poster.jpg"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div
                aria-hidden
                className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent"
              />
              <div
                aria-hidden
                className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-transparent"
              />

              <div className="relative">
                <h1 className="max-w-xl text-balance text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl">
                  Jouw evenement, cinematisch vastgelegd.
                </h1>
                <p className="mt-4 max-w-md text-pretty text-white/75">
                  Van bedrijfsfeest tot festival: wij maken er een aftermovie
                  van die blijft hangen.
                </p>
                <div className="mt-7 flex flex-wrap items-center gap-3">
                  <Link
                    href="tel:+31620176727"
                    className="liquid-glass-btn btn-squeeze inline-flex h-12 items-center justify-center rounded-full px-8 text-base font-semibold text-white"
                  >
                    Neem contact op
                  </Link>
                  <Link
                    href="/#portfolio"
                    className="btn-squeeze inline-flex h-12 items-center justify-center rounded-full border border-white/40 px-8 text-base font-semibold text-white hover:bg-white/10"
                  >
                    Bekijk ons werk
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Soorten evenementen */}
        <section className="py-14 sm:py-16">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="max-w-xl">
              <h2 className="text-balance text-3xl font-semibold tracking-tight text-neutral-900 sm:text-4xl">
                Wat we{" "}
                <span
                  className="font-medium italic text-accent"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  filmen
                </span>
              </h2>
              <p className="mt-4 text-pretty text-neutral-500">
                Groot of klein, zakelijk of feestelijk: elk evenement verdient
                beelden die de sfeer écht overbrengen.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {eventTypes.map((t) => (
                <div
                  key={t.title}
                  className="group relative flex min-h-[300px] items-end overflow-hidden rounded-3xl p-6 sm:min-h-[340px] sm:p-7"
                >
                  {t.media.type === "video" ? (
                    <LazyVideo
                      src={t.media.src}
                      poster={t.media.poster}
                      posterSizes="(max-width: 640px) 100vw, 50vw"
                      ariaLabel={t.alt}
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                    />
                  ) : (
                    <Image
                      src={t.media.src}
                      alt={t.alt}
                      fill
                      sizes="(max-width: 640px) 100vw, 50vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                    />
                  )}
                  <div
                    aria-hidden
                    className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent"
                  />
                  <div className="relative">
                    <h3 className="text-xl font-semibold text-white sm:text-2xl">
                      {t.title}
                    </h3>
                    <p className="mt-1.5 max-w-md text-sm leading-relaxed text-white/75">
                      {t.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* USP's */}
            <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-3">
              {usps.map((usp) => (
                <div
                  key={usp.title}
                  className="liquid-glass relative overflow-hidden rounded-3xl px-6 py-5 text-left"
                >
                  <Image
                    src="/images/logo-mark.png"
                    alt=""
                    aria-hidden
                    width={160}
                    height={160}
                    className="pointer-events-none absolute -bottom-5 -right-5 w-24 select-none opacity-[0.05]"
                  />
                  <p className="font-semibold text-neutral-900">{usp.title}</p>
                  <p className="mt-1 text-sm text-neutral-500">{usp.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="pb-16 sm:pb-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="relative overflow-hidden rounded-3xl bg-[#1d1d1f] px-8 py-12 text-center sm:px-12 sm:py-16">
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0"
              >
                <div className="absolute left-1/2 top-[-60%] hidden h-[380px] w-[640px] -translate-x-1/2 rounded-full bg-accent/20 blur-[120px] md:block" />
              </div>
              <div className="relative">
                <h2 className="text-balance text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                  Een evenement op de{" "}
                  <span
                    className="font-medium italic text-accent"
                    style={{ fontFamily: "var(--font-playfair)" }}
                  >
                    planning
                  </span>
                  {"?"}
                </h2>
                <p className="mx-auto mt-4 max-w-md text-pretty text-white/70">
                  Vertel ons wat je gaat organiseren, dan denken wij mee over
                  de mooiste manier om het vast te leggen.
                </p>
                <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                  <Link
                    href="tel:+31620176727"
                    className="btn-squeeze inline-flex h-12 items-center justify-center rounded-full bg-accent px-8 text-base font-semibold text-white hover:brightness-110"
                  >
                    Bel 06 20176727
                  </Link>
                  <Link
                    href="mailto:info@mediaspot.nl"
                    className="liquid-glass-btn btn-squeeze inline-flex h-12 items-center justify-center rounded-full px-8 text-base font-semibold text-white"
                  >
                    Mail ons
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <JsonLd
        nodes={[
          serviceSchema({
            name: "Aftermovie en eventvideo laten maken",
            serviceType: "Evenementvideografie",
            description:
              "Aftermovies en eventregistraties voor bedrijfsevenementen, festivals, concerten, feesten en jubilea. Inclusief montage en color grading.",
            path: PATH,
          }),
          breadcrumbSchema([{ name: "Evenementen", path: PATH }]),
        ]}
      />
    </>
  );
}
