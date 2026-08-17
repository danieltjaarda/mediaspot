"use client";

import { getImageProps } from "next/image";
import { useEffect, useRef, useState } from "react";
import { preload } from "react-dom";

type Props = {
  /** Video voor tablet en desktop. */
  src: string;
  /** Kleinere, staande uitsnede voor telefoons; valt terug op src. */
  mobileSrc?: string;
  /** Eerste frame van src; staat direct in beeld en blijft staan als de video niet start. */
  poster: string;
  /** Eerste frame van mobileSrc, zodat poster en video op telefoons dezelfde uitsnede tonen. */
  mobilePoster?: string;
  className?: string;
};

const MOBIEL = "(max-width: 767px)";
const DESKTOP = "(min-width: 768px)";
const DESKTOP_SIZES = "(max-width: 1152px) 100vw, 1152px";

/**
 * Hero-video die pas gaat downloaden nadat de pagina zelf geladen is, zodat hij
 * niet concurreert met tekst, fonts en afbeeldingen. De poster is een gewone
 * afbeelding (geoptimaliseerd en gepreload, per breakpoint de juiste uitsnede);
 * de video schuift er pas overheen zodra hij echt speelt. Start iOS niet
 * automatisch (energiebesparing) of wil de bezoeker minder beweging, dan
 * blijft de poster gewoon staan.
 */
export default function HeroVideo({
  src,
  mobileSrc,
  poster,
  mobilePoster,
  className,
}: Props) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoSrc, setVideoSrc] = useState<string | null>(null);
  const [playing, setPlaying] = useState(false);

  const desktopImg = getImageProps({
    src: poster,
    alt: "",
    fill: true,
    sizes: DESKTOP_SIZES,
    loading: "eager",
    fetchPriority: "high",
  }).props;
  const mobileImg = mobilePoster
    ? getImageProps({ src: mobilePoster, alt: "", fill: true, sizes: "100vw" })
        .props
    : null;

  // Preload de poster als LCP-afbeelding, per breakpoint alleen de variant die getoond wordt.
  preload(desktopImg.src, {
    as: "image",
    imageSrcSet: desktopImg.srcSet,
    imageSizes: desktopImg.sizes,
    fetchPriority: "high",
    media: mobileImg ? DESKTOP : undefined,
  });
  if (mobileImg) {
    preload(mobileImg.src, {
      as: "image",
      imageSrcSet: mobileImg.srcSet,
      imageSizes: mobileImg.sizes,
      fetchPriority: "high",
      media: MOBIEL,
    });
  }

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let gestart = false;
    const start = () => {
      if (gestart) return;
      gestart = true;
      const mobiel = mobileSrc && window.matchMedia(MOBIEL).matches;
      setVideoSrc(mobiel ? mobileSrc : src);
    };

    if (document.readyState === "complete") {
      start();
      return;
    }
    window.addEventListener("load", start, { once: true });
    // Vangnet als het load-event lang op zich laat wachten (trage derde partijen)
    const timer = window.setTimeout(start, 3000);
    return () => {
      window.removeEventListener("load", start);
      window.clearTimeout(timer);
    };
  }, [src, mobileSrc]);

  useEffect(() => {
    if (!videoSrc) return;
    const video = videoRef.current;
    if (!video) return;
    // Autoplay kan geweigerd worden (bijv. energiebesparing); dan blijft de poster staan.
    video.play().catch(() => {});
  }, [videoSrc]);

  return (
    <>
      <picture className="contents">
        {mobileImg && (
          <source
            media={MOBIEL}
            srcSet={mobileImg.srcSet}
            sizes={mobileImg.sizes}
          />
        )}
        <img {...desktopImg} alt="" aria-hidden className={className} />
      </picture>
      {videoSrc && (
        <video
          ref={videoRef}
          src={videoSrc}
          muted
          loop
          playsInline
          autoPlay
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
    </>
  );
}
