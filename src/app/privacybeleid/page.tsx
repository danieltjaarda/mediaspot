import type { Metadata } from "next";
import Link from "next/link";

import JsonLd from "@/components/JsonLd";
import LegalPage, { type LegalSection } from "@/components/LegalPage";
import { breadcrumbSchema, pageMetadata } from "@/lib/seo";
import {
  CITY,
  EMAIL,
  KVK,
  LEGAL_NAME,
  PHONE_DISPLAY,
  PHONE_TEL,
  SITE_NAME,
  STREET,
} from "@/lib/site";

const LAST_UPDATED = "10 augustus 2026";

export const metadata: Metadata = pageMetadata({
  title: "Privacybeleid",
  description:
    "Hoe Mediaspot omgaat met jouw persoonsgegevens en beeldmateriaal: welke gegevens we verwerken, waarom, hoe lang we ze bewaren en welke rechten je hebt.",
  path: "/privacybeleid",
});

const sections: LegalSection[] = [
  {
    id: "verantwoordelijke",
    heading: "Wie verwerkt jouw gegevens",
    body: (
      <>
        <p>
          {SITE_NAME} is een handelsnaam van {LEGAL_NAME}. Wij zijn de
          verwerkingsverantwoordelijke voor de persoonsgegevens die via deze
          website en in onze opdrachten worden verwerkt.
        </p>
        <ul>
          <li>
            <strong>{LEGAL_NAME}</strong>, handelend onder de naam {SITE_NAME}
          </li>
          <li>
            {STREET}, {CITY}
          </li>
          <li>KvK-nummer {KVK}</li>
          <li>
            <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
          </li>
          <li>
            <a href={PHONE_TEL}>{PHONE_DISPLAY}</a>
          </li>
        </ul>
        <p>
          Heb je een vraag over je gegevens? Mail of bel ons; je krijgt altijd
          persoonlijk antwoord.
        </p>
      </>
    ),
  },
  {
    id: "gegevens",
    heading: "Welke gegevens we verwerken en waarom",
    body: (
      <>
        <p>
          We verwerken alleen gegevens die we nodig hebben om je vraag te
          beantwoorden of een opdracht uit te voeren. Deze website heeft geen
          contactformulier en geen account: je bepaalt zelf welke gegevens je met
          ons deelt door te bellen, te WhatsAppen of te mailen.
        </p>
        <h3>Contact en aanvragen</h3>
        <p>
          Je naam, telefoonnummer, e-mailadres en de inhoud van je bericht,
          inclusief de datum en locatie van je bruiloft, evenement of opname. We
          gebruiken dit om je vraag te beantwoorden en een voorstel te maken.
        </p>
        <h3>Opdracht en administratie</h3>
        <p>
          Factuuradres, bedrijfsgegevens, afspraken uit de opdracht en
          betaalgegevens. Dit hebben we nodig om de overeenkomst uit te voeren en
          om aan onze fiscale verplichtingen te voldoen.
        </p>
        <h3>Beeld en geluid</h3>
        <p>
          Tijdens een opdracht maken we video- en fotomateriaal waarop jij en
          andere aanwezigen te zien of te horen zijn. Dat is de kern van onze
          dienst; hierover lees je meer bij{" "}
          <a href="#beeldmateriaal">beeldmateriaal en portretrecht</a>.
        </p>
        <h3>Technische gegevens van de website</h3>
        <p>
          Onze hostingpartij legt in serverlogboeken beperkte technische
          gegevens vast, zoals je IP-adres, het opgevraagde adres, het tijdstip
          en je browsertype. Dat is nodig om de website te kunnen leveren en te
          beveiligen tegen misbruik en overbelasting.
        </p>
      </>
    ),
  },
  {
    id: "grondslagen",
    heading: "Op welke grondslag we dit doen",
    body: (
      <>
        <p>
          De Algemene verordening gegevensbescherming vraagt voor elke
          verwerking een wettelijke grondslag. Wij baseren ons op:
        </p>
        <ul>
          <li>
            <strong>Uitvoering van de overeenkomst</strong> — voor de planning,
            de opnames, de montage, de oplevering en de facturatie.
          </li>
          <li>
            <strong>Gerechtvaardigd belang</strong> — voor het beantwoorden van
            je aanvraag, onze administratie en de beveiliging van de website.
          </li>
          <li>
            <strong>Wettelijke verplichting</strong> — voor de fiscale
            bewaarplicht van onze administratie.
          </li>
          <li>
            <strong>Toestemming</strong> — als we jouw beeldmateriaal willen
            gebruiken voor ons portfolio, onze website of social media. Die
            toestemming mag je altijd weer intrekken.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "beeldmateriaal",
    heading: "Beeldmateriaal en portretrecht",
    body: (
      <>
        <p>
          Video-opnames waarop mensen herkenbaar in beeld komen zijn
          persoonsgegevens. Wij gaan daar zorgvuldig mee om.
        </p>
        <ul>
          <li>
            De beelden die we voor jou maken, leveren we aan jou. Wij gebruiken
            ze niet voor andere doelen dan de opdracht, tenzij je daar
            toestemming voor geeft.
          </li>
          <li>
            Voor gebruik in ons portfolio, op deze website of op social media
            vragen we vooraf jouw toestemming. Geef je die niet, dan blijft het
            materiaal privé.
          </li>
          <li>
            Herkenbaar gefilmde gasten kunnen zich op hun portretrecht beroepen.
            Laat je ons weten dat iemand niet in beeld wil, dan houden we daar
            tijdens de opname en de montage rekening mee.
          </li>
          <li>
            Is materiaal al gepubliceerd en wil je dat het wordt verwijderd? Dan
            halen we het van onze eigen kanalen af zodra dat technisch mogelijk
            is.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "cookies",
    heading: "Cookies en statistieken",
    body: (
      <>
        <p>
          <strong>Deze website plaatst geen tracking- of marketingcookies.</strong>{" "}
          We gebruiken geen Google Analytics of vergelijkbare
          bezoekersstatistieken en we zetten geen advertentiepixels in. Daarom
          zie je op onze site ook geen cookiemelding: die is niet nodig.
        </p>
        <p>
          We hebben de site zo gebouwd dat je browser tijdens je bezoek geen
          verbinding maakt met externe partijen. De lettertypen staan op onze
          eigen server en alle video&apos;s spelen we zelf af, dus er zijn geen
          YouTube- of TikTok-spelers die meekijken. Alleen onze hostingpartij
          verwerkt de technische serverlogboeken die hierboven zijn beschreven.
        </p>
      </>
    ),
  },
  {
    id: "derden",
    heading: "Wie jouw gegevens nog kan zien",
    body: (
      <>
        <p>
          We verkopen je gegevens niet en delen ze alleen met partijen die ons
          helpen bij het uitvoeren van onze dienst. Met hen hebben wij, waar de
          wet dat vraagt, een verwerkersovereenkomst.
        </p>
        <ul>
          <li>
            <strong>Hosting</strong> — onze website draait bij Vercel op servers
            in de Europese Unie.
          </li>
          <li>
            <strong>E-mail en bestandsopslag</strong> — voor correspondentie en
            het veilig uitwisselen van de opgeleverde video&apos;s.
          </li>
          <li>
            <strong>Boekhouding</strong> — onze administratie en facturen,
            inclusief inzage door onze boekhouder of de Belastingdienst.
          </li>
          <li>
            <strong>WhatsApp</strong> — kies je ervoor om ons via WhatsApp te
            bereiken, dan verloopt dat gesprek via WhatsApp Ireland Limited en
            geldt daarnaast het privacybeleid van WhatsApp.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "bewaartermijnen",
    heading: "Hoe lang we gegevens bewaren",
    body: (
      <>
        <ul>
          <li>
            <strong>Aanvragen die niet tot een opdracht leiden</strong> —
            maximaal één jaar, zodat we je bij een nieuwe vraag verder kunnen
            helpen.
          </li>
          <li>
            <strong>Administratie en facturen</strong> — zeven jaar, omdat de
            Belastingdienst dat voorschrijft.
          </li>
          <li>
            <strong>Ruwe opnames</strong> — we bewaren deze tot uiterlijk zes
            maanden na oplevering en verwijderen ze daarna. Wil je ze langer
            veiliggesteld hebben, laat het ons dan tijdig weten.
          </li>
          <li>
            <strong>De opgeleverde video</strong> — bewaren we in ons archief,
            zodat je later nog een kopie kunt opvragen.
          </li>
          <li>
            <strong>Serverlogboeken</strong> — een beperkte periode bij onze
            hostingpartij, uitsluitend voor beveiliging en foutopsporing.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "beveiliging",
    heading: "Hoe we jouw gegevens beveiligen",
    body: (
      <>
        <p>
          De website is volledig beveiligd met een versleutelde verbinding
          (https). Je bestanden en onze administratie staan achter accounts met
          sterke, unieke wachtwoorden en tweestapsverificatie. Alleen wij hebben
          toegang tot het ruwe materiaal van jouw opdracht.
        </p>
        <p>
          Vermoed je dat er iets niet klopt of dat gegevens zijn uitgelekt? Neem
          dan direct contact met ons op via{" "}
          <a href={`mailto:${EMAIL}`}>{EMAIL}</a>, dan pakken we het meteen op.
        </p>
      </>
    ),
  },
  {
    id: "rechten",
    heading: "Jouw rechten",
    body: (
      <>
        <p>Je hebt ten aanzien van jouw persoonsgegevens het recht om:</p>
        <ul>
          <li>in te zien welke gegevens wij van je verwerken;</li>
          <li>onjuiste gegevens te laten corrigeren of aanvullen;</li>
          <li>je gegevens te laten verwijderen;</li>
          <li>de verwerking te laten beperken of daartegen bezwaar te maken;</li>
          <li>je gegevens in een overdraagbaar bestand te ontvangen;</li>
          <li>eerder gegeven toestemming weer in te trekken.</li>
        </ul>
        <p>
          Stuur je verzoek naar <a href={`mailto:${EMAIL}`}>{EMAIL}</a>. We
          reageren binnen een maand en kunnen om aanvullende gegevens vragen om
          te controleren dat het verzoek echt van jou komt.
        </p>
        <p>
          Ben je niet tevreden over hoe wij met je gegevens omgaan, dan mag je
          een klacht indienen bij de Nederlandse toezichthouder, de{" "}
          <a
            href="https://autoriteitpersoonsgegevens.nl/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Autoriteit Persoonsgegevens
          </a>
          . We stellen het op prijs als je eerst bij ons aanklopt, zodat we het
          samen kunnen oplossen.
        </p>
      </>
    ),
  },
  {
    id: "wijzigingen",
    heading: "Wijzigingen in dit privacybeleid",
    body: (
      <>
        <p>
          Werkwijzen en hulpmiddelen veranderen, dus we kunnen dit beleid
          aanpassen. Op deze pagina staat altijd de meest recente versie, met
          bovenaan de datum van de laatste wijziging. Bij ingrijpende
          wijzigingen die jouw lopende opdracht raken, laten we je dat
          persoonlijk weten.
        </p>
        <p>
          Wil je weten welke afspraken gelden voor onze opdrachten? Bekijk dan
          onze <Link href="/algemene-voorwaarden">algemene voorwaarden</Link>.
        </p>
      </>
    ),
  },
];

export default function PrivacybeleidPage() {
  return (
    <>
      <JsonLd
        nodes={[
          breadcrumbSchema([{ name: "Privacybeleid", path: "/privacybeleid" }]),
        ]}
      />
      <LegalPage
        eyebrow="Privacy"
        title="Zorgvuldig met jouw"
        titleAccent="gegevens"
        intro="Wij filmen de mooiste momenten van mensen. Daar horen persoonsgegevens en herkenbare beelden bij, dus leggen we hier precies uit wat we verwerken, waarom dat nodig is en wat jij daarover te zeggen hebt."
        lastUpdated={LAST_UPDATED}
        sections={sections}
      />
    </>
  );
}
