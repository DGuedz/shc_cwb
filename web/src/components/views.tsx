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
  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 border-b border-white/10 pb-6 gap-6">
        <div>
          <span className="text-[var(--accent)] font-mono text-[10px] mb-2 block tracking-widest">INTELLIGENCE_MODULE // MATCH_ENGINE</span>
          <h1 className="font-heading text-4xl md:text-5xl leading-none uppercase tracking-tighter">Curadoria Analítica</h1>
          <p className="text-white/70 mt-2 max-w-xl">Algoritmo de recomendação baseado em fit de marca, histórico de engajamento e viabilidade orçamentária.</p>
        </div>
        <div className="flex gap-4">
          <div className="bg-[#0e0e0e] border border-white/10 px-4 py-2 flex items-center gap-3">
            <span className="font-mono text-[10px] text-white/50 tracking-widest">SORT:</span>
            <select className="bg-transparent text-white font-mono text-xs focus:outline-none appearance-none cursor-pointer">
              <option>MATCH SCORE (DESC)</option>
              <option>BUDGET (ASC)</option>
              <option>REACH (DESC)</option>
            </select>
            <span className="text-white/50">▼</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {entries.map((entry) => (
          <article key={entry.id} className="bg-[#0e0e0e] border border-white/10 p-6 flex flex-col hover:border-[var(--accent)] transition-colors group relative">
            <div className="absolute top-0 right-0 w-2 h-2 bg-[var(--accent)] m-6 animate-pulse" />
            <div className="flex justify-between items-start mb-6">
              <div>
                <h2 className="font-heading text-2xl md:text-3xl mb-2 uppercase tracking-tight">
                  {entry.artist.stageName}
                </h2>
                <div className="font-mono text-[10px] text-white/50 space-y-1 tracking-wider">
                  <div><span className="text-white/70">LOC:</span> {entry.artist.city}, {entry.artist.state}</div>
                  <div><span className="text-white/70">GENRE:</span> {entry.artist.genre}</div>
                </div>
              </div>
              <div className="text-right mt-1 mr-4">
                <div className="font-mono text-5xl text-[var(--accent)] leading-none">{entry.affinityScore}<span className="text-lg text-white/50 ml-1">%</span></div>
                <div className="font-mono text-[8px] text-[var(--accent)] tracking-[0.2em] mt-2">MATCH_SCORE</div>
              </div>
            </div>
            <div className="h-[1px] w-full bg-white/10 mb-5" />
            <div className="flex-grow mb-8">
              <h3 className="font-mono text-[10px] text-white mb-3 tracking-widest">MOTIVOS DO MATCH:</h3>
              <ul className="space-y-3">
                {entry.reasons.map((reason, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="text-[var(--accent)] shrink-0">✓</span>
                    <span className="font-mono text-[11px] text-white/70 leading-tight">{reason}</span>
                  </li>
                ))}
              </ul>
            </div>
            <button className="w-full bg-transparent border border-[var(--accent)] text-[var(--accent)] py-4 font-mono text-xs tracking-[0.2em] hover:bg-[var(--accent)] hover:text-black transition-colors uppercase font-bold flex items-center justify-center gap-2">
              <span>Tenho Interesse</span>
              <span>→</span>
            </button>
          </article>
        ))}
      </div>

      <div className="mt-12 flex justify-center">
        <button className="bg-black border border-white/10 text-white/70 px-8 py-3 font-mono text-xs tracking-widest hover:text-white hover:border-white/30 transition-colors uppercase flex items-center gap-2">
          <span>↻</span>
          Carregar Mais Matches
        </button>
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

