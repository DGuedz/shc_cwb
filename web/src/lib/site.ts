export const SITE_NAME = "Street Hub Connect";
export const SITE_DESCRIPTION =
  "Plataforma B2B para descoberta, match e operacionalizacao de talentos independentes.";

export function getSiteUrl() {
  const publicUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim();

  if (publicUrl) {
    return publicUrl.replace(/\/+$/, "");
  }

  const vercelUrl = process.env.VERCEL_URL?.trim();

  if (vercelUrl) {
    return `https://${vercelUrl.replace(/\/+$/, "")}`;
  }

  return "http://localhost:3000";
}

export function absoluteUrl(path = "/") {
  const base = getSiteUrl();
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;

  return new URL(normalizedPath, base).toString();
}
