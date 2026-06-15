'use client';

export default function CriarOportunidade() {
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
            <a href="/oportunidades/criar" className="text-[var(--primary)] border-b-2 border-[var(--primary)] h-full flex items-center pt-[2px] transition-colors duration-0 hover:text-[var(--primary)] hover:bg-[var(--surface-container-high)] px-2">
              Oportunidades
            </a>
            <a href="/dashboard/acordos" className="h-full flex items-center transition-colors duration-0 hover:text-[var(--primary)] hover:bg-[var(--surface-container-high)] px-2">
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
            CRIAR OPORTUNIDADE
          </h1>
          <p className="font-[var(--font-family-body-lg)] text-[var(--font-size-body-lg)] text-[var(--on-surface-variant)] max-w-2xl border-l-2 border-[var(--primary)] pl-4">
            Publique uma oportunidade para artistas independentes e conecte-se com talentos validados pela Street Hub.
          </p>
        </header>
        
        {/* Form Panel */}
        <div className="glass-panel p-6 flex flex-col gap-6">
          <style jsx>{`
            .glass-panel {
              background-color: #0A0A0A;
              border: 1px solid rgba(255,255,255,0.1);
            }
          `}</style>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col gap-2">
              <label className="font-[var(--font-family-label-mono)] text-[var(--font-size-label-mono)] text-[var(--on-surface-variant)] uppercase text-[11px]">
                Título da Oportunidade
              </label>
              <input 
                type="text" 
                placeholder="Ex: Festival de Verão 2026" 
                className="w-full bg-black border border-white/10 text-[var(--primary)] font-[var(--font-family-body-md)] text-[var(--font-size-body-md)] px-4 py-3 focus:outline-none focus:border-white transition-colors"
              />
            </div>
            
            <div className="flex flex-col gap-2">
              <label className="font-[var(--font-family-label-mono)] text-[var(--font-size-label-mono)] text-[var(--on-surface-variant)] uppercase text-[11px]">
                Gênero Musical
              </label>
              <select className="w-full bg-black border border-white/10 text-[var(--primary)] font-[var(--font-family-body-md)] text-[var(--font-size-body-md)] px-4 py-3 focus:outline-none focus:border-white transition-colors appearance-none">
                <option value="">Selecione um gênero</option>
                <option value="dj">DJ Set</option>
                <option value="rap">Rap / Hip-Hop</option>
                <option value="trap">Trap</option>
                <option value="mpb">Nova MPB</option>
              </select>
            </div>
            
            <div className="flex flex-col gap-2">
              <label className="font-[var(--font-family-label-mono)] text-[var(--font-size-label-mono)] text-[var(--on-surface-variant)] uppercase text-[11px]">
                Local
              </label>
              <input 
                type="text" 
                placeholder="Ex: Curitiba, PR" 
                className="w-full bg-black border border-white/10 text-[var(--primary)] font-[var(--font-family-body-md)] text-[var(--font-size-body-md)] px-4 py-3 focus:outline-none focus:border-white transition-colors"
              />
            </div>
            
            <div className="flex flex-col gap-2">
              <label className="font-[var(--font-family-label-mono)] text-[var(--font-size-label-mono)] text-[var(--on-surface-variant)] uppercase text-[11px]">
                Data
              </label>
              <input 
                type="date" 
                className="w-full bg-black border border-white/10 text-[var(--primary)] font-[var(--font-family-body-md)] text-[var(--font-size-body-md)] px-4 py-3 focus:outline-none focus:border-white transition-colors"
              />
            </div>
            
            <div className="flex flex-col gap-2 md:col-span-2">
              <label className="font-[var(--font-family-label-mono)] text-[var(--font-size-label-mono)] text-[var(--on-surface-variant)] uppercase text-[11px]">
                Descrição
              </label>
              <textarea 
                placeholder="Descreva a oportunidade, requisitos e benefícios" 
                rows={4}
                className="w-full bg-black border border-white/10 text-[var(--primary)] font-[var(--font-family-body-md)] text-[var(--font-size-body-md)] px-4 py-3 focus:outline-none focus:border-white transition-colors resize-none"
              />
            </div>
            
            <div className="flex flex-col gap-2">
              <label className="font-[var(--font-family-label-mono)] text-[var(--font-size-label-mono)] text-[var(--on-surface-variant)] uppercase text-[11px]">
                Orçamento (R$)
              </label>
              <input 
                type="number" 
                placeholder="5000" 
                step="500" 
                className="w-full bg-black border border-white/10 text-[var(--primary)] font-[var(--font-family-data-num)] text-[var(--font-size-data-num)] px-4 py-3 focus:outline-none focus:border-white transition-colors"
              />
            </div>
            
            <div className="flex flex-col gap-2">
              <label className="font-[var(--font-family-label-mono)] text-[var(--font-size-label-mono)] text-[var(--on-surface-variant)] uppercase text-[11px]">
                Tipo de Oportunidade
              </label>
              <select className="w-full bg-black border border-white/10 text-[var(--primary)] font-[var(--font-family-body-md)] text-[var(--font-size-body-md)] px-4 py-3 focus:outline-none focus:border-white transition-colors appearance-none">
                <option value="">Selecione o tipo</option>
                <option value="show">Show</option>
                <option value="collab">Colaboração</option>
                <option value="residency">Residência</option>
              </select>
            </div>
          </div>
          
          <div className="flex justify-end gap-4 pt-4 border-t border-white/10">
            <button className="bg-transparent border border-white/10 text-[var(--primary)] font-[var(--font-family-label-mono)] text-[var(--font-size-label-mono)] px-8 py-3 hover:bg-[var(--surface-container-high)] transition-colors duration-0">
              Cancelar
            </button>
            <button className="bg-[var(--primary)] text-black font-[var(--font-family-label-mono)] text-[var(--font-size-label-mono)] px-8 py-3 hover:bg-[var(--surface-tint)] transition-colors duration-0">
              Publicar Oportunidade
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
