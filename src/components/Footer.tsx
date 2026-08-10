import Image from "next/image";
import Link from "next/link";

import {
  CITY,
  EMAIL,
  KVK,
  LEGAL_NAME,
  PHONE_DISPLAY,
  PHONE_TEL,
  STREET,
  VAT_ID,
} from "@/lib/site";

const columns = [
  {
    title: "Diensten",
    links: [
      { label: "Bedrijfsfilms", href: "/bedrijfsvideo" },
      { label: "Bruiloftsvideo's", href: "/trouwerij" },
      { label: "Aftermovies", href: "/evenementen" },
      { label: "Social content", href: "/social-content" },
      { label: "Commercials", href: "/bedrijfsvideo" },
    ],
  },
  {
    title: "Informatie",
    links: [
      { label: "Portfolio", href: "/#diensten" },
      { label: "Werkwijze", href: "/#werkwijze" },
      { label: "Werkgebied", href: "/#werkgebied" },
      { label: "Tarieven", href: "/trouwerij#tarieven" },
      { label: "Contact", href: PHONE_TEL },
    ],
  },
  {
    title: "Over Mediaspot",
    links: [
      { label: "Wie ben ik", href: "/#over-ons" },
      { label: "Ons verhaal", href: "/#over-ons" },
      { label: "Samenwerkingen", href: "/social-content" },
      { label: "Contact opnemen", href: PHONE_TEL },
    ],
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

            <address className="mt-7 space-y-3 text-sm not-italic">
              <a
                href={PHONE_TEL}
                className="flex items-center gap-3 text-neutral-700 transition-colors hover:text-accent"
              >
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                {PHONE_DISPLAY}
              </a>
              <a
                href={`mailto:${EMAIL}`}
                className="flex items-center gap-3 text-neutral-700 transition-colors hover:text-accent"
              >
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  <rect x="3" y="5" width="18" height="14" rx="2" />
                  <path d="m3 7 9 6 9-6" />
                </svg>
                {EMAIL}
              </a>
              <p className="flex items-center gap-3 text-neutral-700">
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                {STREET}, {CITY}
              </p>
            </address>
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
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-sm text-neutral-500 transition-colors hover:text-neutral-900"
                      >
                        {link.label}
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
          <p className="text-center text-xs text-neutral-400 sm:text-left">
            © {new Date().getFullYear()} Mediaspot, onderdeel van {LEGAL_NAME}
            <br className="hidden sm:block" /> KVK {KVK}
            {VAT_ID ? ` · btw ${VAT_ID}` : ""} · Alle rechten voorbehouden.
          </p>
          <div className="flex items-center gap-5 text-xs text-neutral-400">
            <Link
              href="/privacybeleid"
              className="transition-colors hover:text-neutral-900"
            >
              Privacybeleid
            </Link>
            <Link
              href="/algemene-voorwaarden"
              className="transition-colors hover:text-neutral-900"
            >
              Algemene voorwaarden
            </Link>
            <Link
              href="/privacybeleid#cookies"
              className="transition-colors hover:text-neutral-900"
            >
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
