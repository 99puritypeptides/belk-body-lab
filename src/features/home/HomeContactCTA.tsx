'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Link } from '@/i18n/navigation';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

export default function HomeContactCTA() {
  const t = useTranslations('nav'); // Reusing some nav keys or general keys

  return (
    <section className="relative py-32 lg:py-48 overflow-hidden bg-[#050505]">
      {/* Background Ambience */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-[1400px] pointer-events-none">
        <div className="absolute top-0 right-[-10%] w-[60%] h-[70%] rounded-full bg-accent-green/[0.04] blur-[150px]" />
        <div className="absolute bottom-0 left-[-10%] w-[60%] h-[70%] rounded-full bg-blue-500/[0.03] blur-[150px]" />
      </div>

      <div className="max-w-[1600px] mx-auto px-6 lg:px-12 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-12"
        >
          <div className="flex flex-col items-center gap-6">
            <div className="w-16 h-[1px] bg-accent-green" />
            <span className="text-[11px] font-black uppercase tracking-[0.5em] text-accent-green">
              Limited Coaching Availability
            </span>
          </div>

          <h2 className="text-white font-display font-black leading-[0.85] tracking-tighter uppercase" style={{ fontSize: 'clamp(3rem, 12vw, 10rem)' }}>
            Elevate Your <br />
            <span className="text-accent-green">Potential.</span>
          </h2>

          <p className="text-white/40 text-lg md:text-2xl font-light max-w-2xl mx-auto leading-relaxed">
            Ready to engineer your physique with the elite? Start your consultation and unlock a personalized protocol designed for world-class results.
          </p>

          <div className="pt-10">
            <Link 
              href="/contact"
              className="group relative inline-flex items-center gap-6 px-12 py-7 bg-white text-black rounded-full overflow-hidden transition-all hover:scale-[1.05] active:scale-[0.98] shadow-[0_20px_50px_rgba(255,255,255,0.1)]"
            >
              <span className="relative z-10 text-[13px] font-black uppercase tracking-[0.3em]">
                {t('getStarted')}
              </span>
              <div className="relative z-10 w-10 h-10 rounded-full bg-black flex items-center justify-center text-white group-hover:rotate-45 transition-transform duration-500">
                <ArrowRightIcon className="w-5 h-5" />
              </div>
              <div className="absolute inset-0 bg-accent-green translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Decorative Ghost Text */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden pointer-events-none select-none opacity-[0.02]">
        <span className="text-white font-display font-black text-[25vw] leading-none uppercase translate-y-1/3 block">
          BELKBODYLAB
        </span>
      </div>
    </section>
  );
}
