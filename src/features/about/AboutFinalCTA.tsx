'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import CTAButton from '@/components/ui/CTAButton';

export default function AboutFinalCTA() {
  const t = useTranslations('aboutPage.finalCta');

  return (
    <section className="relative py-32 lg:py-48 bg-bg-primary overflow-hidden">
      {/* Background Accent */}
      <div className="absolute inset-0 bg-accent-green/5 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent-green/10 rounded-full blur-[200px] opacity-30" />

      <div className="container-custom px-6 lg:px-10 relative z-10 text-center">
        <div className="max-w-[1000px] mx-auto">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-accent-green/30 bg-accent-green/10 text-accent-green text-xs font-black uppercase tracking-widest mb-10"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-accent-green" />
            {t('limited')}
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-heading text-white text-5xl md:text-7xl lg:text-9xl uppercase leading-[0.85] mb-10"
          >
            {t('title')}<br />
            <span className="text-accent-green drop-shadow-[0_0_50px_rgba(170,255,0,0.3)]">{t('titleHighlight')}</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl lg:text-2xl text-text-muted font-medium leading-relaxed max-w-[700px] mx-auto mb-16"
          >
            {t('description')}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="flex flex-col items-center gap-8"
          >
            <CTAButton href="/#contact" size="lg">
              {t('cta')}
            </CTAButton>
            
            <Link 
              href="/portfolio" 
              className="text-[11px] font-black uppercase tracking-[0.3em] text-white/40 hover:text-white transition-colors flex items-center gap-3 group/link"
            >
              See our clients' results
              <div className="w-1 h-1 rounded-full bg-accent-green group-hover/link:scale-[2.5] transition-transform" />
            </Link>
          </motion.div>

        </div>
      </div>

      {/* Modern Grid Background */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.1) 1px, transparent 0)', backgroundSize: '40px 40px' }} />
    </section>
  );
}
