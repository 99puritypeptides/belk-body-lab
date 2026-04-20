'use client';

import React from 'react';
import { useTranslations } from 'next-intl';

export default function PortfolioHero() {
  const t = useTranslations('portfolioHero');

  return (
    <section className="relative pt-36 pb-16 overflow-hidden animated-gradient">
      <div
        className="absolute top-0 left-0 w-[500px] h-[500px] opacity-[0.03] blob-shape rounded-full"
        style={{ background: 'radial-gradient(circle, #FFFFFF 0%, transparent 70%)' }}
        aria-hidden="true"
      />

      <div className="max-w-[1600px] mx-auto px-6 lg:px-10">
        <div className="flex items-center gap-4 mb-8">
          <div className="w-0.5 h-5 bg-white/20" />
          <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-text-muted">{t('label')}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
          <div className="lg:col-span-7">
            <h1 className="font-jumpshot font-black leading-tight tracking-tight text-white" style={{ fontSize: 'clamp(2.5rem, 7vw, 7.5rem)' }}>
              {t('title')} <span className="gradient-text">{t('titleHighlight')}</span>
            </h1>
          </div>
          <div className="lg:col-span-5 lg:pb-4">
            <p className="text-text-muted text-base font-light leading-relaxed">{t('description')}</p>
          </div>
        </div>
      </div>
    </section>
  );
}