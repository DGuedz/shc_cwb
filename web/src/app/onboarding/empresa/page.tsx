'use client';

import { useRouter } from 'next/navigation';
import { MultiStepWizard } from '@/components/onboarding/MultiStepWizard';

// Step 1: Regime Tributário
function StepRegime({ formData, updateData, onSubmit }: any) {
  return (
    <div className="flex flex-col gap-6">
      <p className="font-mono text-sm text-[#A3A3A3] mb-4">
        A elegibilidade para dedução e segurança fiscal exige o enquadramento no Lucro Real.
      </p>
      
      <div className="flex flex-col gap-2">
        <label className="font-mono text-[10px] text-[#10B981] tracking-widest uppercase">RAZÃO SOCIAL DA EMPRESA</label>
        <input 
          type="text" 
          value={formData.nome || ''}
          onChange={e => updateData('nome', e.target.value)}
          placeholder="Ex: HOLDING INVESTIMENTOS S/A" 
          className="bg-transparent border-b border-[#393939] focus:border-[#10B981] outline-none py-3 text-white font-mono placeholder:text-[#393939] transition-colors"
        />
      </div>

      <div className="flex flex-col gap-4 mt-4">
        <label className="font-mono text-[10px] text-[#10B981] tracking-widest uppercase">REGIME TRIBUTÁRIO ATUAL</label>
        
        <div className="grid grid-cols-2 gap-4">
          <div 
            className={`border p-4 flex items-center justify-center cursor-pointer transition-colors ${formData.regime === 'lucro_real' ? 'border-[#10B981] bg-[#10B981]/10 text-[#10B981]' : 'border-[#393939] text-[#A3A3A3] hover:border-white'}`}
            onClick={() => updateData('regime', 'lucro_real')}
          >
            <span className="font-mono text-xs tracking-widest uppercase">LUCRO REAL</span>
          </div>
          <div 
            className={`border p-4 flex items-center justify-center cursor-pointer transition-colors ${formData.regime === 'outros' ? 'border-[#10B981] bg-[#10B981]/10 text-[#10B981]' : 'border-[#393939] text-[#A3A3A3] hover:border-white'}`}
            onClick={() => updateData('regime', 'outros')}
          >
            <span className="font-mono text-xs tracking-widest uppercase">OUTROS (PRESUMIDO/SIMPLES)</span>
          </div>
        </div>
        {formData.regime === 'outros' && (
          <p className="font-mono text-[10px] text-red-400 mt-2">
            Atenção: A dedução de IRPJ (Leis 9.249/95 e 8.313/91) é aplicável exclusivamente ao Lucro Real. A operação seguirá como patrocínio direto.
          </p>
        )}
      </div>
    </div>
  );
}

