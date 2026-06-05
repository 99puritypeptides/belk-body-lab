'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function COAFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      q: "WHAT IS A CERTIFICATE OF ANALYSIS (COA)?",
      a: "A COA is a formal analytical document that records the testing performed on a specific batch of material. It reports identity confirmation, purity, the impurity profile, the analytical methods used, and the lot identifier — so the stated quality can be reviewed against the evidence."
    },
    {
      q: "HOW IS PURITY MEASURED?",
      a: "Purity is commonly measured by reversed-phase HPLC (high-performance liquid chromatography), which separates a sample into its components and produces a chromatogram. The proportion of the main peak relative to the total profile is reported as the purity percentage."
    },
    {
      q: "HOW IS IDENTITY CONFIRMED?",
      a: "Identity is confirmed by LC-MS (liquid chromatography–mass spectrometry), which measures molecular weight and compares it to the expected value for the intended molecular profile. This documents molecular weight accuracy and distinguishes correct material from material that merely appears pure."
    },
    {
      q: "WHY DOES EACH COA REFERENCE A SPECIFIC LOT?",
      a: "Analytical results describe the batch that was tested, not material in general. Tying every certificate to a unique lot identifier makes the data traceable, so results can always be matched to the specific batch they describe."
    },
    {
      q: "CAN I COMPARE DOCUMENTATION ACROSS BATCHES?",
      a: "Yes. Reviewing chromatograms and reported values across multiple lots is how batch-to-batch consistency is assessed. The repository lets you examine and compare certificates directly."
    },
    {
      q: "WHAT SHOULD I LOOK FOR WHEN READING A COA?",
      a: "Start with the lot identifier, then check the identity (LC-MS) result, the purity figure alongside its method, the chromatogram itself, the impurity profile, and the list of analytical methods used. When all of these are present and batch-tied, the document functions as verifiable evidence."
    },
    {
      q: "WHERE CAN I VIEW THE ACTUAL DOCUMENTS?",
      a: "The full Certificate of Analysis repository is available for review. You can open individual certificates and examine the analytical data for each batch.",
      hasCta: true
    }
  ];

  return (
    <section className="w-full bg-[#050505] py-24 lg:py-32 relative border-t border-white/5">
      <div className="max-w-[1000px] mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="font-heading text-4xl md:text-5xl font-black text-white uppercase tracking-tight text-center">
            Frequently Asked Questions
          </h2>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className={`bg-bg-card border transition-colors duration-300 ${isOpen ? 'border-accent-green' : 'border-white/10 hover:border-white/30'}`}
              >
                <button
                  onClick={() => toggleAccordion(idx)}
                  className="w-full px-6 py-6 sm:px-8 flex items-center justify-between text-left focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className={`font-heading font-black text-lg sm:text-xl pr-4 uppercase tracking-tight transition-colors duration-300 ${isOpen ? 'text-accent-green' : 'text-white'}`}>
                    {faq.q}
                  </span>
                  <motion.div 
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className={`flex shrink-0 items-center justify-center transition-colors duration-300 ${isOpen ? 'text-accent-green' : 'text-white/50'}`}
                  >
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                    </svg>
                  </motion.div>
                </button>
                
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                    >
                      <div className="px-6 pb-8 sm:px-8">
                        <div className="w-full h-px bg-white/10 mb-6"></div>
                        <p className="text-white/60 font-sans text-lg leading-relaxed">{faq.a}</p>
                        
                        {faq.hasCta && (
                          <div className="mt-8">
                            <a
                              href="https://99puritypeptides.com/certificates"
                              target="_blank"
                              rel="noopener noreferrer nofollow"
                              className="cta-coa inline-flex items-center gap-3 text-[11px] font-black text-accent-green uppercase tracking-[0.25em] hover:text-white transition-colors group"
                              data-cta="faq-view-coa"
                            >
                              <span>Go to the COA Repository</span>
                              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                              </svg>
                            </a>
                          </div>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
