'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const ArtistOnboardingPage: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    artistName: '',
    genre: '',
    location: '',
    minFee: '',
    idealFee: '',
    techReqs: '',
    musicUrl: '',
    socialUrl: ''
  });
  const router = useRouter();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const nextStep = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const submitForm = async () => {
    setIsSubmitting(true);
    
    // Simulate network request
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // Success - go to step 4
    setCurrentStep(4);
    
    // Redirect to dossier after delay
    setTimeout(() => {
      router.push('/dashboard/dossie');
    }, 2000);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative bg-black p-4 md:p-8">
      {/* Blueprint Background Grid */}
      <div className="fixed inset-0 z-0 pointer-events-none" style={{
        backgroundImage: `
          linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)
        `,
        backgroundSize: '32px 32px'
      }} />

      {/* Hackathon Badge */}
      <div className="fixed top-4 right-4 md:top-8 md:right-8 z-50">
        <div className="bg-black border border-white/10 px-3 py-1 font-mono text-sm text-white flex items-center gap-2 uppercase tracking-wider">
          <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse"></span>
          HACKATHON MUSICTECH BRASIL
        </div>
      </div>

      {/* Main Content */}
      <main className="w-full max-w-2xl z-10 relative mt-16 md:mt-0">
        {/* Header */}
        <div className="mb-12 border-b border-white/10 pb-6">
          <h1 className="text-5xl font-bold text-white uppercase tracking-tighter mb-2 font-heading">Artist Onboarding</h1>
          <p className="text-sm font-mono text-gray-400">INITIALIZE SYSTEM CONFIGURATION FOR NEW ARTIST PROFILE.</p>
        </div>

        {/* Progress Indicators */}
        <div className="flex gap-2 mb-8">
          {[1, 2, 3].map(step => (
            <div
              key={step}
              className={`h-2 flex-1 border border-white/10 transition-colors duration-300 ${
                step <= currentStep ? 'bg-white' : 'bg-[#353535]'
              }`}
            />
          ))}
        </div>

        {/* Form Container */}
        <div className="relative w-full bg-[#0A0A0A] border border-white/10 p-6 md:p-8 overflow-hidden">
          {/* Step 1: Perfil */}
          {currentStep === 1 && (
            <div className="flex flex-col gap-6">
              <div className="border-b border-white/10 pb-4 mb-2">
                <h2 className="text-2xl font-bold text-white uppercase font-heading">01 // Perfil</h2>
              </div>
              <div className="flex flex-col gap-2">
                <label className="font-mono text-sm text-gray-400 uppercase">Artist Name</label>
                <input
                  id="artistName"
                  type="text"
                  placeholder="ENTER STAGE NAME"
                  value={formData.artistName}
                  onChange={handleInputChange}
                  className="w-full p-4 bg-black border border-white/10 text-white text-lg focus:outline-none focus:border-[#10B981] focus:shadow-[0_0_0_1px_#10B981] transition-colors"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="font-mono text-sm text-gray-400 uppercase">Musical Genre</label>
                <select
                  id="genre"
                  value={formData.genre}
                  onChange={handleInputChange}
                  className="w-full p-4 bg-black border border-white/10 text-white text-lg appearance-none cursor-pointer focus:outline-none focus:border-[#10B981] focus:shadow-[0_0_0_1px_#10B981] transition-colors"
                >
                  <option disabled value="">SELECT GENRE</option>
                  <option value="hiphop">Hip Hop / Rap</option>
                  <option value="trap">Trap</option>
                  <option value="funk">Funk</option>
                  <option value="electronic">Electronic</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div className="flex flex-col gap-2">
                <label className="font-mono text-sm text-gray-400 uppercase">City/State</label>
                <input
                  id="location"
                  type="text"
                  placeholder="SÃO PAULO / SP"
                  value={formData.location}
                  onChange={handleInputChange}
                  className="w-full p-4 bg-black border border-white/10 text-white text-lg uppercase focus:outline-none focus:border-[#10B981] focus:shadow-[0_0_0_1px_#10B981] transition-colors"
                />
              </div>
              <div className="mt-4 flex justify-end">
                <button
                  onClick={nextStep}
                  className="bg-white text-black font-mono text-sm py-4 px-8 uppercase hover:bg-white/90 transition-colors border-none outline-none cursor-pointer flex items-center gap-2"
                >
                  NEXT SEQUENCE
                  <span className="text-lg">→</span>
                </button>
              </div>
            </div>
          )}

          {/* Step 2: Business */}
          {currentStep === 2 && (
            <div className="flex flex-col gap-6">
              <div className="border-b border-white/10 pb-4 mb-2">
                <h2 className="text-2xl font-bold text-white uppercase font-heading">02 // Business</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="font-mono text-sm text-gray-400 uppercase">Minimum Fee (BRL)</label>
                  <div className="relative">
                    <span className="absolute left-4 top-4 font-mono text-sm text-gray-400">R$</span>
                    <input
                      id="minFee"
                      type="number"
                      placeholder="0.00"
                      value={formData.minFee}
                      onChange={handleInputChange}
                      className="w-full p-4 pl-12 bg-black border border-white/10 text-white text-sm font-mono focus:outline-none focus:border-[#10B981] focus:shadow-[0_0_0_1px_#10B981] transition-colors"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <label className="font-mono text-sm text-gray-400 uppercase">Ideal Fee (BRL)</label>
                  <div className="relative">
                    <span className="absolute left-4 top-4 font-mono text-sm text-gray-400">R$</span>
                    <input
                      id="idealFee"
                      type="number"
                      placeholder="0.00"
                      value={formData.idealFee}
                      onChange={handleInputChange}
                      className="w-full p-4 pl-12 bg-black border border-white/10 text-white text-sm font-mono focus:outline-none focus:border-[#10B981] focus:shadow-[0_0_0_1px_#10B981] transition-colors"
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label className="font-mono text-sm text-gray-400 uppercase">Technical Requirements</label>
                <textarea
                  id="techReqs"
                  placeholder="LIST RIDER REQUIREMENTS, BACKLINE, ETC."
                  value={formData.techReqs}
                  onChange={handleInputChange}
                  className="w-full p-4 bg-black border border-white/10 text-white text-sm min-h-[120px] resize-y focus:outline-none focus:border-[#10B981] focus:shadow-[0_0_0_1px_#10B981] transition-colors"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <button
                  onClick={prevStep}
                  className="bg-transparent border border-white/10 text-white font-mono text-sm py-4 px-8 uppercase hover:bg-[#353535] transition-colors cursor-pointer flex items-center gap-2"
                >
                  <span className="text-lg">←</span> BACK
                </button>
                <button
                  onClick={nextStep}
                  className="bg-white text-black font-mono text-sm py-4 px-8 uppercase hover:bg-white/90 transition-colors border-none outline-none cursor-pointer flex items-center gap-2"
                >
                  NEXT SEQUENCE
                  <span className="text-lg">→</span>
                </button>
              </div>
            </div>
          )}

          {/* Step 3: Mídia */}
          {currentStep === 3 && (
            <div className="flex flex-col gap-6">
              <div className="border-b border-white/10 pb-4 mb-2">
                <h2 className="text-2xl font-bold text-white uppercase font-heading">03 // Mídia</h2>
              </div>
              <div className="flex flex-col gap-2">
                <label className="font-mono text-sm text-gray-400 uppercase">Spotify / YouTube URL</label>
                <div className="relative flex items-center">
                  <span className="absolute left-4 text-gray-400">▶</span>
                  <input
                    id="musicUrl"
                    type="url"
                    placeholder="HTTPS://"
                    value={formData.musicUrl}
                    onChange={handleInputChange}
                    className="w-full p-4 pl-12 bg-black border border-white/10 text-white text-sm focus:outline-none focus:border-[#10B981] focus:shadow-[0_0_0_1px_#10B981] transition-colors"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label className="font-mono text-sm text-gray-400 uppercase">Instagram URL</label>
                <div className="relative flex items-center">
                  <span className="absolute left-4 text-gray-400">🔗</span>
                  <input
                    id="socialUrl"
                    type="url"
                    placeholder="HTTPS://INSTAGRAM.COM/"
                    value={formData.socialUrl}
                    onChange={handleInputChange}
                    className="w-full p-4 pl-12 bg-black border border-white/10 text-white text-sm focus:outline-none focus:border-[#10B981] focus:shadow-[0_0_0_1px_#10B981] transition-colors"
                  />
                </div>
              </div>
              <div className="mt-8 flex justify-between items-center">
                <button
                  onClick={prevStep}
                  className="bg-transparent border border-white/10 text-white font-mono text-sm py-4 px-8 uppercase hover:bg-[#353535] transition-colors cursor-pointer flex items-center gap-2"
                >
                  <span className="text-lg">←</span> BACK
                </button>
                <button
                  onClick={submitForm}
                  disabled={isSubmitting}
                  className="bg-white text-black font-bold text-2xl py-4 px-12 uppercase hover:bg-white/90 transition-colors border-none outline-none cursor-pointer flex justify-center items-center h-16 w-48 disabled:opacity-60"
                >
                  {isSubmitting ? (
                    <div className="animate-spin rounded-full h-6 w-6 border-4 border-black border-t-transparent"></div>
                  ) : (
                    'CADASTRAR'
                  )}
                </button>
              </div>
            </div>
          )}

          {/* Success State */}
          {currentStep === 4 && (
            <div className="flex flex-col items-center justify-center text-center gap-6 py-12">
              <span className="text-6xl text-[#10B981] mb-4">✓</span>
              <h2 className="text-3xl font-bold text-white uppercase tracking-tighter font-heading">DADOS PROCESSADOS</h2>
              <p className="font-mono text-sm text-[#10B981] animate-pulse">REDIRECIONANDO PARA O MATCHBOARD...</p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default ArtistOnboardingPage;
