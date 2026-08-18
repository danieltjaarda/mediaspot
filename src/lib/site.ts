export const SITE_URL = "https://mediaspot.nl";
export const SITE_NAME = "Mediaspot";

export const PHONE_DISPLAY = "06 20176727";
export const PHONE_E164 = "+31620176727";
export const PHONE_TEL = `tel:${PHONE_E164}`;
export const WHATSAPP_URL = "https://wa.me/31620176727";
export const EMAIL = "info@mediaspot.nl";

/** Ingeschreven onderneming achter Mediaspot. */
export const LEGAL_NAME = "Tjaarda Holding B.V.";
export const KVK = "96808845";
/** Vul aan zodra het btw-nummer bekend is, bijvoorbeeld "NL123456789B01". */
export const VAT_ID = "";

export const STREET = "Brandemeer 6";
export const CITY = "Joure";
export const REGION = "Friesland";
export const COUNTRY = "NL";

/** Coördinaten van Joure; gebruikt voor het LocalBusiness-schema. */
export const GEO = { latitude: 52.9633, longitude: 5.7994 };

/** Provincies waar we filmen; identiek aan de kaart in de Werkgebied-sectie. */
export const AREA_SERVED = [
  "Friesland",
  "Groningen",
  "Drenthe",
  "Overijssel",
  "Flevoland",
  "Gelderland",
  "Utrecht",
  "Noord-Holland",
  "Zuid-Holland",
  "Zeeland",
  "Noord-Brabant",
  "Limburg",
];

/**
 * Moet blijven overeenkomen met de zichtbare beoordeling in de Reviews-sectie.
 * Google beschouwt afwijkende cijfers als misleidende markup.
 */
export const AGGREGATE_RATING = { value: 5, count: 234, best: 5 };

/**
 * Publieke profielen voor sameAs. Alleen bestaande URL's toevoegen:
 * links naar niet-bestaande profielen schaden de betrouwbaarheid van het schema.
 */
export const SOCIAL_PROFILES: string[] = [];
