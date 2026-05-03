'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

export default function AboutCredentials() {
  const t = useTranslations('aboutPage.credentials');

  const certs = [
    { label: "01", text: t('c1'), icon: "CPT" },
    { label: "02", text: t('c2'), icon: "PN1" },
    { label: "03", text: t('c3'), icon: "NPC" },
    { label: "04", text: t('c4'), icon: "7YR" },
  ];

  return (
    <section className="relative py-32 lg:py-60 bg-[#080808]">
      <div className="max-w-[1800px] mx-auto px-6 lg:px-20">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-end mb-32">
          <div className="lg:col-span-7 space-y-10">
            <div className="flex items-center gap-4">
              <div className="w-12 h-[1px] bg-accent-green" />
              <span className="text-[10px] font-black uppercase tracking-[0.5em] text-accent-green">
                {t('label')}
              </span>
            </div>
            <h2 className="text-white text-5xl md:text-9xl font-display font-black uppercase tracking-tighter leading-[0.8]">
              {t('title')} <br />
              <span className="italic font-light text-white/10">{t('titleItalic')}</span>
            </h2>
          </div>
          <div className="lg:col-span-4 lg:col-start-9">
            <p className="text-white/40 text-lg leading-relaxed font-light italic border-l border-white/5 pl-10">
              {t('footer')}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 xl:gap-40 items-start">
          
          {/* Stats Column */}
          <div className="grid grid-cols-1 gap-12">
            {[
              { label: t('stat1Label'), val: t('stat1') },
              { label: t('stat2Label'), val: t('stat2') },
              { label: t('stat3Label'), val: t('stat3') },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group flex items-end justify-between border-b border-white/5 pb-12 hover:border-accent-green/30 transition-colors duration-500"
              >
                <div>
                  <p className="text-[10px] font-black uppercase tracking-[0.3em] text-white/30 mb-4">{stat.label}</p>
                  <span className="text-white text-7xl md:text-9xl font-display font-black tracking-tighter group-hover:text-accent-green transition-colors duration-500">
                    {stat.val}
                  </span>
                </div>
                <div className="w-20 h-20 rounded-full border border-white/5 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M7 17L17 7" /><path d="M7 7h10v10" />
                  </svg>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Certs Column */}
          <div className="space-y-8">
            <p className="text-[10px] font-black uppercase tracking-[0.5em] text-white/20 mb-12">Authorized Body Transformation Specialists</p>
            {certs.map((cert, i) => (
              <motion.div
                key={cert.text}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group flex items-center gap-10 p-8 rounded-3xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-all duration-500"
              >
                <div className="w-16 h-16 rounded-2xl bg-black flex items-center justify-center text-white/20 font-black text-xs border border-white/5 group-hover:text-accent-green transition-colors">
                  {cert.icon}
                </div>
                <div className="flex-1">
                  <p className="text-[10px] font-black uppercase tracking-[0.3em] text-white/30 mb-2">Certification {cert.label}</p>
                  <p className="text-white font-bold text-lg tracking-wide uppercase group-hover:translate-x-2 transition-transform duration-500">
                    {cert.text}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
