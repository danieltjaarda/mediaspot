import Image from "next/image";
import Link from "next/link";

import RatingBadge from "@/components/RatingBadge";

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
      >
        <path d="M9 6l6 6-6 6" />
      </svg>
    </span>
  );
}

export default function Hero() {
  return (
    <section className="relative overflow-hidden pb-8 pt-[6.5rem] sm:pt-28">
      {/* Achtergrond-gloed */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-[-30%] h-[480px] w-[800px] -translate-x-1/2 rounded-full bg-accent/10 blur-[140px]" />
      </div>

      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:grid-rows-2">
          {/* Grote kaart links */}
          <div className="group relative flex min-h-[420px] flex-col justify-end overflow-hidden rounded-3xl p-8 sm:min-h-[520px] sm:p-10 lg:col-span-2 lg:row-span-2">
            <video
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              aria-hidden
              poster="/images/hero-main.jpg"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
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
              <h1 className="max-w-lg text-balance text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl">
                Jullie bruiloft, cinematisch vastgelegd.
              </h1>
              <div className="mt-5">
                <RatingBadge />
              </div>
              <div className="mt-7 flex flex-wrap items-center gap-3">
                <Link
                  href="#portfolio"
                  className="liquid-glass-btn inline-flex h-12 items-center justify-center rounded-full px-8 text-base font-semibold text-white"
                >
                  Bekijk ons werk
                </Link>
                <Link
                  href="#tarieven"
                  className="inline-flex h-12 items-center justify-center rounded-full border border-white/40 px-8 text-base font-semibold text-white transition-colors duration-200 hover:bg-white/10"
                >
                  Prijzen
                </Link>
              </div>
            </div>
          </div>

          {/* Kaart: Prijzen */}
          <Link
            href="#tarieven"
            className="group relative flex min-h-[240px] items-end overflow-hidden rounded-3xl p-6"
          >
            <Image
              src="/images/bruiloft.png"
              alt="Bruidspaar met boeket tijdens de ceremonie"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 33vw"
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
            />
            <div
              aria-hidden
              className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent"
            />
            <div className="relative flex w-full items-end justify-between gap-4">
              <div>
                <p className="text-2xl font-semibold text-white">Prijzen</p>
                <p className="mt-1 text-sm text-white/70">
                  Bekijk onze trouwfilm pakketten
                </p>
              </div>
              <ArrowButton />
            </div>
          </Link>

          {/* Kaart: Wie ben ik */}
          <Link
            href="#over-ons"
            className="group relative flex min-h-[240px] items-end overflow-hidden rounded-3xl p-6"
          >
            <Image
              src="/images/wie-ben-ik.jpg"
              alt="Videograaf van Mediaspot met camera op locatie"
              fill
              sizes="(max-width: 1024px) 100vw, 33vw"
              className="object-cover object-[50%_12%] transition-transform duration-700 ease-out group-hover:scale-[1.05]"
            />
            <div
              aria-hidden
              className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent"
            />
            <div className="relative flex w-full items-end justify-between gap-4">
              <div>
                <p className="text-2xl font-semibold text-white">
                  Wie ben ik
                </p>
                <p className="mt-1 text-sm text-white/70">
                  Maak kennis met de videograaf
                </p>
              </div>
              <ArrowButton />
            </div>
          </Link>
        </div>

        {/* USP's */}
        <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {[
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
          ].map((usp) => (
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
  );
}
