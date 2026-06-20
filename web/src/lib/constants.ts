export const APP_NAME = "Street Hub Connect";

export type AppRoute =
  | "/"
  | "/catalogo"
  | "/dashboard/matchboard"
  | "/dashboard/acordos"
  | "/dashboard/dossie"
  | "/onboarding/artista"
  | "/onboarding/contratante"
  | "/oportunidades/criar"
  | "/sign-in";

export type ShellNavItem = {
  href: AppRoute | `#${string}`;
  label: string;
};

export const PUBLIC_NAV_LINKS: readonly ShellNavItem[] = [
  { href: "#overview", label: "Overview" },
  { href: "#artists", label: "Artistas" },
  { href: "#partners", label: "Contratantes" },
  { href: "/catalogo", label: "Catalogo" },
  { href: "/sign-in", label: "Acesso" },
];

export const DASHBOARD_LINKS: readonly ShellNavItem[] = [
  { href: "/dashboard/matchboard", label: "Matchboard" },
  { href: "/dashboard/acordos", label: "Acordos" },
  { href: "/dashboard/dossie", label: "Dossie" },
] as const;

export const PROTECTED_MATCHER = [
  "/dashboard",
  "/onboarding/artista",
  "/onboarding/contratante",
];

export const DEFAULT_REDIRECT_BY_ROLE: Record<string, AppRoute> = {
  artist: "/dashboard/dossie",
  contractor: "/dashboard/matchboard",
};
