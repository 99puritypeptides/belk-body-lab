'use client';

import React from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import PremiumIcon from '@/components/ui/PremiumIcon';

const MotionLink = motion(Link);

export default function PortfolioHero() {
  const t = useTranslations('portfolioHero');
  const t_gallery = useTranslations('portfolioGallery');
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 150]);
  const scale = useTransform(scrollY, [0, 1000], [1, 1.1]);
  
  const videoRef = React.useRef<HTMLVideoElement>(null);
  const isInView = useInView(videoRef);

  React.useEffect(() => {
    if (isInView) {
      videoRef.current?.play();
    } else {
      videoRef.current?.pause();
    }
  }, [isInView]);

  return (
    <section className="relative min-h-[800px] flex flex-col pt-64 pb-32 lg:pt-80 lg:pb-48 overflow-hidden bg-black">
      {/* Background Media with Cinematic Parallax */}
      <motion.div 
        style={{ y, scale }}
        className="absolute inset-0 z-0 will-change-transform"
      >
        <video
          ref={videoRef}
          src="/BBL Media/chest-day.mp4"
          loop
          muted
          playsInline
          className="w-full h-full object-cover grayscale opacity-30 brightness-[0.6]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black" />
      </motion.div>

      <div className="max-w-[1800px] mx-auto px-6 lg:px-16 relative z-10 w-full flex-1 flex flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
          
          {/* Main Content Column */}
          <div className="lg:col-span-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-4 mb-10"
            >
              <div className="w-12 h-[1px] bg-accent-green/50" />
              <span className="text-[10px] font-black uppercase tracking-[0.5em] text-white/40">
                {t('label')}
              </span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "circOut" }}
              className="text-white text-4xl md:text-7xl lg:text-[7vw] font-display font-black uppercase tracking-tighter leading-[0.9] mb-12"
            >
              <div className="flex flex-col">
                <span>{t('title')}</span>
                <span className="text-transparent mt-2 sm:mt-0" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.4)' }}>
                  {t('titleHighlight')}
                </span>
              </div>
            </motion.h1>

            <div className="flex flex-col md:flex-row items-start md:items-center gap-12 pt-6">
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-white/40 text-lg md:text-xl font-light leading-snug tracking-tight max-w-xl border-l border-white/10 pl-10"
              >
                {t('description')}
              </motion.p>
              
              <div className="flex flex-col sm:flex-row items-center gap-12 pt-10">
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
                        Start Your Protocol
                      </span>
                      <span className="text-sm font-black uppercase tracking-[0.2em] group-hover:translate-x-2 transition-transform duration-500">
                        {t_gallery('ctaBtn')}
                      </span>
                    </div>
                  </MotionLink>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}