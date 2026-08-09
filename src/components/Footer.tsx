import Image from "next/image";
import Link from "next/link";

const columns = [
  {
    title: "Diensten",
    links: [
      "Bedrijfsfilms",
      "Bruiloftsvideo's",
      "Aftermovies",
      "Commercials",
      "Drone-opnames",
    ],
  },
  {
    title: "Informatie",
    links: [
      "Portfolio",
      "Werkwijze",
      "Veelgestelde vragen",
      "Tarieven",
      "Contact",
    ],
  },
  {
    title: "Over Mediaspot",
    links: ["Ons verhaal", "Team", "Samenwerkingen", "Vacatures"],
  },
];

export default function Footer() {
  return (
    <footer id="contact" className="relative mt-24 border-t border-black/10 bg-white/60">
      <div className="mx-auto max-w-6xl px-6 pb-10 pt-16">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          {/* Merk + contact */}
          <div className="lg:col-span-5">
            <Image
              src="/mediaspot-logo-dark.svg"
              alt="Mediaspot"
              width={230}
              height={86}
              className="h-14 w-auto"
            />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-neutral-500">
              Videograaf voor bedrijven, bruiloften en events. Van concept tot
              montage: wij vertellen jouw verhaal in beeld.
            </p>

            <div className="mt-7 space-y-3 text-sm">
              <a
                href="tel:+31620176727"
                className="flex items-center gap-3 text-neutral-700 transition-colors hover:text-accent"
              >
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                06 20176727
              </a>
              <a
                href="mailto:info@mediaspot.nl"
                className="flex items-center gap-3 text-neutral-700 transition-colors hover:text-accent"
              >
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="5" width="18" height="14" rx="2" />
                  <path d="m3 7 9 6 9-6" />
                </svg>
                info@mediaspot.nl
              </a>
            </div>
          </div>

          {/* Linkkolommen */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-7">
            {columns.map((col) => (
              <div key={col.title}>
                <h3 className="text-sm font-semibold text-neutral-900">
                  {col.title}
                </h3>
                <ul className="mt-4 space-y-3">
                  {col.links.map((link) => (
                    <li key={link}>
                      <Link
                        href="#"
                        className="text-sm text-neutral-500 transition-colors hover:text-neutral-900"
                      >
                        {link}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Onderbalk */}
        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-black/10 pt-6 sm:flex-row">
          <p className="text-xs text-neutral-400">
            © {new Date().getFullYear()} Mediaspot. Alle rechten voorbehouden.
          </p>
          <div className="flex items-center gap-5 text-xs text-neutral-400">
            <Link href="#" className="transition-colors hover:text-neutral-900">
              Privacybeleid
            </Link>
            <Link href="#" className="transition-colors hover:text-neutral-900">
              Algemene voorwaarden
            </Link>
            <Link href="#" className="transition-colors hover:text-neutral-900">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
