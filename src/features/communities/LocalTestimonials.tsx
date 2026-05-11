'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

interface LocalTestimonialsProps {
  testimonials: {
    quote: string;
    author: string;
    result: string;
  }[];
  name: string;
}

export default function LocalTestimonials({ testimonials, name }: LocalTestimonialsProps) {
  return (
    <section className="py-24 md:py-32 bg-[#050505]">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="text-accent-green font-bold uppercase tracking-[0.3em] text-[10px] mb-4">Success Stories</p>
          <h2 className="font-jumpshot text-white text-4xl md:text-5xl lg:text-7xl uppercase mb-6 tracking-tight">{name} TRANSFORMATIONS</h2>
          <div className="h-1 w-24 bg-accent-green mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group p-10 md:p-14 rounded-[4rem] bg-white/[0.02] backdrop-blur-xl border border-white/5 relative overflow-hidden flex flex-col hover:bg-white/[0.04] transition-all duration-500 hover:-translate-y-2"
            >
              {/* Glass shine effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/[0.05] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="flex justify-between items-start mb-10 relative z-10">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 text-accent-green fill-accent-green" />
                  ))}
                </div>
                <svg className="w-10 h-10 text-white/[0.05] group-hover:text-accent-green/10 transition-colors duration-500" fill="currentColor" viewBox="0 0 32 32">
                  <path d="M10 8v8h6v-8h-6zm12 0v8h6v-8h-6z" />
                </svg>
              </div>
              
              <p className="text-white/80 text-xl md:text-2xl font-medium leading-relaxed mb-12 italic relative z-10 font-display">
                "{testimonial.quote}"
              </p>
              
              <div className="mt-auto flex items-end justify-between relative z-10">
                <div>
                  <p className="text-white font-black uppercase tracking-[0.2em] text-[10px] mb-2 text-white/40">Verified Client</p>
                  <p className="text-white font-black uppercase tracking-widest text-sm">{testimonial.author}</p>
                </div>
                <div className="text-right">
                  <div className="px-4 py-1.5 rounded-full bg-accent-green/10 border border-accent-green/20">
                    <p className="text-accent-green font-black text-[10px] uppercase tracking-[0.2em]">{testimonial.result}</p>
                  </div>
                </div>
              </div>
              
              {/* Enhanced Decoration */}
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-accent-green/10 blur-[60px] rounded-full pointer-events-none group-hover:bg-accent-green/20 transition-all duration-700" />
              <div className="absolute -top-10 -left-10 w-32 h-32 bg-white/5 blur-[50px] rounded-full pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
