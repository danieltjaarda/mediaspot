import Link from "next/link";

type Props = {
  /** Provincienaam voor de lokale variant, bijv. "Friesland". Leeg = landelijke tekst. */
  regio?: string;
  plaatsen?: string[];
  intro?: string;
  sfeer?: string;
};

/**
 * Tekstblok direct onder de hero van de trouwpagina's. Dit is de plek waar
 * Google leest waar de pagina over gaat: videograaf, bruiloft, trouwfilm en
 * (op provinciepagina's) de regio. Houd de eerste alinea zoekwoord-rijk maar
 * gewoon leesbaar.
 */
export default function TrouwIntro({ regio, plaatsen, intro, sfeer }: Props) {
  const waar = regio ? `in ${regio}` : "in heel Nederland";
  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 lg:gap-14">
          <div>
            <h2 className="text-balance text-3xl font-semibold tracking-tight text-neutral-900 sm:text-4xl">
              Videograaf voor{" "}
              <span
                className="font-medium italic text-accent"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                bruiloften
              </span>{" "}
              {waar}
            </h2>
            {plaatsen && plaatsen.length > 0 && (
              <p className="mt-5 text-sm leading-relaxed text-neutral-500">
                Onder andere in {plaatsen.slice(0, -1).join(", ")} en{" "}
                {plaatsen[plaatsen.length - 1]}.
              </p>
            )}
          </div>
          <div className="space-y-5 text-pretty leading-relaxed text-neutral-600 lg:col-span-2">
            <p>
              {intro ??
                "Op zoek naar een videograaf voor jullie bruiloft? Mediaspot maakt cinematische trouwfilms door heel Nederland: van de voorbereidingen en het ja-woord tot de speeches, de eerste dans en het avondfeest. Wij filmen onopvallend, in 4K, met professionele camera's, licht en geluid, en monteren jullie dag tot een trouwfilm die je over twintig jaar nog met plezier terugkijkt."}
            </p>
            <p>
              {sfeer ??
                "Iedere bruiloft is anders, dus wij komen niet met een vast script. Vooraf bespreken we jullie dagindeling, de locaties en de momenten die voor jullie het belangrijkst zijn. Op de dag zelf zijn wij er ruim op tijd, werken we samen met jullie fotograaf en zorgen we dat de geloften en toespraken helder worden opgenomen."}
            </p>
            <p>
              Onze pakketten zijn vast en transparant: een trouwfilm vanaf{" "}
              <Link href="#tarieven" className="font-medium text-neutral-900 underline underline-offset-4 hover:text-accent">
                € 799
              </Link>
              , inclusief professionele nabewerking en color grading, geleverd
              binnen 3 weken in 4K en Full HD, zonder reiskosten. Wil je eerst
              zien hoe dat eruitziet? Bekijk{" "}
              <Link href="#portfolio" className="font-medium text-neutral-900 underline underline-offset-4 hover:text-accent">
                onze recente trouwfilms
              </Link>
              {regio ? (
                <>
                  {" "}
                  of lees hoe wij werken als{" "}
                  <Link href="/videograaf-bruiloft" className="font-medium text-neutral-900 underline underline-offset-4 hover:text-accent">
                    bruiloft videograaf in heel Nederland
                  </Link>
                  .
                </>
              ) : (
                "."
              )}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
