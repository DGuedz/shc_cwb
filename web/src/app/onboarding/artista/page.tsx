'use client';

import { MultiStepWizard } from '@/components/onboarding/MultiStepWizard';

// Step 1: Identidade e CNPJ
function StepIdentity({ formData, updateData, onSubmit }: any) {
  return (
    <div className="flex flex-col gap-6">
      <p className="font-mono text-sm text-[#A3A3A3] mb-4">
        A validação de identidade é obrigatória para conformidade. Insira os dados oficiais do responsável legal.
      </p>
      
      <div className="flex flex-col gap-2">
        <label className="font-mono text-[10px] text-[#10B981] tracking-widest uppercase">RAZÃO SOCIAL OU NOME COMPLETO</label>
        <input 
          type="text" 
          value={formData.nome || ''}
          onChange={e => updateData('nome', e.target.value)}
          placeholder="Ex: SILVA PRODUCOES LTDA" 
          className="bg-transparent border-b border-[#393939] focus:border-[#10B981] outline-none py-3 text-white font-mono placeholder:text-[#393939] transition-colors"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label className="font-mono text-[10px] text-[#10B981] tracking-widest uppercase">CNPJ (MEI OU ME)</label>
        <input 
          type="text" 
          value={formData.cnpj || ''}
          onChange={e => updateData('cnpj', e.target.value)}
          placeholder="00.000.000/0000-00" 
          className="bg-transparent border-b border-[#393939] focus:border-[#10B981] outline-none py-3 text-white font-mono placeholder:text-[#393939] transition-colors"
        />
      </div>
    </div>
  );
}

// Step 2: Portfólio
function StepPortfolio({ formData, updateData, onSubmit }: any) {
  return (
    <div className="flex flex-col gap-6">
      <p className="font-mono text-sm text-[#A3A3A3] mb-4">
        Comprovação de atuação cultural. O investidor avaliará seu impacto digital e histórico de apresentações.
      </p>
      
      <div className="flex flex-col gap-2">
        <label className="font-mono text-[10px] text-[#10B981] tracking-widest uppercase">LINK DO SPOTIFY / PLATAFORMA</label>
        <input 
          type="url" 
          value={formData.spotify || ''}
          onChange={e => updateData('spotify', e.target.value)}
          placeholder="https://open.spotify.com/artist/..." 
          className="bg-transparent border-b border-[#393939] focus:border-[#10B981] outline-none py-3 text-white font-mono placeholder:text-[#393939] transition-colors"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label className="font-mono text-[10px] text-[#10B981] tracking-widest uppercase">LINK DO CLIPPING (ÚLTIMOS 3 ANOS)</label>
        <input 
          type="url" 
          value={formData.clipping || ''}
          onChange={e => updateData('clipping', e.target.value)}
          placeholder="Drive, Dropbox ou Site Pessoal" 
          className="bg-transparent border-b border-[#393939] focus:border-[#10B981] outline-none py-3 text-white font-mono placeholder:text-[#393939] transition-colors"
        />
      </div>
    </div>
  );
}

// Step 3: Custos
function StepCosts({ formData, updateData, onSubmit }: any) {
  return (
    <div className="flex flex-col gap-6">
      <p className="font-mono text-sm text-[#A3A3A3] mb-4">
        Estrutura de custos base para geração do Plano de Trabalho e viabilidade via Acordo Tripartite.
      </p>
      
      <div className="flex flex-col gap-2">
        <label className="font-mono text-[10px] text-[#10B981] tracking-widest uppercase">CACHÊ MÉDIO (BRL)</label>
        <input 
          type="number" 
          value={formData.cache || ''}
          onChange={e => updateData('cache', e.target.value)}
          placeholder="Ex: 5000" 
          className="bg-transparent border-b border-[#393939] focus:border-[#10B981] outline-none py-3 text-white font-mono placeholder:text-[#393939] transition-colors"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label className="font-mono text-[10px] text-[#10B981] tracking-widest uppercase">CUSTOS LOGÍSTICOS E EQUIPE (ESTIMATIVA)</label>
        <input 
          type="number" 
          value={formData.logistica || ''}
          onChange={e => updateData('logistica', e.target.value)}
          placeholder="Ex: 2000" 
          className="bg-transparent border-b border-[#393939] focus:border-[#10B981] outline-none py-3 text-white font-mono placeholder:text-[#393939] transition-colors"
        />
      </div>
    </div>
  );
}

// Step 4: Compliance
function StepCompliance({ formData, updateData, onSubmit }: any) {
  return (
    <div className="flex flex-col gap-6">
      <p className="font-mono text-sm text-[#A3A3A3] mb-4">
        Ateste sua conformidade para estar elegível aos repasses de patrocínio do Terceiro Setor.
      </p>
      
      <div className="flex items-start gap-4 mt-4 border border-[#393939] p-4 bg-[#131313] hover:border-[#10B981] transition-colors cursor-pointer" onClick={() => updateData('certidoes', !formData.certidoes)}>
        <div className={`w-5 h-5 border flex items-center justify-center mt-0.5 ${formData.certidoes ? 'border-[#10B981] bg-[#10B981]' : 'border-[#393939]'}`}>
           {formData.certidoes && <span className="text-black text-xs">✓</span>}
        </div>
        <div>
          <span className="font-mono text-xs text-white uppercase tracking-widest block mb-1">REGULARIDADE FISCAL</span>
          <span className="font-mono text-[10px] text-[#A3A3A3]">Declaro possuir CND Federal, Estadual e Municipal válidas.</span>
        </div>
      </div>

      <div className="flex items-start gap-4 border border-[#393939] p-4 bg-[#131313] hover:border-[#10B981] transition-colors cursor-pointer" onClick={() => updateData('tripartite', !formData.tripartite)}>
        <div className={`w-5 h-5 border flex items-center justify-center mt-0.5 ${formData.tripartite ? 'border-[#10B981] bg-[#10B981]' : 'border-[#393939]'}`}>
           {formData.tripartite && <span className="text-black text-xs">✓</span>}
        </div>
        <div>
          <span className="font-mono text-xs text-white uppercase tracking-widest block mb-1">TERMO TRIPARTITE</span>
          <span className="font-mono text-[10px] text-[#A3A3A3]">Concordo com os termos do repasse via MROSC e auditoria de métricas.</span>
        </div>
      </div>
    </div>
  );
}

export default function ArtistaOnboarding() {
  const steps = [
    {
      id: 'identity',
      title: 'Qualificação Legal',
      subtitle: 'VERIFICAÇÃO DE CNPJ E NATUREZA',
      content: <StepIdentity />
    },
    {
      id: 'portfolio',
      title: 'Auditoria de Impacto',
      subtitle: 'ATUAÇÃO CULTURAL E HISTÓRICO',
      content: <StepPortfolio />
    },
    {
      id: 'costs',
      title: 'Plano de Trabalho',
      subtitle: 'COMPOSIÇÃO DE CUSTOS OPERACIONAIS',
      content: <StepCosts />
    },
    {
      id: 'compliance',
      title: 'Termo de Compliance',
      subtitle: 'CERTIDÕES E ACORDO TRIPARTITE',
      content: <StepCompliance />
    }
  ];

  const handleComplete = (data: any) => {
    console.log('Match Engine Data (Artista):', data);
    // Aqui conectaremos com o backend depois
    alert('DOSSIÊ GERADO. Em breve você receberá as oportunidades compatíveis.');
  };

  return (
    <MultiStepWizard 
      type="TALENT" 
      steps={steps} 
      onComplete={handleComplete} 
    />
  );
}
