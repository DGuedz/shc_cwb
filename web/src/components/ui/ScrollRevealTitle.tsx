'use client';

import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';
import { useRef } from 'react';

interface ScrollRevealTitleProps {
  children: React.ReactNode;
  className?: string;
  progress?: MotionValue<number>;
  progressRange?: [number, number];
  /** @deprecated use chromatic instead */
  metallic?: boolean;
  chromatic?: boolean;
  as?: 'h1' | 'h2' | 'h3' | 'div' | 'span';
}

// Gradiente cromático SHC: cinza → branco → esmeralda → ciano → branco
const CHROMATIC_GRADIENT =
  "linear-gradient(105deg, #555 0%, #aaa 18%, #fff 32%, #10B981 52%, #5eead4 68%, #fff 82%, #aaa 100%)";

export function ScrollRevealTitle({
  children,
  className = "",
  progress,
  progressRange = [0, 1],
  metallic = false,
  chromatic = false,
  as: Tag = 'h2',
}: ScrollRevealTitleProps) {
  const containerRef = useRef<HTMLElement>(null);

  const { scrollYProgress: internalProgress } = useScroll({
    target: containerRef,
    offset: ["start 90%", "end 35%"]
  });

  const activeProgress = progress ?? internalProgress;

  const clipPath = useTransform(activeProgress, progressRange, [
    "inset(0 100% 0 0)",
    "inset(0 0% 0 0)"
  ]);

  // Sweep: entra da direita e varre para a esquerda conforme o scroll
  const chromaticShine = useTransform(
    activeProgress,
    progressRange,
    ["240% center", "-240% center"]
  );

  const applyChromatic = chromatic || metallic; // metallic agora é alias de chromatic

  const gradientStyle = applyChromatic ? {
    backgroundImage: CHROMATIC_GRADIENT,
    backgroundSize: "280% auto",
    backgroundPosition: chromaticShine,
    WebkitBackgroundClip: "text" as const,
    WebkitTextFillColor: "transparent" as const,
    backgroundClip: "text" as const,
  } : {};

  return (
    // @ts-expect-error — polymorphic ref
    <Tag ref={containerRef} className={`relative ${className}`}>
      {/* Ghost dim atrás */}
      <span
        className="absolute inset-0 pointer-events-none select-none opacity-20"
        aria-hidden="true"
      >
        {children}
      </span>

      {/* Camada revelada com clip + cromático */}
      <motion.span
        className="block"
        style={{ clipPath, ...gradientStyle }}
      >
        {children}
      </motion.span>
    </Tag>
  );
}
