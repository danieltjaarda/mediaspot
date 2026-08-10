import Image from "next/image";
import Link from "next/link";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import JsonLd from "@/components/JsonLd";
import LazyVideo from "@/components/LazyVideo";
import { breadcrumbSchema, pageMetadata, serviceSchema } from "@/lib/seo";

const PATH = "/bedrijfsvideo";

export const metadata = pageMetadata({
  title: "Bedrijfsvideo laten maken",
  description:
    "Bedrijfsfilms, productvideo's, commercials en testimonials die verkopen. Van concept tot montage, in 4K gefilmd en binnen 7 dagen geleverd.",
  path: PATH,
  keywords: [
    "bedrijfsvideo laten maken",
    "bedrijfsfilm",
    "productvideo",
    "commercial laten maken",
    "testimonial video",
  ],
});

type VideoType = {
  title: string;
  text: string;
  media: { type: "image" | "video"; src: string };
  alt: string;
};

const videoTypes: VideoType[] = [
  {
    title: "Bedrijfsfilm",
    text: "Laat zien wie jullie zijn: het verhaal, de mensen en de werkvloer, samengebracht in één krachtige film voor je website en presentaties.",
    media: { type: "image", src: "/images/event-congres.jpg" },
    alt: "Zakelijke presentatie in een volle zaal",
  },
  {
    title: "Productvideo",
    text: "Jouw product in de spotlight. Strak in beeld gebracht en gemonteerd om te overtuigen, van webshop tot beurspresentatie.",
    media: { type: "video", src: "/videos/social-tt1.mp4" },
    alt: "Productvideo van een verstelbaar bureau",
  },
  {
    title: "Commercial",
    text: "Korte, pakkende video's die blijven hangen. Perfect voor online campagnes, social ads en televisie.",
    media: { type: "video", src: "/videos/social-tt2.mp4" },
    alt: "Commercial voor een fatbike",
  },
  {
    title: "Testimonial & klantcase",
    text: "Niets overtuigt beter dan een tevreden klant. Wij leggen echte verhalen vast die vertrouwen wekken bij nieuwe klanten.",
    media: { type: "video", src: "/videos/social-yt1.mp4" },
    alt: "Interview waarin een expert uitleg geeft",
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

export default function Bedrijfsvideo() {
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
            <div className="group relative flex min-h-[420px] flex-col justify-end overflow-hidden rounded-3xl p-8 sm:min-h-[520px] sm:p-10">
              <video
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
                aria-hidden
                poster="/images/social-yt2-poster.jpg"
                className="absolute inset-0 h-full w-full object-cover"
              >
                <source src="/videos/social-yt2.mp4" type="video/mp4" />
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
                  Jouw bedrijf, cinematisch vastgelegd.
                </h1>
                <p className="mt-4 max-w-md text-pretty text-white/75">
                  Van bedrijfsfilm tot commercial: video die jouw merk laat
                  groeien.
                </p>
                <div className="mt-7 flex flex-wrap items-center gap-3">
                  <Link
                    href="tel:+31620176727"
                    className="liquid-glass-btn inline-flex h-12 items-center justify-center rounded-full px-8 text-base font-semibold text-white"
                  >
                    Neem contact op
                  </Link>
                  <Link
                    href="/#portfolio"
                    className="inline-flex h-12 items-center justify-center rounded-full border border-white/40 px-8 text-base font-semibold text-white transition-colors duration-200 hover:bg-white/10"
                  >
                    Bekijk ons werk
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Soorten video's */}
        <section className="py-14 sm:py-16">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="max-w-xl">
              <h2 className="text-balance text-3xl font-semibold tracking-tight text-neutral-900 sm:text-4xl">
                Wat we{" "}
                <span
                  className="font-medium italic text-accent"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  maken
                </span>
              </h2>
              <p className="mt-4 text-pretty text-neutral-500">
                Elke video begint met jouw doel: meer naamsbekendheid, meer
                omzet of nieuw talent. Daar maken wij beeld bij dat werkt.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {videoTypes.map((t) => (
                <div
                  key={t.title}
                  className="group relative flex min-h-[300px] items-end overflow-hidden rounded-3xl p-6 sm:min-h-[340px] sm:p-7"
                >
                  {t.media.type === "video" ? (
                    <LazyVideo
                      src={t.media.src}
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
                <div className="absolute left-1/2 top-[-60%] h-[380px] w-[640px] -translate-x-1/2 rounded-full bg-accent/20 blur-[120px]" />
              </div>
              <div className="relative">
                <h2 className="text-balance text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                  Jouw bedrijf in{" "}
                  <span
                    className="font-medium italic text-accent"
                    style={{ fontFamily: "var(--font-playfair)" }}
                  >
                    beeld
                  </span>
                  {"?"}
                </h2>
                <p className="mx-auto mt-4 max-w-md text-pretty text-white/70">
                  Vertel ons over jouw doel, dan denken wij mee over de video
                  die daarbij past. Vrijblijvend en zonder verplichtingen.
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
      <JsonLd
        nodes={[
          serviceSchema({
            name: "Bedrijfsvideo laten maken",
            serviceType: "Bedrijfsvideografie",
            description:
              "Bedrijfsfilms, productvideo's, commercials en testimonials voor website, social media en advertenties. Inclusief concept, opname en montage.",
            path: PATH,
          }),
          breadcrumbSchema([{ name: "Bedrijfsvideo", path: PATH }]),
        ]}
      />
    </>
  );
}
