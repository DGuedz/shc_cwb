---
name: "shc-brutalism-builder"
description: "Construtor UI/UX do Street Hub Connect. Invoque quando for implementar ou refatorar páginas, dashboards ou componentes visuais B2B. Garante a estética de Brutalismo Institucional."
---

# SHC Brutalism Builder

Skill responsável por traduzir a estética do **Brutalismo Institucional (V2.4-STABLE)** em código real Tailwind v4 / React.

## Quando Invocar
- Ao codar ou refatorar páginas da aplicação (`/home`, `/dashboard`, `/wallet`, `/deals`, etc).
- Ao criar componentes reutilizáveis (Cards, TopNavBar, Widgets Financeiros).
- Quando o `hook-via-intencao` apontar para a necessidade de entregar a UI com a estética da ASTEPAM / SHC.

## 1. Fundamentos Visuais (Tailwind Tokens)

### Paleta de Cores
O contraste deve ser cirúrgico.
- **Surface (Fundo denso):** `bg-[#131313]` ou `bg-black`.
- **Surface Dim (Containers):** `bg-[#0E0E0E]`.
- **Primary / Accent (Verde Esmeralda):** `text-[#10B981]`, `border-[#10B981]`, `bg-[#10B981]`.
- **Secondary (Leitura):** `text-white`, `text-neutral-200`.
- **Outline (Bordas técnicas):** `border-[#393939]`.

### Tipografia
- **Headers & Display:** Fonte `Archivo Narrow`, peso `font-bold`, transformação `uppercase`, e tracking `tracking-tight` (ou letter-spacing negativo para peso institucional).
- **Corpo:** Fonte `Archivo Narrow` (não use Inter a menos que seja micro-copy), peso normal, `leading-relaxed`.
- **Dados & Metadados (Obrigatório para finanças/IDs):** `font-mono` (JetBrains Mono).

### Forma e Estrutura
- **Bordas e Sombras:** NENHUMA sombra suave (`shadow-lg`, etc). Use bordas sólidas de 1px: `border border-[#393939]`.
- **Arredondamento:** Bordas vivas (`rounded-none`) ou arredondamento técnico bem sutil (`rounded-md` ou `8px`). Evite formas orgânicas ou pílulas grandes (exceto em badges de status).
- **Grids:** Estruture informações em CSS Grids densos, mas com `gap-8` ou superior para respiro técnico.

## 2. Anatomia dos Componentes B2B

### TopNavBar
- Logo em uppercase e bold.
- Indicador de página ativa: `border-b-2 border-[#10B981]`.
- Badge de Status: `text-xs font-mono text-[#10B981] bg-[#10B981]/10 px-2 py-1 uppercase` (ex: "SYSTEM LINKED").

### Cards de Dados (Dossiers / Deals)
```tsx
<div className="bg-[#0E0E0E] border border-[#393939] p-6 flex flex-col gap-4">
  <div className="flex justify-between items-center border-b border-[#393939] pb-4">
    <h3 className="font-archivo uppercase font-bold text-white">Título Técnico</h3>
    <span className="font-mono text-xs text-[#10B981]">TX-ID: 89A4</span>
  </div>
  <div className="font-mono text-sm text-neutral-400">
    <p>AGREED_BUDGET: R$ 50.000,00</p>
  </div>
  <button className="mt-auto border border-[#393939] hover:border-[#10B981] hover:text-[#10B981] text-white uppercase font-bold py-2 transition-colors">
    Visualizar Dossiê
  </button>
</div>
```

## 3. Regras de Compliance UX (Anti AI-Slop)
1. **Verbalize o Dado:** Números soltos não existem. Sempre preceda com labels técnicos: `SCORE: 98`, `STATUS: LIQUIDADO`.
2. **Sem Gradientes Genéricos:** Nada de fundos roxos, gradientes suaves ou emojis. A UI é um terminal de operações de alto valor.
3. **Transições:** Transições devem ser secas (`duration-100` ou `150`), parecendo um sistema financeiro rápido, não um site animado.
