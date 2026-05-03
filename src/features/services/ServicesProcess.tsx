'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Link } from '@/i18n/navigation';
import CTAButton from '@/components/ui/CTAButton';

const STEPS = [
  {
    number: '01',
    title: 'Submit Your Application',
    description: 'Fill out the intake form with your goals, training history, and schedule. It takes 3 minutes. Kyle personally reviews every single one.',
    tag: 'Phase 01',
    image: '/BBL Media/lifestyle-1.jpg',
    accent: '#AAFF00'
  },
  {
    number: '02',
    title: 'Free Strategy Call',
    description: 'A 20-minute call with Kyle — no sales script, just an honest conversation. He identifies gaps in your current approach and maps a path forward.',
    tag: 'Phase 02',
    image: '/BBL Media/lifestyle-2.jpg',
    accent: '#60A5FA'
  },
  {
    number: '03',
    title: 'Custom Protocol Engineering',
    description: 'Within 48 hours of the call, you receive your complete training and nutrition protocol — built from scratch around your body, goals, and life.',
    tag: 'Phase 03',
    image: '/BBL Media/lifestyle-3.jpg',
    accent: '#F97316'
  },
  {
    number: '04',
    title: 'Training & Optimization',
    description: 'You train with full support. Weekly check-ins track progress. Kyle adjusts your plan based on real data — not guesswork. Plateaus don\'t stick around long.',
    tag: 'Phase 04',
    image: '/BBL Media/lifestyle-1.jpg',
    accent: '#AAFF00'
  },
  {
    number: '05',
    title: 'Evolution & Results',
    description: 'Reach your transformation milestone, document your results, and decide where to go next. Most clients continue. The machine doesn\'t stop unless you want it to.',
    tag: 'Final Phase',
    image: '/BBL Media/lifestyle-2.jpg',
    accent: '#C084FC'
  },
];

export default function ServicesProcess() {
  return (
    <section
      id="process"
      className="relative z-10 py-32 lg:py-60 bg-black overflow-hidden"
    >
      {/* Background Decorative Line */}
      <div className="absolute left-1/2 top-0 w-px h-full bg-gradient-to-b from-accent-green/20 via-accent-green/5 to-transparent hidden lg:block" />

      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-32 lg:mb-48 text-center"
        >
          <div className="inline-flex items-center gap-4 mb-8">
            <div className="w-12 h-px bg-accent-green" />
            <span className="text-[10px] font-black uppercase tracking-[0.6em] text-accent-green">
              Operational Roadmap
            </span>
            <div className="w-12 h-px bg-accent-green" />
          </div>
          <h2 className="text-5xl md:text-8xl font-display font-black text-white uppercase tracking-tighter leading-[0.8] mb-12">
            The Protocol <br />
            <span className="text-transparent" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.2)' }}>Journey</span>
          </h2>
          <p className="text-white/40 text-lg md:text-xl font-light leading-relaxed max-w-2xl mx-auto">
            From your initial application to a total body transformation, every step is engineered for precision and performance.
          </p>
        </motion.div>

        {/* Process Steps */}
        <div className="space-y-32 lg:space-y-64">
          {STEPS.map((step, i) => (
            <div 
              key={step.number}
              className={`flex flex-col lg:flex-row items-center gap-16 lg:gap-32 ${i % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
            >
              {/* Image Column */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="w-full lg:w-1/2 relative"
              >
                <div className="relative aspect-[4/3] rounded-[2.5rem] overflow-hidden border border-white/5 group">
                  <Image
                    src={step.image}
                    alt={step.title}
                    fill
                    className="object-cover grayscale brightness-50 group-hover:scale-110 transition-transform duration-[3000ms]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
                  
                  {/* Phase Badge */}
                  <div className="absolute bottom-10 left-10 z-20">
                    <span className="text-[10px] font-black uppercase tracking-[0.4em] text-accent-green block mb-2">{step.tag}</span>
                    <p className="text-white font-display text-4xl font-black italic">STEP_{step.number}</p>
                  </div>
                </div>

                {/* Background Glow */}
                <div 
                  className="absolute -inset-20 blur-[120px] opacity-10 -z-10 transition-opacity duration-700 group-hover:opacity-20"
                  style={{ backgroundColor: step.accent }}
                />
              </motion.div>

              {/* Text Column */}
              <motion.div 
                initial={{ opacity: 0, x: i % 2 === 0 ? 40 : -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="w-full lg:w-1/2"
              >
                <div className="relative">
                  <span className="text-[12rem] md:text-[18rem] font-display font-black text-white/[0.03] absolute -top-32 -left-10 lg:-left-24 pointer-events-none select-none">
                    {step.number}
                  </span>
                  <div className="relative z-10">
                    <div 
                      className="w-16 h-1 rounded-full mb-10"
                      style={{ backgroundColor: step.accent }}
                    />
                    <h3 className="text-4xl lg:text-6xl font-display font-black text-white uppercase tracking-tighter leading-none mb-8">
                      {step.title}
                    </h3>
                    <p className="text-white/40 text-lg md:text-xl font-light leading-relaxed mb-12 border-l border-white/10 pl-10">
                      {step.description}
                    </p>
                    
                    <Link 
                      href="/contact"
                      className="group inline-flex items-center gap-6"
                    >
                      <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:border-white transition-all duration-500">
                        <svg className="w-5 h-5 text-white group-hover:text-black transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </div>
                      <span className="text-[10px] font-black uppercase tracking-[0.4em] text-white/40 group-hover:text-white transition-colors">Initiate Step</span>
                    </Link>
                  </div>
                </div>
              </motion.div>
            </div>
          ))}
        </div>

        {/* Final CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-48 lg:mt-64 text-center"
        >
          <div className="relative inline-block">
            <CTAButton href="/contact">
              Secure Your Placement
            </CTAButton>
            <div className="absolute -inset-10 bg-accent-green/10 blur-[60px] -z-10 rounded-full" />
          </div>
          <p className="mt-12 text-white/20 text-xs font-mono uppercase tracking-[0.3em]">
            Current Intake Status: High Priority Application Window
          </p>
        </motion.div>
      </div>
    </section>
  );
}
