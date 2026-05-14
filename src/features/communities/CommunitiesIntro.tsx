'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

export default function CommunitiesIntro() {
  const t = useTranslations('communities.intro');

  return (
    <section className="py-20 md:py-32 bg-[#050505] overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16 md:gap-24">
          <div className="w-full lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="font-jumpshot text-white text-5xl md:text-6xl uppercase mb-8 leading-none">
                {t('title')}
              </h2>
              <div className="space-y-6">
                <p className="text-white/60 text-lg leading-relaxed font-medium">
                  {t('content')}
                </p>
                <div className="h-px w-24 bg-accent-green/50" />
                <p className="text-white/40 text-sm italic">
                  Serving all of South Carolina with elite-level personal training and body transformation coaching.
                </p>
              </div>
            </motion.div>
          </div>

          <div className="w-full lg:w-1/2 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative aspect-[4/3] rounded-[2rem] overflow-hidden border border-white/10"
            >
              <Image
                src="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&q=80&w=1000"
                alt="Belk Body Lab Training Environment"
                fill
                className="object-cover grayscale hover:grayscale-0 transition-all duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              
              <div className="absolute bottom-8 left-8 right-8">
                <div className="bg-black/60 backdrop-blur-xl border border-white/10 p-6 rounded-2xl">
                  <p className="text-white font-bold text-sm uppercase tracking-widest mb-1">Elite Infrastructure</p>
                  <p className="text-white/40 text-xs font-medium uppercase tracking-tight">Science-Backed Performance Environment</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
