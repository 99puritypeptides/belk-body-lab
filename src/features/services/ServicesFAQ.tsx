'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from '@/i18n/navigation';
import CTAButton from '@/components/ui/CTAButton';
import PremiumIcon from '@/components/ui/PremiumIcon';

const FAQS = [
  // ── Preserved from PackagesFAQ ──
  {
    q: 'Do I need gym access to work with Kyle?',
    a: 'No — Kyle builds programs for home, gym, or hybrid setups. During the consultation call, he\'ll ask about your equipment and design your plan around what you actually have access to.',
  },
  {
    q: 'How fast will I see results?',
    a: 'Most clients notice visible changes within 3–4 weeks. Significant transformations typically occur at the 8–12 week mark. Results depend on your consistency and adherence to the plan — which is why Kyle emphasizes accountability over promises.',
  },
  {
    q: 'What if I travel or have an irregular schedule?',
    a: 'Kyle specializes in flexible programs for busy people. Your plan will account for travel, work schedules, and life\'s unpredictability — including alternative workouts for hotels, small spaces, or limited equipment.',
  },
  {
    q: 'Is online coaching as effective as in-person?',
    a: 'For most goals, yes — and often more convenient. Kyle\'s online clients average the same transformation results as in-person clients because the programming, accountability, and communication are identical.',
  },
  {
    q: 'Can I switch packages after I start?',
    a: 'Absolutely. Many clients start with Starter and upgrade to Transform once they see momentum building. Kyle will always recommend the right tier for your current phase and budget.',
  },
  {
    q: 'What does the 90-day guarantee actually mean?',
    a: 'If you complete all check-ins, follow your nutrition plan, and train as prescribed for 90 days without seeing measurable progress, Kyle will refund your investment — no questions asked. This guarantee exists because the system works when you do.',
  },
  // ── Additional FAQs ──
  {
    q: 'What makes Belk Body Lab different from a regular gym trainer?',
    a: 'Most gym personal trainers run the same generic circuit for every client. Kyle builds every program from scratch based on your physiology, goals, schedule, and training history. He also provides ongoing nutrition coaching, accountability check-ins, and real-time plan adjustments — not just 1-hour sessions with no follow-through.',
  },
  {
    q: 'I\'ve tried other coaches and diets before. Why would this be different?',
    a: 'The problem usually isn\'t your discipline — it\'s the plan. Cookie-cutter programs don\'t account for your metabolism, lifestyle, or plateau triggers. Kyle\'s individualized approach identifies exactly why previous attempts failed and corrects for them before you start.',
  },
  {
    q: 'How much time do I need to commit each week?',
    a: 'Most programs are designed around 3–5 training sessions per week, averaging 45–60 minutes each. Kyle builds the schedule around your availability — not the other way around. If you have 3 days, he\'ll engineer a 3-day protocol that produces the same outcomes.',
  },
  {
    q: 'Does Kyle also cover supplements?',
    a: 'Yes — supplement guidance is included across all tiers. Kyle provides evidence-based recommendations (not paid promotions) based on your budget and goals. He won\'t suggest anything you don\'t actually need.',
  },
  {
    q: 'What happens if I plateau during the program?',
    a: 'Plateaus are an expected variable — Kyle accounts for them in advance. When they happen, he adjusts your training volume, nutrition targets, or cardio prescription based on real data from your check-ins. Plateaus don\'t last long in a data-driven program.',
  },
  {
    q: 'Is nutrition coaching available as a standalone service?',
    a: 'Yes. If you already have a solid training routine but your nutrition is holding you back, Kyle offers a standalone nutrition coaching service. It includes a full metabolic assessment, custom macro targets, and monthly recalibration.',
  },
];

