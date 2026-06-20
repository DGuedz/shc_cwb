'use client';

import Link from "next/link";

import type { Artist, Deal, DealLane, Match, Opportunity } from "@/types/domain";

const laneLabels: Record<DealLane, string> = {
  analisando: "Analisando",
  aprovacao_artista: "Aprovacao artista",
  contrato: "Contrato",
  liquidacao: "Liquidacao",
  concluido: "Concluido",
};

export function ArtistGrid({ artists }: { artists: Artist[] }) {
  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
      {artists.map((artist) => (
        <article key={artist.id} className="panel flex flex-col gap-6">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h3 className="font-heading text-3xl font-bold uppercase tracking-[-0.04em]">{artist.stageName}</h3>
              <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.24em] text-white/55">
                {artist.city} / {artist.state} | {artist.genre}
              </p>
            </div>
            <span className="border border-[var(--accent)] px-2 py-1 font-mono text-[10px] uppercase tracking-[0.24em] text-[var(--accent)]">
              verified
            </span>
          </div>
          <p className="text-white/72">{artist.bio}</p>
          <div className="flex flex-wrap gap-2">
            {artist.tags.map((tag) => (
              <span key={tag} className="border border-white/10 px-2 py-1 font-mono text-[10px] uppercase tracking-[0.24em] text-white/70">
                {tag}
              </span>
            ))}
          </div>
          <div className="grid grid-cols-2 gap-4 border-t border-white/10 pt-4">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-white/50">Minimo</p>
              <p className="mt-2 font-mono text-2xl">R$ {artist.minFee.toLocaleString("pt-BR")}</p>
            </div>
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-white/50">Ideal</p>
              <p className="mt-2 font-mono text-2xl text-[var(--accent)]">
                R$ {artist.idealFee.toLocaleString("pt-BR")}
              </p>
            </div>
          </div>
          <div className="border-t border-white/10 pt-4">
            <Link
              href={`/catalogo/${artist.slug}`}
              className="inline-flex border border-[var(--accent)] px-4 py-3 font-mono text-xs uppercase tracking-[0.24em] text-[var(--accent)] transition-colors hover:bg-[var(--accent)]/10"
            >
              abrir perfil publico
            </Link>
          </div>
        </article>
      ))}
    </div>
  );
}

