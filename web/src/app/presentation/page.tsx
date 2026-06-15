'use client';

import { useState } from 'react';

const slides = [
  {
    type: 'cover',
    title: 'Street Hub Connect Curitiba',
    subtitle: 'A rede que conecta a cena independente de Curitiba a oportunidades reais.',
    tagline: 'Começando por Curitiba. Conectando a cena underground brasileira.'
  },
  {
    type: 'context',
    title: 'Contexto',
    content: [
      'Curitiba tem uma cena forte de rap, trap, hip-hop, batalhas, DJs, beatmakers, produtores e coletivos.',
      'Essa cena é viva, mas dispersa.',
      'Muitos artistas têm talento, mas pouca conexão com marcas, eventos, casas de show e projetos culturais.',
      'Produtores e contratantes também têm dificuldade para encontrar artistas com perfil certo.'
    ]
  },
  {
    type: 'problem',
    title: 'O Problema',
    main: 'A cena existe, mas as oportunidades não circulam de forma organizada.',
    pains: [
      'Artistas sem vitrine profissional',
      'Contratantes sem curadoria confiável',
      'Produtores sem base organizada',
      'Coletivos atuando isoladamente',
      'Oportunidades perdidas por falta de conexão',
      'Cultura local sem dados de impacto'
    ]
  },
  {
    type: 'solution',
    title: 'A Solução',
    subtitle: 'Street Hub Connect',
    description: 'Uma plataforma que aproxima artistas, produtores, marcas, espaços culturais e oportunidades.',
    focus: 'No MVP, o foco é Curitiba e região metropolitana.',
    steps: [
      'Artistas criam perfil',
      'Parceiros publicam oportunidades',
      'Plataforma recomenda artistas compatíveis',
      'Partes demonstram interesse',
      'Street Hub facilita a conexão'
    ]
  },
  {
    type: 'example',
    title: 'Aplicação Prática',
    scenario: 'Uma marca quer fazer um evento urbano em Curitiba.',
    inputs: [
      'Tipo de evento',
      'Bairro/local',
      'Verba',
      'Estilo desejado',
      'Público',
      'Data'
    ],
    result: 'A plataforma recomenda artistas da cena local que combinam com aquela oportunidade.'
  },
  {
    type: 'audience',
    title: 'Público-alvo',
    sections: [
      {
        title: 'Artistas',
        items: ['MCs', 'Rappers', 'Trappers', 'DJs', 'Beatmakers', 'Produtores', 'Performers']
      },
      {
        title: 'Parceiros',
        items: ['Marcas locais', 'Casas de show', 'Bares', 'Eventos', 'Festivais', 'Coletivos', 'Projetos sociais', 'Universidades', 'Produtores culturais']
      },
      {
        title: 'Território inicial',
        items: ['Curitiba', 'Região metropolitana']
      }
    ]
  },
  {
    type: 'differential',
    title: 'O Diferencial',
    intro: 'O Street Hub não é só um catálogo. É uma rede de conexão cultural.',
    points: [
      'Curadoria simples',
      'Foco local',
      'Linguagem acessível',
      'Oportunidade real',
      'Organização da cena',
      'Possibilidade de expansão nacional'
    ]
  },
  {
    type: 'mvp',
    title: 'MVP',
    features: [
      'Tela inicial',
      'Cadastro de artista',
      'Cadastro de oportunidade',
      'Tela de artistas recomendados',
      'Botão "Quero conversar"',
      'Dashboard simples de conexões geradas'
    ]
  },
  {
    type: 'impact',
    title: 'Impacto',
    metrics: [
      'Artistas cadastrados',
      'Oportunidades publicadas',
      'Conexões realizadas',
      'Eventos fechados',
      'Cachês movimentados',
      'Coletivos envolvidos',
      'Bairros impactados'
    ]
  },
  {
    type: 'expansion',
    title: 'Expansão',
    phases: [
      { phase: '1', title: 'Curitiba' },
      { phase: '2', title: 'Outras cidades do Paraná' },
      { phase: '3', title: 'SP, BH, RJ, Brasília, Salvador, Recife e outras capitais' },
      { phase: '4', title: 'Rede nacional da cena independente brasileira' }
    ]
  },
  {
    type: 'closing',
    title: 'Encerramento',
    quote: 'A Street Hub Connect nasce para transformar a força da rua em rede, oportunidade e impacto cultural.'
  }
];

