---
name: Institutional Underground
colors:
  surface: '#131313'
  surface-dim: '#131313'
  surface-bright: '#393939'
  surface-container-lowest: '#0e0e0e'
  surface-container-low: '#1c1b1b'
  surface-container: '#20201f'
  surface-container-high: '#2a2a2a'
  surface-container-highest: '#353535'
  on-surface: '#e5e2e1'
  on-surface-variant: '#c4c7c8'
  inverse-surface: '#e5e2e1'
  inverse-on-surface: '#313030'
  outline: '#8e9192'
  outline-variant: '#444748'
  surface-tint: '#c6c6c7'
  primary: '#ffffff'
  on-primary: '#2f3131'
  primary-container: '#e2e2e2'
  on-primary-container: '#636565'
  inverse-primary: '#5d5f5f'
  secondary: '#4edea3'
  on-secondary: '#003824'
  secondary-container: '#00a572'
  on-secondary-container: '#00311f'
  tertiary: '#ffffff'
  on-tertiary: '#313030'
  tertiary-container: '#e5e2e1'
  on-tertiary-container: '#656464'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#e2e2e2'
  primary-fixed-dim: '#c6c6c7'
  on-primary-fixed: '#1a1c1c'
  on-primary-fixed-variant: '#454747'
  secondary-fixed: '#6ffbbe'
  secondary-fixed-dim: '#4edea3'
  on-secondary-fixed: '#002113'
  on-secondary-fixed-variant: '#005236'
  tertiary-fixed: '#e5e2e1'
  tertiary-fixed-dim: '#c9c6c5'
  on-tertiary-fixed: '#1c1b1b'
  on-tertiary-fixed-variant: '#474646'
  background: '#131313'
  on-background: '#e5e2e1'
  surface-variant: '#353535'
typography:
  headline-xl:
    fontFamily: Archivo Narrow
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.04em
  headline-lg:
    fontFamily: Archivo Narrow
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.03em
  headline-md:
    fontFamily: Archivo Narrow
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
    letterSpacing: -0.01em
  body-md:
    fontFamily: Inter
    fontSize: 15px
    fontWeight: '400'
    lineHeight: '1.5'
    letterSpacing: '0'
  label-mono:
    fontFamily: JetBrains Mono
    fontSize: 13px
    fontWeight: '500'
    lineHeight: '1'
    letterSpacing: 0.02em
  data-num:
    fontFamily: JetBrains Mono
    fontSize: 14px
    fontWeight: '400'
    lineHeight: '1'
    letterSpacing: '0'
  headline-lg-mobile:
    fontFamily: Archivo Narrow
    fontSize: 28px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.03em
spacing:
  unit: 4px
  gutter: 16px
  margin-mobile: 16px
  margin-desktop: 32px
  container-max: 1440px
---

## Brand & Style

This design system establishes an "Institutional Brutalist" aesthetic, merging the raw, unrefined energy of underground hip-hop culture with the precision of mission-critical music technology. The interface feels like a high-end rack-mounted hardware unit: heavy, indestructible, and authoritative.

The target audience consists of power users—producers, engineers, and distributors—who value efficiency over ornamentation. The emotional response is one of total control and professional grit. The style is characterized by pure black environments, rigid structural grids, and a strict adherence to functional density. There are no gradients or soft shadows; depth is communicated through stroke weight and tonal layering of matte surfaces.

## Colors

The palette is rooted in a "Void-State" dark mode, utilizing a pure black `#000000` foundation to maximize contrast and focus. 

- **Foundation:** `#000000` is the absolute background.
- **Surface:** `#0A0A0A` (Matte Titanium) is used for containers and elevated panels to create subtle structural separation.
- **Action/Accent:** `#10B981` (Neon Emerald) is the sole functional accent, reserved strictly for success states, active transport controls, and critical data peaks.
- **Borders:** All structural borders use White at 10% opacity (`rgba(255, 255, 255, 0.1)`) to maintain a rigid, technical blueprint feel without visual clutter.

## Typography

The typography system is a high-contrast hybrid designed for rapid data scanning and a "Street-Technical" vibe.

1.  **Structural Headings:** **Archivo Narrow** is used for headlines. Its condensed nature and tight tracking evoke posters and industrial labeling. All major headlines should be set with negative letter-spacing and uppercase styling for maximum impact.
2.  **Body Text:** **Inter** provides a neutral, highly legible mid-ground for descriptions and settings, ensuring the UI remains grounded and professional.
3.  **Data & Metrics:** **JetBrains Mono** handles all technical metadata, timestamps, and labels. This monospaced choice reinforces the "MusicTech" software aesthetic and ensures numerical data aligns perfectly in vertical columns.

## Layout & Spacing

The layout is governed by a **Fixed Grid** system that mimics technical blueprints. 

- **The Grid:** A 12-column grid for desktop with 1px borders acting as gutters. 
- **The Rhythm:** A strict 4px base unit controls all internal padding and margins. 
- **Scaling:** On mobile, the grid collapses to 4 columns. Margins remain tight (16px) to maximize screen real estate for waveform displays and data tables.
- **The "Blueprint" Rule:** Elements should feel "locked" into the grid. Alignment is always favored over fluid centering. Components are often stacked vertically with 0px spacing, separated only by their 1px white/10 borders.

## Elevation & Depth

Depth is not achieved through shadows, but through **Tonal Layering and Borders**.

- **Level 0 (Background):** Pure `#000000`.
- **Level 1 (Containers):** Matte Titanium `#0A0A0A` with a 1px `white/10` stroke.
- **Level 2 (Active/Hover):** `#1A1A1A` surface.
- **No Shadows:** Do not use drop shadows. If an element needs to "pop" (like a modal), use a thicker 2px white border or a solid white/10 overlay behind the modal to dim the background.
- **Glass Effects:** Use background blur (20px) sparingly on header bars to allow content to scroll underneath while maintaining a sense of "Matte Glass."

## Shapes

The shape language is **strictly geometric and sharp**. Rounded corners are prohibited to maintain the institutional, hardware-inspired aesthetic.

- **Corners:** 0px radius for all buttons, inputs, cards, and containers.
- **Icons:** Use stroke-based icons with sharp joins. Avoid rounded terminals.
- **Indicators:** Use squares or rectangles for checkboxes and radio indicators to reinforce the architectural grid.

## Components

- **Buttons:** Solid white background with black text for Primary actions. Ghost buttons (black background, 1px white/10 border, white text) for Secondary. No transition easing; hover states should be instant color flips to reflect high-performance software.
- **Inputs:** Pure black background with a permanent 1px white/10 border. On focus, the border turns white. Labels use `label-mono` and sit outside the input box.
- **Cards/Modules:** Use `#0A0A0A` surfaces. Headers within cards should be separated by a 1px horizontal line. 
- **Chips:** Rectangular, black background, white border, `label-mono` text. Use Neon Emerald text for "Active" or "Online" status chips.
- **Waveform/Data Displays:** Success states, peaks, and active playheads must use Neon Emerald `#10B981`. 
- **Transport Controls:** Large, chunky, rectangular buttons. Use standard icons (Play, Stop, Record) but rendered in high-weight strokes.