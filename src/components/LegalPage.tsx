import type { ReactNode } from "react";

import Footer from "@/components/Footer";
import Header from "@/components/Header";

export type LegalSection = {
  /** Wordt het anker in de URL en in de inhoudsopgave. */
  id: string;
  heading: string;
  body: ReactNode;
};

type LegalPageProps = {
  eyebrow: string;
  /** Deel van de titel dat in het accentfont wordt gezet. */
  title: string;
  titleAccent: string;
  intro: string;
  lastUpdated: string;
  sections: LegalSection[];
};

export default function LegalPage({
  eyebrow,
  title,
  titleAccent,
  intro,
  lastUpdated,
  sections,
}: LegalPageProps) {
  return (
    <>
      <Header />
      <main className="flex-1">
        <section className="pb-16 pt-[9rem] sm:pb-20 sm:pt-40">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <p className="text-sm font-semibold uppercase tracking-widest text-accent">
              {eyebrow}
            </p>
            <h1 className="mt-4 max-w-2xl text-balance text-4xl font-semibold tracking-tight text-neutral-900 sm:text-5xl">
              {title}{" "}
              <span
                className="font-medium italic text-accent"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                {titleAccent}
              </span>
            </h1>
            <p className="mt-5 max-w-2xl text-pretty leading-relaxed text-neutral-500">
              {intro}
            </p>
            <p className="mt-6 text-sm text-neutral-400">
              Laatst bijgewerkt op {lastUpdated}
            </p>

            <div className="mt-14 grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-14">
              {/* Inhoudsopgave */}
              <nav
                aria-label="Inhoudsopgave"
                className="lg:col-span-4 lg:sticky lg:top-32 lg:self-start"
              >
                <p className="text-sm font-semibold text-neutral-900">
                  Op deze pagina
                </p>
                <ol className="mt-4 space-y-2.5">
                  {sections.map((section, index) => (
                    <li key={section.id} className="flex gap-3 text-sm">
                      <span className="w-4 shrink-0 tabular-nums text-neutral-300">
                        {index + 1}
                      </span>
                      <a
                        href={`#${section.id}`}
                        className="text-neutral-500 transition-colors hover:text-accent"
                      >
                        {section.heading}
                      </a>
                    </li>
                  ))}
                </ol>
              </nav>

              {/* Inhoud */}
              <div className="lg:col-span-8">
                <div className="space-y-12">
                  {sections.map((section, index) => (
                    <section
                      key={section.id}
                      id={section.id}
                      className="scroll-mt-32"
                    >
                      <h2 className="text-xl font-semibold tracking-tight text-neutral-900 sm:text-2xl">
                        <span className="mr-2 tabular-nums text-neutral-300">
                          {index + 1}.
                        </span>
                        {section.heading}
                      </h2>
                      <div className="legal-prose mt-4">{section.body}</div>
                    </section>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
