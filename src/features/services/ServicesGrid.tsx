'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import PremiumIcon from '@/components/ui/PremiumIcon';
import ScrollRevealText from '@/components/ui/ScrollRevealText';

export default function ServicesGrid() {
  const t = useTranslations('servicesPage.grid');

  const SERVICES = [
    {
      id: 'online',
      title: t('online.title'),
      subtitle: t('online.subtitle'),
      description: t('online.description'),
      features: [
        t('online.features.0'),
        t('online.features.1'),
        t('online.features.2'),
        t('online.features.3'),
        t('online.features.4'),
        t('online.features.5'),
      ],
      footer: t('online.footer'),
      cta: t('online.cta'),
      icon: 'target',
      popular: true,
      image: "/BBL Media/lifestyle-2.jpg"
    },
    {
      id: 'oneOnOne',
      title: t('oneOnOne.title'),
      subtitle: t('oneOnOne.subtitle'),
      description: t('oneOnOne.description'),
      features: [
        t('oneOnOne.features.0'),
        t('oneOnOne.features.1'),
        t('oneOnOne.features.2'),
        t('oneOnOne.features.3'),
        t('oneOnOne.features.4'),
      ],
      footer: t('oneOnOne.footer'),
      cta: t('oneOnOne.cta'),
      icon: 'pulse',
      image: "/BBL Media/lifestyle-1.jpg"
    },
    {
      id: 'customPlan',
      title: t('customPlan.title'),
      subtitle: t('customPlan.subtitle'),
      description: t('customPlan.description'),
      features: [
        t('customPlan.features.0'),
        t('customPlan.features.1'),
        t('customPlan.features.2'),
        t('customPlan.features.3'),
        t('customPlan.features.4'),
      ],
      cta: t('customPlan.cta'),
      icon: 'shield',
      image: "/BBL Media/lifestyle-3.jpg"
    },
    {
      id: 'nutrition',
      title: t('nutrition.title'),
      subtitle: t('nutrition.subtitle'),
      description: t('nutrition.description'),
      features: [
        t('nutrition.features.0'),
        t('nutrition.features.1'),
        t('nutrition.features.2'),
        t('nutrition.features.3'),
        t('nutrition.features.4'),
      ],
      footer: t('nutrition.footer'),
      cta: t('nutrition.cta'),
      icon: 'target',
      image: "/BBL Media/lifestyle-2.jpg"
    }
  ];

  return (
    <section
      id="services"
      className="relative z-10 py-32 lg:py-60 bg-[#080808] overflow-hidden"
      aria-label="Coaching services breakdown"
    >
      <div className="max-w-[1800px] mx-auto px-6 lg:px-20">
        
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end mb-32 lg:mb-48">
          <div className="lg:col-span-8">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-[1px] bg-accent-green" />
              <span className="text-[10px] font-black uppercase tracking-[0.5em] text-accent-green">
                {t('subtitle')}
              </span>
            </div>
            <h2 className="text-white text-5xl md:text-9xl font-display font-black uppercase tracking-tighter leading-[0.8]">
              {t('title').split(' ')[0]} <br />
              <span className="text-accent-green">{t('title').split(' ').slice(1).join(' ')}</span>
            </h2>
          </div>
          <div className="lg:col-span-3 lg:col-start-10 hidden lg:block text-right">
             <p className="text-white/20 text-xs font-mono uppercase tracking-widest">
               Service Matrix // v3.0
             </p>
          </div>
        </div>

        {/* Services List - Staggered Editorial Layout */}
        <div className="space-y-60 lg:space-y-80">
          {SERVICES.map((svc, i) => (
            <div 
              key={svc.id}
              className={`grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-32 items-start ${i % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
            >
              {/* Info Column */}
              <div className={`lg:col-span-6 ${i % 2 !== 0 ? 'lg:col-start-7' : 'lg:col-start-1'} space-y-16`}>
                <div className="flex items-center gap-6">
                   <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-accent-green">
                      <PremiumIcon name={svc.icon as any} size={32} />
                   </div>
                   <div className="space-y-1">
                      {svc.popular && (
                        <span className="text-[10px] font-black text-accent-green uppercase tracking-[0.4em] mb-1 block">Most Popular</span>
                      )}
                      <h3 className="text-white text-4xl md:text-6xl font-display font-black uppercase tracking-tighter">
                        {svc.title}
                      </h3>
                   </div>
                </div>

                <div className="space-y-8">
                  <p className="text-accent-green/80 text-xl font-bold uppercase tracking-widest leading-tight">
                    {svc.subtitle}
                  </p>
                  <ScrollRevealText 
                    text={svc.description}
                    className="text-white/60 text-2xl md:text-4xl font-light leading-snug tracking-tight border-l border-white/10 pl-12"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-6 pt-12">
                   {svc.features.map((item) => (
                     <div key={item} className="flex items-center gap-4">
                        <div className="w-1.5 h-1.5 rounded-full bg-accent-green" />
                        <span className="text-[11px] font-black uppercase tracking-widest text-white/40">{item}</span>
                     </div>
                   ))}
                </div>

                {svc.footer && (
                  <p className="text-white/30 text-lg italic font-light leading-relaxed max-w-xl">
                    {svc.footer}
                  </p>
                )}
                
                <div className="pt-10">
                   <motion.div whileHover="hover">
                     <Link
                       href="/contact"
                       className="group inline-flex items-center gap-10 px-10 py-6 bg-white/5 border border-white/10 rounded-2xl transition-all hover:bg-white hover:text-black"
                     >
                       <span className="font-black text-[10px] uppercase tracking-[0.4em]">{svc.cta}</span>
                       <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:border-black/20 group-hover:bg-black/10 group-hover:text-black transition-all flex-shrink-0">
                          <PremiumIcon name="arrow" size={20} />
                       </div>
                     </Link>
                   </motion.div>
                </div>
              </div>

              {/* Decorative / Media Column */}
              <div className={`lg:col-span-5 ${i % 2 !== 0 ? 'lg:col-start-1 lg:row-start-1' : 'lg:col-start-8'} relative`}>
                 <div className="relative aspect-[4/5] rounded-[3rem] overflow-hidden border border-white/5 shadow-2xl group">
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10" />
                    <img 
                      src={svc.image} 
                      alt={svc.title}
                      className="w-full h-full object-cover grayscale brightness-75 transition-transform duration-[3000ms] group-hover:scale-110"
                    />
                    {/* Technical Overlay */}
                    <div className="absolute bottom-10 left-10 z-20">
                      <span className="text-[9px] font-black uppercase tracking-[0.4em] text-white/40 block mb-2">Technical Specification</span>
                      <p className="text-white font-display text-2xl font-black italic">PRTCL_ID_{svc.id.toUpperCase()}</p>
                    </div>
                 </div>
                 
                 {/* Floating Outline Text */}
                 <div className={`absolute -z-10 top-1/2 -translate-y-1/2 opacity-[0.03] pointer-events-none select-none hidden xl:block ${i % 2 === 0 ? '-right-40' : '-left-40'}`}>
                    <span className="text-[18vw] font-display font-black uppercase whitespace-nowrap">
                       {svc.title.split(' ')[0]}
                    </span>
                 </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

