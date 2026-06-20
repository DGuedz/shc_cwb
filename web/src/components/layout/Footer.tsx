import Link from "next/link";
import type { Route } from "next";

const footerLinks: Array<{ href: Route; label: string }> = [
  { href: "/quem-somos", label: "Quem Somos" },
  { href: "/pitchdeck", label: "Pitchdeck" },
  { href: "/catalogo", label: "Artistas" },
  { href: "/news", label: "News" },
];

export function Footer() {
  return (
    <footer className="w-full border-t border-[#1A1A1A] bg-black text-white">
      <div className="max-w-[var(--spacing-container-max,1400px)] mx-auto px-4 md:px-8 py-8">
        <div className="grid gap-8 md:grid-cols-[1fr_auto_1fr] md:items-center">
          <div className="flex flex-col gap-2">
            <Link
              href="/"
              className="font-archivo text-sm font-bold tracking-tighter uppercase leading-none hover:text-[#10B981] transition-colors w-fit"
            >
              STREET HUB CONNECT
            </Link>
            <p className="font-mono text-[10px] uppercase tracking-widest text-neutral-500">
              Curadoria, booking e governanca para economia criativa.
            </p>
          </div>

          <nav
            aria-label="Links do rodape"
            className="flex flex-wrap justify-start md:justify-center gap-x-5 gap-y-3 font-mono text-[9px] uppercase tracking-widest text-neutral-500"
          >
            {footerLinks.map((link) => (
              <Link key={link.href} href={link.href} className="hover:text-white transition-colors">
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex flex-col items-start md:items-end gap-2 font-mono text-[10px] uppercase tracking-widest text-neutral-500">
            <span>© 2026 ASTEPAM</span>
            <span className="text-[#10B981]">Sistema online</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
