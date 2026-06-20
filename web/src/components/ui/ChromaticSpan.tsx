'use client';

import { motion, useScroll, useTransform } from 'framer-motion';

const CHROMATIC_GRADIENT =
  "linear-gradient(105deg, #555 0%, #aaa 18%, #fff 32%, #10B981 52%, #5eead4 68%, #fff 82%, #aaa 100%)";

interface ChromaticSpanProps {
  children: React.ReactNode;
  className?: string;
  /** delay in seconds for the clip-in reveal (default 0) */
  delay?: number;
}

/**
 * Above-fold H1 span: clip-in CSS animation + chromatic gradient
 * driven by PAGE scroll (not element scroll).
 * Replaces the static `title-chromatic` CSS class.
 */
export function ChromaticSpan({ children, className = "", delay = 0 }: ChromaticSpanProps) {
  const { scrollYProgress } = useScroll();

  // As page scrolls 0→1, gradient sweeps through the chromatic range
  const bgPos = useTransform(scrollYProgress, [0, 1], ["240% center", "-240% center"]);

  return (
    <motion.span
      className={`block title-reveal ${className}`}
      style={{
        backgroundImage: CHROMATIC_GRADIENT,
        backgroundSize: "280% auto",
        backgroundPosition: bgPos,
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        backgroundClip: "text",
        animationDelay: delay ? `${delay}s` : undefined,
      }}
    >
      {children}
    </motion.span>
  );
}
