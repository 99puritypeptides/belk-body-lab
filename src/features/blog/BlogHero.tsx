'use client';

import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useTranslations } from 'next-intl';
import PremiumIcon from '@/components/ui/PremiumIcon';

export default function BlogHero() {
  const t = useTranslations('blog.hero');
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 200]);
  const scale = useTransform(scrollY, [0, 1000], [1, 1.1]);

  return (
    <section className="relative min-h-[85vh] flex flex-col pt-48 pb-24 lg:pt-64 lg:pb-40 overflow-hidden bg-black">
      {/* Background Media with Cinematic Parallax */}
      <motion.div
        style={{ y, scale }}
        className="absolute inset-0 z-0 overflow-hidden"
      >
        <video
          src="/BBL Media/leg-day.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover grayscale opacity-70 brightness-[0.5] contrast-[1.2]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black" />
      </motion.div>

      {/* Decorative Grid Lines */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] select-none z-10">
        <div className="absolute top-0 left-1/4 w-px h-full bg-white" />
        <div className="absolute top-0 left-2/4 w-px h-full bg-white" />
        <div className="absolute top-0 left-3/4 w-px h-full bg-white" />
      </div>

      <div className="max-w-[1800px] mx-auto px-6 lg:px-20 relative z-20 w-full flex-1 flex flex-col justify-center">
        <div className="max-w-6xl">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-6 mb-12"
          >
            <div className="w-12 h-[1px] bg-accent-green" />
            <span className="text-[10px] font-black uppercase tracking-[0.6em] text-accent-green">
              {t('label')}
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "circOut" }}
            className="text-white text-5xl md:text-8xl lg:text-[10vw] font-display font-black uppercase tracking-tighter leading-[0.8] mb-12"
          >
            {t('title')} <br />
            <span
              className="text-transparent mt-4 block"
              style={{
                WebkitTextStroke: '1.5px rgba(255,255,255,0.8)',
                filter: 'drop-shadow(0 0 10px rgba(0,0,0,0.5))'
              }}
            >
              {t('titleHighlight')}
            </span>
          </motion.h1>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
            <div className="lg:col-span-6 space-y-12">
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-white/40 text-lg md:text-2xl font-light leading-relaxed tracking-tight border-l border-white/10 pl-10"
              >
                {t('subtitle')}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                <motion.a
                  href="#grid"
                  whileHover="hover"
                  className="group inline-flex items-center gap-8 text-white"
                >
                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:border-white transition-all duration-500 shadow-[0_0_30px_rgba(255,255,255,0)] group-hover:shadow-[0_0_30px_rgba(255,255,255,0.1)] overflow-hidden flex-shrink-0">
                    <PremiumIcon
                      name="arrow"
                      size={32}
                      className="group-hover:text-black transition-colors"
                    />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[9px] font-black uppercase tracking-[0.4em] text-white/40 group-hover:text-accent-green transition-colors mb-1">
                      Archives
                    </span>
                    <span className="text-sm font-black uppercase tracking-[0.2em] group-hover:translate-x-2 transition-transform duration-500">
                      {t('cta')}
                    </span>
                  </div>
                </motion.a>
              </motion.div>
            </div>

            <div className="lg:col-span-4 lg:col-start-9 hidden lg:block">
              <div className="flex flex-col items-end text-right space-y-4 opacity-20">
                <p className="text-[9px] font-black uppercase tracking-[0.5em] text-white">SYSTEMS ANALYSIS v2.0</p>
                <div className="w-px h-24 bg-gradient-to-b from-white to-transparent mr-4" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Meta text */}
      <div className="absolute right-10 bottom-24 vertical-text hidden xl:block pointer-events-none select-none opacity-5">
        <span className="text-[10px] font-black uppercase tracking-[1em] text-white">
          DISCIPLINE • SCIENCE • TRANSFORMATION
        </span>
      </div>
    </section>
  );
}
