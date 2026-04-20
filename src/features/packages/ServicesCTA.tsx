'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Link } from '@/i18n/navigation';
import CTAButton from '@/components/ui/CTAButton';

export default function ServicesCTA() {
  return (
    <section
      className="relative z-10 overflow-hidden bg-[#080808] border-t border-white/[0.04]"
      style={{ paddingTop: 'clamp(5rem, 10vw, 8rem)', paddingBottom: 'clamp(5rem, 10vw, 8rem)' }}
      aria-label="Final coaching call-to-action"
    >
      {/* Glow blobs */}
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-20%] left-[20%] right-[20%] h-[60%] rounded-full bg-accent-green/[0.06] blur-[100px]" />
      </div>

      {/* Grid overlay */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none opacity-[0.02]"
        style={{
          backgroundImage:
            'repeating-linear-gradient(0deg,#fff 0,#fff 1px,transparent 1px,transparent 80px),' +
            'repeating-linear-gradient(90deg,#fff 0,#fff 1px,transparent 1px,transparent 80px)',
        }}
      />

      <div className="max-w-[1600px] mx-auto px-6 lg:px-10 relative z-10 text-center">
        {/* Urgency pill */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full border border-accent-green/25 bg-accent-green/[0.06] mb-10"
        >
          <span className="w-2 h-2 rounded-full bg-accent-green animate-pulse" />
          <span className="text-[11px] font-black uppercase tracking-[0.35em] text-accent-green">
            Limited Slots Available — Serious Clients Only
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="font-display font-black leading-[1.0] tracking-tight text-white mb-6"
          style={{ fontSize: 'clamp(2.8rem, 7vw, 6.5rem)' }}
        >
          Stop Guessing.
          <br />
          <span className="text-accent-green drop-shadow-[0_0_40px_rgba(170,255,0,0.25)]">
            Start Seeing Results.
          </span>
        </motion.h2>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-white/40 text-lg md:text-xl font-light leading-relaxed max-w-xl mx-auto mb-12"
        >
          Every week you wait is another week without a plan built for your body.
          Submit your application — Kyle reviews it within 24 hours.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row justify-center gap-4 mb-12"
        >
          <CTAButton href="/#contact" size="lg">
            Apply for Coaching
          </CTAButton>
          <a
            href="/#contact"
            className="inline-flex items-center justify-center px-10 py-5 rounded-full border border-white/15 bg-white/5 text-white font-bold text-sm uppercase tracking-[0.15em] hover:bg-white/10 hover:border-white/25 transition-all duration-300"
          >
            Book Free Consultation
          </a>
        </motion.div>

        {/* Trust indicators */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.45 }}
          className="flex flex-wrap justify-center gap-6 text-[11px] font-bold uppercase tracking-[0.25em] text-white/20"
        >
          {['90-Day Guarantee', 'No Long-Term Contracts', 'Cancel Anytime', '500+ Clients Transformed'].map((item) => (
            <span key={item} className="flex items-center gap-2">
              <svg className="w-3 h-3 text-accent-green" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" clipRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
              </svg>
              {item}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
