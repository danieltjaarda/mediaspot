"use client";

import { useEffect, useRef, useState } from "react";

type Props = {
  src: string;
  className?: string;
  ariaLabel?: string;
};

/**
 * Video die pas begint te laden zodra hij bijna in beeld scrollt,
 * en pauzeert wanneer hij weer uit beeld is.
 */
export default function LazyVideo({ src, className, ariaLabel }: Props) {
  const ref = useRef<HTMLVideoElement | null>(null);
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      { rootMargin: "500px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!shouldLoad) return;
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.play().catch(() => {});
        } else {
          el.pause();
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [shouldLoad]);

  return (
    <video
      ref={ref}
      muted
      loop
      playsInline
      autoPlay
      preload="none"
      src={shouldLoad ? src : undefined}
      aria-label={ariaLabel}
      className={className}
    />
  );
}
