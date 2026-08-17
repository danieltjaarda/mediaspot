import Image from "next/image";

import LazyVideo from "./LazyVideo";

type PortfolioItem = {
  title: string;
  text: string;
  media: { type: "image"; src: string } | { type: "video"; src: string; poster: string };
  alt: string;
  wide?: boolean;
};

const items: PortfolioItem[] = [
  {
    title: "Alle gasten in één beeld",
    text: "Groepsmoment vanuit de lucht gefilmd",
    media: {
      type: "video",
      src: "/videos/portfolio-drone.mp4",
      poster: "/images/event-drone-poster.jpg",
    },
    alt: "Drone-opname van bruiloftsgasten bij LOVE-letters",
    wide: true,
  },
  {
    title: "Het ja-woord",
    text: "Het moment waar alles om draait",
    media: { type: "image", src: "/images/portfolio-jawoord.png" },
    alt: "Bruidegom schuift de ring om de vinger van de bruid",
  },
  {
    title: "De binnenkomst",
    text: "Arm in arm naar het altaar",
    media: { type: "image", src: "/images/portfolio-binnenkomst.png" },
    alt: "Bruid komt arm in arm binnen tijdens de ceremonie",
  },
  {
    title: "Speeches & toost",
    text: "Emotie en humor, live vastgelegd",
    media: {
      type: "video",
      src: "/videos/portfolio-speeches.mp4",
      poster: "/images/portfolio-speeches-poster.jpg",
    },
    alt: "Speech tijdens de bruiloftsreceptie",
    wide: true,
  },
  {
    title: "De ringen",
    text: "Kleine details, grote betekenis",
    media: { type: "image", src: "/images/portfolio-ringen.png" },
    alt: "Trouwringen op een kussen met bloemen",
  },
  {
    title: "Stralende bruid",
    text: "Alle ogen op haar gericht",
    media: { type: "image", src: "/images/portfolio-bruid.png" },
    alt: "Stralende bruid tussen de gasten",
    wide: true,
  },
];

function Card({ item }: { item: PortfolioItem }) {
  return (
    <div
      className={`group relative min-h-[280px] overflow-hidden rounded-3xl sm:min-h-[320px] ${
        item.wide ? "lg:col-span-7" : "lg:col-span-5"
      }`}
    >
      {item.media.type === "video" ? (
        <LazyVideo
          src={item.media.src}
          poster={item.media.poster}
          ariaLabel={item.alt}
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
        />
      ) : (
        <Image
          src={item.media.src}
          alt={item.alt}
          fill
          sizes="(max-width: 1024px) 100vw, 58vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
        />
      )}

      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"
      />

      <div className="absolute inset-x-0 bottom-0 p-6 sm:p-7">
        <h3 className="text-xl font-semibold text-white sm:text-2xl">
          {item.title}
        </h3>
        <p className="mt-1 text-sm text-white/70">{item.text}</p>
      </div>
    </div>
  );
}

export default function Portfolio() {
  return (
    <section id="portfolio" className="pb-16 pt-0 sm:pb-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-xl">
          <h2 className="text-balance text-3xl font-semibold tracking-tight text-neutral-900 sm:text-4xl">
            Recent{" "}
            <span
              className="font-medium italic text-accent"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              werk
            </span>
          </h2>
          <p className="mt-4 text-pretty text-neutral-500">
            Een greep uit onze producties: van intieme momenten tot
            spectaculaire beelden vanuit de lucht.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-4 lg:grid-cols-12">
          {items.map((item) => (
            <Card key={item.title} item={item} />
          ))}
        </div>

        {/* Volledige trouwfilm */}
        <div className="mt-14">
          <h3 className="text-balance text-2xl font-semibold tracking-tight text-neutral-900 sm:text-3xl">
            Bekijk hele{" "}
            <span
              className="font-medium italic text-accent"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              video
            </span>
          </h3>
          <div className="mt-6 overflow-hidden rounded-3xl">
            <video
              controls
              playsInline
              preload="none"
              poster="/images/pakketten-video-poster.jpg"
              controlsList="nofullscreen nodownload noremoteplayback"
              disablePictureInPicture
              className="block h-auto w-full"
            >
              <source src="/videos/pakketten-video.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
    </section>
  );
}
