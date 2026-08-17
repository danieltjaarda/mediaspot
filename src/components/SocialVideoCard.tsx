"use client";

import Image from "next/image";
import { useRef, useState } from "react";

type Props = {
  src: string;
  poster: string;
  views: string;
  label: string;
  onPlayingChange?: (playing: boolean) => void;
};

function EyeIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-3.5 w-3.5"
      aria-hidden
    >
      <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7Z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

function PlayIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="ml-0.5 h-6 w-6" aria-hidden>
      <path d="M8 5.14v13.72c0 .93 1.02 1.5 1.81 1.02l10.9-6.86a1.2 1.2 0 0 0 0-2.04L9.81 4.12A1.2 1.2 0 0 0 8 5.14Z" />
    </svg>
  );
}

function PauseIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6" aria-hidden>
      <rect x="6" y="5" width="4" height="14" rx="1" />
      <rect x="14" y="5" width="4" height="14" rx="1" />
    </svg>
  );
}

export default function SocialVideoCard({
  src,
  poster,
  views,
  label,
  onPlayingChange,
}: Props) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [playing, setPlaying] = useState(false);
  // Blijft waar zodra de video één keer gespeeld heeft, zodat pauzeren het
  // huidige beeld laat staan in plaats van terug te springen naar de poster.
  const [gestart, setGestart] = useState(false);

  function updatePlaying(next: boolean) {
    setPlaying(next);
    if (next) setGestart(true);
    onPlayingChange?.(next);
  }

  function toggle() {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      // Pauzeer alle andere social-video's zodat er maar één tegelijk speelt
      document.querySelectorAll<HTMLVideoElement>("video[data-social]").forEach((v) => {
        if (v !== video) v.pause();
      });
      // De bron zetten we pas bij de eerste tik. Tot dat moment is dit een leeg
      // media-element zonder decoder; anders houdt de carrousel er twaalf
      // tegelijk open, wat op telefoons tegen de limiet aan loopt.
      if (!video.src) video.src = src;
      // play() moet in dezelfde gebeurtenis als de tik blijven, anders ziet
      // iOS het niet meer als bewuste keuze van de bezoeker.
      void video.play();
    } else {
      video.pause();
    }
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={playing ? `Pauzeer: ${label}` : `Speel af: ${label}`}
      className="group relative block aspect-[9/16] w-full overflow-hidden rounded-2xl bg-neutral-900 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
    >
      <Image
        src={poster}
        alt=""
        aria-hidden
        fill
        sizes="(max-width: 640px) 160px, (max-width: 1024px) 192px, 208px"
        className="object-cover"
      />

      <video
        ref={videoRef}
        data-social
        preload="none"
        playsInline
        onPlay={() => updatePlaying(true)}
        onPause={() => updatePlaying(false)}
        className="absolute inset-0 h-full w-full object-cover transition-opacity duration-300"
        style={{ opacity: gestart ? 1 : 0 }}
      />

      {/* Donkere gradient onderin voor leesbaarheid van de views-badge */}
      <div
        aria-hidden
        className={`pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent transition-opacity duration-300 ${
          playing ? "opacity-0 group-hover:opacity-100" : "opacity-100"
        }`}
      />

      {/* Play/pauze-knop */}
      <span
        className={`absolute left-1/2 top-1/2 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-black/45 text-white backdrop-blur-md transition-all duration-300 ${
          playing
            ? "scale-90 opacity-0 group-hover:scale-100 group-hover:opacity-100"
            : "opacity-100"
        }`}
      >
        {playing ? <PauseIcon /> : <PlayIcon />}
      </span>

      {/* Views-badge */}
      <span
        className={`absolute bottom-3 left-3 inline-flex items-center gap-1.5 rounded-full bg-black/45 px-2.5 py-1 text-xs font-semibold text-white backdrop-blur-md transition-opacity duration-300 ${
          playing ? "opacity-0 group-hover:opacity-100" : "opacity-100"
        }`}
      >
        <EyeIcon />
        {views}
      </span>
    </button>
  );
}
