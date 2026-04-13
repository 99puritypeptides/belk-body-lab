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
      <div className="max-w-[1200px] mx-auto px-6 lg:px-10">

        {/* Billing toggle */}
        <div className="flex justify-center mb-16">
          <div className="flex items-center gap-2 p-1.5 bg-[#0a0a0a]/50 border border-border-subtle rounded-full backdrop-blur-sm">
            {(['monthly', 'quarterly'] as const).map((b) => (
              <button
                key={b}
                onClick={() => setBilling(b)}
                className={`relative px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 ${
                  billing === b
                    ? 'border border-accent-green text-white'
                    : 'text-text-muted hover:text-white border border-transparent'
                }`}
              >
                <span className="capitalize">{b}</span>
                {b === 'quarterly' && (
                  <span className={`text-xs ${billing === b ? 'text-white' : 'text-text-muted'}`}>
                    (save 10%)
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {packages.map((pkg, i) => {
            const isMiddle = pkg.popular;
            return (
              <div
                key={pkg.id}
                className="flex flex-col relative p-3 lg:p-4 rounded-3xl overflow-hidden transition-transform duration-300 hover:-translate-y-2 bg-bg-card border border-border-subtle text-white"
              >
                {/* Package header */}
                <div className={`p-6 lg:p-8 rounded-[1.25rem] ${isMiddle ? 'bg-accent-green' : 'bg-transparent'}`}>
                  <h3 className={`font-display text-2xl lg:text-3xl font-medium mb-4 ${isMiddle ? 'text-bg-primary' : 'text-white'}`}>
                    {pkg.name}
                  </h3>
                  <div className="flex items-end gap-1 mb-2">
                    <span className={`font-display tracking-tight text-5xl lg:text-6xl font-bold ${isMiddle ? 'text-bg-primary' : 'text-white'}`}>
                      ${billing === 'monthly' ? pkg.price.monthly : pkg.price.quarterly}
                    </span>
                    <span className={`text-sm mb-2 font-medium ${isMiddle ? 'text-bg-primary/80' : 'text-text-muted'}`}>
                      /{billing === 'monthly' ? 'Month' : 'Qtr'}
                    </span>
                  </div>
                </div>

                {/* Features */}
                <div className="px-6 lg:px-8 pb-4 flex-grow flex flex-col">
                  <ul className="space-y-4 my-8 flex-grow">
                    {pkg.features.map((feature) => (
                      <li key={feature.text} className="flex items-center gap-3">
                        <div
                          className={`flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center ${
                            feature.included ? 'bg-accent-green' : 'bg-white/10'
                          }`}
                        >
                          {feature.included ? (
                            <svg width="10" height="10" fill="none" stroke="#000" strokeWidth="3" viewBox="0 0 24 24">
                              <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                          ) : (
                            <svg width="10" height="10" fill="none" stroke="#555" strokeWidth="3" viewBox="0 0 24 24">
                              <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                          )}
                        </div>
                        <span className={`text-sm tracking-wide ${
                          feature.included ? 'text-white/80 font-medium' : 'text-text-muted/50 line-through'
                        }`}>
                          {feature.text}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    href="/#contact"
                    className="mt-auto flex items-center justify-center gap-2 w-full py-4 px-6 rounded-full font-bold text-sm uppercase tracking-widest bg-accent-green text-bg-primary hover:bg-[#bfff33] transition-all duration-300 hover:scale-105"
                  >
                    <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    {pkg.cta}
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Money back guarantee */}
        <div className="mt-16 text-center">
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