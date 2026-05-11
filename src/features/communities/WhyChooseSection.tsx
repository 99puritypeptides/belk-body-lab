'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck } from 'lucide-react';

interface WhyChooseSectionProps {
  title: string;
  points: string[];
}

export default function WhyChooseSection({ title, points }: WhyChooseSectionProps) {
  return (
    <section className="py-24 md:py-32 bg-[#050505]">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto bg-gradient-to-br from-white/[0.03] to-transparent border border-white/5 rounded-[3rem] p-8 md:p-20 overflow-hidden relative">
          {/* Decorative Glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent-green/5 blur-[100px] rounded-full" />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <p className="text-accent-green font-bold uppercase tracking-[0.3em] text-[10px] mb-6">The Standard of Excellence</p>
              <h2 className="font-jumpshot text-white text-4xl md:text-5xl lg:text-6xl uppercase leading-none mb-8">
                {title}
              </h2>
              <p className="text-white/40 text-lg font-medium leading-relaxed">
                We provide a premium coaching experience that transcends standard personal training. Our focus is on long-term health, radical body composition changes, and sustainable high performance.
              </p>
            </motion.div>

            <div className="space-y-4">
              {points.map((point, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-4 p-4 rounded-2xl bg-white/[0.02] border border-white/5"
                >
                  <ShieldCheck className="w-6 h-6 text-accent-green shrink-0" />
                  <span className="text-white/80 font-bold text-sm md:text-base">{point}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
