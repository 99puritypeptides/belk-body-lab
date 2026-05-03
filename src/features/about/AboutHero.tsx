'use client';

import React from 'react';
import { motion, useScroll, useTransform, useSpring, useInView } from 'framer-motion';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { Link } from '@/i18n/navigation';
import PremiumIcon from '@/components/ui/PremiumIcon';

const MotionLink = motion(Link);

export default function AboutHero() {
  const t = useTranslations('aboutPage.hero');
  const videoRef = React.useRef<HTMLVideoElement>(null);
  const isInView = useInView(videoRef);

  React.useEffect(() => {
    if (isInView) {
      videoRef.current?.play();
    } else {
      videoRef.current?.pause();
    }
  }, [isInView]);

  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 150]);
  const scale = useTransform(scrollY, [0, 1000], [1, 1.1]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section className="relative h-screen flex flex-col pt-32 pb-12 overflow-hidden bg-[#050505]">
      {/* Background Media with Cinematic Parallax */}
      <motion.div 
        style={{ y, scale }}
        className="absolute inset-0 z-0"
      >
        <video
          ref={videoRef}
          src="/BBL Media/chest-day.mp4"
          loop
          muted
          playsInline
          className="w-full h-full object-cover grayscale opacity-40 brightness-75"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/40 to-transparent" />
      </motion.div>

      {/* Decorative vertical line */}
      <div className="absolute left-1/2 top-0 w-px h-screen bg-gradient-to-b from-transparent via-white/10 to-transparent hidden lg:block" />

      <div className="max-w-[1800px] mx-auto px-6 lg:px-20 relative z-10 w-full flex-1 flex flex-col justify-center py-12">
        <div className="space-y-16 lg:space-y-24">
          
          <div className="space-y-6 lg:space-y-10">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="inline-flex items-center gap-6"
            >
              <span className="text-[10px] font-black uppercase tracking-[0.6em] text-accent-green">
                {t('label')}
              </span>
              <div className="w-16 h-px bg-white/20" />
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-white font-display font-black leading-[0.9] tracking-tight uppercase"
              style={{ fontSize: 'clamp(3rem, 10vw, 7.5rem)' }}
            >
              {t('title')} <br />
              <span className="italic font-light text-white/20 block mt-2">{t('titleHighlight')}</span>
            </motion.h1>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
            <div className="lg:col-span-1 hidden lg:block" />
            
            <div className="lg:col-span-5 space-y-10">
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="text-white/40 text-lg md:text-xl font-light leading-relaxed border-l border-white/10 pl-10"
              >
                {t('subtitle')}
              </motion.p>
            </div>

            <div className="lg:col-span-5 lg:col-start-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
              >
                <MotionLink 
                  href="/contact"
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
                      {t('ctaLabel')}
                    </span>
                    <span className="text-sm font-black uppercase tracking-[0.2em] group-hover:translate-x-2 transition-transform duration-500">
                      {t('cta')}
                    </span>
                  </div>
                </MotionLink>
              </motion.div>
            </div>
          </div>

        </div>
      </div>

      {/* Floating Meta Text */}
      <motion.div 
        style={{ opacity }}
        className="absolute right-0 top-1/2 -translate-y-1/2 vertical-text hidden xl:block"
      >
        <span className="text-[10px] font-black uppercase tracking-[1em] text-white/5 whitespace-nowrap">
          {t('meta')}
        </span>
      </motion.div>
    </section>
  );
}
