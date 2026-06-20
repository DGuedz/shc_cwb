'use client';

import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';
import { useRef } from 'react';

interface ScrollRevealTitleProps {
  children: React.ReactNode;
  className?: string;
  progress?: MotionValue<number>;
  progressRange?: [number, number];
  metallic?: boolean;
  as?: 'h1' | 'h2' | 'h3' | 'div' | 'span';
}

export function ScrollRevealTitle({
  children,
  className = "",
  progress,
  progressRange = [0, 1],
  metallic = false,
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

  // Metallic shimmer: sweeps left→right as element enters viewport
  const metallicShine = useTransform(
    activeProgress,
    progressRange,
    ["180% center", "-180% center"]
  );

  const metallicStyle = metallic ? {
    backgroundImage: "linear-gradient(105deg, #4a4a4a 10%, #9a9a9a 30%, #ffffff 50%, #9a9a9a 70%, #4a4a4a 90%)",
    backgroundSize: "200% auto",
    backgroundPosition: metallicShine,
    WebkitBackgroundClip: "text" as const,
    WebkitTextFillColor: "transparent" as const,
    backgroundClip: "text" as const,
  } : {};

  return (
    // @ts-expect-error — polymorphic ref, typing varies by tag
    <Tag ref={containerRef} className={`relative ${className}`}>
      {/* Dim ghost behind */}
      <span
        className="absolute inset-0 pointer-events-none select-none opacity-20"
        aria-hidden="true"
      >
        {children}
      </span>

      {/* Revealed layer — clips in from left, optionally metallic */}
      <motion.span
        className="block"
        style={{ clipPath, ...metallicStyle }}
      >
        {children}
      </motion.span>
    </Tag>
  );
}
