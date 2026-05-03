'use client';

import React, { useRef, useEffect } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { useTranslations } from 'next-intl';

export default function AboutLifestyle() {
  const t = useTranslations('aboutPage.lifestyle');
  const containerRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const isVideoInView = useInView(videoRef, { amount: 0.2 });

  useEffect(() => {
    if (isVideoInView) {
      videoRef.current?.play();
    } else {
      videoRef.current?.pause();
    }
  }, [isVideoInView]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const scale = useTransform(scrollYProgress, [0.1, 0.5], [0.8, 1]);
  const opacity = useTransform(scrollYProgress, [0.1, 0.5], [0, 1]);

  return (
    <section ref={containerRef} className="relative py-32 lg:py-60 bg-[#0c0c0c] overflow-hidden">
      <div className="max-w-[1800px] mx-auto px-6 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 lg:gap-40 items-center">
          
          <div className="space-y-16">
            <div className="space-y-8">
              <div className="flex items-center gap-4">
                <div className="w-12 h-[1px] bg-accent-green" />
                <span className="text-[10px] font-black uppercase tracking-[0.5em] text-accent-green">
                  {t('label')}
                </span>
              </div>
              <h2 className="text-white text-5xl md:text-8xl font-display font-black uppercase tracking-tighter leading-[0.85]">
                {t('title')}
              </h2>
            </div>
            
            <div className="space-y-10 max-w-xl">
              <p className="text-white/60 text-2xl md:text-3xl font-light leading-snug tracking-tight">
                {t('content')}
              </p>
            </div>

            <div className="flex flex-wrap gap-x-20 gap-y-10 pt-12">
              {[t('value1'), t('value2'), t('value3')].map((v, i) => (
                <div key={v} className="group flex items-center gap-6">
                  <span className="text-[10px] font-black text-accent-green/60 group-hover:text-accent-green transition-colors duration-500">0{i + 1}</span>
                  <p className="text-xs font-black uppercase tracking-[0.4em] text-white/50 group-hover:text-white/90 transition-all duration-500">{v}</p>
                </div>
              ))}
            </div>
          </div>

          <motion.div 
            style={{ scale, opacity }}
            className="relative mt-20 lg:mt-0"
          >
            {/* Outer Decorative Frame */}
            <div className="absolute inset-[-1.5rem] lg:inset-[-3rem] border border-white/5 rounded-[3rem] lg:rounded-[5rem] pointer-events-none" />
            
            <div className="grid grid-cols-12 gap-4 lg:gap-8 relative">
              {/* Primary Video */}
              <div className="col-span-7 lg:col-span-8 aspect-[3/4] rounded-[2rem] lg:rounded-[4rem] overflow-hidden shadow-2xl relative group">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10 opacity-60 group-hover:opacity-40 transition-opacity duration-700" />
                <video 
                  ref={videoRef}
                  src="/BBL Media/leg-day.mp4" 
                  loop muted playsInline
                  className="w-full h-full object-cover grayscale brightness-90 contrast-[1.1] scale-105 group-hover:scale-100 transition-transform duration-[2000ms]"
                />
              </div>

              {/* Secondary Images Staggered */}
              <div className="col-span-5 lg:col-span-4 space-y-4 lg:space-y-8 pt-8 lg:pt-16">
                <div className="aspect-square rounded-[1.5rem] lg:rounded-[3rem] overflow-hidden border border-white/10 grayscale hover:grayscale-0 transition-all duration-700 hover:scale-[1.02]">
                  <img src="/BBL Media/lifestyle-2.jpg" alt="Kyle Lifestyle" className="w-full h-full object-cover" />
                </div>
                <div className="aspect-[4/5] rounded-[1.5rem] lg:rounded-[3rem] overflow-hidden border border-white/10 grayscale hover:grayscale-0 transition-all duration-700 hover:scale-[1.02]">
                  <img src="/BBL Media/lifestyle-3.jpg" alt="Kyle Lifestyle" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
            
            {/* Floating Badge */}
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              className="absolute -right-8 -top-8 lg:-right-16 lg:-top-16 w-32 h-32 lg:w-48 lg:h-48 bg-accent-green rounded-full flex items-center justify-center p-4 z-20 hidden lg:flex shadow-[0_0_60px_rgba(170,255,0,0.2)]"
            >
              <svg viewBox="0 0 100 100" className="w-full h-full">
                <defs>
                  <path id="circlePath2" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" />
                </defs>
                <text className="text-[11px] font-black uppercase tracking-[0.25em] fill-black">
                  <textPath xlinkHref="#circlePath2">
                    DISCIPLINE • PRECISION • RESILIENCE • 
                  </textPath>
                </text>
              </svg>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
