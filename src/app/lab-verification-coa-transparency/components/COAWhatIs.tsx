'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function COAWhatIs() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } }
  };

  const dataPoints = [
    {
      title: "IDENTITY CONFIRMATION",
      desc: "The analytical evidence that the material matches its expected molecular profile, typically established by mass spectrometry.",
      icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
    },
    {
      title: "PURITY PERCENTAGE",
      desc: "The measured purity for the batch, commonly determined by reversed-phase HPLC and expressed as a percentage of the total profile.",
      icon: "M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"
    },
    {
      title: "IMPURITY PROFILE",
      desc: "A record of detected impurities, which provides context for the purity figure and supports quality assessment.",
      icon: "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
    },
    {
      title: "ANALYTICAL METHODS",
      desc: "The specific techniques applied (for example, HPLC and LC-MS), so the results can be interpreted and independently checked.",
      icon: "M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
    },
    {
      title: "BATCH IDENTIFIER",
      desc: "The unique reference that ties the document to one specific production lot, enabling traceability.",
      icon: "M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
    },
    {
      title: "REPORTED SPECS",
      desc: "The target criteria the batch was evaluated against.",
      icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
    }
  ];

  return (
    <section className="w-full bg-[#050505] py-20 lg:py-32 relative border-t border-white/5">
      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16 lg:mb-24">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <span className="block text-accent-green text-[11px] font-black uppercase tracking-[0.3em] mb-4">/ 01. Documentation</span>
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 tracking-tight uppercase leading-[1.05]">
              What a Certificate of Analysis Actually Documents
            </h2>
            
            <p className="text-lg md:text-xl text-white/60 leading-relaxed font-sans">
              A Certificate of Analysis (COA) is a formal analytical record. It documents the testing performed on a specific batch of material and reports the results against defined specifications. Rather than a marketing statement, a COA is a traceable document: it states which analytical methods were used, what those methods measured, and the values recorded for that lot.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative w-full aspect-[4/3] lg:aspect-square bg-black border border-white/10 overflow-hidden group"
          >
            <div className="absolute inset-0 bg-accent-green/20 mix-blend-overlay group-hover:opacity-0 transition-opacity duration-700 z-10"></div>
            <img 
              src="/images/coa/lab-vials.png" 
              alt="Analytical verification testing equipment" 
              className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-700 opacity-80"
              loading="lazy"
            />
            <div className="absolute bottom-4 left-4 z-20">
              <span className="bg-black/80 backdrop-blur border border-white/10 text-[8px] font-bold uppercase tracking-widest text-white/50 px-2 py-1">
                Analytical Standards Lab
              </span>
            </div>
          </motion.div>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20"
        >
          {dataPoints.map((point, idx) => (
            <motion.div 
              key={idx} 
              variants={itemVariants}
              className="bg-bg-card p-8 border border-white/5 hover:border-accent-green/50 transition-colors duration-300 group"
            >
              <div className="w-10 h-10 bg-white/5 text-white flex items-center justify-center mb-6 group-hover:bg-accent-green group-hover:text-black transition-colors duration-300">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={2} d={point.icon} />
                </svg>
              </div>
              
              <h3 className="font-heading font-bold text-white text-xl tracking-tight uppercase mb-3">{point.title}</h3>
              <p className="text-white/50 text-sm leading-relaxed">{point.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="max-w-4xl border-l-2 border-accent-green pl-6 md:pl-10 py-2"
        >
          <p className="text-white/80 text-xl md:text-2xl leading-relaxed font-light font-sans italic">
            "Documentation turns a quality claim into something verifiable. When analytical data is recorded at the batch level and made available for review, anyone evaluating the material can examine the methods and the measured values directly. <strong className="text-white font-bold not-italic">The evidence is open to inspection.</strong>"
          </p>

          <div className="mt-10">
            <a
              href="https://99puritypeptides.com/certificates"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="cta-coa group inline-flex items-center gap-3 text-[11px] font-black uppercase tracking-[0.25em] text-accent-green hover:text-white transition-colors"
              data-cta="whatis-view-coa"
            >
              See real COA documents
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
