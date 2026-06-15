'use client';

import { useState, useEffect } from 'react';

export default function DiretorioTalentos() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalStep, setModalStep] = useState<'loading' | 'success'>('loading');

  useEffect(() => {
    // Simular animações Framer Motion (adaptadas para React)
  }, []);

  const handleContractClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsModalOpen(true);
    setModalStep('loading');
    
    setTimeout(() => {
      setModalStep('success');
      setTimeout(() => {
        // Redirecionar para deals pipeline
        window.location.href = '/dashboard/acordos';
      }, 2000);
    }, 2000);
  };

  return (
    <div className="bg-black text-[var(--on-background)] min-h-screen flex flex-col">
      {/* Interactive Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm flex items-center justify-center">
          <div className="glass-panel max-w-md w-full p-8 relative overflow-hidden border border-emerald-500/30 flex flex-col items-center text-center">
            <style jsx>{`
              .glass-panel {
                background-color: #0A0A0A;
                border: 1px solid rgba(255,255,255,0.1);
              }
              @keyframes scan {
                0% { top: -10%; }
                100% { top: 110%; }
              }
              .scanner-line {
                position: absolute;
                width: 100%;
                height: 2px;
                background: #10B981;
                box-shadow: 0 0 10px #10B981;
                animation: scan 1.5s linear infinite;
              }
              @keyframes flicker {
                0%, 19.999%, 22%, 62.999%, 64%, 64.999%, 70%, 100% { opacity: 1; }
                20%, 21.999%, 63%, 63.999%, 65%, 69.999% { opacity: 0.4; }
              }
              .text-flicker {
                animation: flicker 3s infinite;
              }
            `}</style>
            {modalStep === 'loading' && (
              <div className="flex flex-col items-center gap-4 w-full">
                <div className="w-16 h-16 relative border border-white/10 bg-black rounded flex items-center justify-center overflow-hidden">
                  <span className="material-symbols-outlined text-[var(--outline-variant)] animate-pulse" style={{ fontSize: '32px' }}>terminal</span>
                  <div className="scanner-line"></div>
                </div>
                <p className="font-[var(--font-family-label-mono)] text-emerald-500 text-[14px] uppercase tracking-widest text-flicker">
                  Validando dados no Supabase...
                </p>
              </div>
            )}
            {modalStep === 'success' && (
              <div className="flex flex-col items-center gap-4 w-full">
                <div className="w-16 h-16 rounded-full bg-emerald-500/10 flex items-center justify-center mb-2 border border-emerald-500/30">
                  <span className="material-symbols-outlined text-emerald-500" style={{ fontSize: '40px', fontWeight: 700 }}>check</span>
                </div>
                <p className="font-[var(--font-family-label-mono)] text-[var(--primary)] text-[14px] uppercase tracking-widest leading-relaxed">
                  Conexão Estabelecida.<br/>
                  <span className="text-emerald-500/70 text-[12px] mt-2 block">Acordo enviado para o Deals Pipeline.</span>
                </p>
              </div>
            )}
          </div>
        </div>
      )}
      
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
            <a href="/catalogo" className="text-[var(--primary)] border-b-2 border-[var(--primary)] h-full flex items-center pt-[2px] transition-colors duration-0 hover:text-[var(--primary)] hover:bg-[var(--surface-container-high)] px-2">
              Artistas
            </a>
            <a href="/onboarding/contratante" className="h-full flex items-center transition-colors duration-0 hover:text-[var(--primary)] hover:bg-[var(--surface-container-high)] px-2">
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
            DIRETÓRIO DE TALENTOS
          </h1>
          <p className="font-[var(--font-family-body-lg)] text-[var(--font-size-body-lg)] text-[var(--on-surface-variant)] max-w-2xl border-l-2 border-[var(--primary)] pl-4">
            Base de artistas independentes validados pela Street Hub. Fomento à economia criativa e curadoria de infraestrutura para o mercado institucional.
          </p>
        </header>
        
        {/* Command Bar (Sticky) */}
        <div className="sticky top-20 z-40 glass-panel p-4 flex flex-col md:flex-row gap-4 items-end">
          <style jsx>{`
            .glass-panel {
              background-color: #0A0A0A;
              border: 1px solid rgba(255,255,255,0.1);
            }
          `}</style>
          <div className="w-full md:w-1/3 flex flex-col gap-2">
            <label className="font-[var(--font-family-label-mono)] text-[var(--font-size-label-mono)] text-[var(--on-surface-variant)] uppercase text-[11px]">
              Buscar Artista
            </label>
            <div className="relative">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-[var(--outline-variant)]" style={{ fontSize: '18px' }}>search</span>
              <input 
                type="text" 
                placeholder="Nome, cidade ou tag..." 
                className="w-full bg-black border border-white/10 text-[var(--primary)] font-[var(--font-family-body-md)] text-[var(--font-size-body-md)] pl-10 pr-4 py-3 focus:outline-none focus:border-white transition-colors h-12"
              />
            </div>
          </div>
          <div className="w-full md:w-1/4 flex flex-col gap-2">
            <label className="font-[var(--font-family-label-mono)] text-[var(--font-size-label-mono)] text-[var(--on-surface-variant)] uppercase text-[11px]">
              Gênero Musical
            </label>
            <select className="w-full bg-black border border-white/10 text-[var(--primary)] font-[var(--font-family-body-md)] text-[var(--font-size-body-md)] px-4 py-3 focus:outline-none focus:border-white transition-colors appearance-none h-12">
              <option value="">Todos os Gêneros</option>
              <option value="dj">DJ Set</option>
              <option value="rap">Rap / Hip-Hop</option>
              <option value="trap">Trap</option>
              <option value="mpb">Nova MPB</option>
            </select>
          </div>
          <div className="w-full md:w-1/4 flex flex-col gap-2">
            <label className="font-[var(--font-family-label-mono)] text-[var(--font-size-label-mono)] text-[var(--on-surface-variant)] uppercase text-[11px]">
              Budget Máximo (R$)
            </label>
            <div className="relative">
              <span className="font-[var(--font-family-data-num)] text-[var(--font-size-data-num)] text-[var(--outline-variant)] absolute left-3 top-1/2 -translate-y-1/2">R$</span>
              <input 
                type="number" 
                placeholder="5000" 
                step="500" 
                className="w-full bg-black border border-white/10 text-[var(--primary)] font-[var(--font-family-data-num)] text-[var(--font-size-data-num)] pl-10 pr-4 py-3 focus:outline-none focus:border-white transition-colors h-12"
              />
            </div>
          </div>
          <div className="w-full md:w-auto ml-auto">
            <button className="w-full md:w-auto bg-[var(--primary)] text-black font-[var(--font-family-label-mono)] text-[var(--font-size-label-mono)] px-8 py-3 hover:bg-[var(--surface-tint)] transition-none flex items-center justify-center gap-2 h-12">
              <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>filter_list</span>
              FILTRAR
            </button>
          </div>
        </div>
        
        {/* Active Filters Chip Area */}
        <div className="flex flex-wrap gap-2 items-center min-h-[32px]">
          <span className="font-[var(--font-family-label-mono)] text-[var(--font-size-label-mono)] text-[var(--on-surface-variant)] text-[11px] uppercase mr-2">
            Filtros Ativos:
          </span>
          <div className="border border-white/10 bg-[var(--surface-container-low)] px-3 py-1 flex items-center gap-2 group cursor-pointer hover:bg-[var(--surface-container)] transition-none">
            <span className="font-[var(--font-family-label-mono)] text-[var(--font-size-label-mono)] text-[var(--primary)] text-[12px]">Status: Verified</span>
            <span className="material-symbols-outlined text-[14px] text-[var(--outline-variant)] group-hover:text-[var(--primary)]">close</span>
          </div>
        </div>
        
        {/* Artist Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 1 - DJ ALX */}
          <article className="glass-panel flex flex-col group artist-card transition-all duration-300 hover:-translate-y-1 hover:border-emerald-500/40 hover:shadow-[0_0_15px_rgba(16,185,129,0.1)]">
            <style jsx>{`
              .glass-panel {
                background-color: #0A0A0A;
                border: 1px solid rgba(255,255,255,0.1);
              }
              @keyframes flicker {
                0%, 19.999%, 22%, 62.999%, 64%, 64.999%, 70%, 100% { opacity: 1; }
                20%, 21.999%, 63%, 63.999%, 65%, 69.999% { opacity: 0.4; }
              }
              .text-flicker {
                animation: flicker 3s infinite;
              }
            `}</style>
            {/* Header */}
            <div className="p-6 border-b border-white/10 flex items-start gap-4">
              <div className="w-16 h-16 shrink-0 relative">
                <div className="w-full h-full bg-[var(--surface-container-low)] grayscale brightness-110 contrast-125 border border-white/10 flex items-center justify-center">
                  <span className="font-[var(--font-family-label-mono)] text-[var(--on-surface-variant)] text-xs">IMG</span>
                </div>
                <div className="absolute -bottom-2 -right-2 bg-black border border-white/10 px-1 py-0.5">
                  <span className="font-[var(--font-family-label-mono)] text-[10px] text-emerald-500 flex items-center gap-1">
                    <span className="material-symbols-outlined text-[12px]" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
                  </span>
                </div>
              </div>
              <div className="flex flex-col flex-grow">
                <div className="flex justify-between items-start">
                  <h3 className="font-[var(--font-family-headline-md)] text-[var(--font-size-headline-md)] text-[var(--primary)] truncate" title="DJ ALX">
                    DJ ALX
                  </h3>
                  <span className="font-[var(--font-family-data-num)] text-[11px] text-[var(--outline-variant)] border border-white/10 px-1.5 py-0.5 text-flicker">
                    ID: 8842
                  </span>
                </div>
                <p className="font-[var(--font-family-body-md)] text-[14px] text-[var(--on-surface-variant)] flex items-center gap-1 mt-1">
                  <span className="material-symbols-outlined text-[14px]">location_on</span>
                  Curitiba, PR
                </p>
              </div>
            </div>
            {/* Metadata Body */}
            <div className="p-6 flex flex-col gap-4 flex-grow bg-black/40">
              <div className="flex justify-between items-end border-b border-white/10 pb-2">
                <span className="font-[var(--font-family-label-mono)] text-[11px] text-[var(--outline-variant)] uppercase">
                  Gênero Principal
                </span>
                <span className="font-[var(--font-family-label-mono)] text-[13px] text-[var(--primary)]">
                  Techno / Industrial
                </span>
              </div>
              <div className="flex flex-col gap-1 border-b border-white/10 pb-2">
                <span className="font-[var(--font-family-label-mono)] text-[11px] text-[var(--outline-variant)] uppercase">
                  Rider Técnico Mínimo
                </span>
                <span className="font-[var(--font-family-data-num)] text-[13px] text-[var(--on-surface)]">
                  2x CDJ 3000, 1x DJM-A9, Monitoração L-Acoustics
                </span>
              </div>
              <div className="flex justify-between items-end pb-2">
                <span className="font-[var(--font-family-label-mono)] text-[11px] text-[var(--outline-variant)] uppercase">
                  Faixa de Cachê (B2B)
                </span>
                <span className="font-[var(--font-family-data-num)] text-[14px] text-emerald-500 text-flicker">
                  R$ 3.500 - 6.000
                </span>
              </div>
            </div>
            {/* Footer Action */}
            <div className="p-4 mt-auto border-t border-white/10 bg-[#050505]">
              <button 
                onClick={handleContractClick}
                className="w-full bg-transparent border border-white/10 text-[var(--primary)] font-[var(--font-family-label-mono)] text-[var(--font-size-label-mono)] py-3 hover:bg-white hover:text-black transition-colors duration-0 flex items-center justify-center gap-2 relative overflow-hidden group"
              >
                INICIAR CONTRATAÇÃO
                <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
              </button>
            </div>
          </article>
          
          {/* Card 2 - MC RZ */}
          <article className="glass-panel flex flex-col group artist-card transition-all duration-300 hover:-translate-y-1 hover:border-emerald-500/40 hover:shadow-[0_0_15px_rgba(16,185,129,0.1)]">
            <style jsx>{`
              .glass-panel {
                background-color: #0A0A0A;
                border: 1px solid rgba(255,255,255,0.1);
              }
              @keyframes flicker {
                0%, 19.999%, 22%, 62.999%, 64%, 64.999%, 70%, 100% { opacity: 1; }
                20%, 21.999%, 63%, 63.999%, 65%, 69.999% { opacity: 0.4; }
              }
              .text-flicker {
                animation: flicker 3s infinite;
              }
            `}</style>
            <div className="p-6 border-b border-white/10 flex items-start gap-4">
              <div className="w-16 h-16 shrink-0 relative">
                <div className="w-full h-full bg-[var(--surface-container-low)] grayscale brightness-110 contrast-125 border border-white/10 flex items-center justify-center">
                  <span className="font-[var(--font-family-label-mono)] text-[var(--on-surface-variant)] text-xs">IMG</span>
                </div>
                <div className="absolute -bottom-2 -right-2 bg-black border border-white/10 px-1 py-0.5">
                  <span className="font-[var(--font-family-label-mono)] text-[10px] text-emerald-500 flex items-center gap-1">
                    <span className="material-symbols-outlined text-[12px]" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
                  </span>
                </div>
              </div>
              <div className="flex flex-col flex-grow">
                <div className="flex justify-between items-start">
                  <h3 className="font-[var(--font-family-headline-md)] text-[var(--font-size-headline-md)] text-[var(--primary)] truncate" title="MC RZ">
                    MC RZ
                  </h3>
                  <span className="font-[var(--font-family-data-num)] text-[11px] text-[var(--outline-variant)] border border-white/10 px-1.5 py-0.5 text-flicker">
                    ID: 9102
                  </span>
                </div>
                <p className="font-[var(--font-family-body-md)] text-[14px] text-[var(--on-surface-variant)] flex items-center gap-1 mt-1">
                  <span className="material-symbols-outlined text-[14px]">location_on</span>
                  São Paulo, SP
                </p>
              </div>
            </div>
            <div className="p-6 flex flex-col gap-4 flex-grow bg-black/40">
              <div className="flex justify-between items-end border-b border-white/10 pb-2">
                <span className="font-[var(--font-family-label-mono)] text-[11px] text-[var(--outline-variant)] uppercase">
                  Gênero Principal
                </span>
                <span className="font-[var(--font-family-label-mono)] text-[13px] text-[var(--primary)]">
                  Grime / UK Drill
                </span>
              </div>
              <div className="flex flex-col gap-1 border-b border-white/10 pb-2">
                <span className="font-[var(--font-family-label-mono)] text-[11px] text-[var(--outline-variant)] uppercase">
                  Rider Técnico Mínimo
                </span>
                <span className="font-[var(--font-family-data-num)] text-[13px] text-[var(--on-surface)]">
                  1x Shure SM58 sem fio, DJ Setup básico, PA &gt; 2k RMS
                </span>
              </div>
              <div className="flex justify-between items-end pb-2">
                <span className="font-[var(--font-family-label-mono)] text-[11px] text-[var(--outline-variant)] uppercase">
                  Faixa de Cachê (B2B)
                </span>
                <span className="font-[var(--font-family-data-num)] text-[14px] text-emerald-500 text-flicker">
                  R$ 5.000 - 8.500
                </span>
              </div>
            </div>
            <div className="p-4 mt-auto border-t border-white/10 bg-[#050505]">
              <button 
                onClick={handleContractClick}
                className="w-full bg-transparent border border-white/10 text-[var(--primary)] font-[var(--font-family-label-mono)] text-[var(--font-size-label-mono)] py-3 hover:bg-white hover:text-black transition-colors duration-0 flex items-center justify-center gap-2 relative overflow-hidden group"
              >
                INICIAR CONTRATAÇÃO
                <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
              </button>
            </div>
          </article>
          
          {/* Card 3 - LIA B */}
          <article className="glass-panel flex flex-col group artist-card transition-all duration-300 hover:-translate-y-1 hover:border-emerald-500/40 hover:shadow-[0_0_15px_rgba(16,185,129,0.1)]">
            <style jsx>{`
              .glass-panel {
                background-color: #0A0A0A;
                border: 1px solid rgba(255,255,255,0.1);
              }
              @keyframes flicker {
                0%, 19.999%, 22%, 62.999%, 64%, 64.999%, 70%, 100% { opacity: 1; }
                20%, 21.999%, 63%, 63.999%, 65%, 69.999% { opacity: 0.4; }
              }
              .text-flicker {
                animation: flicker 3s infinite;
              }
            `}</style>
            <div className="p-6 border-b border-white/10 flex items-start gap-4">
              <div className="w-16 h-16 shrink-0 relative">
                <div className="w-full h-full bg-[var(--surface-container-low)] grayscale brightness-110 contrast-125 border border-white/10 flex items-center justify-center">
                  <span className="font-[var(--font-family-label-mono)] text-[var(--on-surface-variant)] text-xs">IMG</span>
                </div>
                <div className="absolute -bottom-2 -right-2 bg-black border border-white/10 px-1 py-0.5">
                  <span className="font-[var(--font-family-label-mono)] text-[10px] text-emerald-500 flex items-center gap-1">
                    <span className="material-symbols-outlined text-[12px]" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
                  </span>
                </div>
              </div>
              <div className="flex flex-col flex-grow">
                <div className="flex justify-between items-start">
                  <h3 className="font-[var(--font-family-headline-md)] text-[var(--font-size-headline-md)] text-[var(--primary)] truncate" title="LIA B">
                    LIA B
                  </h3>
                  <span className="font-[var(--font-family-data-num)] text-[11px] text-[var(--outline-variant)] border border-white/10 px-1.5 py-0.5 text-flicker">
                    ID: 7731
                  </span>
                </div>
                <p className="font-[var(--font-family-body-md)] text-[14px] text-[var(--on-surface-variant)] flex items-center gap-1 mt-1">
                  <span className="material-symbols-outlined text-[14px]">location_on</span>
                  Rio de Janeiro, RJ
                </p>
              </div>
            </div>
            <div className="p-6 flex flex-col gap-4 flex-grow bg-black/40">
              <div className="flex justify-between items-end border-b border-white/10 pb-2">
                <span className="font-[var(--font-family-label-mono)] text-[11px] text-[var(--outline-variant)] uppercase">
                  Gênero Principal
                </span>
                <span className="font-[var(--font-family-label-mono)] text-[13px] text-[var(--primary)]">
                  Neo-Soul / MPB
                </span>
              </div>
              <div className="flex flex-col gap-1 border-b border-white/10 pb-2">
                <span className="font-[var(--font-family-label-mono)] text-[11px] text-[var(--outline-variant)] uppercase">
                  Rider Técnico Mínimo
                </span>
                <span className="font-[var(--font-family-data-num)] text-[13px] text-[var(--on-surface)]">
                  Piano Digital (88 teclas pesadas), 2x DI Activas, Microfone Condensador
                </span>
              </div>
              <div className="flex justify-between items-end pb-2">
                <span className="font-[var(--font-family-label-mono)] text-[11px] text-[var(--outline-variant)] uppercase">
                  Faixa de Cachê (B2B)
                </span>
                <span className="font-[var(--font-family-data-num)] text-[14px] text-emerald-500 text-flicker">
                  R$ 8.000 - 12.000
                </span>
              </div>
            </div>
            <div className="p-4 mt-auto border-t border-white/10 bg-[#050505]">
              <button 
                onClick={handleContractClick}
                className="w-full bg-transparent border border-white/10 text-[var(--primary)] font-[var(--font-family-label-mono)] text-[var(--font-size-label-mono)] py-3 hover:bg-white hover:text-black transition-colors duration-0 flex items-center justify-center gap-2 relative overflow-hidden group"
              >
                INICIAR CONTRATAÇÃO
                <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
              </button>
            </div>
          </article>
        </div>
      </main>
    </div>
  );
}
