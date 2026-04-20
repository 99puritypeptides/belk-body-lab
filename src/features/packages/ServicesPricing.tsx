'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Link } from '@/i18n/navigation';

const PACKAGES = [
  {
    id: 'starter',
    name: 'Starter',
    tagline: 'Build the foundation',
    price: { monthly: 149, quarterly: 399 },
    accent: '#888888',
    popular: false,
    features: [
      { text: 'Custom 8-week training program', on: true },
      { text: 'Basic nutrition guidelines', on: true },
      { text: 'Weekly text check-in', on: true },
      { text: 'Exercise video library', on: true },
      { text: 'Monthly program adjustments', on: true },
      { text: '1-on-1 video calls', on: false },
      { text: 'Full meal plan', on: false },
      { text: 'Competition prep', on: false },
      { text: 'Priority response (12hr)', on: false },
    ],
  },
  {
    id: 'transform',
    name: 'Transform',
    tagline: 'The full system',
    price: { monthly: 249, quarterly: 649 },
    accent: '#AAFF00',
    popular: true,
    features: [
      { text: 'Custom 12-week training program', on: true },
      { text: 'Full macro + meal planning', on: true },
      { text: 'Weekly video check-ins', on: true },
      { text: 'Exercise video library', on: true },
      { text: 'Bi-weekly plan adjustments', on: true },
      { text: '2× monthly 1-on-1 calls', on: true },
      { text: 'Full meal plan customization', on: true },
      { text: 'Competition prep', on: false },
      { text: 'Priority response (12hr)', on: true },
    ],
  },
  {
    id: 'elite',
    name: 'Elite',
    tagline: 'Maximum results',
    price: { monthly: 399, quarterly: 999 },
    accent: '#FF6B00',
    popular: false,
    features: [
      { text: 'Custom 16-week training program', on: true },
      { text: 'Full macro + meal planning', on: true },
      { text: 'Daily check-ins available', on: true },
      { text: 'Exercise video library', on: true },
      { text: 'Weekly plan adjustments', on: true },
      { text: 'Unlimited 1-on-1 video calls', on: true },
      { text: 'Full meal plan customization', on: true },
      { text: 'Competition prep included', on: true },
      { text: 'Priority response (4hr)', on: true },
    ],
  },
];

type BillingType = 'monthly' | 'quarterly';

