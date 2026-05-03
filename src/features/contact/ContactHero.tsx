'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';

export default function ContactHero() {
  const t = useTranslations('contactPage.hero');

  return (
    <section className="relative pt-40 pb-20 lg:pt-60 lg:pb-40 overflow-hidden bg-[#080808]">
      {/* Background Ambience */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-[1400px] pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[50%] h-[60%] rounded-full bg-accent-green/[0.03] blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[50%] h-[60%] rounded-full bg-blue-500/[0.02] blur-[120px]" />
      </div>

      {/* Grid Lines */}
      <div 
        className="absolute inset-0 opacity-[0.015] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`,
          backgroundSize: '100px 100px'
        }}
      />

      <div className="max-w-[1600px] mx-auto px-6 lg:px-12 relative z-10">
        <div className="max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-px bg-accent-green/50" />
              <span className="text-[11px] font-black uppercase tracking-[0.4em] text-accent-green">
                Connect with the Lab
              </span>
            </div>

            <h1 className="text-white font-display font-black leading-[0.9] tracking-tighter mb-12" style={{ fontSize: 'clamp(3.5rem, 10vw, 9rem)' }}>
              {t('title')} <br />
              <span className="text-accent-green">{t('titleHighlight')}</span>
            </h1>

            <p className="text-white/40 text-xl md:text-2xl font-light leading-relaxed max-w-2xl">
              {t('subtitle')}
            </p>
          </motion.div>
        </div>
      </div>

      {/* Decorative Ghost Text */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: 0.5 }}
        className="absolute right-0 bottom-0 translate-y-1/3 pointer-events-none select-none overflow-hidden"
      >
        <span className="font-display font-black text-white/[0.02] leading-none uppercase" style={{ fontSize: '30vw' }}>
          Contact
        </span>
      </motion.div>
    </section>
  );
}
