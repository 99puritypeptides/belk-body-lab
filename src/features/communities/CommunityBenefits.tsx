'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

interface CommunityBenefitsProps {
  title: string;
  items: {
    title: string;
    description: string;
  }[];
}

export default function CommunityBenefits({ title, items }: CommunityBenefitsProps) {
  return (
    <section className="py-24 md:py-32 bg-[#080808]">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-accent-green font-bold uppercase tracking-[0.3em] text-[10px] mb-4">The Result-Driven Approach</p>
            <h2 className="font-jumpshot text-white text-4xl md:text-5xl lg:text-6xl uppercase mb-6">{title}</h2>
            <div className="h-1 w-20 bg-accent-green mx-auto" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {items.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group p-10 rounded-[3rem] bg-white/[0.02] backdrop-blur-xl border border-white/5 hover:border-accent-green/30 transition-all duration-500 hover:bg-white/[0.04]"
              >
                <div className="flex items-start gap-8">
                  <div className="relative shrink-0">
                    <div className="w-14 h-14 rounded-2xl bg-black/40 backdrop-blur-xl flex items-center justify-center border border-white/10 group-hover:border-accent-green/50 transition-colors duration-500 shadow-xl">
                      <CheckCircle className="w-7 h-7 text-accent-green group-hover:scale-110 transition-transform duration-500" />
                    </div>
                    {/* Pulsing dot */}
                    <div className="absolute -top-1 -right-1 w-3 h-3 bg-accent-green rounded-full blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                  <div className="space-y-4">
                    <h4 className="text-white font-display font-black text-2xl uppercase tracking-tight group-hover:text-accent-green transition-colors duration-500">
                      {item.title}
                    </h4>
                    <p className="text-white/50 text-base leading-relaxed font-medium">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
