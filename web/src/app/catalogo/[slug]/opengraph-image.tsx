import { ImageResponse } from "next/og";

import { getPublicArtistBySlug } from "@/lib/data";

export const alt = "Perfil publico de artista";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

type ArtistImageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function ArtistOpenGraphImage({ params }: ArtistImageProps) {
  const { slug } = await params;
  const artist = await getPublicArtistBySlug(slug);
  const stageName = artist?.stageName ?? "Perfil publico";
  const subtitle = artist ? `${artist.genre} | ${artist.city}/${artist.state}` : "Street Hub Connect";
  const feeLine = artist
    ? `Faixa inicial R$ ${artist.minFee.toLocaleString("pt-BR")} | Ideal R$ ${artist.idealFee.toLocaleString("pt-BR")}`
    : "Descoberta B2B de talentos";

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
          <div style={{ display: "flex", fontSize: 20, letterSpacing: "0.35em", color: "#4edea3" }}>
            PUBLIC PROFILE
          </div>
          <div style={{ display: "flex", maxWidth: "940px", fontSize: 92, fontWeight: 800, lineHeight: 0.92 }}>
            {stageName}
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "18px", maxWidth: "900px" }}>
          <div style={{ display: "flex", fontSize: 32, lineHeight: 1.2 }}>{subtitle}</div>
          <div style={{ display: "flex", fontSize: 24, color: "#4edea3" }}>{feeLine}</div>
        </div>
      </div>
    ),
    size,
  );
}
