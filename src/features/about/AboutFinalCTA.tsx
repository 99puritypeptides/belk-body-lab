'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import PremiumIcon from '@/components/ui/PremiumIcon';

const MotionLink = motion(Link);

interface AboutFinalCTAProps {
  namespace?: string;
}

export default function AboutFinalCTA({ namespace = 'aboutPage.finalCta' }: AboutFinalCTAProps) {
  const t = useTranslations(namespace);

  return (
    <section className="relative py-32 lg:py-60 bg-white overflow-hidden">
      {/* Background Decorative Lines */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none select-none">
        <div className="absolute top-0 left-1/4 w-px h-full bg-black" />
        <div className="absolute top-0 left-2/4 w-px h-full bg-black" />
        <div className="absolute top-0 left-3/4 w-px h-full bg-black" />
      </div>

      <div className="max-w-[1800px] mx-auto px-6 lg:px-20 relative z-10">
        <div className="max-w-5xl mx-auto text-center space-y-20">
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-4 px-6 py-2 rounded-full border border-black/10 bg-black/5"
          >
            <div className="w-2 h-2 rounded-full bg-black animate-pulse" />
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-black/60">
              {t.has('ctaLimited') ? t('ctaLimited') : t('limited')}
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <h2 className="text-black text-[2.5rem] sm:text-6xl md:text-[8vw] font-display font-black uppercase tracking-tighter leading-[0.8] flex flex-col items-center">
              <span>{t.has('ctaTitle') ? t('ctaTitle') : t('title')}</span>
              <span className="text-black/10 block mt-2 sm:mt-4 leading-none text-center w-full">
                {t.has('ctaTitleHighlight') ? t('ctaTitleHighlight') : t('titleHighlight')}
              </span>
            </h2>
            <p className="text-black/40 text-lg md:text-2xl font-light leading-snug max-w-3xl mx-auto tracking-tight">
              {t.has('ctaDescription') ? t('ctaDescription') : t('description')}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="space-y-12"
          >
            <motion.div className="relative group inline-block">
              <MotionLink 
                href="/contact"
                whileHover="hover"
                className="relative z-10 inline-flex items-center justify-between gap-6 sm:gap-12 px-8 sm:px-14 py-6 sm:py-8 bg-black text-white rounded-full font-black text-xs sm:text-sm uppercase tracking-[0.3em] sm:tracking-[0.4em] overflow-hidden transition-all hover:scale-[1.05] active:scale-[0.98] shadow-2xl shadow-black/20"
              >
                <span className="relative z-10">
                  {t.has('ctaBtn') ? t('ctaBtn') : t('cta')}
                </span>
                <div className="relative z-10 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white flex items-center justify-center text-black transition-transform duration-500 shadow-lg flex-shrink-0">
                  <PremiumIcon name="arrow" size={24} />
                </div>
                <div className="absolute inset-0 bg-[#AAFF00] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
              </MotionLink>
            </motion.div>

            <div className="flex flex-col items-center gap-6 opacity-30">
              <p className="text-[10px] font-black uppercase tracking-[0.5em] text-black">
                {t.has('ctaLocation') ? t('ctaLocation') : t('location')}
              </p>
              <div className="w-px h-20 bg-black/20" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