// Step 2: Impacto ESG
function StepImpact({ formData, updateData, onSubmit }: any) {
  const impacts = ['DIVERSIDADE_INCLUSAO', 'DESENVOLVIMENTO_LOCAL', 'TECNOLOGIA_INOVACAO', 'CULTURA_URBANA'];

  return (
    <div className="flex flex-col gap-6">
      <p className="font-mono text-sm text-[#A3A3A3] mb-4">
        Defina as diretrizes ESG para que nosso Match Engine filtre os artistas e eventos alinhados ao seu Objeto Social.
      </p>
      
      <div className="flex flex-col gap-3">
        <label className="font-mono text-[10px] text-[#10B981] tracking-widest uppercase">PRIORIDADE DE IMPACTO (MÚLTIPLA ESCOLHA)</label>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-2">
          {impacts.map(impact => {
            const isSelected = formData.impactos?.includes(impact);
            return (
              <div 
                key={impact}
                className={`border p-3 flex items-center gap-3 cursor-pointer transition-colors ${isSelected ? 'border-[#10B981] bg-[#10B981]/5' : 'border-[#393939] hover:border-white/50'}`}
                onClick={() => {
                  const current = formData.impactos || [];
                  const updated = isSelected ? current.filter((i: string) => i !== impact) : [...current, impact];
                  updateData('impactos', updated);
                }}
              >
                <div className={`w-3 h-3 border ${isSelected ? 'bg-[#10B981] border-[#10B981]' : 'border-[#393939]'}`} />
                <span className={`font-mono text-[10px] tracking-widest uppercase ${isSelected ? 'text-[#10B981]' : 'text-white'}`}>
                  {impact.replace('_', ' & ')}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

// Step 3: Volume Financeiro
function StepVolume({ formData, updateData, onSubmit }: any) {
  return (
    <div className="flex flex-col gap-6">
      <p className="font-mono text-sm text-[#A3A3A3] mb-4">
        Estimativa para cálculo do limite de 2% (Lei 9.249) ou 4% (Lei Rouanet) disponível para destinação.
      </p>
      
      <div className="flex flex-col gap-2">
        <label className="font-mono text-[10px] text-[#10B981] tracking-widest uppercase">LUCRO OPERACIONAL BRUTO ESTIMADO (ANUAL)</label>
        <div className="relative">
          <span className="absolute left-0 top-3 font-mono text-[#393939]">R$</span>
          <input 
            type="number" 
            value={formData.lucro || ''}
            onChange={e => updateData('lucro', e.target.value)}
            placeholder="0.00" 
            className="w-full bg-transparent border-b border-[#393939] focus:border-[#10B981] outline-none py-3 pl-8 text-white font-mono placeholder:text-[#393939] transition-colors"
          />
        </div>
      </div>

      {formData.lucro && formData.regime === 'lucro_real' && (
        <div className="mt-4 p-4 border border-[#10B981] bg-[#10B981]/5 flex flex-col gap-2">
          <span className="font-mono text-[10px] text-[#10B981] tracking-widest uppercase">POTENCIAL DE RENÚNCIA (ESTIMATIVA MÁXIMA)</span>
          <span className="font-mono text-xl text-white">
            R$ {((Number(formData.lucro) * 0.04)).toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
          </span>
          <span className="font-mono text-[10px] text-[#A3A3A3]">Baseado em 4% do L.O.B (Art. 18 Lei 8.313/91)</span>
        </div>
      )}
    </div>
  );
}

// Step 4: Controladoria
function StepController({ formData, updateData, onSubmit }: any) {
  return (
    <div className="flex flex-col gap-6">
      <p className="font-mono text-sm text-[#A3A3A3] mb-4">
        Para a emissão automática do recibo oficial e da Declaração IN SRF 87/96, precisamos dos dados da sua controladoria.
      </p>
      
      <div className="flex flex-col gap-2">
        <label className="font-mono text-[10px] text-[#10B981] tracking-widest uppercase">NOME DO RESPONSÁVEL CONTÁBIL</label>
        <input 
          type="text" 
          value={formData.contabilNome || ''}
          onChange={e => updateData('contabilNome', e.target.value)}
          placeholder="Ex: João Silva" 
          className="bg-transparent border-b border-[#393939] focus:border-[#10B981] outline-none py-3 text-white font-mono placeholder:text-[#393939] transition-colors"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label className="font-mono text-[10px] text-[#10B981] tracking-widest uppercase">E-MAIL DO DEPARTAMENTO (RECEBIMENTO DE RECIBOS)</label>
        <input 
          type="email" 
          value={formData.contabilEmail || ''}
          onChange={e => updateData('contabilEmail', e.target.value)}
          placeholder="controladoria@empresa.com.br" 
          className="bg-transparent border-b border-[#393939] focus:border-[#10B981] outline-none py-3 text-white font-mono placeholder:text-[#393939] transition-colors"
        />
      </div>
    </div>
  );
}

export default function EmpresaOnboarding() {
  const router = useRouter();

  const steps = [
    {
      id: 'regime',
      title: 'Diagnóstico Fiscal',
      subtitle: 'NATUREZA JURÍDICA E TRIBUTAÇÃO',
      content: <StepRegime />
    },
    {
      id: 'impact',
      title: 'Tese de Impacto',
      subtitle: 'DIRETRIZES ESG E MATCH CULTURAL',
      content: <StepImpact />
    },
    {
      id: 'volume',
      title: 'Projeção de Aporte',
      subtitle: 'CÁLCULO DE LIMITE DE DEDUÇÃO',
      content: <StepVolume />
    },
    {
      id: 'controller',
      title: 'Controladoria',
      subtitle: 'CONTATO PARA DECLARAÇÃO IN SRF 87/96',
      content: <StepController />
    }
  ];

  const handleComplete = (data: any) => {
    // Simulate API delay for better UX
    setTimeout(() => {
      // Empresas/Contratantes vão para o Matchboard ver os artistas disponíveis
      router.push('/dashboard/matchboard');
    }, 800);
  };

  return (
    <MultiStepWizard 
      type="PARTNER" 
      steps={steps} 
      onComplete={handleComplete} 
    />
  );
}
