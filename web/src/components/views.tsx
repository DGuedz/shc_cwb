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
  entries: Array<Match & { artist: Artist }>;
}) {
  const [selectedMatch, setSelectedMatch] = useState<typeof entries[0] | null>(null);

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
                  <span className="text-[#10B981]">{(entry.artist as any).exp || 1050}</span>
                </div>
                <div className="flex justify-between pb-2">
                  <span>CACHÊ MIN</span>
                  <span className="text-white">R$ {entry.artist.minFee.toLocaleString("pt-BR")}</span>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col gap-2 mt-auto">
              <button 
                onClick={() => setSelectedMatch(entry)}
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

      {/* Modal: Tripartite Handshake / Legal Agent */}
      {selectedMatch && (
        <TripartiteHandshake 
          artistName={selectedMatch.artist.stageName}
          artistExp={(selectedMatch.artist as any).exp || 1050}
          companyName="CONTRATANTE VERIFICADO" // No ambiente real, vem da session da empresa logada
          opportunityTitle={opportunity.title}
          budget={(opportunity as any).budget || 50000}
          onClose={() => setSelectedMatch(null)}
        />
      )}
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
import { TripartiteHandshake } from "./ui/TripartiteHandshake";
import { useState } from "react";

export function DossierPanel({ artist }: { artist: Artist & { exp?: number, health?: 'OPTIMAL' | 'WARNING' | 'REHAB' } }) {
  return (
    <div className="flex flex-col gap-6">
      {/* Header: Identity & Status */}
      <div className="bg-[#0E0E0E] border border-[#393939] p-6 md:p-12 flex flex-col md:flex-row gap-12 items-start md:items-center relative overflow-hidden">
        {/* Fundo com Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#393939_1px,transparent_1px),linear-gradient(to_bottom,#393939_1px,transparent_1px)] bg-[size:2rem_2rem] opacity-20 pointer-events-none" />
        
        {/* Left Col: 3D ID Card */}
        <div className="w-full md:w-auto relative z-10 flex-shrink-0">
          <ArtistIDCard artist={artist} />
        </div>

        {/* Right Col: High Level Metadata & Governance */}
        <div className="flex flex-col gap-6 relative z-10 flex-1">
          <div>
            <h1 className="font-archivo text-4xl md:text-5xl font-bold uppercase tracking-tight text-white">{artist.stageName}</h1>
            <p className="font-mono text-sm text-neutral-400 mt-2 border-l-2 border-[#10B981] pl-3">
              Membro Oficial validado pelo Gov.br (OIDC).
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 pt-6 border-t border-[#393939]">
            <div className="flex flex-col gap-1">
              <span className="font-mono text-[10px] text-neutral-500 uppercase tracking-widest">Base Location</span>
              <span className="font-mono text-sm text-white">{artist.city}, {artist.state}</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="font-mono text-[10px] text-neutral-500 uppercase tracking-widest">Contract Rate (Min)</span>
              <span className="font-mono text-sm text-[#10B981]">R$ {artist.minFee.toLocaleString("pt-BR")}</span>
            </div>
            <div className="flex flex-col gap-1 col-span-2 md:col-span-1">
              <span className="font-mono text-[10px] text-neutral-500 uppercase tracking-widest">Governance Rights</span>
              <div className="flex items-center gap-2 mt-1">
                <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse"></span>
                <span className="font-mono text-xs text-white uppercase">VOTING ENABLED</span>
              </div>
            </div>
          </div>

          {/* Association Action */}
          <div className="mt-4 pt-6 border-t border-[#393939] flex flex-col md:flex-row gap-4">
            <button className="flex-1 bg-[#10B981]/10 border border-[#10B981] hover:bg-[#10B981] text-[#10B981] hover:text-black uppercase font-bold py-3 transition-colors tracking-widest font-archivo text-xs rounded-none">
              Acessar Assembleia (DAO)
            </button>
            <button className="flex-1 bg-transparent border border-[#393939] hover:border-white text-neutral-400 hover:text-white uppercase font-bold py-3 transition-colors tracking-widest font-archivo text-xs rounded-none">
              Download Press Kit
            </button>
          </div>
        </div>
      </div>

      {/* Body: Two columns - Operational Info & Action */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Left Col: Abstracted Info */}
        <div className="lg:col-span-2 flex flex-col gap-6">
          
          {/* Bio / Summary */}
          <div className="bg-[#131313] border border-[#393939] p-6">
            <h3 className="font-mono text-[10px] text-[#10B981] uppercase tracking-widest mb-3">Biometric / Bio</h3>
            <p className="font-archivo text-sm text-neutral-300 leading-relaxed">{artist.bio}</p>
          </div>

          {/* Abstracted Evidence & Networks */}
          {/* Proof of Engagement (PoE) / EXP Ledger */}
      <div className="bg-[#0E0E0E] border border-[#393939] p-6">
        <div className="flex justify-between items-center border-b border-[#393939] pb-4 mb-6">
          <h3 className="font-archivo text-xl md:text-2xl font-bold uppercase tracking-tight text-white">Proof of Engagement (PoE)</h3>
          <span className="font-mono text-[10px] text-[#10B981] bg-[#10B981]/10 px-2 py-1 uppercase border border-[#10B981]/30 hidden md:inline-block">SYNC: LIVE</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Current Balance */}
          <div className="col-span-1 border border-[#393939] p-6 bg-[#131313] flex flex-col justify-between">
            <div>
              <div className="font-mono text-[10px] text-neutral-500 uppercase tracking-widest mb-2">Current Balance</div>
              <div className="font-mono text-5xl font-bold text-[#10B981]">
                {artist.exp || 1250} <span className="text-sm text-neutral-500 font-normal">EXP</span>
              </div>
            </div>
            
            <div className="mt-8 pt-4 border-t border-[#393939]">
              <div className="font-mono text-[10px] text-neutral-500 uppercase tracking-widest mb-2">Ecosystem Health Status</div>
              <div className={`font-mono text-xs px-2 py-1 inline-block uppercase border ${
                (artist.health || 'OPTIMAL') === 'OPTIMAL' 
                  ? "text-[#10B981] bg-[#10B981]/10 border-[#10B981]/30" 
                  : (artist.health === 'WARNING' 
                      ? "text-yellow-500 bg-yellow-500/10 border-yellow-500/30" 
                      : "text-red-500 bg-red-500/10 border-red-500/30")
              }`}>
                {(artist.health || 'OPTIMAL') === 'OPTIMAL' ? 'OPTIMAL - ELIGIBLE FOR REWARDS' : 
                 artist.health === 'WARNING' ? 'WARNING - ACTIVITY REQUIRED' : 
                 'REHAB - ACCOUNT RESTRICTED'}
              </div>
            </div>
          </div>

          {/* Activity Ledger */}
          <div className="col-span-1 lg:col-span-2 border border-[#393939] p-6 bg-[#131313]">
            <div className="flex justify-between items-center mb-6">
              <div className="font-mono text-[10px] text-neutral-500 uppercase tracking-widest">Recent Activity Ledger</div>
              <button className="font-mono text-[10px] text-[#10B981] hover:underline uppercase">View All</button>
            </div>
            
            <ul className="space-y-4">
              <li className="flex justify-between items-center border-b border-[#393939] pb-3">
                <div className="flex flex-col gap-1">
                  <span className="font-mono text-xs text-white uppercase">Contract Settled: Basement Sessions</span>
                  <span className="font-mono text-[9px] text-neutral-500">TX: 0x8f2a...3b9c | 2 days ago</span>
                </div>
                <span className="font-mono text-sm font-bold text-[#10B981]">+ 150 EXP</span>
              </li>
              <li className="flex justify-between items-center border-b border-[#393939] pb-3">
                <div className="flex flex-col gap-1">
                  <span className="font-mono text-xs text-white uppercase">Governance: Voted on Proposal #42</span>
                  <span className="font-mono text-[9px] text-neutral-500">TX: 0x3e1d...9a2f | 1 week ago</span>
                </div>
                <span className="font-mono text-sm font-bold text-[#10B981]">+ 50 EXP</span>
              </li>
              <li className="flex justify-between items-center pb-1">
                <div className="flex flex-col gap-1">
                  <span className="font-mono text-xs text-neutral-400 uppercase">System Sweep: Weekly Activity Check</span>
                  <span className="font-mono text-[9px] text-neutral-500">Automated Audit | 2 weeks ago</span>
                </div>
                <span className="font-mono text-sm text-neutral-500">0 EXP</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-[#131313] border border-[#393939] p-6 flex flex-col justify-between">
              <div>
                <h3 className="font-mono text-[10px] text-neutral-500 uppercase tracking-widest mb-4">Evidence & Shows</h3>
                <ul className="font-mono text-xs text-neutral-300 space-y-3">
                  <li className="flex justify-between border-b border-[#393939] pb-2">
                    <span>BASEMENT SESSIONS</span>
                    <span className="text-neutral-500">BERLIN</span>
                  </li>
                  <li className="flex justify-between border-b border-[#393939] pb-2">
                    <span>VOID FESTIVAL</span>
                    <span className="text-neutral-500">LONDON</span>
                  </li>
                  <li className="flex justify-between border-b border-[#393939] pb-2">
                    <span>MEDIA: BOILER_ROOM</span>
                    <span className="text-[#10B981]">VERIFIED</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-[#131313] border border-[#393939] p-6">
              <h3 className="font-mono text-[10px] text-neutral-500 uppercase tracking-widest mb-4">Verified Networks</h3>
              <div className="flex flex-col gap-2">
                {["SPOTIFY", "INSTAGRAM", "SOUNDCLOUD"].map((network) => (
                  <div key={network} className="flex justify-between items-center bg-[#0E0E0E] border border-[#393939] px-3 py-2">
                    <span className="font-mono text-xs text-white">{network}</span>
                    <span className="text-[#10B981] text-sm">✓</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right Col: Contract Specs & Action */}
        <div className="bg-[#0E0E0E] border border-[#393939] flex flex-col">
          <div className="p-6 border-b border-[#393939] flex justify-between items-center bg-[#131313]">
            <h3 className="font-mono text-[10px] text-white uppercase tracking-widest">Contract Specs</h3>
            <span className="font-mono text-[10px] text-neutral-500 bg-[#0E0E0E] border border-[#393939] px-2 py-1">LOCKED</span>
          </div>
          
          <div className="p-6 flex-1 flex flex-col gap-6">
            <p className="font-archivo text-sm text-neutral-400">
              Especificações técnicas (Rider, Stage Map e Logística) estão protegidas. 
              O dossiê completo será anexado ao Acordo Tripartite.
            </p>

            <div className="bg-[#131313] border border-[#393939] p-4 flex flex-col gap-3">
              <div className="flex justify-between items-center font-mono text-xs text-neutral-300">
                <span>TECHNICAL RIDER</span>
                <span className="text-[#10B981]">✓ VALID</span>
              </div>
              <div className="flex justify-between items-center font-mono text-xs text-neutral-300">
                <span>STAGE MAP</span>
                <span className="text-[#10B981]">✓ VALID</span>
              </div>
              <div className="flex justify-between items-center font-mono text-xs text-neutral-300">
                <span>LOGISTICS</span>
                <span className="text-[#10B981]">✓ VALID</span>
              </div>
            </div>
          </div>

          <div className="p-6 border-t border-[#393939] bg-[#131313]">
            <button className="w-full relative overflow-hidden bg-gradient-to-b from-[#10B981]/20 to-[#10B981]/5 backdrop-blur-md border border-[#10B981]/40 shadow-[inset_0_1px_0_0_rgba(16,185,129,0.4)] hover:shadow-[inset_0_1px_0_0_rgba(16,185,129,0.6),0_0_20px_rgba(16,185,129,0.2)] text-[#10B981] hover:text-white uppercase font-bold py-4 transition-all duration-300 tracking-widest font-archivo text-sm rounded-none group flex justify-center items-center gap-2">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out" />
              <span className="relative z-10">GERAR ACORDO TRIPARTITE</span>
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
