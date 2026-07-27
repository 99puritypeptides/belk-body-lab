'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { MapPinIcon } from '@heroicons/react/24/outline';

interface CommunityLifestyleProps {
  title: string;
  content: string;
  landmarks: string[];
  name: string;
}

export default function CommunityLifestyle({ title, content, landmarks, name }: CommunityLifestyleProps) {
  return (
    <section className="py-24 md:py-32 bg-[#050505] overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-jumpshot text-white text-4xl md:text-5xl lg:text-6xl uppercase mb-8 leading-none">
              {title}
            </h2>
            <p className="text-white/60 text-lg leading-relaxed font-medium mb-12">
              {content}
            </p>
            
            <div className="space-y-6">
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-accent-green">Localized Landmarks</p>
              <div className="flex flex-wrap gap-3">
                {landmarks.map((landmark) => (
                  <div key={landmark} className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white/40 text-xs font-bold">
                    <MapPinIcon className="w-3 h-3 text-accent-green" />
                    {landmark}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          <div className="relative group">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-white/[0.03] backdrop-blur-xl border border-white/10 p-12 md:p-16 rounded-[4rem] relative z-10 overflow-hidden"
            >
              {/* Subtle Noise/Texture overlay could be added here if globally available, 
                  otherwise we use a gradient to simulate depth */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/[0.05] to-transparent pointer-events-none" />
              
              <div className="relative z-10">
                <svg className="w-12 h-12 text-accent-green/20 mb-8" fill="currentColor" viewBox="0 0 32 32">
                  <path d="M10 8v8h6v-8h-6zm12 0v8h6v-8h-6z" />
                </svg>
                
                <h3 className="text-white text-3xl md:text-4xl font-display font-black uppercase leading-[1.1] mb-8 tracking-tight">
                  "Coaching that matches the <span className="text-accent-green">{name}</span> standard."
                </h3>
                
                <p className="text-white/50 text-lg leading-relaxed mb-12 font-medium">
                  We understand that residents of {name} don't just want a workout—they want a high-performance lifestyle protocol that integrates with their schedule, commute, and community.
                </p>
                
                <div className="flex items-center gap-6 pt-8 border-t border-white/10">
                  <div className="relative">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-accent-green to-accent-green/40 flex items-center justify-center font-black text-black text-xl shadow-lg shadow-accent-green/20 rotate-3 group-hover:rotate-0 transition-transform duration-500">
                      KB
                    </div>
                    <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-white rounded-full flex items-center justify-center shadow-lg shadow-black/50">
                      <div className="w-2 h-2 bg-accent-green rounded-full animate-pulse" />
                    </div>
                  </div>
                  <div>
                    <p className="text-white font-black uppercase tracking-widest text-sm">Kyle Belk</p>
                    <p className="text-accent-green/60 text-[10px] font-bold uppercase tracking-[0.3em]">Head Performance Architect</p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            {/* Enhanced Background Decoration */}
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-accent-green/10 blur-[100px] rounded-full pointer-events-none group-hover:bg-accent-green/20 transition-all duration-700" />
            <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-white/5 blur-[100px] rounded-full pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
}
