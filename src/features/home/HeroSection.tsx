'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

export default function HeroSection() {
  const t = useTranslations('hero');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <div className="h-dvh bg-[#0B0B0B]" />;

  return (
    <section className="relative h-screen w-full bg-[#0B0B0B] flex items-center justify-center overflow-hidden">
      {/* Background grid lines */}
      <div className="bg-grid">
        <div className="bg-grid-line" />
        <div className="bg-grid-line" />
        <div className="bg-grid-line" />
        <div className="bg-grid-line" />
        <div className="bg-grid-line" />
        <div className="bg-grid-line" />
        <div className="bg-grid-line" />
        <div className="bg-grid-line" />
      </div>

      {/* MAIN CONTENT CONTAINER */}
      <div className="max-w-[1700px] w-full h-full px-6 md:px-12 lg:px-20 z-20 flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-12 lg:gap-20 relative">
        
        {/* LEFT COLUMN: Text Content (Layered above image on mobile) */}
        <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left h-full justify-center relative z-20">
          <div className="relative z-10 py-10 lg:py-0">
            {/* Main Headline */}
            <div className="mb-6 reveal-clip visible">
              <h1 className="font-jumpshot uppercase text-white tracking-tighter leading-[0.85] drop-shadow-[0_10px_30px_rgba(0,0,0,0.8)]" style={{ fontSize: 'clamp(2.5rem, 8vw, 7.5rem)' }}>
                {t('title')}<br />
                <span className="text-[#AAFF00] drop-shadow-[0_0_30px_rgba(170,255,0,0.6)]">{t('titleHighlight')}</span>
              </h1>
            </div>

            {/* Subtext */}
            <div className="max-w-[600px] mb-10 stagger-1 reveal-clip visible">
              <p className="text-gray-200 text-sm md:text-lg font-semibold leading-relaxed tracking-wide drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]">
                {t('subtitle')}
              </p>
            </div>

            {/* Dual CTAs */}
            <div className="flex flex-col sm:flex-row items-center gap-4 stagger-2 reveal-clip visible">
              <button className="group relative flex items-center gap-4 bg-[#AAFF00] rounded-full p-2 pr-8 shadow-[0_0_30px_rgba(170,255,0,0.15)] transition-all duration-300">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-black transform group-hover:rotate-45 transition-transform duration-300">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                </div>
                <span className="text-black font-black uppercase tracking-widest text-sm">{t('ctaPrimary')}</span>
              </button>

              <button className="px-10 py-5 rounded-full border border-white/30 bg-black/60 backdrop-blur-md text-white font-bold uppercase tracking-widest text-xs hover:bg-white/10 transition-all">
                {t('ctaSecondary')}
              </button>
            </div>
          </div>

          {/* Social Proof Widget (Fixed position for better visibility) */}
          <div className="absolute bottom-16 md:bottom-20 lg:bottom-12 flex flex-col items-center lg:items-start gap-3 stagger-3 reveal-clip visible z-40">
            <div className="flex -space-x-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-10 h-10 md:w-12 md:h-12 rounded-full border-4 border-[#0B0B0B] overflow-hidden bg-gray-800 shadow-xl">
                  <Image src={`https://i.pravatar.cc/100?img=${i + 15}`} alt={`User ${i}`} width={48} height={48} className="object-cover" />
                </div>
              ))}
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border-4 border-[#0B0B0B] bg-[#AAFF00] flex items-center justify-center text-black shadow-xl">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M12 4v16m8-8H4" /></svg>
              </div>
            </div>
            <p className="text-white text-[10px] md:text-xs font-bold tracking-widest uppercase italic bg-black/40 px-3 py-1 rounded-full backdrop-blur-sm lg:bg-transparent lg:px-0">
              500+ <span className="text-[#AAFF00]">{t('happySpirits')}</span>
            </p>
          </div>
        </div>

        {/* RIGHT COLUMN: Spotlight Image (Absolute on mobile, Relative on desktop) */}
        <div className="absolute lg:relative bottom-0 right-0 w-full lg:flex-1 h-[60vh] md:h-[70vh] lg:h-[95vh] z-10 lg:z-10 flex flex-col items-center lg:items-end justify-end pointer-events-none opacity-40 lg:opacity-100 transition-all duration-1000">
          <div className="relative w-full h-full lg:scale-110 lg:translate-x-10">
            <Image
              src="/images/hero/model-image.png"
              alt="Muscular Bodybuilder"
              fill
              className="object-contain object-bottom"
              sizes="(max-width: 1024px) 100vw, 800px"
              priority
            />
          </div>
          {/* Enhanced Black Gradient Overlay */}
          <div className="absolute bottom-0 left-0 w-full h-[20vh] bg-gradient-to-t from-[#0B0B0B] via-[#0B0B0B]/80 to-transparent z-10" />
        </div>
      </div>
    </section>
  );
}