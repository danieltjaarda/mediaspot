"use client";

import { useEffect } from "react";

/**
 * Zet elke carrousel stil zolang hij buiten beeld staat.
 *
 * De carrousels draaien met een oneindige CSS-animatie. Zonder dit blijft de
 * compositor van de browser doorwerken voor stroken die niemand ziet, wat op
 * telefoons merkbaar scroll-haperingen en batterijverbruik oplevert.
 *
 * We zetten een data-attribuut op de container in plaats van een class, zodat
 * React de eigen className van de track (bijvoorbeeld `is-paused` wanneer een
 * video speelt) ongestoord kan blijven beheren.
 */
export default function MarqueeAutoPause() {
  useEffect(() => {
    const containers = document.querySelectorAll<HTMLElement>(".social-marquee");
    if (!containers.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const el = entry.target as HTMLElement;
          el.dataset.offscreen = entry.isIntersecting ? "false" : "true";
        }
      },
      { rootMargin: "100px" },
    );

    containers.forEach((el) => observer.observe(el));

    // Een tabblad op de achtergrond hoeft ook niets te animeren.
    const onVisibility = () => {
      const verborgen = document.visibilityState === "hidden";
      containers.forEach((el) => {
        if (verborgen) el.dataset.offscreen = "true";
      });
    };
    document.addEventListener("visibilitychange", onVisibility);

    return () => {
      observer.disconnect();
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, []);

  return null;
}
