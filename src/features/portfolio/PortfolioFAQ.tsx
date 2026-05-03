'use client';

import React, { useState } from 'react';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import PremiumIcon from '@/components/ui/PremiumIcon';

export default function PortfolioFAQ() {
  const t = useTranslations('portfolioFaq');
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    { q: t('q1'), a: t('a1') },
    { q: t('q2'), a: t('a2') },
    { q: t('q3'), a: t('a3') },
    { q: t('q4'), a: t('a4') },
    { q: t('q5'), a: t('a5') },
  ];

  return (
    <section className="py-24 lg:py-60 bg-black overflow-hidden relative">
      {/* Decorative vertical line */}
      <div className="absolute left-1/2 top-0 w-px h-full bg-gradient-to-b from-transparent via-white/[0.03] to-transparent hidden lg:block" />

      <div className="max-w-[1800px] mx-auto px-6 lg:px-20">
        <div className="relative w-full bg-[#080808] rounded-[3rem] lg:rounded-[4rem] px-8 py-16 md:p-16 lg:p-24 flex flex-col lg:flex-row gap-16 lg:gap-32 border border-white/[0.03] shadow-2xl overflow-hidden">
          
          {/* Ghost FAQ text */}
          <div aria-hidden="true" className="absolute bottom-0 left-0 lg:left-12 select-none z-0 pointer-events-none translate-y-[30%]">
            <span className="font-display font-black text-[12rem] sm:text-[16rem] md:text-[20rem] lg:text-[26rem] leading-none tracking-tighter bg-gradient-to-b from-white/5 via-white/[0.01] to-transparent bg-clip-text text-transparent uppercase">
              FAQ
            </span>
          </div>

          {/* Left column */}
          <div className="lg:w-[40%] flex flex-col justify-start relative z-10 shrink-0">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-4 mb-10">
                <div className="w-12 h-px bg-accent-green" />
                <span className="text-[10px] font-black uppercase tracking-[0.6em] text-accent-green">Intelligence</span>
              </div>
              
              <h2 className="text-white text-5xl md:text-8xl font-black uppercase tracking-tighter leading-[0.85] mb-12">
                {t('title')} <br />
                <span className="text-transparent" style={{ WebkitTextStroke: '1.5px rgba(255,255,255,0.2)' }}>
                  {t('titleHighlight')}
                </span>
              </h2>
              
              <p className="text-white/30 text-xl font-light leading-relaxed mb-16 max-w-sm border-l border-white/10 pl-10">
                Critical data and insights regarding the Belk Body Lab transformation methodology.
              </p>

              <div className="flex flex-col gap-6">
                <div className="flex items-center gap-6 group">
                  <div className="w-14 h-14 rounded-full bg-white/5 border border-white/[0.08] flex items-center justify-center text-white/40 transition-all group-hover:border-accent-green group-hover:text-accent-green">
                    <svg width="20" height="20" fill="currentColor" viewBox="0 0 256 256">
                      <path d="M224,48H32A16,16,0,0,0,16,64V192a16,16,0,0,0,16,16H224a16,16,0,0,0,16-16V64A16,16,0,0,0,224,48ZM203.43,64,128,133.15,52.57,64ZM224,192H32V74.83l90.59,83.1A16,16,0,0,0,133.41,158L224,74.83Z" />
                    </svg>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[9px] font-black uppercase tracking-[0.4em] text-white/20 mb-1">Direct Support</span>
                    <span className="text-sm font-bold text-white/60 tracking-widest uppercase group-hover:text-white transition-colors">
                      support@belkbodylab.com
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right column: accordion */}
          <div className="flex-1 flex flex-col gap-6 z-10">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className={`rounded-[2rem] border transition-all duration-500 overflow-hidden ${
                  openIndex === i ? 'bg-white/[0.04] border-white/10 shadow-2xl' : 'bg-white/[0.01] border-white/[0.03] hover:border-white/10 hover:bg-white/[0.02]'
                }`}
              >
                <motion.button 
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  whileHover="hover"
                  className="w-full flex items-center justify-between p-8 lg:p-12 text-left group transition-all"
                >
                  <div className="flex items-center gap-8">
                    <span className={`text-[11px] font-black tracking-[0.2em] transition-all duration-500 ${
                      openIndex === i ? 'text-accent-green' : 'text-white/10 group-hover:text-white/30'
                    }`}>
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span className={`font-display font-black text-xl lg:text-2xl uppercase tracking-tight leading-tight transition-all duration-500 ${
                      openIndex === i ? 'text-white' : 'text-white/40 group-hover:text-white/70'
                    }`}>
                      {faq.q}
                    </span>
                  </div>
                  <div className={`w-12 h-12 rounded-full border flex items-center justify-center transition-all duration-500 ${
                    openIndex === i ? 'rotate-180 bg-accent-green border-accent-green text-black shadow-[0_0_20px_rgba(170,255,0,0.3)]' : 'border-white/10 text-white/20 group-hover:border-white/20'
                  }`}>
                    <PremiumIcon 
                      name="arrow"
                      size={20}
                      className={openIndex === i ? 'text-black' : 'text-white/20'}
                    />
                  </div>
                </motion.button>

                <motion.div 
                  initial={false}
                  animate={{ height: openIndex === i ? 'auto' : 0, opacity: openIndex === i ? 1 : 0 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="overflow-hidden"
                >
                  <div className="px-8 lg:px-12 pb-12 flex gap-10">
                    <span className="text-transparent text-[11px] select-none shrink-0" aria-hidden="true">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <div className="space-y-6">
                      <div className="w-12 h-px bg-white/10" />
                      <p className="text-white/40 text-lg lg:text-xl leading-relaxed font-light border-l border-white/5 pl-10">
                        {faq.a}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* Decorative background grid */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '80px 80px' }} />
    </section>
  );
}
