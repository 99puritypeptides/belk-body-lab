'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Link } from '@/i18n/navigation';
import CTAButton from '@/components/ui/CTAButton';

const STEPS = [
  {
    number: '01',
    title: 'Submit Your Application',
    description: 'Fill out the intake form with your goals, training history, and schedule. It takes 3 minutes. Kyle personally reviews every single one.',
    tag: 'Day 1',
    image: '/images/process/step-1.png',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
      </svg>
    ),
  },
  {
    number: '02',
    title: 'Free Strategy Call',
    description: 'A 20-minute call with Kyle — no sales script, just an honest conversation. He identifies gaps in your current approach and maps a path forward.',
    tag: 'Within 24hrs',
    image: '/images/process/step-2.png',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
      </svg>
    ),
  },
  {
    number: '03',
    title: 'Your Custom Program is Built',
    description: 'Within 48 hours of the call, you receive your complete training and nutrition protocol — built from scratch around your body, goals, and life.',
    tag: '48hrs After Call',
    image: '/images/process/step-3.png',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
      </svg>
    ),
  },
  {
    number: '04',
    title: 'Train. Check In. Optimize.',
    description: 'You train with full support. Weekly check-ins track progress. Kyle adjusts your plan based on real data — not guesswork. Plateaus don\'t stick around long.',
    tag: 'Ongoing',
    image: '/images/process/step-4.png',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
      </svg>
    ),
  },
  {
    number: '05',
    title: 'Hit Your Goal. Set the Next One.',
    description: 'Reach your transformation milestone, document your results, and decide where to go next. Most clients continue. The machine doesn\'t stop unless you want it to.',
    tag: 'End of Program',
    image: '/images/process/step-5.png',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 01-.982-3.172M9.497 14.25a7.454 7.454 0 00.981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 007.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 002.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 012.916.52 6.003 6.003 0 01-5.395 4.972m0 0a6.726 6.726 0 01-2.749 1.35m0 0a6.772 6.772 0 01-3.044 0" />
      </svg>
    ),
  },
];

