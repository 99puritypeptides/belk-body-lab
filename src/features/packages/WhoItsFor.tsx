'use client';

import React from 'react';
import { motion } from 'framer-motion';

const SEGMENTS = [
  {
    tag: 'For Beginners',
    headline: 'Starting from zero.',
    body: "You've never had a real program. You don't know where to start. That's fine — Kyle built his entire coaching system around clients who've tried everything and seen nothing. You get structure, education, and results from week one.",
    accent: '#60A5FA',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
      </svg>
    ),
  },
  {
    tag: 'For Fat Loss',
    headline: 'Cut the fat. Keep the muscle.',
    body: "Crash diets kill muscle. Kyle's fat loss protocols use data-driven caloric deficits, strategic cardio, and progressive strength work to torch body fat while keeping you strong. No starvation, no rebound.",
    accent: '#AAFF00',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z" />
      </svg>
    ),
  },
  {
    tag: 'For Muscle Gain',
    headline: 'Build size. Build strength.',
    body: "Skinny-fat, hardgainer, plateau-stuck — Kyle has coached every body type. His hypertrophy protocols are calibrated for maximum muscle stimulus with minimum junk volume. Every rep has a reason.",
    accent: '#F97316',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
  },
  {
    tag: 'For Busy Professionals',
    headline: 'No time. Real results.',
    body: "Kyle's clients include executives, parents, and shift workers. Your plan is built around your calendar — not the other way around. 45-minute sessions, smart nutrition, zero excuses for being too busy.",
    accent: '#C084FC',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

export default function WhoItsFor() {
  return (
    <section
      id="who-its-for"
      className="relative z-10 py-24 lg:py-32 bg-[#080808] border-t border-white/[0.04]"
      aria-label="Who this coaching is for"
    >
      <div className="max-w-[1600px] mx-auto px-6 lg:px-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16 lg:mb-20 text-center"
        >
          <div className="flex justify-center items-center gap-4 mb-5">
            <div className="w-10 h-px bg-accent-green" />
            <span className="text-[11px] font-black uppercase tracking-[0.35em] text-accent-green">
              Who It&apos;s For
            </span>
            <div className="w-10 h-px bg-accent-green" />
          </div>
          <h2
            className="font-display font-black leading-tight tracking-tight text-white"
            style={{ fontSize: 'clamp(2.4rem, 5vw, 4rem)' }}
          >
            Built for Where{' '}
            <em className="not-italic text-accent-green">You Are Right Now</em>
          </h2>
          <p className="text-white/40 text-base font-light leading-relaxed max-w-lg mx-auto mt-5">
            There&apos;s no universal program. Kyle meets you where you are and engineers
            the path to where you want to be.
          </p>
        </motion.div>

        {/* Segment cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {SEGMENTS.map((seg, i) => (
            <motion.div
              key={seg.tag}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: i * 0.09, ease: [0.16, 1, 0.3, 1] }}
              className="group relative flex flex-col gap-5 p-7 rounded-[1.75rem] border border-white/[0.05] bg-white/[0.02] hover:border-white/15 hover:bg-white/[0.04] transition-all duration-400 cursor-default"
            >
              {/* Left color bar */}
              <div
                className="absolute top-6 bottom-6 left-0 w-[3px] rounded-r-full opacity-50 group-hover:opacity-100 transition-opacity"
                style={{ background: seg.accent }}
              />

              {/* Icon */}
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center border transition-colors duration-300"
                style={{
                  background: `${seg.accent}12`,
                  borderColor: `${seg.accent}25`,
                  color: seg.accent,
                }}
              >
                {seg.icon}
              </div>

              {/* Text */}
              <div>
                <p className="text-[10px] font-black uppercase tracking-[0.25em] text-white/25 mb-2">
                  {seg.tag}
                </p>
                <h3 className="font-display font-black text-white leading-snug text-lg mb-3">
                  {seg.headline}
                </h3>
                <p className="text-sm text-white/35 font-light leading-relaxed">
                  {seg.body}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
