'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

export default function BlogHero() {
  const t = useTranslations('blog.hero');

  return (
    <section className="relative min-h-[60vh] flex items-center justify-center pt-40 pb-20 overflow-hidden bg-[#050505]">
      {/* Background Graphic */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/blog_hero_bg_1776323139112.png"
          alt="Blog Background"
          fill
          className="object-cover opacity-60"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#050505]/80 to-[#050505]" />
      </div>

      <div className="container-custom relative z-10 px-6 lg:px-10 text-center">
        <div className="max-w-[1000px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-8"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-accent-green animate-pulse" />
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-accent-green">Insights & Guides</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-heading font-black text-white text-5xl md:text-7xl lg:text-8xl xl:text-9xl uppercase leading-[0.85] mb-10 tracking-tighter"
          >
            {t('title')}<br />
            <span className="text-accent-green drop-shadow-[0_0_50px_rgba(170,255,0,0.3)]">{t('titleHighlight')}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-text-muted font-medium leading-relaxed max-w-[700px] mx-auto mb-16"
          >
            {t('subtitle')}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <a
              href="#grid"
              className="group relative flex items-center justify-center w-full max-w-[280px] mx-auto bg-white py-5 rounded-full text-black hover:bg-accent-green transition-all duration-500 shadow-2xl"
            >
              <span className="text-sm font-black uppercase tracking-[0.2em]">Explore Articles</span>
              <div className="absolute right-3 w-12 h-12 bg-black rounded-full flex items-center justify-center text-white transform group-hover:rotate-45 transition-transform duration-500 hidden sm:flex">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M7 17L17 7" />
                  <path d="M7 7h10v10" />
                </svg>
              </div>
            </a>
          </motion.div>
        </div>
      </div>

      {/* Modern Grid Background Overlay */}
      <div className="absolute inset-0 opacity-5 pointer-events-none z-0" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.1) 1px, transparent 0)', backgroundSize: '40px 40px' }} />
    </section>
  );
}
