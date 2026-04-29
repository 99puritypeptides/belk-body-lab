'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import CTAButton from '@/components/ui/CTAButton';

export default function AboutHero() {
  const t = useTranslations('aboutPage.hero');

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-32 pb-20 overflow-hidden bg-bg-primary">
      {/* Background Decorative Element */}
      <div className="absolute top-0 right-0 w-full h-full opacity-20 pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-[60%] h-[60%] bg-[#FFFFFF] rounded-full blur-[150px] opacity-[0.05]" />
      </div>

      <div className="container-custom relative z-10 px-6 lg:px-10">
        <div className="max-w-[1700px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Text Content */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8"
            >
              <div className="w-2 h-2 rounded-full bg-accent-green animate-pulse" />
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white/60">{t('trust')}</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-jumpshot text-white text-5xl md:text-7xl lg:text-8xl xl:text-9xl leading-[0.85] uppercase mb-8"
            >
              {t('title')}<br />
              <span className="text-white">{t('titleHighlight')}</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="max-w-[600px] text-lg md:text-xl text-text-muted font-medium leading-relaxed mb-12"
            >
              {t('subtitle')}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-col sm:flex-row items-center gap-6"
            >
              <CTAButton href="/#contact">
                {t('cta')}
              </CTAButton>
            </motion.div>
          </div>

          {/* Image/Visual Element */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="relative aspect-square lg:aspect-auto h-full min-h-[400px] lg:min-h-[600px] rounded-3xl overflow-hidden border border-white/5"
          >
            <Image
              src="/images/hero/model-image.png"
              alt="Engineered Transformation"
              fill
              className="object-cover object-center brightness-75 grayscale-[0.2]"
              priority
            />
            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-bg-primary via-transparent to-transparent opacity-60" />
            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-bg-primary to-transparent" />
            
            <div className="absolute bottom-10 left-10 p-8 rounded-2xl bg-black/40 backdrop-blur-md border border-white/10 max-w-[280px]">
              <p className="font-display text-4xl font-black mb-2 leading-none text-white">500+</p>
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-white/40">{t('trust')}</p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
