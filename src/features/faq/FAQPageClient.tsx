'use client';

import React, { useState } from 'react';
import { GENERAL_FAQS, FAQ_CATEGORIES } from '@/data/faqs/general';

export default function FAQPageClient() {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const categories = ['All', ...FAQ_CATEGORIES];

  const filtered =
    activeCategory === 'All'
      ? GENERAL_FAQS
      : GENERAL_FAQS.filter((f) => f.category === activeCategory);

  return (
    <main className="relative bg-bg-primary min-h-screen pt-28 pb-20">
      <div className="noise-overlay" aria-hidden="true" />

      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 text-center mb-14">
        <p className="text-accent-green text-[10px] font-black uppercase tracking-[0.3em] mb-4">
          Belk Body Lab — Fitness Q&amp;A
        </p>
        <h1 className="speakable-intro font-jumpshot text-white text-4xl md:text-6xl uppercase leading-tight mb-6">
          Personal Training{' '}
          <span className="text-accent-green">FAQ</span>
        </h1>
        <p className="text-white/60 text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
          Answers to the most common questions about personal training in South Carolina, online
          coaching, fat loss, pricing, and working with Kyle Belk at Belk Body Lab.
        </p>
      </section>

      {/* Category Filter */}
      <section className="max-w-5xl mx-auto px-6 mb-10">
        <div className="flex flex-wrap gap-2 justify-center">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => { setActiveCategory(cat); setOpenIndex(null); }}
              className={`px-4 py-2 rounded-full text-[11px] font-black uppercase tracking-widest border transition-all ${
                activeCategory === cat
                  ? 'bg-accent-green text-black border-accent-green'
                  : 'bg-transparent text-white/60 border-white/20 hover:border-accent-green/50 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="max-w-3xl mx-auto px-6">
        {activeCategory === 'All' && (
          <p className="text-white/30 text-[10px] uppercase tracking-widest text-center mb-6">
            {GENERAL_FAQS.length} questions answered
          </p>
        )}

        <div className="space-y-3">
          {filtered.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                className={`rounded-2xl border transition-all ${
                  isOpen
                    ? 'border-accent-green/40 bg-white/[0.04]'
                    : 'border-white/10 bg-white/[0.02]'
                }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full text-left px-6 py-5 flex items-start justify-between gap-4"
                  aria-expanded={isOpen}
                >
                  <span className="text-white text-sm md:text-base font-bold leading-snug">
                    {item.q}
                  </span>
                  <span
                    className={`mt-0.5 shrink-0 w-5 h-5 rounded-full border flex items-center justify-center text-[11px] transition-all ${
                      isOpen
                        ? 'border-accent-green text-accent-green rotate-45'
                        : 'border-white/30 text-white/40'
                    }`}
                  >
                    +
                  </span>
                </button>

                {isOpen && (
                  <div className="px-6 pb-5">
                    <p className="text-white/70 text-sm leading-relaxed">{item.a}</p>
                    <span className="inline-block mt-3 text-[9px] uppercase tracking-widest text-accent-green/60 font-bold border border-accent-green/20 rounded-full px-3 py-1">
                      {item.category}
                    </span>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-xl mx-auto px-6 text-center mt-16">
        <p className="text-white/50 text-sm mb-4">
          Still have questions? Apply for a free 20-minute consultation with Kyle.
        </p>
        <a
          href="/contact"
          className="inline-block bg-accent-green text-black text-[11px] font-black uppercase tracking-[0.2em] px-8 py-4 rounded-full hover:brightness-110 transition-all"
        >
          Apply for Free Consultation
        </a>
      </section>
    </main>
  );
}
