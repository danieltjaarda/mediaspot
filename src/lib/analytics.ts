declare global {
  interface Window {
    gtag?: (command: string, ...rest: unknown[]) => void;
  }
}

export type LeadMethode = "formulier" | "bellen" | "whatsapp" | "mailen";

/**
 * Meldt een aanvraag als sleutelgebeurtenis bij Google Analytics. Vanuit
 * Analytics importeer je deze in Google Ads, zodat er één bron van waarheid is
 * en conversies niet dubbel geteld worden.
 */
export function meldLead(methode: LeadMethode) {
  if (typeof window === "undefined") return;
  window.gtag?.("event", "generate_lead", { methode });
}
