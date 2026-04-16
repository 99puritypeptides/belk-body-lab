'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

export default function AboutCredentials() {
  const t = useTranslations('aboutPage.credentials');

  const credentials = [
    t('c1'),
    t('c2'),
    t('c3'),
    t('c4')
  ];

  const stats = [
    { value: t('stat1'), label: t('stat1Label') },
    { value: t('stat2'), label: t('stat2Label') },
    { value: t('stat3'), label: t('stat3Label') }
  ];

  return (
    <section className="relative py-24 lg:py-40 bg-bg-primary overflow-hidden">
      <div className="container-custom px-6 lg:px-10 max-w-[1700px] mx-auto relative z-10">
        
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-32">
          
          {/* Left: Stats & Authority */}
          <div className="flex-1 w-full order-2 lg:order-1">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 lg:mb-24">
              {stats.map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex flex-col items-center lg:items-start"
                >
                  <p className="font-heading text-white text-6xl md:text-7xl lg:text-8xl leading-none mb-4 drop-shadow-[0_0_20px_rgba(255,255,255,0.1)]">
                    {stat.value}
                  </p>
                  <p className="text-[10px] md:text-xs font-black uppercase tracking-[0.25em] text-accent-green pl-1">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="p-8 lg:p-12 rounded-[32px] bg-white/5 border border-white/10 hover:border-white/20 transition-all duration-500"
            >
              <h3 className="text-2xl lg:text-3xl font-black uppercase text-white mb-10 tracking-[0.05em]">
                Professional <span className="text-text-muted">Certifications</span>
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-12">
                {credentials.map((cred, i) => (
                  <div key={i} className="flex items-center gap-4 group">
                    <div className="w-2 h-2 rounded-full bg-accent-green shadow-[0_0_10px_rgba(170,255,0,0.5)] group-hover:scale-125 transition-transform" />
                    <span className="text-sm md:text-base font-bold text-white uppercase tracking-wider group-hover:text-accent-green transition-colors">
                      {cred}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right: Authority Title */}
          <div className="flex-1 lg:max-w-[500px] order-1 lg:order-2 text-center lg:text-right">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-4 mb-8"
            >
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-accent-green">
                {t('label')}
              </span>
              <div className="w-12 h-[1px] bg-accent-green" />
            </motion.div>
            
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl lg:text-7xl font-black uppercase tracking-tight text-white leading-[0.9] mb-8"
            >
              {t('title')}<br />
              <span className="italic text-accent-green drop-shadow-[0_0_30px_rgba(170,255,0,0.2)] lowercase">
                {t('titleItalic')}
              </span>
            </motion.h2>
          </div>

        </div>
      </div>

      {/* Background Graphic */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border-[1px] border-white/[0.02] rounded-full pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] border-[1px] border-white/[0.03] rounded-full pointer-events-none" />
    </section>
  );
}
