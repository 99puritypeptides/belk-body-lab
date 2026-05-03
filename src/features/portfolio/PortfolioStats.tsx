'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import AnimatedNumber from '@/components/effects/AnimatedNumber';
import PremiumIcon from '@/components/ui/PremiumIcon';

export default function PortfolioStats() {
  const t = useTranslations('portfolioStats');

  const stats = [
    { 
      value: 500, 
      suffix: '+', 
      label: t('stat1Label'), 
      icon: 'users',
      metric: 'METRIC.01'
    },
    { 
      value: 42, 
      suffix: t('stat2Suffix'), 
      label: t('stat2Label'), 
      icon: 'target',
      metric: 'METRIC.02'
    },
    { 
      value: 98, 
      suffix: '%', 
      label: t('stat3Label'), 
      icon: 'star',
      metric: 'METRIC.03'
    },
    { 
      value: 7, 
      suffix: t('stat4Suffix'), 
      label: t('stat4Label'), 
      icon: 'award',
      metric: 'METRIC.04'
    },
  ];

  return (
    <section className="relative z-20 -mt-20 lg:-mt-32 px-6 lg:px-16">
      <div className="max-w-[1800px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="group relative bg-black/40 backdrop-blur-3xl border border-white/10 rounded-[2.5rem] p-8 lg:p-12 flex flex-col justify-between overflow-hidden hover:bg-black/60 transition-all duration-700 h-full min-h-[320px]"
            >
              {/* Animated Background Gradient */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
                <div className="absolute top-0 right-0 w-64 h-64 bg-accent-green/5 blur-[100px] rounded-full" />
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 blur-[100px] rounded-full" />
              </div>

              {/* Icon & Label */}
              <div className="relative z-10 space-y-8">
                <div className="flex items-center justify-between">
                  <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:scale-110 group-hover:border-accent-green/30 transition-all duration-500">
                    <PremiumIcon 
                      name={stat.icon as any} 
                      size={24} 
                      className="text-white/40 group-hover:text-accent-green transition-colors duration-500" 
                    />
                  </div>
                  <div className="px-3 py-1 bg-white/5 border border-white/10 rounded-full">
                    <span className="text-[8px] font-black uppercase tracking-[0.3em] text-white/30 group-hover:text-white/60 transition-colors">
                      {stat.metric}
                    </span>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-baseline gap-2">
                    <div className="font-display font-black text-6xl lg:text-7xl text-white tracking-tighter leading-none">
                      <AnimatedNumber end={stat.value} />
                    </div>
                    <span className="text-white/20 text-2xl font-bold tracking-tight mb-1">{stat.suffix}</span>
                  </div>
                </div>
              </div>

              {/* Description */}
              <div className="relative z-10 pt-10 mt-auto border-t border-white/10">
                <p className="text-[11px] lg:text-xs font-black uppercase tracking-[0.4em] text-white/30 leading-relaxed group-hover:text-white transition-colors duration-500">
                  {stat.label}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}