import Image from "next/image";
import Link from "next/link";

export default function WieBenIk() {
  return (
    <section id="over-ons" className="py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-14">
          {/* Foto's */}
          <div className="relative pb-10 pr-6 sm:pr-10">
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl">
              <Image
                src="/images/wie-ben-ik.jpg"
                alt="Videograaf van Mediaspot filmt tijdens een bruiloft"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-[50%_22%]"
              />
            </div>
            <div className="absolute bottom-0 right-0 w-28 overflow-hidden rounded-2xl border-4 border-white shadow-xl sm:w-48">
              <Image
                src="/images/social-onlocation.jpg"
                alt="Filmend on location in een historische straat"
                width={1024}
                height={1024}
                className="h-full w-full object-cover"
              />
            </div>
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
              Hoi, ik ben Daniel, de videograaf achter Mediaspot. Met mijn
              camera reis ik overal naartoe om verhalen vast te leggen: van
              bedrijfsfilms en commercials tot bruiloften en events.
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
