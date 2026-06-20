"use client";

import { useState } from "react";
import { DashboardNav } from "@/components/ui/DashboardNav";

const REPOS = [
  {
    id: 1,
    category: "UI Components",
    name: "shadcn/ui",
    url: "https://github.com/shadcn-ui/ui",
    description: "Biblioteca de componentes base. Copie o código bruto e peça ao Claude variações.",
  },
  {
    id: 2,
    category: "UI Components",
    name: "shadcn-ui/taxonomy",
    url: "https://github.com/shadcn-ui/taxonomy",
    description: "App real completo pelo criador do Shadcn: auth, assinaturas e dashboard.",
  },
  {
    id: 3,
    category: "UI Components",
    name: "tailwindlabs/tailwindcss",
    url: "https://github.com/tailwindlabs/tailwindcss",
    description: "Repositório oficial — extraia configs avançadas e passe como contexto ao Claude.",
  },
  {
    id: 4,
    category: "Prompts & IA",
    name: "anthropics/anthropic-cookbook",
    url: "https://github.com/anthropics/anthropic-cookbook",
    description: "Receitas oficiais da Anthropic: prompts complexos, Artifacts e código limpo.",
  },
  {
    id: 5,
    category: "Prompts & IA",
    name: "danielmiessler/fabric",
    url: "https://github.com/danielmiessler/fabric",
    description: "Framework open-source de prompts com patterns para design de sistemas e revisão de código.",
  },
  {
    id: 6,
    category: "Boilerplates",
    name: "shadcn-ui/next-template",
    url: "https://github.com/shadcn-ui/next-template",
    description: "Modelo padrão Next.js + Tailwind + Shadcn. Dê a estrutura ao Claude e peça novas páginas.",
  },
  {
    id: 7,
    category: "Boilerplates",
    name: "radix-vue/shadcn-vue",
    url: "https://github.com/radix-vue/shadcn-vue",
    description: "Port oficial do Shadcn para Vue.js / Nuxt.",
  },
];

const CATEGORIES = ["TODOS", "UI Components", "Prompts & IA", "Boilerplates"];

export default function Repositorios() {
  const [active, setActive] = useState("TODOS");

  const filtered = active === "TODOS" ? REPOS : REPOS.filter((r) => r.category === active);

  return (
    <div className="bg-black text-[var(--on-background)] min-h-screen flex flex-col">
      <DashboardNav />

      <main className="flex-grow pt-24 pb-16 px-4 md:px-8 max-w-[var(--spacing-container-max)] mx-auto w-full">
        {/* HERO */}
        <header className="mb-12 flex flex-col items-start gap-4 relative">
          <div className="absolute right-0 top-0 border border-white/10 bg-[#0E0E0E] px-4 py-2 hidden md:flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
            <span className="font-mono text-[#10B981] text-[10px] uppercase tracking-widest">
              {REPOS.length} REPOS // CURADO
            </span>
          </div>

          <p className="font-mono text-[#10B981] text-xs uppercase tracking-widest">
            REFERÊNCIAS // REPOSITÓRIOS
          </p>
          <h1 className="text-4xl md:text-6xl font-bold uppercase leading-none tracking-tight">
            BASE DE
            <br />
            <span className="text-[#10B981]">CONHECIMENTO</span>
          </h1>
          <p className="text-white/50 text-sm md:text-base max-w-lg">
            Curadoria de código e templates para alimentar o Claude com contexto de alta qualidade antes de cada sessão.
          </p>
        </header>

        {/* FILTROS */}
        <div className="flex flex-wrap gap-2 mb-10 border-b border-[#393939] pb-6">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`font-mono text-[11px] uppercase tracking-widest px-4 py-2 border transition-colors ${
                active === cat
                  ? "border-[#10B981] text-[#10B981] bg-[#10B981]/10"
                  : "border-[#393939] text-white/40 hover:border-white/30 hover:text-white/60"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((repo) => (
            <a
              key={repo.id}
              href={repo.url}
              target="_blank"
              rel="noopener noreferrer"
              className="panel group flex flex-col gap-3 p-5 border border-[#393939] hover:border-[#10B981] transition-colors bg-[#131313]"
            >
              <p className="font-mono text-[#10B981] text-[10px] uppercase tracking-widest">
                {repo.category}
              </p>
              <h2 className="font-mono text-white text-sm font-semibold tracking-tight">
                {repo.name}
              </h2>
              <p className="text-white/50 text-xs leading-relaxed flex-1">
                {repo.description}
              </p>
              <div className="border-t border-[#393939] pt-3 mt-1">
                <span className="font-mono text-[10px] uppercase tracking-widest text-white/30 group-hover:text-[#10B981] transition-colors">
                  ABRIR NO GITHUB →
                </span>
              </div>
            </a>
          ))}
        </div>
      </main>
    </div>
  );
}
