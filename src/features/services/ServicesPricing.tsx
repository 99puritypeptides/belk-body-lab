'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import PremiumIcon from '@/components/ui/PremiumIcon';

export default function ServicesPricing() {
  const t = useTranslations('servicesPage.pricing');

  const PACKAGES = [
    {
      id: 'starter',
      name: t('starter.name'),
      price: t('starter.price'),
      description: t('starter.description'),
      features: [
        t('starter.features.0'),
        t('starter.features.1'),
        t('starter.features.2'),
        t('starter.features.3'),
        t('starter.features.4'),
      ],
      accent: '#888888',
      popular: false,
    },
    {
      id: 'transform',
      name: t('transform.name'),
      price: t('transform.price'),
      description: t('transform.description'),
      highlight: t('transform.highlight'),
      features: [
        t('transform.features.0'),
        t('transform.features.1'),
        t('transform.features.2'),
        t('transform.features.3'),
        t('transform.features.4'),
        t('transform.features.5'),
        t('transform.features.6'),
      ],
      accent: '#AAFF00',
      popular: true,
    },
    {
      id: 'elite',
      name: t('elite.name'),
      price: t('elite.price'),
      description: t('elite.description'),
      highlight: t('elite.highlight'),
      features: [
        t('elite.features.0'),
        t('elite.features.1'),
        t('elite.features.2'),
        t('elite.features.3'),
        t('elite.features.4'),
        t('elite.features.5'),
        t('elite.features.6'),
        t('elite.features.7'),
      ],
      accent: '#FF6B00',
      popular: false,
    },
  ];

  return (
    <section
      id="pricing"
      className="relative z-10 py-32 lg:py-60 bg-[#050505] overflow-hidden"
    >
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-1/4 w-[1px] h-full bg-white/[0.03] hidden lg:block" />
      <div className="absolute top-0 right-1/4 w-[1px] h-full bg-white/[0.03] hidden lg:block" />

      <div className="max-w-[1600px] mx-auto px-6 lg:px-10 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-32 lg:mb-48 text-center"
        >
          <div className="inline-flex items-center gap-4 mb-8">
            <div className="w-12 h-[1px] bg-accent-green" />
            <span className="text-[10px] font-black uppercase tracking-[0.6em] text-accent-green">
              Investment Protocols
            </span>
            <div className="w-12 h-px bg-accent-green" />
          </div>
          <h2 className="text-5xl md:text-8xl font-display font-black text-white uppercase tracking-tighter leading-[0.8] mb-12">
            Choose Your <br />
            <span className="text-transparent" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.2)' }}>Transformation</span>
          </h2>
          <p className="text-white/40 text-lg md:text-xl font-light leading-relaxed max-w-2xl mx-auto">
            Professional grade coaching designed for those who refuse to settle for average results.
          </p>
        </motion.div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center max-w-7xl mx-auto">
          {PACKAGES.map((pkg, i) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.8 }}
              className={`relative group ${pkg.popular ? 'lg:scale-110 z-20' : 'z-10'}`}
            >
              {/* Main Card */}
              <div className={`relative h-full p-10 rounded-[3rem] border transition-all duration-700 overflow-hidden ${
                pkg.popular 
                  ? 'bg-[#0a0a0a] border-accent-green/30 shadow-[0_0_100px_rgba(170,255,0,0.05)]' 
                  : 'bg-white/[0.02] border-white/5 hover:border-white/10'
              }`}>
                {/* Popular Glow */}
                {pkg.popular && (
                  <div className="absolute -top-40 -right-40 w-80 h-80 bg-accent-green/10 blur-[100px] -z-10" />
                )}

                {/* Header */}
                <div className="mb-12">
                  {pkg.popular && (
                    <span className="text-[9px] font-black uppercase tracking-[0.4em] text-accent-green block mb-4">Elite Preference</span>
                  )}
                  <h3 className="text-white font-display text-4xl font-black uppercase tracking-tight mb-4">{pkg.name}</h3>
                  <div className="flex items-baseline gap-2">
                    <span className="text-white text-7xl font-display font-black">${pkg.price}</span>
                    <span className="text-white/30 text-[10px] font-black uppercase tracking-widest">/ Month</span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-white/40 text-sm font-light leading-relaxed mb-12 min-h-[4rem]">
                  {pkg.description}
                </p>

                {/* Features List */}
                <div className="space-y-6 mb-16">
                  {pkg.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-4">
                      <div className={`w-1.5 h-1.5 rounded-full ${pkg.popular ? 'bg-accent-green shadow-[0_0_10px_rgba(170,255,0,0.5)]' : 'bg-white/20'}`} />
                      <span className="text-[11px] font-black uppercase tracking-widest text-white/60">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Action */}
                <Link
                  href="/contact"
                  className={`flex items-center justify-between group/btn p-2 pl-8 rounded-full transition-all duration-500 ${
                    pkg.popular 
                      ? 'bg-accent-green text-black hover:scale-[1.02]' 
                      : 'bg-white/5 text-white border border-white/10 hover:bg-white hover:text-black'
                  }`}
                >
                  <span className="font-black text-[10px] uppercase tracking-[0.3em]">Select Protocol</span>
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-500 ${
                    pkg.popular ? 'bg-black text-white' : 'bg-white/10 text-white group-hover/btn:bg-black group-hover/btn:text-white'
                  }`}>
                    <PremiumIcon name="arrow" size={20} />
                  </div>
                </Link>
              </div>

              {/* Decorative Step Number */}
              <span className="absolute -top-10 -left-10 text-9xl font-display font-black text-white/[0.02] -z-10 group-hover:text-white/[0.04] transition-colors pointer-events-none select-none">
                0{i+1}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Guarantee Seal */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-48 lg:mt-64 text-center max-w-4xl mx-auto border-t border-white/5 pt-16"
        >
          <div className="flex flex-col items-center gap-10">
            <div className="w-20 h-20 rounded-[2rem] bg-accent-green/10 border border-accent-green/20 flex items-center justify-center relative overflow-hidden group">
               <div className="absolute inset-0 bg-accent-green/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
               <span className="text-3xl relative z-10">🛡️</span>
            </div>
            <div className="space-y-4">
              <h4 className="text-white font-display text-3xl font-black uppercase tracking-tight">{t('guarantee')}</h4>
              <p className="text-white/40 text-lg font-light leading-relaxed">
                {t('guaranteeDesc')}
              </p>
            </div>
            <div className="flex items-center gap-12 mt-8">
               <div className="text-center">
                  <p className="text-white font-display text-4xl font-black italic">100%</p>
                  <p className="text-[9px] font-black uppercase tracking-widest text-accent-green">Success Rate</p>
               </div>
               <div className="w-px h-12 bg-white/10" />
               <div className="text-center">
                  <p className="text-white font-display text-4xl font-black italic">90_DAY</p>
                  <p className="text-[9px] font-black uppercase tracking-widest text-accent-green">Guarantee</p>
               </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

