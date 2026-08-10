"use client";

import { useEffect, useRef, useState } from "react";

type Props = {
  src: string;
  /** Eerste frame van de video, zodat er geen sprong is bij het starten. */
  poster: string;
  className?: string;
};

export default function HeroVideo({ src, poster, className }: Props) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [ready, setReady] = useState(false);

  // Uit de cache kan de video al klaar zijn voordat React de events koppelt.
  useEffect(() => {
    const video = videoRef.current;
    if (video && video.readyState >= 3) setReady(true);
  }, []);

  return (
    <>
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        aria-hidden
        poster={poster}
        onCanPlay={() => setReady(true)}
        onPlaying={() => setReady(true)}
        onError={() => setReady(true)}
        className={className}
      >
        <source src={src} type="video/mp4" />
      </video>

      {/* Laadindicator rechtsonder, verdwijnt zodra de video kan spelen */}
      <span
        aria-hidden
        className={`liquid-glass-btn pointer-events-none absolute bottom-5 right-5 z-10 flex h-9 w-9 items-center justify-center rounded-full transition-opacity duration-500 ${
          ready ? "opacity-0" : "opacity-100"
        }`}
      >
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          className="animate-spin text-white"
        >
          <circle
            cx="12"
            cy="12"
            r="9"
            stroke="currentColor"
            strokeOpacity="0.3"
            strokeWidth="2.5"
          />
          <path
            d="M21 12a9 9 0 0 0-9-9"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
        </svg>
      </span>
    </>
  );
}
