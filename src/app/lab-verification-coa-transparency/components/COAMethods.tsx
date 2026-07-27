'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function COAMethods() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const } }
  };

  return (
    <section className="w-full bg-[#080808] py-24 lg:py-32 relative border-t border-white/5 overflow-hidden">
      
      {/* Background glow effects */}
      <div className="absolute top-1/4 -right-1/4 w-[600px] h-[600px] bg-accent-green/5 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-16 lg:mb-20"
        >
          <span className="block text-white/40 text-[11px] font-black uppercase tracking-[0.3em] mb-4">/ 02. Analytical Methods</span>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 tracking-tight uppercase leading-[1.05]">
            The Methods Behind the Numbers
          </h2>
          <p className="text-lg md:text-xl text-white/60 leading-relaxed font-sans">
            A purity figure is only as meaningful as the method that produced it. Two complementary techniques carry most of the analytical weight in peptide characterization: high-performance liquid chromatography and mass spectrometry. Together they answer two distinct questions — how pure is the material, and is it the correct material.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 mb-20"
        >
          {/* Card 1 - HPLC */}
          <motion.div 
            variants={cardVariants}
            className="group relative bg-black p-10 border border-white/5 hover:border-accent-green/30 transition-colors duration-500 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-8">
                <h3 className="font-heading text-3xl font-black text-white uppercase tracking-tight">HPLC <span className="text-white/30">(Purity)</span></h3>
                <span className="text-[10px] font-bold text-accent-green uppercase tracking-[0.2em] px-2 py-1 bg-accent-green/10">01</span>
              </div>
              
              <div className="mb-8 border-l-2 border-white/20 pl-4 group-hover:border-accent-green/50 transition-colors">
                <p className="text-[10px] font-bold text-white/40 uppercase tracking-[0.2em] mb-1">
                  Question it answers
                </p>
                <p className="text-sm font-bold text-white uppercase tracking-widest">
                  How pure is this batch?
                </p>
              </div>

              {/* Brutalist Data Visual: HPLC Chromatogram */}
              <div className="w-full h-24 mb-8 border-b border-white/10 relative flex items-end">
                <div className="absolute inset-0 bg-[url('/images/noise.png')] opacity-10 mix-blend-overlay"></div>
                <svg viewBox="0 0 400 100" className="w-full h-full text-accent-green drop-shadow-[0_0_8px_rgba(170,255,0,0.5)]" preserveAspectRatio="none">
                  {/* Grid lines */}
                  <path d="M 0 25 L 400 25 M 0 50 L 400 50 M 0 75 L 400 75" stroke="rgba(255,255,255,0.05)" strokeWidth="1" fill="none" />
                  {/* Chromatogram trace */}
                  <motion.path 
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, ease: "easeInOut" }}
                    d="M 0 95 L 40 95 L 50 85 L 60 95 L 120 95 L 160 20 L 190 95 L 250 95 L 260 80 L 270 95 L 400 95" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinejoin="round" 
                  />
                  {/* Main peak highlight line */}
                  <motion.line 
                    initial={{ opacity: 0, y1: 95 }}
                    whileInView={{ opacity: 1, y1: 20 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 1.5 }}
                    x1="160" y1="20" x2="160" y2="95" stroke="rgba(170,255,0,0.3)" strokeWidth="1" strokeDasharray="4 2" 
                  />
                </svg>
              </div>
              
              <p className="text-white/60 text-base leading-relaxed font-sans">
                Reversed-phase high-performance liquid chromatography (RP-HPLC) separates the components of a sample as they pass through a column at different rates. The result is a chromatogram — a trace in which each peak represents a component. The relative size of the main peak against the total profile yields the purity percentage. A clean chromatogram with a dominant primary peak and minimal secondary peaks indicates high purity.
              </p>
            </div>
            
            <div className="mt-12 pt-6 border-t border-white/5">
               <span className="text-[10px] text-white/30 font-bold uppercase tracking-[0.25em]">Analytical Technique 1</span>
            </div>
          </motion.div>

          {/* Card 2 - LC-MS */}
          <motion.div 
            variants={cardVariants}
            className="group relative bg-black p-10 border border-white/5 hover:border-accent-green/30 transition-colors duration-500 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-8">
                <h3 className="font-heading text-3xl font-black text-white uppercase tracking-tight">LC-MS <span className="text-white/30">(Identity)</span></h3>
                <span className="text-[10px] font-bold text-accent-green uppercase tracking-[0.2em] px-2 py-1 bg-accent-green/10">02</span>
              </div>
              
              <div className="mb-8 border-l-2 border-white/20 pl-4 group-hover:border-accent-green/50 transition-colors">
                <p className="text-[10px] font-bold text-white/40 uppercase tracking-[0.2em] mb-1">
                  Question it answers
                </p>
                <p className="text-sm font-bold text-white uppercase tracking-widest">
                  Is this the correct molecule?
                </p>
              </div>

              {/* Brutalist Data Visual: LC-MS Mass Spectrum */}
              <div className="w-full h-24 mb-8 border-b border-white/10 relative flex items-end">
                <div className="absolute inset-0 bg-[url('/images/noise.png')] opacity-10 mix-blend-overlay"></div>
                <svg viewBox="0 0 400 100" className="w-full h-full text-accent-green" preserveAspectRatio="none">
                  {/* Grid lines */}
                  <path d="M 0 25 L 400 25 M 0 50 L 400 50 M 0 75 L 400 75" stroke="rgba(255,255,255,0.05)" strokeWidth="1" fill="none" />
                  
                  {/* Mass Spectrum Bars */}
                  <motion.line initial={{ y1: 95 }} whileInView={{ y1: 80 }} viewport={{ once: true }} transition={{ duration: 0.3 }} x1="80" y1="95" x2="80" y2="80" stroke="currentColor" strokeWidth="2" />
                  <motion.line initial={{ y1: 95 }} whileInView={{ y1: 50 }} viewport={{ once: true }} transition={{ duration: 0.3, delay: 0.1 }} x1="130" y1="95" x2="130" y2="50" stroke="currentColor" strokeWidth="2" />
                  <motion.line initial={{ y1: 95 }} whileInView={{ y1: 70 }} viewport={{ once: true }} transition={{ duration: 0.3, delay: 0.2 }} x1="150" y1="95" x2="150" y2="70" stroke="currentColor" strokeWidth="2" />
                  
                  {/* Main mass peak */}
                  <motion.line 
                    initial={{ y1: 95 }}
                    whileInView={{ y1: 15 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.5, type: "spring", bounce: 0.4 }}
                    x1="220" y1="95" x2="220" y2="15" stroke="currentColor" strokeWidth="4" 
                    className="drop-shadow-[0_0_8px_rgba(170,255,0,0.8)]"
                  />
                  <motion.text 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                    x="220" y="10" fill="currentColor" fontSize="10" fontFamily="sans-serif" fontWeight="bold" textAnchor="middle" className="uppercase tracking-widest"
                  >
                    Target M/Z
                  </motion.text>
                  
                  <motion.line initial={{ y1: 95 }} whileInView={{ y1: 60 }} viewport={{ once: true }} transition={{ duration: 0.3, delay: 0.3 }} x1="280" y1="95" x2="280" y2="60" stroke="currentColor" strokeWidth="2" />
                  <motion.line initial={{ y1: 95 }} whileInView={{ y1: 85 }} viewport={{ once: true }} transition={{ duration: 0.3, delay: 0.4 }} x1="330" y1="95" x2="330" y2="85" stroke="currentColor" strokeWidth="2" />
                </svg>
              </div>
              
              <p className="text-white/60 text-base leading-relaxed font-sans">
                Liquid chromatography–mass spectrometry (LC-MS) measures the molecular weight of the separated components. By comparing the measured mass against the expected value for the intended sequence, LC-MS confirms identity and documents molecular weight accuracy. This step is what distinguishes a correctly characterized material from one that merely looks pure on a chromatogram.
              </p>
            </div>
            
            <div className="mt-12 pt-6 border-t border-white/5">
               <span className="text-[10px] text-white/30 font-bold uppercase tracking-[0.25em]">Analytical Technique 2</span>
            </div>
          </motion.div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-full flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10 bg-bg-card border border-white/5 p-8 lg:p-12"
        >
          <div className="max-w-2xl">
            <p className="text-white/80 text-xl font-sans leading-relaxed">
              Used together, HPLC and LC-MS provide <strong className="text-white">dual verification</strong>: one method documents purity, the other confirms identity. Recording both for each batch is what allows a Certificate of Analysis to stand as analytical evidence rather than assertion.
            </p>
          </div>

          <a
            href="https://99puritypeptides.com/certificates"
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="cta-coa shrink-0 group relative inline-flex items-center justify-center px-10 py-5 text-[12px] font-black uppercase tracking-[0.2em] text-black bg-accent-green overflow-hidden transition-transform hover:scale-105 active:scale-95"
            data-cta="methods-view-coa"
          >
            <div className="absolute inset-0 w-full h-full bg-white/20 -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out z-0"></div>
            <span className="relative z-10 flex items-center gap-3">
              Review Analytical Data
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
