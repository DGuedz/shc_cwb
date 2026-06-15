export function slugify(value: string) {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .replace(/-{2,}/g, "-");
}

export function buildArtistSlug(stageName: string, id: string) {
  const base = slugify(stageName) || "talent";
  const suffix = id.slice(0, 8).toLowerCase();

  return `${base}-${suffix}`;
}
