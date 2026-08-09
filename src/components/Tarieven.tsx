"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

type RingVariant = "zilver" | "goud" | "diamant";

type Pakket = {
  name: string;
  ring: RingVariant;
  oldPrice: string;
  price: string;
  description: string;
  features: string[];
  highlight?: boolean;
};

const pakketten: Pakket[] = [
  {
    name: "Zilver",
    ring: "zilver",
    oldPrice: "€ 899",
    price: "€ 799",
    description: "8 uur filmen, bijv. t/m de trouwceremonie",
    features: [
      "1 videograaf",
      "Trouwfilm van circa 6–7 minuten",
      "Professionele nabewerking & color grading",
      "Geleverd binnen 3 weken",
      "Geen reiskosten",
      "Houten cadeauverpakking met USB",
      "Bruiloftsfilm in 4K én Full HD",
    ],
  },
  {
    name: "Goud",
    ring: "goud",
    oldPrice: "€ 999",
    price: "€ 899",
    description: "10 uur filmen, bijv. tot en met het diner",
    features: [
      "1 videograaf",
      "Trouwfilm van circa 7–8 minuten",
      "Professionele nabewerking & color grading",
      "Geleverd binnen 3 weken",
      "Geen reiskosten",
      "Houten cadeauverpakking met USB",
      "Bruiloftsfilm in 4K én Full HD",
    ],
    highlight: true,
  },
  {
    name: "Diamant",
    ring: "diamant",
    oldPrice: "€ 1.349",
    price: "€ 1.199",
    description: "12 uur filmen, bijv. t/m het avondfeest",
    features: [
      "1 videograaf",
      "Drone-opnames van jullie locatie",
      "Trouwfilm van circa 8–10 minuten",
      "Professionele nabewerking & color grading",
      "Geleverd binnen 3 weken",
      "Geen reiskosten",
      "Houten cadeauverpakking met USB",
      "Bruiloftsfilm in 4K én Full HD",
    ],
  },
];

function Ring({ variant }: { variant: RingVariant }) {
  const band =
    variant === "zilver"
      ? { from: "#e8e8ee", mid: "#b9b9c4", to: "#8e8e99" }
      : { from: "#f7dd8a", mid: "#e3b338", to: "#b8860b" };

  return (
    <svg width="52" height="52" viewBox="0 0 64 64" aria-hidden>
      <defs>
        <linearGradient
          id={`band-${variant}`}
          x1="0"
          y1="0"
          x2="64"
          y2="64"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor={band.from} />
          <stop offset="0.5" stopColor={band.mid} />
          <stop offset="1" stopColor={band.to} />
        </linearGradient>
        <linearGradient
          id={`diamond-${variant}`}
          x1="20"
          y1="2"
          x2="44"
          y2="22"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#ffffff" />
          <stop offset="0.5" stopColor="#cfeafe" />
          <stop offset="1" stopColor="#8ec9f0" />
        </linearGradient>
      </defs>

      {variant === "diamant" ? (
        <>
          <circle
            cx="32"
            cy="38"
            r="19"
            fill="none"
            stroke={`url(#band-${variant})`}
            strokeWidth="6"
          />
          {/* Diamant bovenop de ring */}
          <polygon
            points="32,4 41,10 37,19 27,19 23,10"
            fill={`url(#diamond-${variant})`}
            stroke="#7db8e0"
            strokeWidth="1"
            strokeLinejoin="round"
          />
          <path
            d="M27 19l5 -9 5 9"
            fill="none"
            stroke="#ffffff"
            strokeWidth="1"
            strokeLinejoin="round"
            opacity="0.8"
          />
        </>
      ) : (
        <>
          <circle
            cx="32"
            cy="32"
            r="21"
            fill="none"
            stroke={`url(#band-${variant})`}
            strokeWidth="7"
          />
          {/* Glimmertje */}
          <path
            d="M15 20a21 21 0 0 1 12 -8"
            fill="none"
            stroke="#ffffff"
            strokeWidth="2.5"
            strokeLinecap="round"
            opacity="0.7"
          />
        </>
      )}
    </svg>
  );
}

function Check() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="mt-0.5 shrink-0 text-accent"
    >
      <path d="M4 12.5l5 5L20 6.5" />
    </svg>
  );
}

export default function Tarieven() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="tarieven" ref={sectionRef} className="py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-xl">
          <h2 className="text-balance text-3xl font-semibold tracking-tight text-neutral-900 sm:text-4xl">
            Trouwfilm{" "}
            <span
              className="font-medium italic text-accent"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              pakketten
            </span>
          </h2>
          <p className="mt-4 text-pretty text-neutral-500">
            Kies het pakket dat bij jullie dag past. Twijfel je? In een gratis
            kennismakingsgesprek denken we graag met jullie mee.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-4 lg:grid-cols-3">
          {pakketten.map((p, i) => (
            <div
              key={p.name}
              className="group relative flex flex-col rounded-3xl bg-white p-8 text-neutral-900"
            >
              {p.highlight && (
                <span className="absolute -top-3.5 left-8 rounded-full bg-accent px-4 py-1.5 text-xs font-bold uppercase tracking-wide text-white">
                  Meest gekozen
                </span>
              )}

              <div
                className={`w-fit ${
                  inView
                    ? "translate-x-0 rotate-0 opacity-100"
                    : "-translate-x-44 -rotate-[360deg] opacity-0"
                }`}
                style={{
                  transition: `translate 1.2s cubic-bezier(0.22, 1, 0.36, 1) ${
                    inView ? i * 200 : 0
                  }ms, rotate 1.2s cubic-bezier(0.22, 1, 0.36, 1) ${
                    inView ? i * 200 : 0
                  }ms, opacity 0.3s ease-out ${inView ? i * 200 : 0}ms`,
                }}
              >
                <div className="ring-wiggle w-fit">
                  <Ring variant={p.ring} />
                </div>
              </div>

              <h3 className="mt-5 text-lg font-semibold text-neutral-900">
                Film Bruiloft {p.name}
              </h3>

              <div className="mt-4 flex items-baseline gap-3">
                <span className="text-sm text-neutral-400 line-through">
                  {p.oldPrice}
                </span>
                <span className="text-4xl font-semibold tracking-tight">
                  {p.price}
                </span>
              </div>

              <p className="mt-3 text-sm font-medium text-neutral-600">
                {p.description}
              </p>

              <hr className="my-6 border-t border-neutral-200" />

              <ul className="mb-8 flex flex-col gap-3">
                {p.features.map((f) => (
                  <li
                    key={f}
                    className="flex items-start gap-2.5 text-sm leading-relaxed text-neutral-600"
                  >
                    <Check />
                    {f}
                  </li>
                ))}
              </ul>

              <Link
                href="tel:+31620176727"
                className={`mt-auto inline-flex h-12 items-center justify-center rounded-full px-8 text-base font-semibold transition-all duration-200 ${
                  p.highlight
                    ? "bg-accent text-white hover:brightness-110"
                    : "border border-neutral-300 text-neutral-900 hover:bg-neutral-900/5"
                }`}
              >
                Contact opnemen
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
