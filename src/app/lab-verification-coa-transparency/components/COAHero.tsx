'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function COAHero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const } }
  };

  return (
    <section className="relative w-full min-h-[90svh] bg-bg-primary overflow-hidden flex items-center pt-24 pb-20">
      {/* Brutalist Background Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none">
        <div className="absolute inset-0 bg-[url('/images/noise.png')] opacity-10 mix-blend-overlay"></div>
        {/* Subtle grid lines native to BBL */}
        <div className="bg-grid hidden lg:grid absolute inset-0 opacity-20" aria-hidden="true">
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="bg-grid-line" />
          ))}
        </div>
        {/* Neon Green subtle glow behind text */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-accent-green rounded-full blur-[150px] opacity-[0.03]"></div>
      </div>

      {/* Rotating Brutalist Compliance Badge */}
      <motion.div 
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute right-[-40px] top-[15%] md:right-[5%] md:top-[20%] w-32 h-32 md:w-48 md:h-48 z-20 pointer-events-none opacity-40 md:opacity-60 mix-blend-screen"
      >
        <svg viewBox="0 0 200 200" className="w-full h-full text-accent-green fill-current">
          <path id="textPath" d="M 100, 100 m -70, 0 a 70,70 0 1,1 140,0 a 70,70 0 1,1 -140,0" fill="none" />
          <text className="font-heading font-black text-[15px] uppercase tracking-widest">
            <textPath href="#textPath" startOffset="0%">
              • ANALYTICAL VERIFICATION • BATCH TRACEABILITY 
            </textPath>
          </text>
          {/* Inner geometry */}
          <circle cx="100" cy="100" r="45" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
          <path d="M 100 40 L 100 160 M 40 100 L 160 100" stroke="currentColor" strokeWidth="1" opacity="0.5" />
          <path d="M 70 70 L 130 130 M 70 130 L 130 70" stroke="currentColor" strokeWidth="1" opacity="0.3" />
        </svg>
      </motion.div>

      <div className="w-full max-w-[1400px] mx-auto px-6 relative z-10 text-center flex flex-col items-center">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="flex flex-col items-center w-full"
        >
          {/* Eyebrow Microcopy */}
          <motion.div variants={itemVariants} className="mb-6">
            <span className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] md:text-[12px] font-bold uppercase tracking-[0.25em] text-white/60">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-green animate-pulse"></span>
              Independent Analytical Testing
            </span>
          </motion.div>

          {/* Jumpshot / Clash Massive Display */}
          <motion.div variants={itemVariants} className="w-full max-w-5xl mb-8">
            <h1 className="font-jumpshot text-white text-[12vw] sm:text-[10vw] md:text-[8vw] lg:text-[100px] leading-[0.85] uppercase tracking-[-0.04em] text-balance">
              <span className="block text-white/90">Analytical Transparency</span>
              <span className="block text-accent-green drop-shadow-[0_0_30px_rgba(170,255,0,0.3)] mt-2">For Every Batch</span>
            </h1>
          </motion.div>

          {/* Body Text */}
          <motion.div variants={itemVariants} className="max-w-2xl mb-12">
            <p className="text-base sm:text-lg text-white/60 leading-relaxed font-sans">
              Quality cannot be claimed; it must be documented. We provide lot-specific high-performance liquid chromatography (HPLC) and mass spectrometry (LC-MS) data so you can verify the purity and identity of the material directly.
            </p>
          </motion.div>

          {/* 3 Brutalist Stat Points */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8 mb-14 text-[10px] sm:text-[11px] font-black uppercase tracking-widest text-white/50">
            <span className="flex items-center gap-2"><span className="text-accent-green">/</span> HPLC-Documented Purity</span>
            <span className="flex items-center gap-2 hidden sm:flex"><span className="text-accent-green">/</span> LC-MS Identity Confirmation</span>
            <span className="flex items-center gap-2"><span className="text-accent-green">/</span> Batch-Level Traceability</span>
          </motion.div>

          {/* CTA */}
          <motion.div variants={itemVariants}>
            <a
              href="https://99puritypeptides.com/certificates"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="cta-coa group relative inline-flex items-center justify-center px-8 py-4 sm:px-10 sm:py-5 bg-white text-black font-heading text-sm sm:text-base font-black uppercase tracking-[0.1em] overflow-hidden transition-transform hover:scale-[1.02] active:scale-95"
              data-cta="hero-view-coa"
            >
              <div className="absolute inset-0 w-full h-full bg-accent-green -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out z-0"></div>
              <span className="relative z-10 flex items-center gap-3">
                Access the COA Repository
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </span>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
