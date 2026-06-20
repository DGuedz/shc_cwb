'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export interface Step {
  id: string;
  title: string;
  subtitle: string;
  content: React.ReactElement<{
    formData?: Record<string, string>;
    updateData?: (key: string, value: string) => void;
    onSubmit?: () => void;
  }>;
}

interface MultiStepWizardProps {
  type: 'TALENT' | 'PARTNER';
  steps: Step[];
  onComplete: (data: Record<string, string>) => void;
  initialData?: Record<string, string>;
}

export function MultiStepWizard({ steps, onComplete, initialData = {} }: MultiStepWizardProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [direction, setDirection] = useState(1);
  const [formData, setFormData] = useState<Record<string, string>>(initialData);

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setDirection(1);
      setCurrentStep(prev => prev + 1);
    } else {
      onComplete(formData);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setDirection(-1);
      setCurrentStep(prev => prev - 1);
    }
  };

  const updateData = (key: string, value: string) => {
    setFormData(prev => ({ ...prev, [key]: value }));
  };

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 20 : -20,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 20 : -20,
      opacity: 0
    })
  };

  return (
    <div className="bg-[#0E0E0E] border border-[#393939] flex flex-col shadow-2xl">
      {/* Header do Wizard */}
      <div className="border-b border-[#393939] p-6 md:p-8 flex justify-between items-start bg-[#131313]">
        <div>
          <h2 className="font-archivo text-2xl md:text-3xl font-bold uppercase text-white tracking-tight mb-1">
            {steps[currentStep].title}
          </h2>
          <p className="font-mono text-xs text-[#A3A3A3] uppercase tracking-widest">
            {steps[currentStep].subtitle}
          </p>
        </div>
        <div className="text-right">
          <span className="font-mono text-[10px] text-[#10B981] tracking-widest uppercase block mb-1">
            STEP_PROGRESS
          </span>
          <span className="font-mono text-lg text-white">
            [ 0{currentStep + 1} / 0{steps.length} ]
          </span>
        </div>
      </div>

      {/* Body do Wizard (Animado) */}
      <div className="relative overflow-hidden min-h-[350px] p-6 md:p-8">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={currentStep}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ type: "tween", ease: "circOut", duration: 0.3 }}
            className="h-full"
          >
            {/* Clonamos o elemento injetando as props de controle do form */}
            {React.cloneElement(steps[currentStep].content, {
              formData,
              updateData,
              onSubmit: nextStep
            })}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Footer / Controles */}
      <div className="border-t border-[#393939] p-6 md:p-8 flex justify-between items-center bg-[#131313]">
        <button
          onClick={prevStep}
          disabled={currentStep === 0}
          className={`font-mono text-xs tracking-widest uppercase transition-colors ${
            currentStep === 0 ? 'text-[#393939] cursor-not-allowed' : 'text-[#A3A3A3] hover:text-white'
          }`}
        >
          &lt; Voltar
        </button>

        <button
          onClick={nextStep}
          className="bg-[#10B981] text-black px-8 py-3 font-mono text-xs tracking-widest uppercase font-bold hover:bg-white transition-colors"
        >
          {currentStep === steps.length - 1 ? 'CONCLUIR_MATCH' : 'AVANÇAR >'}
        </button>
      </div>
    </div>
  );
}
