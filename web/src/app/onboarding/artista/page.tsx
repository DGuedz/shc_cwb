'use client';

import { MultiStepWizard } from '@/components/onboarding/MultiStepWizard';

// Step 1: Identidade e CNPJ
function StepIdentity({ formData, updateData, onSubmit }: any) {
  // Inicializa como 'cnpj' se não estiver definido
  const docType = formData.documentType || 'cnpj';

  return (
    <div className="flex flex-col gap-6">
      <p className="font-mono text-sm text-[#A3A3A3] mb-4">
        A validação de identidade é obrigatória. Selecione seu status atual de formalização.
      </p>

      <div className="grid grid-cols-2 gap-4">
        <div 
          className={`border p-4 flex items-center justify-center cursor-pointer transition-colors ${docType === 'cnpj' ? 'border-[#10B981] bg-[#10B981]/10 text-[#10B981]' : 'border-[#393939] text-[#A3A3A3] hover:border-white'}`}
          onClick={() => { updateData('documentType', 'cnpj'); updateData('document', ''); }}
        >
          <span className="font-mono text-[10px] tracking-widest uppercase">POSSUO CNPJ (MEI/ME)</span>
        </div>
        <div 
          className={`border p-4 flex text-center items-center justify-center cursor-pointer transition-colors ${docType === 'cpf' ? 'border-[#10B981] bg-[#10B981]/10 text-[#10B981]' : 'border-[#393939] text-[#A3A3A3] hover:border-white'}`}
          onClick={() => { updateData('documentType', 'cpf'); updateData('document', ''); }}
        >
          <span className="font-mono text-[10px] tracking-widest uppercase">SOU PESSOA FÍSICA (CPF)</span>
        </div>
      </div>
      
      <div className="flex flex-col gap-2 mt-2">
        <label className="font-mono text-[10px] text-[#10B981] tracking-widest uppercase">
          {docType === 'cnpj' ? 'RAZÃO SOCIAL OU NOME ARTÍSTICO' : 'NOME COMPLETO'}
        </label>
        <input 
          type="text" 
          value={formData.nome || ''}
          onChange={e => updateData('nome', e.target.value)}
          placeholder={docType === 'cnpj' ? "Ex: SILVA PRODUCOES LTDA" : "Ex: João da Silva"} 
          className="bg-transparent border-b border-[#393939] focus:border-[#10B981] outline-none py-3 text-white font-mono placeholder:text-[#393939] transition-colors"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label className="font-mono text-[10px] text-[#10B981] tracking-widest uppercase">
          {docType === 'cnpj' ? 'CNPJ' : 'CPF'}
        </label>
        <input 
          type="text" 
          value={formData.document || ''}
          onChange={e => updateData('document', e.target.value)}
          placeholder={docType === 'cnpj' ? "00.000.000/0000-00" : "000.000.000-00"} 
          className="bg-transparent border-b border-[#393939] focus:border-[#10B981] outline-none py-3 text-white font-mono placeholder:text-[#393939] transition-colors"
        />
      </div>

      {docType === 'cpf' && (
        <div className="mt-2 p-4 border border-[#393939] bg-[#10B981]/5 flex flex-col gap-2">
          <span className="font-mono text-[10px] text-[#10B981] tracking-widest uppercase font-bold">PROGRAMA DE QUALIFICAÇÃO (ICT)</span>
          <span className="font-mono text-xs text-[#A3A3A3] leading-relaxed">
            Notamos que você atua como Pessoa Física. A Associação o amparará em um programa de capacitação e governança, estruturando sua formalização para que você se torne elegível aos Acordos Tripartites e editais corporativos.
          </span>
        </div>
      )}
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
