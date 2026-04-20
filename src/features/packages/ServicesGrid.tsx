'use client';

import React from 'react';
import { motion, type Variants } from 'framer-motion';
import { Link } from '@/i18n/navigation';

const SERVICES = [
  {
    id: 'online-coaching',
    eyebrow: 'Most Popular',
    title: 'Online Coaching',
    description: 'Full-stack coaching delivered remotely. You get a custom program, nutrition plan, and direct access to Kyle — wherever you are in the world.',
    includes: [
      'Custom training program (12–16 weeks)',
      'Full macro & nutrition plan',
      'Bi-weekly video check-ins with Kyle',
      'WhatsApp support between sessions',
      'Real-time plan adjustments',
      'Progress tracking & analytics',
    ],
    highlight: true,
    badge: 'Best Results',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
      </svg>
    ),
  },
  {
    id: 'one-on-one',
    eyebrow: 'In-Person',
    title: '1-on-1 Personal Training',
    description: 'Train side-by-side with Kyle in Atlanta, GA. Real-time form correction, progressive overload programming, and accountability that doesn\'t quit.',
    includes: [
      '3–5 sessions per week in-gym',
      'Form correction every session',
      'Progressive strength protocols',
      'Post-session nutrition guidance',
      'Weekly body composition check',
      'Priority scheduling',
    ],
    highlight: false,
    badge: 'Atlanta, GA',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
      </svg>
    ),
  },
  {
    id: 'workout-plan',
    eyebrow: 'Self-Paced',
    title: 'Custom Workout Plan',
    description: 'A fully individualized training program delivered to you — no ongoing calls required. Perfect for experienced lifters who want elite programming.',
    includes: [
      '8–12 week periodized program',
      'Exercise video demonstrations',
      'Rep, set & tempo prescriptions',
      'Deload week built in',
      'One email Q&A round included',
      'Digital delivery within 48 hrs',
    ],
    highlight: false,
    badge: 'Entry Point',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25z" />
      </svg>
    ),
  },
  {
    id: 'nutrition-coaching',
    eyebrow: 'Standalone',
    title: 'Nutrition Coaching',
    description: 'Your training is only 30% of the equation. This standalone service fixes your diet with precision macro targets, flexible meal strategies, and real-world sustainability.',
    includes: [
      'Full metabolic rate assessment',
      'Custom macro & calorie targets',
      'Flexible meal structure (not rigid)',
      'Monthly nutrition recalibration',
      'Supplement stack guidance',
      'Grocery list & meal prep guide',
    ],
    highlight: false,
    badge: 'Standalone or Add-On',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
      </svg>
    ),
  },
];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] },
  }),
};

export default function ServicesGrid() {
  return (
    <section
      id="services"
      className="relative z-10 py-24 lg:py-32 bg-[#070707]"
      aria-label="Coaching services breakdown"
    >
      {/* Section header */}
      <div className="max-w-[1600px] mx-auto px-6 lg:px-10">
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
              What You Get
            </span>
          </div>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <h2
              className="font-display font-black leading-tight tracking-tight text-white max-w-xl"
              style={{ fontSize: 'clamp(2.4rem, 5vw, 4rem)' }}
            >
              Services Built Around{' '}
              <em className="not-italic text-accent-green">Your Goals</em>
            </h2>
            <p className="text-white/40 text-base font-light leading-relaxed max-w-sm lg:text-right">
              Every service is a system, not a suggestion. Pick what fits your situation.
            </p>
          </div>
        </motion.div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6">
          {SERVICES.map((svc, i) => (
            <motion.div
              key={svc.id}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className={`group relative flex flex-col rounded-[2rem] border p-8 lg:p-10 transition-all duration-500 hover:-translate-y-1 ${
                svc.highlight
                  ? 'bg-[#0f1a00] border-accent-green/40 shadow-[0_0_60px_rgba(170,255,0,0.07)]'
                  : 'bg-white/[0.02] border-white/[0.06] hover:border-white/15 hover:bg-white/[0.04]'
              }`}
            >
              {/* Top accent on featured */}
              {svc.highlight && (
                <div className="absolute top-0 left-[15%] right-[15%] h-px bg-gradient-to-r from-transparent via-accent-green/70 to-transparent" />
              )}

              {/* Card header */}
              <div className="flex items-start justify-between gap-4 mb-6">
                <div>
                  <p className="text-[10px] font-black uppercase tracking-[0.3em] text-white/30 mb-2">
                    {svc.eyebrow}
                  </p>
                  <h3
                    className={`font-display font-black leading-tight ${svc.highlight ? 'text-accent-green' : 'text-white'}`}
                    style={{ fontSize: 'clamp(1.4rem, 2.5vw, 1.8rem)' }}
                  >
                    {svc.title}
                  </h3>
                </div>
                <div
                  className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 border transition-colors duration-300 ${
                    svc.highlight
                      ? 'bg-accent-green/10 border-accent-green/30 text-accent-green'
                      : 'bg-white/5 border-white/10 text-white/50 group-hover:border-white/20 group-hover:text-white/80'
                  }`}
                >
                  {svc.icon}
                </div>
              </div>

              <p className="text-white/40 text-sm lg:text-base font-light leading-relaxed mb-8">
                {svc.description}
              </p>

              {/* Includes list */}
              <div className="flex-1 mb-8">
                <p className="text-[10px] font-black uppercase tracking-[0.25em] text-white/20 mb-4">
                  What&apos;s Included
                </p>
                <ul className="flex flex-col gap-2.5">
                  {svc.includes.map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <div
                        className={`w-4 h-4 rounded-full flex items-center justify-center shrink-0 ${
                          svc.highlight ? 'bg-accent-green' : 'bg-white/10'
                        }`}
                      >
                        <svg
                          className={`w-2.5 h-2.5 ${svc.highlight ? 'text-black' : 'text-white/60'}`}
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={3}
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-sm text-white/60 font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA */}
              <Link
                href="/#contact"
                className={`flex items-center justify-between w-full px-6 py-4 rounded-xl font-black text-xs uppercase tracking-[0.2em] transition-all duration-300 group/btn ${
                  svc.highlight
                    ? 'bg-accent-green text-black hover:bg-[#c8ff33] shadow-[0_4px_24px_rgba(170,255,0,0.2)]'
                    : 'border border-white/10 bg-white/[0.04] text-white/60 hover:bg-white hover:border-white hover:text-black'
                }`}
              >
                Apply for {svc.title}
                <svg
                  className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