export default function ServicesFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      id="faq"
      className="relative z-10 py-24 lg:py-32 bg-[#070707]"
      aria-label="Frequently asked questions about coaching"
    >
      <div className="max-w-[1500px] mx-auto px-6 lg:px-10">
        <div className="relative w-full bg-[#0d0d0d] rounded-[2.5rem] lg:rounded-[3rem] px-6 py-12 md:p-12 lg:p-16 flex flex-col lg:flex-row gap-12 lg:gap-16 border border-white/[0.03] shadow-2xl overflow-hidden">

          {/* Ghost FAQ text */}
          <div aria-hidden="true" className="absolute bottom-0 left-0 lg:left-8 select-none z-0 pointer-events-none translate-y-[20%] xl:translate-y-[15%]">
            <span className="font-display font-black text-[10rem] sm:text-[14rem] md:text-[18rem] lg:text-[22rem] leading-none tracking-tighter bg-gradient-to-b from-white/5 via-white/[0.02] to-transparent bg-clip-text text-transparent">
              FAQ
            </span>
          </div>

          {/* Left column */}
          <div className="lg:w-[38%] xl:w-[40%] flex flex-col justify-start relative z-10 shrink-0">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65 }}
            >
              <div className="flex items-center gap-4 mb-5">
                <div className="w-8 h-px bg-accent-green" />
                <span className="text-[11px] font-black uppercase tracking-[0.35em] text-accent-green">FAQ</span>
              </div>
              <h2
                className="font-display font-black leading-tight tracking-tight text-white mb-5"
                style={{ fontSize: 'clamp(2.2rem, 4vw, 3.5rem)' }}
              >
                Questions &{' '}
                <em className="not-italic text-accent-green">Answers</em>
              </h2>
              <p className="text-white/40 text-base font-light leading-relaxed mb-10 max-w-sm">
                If your question isn&apos;t answered here, reach out directly — Kyle responds personally.
              </p>

              <div className="flex flex-col gap-5">
                <a
                  href="tel:+11234561234"
                  className="flex items-center gap-4 group"
                  aria-label="Call Kyle"
                >
                  <div className="w-11 h-11 rounded-full bg-white/5 border border-white/[0.06] flex items-center justify-center text-white/40 transition-all group-hover:border-accent-green group-hover:text-accent-green">
                    <svg width="18" height="18" fill="currentColor" viewBox="0 0 256 256">
                      <path d="M222.37,158.46l-47.11-21.11-.13-.06a16,16,0,0,0-15.17,1.4,8.12,8.12,0,0,0-.75.56L134.87,160c-15.42-7.49-31.34-23.41-38.83-38.83l20.78-24.34a8.12,8.12,0,0,0,.56-.75,16,16,0,0,0,1.34-15.23l-21.17-47.24A16,16,0,0,0,83,24h-43A16,16,0,0,0,24,40C24,141.51,114.49,232,216,232a16,16,0,0,0,16-16V173A16,16,0,0,0,222.37,158.46ZM216,216C123.32,216,40,132.68,40,40H83l21.11,47.12-23.2,27.18a8,8,0,0,0-.78,8.87c9.55,19.26,27.35,37.06,46.61,46.61a8,8,0,0,0,8.87-.78l27.18-23.2L210.88,167Z" />
                    </svg>
                  </div>
                  <span className="text-white/60 text-sm font-medium transition-colors group-hover:text-white">
                    +1 123 456 1234
                  </span>
                </a>

                <a
                  href="mailto:support@belkbodylab.com"
                  className="flex items-center gap-4 group"
                  aria-label="Email Kyle"
                >
                  <div className="w-11 h-11 rounded-full bg-white/5 border border-white/[0.06] flex items-center justify-center text-white/40 transition-all group-hover:border-accent-green group-hover:text-accent-green">
                    <svg width="18" height="18" fill="currentColor" viewBox="0 0 256 256">
                      <path d="M224,48H32A16,16,0,0,0,16,64V192a16,16,0,0,0,16,16H224a16,16,0,0,0,16-16V64A16,16,0,0,0,224,48ZM203.43,64,128,133.15,52.57,64ZM224,192H32V74.83l90.59,83.1A16,16,0,0,0,133.41,158L224,74.83Z" />
                    </svg>
                  </div>
                  <span className="text-white/60 text-sm font-medium transition-colors group-hover:text-white">
                    support@belkbodylab.com
                  </span>
                </a>

                <CTAButton href="/#contact" className="mt-4">
                  Apply for Coaching
                </CTAButton>
              </div>
            </motion.div>
          </div>

          {/* Right column: accordion — pure CSS max-height, no layout thrashing */}
          <div className="flex-1 flex flex-col gap-3 z-10">
            {FAQS.map((faq, i) => (
              <div
                key={i}
                className="bg-[#161616] rounded-2xl border border-white/[0.04] overflow-hidden"
                itemScope
                itemType="https://schema.org/Question"
              >
                <motion.button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  whileHover="hover"
                  className="w-full flex items-start justify-between px-6 py-5 text-left gap-4 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-green/50"
                  aria-expanded={openIndex === i}
                >
                  <div className="flex items-start gap-4">
                    <span className="font-display text-base text-white/20 font-medium pt-0.5 shrink-0">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span
                      className={`font-semibold text-sm lg:text-[15px] leading-relaxed transition-colors duration-300 ${openIndex === i ? 'text-white' : 'text-white/65'}`}
                      itemProp="name"
                    >
                      {faq.q}
                    </span>
                  </div>
                  <div className={`mt-0.5 shrink-0 transition-all duration-300 ${openIndex === i ? 'rotate-180 text-accent-green' : 'text-white/25'}`}>
                    <PremiumIcon name="arrow" size={18} />
                  </div>
                </motion.button>

                {/* CSS-only accordion — uses existing .faq-answer / .open classes from tailwind.css */}
                <div
                  className={`faq-answer ${openIndex === i ? 'open' : ''}`}
                  itemScope
                  itemType="https://schema.org/Answer"
                >
                  <div className="px-6 pb-5 flex gap-4" itemProp="text">
                    <span className="text-transparent font-display text-base select-none shrink-0" aria-hidden="true">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <p className="text-white/40 text-sm leading-relaxed pr-6">
                      {faq.a}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
