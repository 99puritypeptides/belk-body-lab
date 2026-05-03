'use client';

import React from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import AnimatedNumber from '@/components/effects/AnimatedNumber';
import CTAButton from '@/components/ui/CTAButton';
import PremiumIcon from '@/components/ui/PremiumIcon';

const MotionLink = motion(Link);

export default function ServicesHero() {
  const t = useTranslations('servicesPage.hero');
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

  const STATS = [
    { end: 500, suffix: '+', label: t('stat1') },
    { end: 98,  suffix: '%', label: t('stat2') },
    { end: 90,  suffix: '',  label: t('stat3') },
  ];

  return (
    <section className="relative min-h-screen flex flex-col pt-32 pb-24 overflow-hidden bg-black lg:h-screen">
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.video
          ref={videoRef}
          src="/BBL Media/leg-day.mp4"
          loop
          muted
          playsInline
          style={{ y, scale }}
          className="w-full h-full object-cover object-center grayscale opacity-30 brightness-[0.6] will-change-transform"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black" />
      </div>

      <div className="max-w-[1800px] mx-auto px-6 lg:px-16 relative z-10 w-full flex-1 flex flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
          
          {/* Main Content Column */}
          <div className="lg:col-span-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-4 mb-10"
            >
              <div className="w-12 h-[1px] bg-accent-green" />
              <span className="text-[10px] font-black uppercase tracking-[0.5em] text-accent-green">
                {t('subtitle')}
              </span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "circOut" }}
              className="text-white text-4xl sm:text-5xl md:text-7xl lg:text-[5vw] font-display font-black uppercase tracking-tighter leading-[0.9] mb-12"
            >
              {t('title').split(' ').slice(0, 3).join(' ')} <br />
              <span className="text-transparent" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.4)' }}>
                {t('title').split(' ').slice(3, 6).join(' ')}
              </span> <br />
              <span className="text-accent-green">
                {t('title').split(' ').slice(6).join(' ')}
              </span>
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
                      {t('ctaPrimary')}
                    </span>
                  </div>
                </MotionLink>
              </motion.div>

              <MotionLink 
                href="#process"
                whileHover="hover"
                className="group flex items-center gap-4 text-[10px] font-black uppercase tracking-[0.3em] text-white/40 hover:text-white transition-colors"
              >
                {t('ctaSecondary')}
                <PremiumIcon name="arrow" size={14} />
              </MotionLink>
            </div>
            </div>
          </div>

          {/* Social Proof Sidebar */}
          <div className="lg:col-span-4 lg:border-l lg:border-white/5 lg:pl-20">
            <div className="flex flex-col gap-16">
              {STATS.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + i * 0.1 }}
                  className="relative"
                >
                  <div className="flex items-baseline gap-4 mb-2">
                    <div className="font-display font-black text-6xl md:text-7xl text-white">
                      <AnimatedNumber start={0} end={stat.end} />{stat.suffix}
                    </div>
                    <div className="w-2 h-2 rounded-full bg-accent-green animate-pulse" />
                  </div>
                  <div className="text-[10px] font-black uppercase tracking-[0.4em] text-white/30 max-w-[150px] leading-relaxed">
                    {stat.label}
                  </div>
                  
                  {/* Decorative background number */}
                  <span className="absolute -left-10 top-1/2 -translate-y-1/2 text-[120px] font-display font-black text-white/[0.02] -z-10 pointer-events-none select-none">
                    0{i+1}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>

    </section>
  );
}

