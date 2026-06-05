'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function COABatchVerification() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  const steps = [
    {
      title: "BATCH IDENTIFIER ASSIGNED",
      desc: "Every lot receives a unique reference that follows it through testing and documentation."
    },
    {
      title: "BATCH ANALYSIS",
      desc: "HPLC and LC-MS data are generated for that specific lot."
    },
    {
      title: "RESULTS RECORDED",
      desc: "The COA captures the measured values and the methods used, linked to the lot identifier."
    },
    {
      title: "EVIDENCE PUBLISHED",
      desc: "The certificate can be examined against the material it describes, closing the loop between claim and evidence."
    }
  ];

  return (
    <section className="w-full bg-[#0A0A0A] py-24 lg:py-32 border-t border-white/5 relative overflow-hidden">
      <div className="absolute right-0 top-1/2 w-[500px] h-[500px] bg-accent-green/5 rounded-full blur-[120px] pointer-events-none -mr-[250px] -translate-y-1/2"></div>

      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-16 lg:mb-24"
        >
          <span className="block text-white/40 text-[11px] font-black uppercase tracking-[0.3em] mb-4">/ 03. Traceability</span>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 tracking-tight uppercase leading-[1.05]">
            Batch-Level Verification
          </h2>
          <p className="text-lg md:text-xl text-white/60 leading-relaxed font-sans max-w-2xl">
            Quality is not a one-time event — it is a property of a specific batch. Analytical results from one lot do not automatically describe the next. This is why credible documentation is organized around the batch, and why each Certificate of Analysis is tied to a unique lot identifier.
          </p>
        </motion.div>

        {/* Animated Brutalist Timeline */}
        <div className="max-w-4xl mx-auto mb-20 relative" ref={containerRef}>
          {/* Background static line */}
          <div className="absolute left-[39px] sm:left-[47px] top-0 bottom-0 w-[2px] bg-white/10 hidden sm:block"></div>
          
          {/* Animated drawing line (Neon Green) */}
          <motion.div 
            style={{ height: lineHeight }}
            className="absolute left-[39px] sm:left-[47px] top-0 w-[2px] bg-accent-green shadow-[0_0_15px_rgba(170,255,0,0.5)] hidden sm:block origin-top"
          ></motion.div>
          
          <div className="flex flex-col gap-12 sm:gap-16">
            {steps.map((step, idx) => (
              <motion.div 
                key={idx} 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="flex flex-col sm:flex-row items-start gap-6 sm:gap-10 relative group"
              >
                {/* Number Node */}
                <div className="w-20 h-20 sm:w-24 sm:h-24 bg-bg-card border border-white/10 text-white font-heading font-black text-3xl sm:text-4xl flex items-center justify-center shrink-0 z-10 transition-colors duration-300 group-hover:border-accent-green group-hover:text-accent-green relative">
                  {/* Inner subtle glow on hover */}
                  <div className="absolute inset-0 bg-accent-green/0 group-hover:bg-accent-green/5 transition-colors duration-300"></div>
                  0{idx + 1}
                </div>

                {/* Content */}
                <div className="pt-2 sm:pt-4 w-full border-b border-white/5 pb-8 group-hover:border-accent-green/30 transition-colors duration-300">
                  <h3 className="font-heading text-2xl sm:text-3xl font-black text-white mb-3 uppercase tracking-tight">{step.title}</h3>
                  <p className="text-white/60 text-lg leading-relaxed font-sans">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl"
        >
          <div className="bg-bg-card border-l-4 border-accent-green p-8 lg:p-12 mb-12 relative overflow-hidden">
            <p className="text-white/80 text-lg md:text-xl font-sans leading-relaxed mb-6">
              Reviewing documentation across multiple lots is how consistency is assessed. By comparing chromatograms and reported values from one batch to the next, the data itself shows whether quality is being held steady over time — rather than relying on a single, isolated result.
            </p>

            <div className="bg-black/50 p-4 border border-white/5">
              <p className="text-white font-sans text-sm">
                <strong className="text-accent-green uppercase tracking-widest text-[10px] block mb-2">Traceability Principle</strong> 
                If a result cannot be tied to a specific batch, it cannot be verified for the material in front of you. Batch-level documentation is what makes verification possible.
              </p>
            </div>
          </div>

          <a
            href="https://99puritypeptides.com/certificates"
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="cta-coa group inline-flex items-center justify-center px-10 py-5 text-[12px] font-black text-white uppercase tracking-[0.2em] bg-transparent border border-white/20 hover:border-accent-green hover:text-accent-green transition-all"
            data-cta="batch-view-coa"
          >
            Compare COAs across batches
            <svg className="w-4 h-4 ml-3 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
