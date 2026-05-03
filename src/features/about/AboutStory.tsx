'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useTranslations } from 'next-intl';
import PremiumIcon from '@/components/ui/PremiumIcon';
import ScrollRevealText from '@/components/ui/ScrollRevealText';

export default function AboutStory() {
  const t = useTranslations('aboutPage.story');
  const containerRef = useRef<HTMLElement>(null);

  return (
    <section ref={containerRef} className="relative py-32 lg:py-60 bg-[#080808] overflow-hidden">
      <div className="max-w-[1800px] mx-auto px-6 lg:px-20">
        
        {/* Row 1: Header & Label */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end mb-32 lg:mb-48">
          <div className="lg:col-span-8">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-[1px] bg-accent-green" />
              <span className="text-[10px] font-black uppercase tracking-[0.5em] text-accent-green">
                {t('label')}
              </span>
            </div>
            <h2 className="text-white text-5xl md:text-9xl font-display font-black uppercase tracking-tighter leading-[0.8]">
              {t('title')}
            </h2>
          </div>
          <div className="lg:col-span-3 lg:col-start-10 hidden lg:block">
            <span className="text-[10px] font-black text-white/10 uppercase tracking-[1em] vertical-text origin-bottom-right rotate-180">
              ESTABLISHED PROTOCOL 001
            </span>
          </div>
        </div>

        {/* Row 2: Narrative & Sticky Image */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 lg:gap-32 items-start mb-32 lg:mb-60">
          <div className="lg:col-span-5 lg:sticky lg:top-40">
             <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl border border-white/5"
            >
              <img 
                src="/BBL Media/lifestyle-1.jpg" 
                alt="Kyle Belk"
                className="w-full h-full object-cover grayscale brightness-90 transition-transform duration-[3000ms] hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
              <div className="absolute bottom-10 left-10">
                <span className="text-[10px] font-black uppercase tracking-[0.5em] text-white/40">Diagnostic Protocol</span>
                <p className="text-white font-display text-4xl font-black italic">No. 001</p>
              </div>
            </motion.div>
          </div>

          <div className="lg:col-span-6 lg:col-start-7 space-y-24">
            <ScrollRevealText 
              text={t('content1')}
              className="text-white/60 text-2xl md:text-5xl font-light leading-tight tracking-tight border-l border-accent-green/20 pl-12"
            />
            
            <div className="space-y-12 max-w-xl">
               <span className="text-[10px] font-black text-white/20 uppercase tracking-[0.4em] block">Diagnostic Context</span>
               <p className="text-white/30 text-lg leading-relaxed font-light">
                 {t('content2')}
               </p>
            </div>
          </div>
        </div>

        {/* Row 3: Architectural Mission Statement */}
        <div className="relative pt-32 lg:pt-48 border-t border-white/5 mt-32">
           {/* Massive Background Text (Outline) */}
           <div className="absolute top-1/2 left-0 -translate-y-1/2 w-full select-none pointer-events-none overflow-hidden h-full flex items-center will-change-transform">
             <span className="font-display font-black text-[25vw] leading-none uppercase text-white/[0.02] whitespace-nowrap -ml-[10%]">
                THE MISSION STATEMENT 2025
             </span>
           </div>

           <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 relative z-10 items-start">
              <div className="lg:col-span-3 space-y-12">
                 <div className="space-y-4">
                    <span className="text-[10px] font-black text-accent-green uppercase tracking-[0.5em]">Protocol ID</span>
                    <p className="text-white font-mono text-xs opacity-40">BBL-STORY-MNS-001</p>
                 </div>
                 
                 <div className="relative w-32 h-32 will-change-transform">
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                      className="absolute inset-0"
                    >
                      <svg viewBox="0 0 100 100" className="w-full h-full opacity-10">
                        <path id="badgePath" d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0" fill="none" />
                        <text className="text-[7px] font-black uppercase tracking-[0.3em] fill-white">
                          <textPath xlinkHref="#badgePath">BUILDING THE FUTURE OF PERFORMANCE •</textPath>
                        </text>
                      </svg>
                    </motion.div>
                    <div className="absolute inset-0 flex items-center justify-center">
                       <PremiumIcon name="target" size={24} color="#AAFF00" />
                    </div>
                 </div>
              </div>

              <div className="lg:col-span-8 lg:col-start-5">
                <div className="space-y-12">
                  <div className="flex items-center gap-6">
                    <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-[10px] text-white/40">
                      EN
                    </div>
                    <div className="flex-1 h-px bg-gradient-to-r from-white/10 to-transparent" />
                  </div>

                  <ScrollRevealText 
                    text={t('mission')}
                    className="text-white font-display text-4xl md:text-7xl font-black tracking-tighter leading-[0.95] uppercase"
                  />
                  
                  <div className="flex flex-wrap gap-12 pt-12">
                     <div className="space-y-2">
                        <span className="text-[9px] font-black text-white/20 uppercase tracking-[0.3em]">Location</span>
                        <p className="text-white/60 text-xs">Charleston, SC // Global</p>
                     </div>
                     <div className="space-y-2">
                        <span className="text-[9px] font-black text-white/20 uppercase tracking-[0.3em]">Status</span>
                        <p className="text-white/60 text-xs italic font-bold text-accent-green">Operational</p>
                     </div>
                  </div>
                </div>
              </div>
           </div>
        </div>

      </div>
    </section>
  );
}
