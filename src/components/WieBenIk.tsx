import Image from "next/image";
import Link from "next/link";

export default function WieBenIk() {
  return (
    <section id="over-ons" className="py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-14">
          {/* Foto */}
          <div className="relative overflow-hidden rounded-3xl">
            <Image
              src="/images/wie-ben-ik.png"
              alt="Videograaf van Mediaspot met camera op locatie in de bergen"
              width={1228}
              height={940}
              className="h-full w-full object-cover"
            />
          </div>

          {/* Tekst */}
          <div>
            <h2 className="text-balance text-3xl font-semibold tracking-tight text-neutral-900 sm:text-4xl">
              Wie ben{" "}
              <span
                className="font-medium italic text-accent"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                ik
              </span>
            </h2>
            <p className="mt-5 text-pretty leading-relaxed text-neutral-500">
              Hoi! Ik ben de videograaf achter Mediaspot. Met mijn camera reis
              ik overal naartoe om verhalen vast te leggen: van bedrijfsfilms
              en commercials tot bruiloften en events.
            </p>
            <p className="mt-4 text-pretty leading-relaxed text-neutral-500">
              Wat mij drijft? Beelden maken die blijven hangen. Geen standaard
              video&apos;s, maar films met gevoel voor sfeer, timing en
              detail. Van het eerste idee tot de laatste snede in de montage
              ben ik jouw aanspreekpunt.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link
                href="tel:+31620176727"
                className="inline-flex h-12 items-center justify-center rounded-full bg-accent px-8 text-base font-semibold text-white transition-all duration-200 hover:brightness-110"
              >
                Neem contact op
              </Link>
              <Link
                href="#portfolio"
                className="inline-flex h-12 items-center justify-center rounded-full border border-neutral-300 px-8 text-base font-semibold text-neutral-900 transition-colors duration-200 hover:bg-neutral-900/5"
              >
                Bekijk ons werk
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
