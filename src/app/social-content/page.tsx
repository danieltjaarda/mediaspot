import type { Metadata } from "next";
import Link from "next/link";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import LogoMarquee from "@/components/LogoMarquee";
import SocialMarquee from "@/components/SocialMarquee";

export const metadata: Metadata = {
  title: "Social content — Mediaspot",
  description:
    "Short-form video's voor TikTok, Instagram en YouTube die scoren. Van concept tot montage, gemaakt om gezien te worden.",
};

type SocialVideo = {
  src: string;
  poster: string;
  views: string;
  label: string;
};

const videos: SocialVideo[] = [
  {
    src: "/videos/social-tt3.mp4",
    poster: "/images/social-tt3-poster.jpg",
    views: "1,1M",
    label: "GoFatbike, winactie",
  },
  {
    src: "/videos/social-yt1.mp4",
    poster: "/images/social-yt1-poster.jpg",
    views: "33k",
    label: "Verschil achter- en middenmotor",
  },
  {
    src: "/videos/social-tt2.mp4",
    poster: "/images/social-tt2-poster.jpg",
    views: "11k",
    label: "GoFatbike, de Fatbike die op een Tesla lijkt",
  },
  {
    src: "/videos/social-yt2.mp4",
    poster: "/images/social-yt2-poster.jpg",
    views: "1,3k",
    label: "Opening Mapfour winkel in Amsterdam",
  },
  {
    src: "/videos/social-tt1.mp4",
    poster: "/images/social-tt1-poster.jpg",
    views: "297",
    label: "Deskna, verstelbaar bureau",
  },
  {
    src: "/videos/social-yt3.mp4",
    poster: "/images/social-yt3-poster.jpg",
    views: "25",
    label: "Hoeveel kost deze fiets?",
  },
];

const usps = [
  {
    title: "Gemaakt voor het algoritme",
    text: "Verticaal gefilmd, strak gemonteerd en binnen 3 seconden pakkend",
  },
  {
    title: "Content in bulk",
    text: "Meerdere video's uit één draaidag, klaar voor weken aan posts",
  },
  {
    title: "Elk platform",
    text: "TikTok, Instagram Reels en YouTube Shorts",
  },
];

export default function SocialContent() {
  return (
    <>
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <section className="relative overflow-hidden pb-8 pt-[8.5rem] sm:pt-40">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 -z-10"
          >
            <div className="absolute left-1/2 top-[-30%] h-[480px] w-[800px] -translate-x-1/2 rounded-full bg-accent/10 blur-[140px]" />
          </div>

          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="max-w-2xl">
              <h1 className="text-balance text-4xl font-semibold leading-tight tracking-tight text-neutral-900 sm:text-5xl">
                Social content die{" "}
                <span
                  className="font-medium italic text-accent"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  scoort
                </span>
              </h1>
              <p className="mt-4 max-w-xl text-pretty text-neutral-500">
                Short-form video&apos;s voor TikTok, Instagram Reels en YouTube
                Shorts. Van concept tot montage, gemaakt om gezien te worden.
              </p>
            </div>
          </div>
        </section>

        {/* Video's */}
        <section className="py-8 sm:py-10">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <p className="text-sm font-semibold text-neutral-500">
              Een greep uit ons werk, inclusief het aantal views
            </p>
          </div>

          <div className="mt-5">
            <SocialMarquee videos={videos} />
          </div>

          {/* Merken */}
          <div className="mt-14 sm:mt-16">
            <h2 className="text-balance px-4 text-center text-2xl font-semibold tracking-tight text-neutral-900 sm:px-6 sm:text-3xl">
              Deze merken{" "}
              <span
                className="font-medium italic text-accent"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                vertrouwen
              </span>{" "}
              hun short content aan ons toe
            </h2>
            <div className="mx-auto mt-7 max-w-2xl px-4 sm:px-6">
              <LogoMarquee />
            </div>
          </div>

          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            {/* USP's */}
            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
              {usps.map((usp) => (
                <div
                  key={usp.title}
                  className="liquid-glass relative overflow-hidden rounded-3xl px-6 py-5 text-left"
                >
                  <p className="font-semibold text-neutral-900">{usp.title}</p>
                  <p className="mt-1 text-sm text-neutral-500">{usp.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-8 pb-16 sm:pb-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="relative overflow-hidden rounded-3xl bg-[#1d1d1f] px-8 py-12 text-center sm:px-12 sm:py-16">
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0"
              >
                <div className="absolute left-1/2 top-[-60%] h-[380px] w-[640px] -translate-x-1/2 rounded-full bg-accent/20 blur-[120px]" />
              </div>
              <div className="relative">
                <h2 className="text-balance text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                  Klaar om{" "}
                  <span
                    className="font-medium italic text-accent"
                    style={{ fontFamily: "var(--font-playfair)" }}
                  >
                    viral
                  </span>{" "}
                  te gaan{"?"}
                </h2>
                <p className="mx-auto mt-4 max-w-md text-pretty text-white/70">
                  Vertel ons over jouw merk, dan bedenken wij content die jouw
                  doelgroep écht wil zien.
                </p>
                <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                  <Link
                    href="tel:+31620176727"
                    className="inline-flex h-12 items-center justify-center rounded-full bg-accent px-8 text-base font-semibold text-white transition-all duration-200 hover:brightness-110"
                  >
                    Bel 06 20176727
                  </Link>
                  <Link
                    href="mailto:info@mediaspot.nl"
                    className="liquid-glass-btn inline-flex h-12 items-center justify-center rounded-full px-8 text-base font-semibold text-white"
                  >
                    Mail ons
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
