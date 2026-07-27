'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface CommunityWhoItsForProps {
  title: string;
  items: string[];
}

export default function CommunityWhoItsFor({ title, items }: CommunityWhoItsForProps) {
  return (
    <section className="py-24 md:py-32 bg-[#050505]">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-24">
          <div className="w-full md:w-1/3">
            <motion.h2
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="font-jumpshot text-white text-5xl lg:text-6xl uppercase leading-none"
            >
              {title}
            </motion.h2>
          </div>
          <div className="w-full md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {items.map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="px-8 py-6 rounded-2xl bg-white/[0.02] border border-white/5 flex items-center gap-4 group hover:bg-white/[0.04] transition-all"
              >
                <div className="w-2 h-2 rounded-full bg-accent-green" />
                <span className="text-white font-bold text-sm uppercase tracking-widest">{item}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
