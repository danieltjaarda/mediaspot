export const SITE_URL = "https://mediaspot.nl";
export const SITE_NAME = "Mediaspot";

export const PHONE_DISPLAY = "06 20176727";
export const PHONE_E164 = "+31620176727";
export const PHONE_TEL = `tel:${PHONE_E164}`;
export const WHATSAPP_URL = "https://wa.me/31620176727";
export const EMAIL = "info@mediaspot.nl";

export const CITY = "Heerenveen";
export const REGION = "Friesland";
export const COUNTRY = "NL";

/** Coördinaten van Heerenveen; gebruikt voor het LocalBusiness-schema. */
export const GEO = { latitude: 52.9597, longitude: 5.9195 };

/** Provincies waar we filmen; identiek aan de kaart in de Werkgebied-sectie. */
export const AREA_SERVED = [
  "Friesland",
  "Groningen",
  "Drenthe",
  "Overijssel",
  "Flevoland",
  "Gelderland",
  "Noord-Holland",
  "Utrecht",
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
