'use client';

import React, { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';

export default function PricingCards() {
  const t = useTranslations('pricingCards');
  const [billing, setBilling] = useState<'monthly' | 'quarterly'>('monthly');

  const packages = [
    {
      id: 'starter',
      name: t('starterName'),
      tagline: t('starterTagline'),
      price: { monthly: 149, quarterly: 399 },
      duration: t('starterDuration'),
      color: '#888888',
      popular: false,
      features: [
        { text: t('starterF1'), included: true },
        { text: t('starterF2'), included: true },
        { text: t('starterF3'), included: true },
        { text: t('starterF4'), included: true },
        { text: t('starterF5'), included: true },
        { text: t('starterF6'), included: false },
        { text: t('starterF7'), included: false },
        { text: t('starterF8'), included: false },
        { text: t('starterF9'), included: false },
      ],
      cta: t('starterCta'),
    },
    {
      id: 'transform',
      name: t('transformName'),
      tagline: t('transformTagline'),
      price: { monthly: 249, quarterly: 649 },
      duration: t('transformDuration'),
      color: '#AAFF00',
      popular: true,
      features: [
        { text: t('transformF1'), included: true },
        { text: t('transformF2'), included: true },
        { text: t('transformF3'), included: true },
        { text: t('transformF4'), included: true },
        { text: t('transformF5'), included: true },
        { text: t('transformF6'), included: true },
        { text: t('transformF7'), included: true },
        { text: t('transformF8'), included: false },
        { text: t('transformF9'), included: true },
      ],
      cta: t('transformCta'),
    },
    {
      id: 'elite',
      name: t('eliteName'),
      tagline: t('eliteTagline'),
      price: { monthly: 399, quarterly: 999 },
      duration: t('eliteDuration'),
      color: '#FF6B00',
      popular: false,
      features: [
        { text: t('eliteF1'), included: true },
        { text: t('eliteF2'), included: true },
        { text: t('eliteF3'), included: true },
        { text: t('eliteF4'), included: true },
        { text: t('eliteF5'), included: true },
        { text: t('eliteF6'), included: true },
        { text: t('eliteF7'), included: true },
        { text: t('eliteF8'), included: true },
        { text: t('eliteF9'), included: true },
      ],
      cta: t('eliteCta'),
    },
  ];

  return (
    <section className="relative z-10 py-20 lg:py-28">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">

        {/* Billing toggle */}
        <div className="flex justify-center mb-16">
          <div className="flex items-center gap-2 p-1.5 bg-[#0a0a0a]/50 border border-border-subtle rounded-full backdrop-blur-sm">
            {(['monthly', 'quarterly'] as const).map((b) => (
              <button key={b} onClick={() => setBilling(b)} className={`relative px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 ${billing === b ? 'border border-accent-green text-white' : 'text-text-muted hover:text-white border border-transparent'}`}>
                <span className="capitalize">{t(b)}</span>
                {b === 'quarterly' && <span className={`text-xs ${billing === b ? 'text-white' : 'text-text-muted'}`}>{t('saveText')}</span>}
              </button>
            ))}
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {packages.map((pkg) => {
            const isMiddle = pkg.popular;
            return (
              <div key={pkg.id} className="flex flex-col relative p-3 lg:p-4 rounded-3xl overflow-hidden transition-transform duration-300 hover:-translate-y-2 bg-bg-card border border-border-subtle text-white">
                <div className={`p-6 lg:p-8 rounded-[1.25rem] ${isMiddle ? 'bg-accent-green' : 'bg-transparent'}`}>
                  <h3 className={`font-display text-2xl lg:text-3xl font-medium mb-4 ${isMiddle ? 'text-bg-primary' : 'text-white'}`}>{pkg.name}</h3>
                  <div className="flex items-end gap-1 mb-2">
                    <span className={`font-display tracking-tight text-5xl lg:text-6xl font-bold ${isMiddle ? 'text-bg-primary' : 'text-white'}`}>
                      ${billing === 'monthly' ? pkg.price.monthly : pkg.price.quarterly}
                    </span>
                    <span className={`text-sm mb-2 font-medium ${isMiddle ? 'text-bg-primary/80' : 'text-text-muted'}`}>
                      /{billing === 'monthly' ? t('perMonth') : t('perQtr')}
                    </span>
                  </div>
                </div>

                <div className="px-6 lg:px-8 pb-4 flex-grow flex flex-col">
                  <ul className="space-y-4 my-8 flex-grow">
                    {pkg.features.map((feature) => (
                      <li key={feature.text} className="flex items-center gap-3">
                        <div className={`flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center ${feature.included ? 'bg-accent-green' : 'bg-white/10'}`}>
                          {feature.included ? (
                            <svg width="10" height="10" fill="none" stroke="#000" strokeWidth="3" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" /></svg>
                          ) : (
                            <svg width="10" height="10" fill="none" stroke="#555" strokeWidth="3" viewBox="0 0 24 24"><path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" /></svg>
                          )}
                        </div>
                        <span className={`text-sm tracking-wide ${feature.included ? 'text-white/80 font-medium' : 'text-text-muted/50 line-through'}`}>{feature.text}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href="/#contact" className="mt-auto flex items-center justify-center gap-2 w-full py-4 px-6 rounded-full font-bold text-sm uppercase tracking-widest bg-accent-green text-bg-primary hover:bg-[#bfff33] transition-all duration-300 hover:scale-105">
                    <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" /></svg>
                    {pkg.cta}
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Guarantee */}
          <div className="flex flex-col items-center gap-8">
            <div className="inline-flex items-center gap-3 px-8 py-4 bg-bg-card border border-border-subtle rounded-full">
              <span className="text-2xl">🛡️</span>
              <span className="text-sm text-text-muted">
                <strong className="text-white">{t('guaranteeBadge')}</strong> {t('guaranteeDesc')}
              </span>
            </div>
            
            <Link 
              href="/portfolio" 
              className="text-[11px] font-black uppercase tracking-[0.3em] text-white/40 hover:text-white transition-colors flex items-center gap-3 group/link"
            >
              See results from these programs
              <div className="w-1 h-1 rounded-full bg-accent-green group-hover/link:scale-[2.5] transition-transform" />
            </Link>
          </div>
      </div>
    </section>
  );
}