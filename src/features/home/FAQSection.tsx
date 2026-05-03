'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import CTAButton from '@/components/ui/CTAButton';
import PremiumIcon from '@/components/ui/PremiumIcon';

interface FAQSectionProps {
  namespace?: string;
}

export default function FAQSection({ namespace = 'faq' }: FAQSectionProps) {
  const t = useTranslations(namespace);
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  // We assume the structure is q1, a1, q2, a2, etc. or an array-like structure.
  // Given our en.json for portfolioFaq, it has q1, a1...
  // For home faq, we should update en.json to match this pattern if we want it dynamic.
  
  const faqs = React.useMemo(() => {
    const items = [];
    for (let i = 1; i <= 6; i++) {
      const qKey = `q${i}`;
      const aKey = `a${i}`;
      
      // Check if keys exist before calling t()
      if (t.has(qKey) && t.has(aKey)) {
        const q = t(qKey);
        const a = t(aKey);
        items.push({ q, a });
      } else {
        // If q1 doesn't exist, we might be at the end, but let's keep checking 
        // in case of gaps (though gaps aren't expected). 
        // For efficiency, we can break if q1 is missing.
        if (i === 1 && !t.has(qKey)) break;
        continue;
      }
    }
    return items;
  }, [t]);

  if (faqs.length === 0) return null;

  return (
    <section
      id="faq"
      className="relative z-10 py-24 lg:py-40 bg-[#050505] overflow-hidden"
      aria-label="Frequently asked questions"
    >
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
        <div className="relative w-full bg-[#0a0a0a] rounded-[2.5rem] lg:rounded-[3rem] px-6 py-12 md:p-12 lg:p-16 flex flex-col lg:flex-row gap-12 lg:gap-24 border border-white/[0.03] shadow-2xl overflow-hidden">

          {/* Ghost FAQ text */}
          <div aria-hidden="true" className="absolute bottom-0 left-0 lg:left-8 select-none z-0 pointer-events-none translate-y-[20%]">
            <span className="font-display font-black text-[35vw] sm:text-[14rem] md:text-[18rem] lg:text-[22rem] leading-[0.8] tracking-tighter bg-gradient-to-b from-white/5 via-white/[0.02] to-transparent bg-clip-text text-transparent">
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
              <h2 className="text-white text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight leading-[0.9] mb-8 break-words">
                {t('title') || 'Questions &'} <br />
                <span className="text-accent-green">{t('titleHighlight') || 'Answers'}</span>
              </h2>
              <p className="text-white/40 text-base sm:text-lg font-medium leading-relaxed mb-10 max-w-sm">
                If your question isn&apos;t answered here, reach out directly — Kyle responds personally.
              </p>

              <div className="flex flex-col gap-5">
                <a href="mailto:support@belkbodylab.com" className="flex items-center gap-4 group w-full overflow-hidden">
                  <div className="w-11 h-11 shrink-0 rounded-full bg-white/5 border border-white/[0.06] flex items-center justify-center text-white/40 transition-all group-hover:border-accent-green group-hover:text-accent-green">
                    <svg width="18" height="18" fill="currentColor" viewBox="0 0 256 256">
                      <path d="M224,48H32A16,16,0,0,0,16,64V192a16,16,0,0,0,16,16H224a16,16,0,0,0,16-16V64A16,16,0,0,0,224,48ZM203.43,64,128,133.15,52.57,64ZM224,192H32V74.83l90.59,83.1A16,16,0,0,0,133.41,158L224,74.83Z" />
                    </svg>
                  </div>
                  <span className="text-white/60 text-xs sm:text-sm font-bold tracking-widest uppercase group-hover:text-white transition-colors truncate">
                    support@belkbodylab.com
                  </span>
                </a>

                <CTAButton href="/contact" className="mt-4 w-full sm:w-fit">
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
                <motion.button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  whileHover="hover"
                  className="w-full flex items-start justify-between px-6 py-6 text-left gap-4 cursor-pointer focus:outline-none group"
                >
                  <div className="flex items-start gap-4">
                    <span className="text-accent-green font-black text-xs pt-1 shrink-0 opacity-40 group-hover:opacity-100 transition-opacity">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span className={`text-white font-bold text-base lg:text-lg uppercase tracking-wide leading-tight transition-colors duration-300 ${openIndex === i ? 'text-white' : 'text-white/60 group-hover:text-white/80'}`}>
                      {faq.q}
                    </span>
                  </div>
                  <div className={`mt-1 shrink-0 transition-all duration-300 ${openIndex === i ? 'rotate-180 text-accent-green' : 'text-white/20'}`}>
                    <PremiumIcon name="arrow" size={20} />
                  </div>
                </motion.button>

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
