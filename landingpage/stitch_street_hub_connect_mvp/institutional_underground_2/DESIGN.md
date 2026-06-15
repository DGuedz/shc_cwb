---
name: Institutional Underground
colors:
  surface: '#031427'
  surface-dim: '#031427'
  surface-bright: '#2a3a4f'
  surface-container-lowest: '#000f21'
  surface-container-low: '#0b1c30'
  surface-container: '#102034'
  surface-container-high: '#1b2b3f'
  surface-container-highest: '#26364a'
  on-surface: '#d3e4fe'
  on-surface-variant: '#bbcabf'
  inverse-surface: '#d3e4fe'
  inverse-on-surface: '#213145'
  outline: '#86948a'
  outline-variant: '#3c4a42'
  surface-tint: '#4edea3'
  primary: '#4edea3'
  on-primary: '#003824'
  primary-container: '#10b981'
  on-primary-container: '#00422b'
  inverse-primary: '#006c49'
  secondary: '#c9c6c5'
  on-secondary: '#313030'
  secondary-container: '#4a4949'
  on-secondary-container: '#bab8b7'
  tertiary: '#c6c6c7'
  on-tertiary: '#2f3131'
  tertiary-container: '#a2a3a3'
  on-tertiary-container: '#37393a'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#6ffbbe'
  primary-fixed-dim: '#4edea3'
  on-primary-fixed: '#002113'
  on-primary-fixed-variant: '#005236'
  secondary-fixed: '#e5e2e1'
  secondary-fixed-dim: '#c9c6c5'
  on-secondary-fixed: '#1c1b1b'
  on-secondary-fixed-variant: '#474646'
  tertiary-fixed: '#e2e2e2'
  tertiary-fixed-dim: '#c6c6c7'
  on-tertiary-fixed: '#1a1c1c'
  on-tertiary-fixed-variant: '#454747'
  background: '#031427'
  on-background: '#d3e4fe'
  surface-variant: '#26364a'
typography:
  headline-xl:
    fontFamily: Archivo Narrow
    fontSize: 40px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Archivo Narrow
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: -0.01em
  headline-sm:
    fontFamily: Archivo Narrow
    fontSize: 20px
    fontWeight: '600'
    lineHeight: '1.4'
    letterSpacing: '0'
  body-lg:
    fontFamily: Archivo Narrow
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.5'
    letterSpacing: '0'
  body-sm:
    fontFamily: Archivo Narrow
    fontSize: 14px
    fontWeight: '400'
    lineHeight: '1.5'
    letterSpacing: '0'
  data-mono:
    fontFamily: Geist
    fontSize: 14px
    fontWeight: '500'
    lineHeight: '1.2'
    letterSpacing: 0.02em
  label-caps:
    fontFamily: Geist
    fontSize: 11px
    fontWeight: '700'
    lineHeight: '1'
    letterSpacing: 0.1em
spacing:
  base: 4px
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 48px
  container-max: 1440px
  gutter: 16px
---

## Brand & Style

The design system embodies a dual-natured personality: "Precision in Darkness" and "Clinical Clarity." It is built for mission-critical B2B environments where data density and rapid scanning are paramount. The brand evokes an emotional response of absolute reliability, high-stakes intelligence, and industrial-grade efficiency.

The visual style is a hybrid of **Modern Minimalism** and **Technical Brutalism**. It utilizes a strict structural grid, monospaced data displays, and high-contrast color pairings to ensure that information is never obscured by decorative elements. The transition between dark and light modes represents a shift from a "control room" focus to a "laboratory" precision, maintaining a consistent professional rigor throughout.

## Colors

The palette is engineered for high-contrast accessibility. 

- **Dark Mode:** Utilizes near-black surfaces to reduce eye strain in low-light environments. Text is rendered in pure white or high-saturation emerald for critical actions.
- **Light Mode:** Shifts to a "Clinical White" aesthetic. Surfaces are pure white with light gray layering to define hierarchy. Text moves to near-black for maximum legibility.
- **Accents:** The emerald green (#10b981) is the signature action color. In light mode, the saturation is slightly deepened to #059669 to ensure it meets WCAG contrast requirements against white backgrounds.

Semantic tokens must be used exclusively to ensure seamless switching between modes. Surfaces follow a "Container" logic where the secondary surface always sits atop the primary.

## Typography

This system uses a dual-font strategy to separate narrative content from technical data.

1. **Archivo Narrow:** Used for all headers, body copy, and primary UI labels. Its condensed nature allows for high information density without sacrificing readability.
2. **Geist (Mono):** Used for all numerical data, status codes, and system-level metadata. This reinforces the "Institutional" feel and ensures that columns of numbers align perfectly for rapid scanning.

All headers use tight line heights and slight negative letter spacing to create a compact, authoritative look. Labels and data points use increased letter spacing to ensure clarity at small sizes.

## Layout & Spacing

The layout is governed by a **fixed-column grid** on desktop (12 columns) and a **fluid grid** on mobile (4 columns). 

- **Spacing Rhythm:** Based on a strict 4px baseline grid. All margins, paddings, and heights must be multiples of 4.
- **Data Density:** In mission-critical views, the `sm` (8px) and `md` (16px) units are the primary spacers to maximize information visible on a single screen.
- **Structure:** Content is housed in modular containers. Each module is separated by a consistent 1px outline to define boundaries without adding visual bulk.

## Elevation & Depth

This system rejects soft shadows and ambient blurs. Depth is conveyed through **Tonal Layers** and **Bold Outlines**.

- **Z-Axis Hierarchy:** Higher elevation elements do not cast shadows. Instead, they use a slightly lighter surface color (in dark mode) or a slightly darker surface color (in light mode) combined with a 1px solid outline.
- **Overlays:** Modals and menus use a high-contrast 2px border in the `primary` color to signal they are active and floating above the base interface.
- **Glass:** Backdrop filters are used only for persistent navigation bars, with a 70% opacity fill and a heavy blur (20px) to maintain legibility of the background content while providing a sense of position.

## Shapes

The shape language is **Sharp (0px)**. 

To maintain the "Institutional" and "Underground" aesthetic, rounded corners are strictly prohibited for all functional UI elements (buttons, inputs, cards, containers). The only exception is for circular status indicators or user avatars. This architectural sharpness emphasizes the system's precision and "no-nonsense" engineering.

## Components

- **Buttons:** Rectangular with 0px radius. Primary buttons use the emerald fill with `on-primary` text. Ghost buttons use a 1px outline in the current `on-surface` color.
- **Input Fields:** 1px bottom-border only for a "minimalist ledger" look, or 1px full border for high-density forms. Labels are always positioned above in `label-caps`.
- **Chips/Badges:** Monospaced text inside a 1px bordered box. Status indicators (success, error, warning) use solid color blocks with black text.
- **Data Tables:** No vertical lines. Horizontal lines use the `outline` token at 1px. Header rows use a `surface-secondary` fill with uppercase monospaced labels.
- **Cards:** Defined by a 1px `outline` token. No shadows. Cards should feel like panels in a physical dashboard.
- **Status Indicators:** Use a small square (not a circle) to maintain the geometric consistency of the design system.