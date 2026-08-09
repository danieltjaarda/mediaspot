"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const steps = [
  {
    title: "Kennismaking",
    text: "Gratis en vrijblijvend kennismakingsgesprek waarin we jouw wensen en ideeën bespreken.",
  },
  {
    title: "Draaiboek",
    text: "We werken samen een draaiboek uit, zodat iedereen precies weet wat er gefilmd wordt.",
  },
  {
    title: "Opnamedag(en)",
    text: "Op locatie leggen we alles vast met professionele camera's, licht en geluid.",
  },
  {
    title: "Montage",
    text: "Binnen 1 tot 4 werkdagen monteren we jouw beelden tot een strakke video.",
  },
  {
    title: "Oplevering",
    text: "We leveren pas op als jij helemaal tevreden bent. Jouw verhaal, precies zoals jij het wilt.",
  },
];

export default function Werkwijze() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="werkwijze"
      ref={sectionRef}
      className="pb-16 pt-6 sm:pb-20 sm:pt-8"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div
          className={`max-w-xl transition-all duration-700 ease-out ${
            inView ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
          }`}
        >
          <h2 className="text-balance text-3xl font-semibold tracking-tight text-neutral-900 sm:text-4xl">
            Van aanvraag tot{" "}
            <span
              className="font-medium italic text-accent"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              oplevering
            </span>
          </h2>
          <p className="mt-4 text-pretty text-neutral-500">
            In vijf duidelijke stappen van eerste idee naar een video waar je
            trots op bent.
          </p>
        </div>

        <ol className="relative mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {/* Verbindingslijn achter de nummers (desktop) */}
          <div
            aria-hidden
            className={`absolute left-8 right-8 top-[41px] hidden h-[3px] origin-left rounded-full bg-gradient-to-r from-accent/60 via-accent/30 to-accent/60 transition-transform duration-[1400ms] ease-out lg:block ${
              inView ? "scale-x-100" : "scale-x-0"
            }`}
          />

          {steps.map((step, i) => (
            <li
              key={step.title}
              style={{
                transitionDelay: inView ? `${200 + i * 140}ms` : "0ms",
              }}
              className={`group relative flex flex-col overflow-hidden rounded-3xl bg-white px-6 py-6 transition-all duration-700 ease-out hover:-translate-y-1.5 ${
                inView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              }`}
            >
              <Image
                src="/images/logo-mark.png"
                alt=""
                aria-hidden
                width={160}
                height={160}
                className="pointer-events-none absolute -bottom-6 -right-6 w-28 select-none opacity-[0.05]"
              />
              <span
                style={{ transitionDelay: inView ? `${350 + i * 140}ms` : "0ms" }}
                className={`liquid-glass-btn flex h-9 w-9 items-center justify-center rounded-full text-sm font-semibold text-neutral-900 transition-all duration-500 ease-out group-hover:scale-110 ${
                  inView ? "scale-100 opacity-100" : "scale-0 opacity-0"
                }`}
              >
                {i + 1}
              </span>
              <h3 className="mt-4 font-semibold text-neutral-900">
                {step.title}
              </h3>
              <p className="mt-1.5 text-sm leading-relaxed text-neutral-500">
                {step.text}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
