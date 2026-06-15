'use client';

import { useEffect, useRef, useState } from 'react';

export default function Home() {
  const heroContentRef = useRef<HTMLDivElement>(null);
  const scrollIndicatorRef = useRef<HTMLDivElement>(null);
  const heroVideoRef = useRef<HTMLDivElement>(null);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [btnText, setBtnText] = useState('SOLICITAR ACESSO ALPHA');

  useEffect(() => {
    // Hero Scroll Mechanism
    const handleScroll = () => {
      const scrollPos = window.scrollY;
      const windowHeight = window.innerHeight;
      const heroSection = document.getElementById('hero-scroll');
      if (!heroSection || !heroContentRef.current || !scrollIndicatorRef.current) return;
      
      const totalScroll = heroSection.offsetHeight - windowHeight;
      const scrollPercent = Math.min(scrollPos / totalScroll, 1);
      
      // Fade out hero content
      if (scrollPercent < 0.25) {
        heroContentRef.current.style.opacity = String(1 - (scrollPercent * 4));
        heroContentRef.current.style.pointerEvents = 'auto';
      } else {
        heroContentRef.current.style.opacity = '0';
        heroContentRef.current.style.pointerEvents = 'none';
      }

      // Move scroll indicator
      scrollIndicatorRef.current.style.transform = `translateY(${scrollPercent * 100}%)`;
    };

    window.addEventListener('scroll', handleScroll);

    // Intersection Observer for Reveal Effects
    const observerOptions = { threshold: 0.1 };

    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.remove('reveal-hidden');
          entry.target.classList.add('reveal-visible');
        }
      });
    }, observerOptions);

    document.querySelectorAll('.section-reveal').forEach(el => revealObserver.observe(el));

    // Micro-interaction: Mouse followers or parallax
    const handleMouseMove = (e: MouseEvent) => {
      const moveX = (e.clientX - window.innerWidth / 2) * 0.01;
      const moveY = (e.clientY - window.innerHeight / 2) * 0.01;
      if (heroVideoRef.current) {
        heroVideoRef.current.style.transform = `translate(${moveX}px, ${moveY}px) scale(1.1)`;
      }
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setBtnText('PROCESSING...');
    setTimeout(() => {
      setFormSubmitted(true);
    }, 1500);
  };

  return (
    <div className="bg-black text-[var(--on-background)]">
      {/* Navigation Shell */}
      <nav className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-[var(--spacing-margin-mobile)] md:px-[var(--spacing-margin-desktop)] h-16 bg-[var(--background)]/80 backdrop-blur-xl border-b border-[var(--outline-variant)]/10">
        <a href="/" className="font-[var(--font-family-headline-md)] font-bold tracking-tighter text-[var(--primary)]">STREET HUB CONNECT</a>
        <div className="hidden md:flex items-center gap-8">
          <a className="font-[var(--font-family-label-mono)] text-[var(--on-surface-variant)] hover:text-[var(--primary)] transition-colors" href="/catalogo">Artistas</a>
          <a className="font-[var(--font-family-label-mono)] text-[var(--on-surface-variant)] hover:text-[var(--primary)] transition-colors" href="/oportunidades/criar">Oportunidades</a>
          <a className="font-[var(--font-family-label-mono)] text-[var(--on-surface-variant)] hover:text-[var(--primary)] transition-colors" href="/dashboard/acordos">Acordos</a>
        </div>
        <div className="flex items-center gap-4">
          <a href="/onboarding/artista" className="font-[var(--font-family-label-mono)] text-[var(--on-surface-variant)] hover:text-[var(--primary)] transition-colors">Login</a>
        </div>
      </nav>

      {/* Section 1: Hero (h-[4096px]) */}
      <section className="relative h-[4096px] w-full bg-black" id="hero-scroll">
        <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
          {/* Background Visual Layer */}
          <div className="absolute inset-0 z-0 brightness-50 contrast-125" id="hero-video-container" ref={heroVideoRef}></div>
          {/* Hero Content */}
          <div className="relative z-10 text-center px-[var(--spacing-margin-mobile)] max-w-4xl opacity-100 transition-opacity duration-300" id="hero-content" ref={heroContentRef}>
            <h1 className="font-[var(--font-family-headline-xl)] text-[var(--font-size-headline-xl)] md:text-[80px] leading-none mb-6 tracking-tighter">
              STREET HUB CONNECT
            </h1>
            <p className="font-[var(--font-family-body-md)] text-lg md:text-2xl text-[var(--on-surface-variant)] mb-12 max-w-2xl mx-auto">
              A plataforma que conecta artistas independentes a oportunidades reais.
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <a href="/onboarding/artista" className="bg-[var(--primary)] text-[var(--on-primary)] px-8 py-4 font-[var(--font-family-label-mono)] tracking-widest uppercase hover:bg-[var(--secondary)] transition-colors duration-100 text-center">
                Cadastrar Artista
              </a>
              <a href="/catalogo" className="bg-transparent border border-white/20 text-white px-8 py-4 font-[var(--font-family-label-mono)] tracking-widest uppercase hover:bg-white/10 transition-colors duration-100 text-center">
                Contratar Talentos
              </a>
            </div>
          </div>
          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center opacity-40">
            <span className="text-[10px] font-[var(--font-family-label-mono)] tracking-[0.3em] mb-2">SCROLL_DOWN</span>
            <div className="w-[1px] h-12 bg-white/30 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1/2 bg-[var(--secondary)] translate-y-0" id="scroll-bar-indicator" ref={scrollIndicatorRef}></div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: O Problema */}
      <section className="relative bg-black py-32 px-[var(--spacing-margin-mobile)] md:px-[var(--spacing-margin-desktop)] border-t border-white/10">
        <div className="max-w-[var(--spacing-container-max)] mx-auto grid grid-cols-1 md:grid-cols-12 gap-[var(--spacing-gutter)] lego-snap reveal-hidden section-reveal">
          <div className="md:col-span-8">
            <span className="text-[var(--secondary)] font-[var(--font-family-label-mono)] mb-4 block">PHASE_01 // THE_GAP</span>
            <h2 className="font-[var(--font-family-headline-lg)] md:text-6xl mb-8">Muito talento.<br/>Pouca estrutura.</h2>
            <p className="font-[var(--font-family-body-md)] text-lg text-[var(--on-surface-variant)] leading-relaxed max-w-2xl">
              Milhares de artistas produzem cultura todos os dias, mas poucos conseguem acessar oportunidades. A música independente precisa de infraestrutura robusta para escalar do underground ao mainstream.
            </p>
          </div>
          <div className="md:col-span-4 flex items-end">
            <div className="w-full h-48 bg-[var(--surface-container-lowest)] border border-white/10 p-4 relative">
              <div className="absolute inset-0 opacity-20"></div>
              <div className="relative z-10 h-full flex flex-col justify-between">
                <span className="font-[var(--font-family-label-mono)] text-[10px] text-[var(--outline)]">LATENCY_STATUS: HIGH</span>
                <div className="h-[1px] w-full bg-white/5"></div>
                <span className="font-[var(--font-family-label-mono)] text-[var(--secondary)]">FRAGMENTED_ECOSYSTEM</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: A Solução */}
      <section className="relative bg-[#0A0A0A] py-32 px-[var(--spacing-margin-mobile)] md:px-[var(--spacing-margin-desktop)] border-y border-white/10">
        <div className="max-w-[var(--spacing-container-max)] mx-auto mb-16 lego-snap reveal-hidden section-reveal">
          <h2 className="font-[var(--font-family-headline-lg)] md:text-5xl text-center">Descubra. Conecte. Contrate. Desenvolva.</h2>
        </div>
        <div className="max-w-[var(--spacing-container-max)] mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Card 1 */}
          <div className="bg-black p-8 border border-white/10 group hover:border-[var(--secondary)] transition-colors lego-snap reveal-hidden section-reveal">
            <div className="flex justify-between items-start mb-12">
              <span className="material-symbols-outlined text-4xl text-[var(--secondary)]" style={{ fontVariationSettings: "'FILL' 1" }}>mic_external_on</span>
              <span className="text-[var(--outline)] font-[var(--font-family-label-mono)] text-[10px]">MODULE_A // TALENTO</span>
            </div>
            <h3 className="font-[var(--font-family-headline-md)] mb-4">Para Artistas</h3>
            <p className="font-[var(--font-family-body-md)] text-[var(--on-surface-variant)] mb-8">Crie seu perfil profissional, centralize seu trabalho em um hub de alta performance e encontre oportunidades que realmente fazem sentido para sua carreira.</p>
            <div className="space-y-2">
              <div className="flex items-center gap-2 font-[var(--font-family-label-mono)] text-xs text-[var(--secondary)]">
                <span className="material-symbols-outlined text-sm">check_circle</span> 
                PORTFÓLIO MULTIMÍDIA
              </div>
              <div className="flex items-center gap-2 font-[var(--font-family-label-mono)] text-xs text-[var(--outline)]">
                <span className="material-symbols-outlined text-sm">check_circle</span> 
                GESTOR DE CONTRATOS
              </div>
            </div>
          </div>
          {/* Card 2 */}
          <div className="bg-black p-8 border border-white/10 group hover:border-[var(--secondary)] transition-colors lego-snap reveal-hidden section-reveal">
            <div className="flex justify-between items-start mb-12">
              <span className="material-symbols-outlined text-4xl text-[var(--secondary)]" style={{ fontVariationSettings: "'FILL' 1" }}>handshake</span>
              <span className="text-[var(--outline)] font-[var(--font-family-label-mono)] text-[10px]">MODULE_B // PARCEIROS</span>
            </div>
            <h3 className="font-[var(--font-family-headline-md)] mb-4">Para Empresas e Eventos</h3>
            <p className="font-[var(--font-family-body-md)] text-[var(--on-surface-variant)] mb-8">Descubra novos talentos com curadoria baseada em dados, monte lineups completos em minutos e invista no futuro da cultura urbana com segurança jurídica.</p>
            <div className="space-y-2">
              <div className="flex items-center gap-2 font-[var(--font-family-label-mono)] text-xs text-[var(--secondary)]">
                <span className="material-symbols-outlined text-sm">check_circle</span> 
                CURADORIA ANALÍTICA
              </div>
              <div className="flex items-center gap-2 font-[var(--font-family-label-mono)] text-xs text-[var(--outline)]">
                <span className="material-symbols-outlined text-sm">check_circle</span> 
                LOGÍSTICA DE EVENTOS
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Discovery Dashboard */}
      <section className="bg-black py-32 px-[var(--spacing-margin-mobile)] md:px-[var(--spacing-margin-desktop)] overflow-hidden" id="discovery">
        <div className="max-w-[var(--spacing-container-max)] mx-auto">
          <div className="mb-16 border-l-2 border-[var(--secondary)] pl-6 lego-snap reveal-hidden section-reveal flex justify-between items-end">
            <div>
              <span className="font-[var(--font-family-label-mono)] text-[var(--outline)]">DISCOVERY_ENGINE_V3.0</span>
              <h2 className="font-[var(--font-family-headline-lg)]">Conexões Ativas</h2>
            </div>
            <div className="hidden md:flex gap-4">
              <button className="border border-white/20 text-white px-4 py-2 font-[var(--font-family-label-mono)] text-xs hover:border-[var(--secondary)] transition-colors uppercase">Filtros</button>
              <button className="bg-white text-black px-4 py-2 font-[var(--font-family-label-mono)] text-xs hover:bg-[var(--secondary)] transition-colors uppercase">Nova Busca</button>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lego-snap reveal-hidden section-reveal">
            {/* Left Column: Artist Profile */}
            <div className="lg:col-span-8 bg-[var(--surface-container-lowest)] border border-white/10 overflow-hidden relative group">
              {/* Large Imagery Background */}
              <div className="absolute inset-0 bg-cover bg-center opacity-40 group-hover:opacity-50 transition-opacity duration-700" style={{ backgroundImage: 'url(https://lh3.googleusercontent.com/aida-public/AB6AXuB7WcjAelbJincZwJ3USn3oVpGG-Blv_4D7tvFcT3clOGyEnhGmViZTzSP0cD6IRyAW3TAILSg06c5N2og5ktAAfe_oEFdaf45H_vppzZIt21dMC1FPsqso9YMfINf23IRjIcn-yYD4DcCgIW0PnmdsvgG43R3X0yjcOuQ57MjEBPja8AJfjAtKQ3hG8nyTwt5huw5TnaFf1JkhazsCepUm6NH5-3m7fREYvDwGRV18MygnxbgbTGwewDLZsJpFgIb9sg8-zZcJCzKI)' }}></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent"></div>
              <div className="relative z-10 p-8 h-full flex flex-col justify-end min-h-[500px]">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-[var(--secondary)]">
                    <img alt="Artist Avatar" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDmjFYZ8wCh32RSMLvUj3YMPaq00Zjhe1uU40NOOJ0SAJIhMxS4-OAABnwoUkXGHmElAwgN7wRRLDXWpw1IkZ6_9bmIgsOhtNknUdRrRKdNie44R_nLs_FXvwePunFs14YtRexRZ6Na9JPi8NZZ_ykCJ8LPm8YdK9rnaxrws107RtppyDIdgptTPmVmPxOEfEd_dky3sfoY6zq7-WJdfDz6Jd8v6sTs647X0fJLxdGZEaI3U4QXqSXsPtgRZJscQ4Jzixnk7ql7_UA"/>
                  </div>
                  <div>
                    <h3 className="font-[var(--font-family-headline-lg)] text-3xl mb-1 tracking-tight">KILLA BEATS</h3>
                    <p className="font-[var(--font-family-label-mono)] text-[var(--secondary)] text-sm">PRODUTOR / DJ // SÃO PAULO, SP</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                  <div className="bg-black/50 backdrop-blur-sm border border-white/10 p-3">
                    <span className="block font-[var(--font-family-label-mono)] text-[10px] text-[var(--outline)] mb-1">GÊNERO</span>
                    <span className="font-[var(--font-family-label-mono)] text-sm text-white">TRAP / DRILL</span>
                  </div>
                  <div className="bg-black/50 backdrop-blur-sm border border-white/10 p-3">
                    <span className="block font-[var(--font-family-label-mono)] text-[10px] text-[var(--outline)] mb-1">SPOTIFY MONTHLY</span>
                    <span className="font-[var(--font-family-data-num)] text-sm text-white">125.4K</span>
                  </div>
                  <div className="bg-black/50 backdrop-blur-sm border border-white/10 p-3">
                    <span className="block font-[var(--font-family-label-mono)] text-[10px] text-[var(--outline)] mb-1">CACHE_RANGE</span>
                    <span className="font-[var(--font-family-data-num)] text-sm text-white">R$ 5K - 10K</span>
                  </div>
                  <div className="bg-black/50 backdrop-blur-sm border border-white/10 p-3 flex items-center justify-between">
                    <div>
                      <span className="block font-[var(--font-family-label-mono)] text-[10px] text-[var(--outline)] mb-1">MATCH_SCORE</span>
                      <span className="font-[var(--font-family-data-num)] text-sm text-[var(--secondary)]">94%</span>
                    </div>
                    <span className="material-symbols-outlined text-[var(--secondary)]">radar</span>
                  </div>
                </div>
                {/* Integrated Previews */}
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="flex-1 bg-[#1DB954]/10 border border-[#1DB954]/30 p-4 flex items-center gap-4 hover:bg-[#1DB954]/20 transition-colors cursor-pointer">
                    <span className="material-symbols-outlined text-[#1DB954] text-3xl">play_circle</span>
                    <div>
                      <span className="block font-[var(--font-family-label-mono)] text-[10px] text-[#1DB954] uppercase tracking-widest">Top Track</span>
                      <span className="font-[var(--font-family-body-md)] text-white">Noites Frias (feat. MC Teto)</span>
                    </div>
                  </div>
                  <div className="flex-1 bg-gradient-to-r from-[#833ab4]/10 via-[#fd1d1d]/10 to-[#fcb045]/10 border border-[#fd1d1d]/30 p-4 flex items-center gap-4 hover:opacity-80 transition-opacity cursor-pointer">
                    <span className="material-symbols-outlined text-[#fd1d1d] text-3xl">photo_camera</span>
                    <div>
                      <span className="block font-[var(--font-family-label-mono)] text-[10px] text-[#fd1d1d] uppercase tracking-widest">Latest Post</span>
                      <span className="font-[var(--font-family-body-md)] text-white">Live at Boiler Room SP</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Right Column: Connection Flow */}
            <div className="lg:col-span-4 bg-[var(--surface-container-lowest)] border border-white/10 p-8 flex flex-col">
              <div className="mb-8">
                <h4 className="font-[var(--font-family-headline-md)] text-xl mb-2">Status da Conexão</h4>
                <p className="font-[var(--font-family-body-md)] text-sm text-[var(--outline)]">Acompanhe o progresso do match para o evento "FESTIVAL URBANO 2024".</p>
              </div>
              <div className="flex-1 relative">
                {/* Vertical Line */}
                <div className="absolute left-[15px] top-4 bottom-4 w-[2px] bg-white/10"></div>
                {/* Flow Steps */}
                <div className="space-y-8 relative z-10">
                  {/* Step 1: Suggested */}
                  <div className="flex gap-6 items-start opacity-50">
                    <div className="w-8 h-8 rounded-full bg-[var(--surface-container-high)] border-2 border-[var(--outline)] flex items-center justify-center shrink-0">
                      <span className="material-symbols-outlined text-sm text-[var(--outline)]">check</span>
                    </div>
                    <div>
                      <span className="block font-[var(--font-family-label-mono)] text-[10px] text-[var(--outline)] mb-1">01 // ALGORITHM</span>
                      <h5 className="font-[var(--font-family-label-mono)] text-sm text-white mb-1 uppercase tracking-wider">Suggested</h5>
                      <p className="font-[var(--font-family-body-md)] text-xs text-[var(--outline)]">Identificado pela inteligência de curadoria.</p>
                    </div>
                  </div>
                  {/* Step 2: Partner Interested */}
                  <div className="flex gap-6 items-start opacity-50">
                    <div className="w-8 h-8 rounded-full bg-[var(--surface-container-high)] border-2 border-[var(--outline)] flex items-center justify-center shrink-0">
                      <span className="material-symbols-outlined text-sm text-[var(--outline)]">check</span>
                    </div>
                    <div>
                      <span className="block font-[var(--font-family-label-mono)] text-[10px] text-[var(--outline)] mb-1">02 // INITIATION</span>
                      <h5 className="font-[var(--font-family-label-mono)] text-sm text-white mb-1 uppercase tracking-wider">Partner Interested</h5>
                      <p className="font-[var(--font-family-body-md)] text-xs text-[var(--outline)]">Proposta inicial enviada pela produtora.</p>
                    </div>
                  </div>
                  {/* Step 3: Artist Accepted (Current) */}
                  <div className="flex gap-6 items-start">
                    <div className="w-8 h-8 rounded-full bg-[var(--secondary)]/20 border-2 border-[var(--secondary)] flex items-center justify-center shrink-0 shadow-[0_0_15px_rgba(78,222,163,0.3)]">
                      <span className="w-2 h-2 rounded-full bg-[var(--secondary)] animate-pulse"></span>
                    </div>
                    <div>
                      <span className="block font-[var(--font-family-label-mono)] text-[10px] text-[var(--secondary)] mb-1">03 // DOUBLE OPT-IN</span>
                      <h5 className="font-[var(--font-family-label-mono)] text-sm text-white mb-1 uppercase tracking-wider">Artist Reviewing</h5>
                      <p className="font-[var(--font-family-body-md)] text-xs text-[var(--on-surface-variant)]">Aguardando aceite do artista ou management.</p>
                      <div className="mt-4 flex gap-2">
                        <button className="bg-[var(--secondary)] text-black px-4 py-2 font-[var(--font-family-label-mono)] text-[10px] uppercase tracking-widest hover:bg-white transition-colors">ACEITAR</button>
                        <button className="border border-white/20 text-white px-4 py-2 font-[var(--font-family-label-mono)] text-[10px] uppercase tracking-widest hover:bg-white/10 transition-colors">DECLINAR</button>
                      </div>
                    </div>
                  </div>
                  {/* Step 4: Matched */}
                  <div className="flex gap-6 items-start opacity-30">
                    <div className="w-8 h-8 rounded-full bg-black border-2 border-white/20 flex items-center justify-center shrink-0">
                      <span className="w-2 h-2 rounded-full bg-white/20"></span>
                    </div>
                    <div>
                      <span className="block font-[var(--font-family-label-mono)] text-[10px] text-[var(--outline)] mb-1">04 // COMPLETION</span>
                      <h5 className="font-[var(--font-family-label-mono)] text-sm text-white mb-1 uppercase tracking-wider">Matched</h5>
                      <p className="font-[var(--font-family-body-md)] text-xs text-[var(--outline)]">Contratos gerados e acesso logístico liberado.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Conexão (Match) Form */}
      <section className="bg-[#0A0A0A] py-32 px-[var(--spacing-margin-mobile)] md:px-[var(--spacing-margin-desktop)] border-t border-white/10" id="contact">
        <div className="max-w-4xl mx-auto lego-snap reveal-hidden section-reveal">
          <div className="text-center mb-16">
            <h2 className="font-[var(--font-family-headline-lg)] md:text-5xl mb-4">Inicie a Conexão</h2>
            <p className="font-[var(--font-family-body-md)] text-[var(--on-surface-variant)]">Pronto para o próximo nível? Preencha os dados e nossa inteligência fará o resto.</p>
          </div>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="font-[var(--font-family-label-mono)] text-[var(--outline)] uppercase tracking-tighter">Nome / Marca</label>
                <input className="w-full bg-black border border-white/10 px-4 py-3 focus:border-white focus:ring-0 text-white font-[var(--font-family-body-md)] transition-colors" placeholder="Ex: Street Collective" required type="text"/>
              </div>
              <div className="space-y-2">
                <label className="font-[var(--font-family-label-mono)] text-[var(--outline)] uppercase tracking-tighter">Tipo de Perfil</label>
                <select className="w-full bg-black border border-white/10 px-4 py-3 focus:border-white focus:ring-0 text-white font-[var(--font-family-body-md)] transition-colors appearance-none" required>
                  <option disabled selected value="">Selecione...</option>
                  <option value="talento">Talento (Artista/Produtor)</option>
                  <option value="parceiro">Parceiro (Marca/Evento)</option>
                </select>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="font-[var(--font-family-label-mono)] text-[var(--outline)] uppercase tracking-tighter">Link (Spotify/Instagram)</label>
                <input className="w-full bg-black border border-white/10 px-4 py-3 focus:border-white focus:ring-0 text-white font-[var(--font-family-body-md)] transition-colors" placeholder="https://..." type="url"/>
              </div>
              <div className="space-y-2">
                <label className="font-[var(--font-family-label-mono)] text-[var(--outline)] uppercase tracking-tighter">Contato (WhatsApp/Email)</label>
                <input className="w-full bg-black border border-white/10 px-4 py-3 focus:border-white focus:ring-0 text-white font-[var(--font-family-body-md)] transition-colors" placeholder="contato@street.hub" required type="text"/>
              </div>
            </div>
            <div className="pt-6">
              {!formSubmitted ? (
                <button className="w-full bg-[var(--primary)] text-[var(--on-primary)] py-5 font-[var(--font-family-label-mono)] uppercase tracking-[0.3em] font-bold hover:bg-[var(--secondary)] transition-colors flex items-center justify-center gap-4 group" type="submit">
                  <span>{btnText}</span>
                  <span className="material-symbols-outlined group-hover:translate-x-2 transition-transform">arrow_forward</span>
                </button>
              ) : (
                <div className="p-4 border border-[var(--secondary)] bg-[var(--secondary)]/10 text-[var(--secondary)] font-[var(--font-family-label-mono)] text-center">
                  SOLICITAÇÃO RECEBIDA COM SUCESSO. AGUARDE CONTATO DO OPERADOR.
                </div>
              )}
            </div>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full py-12 px-[var(--spacing-margin-mobile)] md:px-[var(--spacing-margin-desktop)] border-t border-[var(--outline-variant)] bg-[var(--surface-container-lowest)]">
        <div className="max-w-[var(--spacing-container-max)] mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col gap-2">
            <span className="font-[var(--font-family-label-mono)] font-bold text-[var(--primary)]">STREET HUB CONNECT</span>
            <span className="font-[var(--font-family-label-mono)] text-[var(--outline)]">© 2024 STREET HUB CONNECT. ALL RIGHTS RESERVED.</span>
          </div>
          <div className="flex flex-wrap justify-center gap-6">
            <span className="font-[var(--font-family-label-mono)] text-[var(--secondary)] flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[var(--secondary)] animate-pulse"></span>
              SYSTEM STATUS: ONLINE
            </span>
            <span className="font-[var(--font-family-label-mono)] text-[var(--outline)]">v2.4.0-STABLE</span>
            <a className="font-[var(--font-family-label-mono)] text-[var(--outline)] hover:text-[var(--primary)] transition-colors" href="#">PRIVACY</a>
            <a className="font-[var(--font-family-label-mono)] text-[var(--outline)] hover:text-[var(--primary)] transition-colors" href="#">TERMS</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
