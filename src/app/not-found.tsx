import type { Metadata } from "next";
import Link from "next/link";

import Footer from "@/components/Footer";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "Pagina niet gevonden",
  description:
    "Deze pagina bestaat niet of is verplaatst. Bekijk onze diensten of neem direct contact op.",
  robots: { index: false, follow: true },
};

const links = [
  { label: "Trouwfilm", href: "/trouwerij" },
  { label: "Evenementen", href: "/evenementen" },
  { label: "Bedrijfsvideo", href: "/bedrijfsvideo" },
  { label: "Social content", href: "/social-content" },
];

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <section className="pb-16 pt-[9rem] sm:pb-20 sm:pt-40">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <p className="text-sm font-semibold uppercase tracking-widest text-accent">
              404
            </p>
            <h1 className="mt-4 max-w-xl text-balance text-4xl font-semibold tracking-tight text-neutral-900 sm:text-5xl">
              Deze pagina hebben we niet{" "}
              <span
                className="font-medium italic text-accent"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                gefilmd
              </span>
            </h1>
            <p className="mt-4 max-w-md text-pretty text-neutral-500">
              De pagina bestaat niet of is verplaatst. Kies hieronder waar je
              naartoe wilt, of neem direct contact op.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/"
                className="btn-squeeze inline-flex h-12 items-center justify-center rounded-full bg-accent px-8 text-base font-semibold text-white hover:brightness-110"
              >
                Naar de homepage
              </Link>
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="btn-squeeze inline-flex h-12 items-center justify-center rounded-full border border-neutral-300 px-6 text-base font-semibold text-neutral-900 hover:bg-neutral-900/5"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
