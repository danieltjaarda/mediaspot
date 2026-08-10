import Image from "next/image";

type Logo = {
  src: string;
  alt: string;
  width: number;
  height: number;
  className: string;
  /** Naam die naast het beeldmerk wordt getoond (voor logo's zonder woordmerk) */
  wordmark?: string;
};

const logos: Logo[] = [
  {
    src: "/images/logos/gofatbike.svg",
    alt: "GoFatbike",
    width: 152,
    height: 24,
    className: "h-6",
  },
  {
    src: "/images/logos/deskna.png",
    alt: "Deskna",
    width: 1064,
    height: 272,
    className: "h-6",
  },
  {
    src: "/images/logos/mapfour.png",
    alt: "Mapfour",
    width: 160,
    height: 23,
    // Wit origineel, via brightness-0 donker gemaakt voor de lichte achtergrond
    className: "h-4 brightness-0 opacity-80",
  },
  {
    src: "/images/logos/phonelab.svg",
    alt: "ThePhoneLab",
    width: 104,
    height: 104,
    className: "h-8 rounded-lg",
    wordmark: "ThePhoneLab",
  },
  {
    src: "/images/logos/engwe.png",
    alt: "ENGWE",
    width: 400,
    height: 97,
    className: "h-6",
  },
  {
    src: "/images/logos/ouxi.png",
    alt: "OUXI",
    width: 400,
    height: 225,
    className: "h-12",
  },
];

export default function LogoMarquee() {
  return (
    <div className="social-marquee overflow-hidden">
      <div className="logo-marquee-track flex w-max items-center">
        {[0, 1].map((copy) => (
          <div
            key={copy}
            aria-hidden={copy === 1 || undefined}
            className="flex items-center gap-14 pr-14 sm:gap-20 sm:pr-20"
          >
            {logos.map((logo) => (
              <div
                key={logo.src}
                className="flex shrink-0 items-center gap-2.5"
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={logo.width}
                  height={logo.height}
                  className={`w-auto ${logo.className}`}
                />
                {logo.wordmark && (
                  <span className="text-lg font-bold tracking-tight text-neutral-800">
                    {logo.wordmark}
                  </span>
                )}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