export default function ServicesPricing() {
  const [billing, setBilling] = React.useState<BillingType>('monthly');

  return (
    <section
      id="pricing"
      className="relative z-10 py-24 lg:py-32 bg-[#070707] border-t border-white/[0.04]"
      aria-label="Coaching packages pricing"
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          className="mb-14 text-center"
        >
          <div className="flex justify-center items-center gap-4 mb-5">
            <div className="w-10 h-px bg-white/10" />
            <span className="text-[11px] font-black uppercase tracking-[0.35em] text-white/40">
              Pricing
            </span>
            <div className="w-10 h-px bg-white/10" />
          </div>
          <h2
            className="font-display font-black leading-tight tracking-tight text-white mb-4"
            style={{ fontSize: 'clamp(2.4rem, 5vw, 4rem)' }}
          >
            Investment in{' '}
            <em className="not-italic gradient-text">Your Results</em>
          </h2>
          <p className="text-white/40 font-light max-w-md mx-auto leading-relaxed">
            Every tier includes a personalized protocol — not a template with your name on it.
          </p>
        </motion.div>

        {/* Billing toggle */}
        <div className="flex justify-center mb-12">
          <div className="flex h-10 p-1 bg-white/5 rounded-full border border-white/[0.07] text-[11px] font-black uppercase tracking-[0.18em] overflow-hidden">
            {(['monthly', 'quarterly'] as const).map((b) => (
              <button
                key={b}
                onClick={() => setBilling(b)}
                className={`px-6 rounded-full transition-all duration-250 flex items-center gap-2 ${
                  billing === b ? 'bg-white text-black' : 'text-white/30 hover:text-white/60'
                }`}
              >
                {b}
                {b === 'quarterly' && (
                  <span className={`text-[9px] px-1.5 py-0.5 rounded-full ${billing === b ? 'bg-black/20 text-black' : 'bg-white/10 text-white/40'}`}>
                    Save 10%
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-7">
          {PACKAGES.map((pkg, i) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className={`relative flex flex-col rounded-[2rem] overflow-hidden border transition-all duration-500 hover:-translate-y-1 ${
                pkg.popular
                  ? 'border-accent-green/40 bg-[#0d0d0d] shadow-[0_0_80px_rgba(170,255,0,0.05)]'
                  : 'border-white/[0.06] bg-white/[0.02] hover:border-white/15'
              }`}
            >
              {/* Popular badge */}
              {pkg.popular && (
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent-green/70 to-transparent" />
              )}

              {/* Price header */}
              <div className={`p-8 lg:p-10 ${pkg.popular ? 'border-b border-white/5' : ''}`}>
                <div className="flex items-start justify-between gap-4 mb-6">
                  <div>
                    {pkg.popular && (
                      <span className="text-[9px] font-black uppercase tracking-[0.3em] bg-black/20 text-black px-3 py-1 rounded-full mb-2 inline-block">
                        Most Popular
                      </span>
                    )}
                    <h3
                      className={`font-display font-black leading-tight ${pkg.popular ? 'text-accent-green' : 'text-white'}`}
                      style={{ fontSize: 'clamp(1.6rem, 3vw, 2.2rem)' }}
                    >
                      {pkg.name}
                    </h3>
                    <p className={`text-sm font-medium mt-1 ${pkg.popular ? 'text-white/70' : 'text-white/30'}`}>
                      {pkg.tagline}
                    </p>
                  </div>
                </div>

                <div className="flex items-baseline gap-1">
                  <span className={`font-display font-black text-5xl lg:text-6xl leading-none ${pkg.popular ? 'text-white' : 'text-white'}`}>
                    ${billing === 'monthly' ? pkg.price.monthly : pkg.price.quarterly}
                  </span>
                  <span className={`text-sm font-medium ml-1 ${pkg.popular ? 'text-white/30' : 'text-white/30'}`}>
                    / {billing === 'monthly' ? 'month' : 'qtr'}
                  </span>
                </div>
              </div>

              {/* Features */}
              <div className="flex flex-col flex-1 p-8 lg:p-10 pt-0">
                <ul className="flex flex-col gap-3 my-7 flex-1">
                  {pkg.features.map((f) => (
                    <li key={f.text} className="flex items-center gap-3">
                      <div className={`w-[18px] h-[18px] rounded-full flex items-center justify-center shrink-0 ${f.on ? 'bg-white/10' : 'bg-white/[0.04]'}`}>
                        {f.on ? (
                          <svg className="w-2 h-2 text-accent-green" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={4}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                        ) : (
                          <svg className="w-2 h-2 text-white/20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        )}
                      </div>
                      <span className={`text-sm ${f.on ? 'text-white/75 font-medium' : 'text-white/20 line-through'}`}>
                        {f.text}
                      </span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/#contact"
                  className={`flex items-center justify-between w-full px-6 py-4 rounded-xl font-black text-xs uppercase tracking-[0.2em] transition-all duration-300 group/btn ${
                    pkg.popular
                      ? 'bg-black border border-accent-green/30 text-white hover:border-accent-green shadow-[0_4px_24px_rgba(170,255,0,0.1)]'
                      : 'border border-white/10 bg-white/[0.04] text-white/50 hover:bg-white hover:border-white hover:text-black'
                  }`}
                >
                  Apply — {pkg.name}
                  <svg className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Guarantee + portfolio link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col items-center gap-6 mt-12"
        >
          <div className="inline-flex items-center gap-3 px-8 py-4 bg-white/[0.03] border border-white/[0.06] rounded-full">
            <span className="text-xl">🛡️</span>
            <span className="text-sm text-white/50">
              <strong className="text-white font-bold">90-Day Results Guarantee</strong>
              {' '}— follow the plan, see results, or Kyle refunds you.
            </span>
          </div>
          <Link
            href="/portfolio"
            className="text-[11px] font-black uppercase tracking-[0.3em] text-white/25 hover:text-white/70 transition-colors flex items-center gap-3 group"
          >
            See results from these programs
            <div className="w-1 h-1 rounded-full bg-accent-green group-hover:scale-[2.5] transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
