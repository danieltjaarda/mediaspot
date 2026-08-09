"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const navItems = [
  { label: "Portfolio", href: "#portfolio" },
  { label: "Trouwerij", href: "#trouwerij" },
  { label: "Evenementen", href: "#evenementen" },
  { label: "Bedrijfsvideo", href: "#bedrijfsvideo" },
  { label: "Social content", href: "#social-content" },
];

const PHONE_DISPLAY = "06 20176727";
const PHONE_TEL = "tel:+31620176727";

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

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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
          </a>

          {/* Mobiel hamburger */}
          <button
            aria-label={menuOpen ? "Menu sluiten" : "Menu openen"}
            onClick={() => setMenuOpen((v) => !v)}
            className="flex h-10 w-10 items-center justify-center rounded-full text-white/80 transition-colors hover:bg-white/10 hover:text-white lg:hidden"
          >
            {menuOpen ? (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                <path d="M6 6l12 12M18 6L6 18" />
              </svg>
            ) : (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                <path d="M4 7h16M4 12h16M4 17h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobiel menu */}
      {menuOpen && (
        <div className="liquid-glass-dark-strong mx-auto mt-2 max-w-6xl rounded-3xl p-3 lg:hidden">
          <nav className="flex flex-col">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="rounded-2xl px-4 py-3 text-base font-medium text-white transition-colors hover:bg-white/10"
              >
                {item.label}
              </Link>
            ))}
            <a
              href={PHONE_TEL}
              className="mt-1 flex items-center gap-2.5 rounded-2xl px-4 py-3 text-base font-semibold text-accent"
            >
              <PhoneIcon />
              {PHONE_DISPLAY}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
