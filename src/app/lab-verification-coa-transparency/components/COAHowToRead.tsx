'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function COAHowToRead() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    show: { opacity: 1, x: 0, transition: { duration: 0.4 } }
  };

  const guideItems = [
    {
      title: "01. FIND THE LOT IDENTIFIER",
      desc: "Confirm the certificate corresponds to the specific batch you are evaluating. A COA without a matching lot reference cannot be tied to the material."
    },
    {
      title: "02. CHECK THE IDENTITY RESULT",
      desc: "Look for the mass spectrometry confirmation and whether the measured molecular weight matches the expected value."
    },
    {
      title: "03. READ THE PURITY FIGURE WITH ITS METHOD",
      desc: "A purity percentage should be paired with the method that produced it (typically RP-HPLC). The method gives the number its meaning."
    },
    {
      title: "04. EXAMINE THE CHROMATOGRAM",
      desc: "A dominant single peak with minimal additional peaks supports the stated purity. The visual trace is part of the evidence, not decoration."
    },
    {
      title: "05. REVIEW THE IMPURITY PROFILE",
      desc: "Detected impurities provide context. Their presence and quantification are a sign of thorough analysis, not a flaw in the document."
    },
    {
      title: "06. NOTE THE ANALYTICAL METHODS LISTED",
      desc: "Documented methods are what make a result interpretable and, where appropriate, independently checkable."
    }
  ];

  return (
    <section className="w-full bg-[#050505] py-24 lg:py-32 relative border-t border-white/5">
      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 lg:mb-20 max-w-3xl"
        >
          <span className="block text-white/40 text-[11px] font-black uppercase tracking-[0.3em] mb-4">/ 04. Reading the Data</span>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 tracking-tight uppercase leading-[1.05]">
            How to Read a Certificate
          </h2>
          <p className="text-lg md:text-xl text-white/60 leading-relaxed font-sans">
            A COA is straightforward to interpret once you know what each section is telling you. Use this as a quick reference when reviewing any certificate.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="lg:col-span-7"
          >
            <div className="space-y-8">
              {guideItems.map((item, idx) => (
                <motion.div 
                  key={idx} 
                  variants={itemVariants}
                  className="group border-t border-white/10 pt-6"
                >
                  <h3 className="font-heading font-black text-white text-xl sm:text-2xl uppercase tracking-tight mb-3 group-hover:text-accent-green transition-colors">{item.title}</h3>
                  <p className="text-white/60 font-sans leading-relaxed text-base max-w-2xl">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-5 sticky top-24"
          >
            <div className="bg-bg-card border border-white/5 relative overflow-hidden flex flex-col group">
              {/* Added Image Block */}
              <div className="relative w-full h-48 sm:h-64 border-b border-white/10 overflow-hidden bg-black">
                <div className="absolute inset-0 bg-accent-green/20 mix-blend-color z-10 group-hover:opacity-0 transition-opacity duration-700"></div>
                <img 
                  src="/images/coa/data-document.png" 
                  alt="Verified Certificate of Analysis Document" 
                  className="w-full h-full object-cover opacity-70 group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
              </div>

              <div className="p-8 lg:p-12">
                <svg className="w-8 h-8 text-accent-green mb-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>

                <p className="text-white/80 leading-relaxed font-sans text-lg mb-12">
                  Strong documentation is specific, method-anchored, and batch-tied. It states what was measured, how it was measured, and which lot the measurement describes. When all three are present, the certificate functions as verifiable evidence rather than a general assurance.
                </p>

                <a
                  href="https://99puritypeptides.com/certificates"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="cta-coa group inline-flex items-center gap-3 text-[11px] font-black text-accent-green uppercase tracking-[0.25em] hover:text-white transition-colors"
                  data-cta="howto-view-coa"
                >
                  <span>Open a COA and follow along</span>
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
