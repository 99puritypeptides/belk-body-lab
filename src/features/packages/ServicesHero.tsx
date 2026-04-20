'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Link } from '@/i18n/navigation';
import AnimatedNumber from '@/components/effects/AnimatedNumber';
import CTAButton from '@/components/ui/CTAButton';

const STATS = [
  { end: 500, suffix: '+', label: 'Clients Transformed' },
  { end: 98,  suffix: '%', label: 'Client Satisfaction' },
  { end: 90,  suffix: '',  label: 'Day Guarantee' },
];

export default function ServicesHero() {
  return (
    <section
      className="relative pt-36 pb-24 overflow-hidden animated-gradient"
      aria-label="Coaching services hero"
    >
      {/* Subtle static blobs — no JS cost */}
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[10%] right-[10%] h-[50%] rounded-full bg-accent-green/[0.05] blur-[80px]" />
      </div>

      <div className="max-w-[1600px] mx-auto px-6 lg:px-10 text-center relative z-10">
        {/* Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center items-center gap-4 mb-8"
        >
          <div className="w-px h-5 bg-accent-green" />
          <span className="text-[11px] font-black uppercase tracking-[0.4em] text-text-muted">
            Online Fitness Coaching
          </span>
          <div className="w-px h-5 bg-accent-green" />
        </motion.div>

        {/* H1 */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-display font-black leading-[1.0] tracking-tight text-white mb-6"
          style={{ fontSize: 'clamp(2.8rem, 7.5vw, 7rem)' }}
        >
          Coaching That Actually{' '}
          <br className="hidden sm:block" />
          <span className="text-accent-green drop-shadow-[0_0_30px_rgba(170,255,0,0.3)]">
            Gets You Results.
          </span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-white/60 text-lg md:text-xl font-light leading-relaxed max-w-2xl mx-auto mb-10"
        >
          Custom fat-loss and muscle-building programs built for your body, your schedule,
          and your life — not copy-pasted from a template.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row justify-center gap-4 mb-20"
        >
          <CTAButton href="/#contact">
            Apply for Coaching
          </CTAButton>
          <a
            href="#process"
            className="inline-flex items-center justify-center px-8 py-4 rounded-full border border-white/15 bg-white/5 text-white font-bold text-sm uppercase tracking-[0.15em] hover:bg-white/10 hover:border-white/25 transition-all duration-300"
          >
            See How It Works
          </a>
        </motion.div>

        {/* Trust badge */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.45 }}
          className="text-[11px] font-bold uppercase tracking-[0.3em] text-white/20 mb-16"
        >
          500+ Clients Transformed · Serious Clients Only · Limited Slots
        </motion.p>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="flex flex-col md:flex-row justify-center gap-6"
        >
          {STATS.map((stat, i) => (
            <div
              key={stat.label}
              className="flex-1 max-w-[260px] mx-auto md:mx-0 bg-white/[0.03] backdrop-blur-sm border border-white/[0.07] rounded-[2rem] px-8 py-10 flex flex-col items-center gap-2 hover:border-white/15 transition-colors duration-300"
            >
              <div className="font-display font-black text-5xl text-white leading-none tracking-tight flex items-center gap-1">
                <AnimatedNumber start={0} end={stat.end} />{stat.suffix}
              </div>
              <div className="text-[11px] font-black uppercase tracking-[0.3em] text-accent-green">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
