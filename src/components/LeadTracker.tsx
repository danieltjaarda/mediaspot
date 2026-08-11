"use client";

import { useEffect } from "react";

import { meldLead } from "@/lib/analytics";

/**
 * Meldt elke contactactie op de site als aanvraag bij Google Analytics.
 * Eén luisteraar voor de hele site, zodat nieuwe bel-, WhatsApp- of
 * mailknoppen automatisch meetellen.
 *
 * Een link met data-lead="geen" wordt overgeslagen.
 */
export default function LeadTracker() {
  useEffect(() => {
    function onClick(event: MouseEvent) {
      const doel = event.target as HTMLElement | null;
      const link = doel?.closest?.("a");
      if (!link || link.dataset.lead === "geen") return;

      const href = link.getAttribute("href") ?? "";

      if (href.startsWith("tel:")) {
        // Buiten de pop-up opent een tel:-link alleen de pop-up. Pas de knop
        // dáárin leidt tot een echt telefoongesprek.
        if (link.closest("[data-contact-modal]")) meldLead("bellen");
        return;
      }
      if (href.includes("wa.me") || href.includes("api.whatsapp.com")) {
        meldLead("whatsapp");
        return;
      }
      if (href.startsWith("mailto:")) {
        meldLead("mailen");
      }
    }

    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  return null;
}
