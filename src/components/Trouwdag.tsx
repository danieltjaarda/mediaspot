"use client";

import Image from "next/image";

import { useInView } from "@/lib/useInView";

type Foto = { src: string; alt: string };

type Fase = {
  title: string;
  text: string;
  punten: string[];
  fotos: [Foto, Foto];
};

const fasen: Fase[] = [
  {
    title: "De aanloop naar het grote moment",
    text: "Voordat er iets officieel is, gebeurt het mooiste vaak al: de zenuwen, de eerste blikken van familie en het boeket dat net iets te stevig wordt vastgehouden. We filmen rustig mee, zodat je ons nauwelijks merkt.",
    punten: [
      "Sfeerbeelden van de locatie, de gasten en de details",
      "Portretmomenten van jullie samen",
      "Meelopen zonder poseren of regie",
    ],
    fotos: [
      {
        src: "/images/trouwdag-bruid-veldboeket.jpg",
        alt: "Lachende bruid met een boeket veldbloemen tussen de bomen",
      },
      {
        src: "/images/trouwdag-voor-de-ceremonie.jpg",
        alt: "Bruid met bruidsboeket wacht tussen de gasten op de ceremonie",
      },
    ],
  },
  {
    title: "Het ja-woord, van dichtbij vastgelegd",
    text: "In een oude kerk of onder een bloemenboog in de tuin: elke ceremonie is anders. We filmen die van begin tot eind en nemen het geluid los op, zodat elk woord van de gelofte straks te horen is.",
    punten: [
      "De volledige ceremonie in beeld",
      "Apart opgenomen geluid van de gelofte",
      "Reacties en emoties uit het publiek",
    ],
    fotos: [
      {
        src: "/images/trouwdag-ceremonie-buiten.jpg",
        alt: "Bruidspaar geeft elkaar het ja-woord onder een bloemenboog in de tuin",
      },
      {
        src: "/images/trouwdag-ceremonie-kerk.jpg",
        alt: "Bruidspaar hand in hand tijdens de kerkelijke ceremonie",
      },
    ],
  },
  {
    title: "De kleinste details, het grootste gevoel",
    text: "De ringen die door kleine handen worden aangedragen, trillende vingers, een oma die haar tranen wegveegt. Dit soort momenten duren twee seconden en zijn later precies waar jullie naar terugkijken.",
    punten: [
      "Close-ups van de ringen en jullie handen",
      "Onverwachte reacties van gasten",
      "De kleinste gasten in de hoofdrol",
    ],
    fotos: [
      {
        src: "/images/trouwdag-ringen-jongen.jpg",
        alt: "Jongetje overhandigt de trouwringen op een kussen aan het bruidspaar",
      },
      {
        src: "/images/trouwdag-ringen-meisje.jpg",
        alt: "Meisje houdt het ringkussen met de trouwringen omhoog",
      },
    ],
  },
  {
    title: "Confetti, muziek en de eerste stappen samen",
    text: "Na het ja-woord komt de opluchting: applaus, bloemblaadjes in de lucht, muziek en jullie samen door een erehaag van familie en vrienden. Daar zit de energie die je terug wilt zien in de montage.",
    punten: [
      "De uittocht en de felicitaties",
      "Sfeer van de borrel, het diner en de speeches",
      "Desgewenst drone-opnames van de locatie",
    ],
    fotos: [
      {
        src: "/images/trouwdag-uittocht-confetti.jpg",
        alt: "Bruidspaar loopt door een regen van bloemblaadjes langs juichende gasten",
      },
      {
        src: "/images/trouwdag-hand-in-hand.jpg",
        alt: "Stralende bruid loopt hand in hand met haar partner na de ceremonie",
      },
    ],
  },
];

function FaseBlok({ fase, index }: { fase: Fase; index: number }) {
  const { ref, inView } = useInView<HTMLElement>();
  const beeldenEerst = index % 2 === 0;

  return (
    <article
      ref={ref}
      className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-14"
    >
      {/* Twee vierkante foto's, de eerste iets verschoven voor een losse indeling */}
      <div
        className={`lg:col-span-7 ${beeldenEerst ? "" : "lg:order-2"}`}
      >
        <div className="grid grid-cols-2 gap-3 sm:gap-4">
          {fase.fotos.map((foto, i) => (
            <div
              key={foto.src}
              style={{ transitionDelay: inView ? `${i * 140}ms` : "0ms" }}
              className={`group relative aspect-square overflow-hidden rounded-3xl ${
                i === 0 ? "lg:mt-12" : ""
              } ${
                inView
                  ? "translate-y-0 opacity-100 transition-all duration-700 ease-out"
                  : "translate-y-8 opacity-0 transition-none"
              }`}
            >
              <Image
                src={foto.src}
                alt={foto.alt}
                fill
                sizes="(min-width: 1024px) 300px, 45vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
              />
            </div>
          ))}
        </div>
      </div>

      <div
        style={{ transitionDelay: inView ? "160ms" : "0ms" }}
        className={`lg:col-span-5 ${beeldenEerst ? "" : "lg:order-1"} ${
          inView
            ? "translate-y-0 opacity-100 transition-all duration-700 ease-out"
            : "translate-y-6 opacity-0 transition-none"
        }`}
      >
        <h3 className="text-balance text-2xl font-semibold tracking-tight text-neutral-900 sm:text-3xl">
          {fase.title}
        </h3>
        <p className="mt-4 text-pretty leading-relaxed text-neutral-500">
          {fase.text}
        </p>
        <ul className="mt-6 space-y-2.5">
          {fase.punten.map((punt) => (
            <li
              key={punt}
              className="flex gap-3 text-sm leading-relaxed text-neutral-600"
            >
              <span
                aria-hidden
                className="mt-[0.45rem] h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
              />
              {punt}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}

export default function Trouwdag() {
  const { ref, inView } = useInView<HTMLDivElement>(0.4);

  return (
    <section id="trouwdag" className="py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div
          ref={ref}
          className={`max-w-xl ${
            inView
              ? "translate-y-0 opacity-100 transition-all duration-700 ease-out"
              : "translate-y-6 opacity-0 transition-none"
          }`}
        >
          <h2 className="text-balance text-3xl font-semibold tracking-tight text-neutral-900 sm:text-4xl">
            Elk moment van{" "}
            <span
              className="font-medium italic text-accent"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              jullie dag
            </span>
          </h2>
          <p className="mt-4 text-pretty text-neutral-500">
            Van de eerste zenuwen tot de laatste confetti. Dit is wat we op
            jullie trouwdag vastleggen, deel voor deel.
          </p>
        </div>

        <div className="mt-12 space-y-16 sm:mt-14 sm:space-y-24">
          {fasen.map((fase, index) => (
            <FaseBlok key={fase.title} fase={fase} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
