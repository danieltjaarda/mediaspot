import { readFile } from "node:fs/promises";
import { join } from "node:path";

import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt =
  "Mediaspot, videograaf voor bruiloften, events en bedrijven";

const fontDir = join(process.cwd(), "src/assets/fonts");

export default async function OpengraphImage() {
  const [regular, semibold] = await Promise.all([
    readFile(join(fontDir, "Geist-Regular.ttf")),
    readFile(join(fontDir, "Geist-SemiBold.ttf")),
  ]);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#1d1d1f",
          fontFamily: "Geist",
          padding: 80,
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: -260,
            left: 240,
            width: 900,
            height: 620,
            borderRadius: 999,
            background: "#fc6a2f",
            opacity: 0.35,
            filter: "blur(140px)",
          }}
        />

        <div
          style={{
            display: "flex",
            alignItems: "center",
            fontSize: 40,
            fontWeight: 600,
            letterSpacing: -1,
            color: "#ffffff",
          }}
        >
          mediasp
          <span style={{ color: "#fc6a2f" }}>o</span>t
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: 68,
              fontWeight: 600,
              lineHeight: 1.1,
              letterSpacing: -2,
              color: "#ffffff",
              maxWidth: 900,
            }}
          >
            Jouw verhaal, cinematisch vastgelegd.
          </div>
          <div
            style={{
              marginTop: 28,
              fontSize: 32,
              color: "rgba(255,255,255,0.72)",
            }}
          >
            Bruiloften · Evenementen · Bedrijfsvideo · Social content
          </div>
          <div
            style={{
              marginTop: 40,
              display: "flex",
              alignItems: "center",
              gap: 16,
              fontSize: 28,
              color: "#fc6a2f",
              fontWeight: 600,
            }}
          >
            mediaspot.nl
            <span style={{ color: "rgba(255,255,255,0.35)" }}>|</span>
            <span
              style={{ color: "rgba(255,255,255,0.72)", fontWeight: 400 }}
            >
              Heerenveen
            </span>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Geist", data: regular, weight: 400, style: "normal" },
        { name: "Geist", data: semibold, weight: 600, style: "normal" },
      ],
    },
  );
}
