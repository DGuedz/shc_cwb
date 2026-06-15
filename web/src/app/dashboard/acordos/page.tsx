'use client';

export default function DealsPipeline() {
  const deals = [
    { id: 1, artist: "DJ ALX", status: "Negociação", value: "R$ 4.000", date: "15/06/2026" },
    { id: 2, artist: "MC RZ", status: "Proposta Enviada", value: "R$ 7.000", date: "14/06/2026" },
    { id: 3, artist: "LIA B", status: "Aguardando Assinatura", value: "R$ 10.000", date: "13/06/2026" },
    { id: 4, artist: "VNXX", status: "Concluído", value: "R$ 3.500", date: "10/06/2026" }
  ];
  
  return (
    <div className="bg-black text-[var(--on-background)] min-h-screen flex flex-col">
      {/* TopNavBar */}
      <nav className="fixed top-0 w-full z-50 border-b border-[var(--outline-variant)] bg-[var(--surface)]/90 backdrop-blur-xl h-20 px-[var(--spacing-margin-mobile)] md:px-[var(--spacing-margin-desktop)] flex justify-between items-center transition-colors duration-0">
        <div className="flex items-center space-x-8 h-full">
          <a href="/" className="font-[var(--font-family-headline-lg)] text-[var(--font-size-headline-lg)] font-bold tracking-tighter text-[var(--primary)]">
            STREET HUB CONNECT
          </a>
          <div className="hidden md:flex space-x-6 h-full items-center font-[var(--font-family-label-mono)] text-[var(--font-size-label-mono)] text-[var(--on-surface-variant)]">
            <a href="/" className="h-full flex items-center transition-colors duration-0 hover:text-[var(--primary)] hover:bg-[var(--surface-container-high)] px-2">
              Início
            </a>
            <a href="/catalogo" className="h-full flex items-center transition-colors duration-0 hover:text-[var(--primary)] hover:bg-[var(--surface-container-high)] px-2">
              Artistas
            </a>
            <a href="/oportunidades/criar" className="h-full flex items-center transition-colors duration-0 hover:text-[var(--primary)] hover:bg-[var(--surface-container-high)] px-2">
              Oportunidades
            </a>
            <a href="/dashboard/acordos" className="text-[var(--primary)] border-b-2 border-[var(--primary)] h-full flex items-center pt-[2px] transition-colors duration-0 hover:text-[var(--primary)] hover:bg-[var(--surface-container-high)] px-2">
              Conexões
            </a>
            <a href="/onboarding/artista" className="h-full flex items-center transition-colors duration-0 hover:text-[var(--primary)] hover:bg-[var(--surface-container-high)] px-2">
              Perfil/Contratos
            </a>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <div className="relative hidden md:block">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-[var(--on-surface-variant)]" style={{ fontSize: '20px' }}>search</span>
            <input 
              type="text" 
              placeholder="Search..." 
              className="bg-black border border-white/10 text-[var(--primary)] font-[var(--font-family-label-mono)] text-[var(--font-size-label-mono)] pl-10 pr-4 py-2 focus:outline-none focus:border-white transition-colors"
            />
          </div>
          <button aria-label="Notifications" className="p-2 hover:bg-[var(--surface-container-high)] transition-colors duration-0 rounded">
            <span className="material-symbols-outlined text-[var(--primary)]">notifications</span>
          </button>
          <button aria-label="Settings" className="p-2 hover:bg-[var(--surface-container-high)] transition-colors duration-0 rounded">
            <span className="material-symbols-outlined text-[var(--primary)]">settings</span>
          </button>
          <div className="w-10 h-10 border border-white/10 bg-[var(--surface-container-high)] flex items-center justify-center font-[var(--font-family-label-mono)] text-xs text-[var(--primary)]">
            PR
          </div>
        </div>
      </nav>
      
      {/* Main Content Canvas */}
      <main className="flex-grow pt-20 px-[var(--spacing-margin-mobile)] md:px-[var(--spacing-margin-desktop)] max-w-[var(--spacing-container-max)] mx-auto w-full flex flex-col gap-8 pb-16">
        {/* Hero Header */}
        <header className="mt-12 flex flex-col items-start gap-4 relative">
          <div className="absolute right-0 top-0 border border-white/10 bg-black px-4 py-2 hidden md:flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span className="font-[var(--font-family-label-mono)] text-[var(--font-size-label-mono)] text-emerald-500">HACKATHON MUSICTECH BRASIL</span>
          </div>
          <h1 className="font-[var(--font-family-headline-xl)] text-[var(--font-size-headline-xl)] md:text-[64px] font-bold text-[var(--primary)] tracking-tighter uppercase max-w-3xl leading-tight">
            DEALS PIPELINE
          </h1>
          <p className="font-[var(--font-family-body-lg)] text-[var(--font-size-body-lg)] text-[var(--on-surface-variant)] max-w-2xl border-l-2 border-[var(--primary)] pl-4">
            Acompanhe todas as negociações e acordos em andamento com artistas da Street Hub.
          </p>
        </header>
        
        {/* Stats Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: "Total de Deals", value: "4" },
            { label: "Em Negociação", value: "2" },
            { label: "Concluídos", value: "1" },
            { label: "Valor Total", value: "R$ 24.500" }
          ].map((stat, i) => (
            <div key={i} className="glass-panel p-4 flex flex-col gap-2">
              <style jsx>{`
                .glass-panel {
                  background-color: #0A0A0A;
                  border: 1px solid rgba(255,255,255,0.1);
                }
              `}</style>
              <span className="font-[var(--font-family-label-mono)] text-[var(--font-size-label-mono)] text-[var(--on-surface-variant)] uppercase text-[11px]">
                {stat.label}
              </span>
              <span className="font-[var(--font-family-data-num)] text-2xl text-[var(--primary)]">
                {stat.value}
              </span>
            </div>
          ))}
        </div>
        
        {/* Deals List */}
        <div className="glass-panel overflow-hidden">
          <style jsx>{`
            .glass-panel {
              background-color: #0A0A0A;
              border: 1px solid rgba(255,255,255,0.1);
            }
          `}</style>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="border-b border-white/10">
                <tr className="text-left">
                  <th className="p-4 font-[var(--font-family-label-mono)] text-[var(--font-size-label-mono)] text-[var(--on-surface-variant)] uppercase text-[11px]">
                    Artista
                  </th>
                  <th className="p-4 font-[var(--font-family-label-mono)] text-[var(--font-size-label-mono)] text-[var(--on-surface-variant)] uppercase text-[11px]">
                    Status
                  </th>
                  <th className="p-4 font-[var(--font-family-label-mono)] text-[var(--font-size-label-mono)] text-[var(--on-surface-variant)] uppercase text-[11px]">
                    Valor
                  </th>
                  <th className="p-4 font-[var(--font-family-label-mono)] text-[var(--font-size-label-mono)] text-[var(--on-surface-variant)] uppercase text-[11px]">
                    Data
                  </th>
                  <th className="p-4 font-[var(--font-family-label-mono)] text-[var(--font-size-label-mono)] text-[var(--on-surface-variant)] uppercase text-[11px]">
                    Ações
                  </th>
                </tr>
              </thead>
              <tbody>
                {deals.map((deal) => (
                  <tr key={deal.id} className="border-t border-white/10 hover:bg-white/5 transition-colors">
                    <td className="p-4 font-[var(--font-family-headline-md)] text-[var(--font-size-headline-md)] text-[var(--primary)]">
                      {deal.artist}
                    </td>
                    <td className="p-4">
                      <span className={`font-[var(--font-family-label-mono)] text-[var(--font-size-label-mono)] px-3 py-1 border border-white/20 ${
                        deal.status === "Concluído" ? "text-emerald-500 border-emerald-500/30" : 
                        deal.status === "Aguardando Assinatura" ? "text-yellow-500 border-yellow-500/30" : 
                        "text-[var(--on-surface-variant)]"
                      }`}>
                        {deal.status}
                      </span>
                    </td>
                    <td className="p-4 font-[var(--font-family-data-num)] text-[var(--font-size-data-num)] text-[var(--primary)]">
                      {deal.value}
                    </td>
                    <td className="p-4 font-[var(--font-family-data-num)] text-[var(--font-size-data-num)] text-[var(--on-surface-variant)]">
                      {deal.date}
                    </td>
                    <td className="p-4">
                      <button className="font-[var(--font-family-label-mono)] text-[var(--font-size-label-mono)] text-[var(--primary)] hover:text-emerald-500 transition-colors">
                        Ver Detalhes
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}
