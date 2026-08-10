"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

import { PHONE_DISPLAY, PHONE_TEL } from "@/lib/site";

const navItems = [
  { label: "Portfolio", href: "/#diensten" },
  { label: "Trouwerij", href: "/trouwerij" },
  { label: "Evenementen", href: "/evenementen" },
  { label: "Bedrijfsvideo", href: "/bedrijfsvideo" },
  { label: "Social content", href: "/social-content" },
];

function WhatsAppIcon() {
  return (
    <svg
      width="17"
      height="17"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.174.198-.298.297-.497.1-.198.05-.371-.025-.52-.074-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
    </svg>
  );
}

/** Drie streepjes die naar een kruis morphen; alleen translate, rotate en
 *  opacity animeren, zodat de overgang vloeiend blijft. */
function MenuIcon({ open }: { open: boolean }) {
  const bar =
    "absolute left-0 h-[2px] w-5 rounded-full bg-current transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]";

  return (
    <span aria-hidden className="relative block h-[14px] w-5">
      <span
        className={`${bar} top-0 ${open ? "translate-y-[6px] rotate-45" : ""}`}
      />
      <span
        className={`${bar} top-1.5 ${open ? "scale-x-0 opacity-0" : ""}`}
      />
      <span
        className={`${bar} top-3 ${open ? "-translate-y-[6px] -rotate-45" : ""}`}
      />
    </span>
  );
}

function PhoneIcon() {
  return (
    <svg
      width="17"
      height="17"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);
  const [panelHeight, setPanelHeight] = useState(0);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // De hoogte van het menu meten, zodat max-height naar een exacte waarde
  // kan animeren in plaats van naar een geschatte bovengrens.
  useEffect(() => {
    const panel = panelRef.current;
    if (!panel) return;

    const measure = () => setPanelHeight(panel.scrollHeight);
    measure();

    const observer = new ResizeObserver(measure);
    observer.observe(panel);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!menuOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [menuOpen]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6">
      <div
        className={`mx-auto flex h-[4.5rem] items-center justify-between gap-2 rounded-full px-3 pl-4 transition-all duration-300 sm:pl-6 ${
          scrolled
            ? "liquid-glass-dark-strong max-w-[69rem]"
            : "liquid-glass-dark max-w-7xl"
        }`}
      >
        {/* Logo */}
        <Link href="/" className="flex shrink-0 items-center" aria-label="Mediaspot home">
          <Image
            src="/mediaspot-logo.svg"
            alt="Mediaspot"
            width={230}
            height={86}
            priority
            className="h-10 w-auto sm:h-14"
          />
        </Link>

        {/* Desktop navigatie */}
        <nav className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full px-4 py-2 text-sm font-medium text-white transition-colors duration-200 hover:bg-white/10"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Telefoonnummer rechts */}
        <div className="flex items-center gap-2">
          <a
            href={PHONE_TEL}
            className="liquid-glass-btn flex items-center gap-2 whitespace-nowrap rounded-full py-2.5 pl-3.5 pr-4 text-sm font-semibold text-white sm:gap-2.5 sm:pl-4 sm:pr-5"
          >
            <PhoneIcon />
            {PHONE_DISPLAY}
            <span className="text-[#25D366]">
              <WhatsAppIcon />
            </span>
          </a>

          {/* Mobiel hamburger */}
          <button
            aria-label={menuOpen ? "Menu sluiten" : "Menu openen"}
            aria-expanded={menuOpen}
            aria-controls="mobiel-menu"
            onClick={() => setMenuOpen((v) => !v)}
            className="flex h-10 w-10 items-center justify-center rounded-full text-white/80 transition-colors hover:bg-white/10 hover:text-white lg:hidden"
          >
            <MenuIcon open={menuOpen} />
          </button>
        </div>
      </div>

      {/* Mobiel menu: blijft in de DOM zodat open en dicht kunnen animeren */}
      <div
        id="mobiel-menu"
        inert={!menuOpen}
        aria-hidden={!menuOpen}
        style={{ maxHeight: menuOpen ? panelHeight : 0 }}
        className={`overflow-hidden transition-all duration-[420ms] ease-[cubic-bezier(0.22,1,0.36,1)] lg:hidden ${
          menuOpen ? "opacity-100" : "-translate-y-1 opacity-0"
        }`}
      >
        <div ref={panelRef} className="pt-2">
          <div className="liquid-glass-dark-strong mx-auto max-w-6xl rounded-3xl p-3">
            <nav className="flex flex-col">
              {[...navItems, { label: PHONE_DISPLAY, href: PHONE_TEL }].map(
                (item, index) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    style={{
                      transitionDelay: menuOpen ? `${80 + index * 45}ms` : "0ms",
                    }}
                    className={`flex items-center gap-2.5 rounded-2xl px-4 py-3 text-base font-medium transition-all duration-300 hover:bg-white/10 ${
                      item.href === PHONE_TEL
                        ? "mt-1 font-semibold text-accent"
                        : "text-white"
                    } ${
                      menuOpen
                        ? "translate-y-0 opacity-100"
                        : "-translate-y-2 opacity-0"
                    }`}
                  >
                    {item.href === PHONE_TEL && <PhoneIcon />}
                    {item.label}
                  </Link>
                ),
              )}
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
