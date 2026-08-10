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
  title: "Algemene voorwaarden",
  description:
    "De algemene voorwaarden van Mediaspot: afspraken over aanbod, prijzen, betaling, annulering, levering, auteursrecht en aansprakelijkheid bij onze videoproducties.",
  path: "/algemene-voorwaarden",
});

const sections: LegalSection[] = [
  {
    id: "definities",
    heading: "Wie is wie",
    body: (
      <>
        <ul>
          <li>
            <strong>Mediaspot</strong> — {LEGAL_NAME}, handelend onder de naam{" "}
            {SITE_NAME}, gevestigd aan {STREET} in {CITY}, ingeschreven bij de
            Kamer van Koophandel onder nummer {KVK}.
          </li>
          <li>
            <strong>Opdrachtgever</strong> — de consument of het bedrijf dat een
            opdracht bij ons plaatst.
          </li>
          <li>
            <strong>Opdracht</strong> — alle werkzaamheden die wij voor je
            uitvoeren, van kennismaking en draaiboek tot opname, montage en
            oplevering.
          </li>
          <li>
            <strong>Materiaal</strong> — alle beeld- en geluidsopnames die wij
            binnen de opdracht maken, inclusief de ruwe bestanden en de
            uiteindelijke video.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "toepasselijkheid",
    heading: "Wanneer deze voorwaarden gelden",
    body: (
      <>
        <p>
          Deze voorwaarden horen bij elke aanbieding, opdracht en overeenkomst
          tussen Mediaspot en de opdrachtgever. We sturen ze bij ons voorstel
          mee en ze zijn hier altijd terug te lezen.
        </p>
        <p>
          Eigen inkoopvoorwaarden van de opdrachtgever gelden alleen als wij die
          vooraf schriftelijk hebben aanvaard. Wijken we samen van een bepaling
          af, dan leggen we dat schriftelijk vast; de overige bepalingen blijven
          dan gewoon geldig.
        </p>
      </>
    ),
  },
  {
    id: "aanbod",
    heading: "Aanbod en het maken van de afspraak",
    body: (
      <>
        <p>
          Onze voorstellen zijn vrijblijvend en <strong>dertig dagen</strong>{" "}
          geldig. Prijzen op de website zijn richtprijzen; het voorstel dat je
          van ons ontvangt is bepalend.
        </p>
        <p>
          De overeenkomst komt tot stand zodra je het voorstel schriftelijk of
          per e-mail of WhatsApp bevestigt. Vanaf dat moment leggen we de datum
          voor je vast en houden we die vrij voor jouw opdracht.
        </p>
        <p>
          Bij opdrachten met een vaste datum, zoals een bruiloft of een
          evenement, geldt geen wettelijke bedenktijd van veertien dagen. Dat is
          de uitzondering die de wet maakt voor diensten op een specifieke datum
          voor vrijetijdsbesteding.
        </p>
      </>
    ),
  },
  {
    id: "prijzen",
    heading: "Prijzen en betaling",
    body: (
      <>
        <ul>
          <li>
            Voor consumenten noemen we prijzen inclusief btw, voor
            zakelijke opdrachtgevers exclusief btw.
          </li>
          <li>
            Bij het vastleggen van de datum betaal je een aanbetaling van{" "}
            <strong>25 procent</strong> van het overeengekomen bedrag. Het
            resterende bedrag factureren we bij oplevering.
          </li>
          <li>
            Onze betaaltermijn is <strong>veertien dagen</strong> na
            factuurdatum.
          </li>
          <li>
            Reiskosten binnen ons werkgebied zijn inbegrepen. Extra kosten zoals
            parkeergeld, entreekaarten, overnachtingen of speciale apparatuur
            spreken we vooraf af.
          </li>
          <li>
            Duurt de opnamedag langer dan afgesproken, dan rekenen we de extra
            uren tegen het in het voorstel genoemde uurtarief.
          </li>
        </ul>
        <p>
          Betaal je niet op tijd, dan sturen we eerst een herinnering met een
          redelijke termijn. Blijft betaling daarna uit, dan mogen we de
          wettelijke rente en redelijke incassokosten in rekening brengen en de
          oplevering opschorten.
        </p>
      </>
    ),
  },
  {
    id: "uitvoering",
    heading: "Planning en uitvoering",
    body: (
      <>
        <p>
          We bespreken vooraf een draaiboek, zodat we allebei weten wat er
          gefilmd wordt. Binnen die afspraken bepalen wij zelf de creatieve en
          technische invulling: camerastandpunten, licht, muziekkeuze en
          montagestijl horen bij ons vak.
        </p>
        <p>Van de opdrachtgever verwachten we dat:</p>
        <ul>
          <li>
            wij op tijd toegang hebben tot de locatie en, waar nodig, tot stroom
            en een plek om apparatuur klaar te zetten;
          </li>
          <li>
            de locatie of organisatie vooraf toestemming heeft gegeven om te
            filmen;
          </li>
          <li>
            wijzigingen in het draaiboek of het tijdschema zo snel mogelijk met
            ons worden gedeeld;
          </li>
          <li>
            aanwezigen weten dat er gefilmd wordt en dat je ons wijst op mensen
            die niet in beeld willen.
          </li>
        </ul>
        <p>
          Kunnen we door omstandigheden buiten onze schuld niet filmen zoals
          afgesproken, bijvoorbeeld door een gesloten locatie of een verbod van
          de organisatie, dan blijft de vergoeding verschuldigd.
        </p>
      </>
    ),
  },
  {
    id: "annulering",
    heading: "Wijzigen en annuleren",
    body: (
      <>
        <p>
          Een gereserveerde datum kunnen we niet meer aan iemand anders
          vergeven, daarom hanteren we bij annulering de volgende staffel over
          het overeengekomen bedrag:
        </p>
        <ul>
          <li>
            <strong>Meer dan drie maanden</strong> voor de opnamedatum: je
            betaalt alleen de aanbetaling.
          </li>
          <li>
            <strong>Tussen één en drie maanden</strong> ervoor: 50 procent.
          </li>
          <li>
            <strong>Binnen één maand</strong> ervoor: 100 procent.
          </li>
        </ul>
        <p>
          Wil je de datum verplaatsen? Dan doen we ons uiterste best om mee te
          bewegen. Zijn we op de nieuwe datum beschikbaar, dan verhuist je
          aanbetaling mee en brengen we geen extra kosten in rekening. Zijn we
          niet beschikbaar, dan geldt de staffel hierboven.
        </p>
        <p>
          Annuleren kan alleen schriftelijk of per e-mail, zodat we allebei
          weten waar we aan toe zijn.
        </p>
      </>
    ),
  },
  {
    id: "overmacht",
    heading: "Verhindering en overmacht",
    body: (
      <>
        <p>
          Worden wij door ziekte, een ongeval of andere overmacht verhinderd,
          dan zoeken we in de eerste plaats een vervangende videograaf van
          vergelijkbaar niveau. Lukt dat niet, dan betalen we alles terug wat je
          hebt betaald voor het deel dat niet is uitgevoerd. Verdere
          aansprakelijkheid hebben we in dat geval niet.
        </p>
        <p>
          Onder overmacht valt ook uitval van apparatuur ondanks goed onderhoud,
          extreem weer, overheidsmaatregelen en het uitvallen van de locatie of
          het evenement zelf. Buitenopnames kunnen we in overleg verplaatsen naar
          een moment of plek waar het weer het toelaat.
        </p>
      </>
    ),
  },
  {
    id: "levering",
    heading: "Levering en aanpassingen",
    body: (
      <>
        <ul>
          <li>
            We monteren jouw beelden in <strong>één tot vier werkdagen</strong>{" "}
            na de opnamedag, tenzij we samen een andere termijn afspreken. Bij
            drukke periodes laten we je vooraf weten wanneer je de video kunt
            verwachten.
          </li>
          <li>
            De video leveren we digitaal aan via een downloadlink, in de
            afgesproken resolutie en beeldverhouding.
          </li>
          <li>
            Bij de prijs hoort <strong>één ronde aanpassingen</strong> op de
            eerste versie: denk aan het bijschaven van de muziek, de lengte of de
            volgorde. Aanvullende ronden of een andere richting rekenen we tegen
            ons uurtarief.
          </li>
          <li>
            Wij leveren pas op als jij tevreden bent, maar dat betekent niet dat
            de opdracht eindeloos doorloopt: laat je binnen veertien dagen niets
            weten, dan beschouwen we de video als goedgekeurd.
          </li>
          <li>
            Ruwe, ongemonteerde beelden horen niet bij de levering. Wil je die
            toch hebben, dan spreken we daarvoor een vergoeding af.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "auteursrecht",
    heading: "Auteursrecht en gebruiksrecht",
    body: (
      <>
        <p>
          Het auteursrecht op al het materiaal blijft volgens de Auteurswet bij
          Mediaspot. Je koopt geen eigendom, je koopt het recht om de video te
          gebruiken.
        </p>
        <p>
          Zodra de factuur volledig is betaald, krijg je een blijvend
          gebruiksrecht voor de doelen die we hebben afgesproken. Voor
          consumenten is dat privégebruik en delen met familie en vrienden; voor
          bedrijven zijn dat de kanalen die in het voorstel staan.
        </p>
        <ul>
          <li>
            De video mag niet worden doorverkocht, in licentie gegeven of
            gebruikt door andere partijen zonder onze schriftelijke toestemming.
          </li>
          <li>
            De video mag niet opnieuw worden gemonteerd, ingekort of van andere
            muziek voorzien zonder onze toestemming. Voor een extra versie,
            bijvoorbeeld vierkant voor social media, maken we graag een voorstel.
          </li>
          <li>
            Bij online plaatsing stellen we naamsvermelding van Mediaspot op
            prijs; verwijderen van een logo of aftiteling uit de video is niet
            toegestaan.
          </li>
          <li>
            Wij zorgen ervoor dat de gebruikte muziek is gelicentieerd voor het
            afgesproken gebruik. Lever je zelf muziek aan, dan ben jij
            verantwoordelijk voor de rechten daarop.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "portfolio",
    heading: "Gebruik voor ons portfolio",
    body: (
      <>
        <p>
          We tonen ons werk graag aan nieuwe klanten. Voor gebruik van jouw
          materiaal op onze website, in ons portfolio of op social media vragen
          we daarom vooraf jouw toestemming. Geef je die niet, of trek je die
          later in, dan heeft dat geen enkel gevolg voor de prijs of de
          uitvoering van je opdracht.
        </p>
        <p>
          Hoe we met herkenbare beelden en portretrecht omgaan, staat in ons{" "}
          <Link href="/privacybeleid">privacybeleid</Link>.
        </p>
      </>
    ),
  },
  {
    id: "bewaren",
    heading: "Bewaren van de bestanden",
    body: (
      <>
        <p>
          Ruwe opnames bewaren we tot uiterlijk zes maanden na oplevering; daarna
          verwijderen we ze. De opgeleverde video houden we in ons archief, zodat
          je later nog een kopie kunt opvragen. Een eigen back-up maken blijft
          altijd verstandig: wij zijn niet aansprakelijk voor verlies van
          bestanden aan jouw kant.
        </p>
      </>
    ),
  },
  {
    id: "aansprakelijkheid",
    heading: "Aansprakelijkheid",
    body: (
      <>
        <p>
          We werken met professionele apparatuur, dubbele geheugenkaarten en
          reserveapparatuur, en gaan zorgvuldig te werk. Toch kan er iets
          misgaan. Onze aansprakelijkheid is daarom beperkt tot het bedrag dat
          voor de opdracht is gefactureerd.
        </p>
        <ul>
          <li>
            Voor indirecte schade, zoals gemiste inkomsten of gevolgschade, zijn
            wij niet aansprakelijk.
          </li>
          <li>
            Gaat door een technisch mankement een deel van de opnames verloren,
            dan vergoeden we een evenredig deel van de prijs. Een gebeurtenis die
            niet opnieuw kan worden gefilmd, kunnen we helaas niet herstellen.
          </li>
          <li>
            Wij zijn niet aansprakelijk voor schade door onjuiste of onvolledige
            informatie van de opdrachtgever, of doordat een derde ons het filmen
            onmogelijk maakt.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "klachten",
    heading: "Klachten",
    body: (
      <>
        <p>
          Ben je niet tevreden, laat het ons dan binnen{" "}
          <strong>veertien dagen</strong> na oplevering weten via{" "}
          <a href={`mailto:${EMAIL}`}>{EMAIL}</a> of{" "}
          <a href={PHONE_TEL}>{PHONE_DISPLAY}</a>. Beschrijf zo concreet
          mogelijk wat er niet goed is, dan zoeken we samen naar een oplossing.
          Een klacht schort de betalingsverplichting niet op.
        </p>
      </>
    ),
  },
  {
    id: "recht",
    heading: "Toepasselijk recht",
    body: (
      <>
        <p>
          Op onze overeenkomsten is Nederlands recht van toepassing. Komen we er
          samen niet uit, dan leggen we het geschil voor aan de bevoegde rechter
          van de rechtbank Noord-Nederland. Ben je consument, dan mag je het
          geschil ook voorleggen aan de rechter die volgens de wet bevoegd is in
          jouw woonplaats.
        </p>
        <p>
          Is een bepaling in deze voorwaarden ongeldig, dan blijven de overige
          bepalingen gewoon van kracht en vervangen we de ongeldige bepaling door
          een regeling die er zo dicht mogelijk bij komt.
        </p>
      </>
    ),
  },
];

export default function AlgemeneVoorwaardenPage() {
  return (
    <>
      <JsonLd
        nodes={[
          breadcrumbSchema([
            { name: "Algemene voorwaarden", path: "/algemene-voorwaarden" },
          ]),
        ]}
      />
      <LegalPage
        eyebrow="Voorwaarden"
        title="Duidelijke afspraken, geen kleine"
        titleAccent="lettertjes"
        intro="Hieronder staat in gewone taal waar je op kunt rekenen als je met ons samenwerkt: wat we afspreken over prijzen, planning, annuleren, levering en het gebruik van je video."
        lastUpdated={LAST_UPDATED}
        sections={sections}
      />
    </>
  );
}
