---
name: shc-typography
description: Padroniza títulos e tipografia do Street Hub Connect. Use quando precisar aplicar, corrigir ou auditar headings em qualquer página do projeto.
license: internal
---

# SHC Typography — Skill de Padronização

## Regra principal

**Títulos nunca usam `text-5xl md:text-7xl` fixo.** Usam `shc-hero`, `shc-section` ou `shc-block` (definidos em `globals.css`) que são apenas `font-size: clamp(...)` — fluido, nunca ultrapassa o container.

As demais propriedades visuais vêm **sempre via classes Tailwind**, nunca embutidas no utility CSS.

---

## Escala de títulos

### H1 de página (hero, acima do fold)

```tsx
<h1 className="font-archivo shc-hero font-bold uppercase tracking-tighter leading-[0.85] max-w-4xl">
  <span className="block title-metallic reveal-delay-1">LINHA BRANCA</span>
  <span className="block text-[#10B981] title-reveal reveal-delay-2">LINHA VERDE</span>
</h1>
```

- `shc-hero` = `clamp(3rem, 6.5vw, 4.5rem)` → equivale a text-5xl → text-7xl
- Linha branca: `title-metallic` (clip-in + shimmer CSS)
- Linha verde: `title-reveal` sem metallic (cor mantida)
- Sem ScrollRevealTitle — usa CSS animation imediata (acima do fold)

---

### H2 de seção (abaixo do fold, scroll-triggered)

```tsx
<ScrollRevealTitle as="h2" metallic className="font-archivo shc-section font-bold uppercase tracking-tighter leading-[0.9] mb-8">
  TÍTULO DA SEÇÃO
</ScrollRevealTitle>
```

- `shc-section` = `clamp(1.875rem, 3.5vw, 3rem)` → equivale a text-3xl → text-5xl
- Sempre com `<ScrollRevealTitle metallic>` para o clip + shimmer no scroll
- Envolto em `<SectionReveal>` para o fade-up do bloco

---

### H3 de bloco / card

```tsx
<ScrollRevealTitle as="h3" className="font-archivo shc-block font-bold uppercase tracking-tight text-white">
  TÍTULO DO CARD
</ScrollRevealTitle>
```

- `shc-block` = `clamp(1.25rem, 2vw, 1.5rem)` → equivale a text-xl → text-2xl
- Sem metallic — só clip reveal

---

## Eyebrow (label acima do título)

```tsx
<span className="font-mono text-[9px] text-[#10B981] tracking-[0.4em] uppercase title-reveal">
  SHC_001
</span>
```

- Sempre `font-mono text-[9px] tracking-[0.4em] uppercase`
- Cor: `text-[#10B981]` (ativo) ou `text-neutral-500` (neutro)

---

## Animações CSS (acima do fold)

Definidas em `globals.css`:

| Classe | Efeito |
|---|---|
| `title-reveal` | clip-in da esquerda (0.7s) |
| `title-metallic` | clip-in + shimmer prateado |
| `reveal-delay-1` | delay 0.05s |
| `reveal-delay-2` | delay 0.15s |
| `reveal-delay-3` | delay 0.25s |

---

## Animações scroll (abaixo do fold)

Componentes em `src/components/ui/`:

| Componente | Uso |
|---|---|
| `<ScrollRevealTitle metallic>` | clip + shimmer nos H2 de seção |
| `<SectionReveal delay={n}>` | fade-up em blocos e cards |
| `<PageEntrance>` | fade-up geral no load da página |

---

## O que NUNCA fazer

```tsx
// ❌ ERRADO — tamanho fixo vaza em containers menores
<h1 className="text-5xl md:text-7xl ...">INVISIBILIDADE.</h1>

// ❌ ERRADO — shc-hero sem as outras propriedades
<h1 className="font-archivo shc-hero">Título</h1>

// ❌ ERRADO — shc-hero com propriedades duplicadas dentro do utility CSS
// (globals.css deve ter APENAS font-size no utility)

// ✅ CERTO
<h1 className="font-archivo shc-hero font-bold uppercase tracking-tighter leading-[0.85] max-w-4xl">
```

---

## Auditoria rápida

Para encontrar títulos fora do padrão no projeto:

```bash
grep -rn "text-5xl\|text-6xl\|text-7xl" src/app src/components --include="*.tsx"
```

Qualquer resultado deve ser migrado para `shc-hero`, `shc-section` ou `shc-block` + classes Tailwind completas.