export default function ServicesProcess() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const startTimeRef = useRef(Date.now());
  const DURATION = 6000;

  const handleStep = (idx: number) => {
    setActiveIndex(idx);
    startTimeRef.current = Date.now();
    setProgress(0);
  };

  useEffect(() => {
    let raf: number;
    startTimeRef.current = Date.now();
    const tick = () => {
      const elapsed = Date.now() - startTimeRef.current;
      const p = Math.min((elapsed / DURATION) * 100, 100);
      setProgress(p);
      if (p >= 100) setActiveIndex((prev) => (prev + 1) % STEPS.length);
      else raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [activeIndex]);

  return (
    <section
      id="process"
      className="relative z-10 py-24 lg:py-32 bg-[#080808] border-t border-white/[0.04]"
      aria-label="Coaching onboarding process"
    >
      <div className="max-w-[1600px] mx-auto px-6 lg:px-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16 lg:mb-20"
        >
          <div className="flex items-center gap-4 mb-5">
            <div className="w-10 h-px bg-accent-green" />
            <span className="text-[11px] font-black uppercase tracking-[0.35em] text-accent-green">
              How It Works
            </span>
          </div>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <h2
              className="font-display font-black leading-tight tracking-tight text-white max-w-xl"
              style={{ fontSize: 'clamp(2.4rem, 5vw, 4rem)' }}
            >
              From Application to{' '}
              <em className="not-italic text-accent-green">Transformation</em>
            </h2>
            <CTAButton href="/#contact">
              Start the Process
            </CTAButton>
          </div>
        </motion.div>

        {/* Desktop accordion cards */}
        <div className="hidden md:flex flex-row gap-4 xl:gap-5 h-[500px] lg:h-[560px]">
          {STEPS.map((step, i) => {
            const isActive = activeIndex === i;
            return (
              <motion.div
                key={step.number}
                onClick={() => handleStep(i)}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                className={`group relative flex flex-col h-full border rounded-[1.75rem] p-6 lg:p-8 cursor-pointer overflow-hidden transition-all duration-[700ms] ease-[cubic-bezier(0.25,1,0.3,1)] ${
                  isActive
                    ? 'flex-[14] min-w-[280px] bg-[#101010] border-white/10'
                    : 'flex-[3] min-w-[72px] lg:min-w-[100px] bg-white/[0.015] border-white/[0.05] opacity-55 hover:opacity-90 hover:bg-white/[0.03]'
                }`}
              >
                {/* Progress bar */}
                <div className="absolute top-6 bottom-6 left-0 w-1.5 bg-white/5 rounded-r-full overflow-hidden">
                  <div
                    className="w-full bg-accent-green transition-none"
                    style={{ height: isActive ? `${progress}%` : '0%' }}
                  />
                </div>

                <div className="pl-4 h-full flex flex-col">
                  {/* Step icon + number */}
                  <div className="flex items-center gap-3 mb-4">
                    <span className={`font-display font-black text-3xl tracking-tight transition-colors duration-500 ${isActive ? 'text-accent-green' : 'text-white/20'}`}>
                      {step.number}
                    </span>
                    <div className={`transition-all duration-500 ${isActive ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
                      <div className="w-8 h-8 rounded-xl bg-accent-green/10 border border-accent-green/25 text-accent-green flex items-center justify-center">
                        {step.icon}
                      </div>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className={`font-display font-bold leading-snug transition-colors duration-500 mb-3 ${isActive ? 'text-white text-lg lg:text-xl' : 'text-white/50 text-sm line-clamp-3'}`}>
                    {step.title}
                  </h3>

                  {/* Expanded content */}
                  <div className={`flex flex-col flex-grow overflow-hidden transition-all duration-[700ms] ease-[cubic-bezier(0.25,1,0.3,1)] ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8 h-0'}`}>
                    <p className="text-white/40 text-sm leading-relaxed mb-6 max-w-[85%]">
                      {step.description}
                    </p>
                    <div className="mt-auto w-full h-[180px] xl:h-[220px] rounded-2xl bg-[#080808] border border-white/[0.06] relative overflow-hidden">
                      <Image
                        src={step.image}
                        alt={step.title}
                        fill
                        sizes="(max-width: 1024px) 40vw, 25vw"
                        className={`object-cover transition-all duration-[700ms] ${isActive ? 'opacity-60 scale-100' : 'opacity-20 scale-110'}`}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/10 to-transparent z-10" />
                      <span className="text-[10px] font-black uppercase tracking-[0.25em] text-accent-green absolute bottom-4 left-4 z-20">
                        {step.tag}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Mobile vertical list */}
        <div className="md:hidden flex flex-col gap-5">
          {STEPS.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.07 }}
              className="relative flex flex-col bg-white/[0.02] border border-white/[0.06] rounded-[1.75rem] p-6 overflow-hidden"
            >
              <div className="absolute top-5 bottom-5 left-0 w-1.5 bg-accent-green rounded-r-full" />
              <div className="pl-5">
                <div className="flex items-center gap-3 mb-3">
                  <span className="font-display font-black text-2xl text-accent-green">{step.number}</span>
                  <div className="w-7 h-7 rounded-lg bg-accent-green/10 border border-accent-green/20 text-accent-green flex items-center justify-center">
                    {step.icon}
                  </div>
                  <span className="text-[9px] font-black uppercase tracking-[0.25em] text-white/25 ml-auto">{step.tag}</span>
                </div>
                <h3 className="font-display font-bold text-white text-lg mb-2">{step.title}</h3>
                <p className="text-white/40 text-sm leading-relaxed mb-5">{step.description}</p>
                <div className="w-full h-[180px] rounded-2xl bg-[#080808] border border-white/[0.06] relative overflow-hidden">
                  <Image src={step.image} alt={step.title} fill sizes="100vw" className="object-cover opacity-60" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent z-10" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
