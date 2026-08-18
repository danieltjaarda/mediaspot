/**
 * Provinciepagina's onder /videograaf-bruiloft/[provincie].
 * Elke provincie krijgt eigen tekst, plaatsen en een lokale FAQ zodat de
 * pagina's niet als duplicaten van elkaar worden gezien.
 */
export type Provincie = {
  slug: string;
  /** Sleutel in nl-provinces.ts, voor de kaart. */
  mapId: string;
  naam: string;
  /** Genitief-vorm voor in zinnen: "in Friesland", "in Noord-Holland". */
  plaatsen: string[];
  /** Reistijd vanaf Joure, in gewone taal. */
  reistijd: string;
  intro: string;
  sfeer: string;
  faq: { question: string; answer: string }[];
};

export const PROVINCIES: Provincie[] = [
  {
    slug: "friesland",
    mapId: "NLFR",
    naam: "Friesland",
    plaatsen: ["Leeuwarden", "Sneek", "Heerenveen", "Drachten", "Joure", "Harlingen"],
    reistijd: "onze thuisbasis, dus geen reistijd",
    intro:
      "Mediaspot zit in Joure, midden in Friesland. Wij kennen de trouwlocaties rond de Friese meren, de stadhuizen van Leeuwarden en Sneek en de landgoederen bij Beetsterzwaag van binnen en buiten. Dat scheelt: wij weten waar het licht in de late middag het mooist valt en waar de drone de weilanden en het water het beste vangt.",
    sfeer:
      "Friese bruiloften hebben vaak water in de buurt: een boottocht over de Sneekermeer, een ceremonie op een terp of een feest in een oude boerderij. Wij filmen dat met professionele camera's en desgewenst een drone, zodat jullie trouwfilm net zo ruim en weids voelt als het landschap zelf.",
    faq: [
      {
        question: "Kennen jullie de trouwlocaties in Friesland?",
        answer:
          "Ja. We hebben in vrijwel elke Friese gemeente gefilmd, van Harlingen tot Drachten. Kennen we jullie locatie nog niet, dan bezoeken we hem vooraf of bekijken we de plattegrond en het licht samen met jullie.",
      },
      {
        question: "Rekenen jullie reiskosten binnen Friesland?",
        answer:
          "Nee. Onze pakketten zijn inclusief reiskosten, ook buiten Friesland.",
      },
    ],
  },
  {
    slug: "groningen",
    mapId: "NLGR",
    naam: "Groningen",
    plaatsen: ["Groningen", "Haren", "Winsum", "Appingedam", "Veendam", "Stadskanaal"],
    reistijd: "een klein uur rijden vanuit ons kantoor in Joure",
    intro:
      "Van de binnenstad van Groningen tot de borgen in het Hogeland: als videograaf voor bruiloften in Groningen filmen wij jullie dag van de voorbereidingen thuis tot het laatste nummer op de dansvloer. Wij rijden vanuit Joure in een klein uur naar Stad, dus wij zijn er ruim op tijd voor de eerste blik.",
    sfeer:
      "Groningen combineert stad en stilte: een ceremonie in het Academiegebouw of de Der Aa-kerk, foto's op de Vismarkt en 's avonds feest in een verbouwde boerderij op het platteland. Die contrasten maken een trouwfilm levendig, en precies dat zoeken wij op.",
    faq: [
      {
        question: "Filmen jullie ook in de stad Groningen zelf?",
        answer:
          "Zeker. We hebben ervaring met ceremonies in het stadhuis en in de kerken in het centrum, en we weten waar we mogen parkeren en filmen zonder dat het jullie dag verstoort.",
      },
      {
        question: "Wat kost een trouwfilm in Groningen?",
        answer:
          "Onze pakketten beginnen bij € 799 (Zilver, 8 uur filmen). Voor Groningen gelden dezelfde vaste prijzen als overal in Nederland, zonder reiskosten.",
      },
    ],
  },
  {
    slug: "drenthe",
    mapId: "NLDR",
    naam: "Drenthe",
    plaatsen: ["Assen", "Emmen", "Meppel", "Hoogeveen", "Coevorden", "Dwingeloo"],
    reistijd: "een half uur tot een uur vanuit ons kantoor in Joure",
    intro:
      "Drenthe is een van de mooiste provincies om een bruiloft te filmen: hunebedden, heidevelden, esdorpen met brinken en landgoederen als De Havixhorst. Als videograaf voor bruiloften in Drenthe leggen wij die rust en ruimte vast, met drone-opnames van jullie locatie als jullie dat willen.",
    sfeer:
      "Veel Drentse bruiloften vinden plaats op één locatie: ceremonie, diner en feest op een landgoed of in een saksische boerderij. Dat geeft ons de tijd om jullie gasten, de details en de spontane momenten écht mee te nemen in de film.",
    faq: [
      {
        question: "Mag er gedronet worden op Drentse natuurlocaties?",
        answer:
          "Boven Natura 2000-gebieden zoals het Dwingelderveld gelden beperkingen. Wij checken vooraf wat er mag op jullie locatie en zoeken anders een plek in de buurt voor de dronebeelden.",
      },
      {
        question: "Hoe snel is de trouwfilm klaar?",
        answer:
          "Binnen drie weken na jullie bruiloft ontvangen jullie de volledige trouwfilm in 4K en Full HD, in een houten cadeauverpakking met USB.",
      },
    ],
  },
  {
    slug: "overijssel",
    mapId: "NLOV",
    naam: "Overijssel",
    plaatsen: ["Zwolle", "Deventer", "Enschede", "Hengelo", "Kampen", "Ommen"],
    reistijd: "circa een uur vanuit ons kantoor in Joure",
    intro:
      "Van de Hanzesteden Zwolle, Kampen en Deventer tot de coulissen van Twente en het Vechtdal: Overijssel heeft voor elke bruiloft een decor. Als videograaf voor bruiloften in Overijssel filmen wij jullie dag met oog voor die omgeving, of het nu een stadhuis in de binnenstad is of een landgoed bij Ommen.",
    sfeer:
      "Overijsselse bruiloften zijn vaak gezellig en groot: veel familie, veel gasten, een lange avond. Wij werken onopvallend en compact, zodat we de speeches, de eerste dans en de reacties van jullie gasten binnenhalen zonder ergens tussen te staan.",
    faq: [
      {
        question: "Werken jullie ook in Twente?",
        answer:
          "Ja, Enschede, Hengelo, Almelo en de landgoederen eromheen horen gewoon bij ons werkgebied. Reiskosten zitten in de prijs.",
      },
      {
        question: "Kunnen jullie ook een aftermovie van het feest maken?",
        answer:
          "Met het Diamant-pakket (12 uur) filmen we tot en met het avondfeest, zodat de eerste dans en het feest in de trouwfilm zitten. Losse aftermovies maken we ook, zie onze evenementenpagina.",
      },
    ],
  },
  {
    slug: "flevoland",
    mapId: "NLFL",
    naam: "Flevoland",
    plaatsen: ["Almere", "Lelystad", "Emmeloord", "Dronten", "Urk", "Zeewolde"],
    reistijd: "een half uur tot een uur vanuit ons kantoor in Joure",
    intro:
      "Flevoland ligt letterlijk om de hoek bij Joure. Als videograaf voor bruiloften in Flevoland filmen wij regelmatig in Almere, Lelystad en de Noordoostpolder, en op strandlocaties langs het Veluwemeer en bij Zeewolde. Vanuit de lucht is de polder met zijn strakke lijnen en water een prachtig decor.",
    sfeer:
      "Veel Flevolandse stellen trouwen aan het water of in een strandpaviljoen: zon, wind en ruimte. Wij filmen buiten graag met natuurlijk licht en desgewenst een drone, en binnen zorgen we met compacte apparatuur dat het feest niet ineens een filmset wordt.",
    faq: [
      {
        question: "Filmen jullie ook op Urk of in de Noordoostpolder?",
        answer:
          "Ja. Urk en Emmeloord liggen op een half uur van Joure; we zijn er vaak en kennen de kerken en feestlocaties.",
      },
      {
        question: "Kunnen jullie omgaan met wind aan het water?",
        answer:
          "Ja. We nemen windkappen en draadloze microfoons mee voor de geloften, en dronen doen we alleen als het veilig en toegestaan is.",
      },
    ],
  },
  {
    slug: "gelderland",
    mapId: "NLGE",
    naam: "Gelderland",
    plaatsen: ["Arnhem", "Nijmegen", "Apeldoorn", "Ede", "Zutphen", "Harderwijk"],
    reistijd: "anderhalf tot twee uur vanuit ons kantoor in Joure",
    intro:
      "De Veluwe, de Betuwe, de Achterhoek en de steden Arnhem en Nijmegen: Gelderland heeft meer trouwlocaties dan welke provincie ook. Als videograaf voor bruiloften in Gelderland reizen wij graag af naar kastelen, landgoederen en boomgaarden om jullie dag cinematisch vast te leggen.",
    sfeer:
      "Kasteel Doorwerth, landgoed Rhederoord of een boomgaard in de Betuwe in bloei: Gelderse bruiloften vragen om beeld dat het decor recht doet. Wij werken met lichtsterke lenzen voor de sfeer binnen en met het Diamant-pakket ook met drone-opnames van de locatie.",
    faq: [
      {
        question: "Zijn jullie er ook vroeg als de bruiloft ver van Joure is?",
        answer:
          "Ja. Wij plannen de reis zo dat we ruim voor de voorbereidingen aanwezig zijn, ook bij een vroege start. Reiskosten rekenen wij nooit.",
      },
      {
        question: "Wat kost een trouwfilm in Gelderland?",
        answer:
          "Dezelfde vaste pakketten als overal: Zilver € 799, Goud € 899 en Diamant € 1.199 met drone. Geen reiskosten.",
      },
    ],
  },
  {
    slug: "utrecht",
    mapId: "NLUT",
    naam: "Utrecht",
    plaatsen: ["Utrecht", "Amersfoort", "Zeist", "Nieuwegein", "Woerden", "Baarn"],
    reistijd: "circa anderhalf uur vanuit ons kantoor in Joure",
    intro:
      "Utrecht is centraal, druk en veelzijdig: de grachten en Domtoren, de landgoederen van de Stichtse Lustwarande bij Zeist en Doorn, en de polders rond Woerden. Als videograaf voor bruiloften in Utrecht filmen wij regelmatig in de stad en op de buitenplaatsen eromheen.",
    sfeer:
      "In de stad Utrecht draait het om timing: een ceremonie in het stadhuis, foto's aan de werf en een feest ergens anders. Wij plannen dat vooraf met jullie door, zodat we bij elke verplaatsing al klaarstaan en niets missen.",
    faq: [
      {
        question: "Kunnen jullie filmen in het stadhuis van Utrecht of Amersfoort?",
        answer:
          "Ja. Wij stemmen vooraf af met de trouwambtenaar wat er mag en werken met stille, compacte camera's zonder extra licht.",
      },
      {
        question: "Hoe lang van tevoren moeten we boeken?",
        answer:
          "Populaire zaterdagen in mei tot september zijn vaak een jaar vooruit vol. Vraag vrijblijvend naar de beschikbaarheid van jullie datum.",
      },
    ],
  },
  {
    slug: "noord-holland",
    mapId: "NLNH",
    naam: "Noord-Holland",
    plaatsen: ["Amsterdam", "Haarlem", "Alkmaar", "Hoorn", "Zaandam", "Bergen"],
    reistijd: "een tot twee uur vanuit ons kantoor in Joure",
    intro:
      "Van een boot door de Amsterdamse grachten tot een strandbruiloft in Bergen aan Zee of een ceremonie in de duinen bij Haarlem: als videograaf voor bruiloften in Noord-Holland filmen wij in de stad én langs de kust. Vanuit Joure zijn we via de Afsluitdijk snel in West-Friesland en Amsterdam.",
    sfeer:
      "Noord-Hollandse bruiloften zijn vaak stijlvol en internationaal. Wij filmen discreet en leveren een film in 4K die jullie ook makkelijk met familie in het buitenland delen.",
    faq: [
      {
        question: "Filmen jullie ook in Amsterdam?",
        answer:
          "Ja, regelmatig. Wij kennen de logistiek van de binnenstad (parkeren, boten, vergunningen voor drones buiten het centrum) en houden daar in de planning rekening mee.",
      },
      {
        question: "Kunnen jullie een strandbruiloft aan?",
        answer:
          "Zeker. Zand, wind en fel licht vragen om de juiste lenzen en microfoons; die nemen we standaard mee naar kustlocaties.",
      },
    ],
  },
  {
    slug: "zuid-holland",
    mapId: "NLZH",
    naam: "Zuid-Holland",
    plaatsen: ["Rotterdam", "Den Haag", "Leiden", "Delft", "Dordrecht", "Gouda"],
    reistijd: "circa twee uur vanuit ons kantoor in Joure",
    intro:
      "Rotterdam, Den Haag, Leiden, Delft: de steden van Zuid-Holland hebben elk een heel eigen karakter, van de skyline aan de Maas tot het strand van Scheveningen en de grachten van Delft. Als videograaf voor bruiloften in Zuid-Holland brengen wij dat karakter in jullie trouwfilm.",
    sfeer:
      "Wij houden van het contrast dat Zuid-Holland biedt: een moderne ceremonie in Rotterdam of juist een klassiek landgoed in Wassenaar, en 's avonds feest in een pakhuis aan het water. Professionele camera's en desgewenst een drone zorgen dat elke locatie tot zijn recht komt.",
    faq: [
      {
        question: "Rekenen jullie reiskosten naar de Randstad?",
        answer:
          "Nee. Onze prijzen zijn landelijk en zonder reiskosten, ook in de Randstad.",
      },
      {
        question: "Hebben jullie ervaring met grote bruiloften?",
        answer:
          "Ja, ook met bruiloften van 150+ gasten en meerdere locaties op één dag. We plannen die met jullie en de ceremoniemeester door.",
      },
    ],
  },
  {
    slug: "zeeland",
    mapId: "NLZE",
    naam: "Zeeland",
    plaatsen: ["Middelburg", "Vlissingen", "Goes", "Zierikzee", "Domburg", "Terneuzen"],
    reistijd: "circa drie uur vanuit ons kantoor in Joure",
    intro:
      "Zeeland is de strandprovincie: Domburg, Vlissingen, de Brouwersdam en de duinen bij Renesse. Als videograaf voor bruiloften in Zeeland filmen wij ceremonies op het strand, in de Abdij van Middelburg en op de landgoederen van Walcheren, desgewenst met dronebeelden van kust en Deltawerken.",
    sfeer:
      "Zeeuwse bruiloften ademen vakantie: blote voeten in het zand, een zonsondergang boven zee en een feest in een strandpaviljoen. Wij filmen dat licht op zijn mooist en zorgen met goede microfoons dat de geloften ondanks wind en branding helder te horen zijn.",
    faq: [
      {
        question: "Komen jullie helemaal naar Zeeland?",
        answer:
          "Ja, met plezier. Zeeland hoort gewoon bij ons werkgebied en wij rekenen geen reiskosten.",
      },
      {
        question: "Mogen jullie dronen aan de Zeeuwse kust?",
        answer:
          "Op veel plekken wel, buiten de natuurgebieden en badplaatsen in het hoogseizoen. Wij checken vooraf de regels voor jullie locatie.",
      },
    ],
  },
  {
    slug: "noord-brabant",
    mapId: "NLNB",
    naam: "Noord-Brabant",
    plaatsen: ["Eindhoven", "Tilburg", "Breda", "'s-Hertogenbosch", "Helmond", "Oisterwijk"],
    reistijd: "circa twee tot tweeënhalf uur vanuit ons kantoor in Joure",
    intro:
      "Brabantse bruiloften zijn gezellig, groot en gaan lang door. Als videograaf voor bruiloften in Noord-Brabant filmen wij van de kerk in 's-Hertogenbosch of Breda tot het feest in een landgoedboerderij bij Oisterwijk of een industriële loods in Eindhoven.",
    sfeer:
      "Wij zorgen dat de Brabantse gezelligheid in de film terugkomt: de toespraken, het bier op het terras, de polonaise om middernacht. Onopvallend gefilmd, zodat niemand zich bekeken voelt.",
    faq: [
      {
        question: "Filmen jullie tot het einde van het feest?",
        answer:
          "Onze pakketten zijn 8, 10 of 12 uur filmen; met Diamant zitten we tot en met het avondfeest. Langer nodig? Dat bespreken we vooraf.",
      },
      {
        question: "Wat kost een trouwfilm in Brabant?",
        answer:
          "Zilver € 799, Goud € 899 en Diamant € 1.199 (met drone). Landelijke prijzen, zonder reiskosten.",
      },
    ],
  },
  {
    slug: "limburg",
    mapId: "NLLI",
    naam: "Limburg",
    plaatsen: ["Maastricht", "Venlo", "Roermond", "Sittard", "Heerlen", "Valkenburg"],
    reistijd: "circa drie uur vanuit ons kantoor in Joure",
    intro:
      "Het Limburgse heuvelland, de kastelen rond Valkenburg en de binnenstad van Maastricht: Limburg heeft het meest zuidelijke en misschien wel meest romantische decor van Nederland. Als videograaf voor bruiloften in Limburg filmen wij daar met evenveel plezier als in het noorden.",
    sfeer:
      "Kasteel-, wijngaard- en heuvelbruiloften vragen om ruimte in beeld. Met drone-opnames (Diamant-pakket) vangen we het landschap en binnen werken we met lichtsterke lenzen, zodat ook kelder- en kasteelzalen sfeervol in beeld komen.",
    faq: [
      {
        question: "Is Limburg niet te ver voor jullie?",
        answer:
          "Nee. Limburg hoort gewoon bij ons werkgebied en wij rekenen geen reiskosten. Wij plannen de reis zo dat we ruim op tijd bij de voorbereidingen zijn.",
      },
      {
        question: "Kunnen jullie ook een meertalige bruiloft filmen?",
        answer:
          "Ja. Veel Limburgse bruiloften hebben Duitse of Belgische gasten; dat is voor de film geen enkel probleem.",
      },
    ],
  },
];

export function provincieBySlug(slug: string) {
  return PROVINCIES.find((p) => p.slug === slug);
}
