import Link from "next/link";

import { PROVINCIES } from "@/lib/provincies";

import { provinces } from "./nl-provinces";

// Mediaspot werkt in heel Nederland: alle provincies zijn actief
const activeIds = new Set(provinces.map((p) => p.id));

const slugByMapId = new Map(PROVINCIES.map((p) => [p.mapId, p.slug]));

type Props = {
  /** Provincienamen linken naar de provinciepagina's (/videograaf-bruiloft/[provincie]). */
  linkProvincies?: boolean;
  /** Kaart-id (bijv. "NLFR") dat in de accentkleur wordt uitgelicht. */
  highlightId?: string;
};

export default function Werkgebied({ linkProvincies = false, highlightId }: Props = {}) {
  return (
    <section id="werkgebied" className="py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-14">
          {/* Tekst */}
          <div>
            <h2 className="text-balance text-3xl font-semibold tracking-tight text-neutral-900 sm:text-4xl">
              Ons{" "}
              <span
                className="font-medium italic text-accent"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                werkgebied
              </span>
            </h2>
            <p className="mt-5 text-pretty leading-relaxed text-neutral-500">
              Van Groningen tot Zeeland en van Noord-Holland tot Limburg:
              wij komen filmen door heel Nederland. Waar jullie ook trouwen,
              wij reizen graag naar je toe.
            </p>
            <ul className="mt-6 grid grid-cols-2 gap-x-6 gap-y-2">
              {provinces
                .filter((p) => activeIds.has(p.id))
                .map((p) => {
                  const slug = slugByMapId.get(p.id);
                  const current = p.id === highlightId;
                  return (
                    <li
                      key={p.id}
                      className="flex items-center gap-2.5 text-neutral-700"
                    >
                      <span className="h-2 w-2 shrink-0 rounded-full bg-accent" />
                      {linkProvincies && slug && !current ? (
                        <Link
                          href={`/videograaf-bruiloft/${slug}`}
                          className="underline-offset-4 hover:text-accent hover:underline"
                        >
                          {p.name}
                        </Link>
                      ) : (
                        <span className={current ? "font-semibold text-neutral-900" : undefined}>
                          {p.name}
                        </span>
                      )}
                    </li>
                  );
                })}
            </ul>
          </div>

          {/* Kaart */}
          <div
            className="liquid-glass rounded-3xl p-6 sm:p-8"
            style={{ boxShadow: "none" }}
          >
            <svg
              viewBox="0 0 1000 1000"
              role="img"
              aria-label="Kaart van Nederland met het werkgebied van Mediaspot"
              className="h-auto w-full"
            >
              {provinces.map((p) => {
                const active = activeIds.has(p.id);
                const current = p.id === highlightId;
                return (
                  <path
                    key={p.id}
                    d={p.d}
                    className={
                      current
                        ? "fill-accent"
                        : active
                          ? "fill-[#1d1d1f] transition-colors duration-200 hover:fill-[#3a3a3d]"
                          : "fill-neutral-200"
                    }
                    stroke="#ffffff"
                    strokeWidth={2}
                    strokeLinejoin="round"
                  >
                    <title>{`${p.name} — hier werken wij`}</title>
                  </path>
                );
              })}

              {/* Hoofdkantoor: Joure */}
              <g>
                <title>Joure — ons hoofdkantoor</title>
                <circle
                  cx="604.1"
                  cy="242.9"
                  r="22"
                  className="fill-accent/40"
                >
                  <animate
                    attributeName="r"
                    values="16;30;16"
                    dur="2.5s"
                    repeatCount="indefinite"
                  />
                </circle>
                <circle
                  cx="604.1"
                  cy="242.9"
                  r="16"
                  fill="#ffffff"
                />
                <circle
                  cx="604.1"
                  cy="242.9"
                  r="10.5"
                  className="fill-accent"
                />
              </g>
            </svg>
            <p className="mt-4 flex items-center justify-center gap-2 text-sm text-neutral-500">
              <span className="h-2.5 w-2.5 rounded-full bg-accent ring-2 ring-white" />
              Hoofdkantoor, Joure
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
