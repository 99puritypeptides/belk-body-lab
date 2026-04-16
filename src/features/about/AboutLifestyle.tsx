'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

export default function AboutLifestyle() {
  const t = useTranslations('aboutPage.lifestyle');

  const values = [t('value1'), t('value2'), t('value3')];

  return (
    <section className="relative py-24 lg:py-40 bg-bg-primary overflow-hidden border-t border-white/5">
      <div className="container-custom px-6 lg:px-10 max-w-[1700px] mx-auto relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-center">
          
          {/* Left: Content */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-4 mb-8"
            >
              <div className="w-12 h-[1px] bg-accent-green" />
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-accent-green">
                {t('label')}
              </span>
            </motion.div>
            
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl lg:text-5xl font-black uppercase tracking-tight text-white leading-tight mb-8"
            >
              {t('title')}
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-xl text-text-muted leading-relaxed font-medium mb-12 max-w-[600px]"
            >
              {t('content')}
            </motion.p>

            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              {values.map((val, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + i * 0.1 }}
                  className="px-6 py-2 rounded-lg border border-white/10 bg-white/5 text-white text-[11px] font-black uppercase tracking-widest hover:border-accent-green transition-colors"
                >
                  {val}
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right: Visual / Grid Pattern */}
          <div className="relative group">
            <div className="grid grid-cols-2 gap-4">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="aspect-square bg-white/[0.03] border border-white/5 rounded-3xl flex items-center justify-center overflow-hidden"
              >
                 <div className="text-white/20 font-black text-8xl">01</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="aspect-[4/5] bg-accent-green/10 border border-accent-green/20 rounded-3xl flex items-center justify-center -translate-y-8"
              >
                <div className="w-16 h-16 rounded-full border-4 border-accent-green border-t-transparent animate-spin-slow" />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="col-span-2 aspect-[16/7] bg-white/[0.02] border border-white/5 rounded-3xl flex items-center justify-center group-hover:bg-white/[0.04] transition-colors"
              >
                 <div className="p-8 text-center">
                    <p className="text-[10px] font-black uppercase tracking-[0.4em] text-accent-green mb-2 italic">Standard of Excellence</p>
                    <p className="text-white/40 text-xs font-bold uppercase tracking-widest">Always Researching. Always Evolving.</p>
                 </div>
              </motion.div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
