"use client";

import { useState } from "react";

import SocialVideoCard from "@/components/SocialVideoCard";

type SocialVideo = {
  src: string;
  poster: string;
  views: string;
  label: string;
};

export default function SocialMarquee({ videos }: { videos: SocialVideo[] }) {
  const [playingIds, setPlayingIds] = useState<Set<string>>(new Set());

  function handlePlayingChange(id: string, playing: boolean) {
    setPlayingIds((prev) => {
      const next = new Set(prev);
      if (playing) {
        next.add(id);
      } else {
        next.delete(id);
      }
      return next;
    });
  }

  return (
    <div className="social-marquee overflow-hidden">
      <div
        className={`social-marquee-track flex w-max ${
          playingIds.size > 0 ? "is-paused" : ""
        }`}
      >
        {/* Twee identieke kopieën voor een naadloze loop */}
        {[0, 1].map((copy) => (
          <div key={copy} className="flex gap-3 pr-3 sm:gap-4 sm:pr-4">
            {videos.map((v) => {
              const id = `${copy}-${v.src}`;
              return (
                <div key={id} className="w-40 sm:w-48 lg:w-52">
                  <SocialVideoCard
                    {...v}
                    onPlayingChange={(playing) =>
                      handlePlayingChange(id, playing)
                    }
                  />
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
}
