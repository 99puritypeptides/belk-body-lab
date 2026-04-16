'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

export default function AboutStory() {
  const t = useTranslations('aboutPage.story');

  return (
    <section className="relative py-24 lg:py-40 bg-bg-primary overflow-hidden">
      <div className="container-custom px-6 lg:px-10 max-w-[1400px] mx-auto">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
          
          {/* Label + Small Title */}
          <div className="lg:col-span-4 lg:sticky lg:top-40">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-4 mb-8"
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
              transition={{ duration: 0.8 }}
              className="text-4xl lg:text-5xl font-black uppercase tracking-tight text-white leading-tight"
            >
              {t('title')}
            </motion.h2>
          </div>

          {/* Narrative Content */}
          <div className="lg:col-span-8 flex flex-col gap-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl text-text-muted leading-relaxed font-medium"
            >
              {t('content1')}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl text-text-muted leading-relaxed font-medium"
            >
              {t('content2')}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              whileInView={{ opacity: 1, scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.6 }}
              className="w-full h-[1px] bg-white/10 origin-left"
            />

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.8 }}
              className="italic text-2xl md:text-3xl text-accent-green font-display font-black leading-tight"
            >
              "{t('mission')}"
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
