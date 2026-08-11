declare global {
  interface Window {
    gtag?: (command: string, ...rest: unknown[]) => void;
  }
}

/**
 * Conversielabel van de conversieactie in Google Ads, in de vorm
 * "AW-18383248376/AbC-D_efGh12". Te vinden in Google Ads onder
 * Doelen > Conversies > (je actie) > Tag instellen > De tag zelf installeren.
 *
 * Zolang dit leeg is, meten we alleen in Google Analytics. Vul je het in, dan
 * meet Google Ads rechtstreeks en moet je dezelfde actie NIET ook vanuit
 * Analytics importeren, anders telt Ads elke aanvraag dubbel.
 */
const ADS_CONVERSIE_LABEL = "AW-18383248376/5TrECIek7d8cEPi36L1E";

/** Meet-ID van de Google Analytics-property. */
const ANALYTICS_ID = "G-F39P87QKQJ";

export type LeadMethode = "formulier" | "bellen" | "whatsapp" | "mailen";

/**
 * Meldt een aanvraag: als sleutelgebeurtenis bij Google Analytics en, zodra het
 * conversielabel is ingevuld, ook als conversie bij Google Ads.
 */
export function meldLead(methode: LeadMethode) {
  if (typeof window === "undefined") return;

  // send_to houdt elke melding bij één bestemming: statistieken naar Analytics,
  // de conversie naar Ads. Zonder dit gaat elke gebeurtenis naar allebei.
  window.gtag?.("event", "generate_lead", { methode, send_to: ANALYTICS_ID });

  if (ADS_CONVERSIE_LABEL) {
    window.gtag?.("event", "conversion", {
      send_to: ADS_CONVERSIE_LABEL,
      value: 1.0,
      currency: "EUR",
    });
  }
}