export default function PresentationPage() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const renderSlide = () => {
    const slide = slides[currentSlide];
    switch (slide.type) {
      case 'cover':
        return (
          <div className="flex flex-col justify-center items-center h-full text-center p-8">
            <div className="mb-4 px-4 py-2 border border-[#10B981]">
              <span className="font-mono text-xs text-[#10B981] uppercase tracking-widest">Pitch Deck</span>
            </div>
            <h1 className="font-heading text-5xl md:text-7xl font-bold uppercase tracking-tighter mb-4">
              {slide.title}
            </h1>
            <p className="text-xl md:text-2xl text-white/80 mb-2 max-w-3xl">{slide.subtitle}</p>
            <p className="font-mono text-sm text-white/50 uppercase tracking-widest">{slide.tagline}</p>
          </div>
        );
      case 'context':
        return (
          <div className="h-full p-8 md:p-16 flex flex-col">
            <div className="mb-8">
              <span className="font-mono text-xs text-[#10B981] uppercase tracking-widest">02</span>
              <h2 className="font-heading text-4xl md:text-5xl font-bold uppercase tracking-tighter mt-2">{slide.title}</h2>
            </div>
            {slide.content && (
              <ul className="space-y-4 max-w-3xl">
                {slide.content.map((item, i) => (
                  <li key={i} className="flex gap-4 items-start">
                    <span className="text-[#10B981] font-mono text-2xl leading-none mt-1">•</span>
                    <span className="text-lg text-white/80">{item}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        );
      case 'problem':
        return (
          <div className="h-full p-8 md:p-16 flex flex-col">
            <div className="mb-8">
              <span className="font-mono text-xs text-[#10B981] uppercase tracking-widest">03</span>
              <h2 className="font-heading text-4xl md:text-5xl font-bold uppercase tracking-tighter mt-2">{slide.title}</h2>
            </div>
            <p className="text-2xl md:text-3xl font-heading text-white mb-8 max-w-2xl">{slide.main}</p>
            {slide.pains && (
              <div className="grid md:grid-cols-2 gap-4">
                {slide.pains.map((pain, i) => (
                  <div key={i} className="border border-white/10 bg-[#0E0E0E] p-4">
                    <span className="font-mono text-sm text-white/80">{pain}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        );
      case 'solution':
        return (
          <div className="h-full p-8 md:p-16 flex flex-col">
            <div className="mb-8">
              <span className="font-mono text-xs text-[#10B981] uppercase tracking-widest">04</span>
              <h2 className="font-heading text-4xl md:text-5xl font-bold uppercase tracking-tighter mt-2">{slide.title}</h2>
            </div>
            <div className="mb-6">
              {slide.subtitle && <h3 className="font-heading text-3xl text-[#10B981] mb-2">{slide.subtitle}</h3>}
              {slide.description && <p className="text-white/80 text-lg max-w-3xl mb-4">{slide.description}</p>}
              {slide.focus && <p className="font-mono text-sm text-white/60 uppercase">{slide.focus}</p>}
            </div>
            {slide.steps && (
              <div className="flex flex-wrap gap-4 mt-4">
                {slide.steps.map((step, i) => (
                  <div key={i} className="flex items-center gap-3 border border-white/10 bg-[#0E0E0E] px-4 py-2">
                    <span className="font-mono text-xs text-[#10B981]">{i + 1}</span>
                    <span className="font-mono text-sm text-white/80">{step}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        );
      case 'example':
        return (
          <div className="h-full p-8 md:p-16 flex flex-col">
            <div className="mb-8">
              <span className="font-mono text-xs text-[#10B981] uppercase tracking-widest">05</span>
              <h2 className="font-heading text-4xl md:text-5xl font-bold uppercase tracking-tighter mt-2">{slide.title}</h2>
            </div>
            <div className="border border-white/10 bg-[#0E0E0E] p-6 mb-6">
              {slide.scenario && <p className="font-heading text-xl text-white mb-4">{slide.scenario}</p>}
              {slide.inputs && (
                <div className="flex flex-wrap gap-2 mb-4">
                  {slide.inputs.map((input, i) => (
                    <span key={i} className="font-mono text-xs border border-white/20 px-3 py-1 text-white/70">{input}</span>
                  ))}
                </div>
              )}
            </div>
            {slide.result && <p className="text-lg text-white/80 border-l-2 border-[#10B981] pl-4">{slide.result}</p>}
          </div>
        );
      case 'audience':
        return (
          <div className="h-full p-8 md:p-16 flex flex-col">
            <div className="mb-8">
              <span className="font-mono text-xs text-[#10B981] uppercase tracking-widest">06</span>
              <h2 className="font-heading text-4xl md:text-5xl font-bold uppercase tracking-tighter mt-2">{slide.title}</h2>
            </div>
            {slide.sections && (
              <div className="grid md:grid-cols-3 gap-6">
                {slide.sections.map((section, i) => (
                  <div key={i} className="border border-white/10 bg-[#0E0E0E] p-4">
                    <h3 className="font-heading text-xl text-[#10B981] mb-3 uppercase">{section.title}</h3>
                    <div className="flex flex-wrap gap-2">
                      {section.items.map((item, j) => (
                        <span key={j} className="font-mono text-xs text-white/70 border border-white/10 px-2 py-1">{item}</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        );
      case 'differential':
        return (
          <div className="h-full p-8 md:p-16 flex flex-col">
            <div className="mb-8">
              <span className="font-mono text-xs text-[#10B981] uppercase tracking-widest">07</span>
              <h2 className="font-heading text-4xl md:text-5xl font-bold uppercase tracking-tighter mt-2">{slide.title}</h2>
            </div>
            {slide.intro && <p className="text-lg text-white/80 mb-6 max-w-3xl">{slide.intro}</p>}
            {slide.points && (
              <div className="grid md:grid-cols-2 gap-4">
                {slide.points.map((point, i) => (
                  <div key={i} className="flex items-center gap-4 border border-white/10 bg-[#0E0E0E] p-4">
                    <span className="text-[#10B981] text-2xl">✓</span>
                    <span className="font-mono text-sm text-white/80">{point}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        );
      case 'mvp':
        return (
          <div className="h-full p-8 md:p-16 flex flex-col">
            <div className="mb-8">
              <span className="font-mono text-xs text-[#10B981] uppercase tracking-widest">08</span>
              <h2 className="font-heading text-4xl md:text-5xl font-bold uppercase tracking-tighter mt-2">{slide.title}</h2>
            </div>
            {slide.features && (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {slide.features.map((feature, i) => (
                  <div key={i} className="border border-[#10B981]/50 bg-[#0E0E0E] p-4 flex items-center gap-3">
                    <span className="font-mono text-xs text-[#10B981]">{String(i + 1).padStart(2, '0')}</span>
                    <span className="font-mono text-sm text-white">{feature}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        );
      case 'impact':
        return (
          <div className="h-full p-8 md:p-16 flex flex-col">
            <div className="mb-8">
              <span className="font-mono text-xs text-[#10B981] uppercase tracking-widest">09</span>
              <h2 className="font-heading text-4xl md:text-5xl font-bold uppercase tracking-tighter mt-2">{slide.title}</h2>
            </div>
            {slide.metrics && (
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                {slide.metrics.map((metric, i) => (
                  <div key={i} className="border border-white/10 bg-[#0E0E0E] p-6 text-center">
                    <span className="font-mono text-2xl text-[#10B981]">●</span>
                    <p className="font-mono text-sm text-white/80 mt-2">{metric}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        );
      case 'expansion':
        return (
          <div className="h-full p-8 md:p-16 flex flex-col">
            <div className="mb-8">
              <span className="font-mono text-xs text-[#10B981] uppercase tracking-widest">10</span>
              <h2 className="font-heading text-4xl md:text-5xl font-bold uppercase tracking-tighter mt-2">{slide.title}</h2>
            </div>
            {slide.phases && (
              <div className="flex flex-col md:flex-row gap-4 md:items-center">
                {slide.phases.map((phase, i) => (
                  <div key={i} className="flex-1 border border-white/10 bg-[#0E0E0E] p-6">
                    <div className="font-mono text-xs text-white/50 mb-2">Fase {phase.phase}</div>
                    <p className="font-heading text-xl text-white">{phase.title}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        );
      case 'closing':
        return (
          <div className="h-full p-8 md:p-16 flex flex-col justify-center items-center text-center">
            <div className="mb-8">
              <span className="font-mono text-xs text-[#10B981] uppercase tracking-widest">11</span>
              <h2 className="font-heading text-4xl md:text-5xl font-bold uppercase tracking-tighter mt-2">{slide.title}</h2>
            </div>
            <blockquote className="text-2xl md:text-3xl font-heading text-white max-w-4xl border-l-4 border-[#10B981] pl-6 py-4">
              {slide.quote}
            </blockquote>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="fixed top-0 left-0 right-0 z-10 bg-black/80 backdrop-blur-sm border-b border-white/10 px-4 py-3 flex items-center justify-between">
        <div className="font-heading text-sm uppercase tracking-wider">Street Hub Connect</div>
        <div className="flex items-center gap-4">
          <button
            onClick={() => window.print()}
            className="flex items-center gap-2 px-4 py-2 font-mono text-xs uppercase tracking-widest bg-[#10B981] text-black hover:bg-white transition-colors"
          >
            📄 Exportar PDF
          </button>
          <span className="font-mono text-xs text-white/50">{currentSlide + 1} / {slides.length}</span>
        </div>
      </div>
      
      <div className="min-h-screen pt-16">
        {renderSlide()}
      </div>

      <div className="fixed bottom-0 left-0 right-0 bg-black/80 backdrop-blur-sm border-t border-white/10 px-4 py-4 flex justify-between items-center">
        <button
          onClick={prevSlide}
          disabled={currentSlide === 0}
          className="flex items-center gap-2 px-4 py-2 font-mono text-xs uppercase tracking-widest border border-white/20 hover:border-[#10B981] hover:text-[#10B981] disabled:opacity-30 disabled:cursor-not-allowed"
        >
          <span>←</span> Anterior
        </button>

        <div className="flex gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => goToSlide(i)}
              className={`w-2 h-2 rounded-full ${i === currentSlide ? 'bg-[#10B981]' : 'bg-white/30'}`}
            />
          ))}
        </div>

        <button
          onClick={nextSlide}
          disabled={currentSlide === slides.length - 1}
          className="flex items-center gap-2 px-4 py-2 font-mono text-xs uppercase tracking-widest border border-white/20 hover:border-[#10B981] hover:text-[#10B981] disabled:opacity-30 disabled:cursor-not-allowed"
        >
          Próximo <span>→</span>
        </button>
      </div>
    </div>
  );
}
