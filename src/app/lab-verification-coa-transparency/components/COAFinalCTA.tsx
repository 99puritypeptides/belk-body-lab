'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function COAFinalCTA() {
  return (
    <section className="w-full bg-[#050505] py-24 lg:py-40 relative overflow-hidden border-t border-white/5">
      {/* Background brutalist typography element */}
      <div className="absolute inset-0 flex justify-center items-center pointer-events-none select-none opacity-5">
        <h2 className="font-jumpshot text-[25vw] leading-none text-white whitespace-nowrap">
          VERIFY
        </h2>
      </div>

      <div className="max-w-[1000px] mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="inline-block px-4 py-2 bg-accent-green/10 text-[10px] font-bold tracking-[0.3em] text-accent-green uppercase mb-8 border border-accent-green/20">
            The Evidence Is Open
          </span>
          
          <h2 className="font-heading text-5xl sm:text-6xl md:text-7xl font-black text-white mb-8 tracking-tight uppercase leading-[1]">
            Don't Take A Claim On Faith.<br className="hidden md:block" /> Read The Documentation.
          </h2>
          
          <p className="text-xl text-white/50 leading-relaxed max-w-2xl mx-auto mb-14 font-sans">
            Every Certificate of Analysis records the methods, the measurements, and the batch they describe. Open the repository and verify the data for yourself.
          </p>
          
          <div className="flex flex-col items-center">
            <motion.a
              href="https://99puritypeptides.com/certificates"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="cta-coa cta-final group relative inline-flex items-center justify-center px-10 py-6 sm:px-14 sm:py-7 bg-white text-black font-heading text-lg sm:text-xl font-black uppercase tracking-[0.1em] overflow-hidden transition-transform hover:scale-[1.02] active:scale-95"
              data-cta="final-view-coa"
            >
              <div className="absolute inset-0 w-full h-full bg-accent-green -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out z-0"></div>
              <span className="relative z-10 flex items-center gap-4">
                View COA Reports
                <svg className="w-6 h-6 group-hover:translate-x-1.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </span>
            </motion.a>
            
            <p className="mt-10 text-[10px] font-bold text-white/30 tracking-[0.25em] uppercase">
              HPLC Purity Data / LC-MS Identity / Batch-Level Traceability
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
