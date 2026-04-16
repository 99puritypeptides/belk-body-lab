'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

export default function AboutPhilosophy() {
  const t = useTranslations('aboutPage.philosophy');

  const pillars = [
    {
      title: t('p1Title'),
      desc: t('p1Desc'),
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M6 3h12" /><path d="M8 7h8" /><path d="M10 11h4" /><path d="M12 15v6" />
        </svg>
      )
    },
    {
      title: t('p2Title'),
      desc: t('p2Desc'),
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" /><path d="M12 8v8" /><path d="M8 12h8" />
        </svg>
      )
    },
    {
      title: t('p3Title'),
      desc: t('p3Desc'),
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><circle cx="12" cy="12" r="3" />
        </svg>
      )
    }
  ];

  return (
    <section className="relative py-24 lg:py-40 bg-bg-card/30 overflow-hidden">
      <div className="container-custom px-6 lg:px-10 max-w-[1700px] mx-auto relative z-10">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-20 lg:mb-32">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="px-4 py-1.5 rounded-full border border-accent-green/20 bg-accent-green/5 text-accent-green text-[10px] font-black uppercase tracking-[0.2em] mb-6"
          >
            {t('label')}
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-black uppercase text-white tracking-tight leading-tight max-w-[900px]"
          >
            {t('title')}
          </motion.h2>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {pillars.map((pillar, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              whileHover={{ y: -10 }}
              className="group p-8 lg:p-12 rounded-[32px] bg-bg-card border border-white/5 hover:border-accent-green/20 transition-all duration-500 relative overflow-hidden"
            >
              {/* Card Accent */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent-green/5 rounded-full blur-[40px] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Icon */}
              <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-accent-green mb-10 group-hover:scale-110 group-hover:bg-accent-green group-hover:text-black transition-all duration-500">
                {pillar.icon}
              </div>

              <h3 className="text-2xl lg:text-3xl font-black uppercase text-white mb-6 tracking-tight">
                {pillar.title}
              </h3>
              
              <p className="text-text-muted text-lg leading-relaxed font-medium">
                {pillar.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* SEO Tags Layer */}
        <div className="mt-24 md:mt-32 flex flex-wrap justify-center gap-4 lg:gap-8 opacity-40 hover:opacity-100 transition-opacity duration-700">
          {[t('tag1'), t('tag2'), t('tag3')].map((tag, i) => (
            <span key={i} className="text-[11px] font-black uppercase tracking-[0.3em] text-white">
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Decorative Blur */}
      <div className="absolute bottom-[-20%] left-[-10%] w-[40%] h-[40%] bg-accent-green/5 rounded-full blur-[150px] opacity-30 pointer-events-none" />
    </section>
  );
}
