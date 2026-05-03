'use client';

import React, { useState } from 'react';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import CTAButton from '@/components/ui/CTAButton';

export default function ContactFAQ() {
  const t = useTranslations('contactPage.faq');
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    { q: t('q1'), a: t('a1') },
    { q: t('q2'), a: t('a2') },
    { q: t('q3'), a: t('a3') },
  ];

  return (
    <section className="py-24 lg:py-40 bg-[#080808]">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
        <div className="relative w-full bg-[#0a0a0a] rounded-[2.5rem] lg:rounded-[3rem] px-6 py-12 md:p-12 lg:p-16 flex flex-col lg:flex-row gap-12 lg:gap-24 border border-white/[0.03] shadow-2xl overflow-hidden">
          
          {/* Ghost FAQ text */}
          <div aria-hidden="true" className="absolute bottom-0 left-0 lg:left-8 select-none z-0 pointer-events-none translate-y-[20%]">
            <span className="font-display font-black text-[10rem] sm:text-[14rem] md:text-[18rem] lg:text-[22rem] leading-none tracking-tighter bg-gradient-to-b from-white/5 via-white/[0.02] to-transparent bg-clip-text text-transparent">
              FAQ
            </span>
          </div>

          {/* Left column */}
          <div className="lg:w-[38%] flex flex-col justify-start relative z-10 shrink-0">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="w-12 h-1 bg-accent-green mb-8" />
              <h2 className="text-white text-4xl md:text-6xl font-black uppercase tracking-tight leading-[0.9] mb-8">
                {t('title')} <br />
                <span className="text-accent-green">{t('titleHighlight')}</span>
              </h2>
              <p className="text-white/40 text-lg font-medium leading-relaxed mb-10 max-w-sm">
                Answers to common questions about starting your journey at Belk Body Lab.
              </p>

              <div className="flex flex-col gap-5">
                <a href="mailto:support@belkbodylab.com" className="flex items-center gap-4 group">
                  <div className="w-11 h-11 rounded-full bg-white/5 border border-white/[0.06] flex items-center justify-center text-white/40 transition-all group-hover:border-accent-green group-hover:text-accent-green">
                    <svg width="18" height="18" fill="currentColor" viewBox="0 0 256 256">
                      <path d="M224,48H32A16,16,0,0,0,16,64V192a16,16,0,0,0,16,16H224a16,16,0,0,0,16-16V64A16,16,0,0,0,224,48ZM203.43,64,128,133.15,52.57,64ZM224,192H32V74.83l90.59,83.1A16,16,0,0,0,133.41,158L224,74.83Z" />
                    </svg>
                  </div>
                  <span className="text-white/60 text-sm font-bold tracking-widest uppercase group-hover:text-white transition-colors">
                    support@belkbodylab.com
                  </span>
                </a>

                <CTAButton href="/contact" className="mt-4">
                  Apply for Coaching
                </CTAButton>
              </div>
            </motion.div>
          </div>

          {/* Right column: accordion */}
          <div className="flex-1 flex flex-col gap-4 z-10">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="bg-[#111] rounded-2xl border border-white/[0.04] overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full flex items-start justify-between px-6 py-6 text-left gap-4 cursor-pointer focus:outline-none"
                >
                  <div className="flex items-start gap-4">
                    <span className="text-accent-green font-black text-xs pt-1 shrink-0 opacity-40 group-hover:opacity-100 transition-opacity">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span className={`text-white font-bold text-base lg:text-lg uppercase tracking-wide leading-tight transition-colors duration-300 ${openIndex === i ? 'text-white' : 'text-white/60'}`}>
                      {faq.q}
                    </span>
                  </div>
                  <div className={`mt-1 shrink-0 transition-transform duration-300 ${openIndex === i ? 'rotate-180 text-accent-green' : 'text-white/20'}`}>
                    <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </button>

                <div className={`faq-answer ${openIndex === i ? 'open' : ''}`}>
                  <div className="px-6 pb-6 flex gap-4">
                    <span className="text-transparent text-xs select-none shrink-0" aria-hidden="true">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <p className="text-white/40 text-sm md:text-base leading-relaxed font-medium">
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
