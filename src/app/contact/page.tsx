import type { Metadata } from "next";

import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import JsonLd from "@/components/JsonLd";
import { breadcrumbSchema, pageMetadata } from "@/lib/seo";
import {
  CITY,
  EMAIL,
  PHONE_DISPLAY,
  PHONE_TEL,
  STREET,
  WHATSAPP_URL,
} from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Contact opnemen",
  description:
    "Vraag een offerte aan of stel je vraag over een trouwfilm, aftermovie, bedrijfsvideo of social content. Bel, app of gebruik het contactformulier; we reageren meestal binnen een paar uur.",
  path: "/contact",
  keywords: [
    "videograaf contact",
    "offerte trouwfilm",
    "offerte bedrijfsvideo",
    "videograaf inhuren",
  ],
});

const directeOpties = [
  {
    label: `Bel ${PHONE_DISPLAY}`,
    beschrijving: "Op werkdagen en zaterdag van 9:00 tot 20:00",
    href: PHONE_TEL,
  },
  {
    label: "Stuur een WhatsApp",
    beschrijving: "Vaak de snelste manier voor een korte vraag",
    href: WHATSAPP_URL,
  },
  {
    label: EMAIL,
    beschrijving: "Liever uitgebreid mailen? Dat kan ook",
    href: `mailto:${EMAIL}`,
  },
];

export default function ContactPagina() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <section className="pb-16 pt-[9rem] sm:pb-20 sm:pt-40">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="max-w-2xl">
              <h1 className="text-balance text-4xl font-semibold tracking-tight text-neutral-900 sm:text-5xl">
                Vertel ons over{" "}
                <span
                  className="font-medium italic text-accent"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  jullie plannen
                </span>
              </h1>
              <p className="mt-5 text-pretty leading-relaxed text-neutral-500">
                Een bruiloft, evenement, bedrijfsfilm of social content: stuur
                ons een bericht en we denken direct met je mee. Je krijgt
                meestal binnen een paar uur antwoord.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-12">
              {/* Formulier */}
              <div className="lg:col-span-7">
                <ContactForm />
              </div>

              {/* Direct contact */}
              <aside className="lg:col-span-5">
                <div className="liquid-glass rounded-3xl p-6 sm:p-8">
                  <h2 className="text-lg font-semibold text-neutral-900">
                    Liever direct contact?
                  </h2>
                  <ul className="mt-5 space-y-3">
                    {directeOpties.map((optie) => (
                      <li key={optie.href}>
                        <a
                          href={optie.href}
                          {...(optie.href.startsWith("http")
                            ? { target: "_blank", rel: "noopener noreferrer" }
                            : {})}
                          className="group block rounded-2xl bg-white/70 px-5 py-4 transition-colors hover:bg-white"
                        >
                          <span className="font-semibold text-neutral-900 transition-colors group-hover:text-accent">
                            {optie.label}
                          </span>
                          <span className="mt-0.5 block text-sm text-neutral-500">
                            {optie.beschrijving}
                          </span>
                        </a>
                      </li>
                    ))}
                  </ul>
                  <address className="mt-6 border-t border-black/10 pt-5 text-sm not-italic leading-relaxed text-neutral-500">
                    Mediaspot
                    <br />
                    {STREET}, {CITY}
                  </address>
                </div>
              </aside>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <JsonLd
        nodes={[breadcrumbSchema([{ name: "Contact", path: "/contact" }])]}
      />
    </>
  );
}
