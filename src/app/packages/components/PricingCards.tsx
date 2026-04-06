'use client';

import React, { useState } from 'react';
import Link from 'next/link';

const packages = [
  {
    id: 'starter',
    name: 'Starter',
    tagline: 'Build the foundation',
    price: { monthly: 149, quarterly: 399 },
    duration: '8 weeks minimum',
    color: '#888888',
    popular: false,
    features: [
      { text: 'Custom 8-week training program', included: true },
      { text: 'Basic nutrition guidelines', included: true },
      { text: 'Weekly check-in (text)', included: true },
      { text: 'Exercise video library access', included: true },
      { text: 'Program adjustments (monthly)', included: true },
      { text: '1-on-1 video calls', included: false },
      { text: 'Meal plan customization', included: false },
      { text: 'Competition prep', included: false },
      { text: 'Priority response (24hr)', included: false },
    ],
    cta: 'Get Started',
  },
  {
    id: 'transform',
    name: 'Transform',
    tagline: 'The full system',
    price: { monthly: 249, quarterly: 649 },
    duration: '12 weeks minimum',
    color: '#AAFF00',
    popular: true,
    features: [
      { text: 'Custom 12-week training program', included: true },
      { text: 'Full macro + meal planning', included: true },
      { text: 'Weekly check-ins (video call)', included: true },
      { text: 'Exercise video library access', included: true },
      { text: 'Program adjustments (bi-weekly)', included: true },
      { text: '2x monthly 1-on-1 video calls', included: true },
      { text: 'Meal plan customization', included: true },
      { text: 'Competition prep', included: false },
      { text: 'Priority response (12hr)', included: true },
    ],
    cta: 'Start Transforming',
  },
  {
    id: 'elite',
    name: 'Elite',
    tagline: 'Maximum results',
    price: { monthly: 399, quarterly: 999 },
    duration: '16 weeks minimum',
    color: '#FF6B00',
    popular: false,
    features: [
      { text: 'Custom 16-week training program', included: true },
      { text: 'Full macro + meal planning', included: true },
      { text: 'Daily check-ins available', included: true },
      { text: 'Exercise video library access', included: true },
      { text: 'Program adjustments (weekly)', included: true },
      { text: 'Unlimited 1-on-1 video calls', included: true },
      { text: 'Full meal plan customization', included: true },
      { text: 'Competition prep included', included: true },
      { text: 'Priority response (4hr)', included: true },
    ],
    cta: 'Go Elite',
  },
];

export default function PricingCards() {
  const [billing, setBilling] = useState<'monthly' | 'quarterly'>('monthly');

  return (
    <section className="relative z-10 py-20 lg:py-28">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">

        {/* Billing toggle */}
        <div className="flex justify-center mb-14">
          <div className="flex items-center gap-1 p-1 bg-bg-card border border-border-subtle rounded-full">
            {(['monthly', 'quarterly'] as const).map((b) => (
              <button
                key={b}
                onClick={() => setBilling(b)}
                className={`px-6 py-2.5 rounded-full text-[11px] font-bold uppercase tracking-[0.15em] transition-all duration-300 ${billing === b
                    ? 'bg-accent-green text-bg-primary' : 'text-text-muted hover:text-white'
                  }`}
              >
                {b}
                {b === 'quarterly' && (
                  <span className={`ml-2 text-[9px] ${billing === b ? 'text-bg-primary/70' : 'text-accent-green'}`}>
                    Save 10%
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {packages.map((pkg, i) => (
            <div
              key={pkg.id}
              className={`pricing-card relative p-8 lg:p-10 ${pkg.popular ? 'featured' : ''}`}
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-6 py-2 bg-accent-green text-bg-primary text-[10px] font-black uppercase tracking-[0.2em] rounded-full">
                  Most Popular
                </div>
              )}

              {/* Package header */}
              <div className="mb-8">
                <div
                  className="text-[10px] font-bold uppercase tracking-[0.3em] mb-2"
                  style={{ color: pkg.color }}
                >
                  {pkg.tagline}
                </div>
                <h3 className="font-display font-black text-4xl text-white mb-1">{pkg.name}</h3>
                <p className="text-text-muted text-xs">{pkg.duration}</p>
              </div>

              {/* Price */}
              <div className="mb-8 pb-8 border-b border-border-subtle">
                <div className="flex items-end gap-2">
                  <span className="font-display font-black text-5xl text-white">
                    ${billing === 'monthly' ? pkg.price.monthly : pkg.price.quarterly}
                  </span>
                  <span className="text-text-muted text-sm mb-2">
                    /{billing === 'monthly' ? 'mo' : 'qtr'}
                  </span>
                </div>
                {billing === 'quarterly' && (
                  <p className="text-accent-green text-xs font-bold mt-1">
                    Save ${(pkg.price.monthly * 3 - pkg.price.quarterly)} vs monthly
                  </p>
                )}
              </div>

              {/* Features */}
              <ul className="space-y-4 mb-10">
                {pkg.features.map((feature) => (
                  <li key={feature.text} className="flex items-start gap-3">
                    <div
                      className={`mt-0.5 flex-shrink-0 w-4 h-4 rounded-full flex items-center justify-center ${feature.included ? 'bg-accent-green/20' : 'bg-bg-card-hover'
                        }`}
                    >
                      {feature.included ? (
                        <svg width="8" height="8" fill="none" stroke="#AAFF00" strokeWidth="3" viewBox="0 0 24 24">
                          <path d="M5 13l4 4L19 7" />
                        </svg>
                      ) : (
                        <svg width="8" height="8" fill="none" stroke="#555555" strokeWidth="3" viewBox="0 0 24 24">
                          <path d="M18 6L6 18M6 6l12 12" />
                        </svg>
                      )}
                    </div>
                    <span className={`text-sm ${feature.included ? 'text-white' : 'text-text-subtle line-through'}`}>
                      {feature.text}
                    </span>
                  </li>
                ))}
              </ul>

              <Link
                href="/homepage#contact"
                className={`block w-full text-center py-4 font-bold text-sm uppercase tracking-[0.15em] rounded-xl transition-all duration-300 hover:scale-[1.02] ${pkg.popular
                    ? 'bg-accent-green text-bg-primary hover:bg-white' : 'border border-border-subtle text-white hover:border-accent-green hover:text-accent-green'
                  }`}
              >
                {pkg.cta}
              </Link>
            </div>
          ))}
        </div>

        {/* Money back guarantee */}
        <div className="mt-14 text-center">
          <div className="inline-flex items-center gap-3 px-8 py-4 bg-bg-card border border-border-subtle rounded-full">
            <span className="text-2xl">🛡️</span>
            <span className="text-sm text-text-muted">
              <strong className="text-white">90-Day Results Guarantee</strong> — if you follow the plan and don&apos;t see results, Kyle will refund you.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}