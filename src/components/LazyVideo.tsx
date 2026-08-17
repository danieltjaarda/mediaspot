"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

type Props = {
  src: string;
  /** Stilstaand beeld dat direct zichtbaar is; de video schuift eroverheen zodra hij speelt. */
  poster: string;
  className?: string;
  ariaLabel?: string;
  /** Zie het sizes-attribuut van next/image; standaard past bij een kaart op volle breedte. */
  posterSizes?: string;
};

/**
 * Video die pas begint te laden zodra hij bijna in beeld scrollt, pas speelt
 * als hij echt zichtbaar is en pauzeert wanneer hij weer uit beeld is.
 * Zonder JavaScript, of als de browser autoplay weigert, blijft de poster staan.
 */
export default function LazyVideo({
  src,
  poster,
  className,
  ariaLabel,
  posterSizes = "(max-width: 1024px) 100vw, 58vw",
}: Props) {
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [shouldLoad, setShouldLoad] = useState(false);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const el = wrapperRef.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!shouldLoad) return;
    const el = videoRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.play().catch(() => {});
        } else {
          el.pause();
        }
      },
      { threshold: 0.25 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [shouldLoad]);

  return (
    <div ref={wrapperRef} className="absolute inset-0" aria-label={ariaLabel} role={ariaLabel ? "img" : undefined}>
      <Image
        src={poster}
        alt=""
        aria-hidden
        fill
        sizes={posterSizes}
        className={className}
      />
      {shouldLoad && (
        <video
          ref={videoRef}
          src={src}
          muted
          loop
          playsInline
          preload="metadata"
          aria-hidden
          onPlaying={() => setPlaying(true)}
          className={className}
          style={{
            opacity: playing ? 1 : 0,
            transition:
              "opacity 500ms ease, scale 700ms ease-out, transform 700ms ease-out",
          }}
        />
      )}
    </div>
  );
}
