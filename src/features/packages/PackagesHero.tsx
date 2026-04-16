'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import AnimatedNumber from '@/components/effects/AnimatedNumber';
import SpectraNoise from '@/components/effects/SpectraNoise';
import Tilt from 'react-parallax-tilt';

export default function PackagesHero() {
  const t = useTranslations('packagesHero');

  const stats = [
    { end: 500, suffix: '+', label: t('clientsStat') },
    { end: 98, suffix: '%', label: t('satisfactionStat') },
    { end: 90, suffix: '', label: t('guaranteeStat') },
  ];

  return (
    <section className="relative pt-36 pb-20 overflow-hidden animated-gradient">
      <SpectraNoise speed={2.5} hueShift={100} warpAmount={0.8} noiseIntensity={0.3} />
      <div className="max-w-[1600px] mx-auto px-6 lg:px-10 text-center">
        <div className="flex justify-center items-center gap-4 mb-8">
          <div className="w-0.5 h-5 bg-accent-green" />
          <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-text-muted relative z-20">{t('label')}</span>
          <div className="w-0.5 h-5 bg-accent-green" />
        </div>

        <h1 className="relative z-20 font-jumpshot font-black leading-tight tracking-tight text-white mb-6" style={{ fontSize: 'clamp(2.5rem, 7vw, 7rem)' }}>
          {t('title')} <span className="text-accent-green drop-shadow-[0_0_20px_rgba(170,255,0,0.3)]">{t('titleHighlight')}</span>
        </h1>

        <p className="relative z-20 text-white/70 text-lg font-light leading-relaxed max-w-2xl mx-auto mb-16">{t('description')}</p>

        <div className="flex flex-col md:flex-row flex-wrap justify-center gap-6 lg:gap-10 text-sm relative z-20">
          {stats.map((stat) => (
            <Tilt key={stat.label} glareEnable={true} glareMaxOpacity={0.15} glareColor="#AAFF00" glarePosition="all" tiltMaxAngleX={10} tiltMaxAngleY={10} scale={1.02} transitionSpeed={1500} glareBorderRadius="2.5rem" className="rounded-[2.5rem]">
              <div className="text-center relative bg-white/[0.02] backdrop-blur-md border border-white/10 rounded-[2.5rem] px-8 py-10 min-w-full md:min-w-[260px] shadow-[0_8px_32px_rgba(0,0,0,0.6)] flex flex-col items-center justify-center overflow-hidden h-full">
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-white/0 to-white/5 opacity-50 pointer-events-none"></div>
                <div className="font-display font-black text-[3.5rem] md:text-[4rem] leading-none text-white flex items-center justify-center tracking-tighter mb-4 drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">
                  <AnimatedNumber start={0} end={stat.end} />{stat.suffix}
                </div>
                <div className="text-[11px] font-bold uppercase tracking-[0.3em] text-accent-green drop-shadow-[0_0_10px_rgba(170,255,0,0.3)]">{stat.label}</div>
              </div>
            </Tilt>
          ))}
        </div>
      </div>
    </section>
  );
}