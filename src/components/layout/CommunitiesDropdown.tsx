'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from '@/i18n/navigation';
import { ChevronDownIcon } from '@heroicons/react/24/outline';
import { useTranslations } from 'next-intl';

interface Community {
  name: string;
  slug: string;
}

export default function CommunitiesDropdown({ pathname }: { pathname: string }) {
  const t = useTranslations('communities');
  const [isOpen, setIsOpen] = useState(false);

  const communityKeys = [
    'charleston',
    'mountPleasant',
    'danielIsland',
    'westAshley',
    'summerville',
    'johnsIsland',
    'isleOfPalms',
    'northCharleston',
    'jamesIsland',
    'gooseCreek'
  ];

  const tGrid = useTranslations('communities.grid');

  return (
    <div 
      className="relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button
        className={`flex items-center gap-2 font-display font-black text-[11px] uppercase tracking-[0.2em] transition-all hover:text-accent-green ${
          isOpen || pathname.includes('/communities') 
            ? 'text-white' 
            : 'text-white/60'
        }`}
      >
        {t('navTitle')}
        <ChevronDownIcon className={`w-3 h-3 transition-transform duration-500 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 15, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.98 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="absolute top-full left-1/2 -translate-x-1/2 pt-6 z-[600]"
          >
            <div className="bg-[#0A0A0A]/95 backdrop-blur-3xl border border-white/20 rounded-[2.5rem] p-8 md:p-10 min-w-[540px] shadow-[0_40px_100px_rgba(0,0,0,0.9)] overflow-hidden relative">
              {/* Subtle White Inner Glow for depth */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] to-transparent pointer-events-none" />
              
              {/* Decorative Glow */}
              <div className="absolute -top-20 -right-20 w-64 h-64 bg-accent-green/5 blur-[100px] rounded-full pointer-events-none" />
              
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-8 pb-6 border-b border-white/10">
                  <div>
                    <h4 className="text-white font-display font-black text-[9px] uppercase tracking-[0.35em] mb-1">Local Communities</h4>
                    <p className="text-white/40 text-[9px] font-medium uppercase tracking-[0.15em]">Elite Coaching Across the Lowcountry</p>
                  </div>
                  <Link 
                    href="/communities"
                    onClick={() => setIsOpen(false)}
                    className="text-accent-green font-black text-[9px] uppercase tracking-[0.2em] hover:brightness-150 transition-all"
                  >
                    Explore Hub →
                  </Link>
                </div>

                <div className="grid grid-cols-2 gap-x-8 gap-y-1">
                  {communityKeys.map((key) => (
                    <Link
                      key={key}
                      href={tGrid(`${key}.slug`) as any}
                      onClick={() => setIsOpen(false)}
                      className="group flex flex-col p-3.5 rounded-2xl hover:bg-white/[0.04] border border-transparent hover:border-white/10 transition-all duration-500"
                    >
                      <span className="text-white font-display font-black text-[13px] uppercase tracking-[0.15em] group-hover:text-accent-green transition-colors leading-tight">
                        {tGrid(`${key}.name`)}
                      </span>
                      <span className="text-white/30 text-[8px] font-bold uppercase tracking-[0.2em] mt-1.5 group-hover:text-white/50 transition-colors leading-relaxed">
                        {tGrid(`${key}.intent`)}
                      </span>
                    </Link>
                  ))}
                </div>

                <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between">
                   <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-accent-green shadow-[0_0_12px_rgba(170,255,0,0.4)] animate-pulse" />
                      <span className="text-white/50 text-[9px] font-black uppercase tracking-[0.25em]">Live Training Availability</span>
                   </div>
                   <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10">
                      <span className="text-white/60 font-black text-[8px] uppercase tracking-[0.15em]">Charleston, SC</span>
                   </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
