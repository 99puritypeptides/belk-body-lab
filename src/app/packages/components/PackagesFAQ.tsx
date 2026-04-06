'use client';

import React, { useState } from 'react';
import Link from 'next/link';

const faqs = [
  {
    q: 'Do I need gym access to work with Kyle?',
    a: 'No — Kyle builds programs for home, gym, or hybrid setups. During the consultation call, he\'ll ask about your equipment and build your plan accordingly.',
  },
  {
    q: 'How fast will I see results?',
    a: 'Most clients notice visible changes within 3-4 weeks. Significant transformations typically occur at the 8-12 week mark. Results depend on your consistency and adherence to the plan.',
  },
  {
    q: 'What if I travel or have an irregular schedule?',
    a: 'Kyle specializes in building flexible programs for busy people. Your plan will account for travel, work schedules, and life\'s unpredictability with workout alternatives.',
  },
  {
    q: 'Is online coaching as effective as in-person?',
    a: 'For most goals, yes — and often more convenient. Kyle\'s online clients average the same results as in-person clients because the programming, accountability, and communication are identical.',
  },
  {
    q: 'Can I switch packages after I start?',
    a: 'Absolutely. Many clients start with Starter and upgrade to Transform once they see results. Kyle will always recommend the right package for your current phase.',
  },
  {
    q: 'What does the 90-day guarantee actually mean?',
    a: 'If you complete all check-ins, follow your nutrition plan, and train as prescribed for 90 days without seeing measurable progress, Kyle will refund your investment — no questions asked.',
  },
];

export default function PackagesFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="relative z-10 py-20 lg:py-28">
      <div className="max-w-[900px] mx-auto px-6 lg:px-10">

        <div className="text-center mb-14">
          <div className="flex justify-center items-center gap-4 mb-6">
            <div className="w-0.5 h-5 bg-accent-green" />
            <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-text-muted">FAQ</span>
            <div className="w-0.5 h-5 bg-accent-green" />
          </div>
          <h2 className="font-display font-black leading-tight tracking-tight text-white" style={{ fontSize: 'clamp(1.8rem, 4vw, 4rem)' }}>
            Common <span className="italic gradient-text">Questions.</span>
          </h2>
        </div>

        <div className="space-y-3">
          {faqs?.map((faq, i) => (
            <div
              key={i}
              className={`bg-bg-card border rounded-2xl overflow-hidden transition-all duration-300 ${openIndex === i ? 'border-accent-green/30' : 'border-border-subtle hover:border-border-accent'
                }`}
            >
              <button
                className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              >
                <span className="text-white font-semibold text-sm leading-relaxed">{faq?.q}</span>
                <div
                  className={`flex-shrink-0 w-8 h-8 rounded-full border flex items-center justify-center transition-all duration-300 ${openIndex === i
                      ? 'bg-accent-green border-accent-green rotate-45' : 'border-border-subtle text-text-muted'
                    }`}
                >
                  <svg width="14" height="14" fill="none" stroke={openIndex === i ? '#0A0A0A' : 'currentColor'} strokeWidth="2.5" viewBox="0 0 24 24">
                    <path d="M12 5v14M5 12h14" />
                  </svg>
                </div>
              </button>

              <div className={`faq-answer ${openIndex === i ? 'open' : ''}`}>
                <div className="px-6 pb-6">
                  <p className="text-text-muted text-sm leading-relaxed">{faq?.a}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-text-muted text-sm mb-4">Still have questions? Kyle answers personally.</p>
          <Link
            href="/homepage#contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-accent-green text-bg-primary font-bold text-sm uppercase tracking-[0.15em] rounded-full hover:bg-white transition-all duration-300 hover:scale-105"
          >
            Ask Kyle Directly
          </Link>
        </div>
      </div>
    </section>
  );
}