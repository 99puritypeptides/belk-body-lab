'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import PremiumIcon from '@/components/ui/PremiumIcon';

const MotionLink = motion(Link);

export default function WhoItsFor() {
  const t = useTranslations('servicesPage.whoItsFor');

  const SEGMENTS = [
    {
      title: t('items.0.title'),
      description: t('items.0.description'),
      accent: '#60A5FA',
      span: 'lg:col-span-4'
    },
    {
      title: t('items.1.title'),
      description: t('items.1.description'),
      accent: '#AAFF00',
      span: 'lg:col-span-8'
    },
    {
      title: t('items.2.title'),
      description: t('items.2.description'),
      accent: '#F97316',
      span: 'lg:col-span-7'
    },
    {
      title: t('items.3.title'),
      description: t('items.3.description'),
      accent: '#C084FC',
      span: 'lg:col-span-5'
    }
  ];

  return (
    <section
      id="who-its-for"
      className="relative z-10 py-32 lg:py-48 bg-black overflow-hidden"
    >
      {/* Background Decorative Element */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent-green/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
      
      <div className="max-w-[1600px] mx-auto px-6 lg:px-10 relative z-10">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10 mb-24 lg:mb-32">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-8"
            >
              <div className="w-12 h-[2px] bg-accent-green" />
              <span className="text-[10px] font-black uppercase tracking-[0.5em] text-accent-green">
                Persona Engineering
              </span>
            </motion.div>
            
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-display font-black text-white leading-[0.9] tracking-tighter uppercase">
              {t('title').split(' ').slice(0, 3).join(' ')} <br />
              <span className="text-transparent border-t-text outline-text-white stroke-white fill-none" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.2)' }}>
                {t('title').split(' ').slice(3).join(' ')}
              </span>
            </h2>
          </div>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-white/40 text-lg md:text-xl font-light leading-relaxed max-w-md lg:text-right"
          >
            {t('subtitle')}
          </motion.p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
          {SEGMENTS.map((seg, i) => (
            <motion.div
              key={seg.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className={`${seg.span} group relative min-h-[350px] lg:min-h-[450px] rounded-[2.5rem] overflow-hidden border border-white/5 bg-[#0A0A0A] p-10 lg:p-16 flex flex-col justify-between hover:border-white/10 transition-colors duration-500`}
            >
              {/* Card Background Gradient */}
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-700"
                style={{ background: `radial-gradient(circle at center, ${seg.accent}, transparent 70%)` }}
              />

              <div className="relative z-10">
                <div 
                  className="w-16 h-1 w-full rounded-full mb-12 opacity-30 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: seg.accent }}
                />
                <span className="text-[10px] font-black text-white/40 uppercase tracking-[0.4em] block mb-4">
                  Case 0{i + 1}
                </span>
                <h3 className="text-3xl lg:text-5xl font-display font-black text-white leading-none tracking-tight uppercase group-hover:text-white transition-colors">
                  {seg.title}
                </h3>
              </div>

              <div className="relative z-10 max-w-xs">
                <p className="text-white/40 text-sm lg:text-base font-light leading-relaxed group-hover:text-white/60 transition-colors">
                  {seg.description}
                </p>
                
                <MotionLink 
                  href="#pricing"
                  whileHover="hover"
                  className="mt-8 flex items-center gap-4 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500"
                >
                  <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center">
                    <PremiumIcon name="arrow" size={16} />
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-widest text-white">Learn More</span>
                </MotionLink>
              </div>

              {/* Decorative Corner Element */}
              <div className="absolute top-0 right-0 p-8">
                <div 
                  className="w-2 h-2 rounded-full group-hover:scale-[3] transition-transform duration-500"
                  style={{ backgroundColor: seg.accent }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

