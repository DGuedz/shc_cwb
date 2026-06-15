import { ImageResponse } from "next/og";

import { SITE_DESCRIPTION, SITE_NAME } from "@/lib/site";

export const alt = `${SITE_NAME} Open Graph`;
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "100%",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "48px",
          background: "#031427",
          color: "#d3e4fe",
          fontFamily: "sans-serif",
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          <div style={{ display: "flex", fontSize: 24, letterSpacing: "0.35em", color: "#4edea3" }}>
            BRUTALISMO INSTITUCIONAL
          </div>
          <div style={{ display: "flex", maxWidth: "860px", fontSize: 92, fontWeight: 800, lineHeight: 0.92 }}>
            {SITE_NAME}
          </div>
        </div>
        <div style={{ display: "flex", maxWidth: "900px", fontSize: 32, lineHeight: 1.3 }}>{SITE_DESCRIPTION}</div>
      </div>
    ),
    size,
  );
}