export function DossierPanel({ artist }: { artist: Artist }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
      <section className="col-span-4 md:col-span-12 border border-white/10 bg-[#0e0e0e] p-4 mb-8 relative">
        <div className="absolute top-4 left-4 z-10 bg-black/80 border border-[var(--accent)] px-3 py-1 flex items-center gap-2 backdrop-blur-sm">
          <div className="w-2 h-2 bg-[var(--accent)] animate-pulse" />
          <span className="font-mono text-xs text-[var(--accent)] uppercase">STATUS: {artist.verified ? "VERIFIED OUTSIDER" : "EM ANÁLISE"}</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="col-span-1 border border-white/10 aspect-square overflow-hidden relative grayscale contrast-125 bg-[#1a1a1a] flex items-center justify-center">
            <div className="font-mono text-white/30 text-4xl">PORTRAIT</div>
            <div className="absolute bottom-2 right-2 text-right">
              <div className="font-mono text-sm text-white/50">ID: SHC-{artist.id.slice(0, 4).toUpperCase()}</div>
              <div className="font-mono text-[10px] text-white/50">LAT: -23.5505 / LON: -46.6333</div>
            </div>
          </div>
          <div className="col-span-1 md:col-span-2 flex flex-col justify-between p-4 bg-[#0A0A0A] border border-white/10">
            <div>
              <h1 className="font-heading text-4xl md:text-5xl tracking-tighter uppercase mb-4">{artist.stageName}</h1>
              <div className="grid grid-cols-2 gap-4 border-t border-white/10 pt-4">
                <div>
                  <span className="font-mono text-xs text-white/50 block mb-1">PRIMARY DISCIPLINE</span>
                  <span className="font-mono text-sm text-white">{artist.genre}</span>
                </div>
                <div>
                  <span className="font-mono text-xs text-white/50 block mb-1">BASE LOCATION</span>
                  <span className="font-mono text-sm text-white">{artist.city}, {artist.state}</span>
                </div>
                <div>
                  <span className="font-mono text-xs text-white/50 block mb-1">CONTRACT RATE (MIN)</span>
                  <span className="font-mono text-sm text-white">R$ {artist.minFee.toLocaleString("pt-BR")}</span>
                </div>
                <div>
                  <span className="font-mono text-xs text-white/50 block mb-1">SYSTEM CLEARANCE</span>
                  <span className="font-mono text-sm text-[var(--accent)]">LEVEL 4 - APPROVED</span>
                </div>
              </div>
            </div>
            <div className="mt-8 border-t border-white/10 pt-4">
              <span className="font-mono text-xs text-white/50 block mb-2">BIOMETRIC / BIO</span>
              <p className="text-base text-white/80 leading-relaxed max-w-3xl">{artist.bio}</p>
            </div>
          </div>
        </div>
      </section>
      <section className="col-span-4 md:col-span-8 flex flex-col gap-4">
        <div className="bg-[#1c1b1b] border border-white/10 p-4">
          <div className="flex items-center gap-2 mb-4 border-b border-white/10 pb-2">
            <span className="text-white">⚪</span>
            <h2 className="font-heading text-2xl text-white uppercase">AUDIT: LATEST SHOWS</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="border border-white/10 bg-[#0A0A0A] p-2 flex gap-4 items-center group cursor-pointer hover:bg-[#393939] transition-none">
              <div className="w-16 h-16 bg-[#131313] grayscale flex items-center justify-center">
                <span className="text-white/30">IMG</span>
              </div>
              <div>
                <div className="font-mono text-sm text-white uppercase">BASEMENT SESSIONS</div>
                <div className="font-mono text-[10px] text-white/50">2024.10.15 // BERLIN</div>
                <div className="font-mono text-[10px] text-[var(--accent)] mt-1">CAPACITY MET</div>
              </div>
            </div>
            <div className="border border-white/10 bg-[#0A0A0A] p-2 flex gap-4 items-center group cursor-pointer hover:bg-[#393939] transition-none">
              <div className="w-16 h-16 bg-[#131313] grayscale flex items-center justify-center">
                <span className="text-white/30">IMG</span>
              </div>
              <div>
                <div className="font-mono text-sm text-white uppercase">VOID FESTIVAL</div>
                <div className="font-mono text-[10px] text-white/50">2024.08.02 // LONDON</div>
                <div className="font-mono text-[10px] text-[var(--accent)] mt-1">CAPACITY MET</div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#1c1b1b] border border-white/10 p-4">
          <div className="flex items-center gap-2 mb-4 border-b border-white/10 pb-2">
            <span className="text-white">⚪</span>
            <h2 className="font-heading text-2xl text-white uppercase">EVIDENCE: MEDIA</h2>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="relative border border-white/10 aspect-video bg-black group cursor-pointer">
              <div className="absolute inset-0 opacity-60 grayscale group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="text-white/30 text-4xl">▶</span>
              </div>
              <div className="absolute bottom-0 left-0 w-full bg-black/80 border-t border-white/10 p-1">
                <span className="font-mono text-[10px] text-white">FILE: BOILER_ROOM_REC_01</span>
              </div>
            </div>
            <div className="relative border border-white/10 aspect-video bg-black group cursor-pointer">
              <div className="absolute inset-0 opacity-60 grayscale group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="text-white/30 text-4xl">▶</span>
              </div>
              <div className="absolute bottom-0 left-0 w-full bg-black/80 border-t border-white/10 p-1">
                <span className="font-mono text-[10px] text-white">FILE: STUDIO_SESSION_RAW</span>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#1c1b1b] border border-white/10 p-4">
          <div className="flex items-center gap-2 mb-4 border-b border-white/10 pb-2">
            <span className="text-white">⚪</span>
            <h2 className="font-heading text-2xl text-white uppercase">VERIFIED NETWORKS</h2>
          </div>
          <div className="flex flex-wrap gap-4">
            {["SPOTIFY", "INSTAGRAM", "SOUNDCLOUD"].map((network) => (
              <div key={network} className="flex items-center gap-2 border border-white/10 bg-[#0A0A0A] px-3 py-2">
                <span className="font-mono text-xs text-white">{network}</span>
                <span className="text-[var(--accent)] text-sm">✓</span>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="col-span-4 md:col-span-4 flex flex-col gap-4">
        <div className="bg-[#0A0A0A] border border-white/10 flex-1 flex flex-col">
          <div className="p-4 border-b border-white/10 bg-[#1c1b1b] flex justify-between items-center">
            <h2 className="font-heading text-2xl text-white uppercase flex items-center gap-2">
              <span className="text-white">⚪</span>
              CONTRACT SPECS
            </h2>
            <span className="font-mono text-[10px] border border-[var(--accent)] text-[var(--accent)] px-1 py-0.5">LOCKED</span>
          </div>
          <div className="p-4 flex flex-col gap-6 flex-1 overflow-y-auto">
            <div>
              <div className="font-mono text-xs text-white/50 mb-2 border-b border-white/10 pb-1 flex justify-between">
                <span>TECHNICAL RIDER</span>
                <span>MANDATORY</span>
              </div>
              <ul className="font-mono text-sm text-white space-y-1">
                <li className="flex items-start gap-2">
                  <span className="text-[var(--accent)]">-</span> 2x Pioneer CDJ-3000 (Firmware v2.0+)
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[var(--accent)]">-</span> 1x Allen & Heath Xone:96 Mixer
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[var(--accent)]">-</span> 2x L-Acoustics X15 HiQ Monitors
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[var(--accent)]">-</span> Isolated power circuit (220V)
                </li>
              </ul>
            </div>
            <div>
              <div className="font-mono text-xs text-white/50 mb-2 border-b border-white/10 pb-1">STAGE MAP</div>
              <button className="w-full border border-white/10 bg-[#131313] hover:bg-[#393939] text-white font-mono text-xs py-2 px-3 flex justify-between items-center transition-none">
                <span>KB_STAGE_PLOT_2024.PDF</span>
                <span>⬇</span>
              </button>
            </div>
            <div>
              <div className="font-mono text-xs text-white/50 mb-2 border-b border-white/10 pb-1">LOGISTICS & HOSPITALITY</div>
              <ul className="font-mono text-sm text-white space-y-1 opacity-80">
                <li>&gt; Ground transport (SUV) required.</li>
                <li>&gt; 1x Double room, minimum 4 stars.</li>
                <li>&gt; Backstage: Still water, 2x Black towels.</li>
              </ul>
            </div>
          </div>
          <div className="p-4 border-t border-white/10 bg-[#1c1b1b] mt-auto relative">
            <button className="w-full bg-[var(--accent)] text-black font-mono text-xs uppercase p-4 flex justify-center items-center gap-2 hover:bg-white hover:text-black transition-none border border-transparent">
              <span>📄</span>
              GERAR ACORDO TRIPARTITE
            </button>
            <p className="font-mono text-[10px] text-white/50 leading-tight mt-3 text-justify">
              Ao avançar, os dados deste portfólio e as exigências técnicas formarão a base do contrato com chancela do Street Hub Connect, garantindo segurança jurídica para o contratante e para o artista. Operação imutável na rede.
            </p>
          </div>
        </div>
      </section>
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
