import Image from "next/image";
import Link from "next/link";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import LazyVideo from "@/components/LazyVideo";
import Reviews from "@/components/Reviews";
import Werkgebied from "@/components/Werkgebied";
import Werkwijze from "@/components/Werkwijze";
import WieBenIk from "@/components/WieBenIk";

type Dienst = {
  title: string;
  text: string;
  href: string;
  media: { type: "image" | "video"; src: string };
  alt: string;
  wide?: boolean;
  /** Uitsnede bijstellen, bijvoorbeeld bij verticale video in een brede kaart */
  focus?: string;
};

const diensten: Dienst[] = [
  {
    title: "Bruiloften",
    text: "Van ja-woord tot avondfeest, met vaste pakketten en prijzen",
    href: "/trouwerij",
    media: { type: "image", src: "/images/bruiloft.png" },
    alt: "Bruidspaar met boeket tijdens de ceremonie",
    wide: true,
  },
  {
    title: "Evenementen",
    text: "Aftermovies die de energie van je event overbrengen",
    href: "/evenementen",
    media: { type: "image", src: "/images/event-confetti.jpg" },
    alt: "Confettiregen boven een feestend publiek",
  },
  {
    title: "Bedrijfsvideo",
    text: "Bedrijfsfilms, commercials en productvideo's",
    href: "/bedrijfsvideo",
    media: { type: "image", src: "/images/event-congres.jpg" },
    alt: "Zakelijke presentatie in een volle zaal",
  },
  {
    title: "Social content",
    text: "Short-form video's voor TikTok, Reels en Shorts",
    href: "/social-content",
    media: { type: "video", src: "/videos/social-tt2.mp4" },
    alt: "Verticale social video voor een fatbike-merk",
    wide: true,
    focus: "object-[50%_30%]",
  },
];

const usps = [
  {
    title: "4K cinema-kwaliteit",
    text: "Professionele camera's, licht en geluid",
  },
  {
    title: "Snelle levering",
    text: "Je video binnen 7 dagen in huis",
  },
  {
    title: "Persoonlijke aanpak",
    text: "Eén aanspreekpunt, van idee tot montage",
  },
];

function ArrowButton() {
  return (
    <span className="liquid-glass-btn flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-white transition-transform duration-200 group-hover:scale-110">
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden
      >
        <path d="M9 6l6 6-6 6" />
      </svg>
    </span>
  );
}

export default function Home() {
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
            <div className="absolute left-1/2 top-[-30%] h-[480px] w-[800px] -translate-x-1/2 rounded-full bg-accent/10 blur-[140px]" />
          </div>

          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="group relative flex min-h-[460px] flex-col justify-end overflow-hidden rounded-3xl p-8 sm:min-h-[560px] sm:p-10">
              <video
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
                aria-hidden
                poster="/images/hero-main.jpg"
                className="absolute inset-0 h-full w-full object-cover"
              >
                <source src="/videos/herosectionvideo2.mp4" type="video/mp4" />
              </video>
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
                  Jouw verhaal, cinematisch vastgelegd.
                </h1>
                <p className="mt-4 max-w-md text-pretty text-white/75">
                  Van bruiloft tot bedrijfsfilm en aftermovie: strak gefilmd,
                  scherp gemonteerd.
                </p>
                <div className="mt-7 flex flex-wrap items-center gap-3">
                  <Link
                    href="#diensten"
                    className="liquid-glass-btn inline-flex h-12 items-center justify-center rounded-full px-8 text-base font-semibold text-white"
                  >
                    Bekijk ons werk
                  </Link>
                  <Link
                    href="tel:+31620176727"
                    className="inline-flex h-12 items-center justify-center rounded-full border border-white/40 px-8 text-base font-semibold text-white transition-colors duration-200 hover:bg-white/10"
                  >
                    Neem contact op
                  </Link>
                </div>
              </div>
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

        {/* Diensten */}
        <section id="diensten" className="py-14 sm:py-16">
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
                Elk verhaal vraagt om een eigen aanpak. Kies waar jij mee bezig
                bent en bekijk ons werk.
              </p>
            </div>

            <div
              id="portfolio"
              className="mt-10 grid grid-cols-1 gap-4 lg:grid-cols-12"
            >
              {diensten.map((d) => (
                <Link
                  key={d.href}
                  href={d.href}
                  className={`group relative min-h-[300px] overflow-hidden rounded-3xl sm:min-h-[340px] ${
                    d.wide ? "lg:col-span-7" : "lg:col-span-5"
                  }`}
                >
                  {d.media.type === "video" ? (
                    <LazyVideo
                      src={d.media.src}
                      ariaLabel={d.alt}
                      className={`absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04] ${
                        d.focus ?? ""
                      }`}
                    />
                  ) : (
                    <Image
                      src={d.media.src}
                      alt={d.alt}
                      fill
                      sizes="(max-width: 1024px) 100vw, 58vw"
                      className={`object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04] ${
                        d.focus ?? ""
                      }`}
                    />
                  )}
                  <div
                    aria-hidden
                    className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"
                  />
                  <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-6 sm:p-7">
                    <div>
                      <h3 className="text-xl font-semibold text-white sm:text-2xl">
                        {d.title}
                      </h3>
                      <p className="mt-1 max-w-xs text-sm text-white/70">
                        {d.text}
                      </p>
                    </div>
                    <ArrowButton />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <Werkwijze />
        <Reviews />
        <WieBenIk />
        <Werkgebied />

        {/* CTA */}
        <section className="pb-16 pt-4 sm:pb-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="relative overflow-hidden rounded-3xl bg-[#1d1d1f] px-8 py-12 text-center sm:px-12 sm:py-16">
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0"
              >
                <div className="absolute left-1/2 top-[-60%] h-[380px] w-[640px] -translate-x-1/2 rounded-full bg-accent/20 blur-[120px]" />
              </div>
              <div className="relative">
                <h2 className="text-balance text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                  Een idee op de{" "}
                  <span
                    className="font-medium italic text-accent"
                    style={{ fontFamily: "var(--font-playfair)" }}
                  >
                    planning
                  </span>
                  {"?"}
                </h2>
                <p className="mx-auto mt-4 max-w-md text-pretty text-white/70">
                  Vertel ons wat je wilt vastleggen, dan denken wij mee over de
                  mooiste manier om het te filmen.
                </p>
                <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                  <Link
                    href="tel:+31620176727"
                    className="inline-flex h-12 items-center justify-center rounded-full bg-accent px-8 text-base font-semibold text-white transition-all duration-200 hover:brightness-110"
                  >
                    Bel 06 20176727
                  </Link>
                  <Link
                    href="mailto:info@mediaspot.nl"
                    className="liquid-glass-btn inline-flex h-12 items-center justify-center rounded-full px-8 text-base font-semibold text-white"
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
    </>
  );
}
