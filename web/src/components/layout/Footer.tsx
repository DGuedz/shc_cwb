import Link from "next/link";
import type { Route } from "next";

const navPlataforma: Array<{ href: Route; label: string }> = [
  { href: "/catalogo", label: "Catálogo" },
  { href: "/waitlist", label: "Associe-se" },
  { href: "/sign-in", label: "Entrar" },
  { href: "/demo?role=artist" as Route, label: "Demo Artista" },
  { href: "/demo?role=contractor" as Route, label: "Demo Contratante" },
];

const navInstitucional: Array<{ href: Route; label: string }> = [
  { href: "/quem-somos", label: "Quem Somos" },
  { href: "/pitchdeck", label: "Pitchdeck" },
  { href: "/news", label: "News" },
];

const navDocumentos: Array<{ href: Route; label: string }> = [
  { href: "/documentos", label: "Documentação" },
  { href: "/documentos#estatuto", label: "Estatuto Social" },
  { href: "/documentos#licencas", label: "Licenças" },
  { href: "/privacidade", label: "Privacidade" },
  { href: "/termos", label: "Termos de Uso" },
  { href: "/contato", label: "Contato" },
];

const socialLinks = [
  { href: "https://github.com/DGuedz/shc_cwb", label: "GitHub" },
  { href: "https://instagram.com/dguedz", label: "Instagram" },
  { href: "https://x.com/dg_doublegreen", label: "X / Twitter" },
  { href: "https://youtube.com/@dguedz", label: "YouTube" },
];

export function Footer() {
  return (
    <footer className="w-full border-t border-[#1A1A1A] bg-black text-white">

      {/* BODY */}
      <div className="max-w-[var(--spacing-container-max,1400px)] mx-auto px-4 md:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr_1fr] gap-10 md:gap-8">

          {/* COLUNA 1 — Identidade */}
          <div className="flex flex-col gap-5">
            <div>
              <Link
                href="/"
                className="font-archivo text-sm font-bold tracking-tighter uppercase leading-none hover:text-[#10B981] transition-colors"
              >
                STREET HUB CONNECT
              </Link>
              <p className="font-mono text-[9px] uppercase tracking-[0.3em] text-neutral-600 mt-1">
                Filha da ASTEPAM
              </p>
            </div>

            <p className="font-mono text-[10px] text-neutral-500 leading-relaxed max-w-xs">
              Associação de Curadoria, Booking e Governança para a Economia Criativa. Pessoa jurídica de direito privado, sem fins econômicos.
            </p>

            <div className="flex flex-col gap-1 font-mono text-[10px] text-neutral-600">
              <span>Sede: Curitiba, Paraná — Brasil</span>
              <span>CNPJ: <span className="text-neutral-500">em registro</span></span>
              <span>Fundação: 20 de junho de 2026</span>
            </div>

            <div className="flex flex-wrap gap-3 mt-1">
              {socialLinks.map((s) => (
                <a
                  key={s.href}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-[9px] uppercase tracking-widest text-neutral-600 hover:text-[#10B981] transition-colors"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          {/* COLUNA 2 — Plataforma */}
          <FooterNav title="Plataforma" links={navPlataforma} />

          {/* COLUNA 3 — Institucional */}
          <FooterNav title="Institucional" links={navInstitucional} />

          {/* COLUNA 4 — Documentos */}
          <FooterNav title="Documentos" links={navDocumentos} />
        </div>
      </div>

      {/* BASE */}
      <div className="border-t border-[#111111]">
        <div className="max-w-[var(--spacing-container-max,1400px)] mx-auto px-4 md:px-8 py-5">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">

            <p className="font-mono text-[9px] uppercase tracking-widest text-neutral-700">
              © 2026 Street Hub Connect · Filha da{" "}
              <span className="text-neutral-600">ASTEPAM</span>{" "}
              · Associação sem fins econômicos
            </p>

            <div className="flex flex-wrap gap-4 font-mono text-[9px] uppercase tracking-widest text-neutral-700">
              <Link href="/documentos#licencas" className="hover:text-neutral-400 transition-colors">
                Código: MIT
              </Link>
              <Link href="/documentos#licencas" className="hover:text-neutral-400 transition-colors">
                Conteúdo: CC BY-NC-ND 4.0
              </Link>
              <a
                href="https://github.com/DGuedz/shc_cwb"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-neutral-400 transition-colors"
              >
                Código Aberto
              </a>
            </div>

          </div>
        </div>
      </div>

    </footer>
  );
}

function FooterNav({ title, links }: { title: string; links: Array<{ href: Route; label: string }> }) {
  return (
    <nav aria-label={`Links — ${title}`} className="flex flex-col gap-3">
      <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-neutral-600 border-b border-[#1A1A1A] pb-2">
        {title}
      </span>
      <ul className="flex flex-col gap-2">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="font-mono text-[10px] text-neutral-500 hover:text-white transition-colors"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
