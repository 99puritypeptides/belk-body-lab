'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import PremiumIcon from '@/components/ui/PremiumIcon';

export default function AboutPhilosophy() {
  const t = useTranslations('aboutPage.philosophy');

  const pillars = [
    {
      title: t('p1Title'),
      desc: t('p1Desc'),
      icon: "science",
      size: "lg:col-span-2"
    },
    {
      title: t('p2Title'),
      desc: t('p2Desc'),
      icon: "target",
      size: "lg:col-span-1"
    },
    {
      title: t('p3Title'),
      desc: t('p3Desc'),
      icon: "shield",
      size: "lg:col-span-3"
    },
  ];

  return (
    <section className="relative py-32 lg:py-48 bg-[#0c0c0c] overflow-hidden">
      {/* Decorative horizontal noise texture / line */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="max-w-[1800px] mx-auto px-6 lg:px-20">
        <div className="flex flex-col lg:flex-row justify-between items-end gap-12 mb-24">
          <div className="max-w-3xl space-y-8">
            <div className="inline-block px-4 py-1.5 rounded-full border border-accent-green/30 bg-accent-green/5">
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-accent-green">
                {t('label')}
              </span>
            </div>
            <h2 className="text-white text-5xl md:text-8xl font-display font-black uppercase tracking-tighter leading-[0.85]">
              {t('title')}
            </h2>
          </div>
          <div className="lg:max-w-xs text-right">
            <p className="text-white/30 text-sm font-medium uppercase tracking-[0.2em] leading-relaxed">
              Every protocol is a proprietary blend of physiological science and human resilience.
            </p>
          </div>
        </div>

        {/* Bento Grid Design */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              className={`
                relative group p-10 lg:p-16 rounded-[2rem] bg-white/[0.02] border border-white/5 
                hover:border-accent-green/20 hover:bg-white/[0.04] transition-all duration-700
                overflow-hidden ${pillar.size}
              `}
            >
              {/* Glass Reflection Effect */}
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/[0.05] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
              
              <div className="relative z-10 space-y-12">
                <div className="w-16 h-16 rounded-2xl bg-black flex items-center justify-center border border-white/5 group-hover:scale-110 transition-transform duration-500">
                  <PremiumIcon 
                    name={pillar.icon as any} 
                    size={40} 
                    color="#AAFF00" 
                  />
                </div>
                
                <div className="space-y-6">
                  <h3 className="text-white text-3xl font-black uppercase tracking-tight">
                    {pillar.title}
                  </h3>
                  <p className="text-white/40 text-lg leading-relaxed font-light max-w-xl">
                    {pillar.desc}
                  </p>
                </div>
              </div>

              {/* Decorative Corner Number */}
              <span className="absolute top-10 right-10 text-[10px] font-black text-white/5 uppercase tracking-[0.5em]">
                Standard 0{i + 1}
              </span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Marquee effect at bottom */}
      <div className="mt-32 border-y border-white/5 py-8 overflow-hidden whitespace-nowrap bg-white/[0.01]">
        <motion.div 
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="inline-flex gap-20"
        >
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="flex gap-20">
              <span className="text-[11px] font-black uppercase tracking-[0.6em] text-white/20">{t('tag1')}</span>
              <span className="text-[11px] font-black uppercase tracking-[0.6em] text-white/20">{t('tag2')}</span>
              <span className="text-[11px] font-black uppercase tracking-[0.6em] text-white/20">{t('tag3')}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