export function PublicArtistProfile({ artist }: { artist: Artist }) {
  return (
    <div className="space-y-8">
      <section className="panel grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-[var(--accent)]">
            Public profile
          </p>
          <h1 className="mt-4 font-heading text-5xl font-bold uppercase tracking-[-0.05em] md:text-7xl">
            {artist.stageName}
          </h1>
          <p className="mt-4 font-mono text-[11px] uppercase tracking-[0.24em] text-white/55">
            {artist.city}/{artist.state} | {artist.genre}
          </p>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-white/72">{artist.bio}</p>
          <div className="mt-8 flex flex-wrap gap-2">
            {artist.tags.map((tag) => (
              <span key={tag} className="border border-white/10 px-3 py-2 font-mono text-[10px] uppercase tracking-[0.24em] text-white/70">
                {tag}
              </span>
            ))}
          </div>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="border border-white/10 p-5">
            <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-white/50">Cache minimo</p>
            <p className="mt-3 font-mono text-3xl">R$ {artist.minFee.toLocaleString("pt-BR")}</p>
          </div>
          <div className="border border-white/10 p-5">
            <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-white/50">Cache ideal</p>
            <p className="mt-3 font-mono text-3xl text-[var(--accent)]">
              R$ {artist.idealFee.toLocaleString("pt-BR")}
            </p>
          </div>
          <div className="border border-white/10 p-5 sm:col-span-2">
            <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-white/50">Visibilidade publica</p>
            <p className="mt-3 text-white/72">
              Perfil publico com dados essenciais para descoberta inicial. Contratos, liquidação e detalhes
              sensiveis continuam restritos aos fluxos protegidos.
            </p>
          </div>
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="panel">
          <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-[var(--accent)]">
            Sinais operacionais
          </p>
          <div className="mt-6 space-y-4">
            <DataRow label="Status" value={artist.verified ? "Perfil validado" : "Em analise"} />
            <DataRow label="Cidade-base" value={`${artist.city}/${artist.state}`} />
            <DataRow label="Disciplina" value={artist.genre} />
          </div>
        </div>
        <div className="panel">
          <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-white/50">Proxima acao</p>
          <h2 className="mt-4 font-heading text-4xl font-bold uppercase tracking-[-0.05em]">
            Entrar no fluxo protegido
          </h2>
          <p className="mt-4 max-w-3xl text-white/72">
            Para negociar, aprovar match e operar contratos com segurança, o contratante entra pelas rotas
            autenticadas da plataforma.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link href="/sign-in" className="primary-button">
              acessar plataforma
            </Link>
            <Link
              href="/catalogo"
              className="inline-flex items-center justify-center border border-white/15 px-5 py-4 font-mono text-xs uppercase tracking-[0.22em] text-white/75 hover:border-white/35 hover:text-white"
            >
              voltar ao catalogo
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export function MatchBoard({
  opportunity,
  entries,
}: {
  opportunity: Opportunity;
  entries: Array<Match & { artist: Artist & { exp?: number } }>;
}) {
  // Simulando o Motor de Matchmaking: Os artistas que chegam aqui já foram pré-selecionados pelo Agente Curador
  return (
    <div className="flex flex-col gap-8">
      {/* Resumo da Oportunidade */}
      <div className="bg-[#0E0E0E] border border-[#393939] p-6">
        <div className="flex justify-between items-start mb-4">
          <div>
            <span className="font-mono text-[10px] text-[#10B981] bg-[#10B981]/10 px-2 py-1 uppercase border border-[#10B981]/30">ACTIVE OPPORTUNITY</span>
            <h2 className="font-archivo text-3xl font-bold uppercase tracking-tight text-white mt-4">{opportunity.title}</h2>
            <p className="font-mono text-xs text-neutral-400 mt-2">ID: SHC-OPP-{opportunity.id.slice(0, 8).toUpperCase()}</p>
          </div>
          <div className="text-right">
            <span className="font-mono text-[10px] text-neutral-500 uppercase tracking-widest">COMPANY ID</span>
            <p className="font-mono text-sm text-[#10B981]">{opportunity.companyId.slice(0, 8).toUpperCase()}</p>
          </div>
        </div>
      </div>

      {/* Painel do Agente Curador */}
      <div className="bg-[#131313] border-l-4 border-[#10B981] p-4 flex items-center gap-4">
        <div className="w-10 h-10 border border-[#393939] bg-black flex items-center justify-center flex-shrink-0">
          <span className="material-symbols-outlined text-[#10B981] text-lg">smart_toy</span>
        </div>
        <div>
          <h4 className="font-archivo font-bold text-white uppercase text-sm">AGENTE CURADOR (SHC_AI)</h4>
          <p className="font-mono text-xs text-neutral-400 mt-1">
            Varredura concluída. 3 artistas compatíveis com seu budget e parâmetros geográficos. Notificações cross-platform prontas para disparo.
          </p>
        </div>
      </div>

      {/* Pipeline de Matchmaking */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {entries.map((entry) => (
          <div key={entry.id} className="bg-[#0E0E0E] border border-[#393939] p-6 flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-archivo text-xl font-bold uppercase text-white">{entry.artist.stageName}</h3>
                <span className="font-mono text-sm font-bold text-[#10B981]">{entry.affinityScore}% MATCH</span>
              </div>
              <div className="flex flex-col gap-2 font-mono text-xs text-neutral-400 mb-6">
                <div className="flex justify-between border-b border-[#393939] pb-2">
                  <span>DISCIPLINA</span>
                  <span className="text-white">{entry.artist.genre}</span>
                </div>
                <div className="flex justify-between border-b border-[#393939] pb-2">
                  <span>EXP (SAÚDE)</span>
                  <span className="text-[#10B981]">{entry.artist.exp || 1050}</span>
                </div>
                <div className="flex justify-between pb-2">
                  <span>CACHÊ MIN</span>
                  <span className="text-white">R$ {entry.artist.minFee.toLocaleString("pt-BR")}</span>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col gap-2 mt-auto">
              <button
                onClick={() => window.location.assign(`/dashboard/acordo?matchId=${encodeURIComponent(entry.id)}`)}
                className="w-full bg-[#10B981]/10 border border-[#10B981] hover:bg-[#10B981] text-[#10B981] hover:text-black uppercase font-bold py-3 transition-colors tracking-widest font-archivo text-xs rounded-none"
              >
                Notificar & Assinar
              </button>
              <button className="w-full bg-transparent border border-[#393939] hover:border-white text-neutral-400 hover:text-white uppercase font-bold py-3 transition-colors tracking-widest font-archivo text-xs rounded-none">
                Ver Dossiê ZK
              </button>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}

export function DealsKanban({ deals }: { deals: Deal[] }) {
  const lanes: DealLane[] = ["analisando", "aprovacao_artista", "contrato", "liquidacao", "concluido"];

  return (
    <div className="grid gap-6 xl:grid-cols-5">
      {lanes.map((lane) => {
        const laneDeals = deals.filter((deal) => deal.lane === lane);

        return (
          <section key={lane} className="panel min-h-96">
            <div className="mb-4 flex items-center justify-between border-b border-white/10 pb-4">
              <div>
                <h2 className="font-heading text-2xl font-bold uppercase tracking-[-0.04em]">{laneLabels[lane]}</h2>
                <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-white/50">
                  {laneDeals.length} itens
                </p>
              </div>
            </div>
            <div className="space-y-4">
              {laneDeals.map((deal) => (
                <article key={deal.id} className="border border-white/10 bg-black/50 p-4">
                  <h3 className="font-heading text-2xl font-bold uppercase tracking-[-0.04em]">{deal.title}</h3>
                  <p className="mt-2 text-sm text-white/72">{deal.counterpart}</p>
                  <div className="mt-4 flex items-end justify-between gap-4">
                    <div>
                      <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-white/50">Status</p>
                      <p className="mt-2 font-mono text-sm text-[var(--accent)]">{deal.status}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-white/50">Valor</p>
                      <p className="mt-2 font-mono text-xl">R$ {deal.value.toLocaleString("pt-BR")}</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
}

import { ArtistIDCard } from "./ui/ArtistIDCard";
import { ActivityHeatmap } from "./ui/ActivityHeatmap";

export function DossierPanel({ artist }: { artist: Artist & { exp?: number, health?: 'OPTIMAL' | 'WARNING' | 'REHAB' } }) {
  const healthStatus = artist.health || 'OPTIMAL';

  return (
    <div className="flex flex-col gap-6">

      {/* ── HERO: tipografia pura, sem card ── */}
      <div className="bg-[#0E0E0E] border border-[#393939] p-6 md:p-10 relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#393939_1px,transparent_1px),linear-gradient(to_bottom,#393939_1px,transparent_1px)] bg-[size:2rem_2rem] opacity-10 pointer-events-none" />
        <div className="relative z-10 flex flex-col gap-6">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <div>
              <p className="font-mono text-[10px] text-[#10B981] uppercase tracking-widest mb-2">SHC_PASS // MEMBRO ATIVO</p>
              <h1 className="font-archivo text-5xl md:text-6xl font-bold uppercase tracking-tighter text-white leading-none">
                {artist.stageName}
              </h1>
            </div>
            <div className={`self-start sm:self-auto font-mono text-[10px] px-3 py-1.5 uppercase border ${
              healthStatus === 'OPTIMAL'
                ? "text-[#10B981] bg-[#10B981]/10 border-[#10B981]/30"
                : healthStatus === 'WARNING'
                  ? "text-yellow-500 bg-yellow-500/10 border-yellow-500/30"
                  : "text-red-500 bg-red-500/10 border-red-500/30"
            }`}>
              {healthStatus === 'OPTIMAL' ? 'perfil em dia' : healthStatus === 'WARNING' ? 'precisa de atividade' : 'perfil em revisao'}
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-px border border-[#393939] bg-[#393939]">
            {[
              { label: "Cidade base", value: `${artist.city}, ${artist.state}` },
              { label: "Cache inicial", value: `R$ ${artist.minFee.toLocaleString("pt-BR")}`, accent: true },
              { label: "Cache ideal", value: `R$ ${artist.idealFee.toLocaleString("pt-BR")}`, accent: true },
              { label: "Associacao", value: "Ativa", pulse: true },
            ].map(({ label, value, accent, pulse }) => (
              <div key={label} className="bg-[#0E0E0E] px-4 py-4 flex flex-col gap-1">
                <span className="font-mono text-[9px] text-neutral-500 uppercase tracking-widest">{label}</span>
                <div className="flex items-center gap-2">
                  {pulse && <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-pulse flex-shrink-0" />}
                  <span className={`font-mono text-sm ${accent ? "text-[#10B981]" : "text-white"}`}>{value}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── BODY: conteúdo (2/3) + sidebar com card (1/3) ── */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">

        {/* Coluna principal */}
        <div className="lg:col-span-2 flex flex-col gap-6 min-w-0">

          {/* Bio */}
          <div className="bg-[#131313] border border-[#393939] p-6">
            <h3 className="font-mono text-[10px] text-[#10B981] uppercase tracking-widest mb-3">Sobre o artista</h3>
            <p className="font-archivo text-sm text-neutral-300 leading-relaxed">{artist.bio}</p>
          </div>

          {/* Histórico de atividade */}
          <div className="bg-[#0E0E0E] border border-[#393939] p-6">
            <div className="flex justify-between items-center border-b border-[#393939] pb-4 mb-6">
              <h3 className="font-archivo text-xl font-bold uppercase tracking-tight text-white">Historico de atividade</h3>
              <div className="flex items-center gap-2">
                <span className="font-mono text-2xl font-bold text-[#10B981]">{artist.exp || 1250}</span>
                <span className="font-mono text-[9px] text-neutral-500 uppercase">pontos</span>
              </div>
            </div>
            <ActivityHeatmap artistId={artist.id} exp={artist.exp || 1250} />
          </div>

          {/* Apresentações + Canais */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-[#131313] border border-[#393939] p-6">
              <h3 className="font-mono text-[10px] text-neutral-500 uppercase tracking-widest mb-4">Apresentacoes</h3>
              <ul className="font-mono text-xs text-neutral-300 space-y-3">
                {[
                  { name: "BASEMENT SESSIONS", local: "BERLIM" },
                  { name: "VOID FESTIVAL", local: "LONDRES" },
                  { name: "Midia: Boiler Room", local: null, verified: true },
                ].map(({ name, local, verified }) => (
                  <li key={name} className="flex justify-between border-b border-[#393939] pb-2 last:border-0 last:pb-0">
                    <span>{name}</span>
                    <span className={verified ? "text-[#10B981]" : "text-neutral-500"}>{verified ? "validado" : local}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-[#131313] border border-[#393939] p-6">
              <h3 className="font-mono text-[10px] text-neutral-500 uppercase tracking-widest mb-4">Canais verificados</h3>
              <div className="flex flex-col gap-2">
                {["SPOTIFY", "INSTAGRAM", "SOUNDCLOUD"].map((n) => (
                  <div key={n} className="flex justify-between items-center bg-[#0E0E0E] border border-[#393939] px-3 py-2">
                    <span className="font-mono text-xs text-white">{n}</span>
                    <span className="text-[#10B981] text-sm">✓</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar: card + contratação */}
        <div className="flex flex-col gap-6 min-w-0">

          {/* ID Card — espaço dedicado */}
          <div className="bg-[#0E0E0E] border border-[#393939] p-6 flex flex-col items-center gap-4">
            <p className="font-mono text-[10px] text-neutral-500 uppercase tracking-widest self-start">Carteira do membro</p>
            <div className="w-full max-w-[300px] mx-auto">
              <ArtistIDCard artist={artist} />
            </div>
          </div>

          {/* Contratação */}
          <div className="bg-[#0E0E0E] border border-[#393939] flex flex-col">
            <div className="p-4 border-b border-[#393939] flex justify-between items-center bg-[#131313]">
              <h3 className="font-mono text-[10px] text-white uppercase tracking-widest">Para contratacao</h3>
              <span className="font-mono text-[9px] text-neutral-500 border border-[#393939] px-2 py-0.5">restrito</span>
            </div>
            <div className="p-5 flex flex-col gap-4">
              <p className="font-archivo text-xs text-neutral-400 leading-relaxed">
                Rider, mapa de palco e logistica ficam protegidos. O material entra no acordo quando a contratacao avancar.
              </p>
              <div className="flex flex-col gap-2">
                {[
                  "Necessidades do show",
                  "Mapa de palco",
                  "Logistica",
                ].map((item) => (
                  <div key={item} className="flex justify-between items-center font-mono text-xs text-neutral-300 border-b border-[#393939] pb-2 last:border-0 last:pb-0">
                    <span>{item}</span>
                    <span className="text-[#10B981]">✓</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="p-5 border-t border-[#393939]">
              <button className="w-full relative overflow-hidden bg-gradient-to-b from-[#10B981]/20 to-[#10B981]/5 border border-[#10B981]/40 hover:bg-[#10B981]/20 text-[#10B981] hover:text-white uppercase font-bold py-4 transition-all duration-300 tracking-widest font-archivo text-xs rounded-none group flex justify-center items-center">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                <span className="relative z-10">PREPARAR ACORDO</span>
              </button>
            </div>
          </div>

          {/* Ações da associação */}
          <div className="flex flex-col gap-3">
            <button className="w-full bg-[#10B981]/10 border border-[#10B981] hover:bg-[#10B981] text-[#10B981] hover:text-black uppercase font-bold py-3 transition-colors tracking-widest font-archivo text-xs rounded-none">
              Ver area da associacao
            </button>
            <button className="w-full bg-transparent border border-[#393939] hover:border-white text-neutral-400 hover:text-white uppercase font-bold py-3 transition-colors tracking-widest font-archivo text-xs rounded-none">
              Baixar material de apresentacao
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}

function DataRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="grid gap-1 border-b border-white/10 pb-4 md:grid-cols-[0.9fr_1.1fr]">
      <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-white/50">{label}</p>
      <p className="font-mono text-lg text-white">{value}</p>
    </div>
  );
}
