'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

export default function CommunitiesHubHero() {
  const t = useTranslations('communities.hero');

  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-[#050505]">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&q=80&w=2000"
          alt="Belk Body Lab Communities"
          fill
          className="object-cover brightness-[0.2] grayscale"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/60 to-transparent" />
      </div>

      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-1">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-accent-green/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-accent-green/5 blur-[120px] rounded-full" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="font-jumpshot text-white text-[10vw] md:text-7xl lg:text-8xl leading-none uppercase mb-6 tracking-tight text-balance">
              {t('title')}
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-accent-green font-bold uppercase tracking-[0.3em] text-xs md:text-sm mb-8">
              {t('subtitle')}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <p className="text-white/40 text-sm md:text-base leading-relaxed max-w-2xl mx-auto font-medium">
              {t('description')}
            </p>
          </motion.div>
        </div>
      </div>
      {/* Social Proof Footer */}
      <motion.div 
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-10 right-10 flex items-center gap-6 py-4 px-6 rounded-2xl bg-white/[0.02] border border-white/5 backdrop-blur-xl z-50 hidden xl:flex"
      >
        <div className="flex -space-x-3">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="w-8 h-8 rounded-full border-2 border-black overflow-hidden bg-gray-800">
               <Image src={`https://i.pravatar.cc/100?img=${i + 20}`} alt="Client" width={32} height={32} />
            </div>
          ))}
        </div>
        <div className="h-4 w-px bg-white/10" />
        <p className="text-[10px] font-black uppercase tracking-widest text-white/40">
           Trusted by <span className="text-white">500+ Elite</span>
        </p>
      </motion.div>

      {/* Decorative Grid Overlay */}
      <div className="absolute inset-0 z-[1] bg-[url('/images/grid.png')] opacity-[0.03] pointer-events-none" />
    </section>
  );
}
