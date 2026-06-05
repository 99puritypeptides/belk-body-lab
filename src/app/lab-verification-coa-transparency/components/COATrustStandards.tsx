'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function COATrustStandards() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as const } }
  };

  return (
    <section className="w-full bg-[#080808] py-24 lg:py-32 relative overflow-hidden border-t border-white/5">
      {/* Brutalist Grid Background */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-20">
        <div className="w-full h-full" style={{ backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-16 lg:mb-24"
        >
          <span className="block text-accent-green text-[11px] font-black uppercase tracking-[0.3em] mb-4">/ 05. Benchmarks</span>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 tracking-tight uppercase leading-[1.05]">
            Transparency Is a Standard
          </h2>
          <p className="text-lg md:text-xl text-white/60 leading-relaxed font-sans">
            The most reliable signal of quality is a willingness to show the data. Documentation that is open to review invites scrutiny rather than asking for trust on faith. The standards below describe what meaningful analytical transparency looks like.
          </p>
        </motion.div>

        {/* 2x2 Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-20"
        >
          {/* Card 1 */}
          <motion.div variants={itemVariants} className="group bg-black p-8 lg:p-12 border border-white/10 hover:border-accent-green/50 transition-colors duration-300">
            <h3 className="font-heading text-2xl lg:text-3xl font-black text-white uppercase tracking-tight mb-4 group-hover:text-accent-green transition-colors">Documented Purity</h3>
            <div className="w-12 h-1 bg-white/10 mb-6 group-hover:bg-accent-green transition-colors"></div>
            <p className="text-white/60 font-sans leading-relaxed text-base">
              Purity is recorded for each batch using reversed-phase HPLC and reported as a measured percentage against the full analytical profile — a number you can read, paired with the method that produced it.
            </p>
          </motion.div>
          
          {/* Card 2 */}
          <motion.div variants={itemVariants} className="group bg-black p-8 lg:p-12 border border-white/10 hover:border-accent-green/50 transition-colors duration-300">
            <h3 className="font-heading text-2xl lg:text-3xl font-black text-white uppercase tracking-tight mb-4 group-hover:text-accent-green transition-colors">Confirmed Identity</h3>
            <div className="w-12 h-1 bg-white/10 mb-6 group-hover:bg-accent-green transition-colors"></div>
            <p className="text-white/60 font-sans leading-relaxed text-base">
              Identity is established by LC-MS, with documented molecular weight accuracy confirming the material matches its expected molecular profile.
            </p>
          </motion.div>

          {/* Card 3 */}
          <motion.div variants={itemVariants} className="group bg-black p-8 lg:p-12 border border-white/10 hover:border-accent-green/50 transition-colors duration-300">
            <h3 className="font-heading text-2xl lg:text-3xl font-black text-white uppercase tracking-tight mb-4 group-hover:text-accent-green transition-colors">Batch Traceability</h3>
            <div className="w-12 h-1 bg-white/10 mb-6 group-hover:bg-accent-green transition-colors"></div>
            <p className="text-white/60 font-sans leading-relaxed text-base">
              Every result is tied to a unique lot identifier, so analytical data can always be matched to the specific batch it describes.
            </p>
          </motion.div>

          {/* Card 4 */}
          <motion.div variants={itemVariants} className="group bg-black p-8 lg:p-12 border border-white/10 hover:border-accent-green/50 transition-colors duration-300">
            <h3 className="font-heading text-2xl lg:text-3xl font-black text-white uppercase tracking-tight mb-4 group-hover:text-accent-green transition-colors">Open Documentation</h3>
            <div className="w-12 h-1 bg-white/10 mb-6 group-hover:bg-accent-green transition-colors"></div>
            <p className="text-white/60 font-sans leading-relaxed text-base">
              Certificates of Analysis are made available for review. The evidence behind each quality statement is accessible, not hidden behind a claim.
            </p>
          </motion.div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="w-full flex flex-col md:flex-row items-start md:items-center justify-between gap-8 py-10 border-t border-b border-white/10">
            <p className="text-white/50 text-xs sm:text-sm font-sans uppercase tracking-[0.2em] max-w-2xl leading-relaxed">
              All materials referenced here are evaluated strictly in analytical and laboratory contexts. The focus throughout is documentation and verification — the methods, the measurements, and the records that make quality something you can examine directly.
            </p>

            <a
              href="https://99puritypeptides.com/certificates"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="cta-coa shrink-0 group inline-flex items-center gap-3 text-[11px] font-black text-accent-green uppercase tracking-[0.25em] hover:text-white transition-colors"
              data-cta="trust-view-coa"
            >
              Access Full Repository
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
