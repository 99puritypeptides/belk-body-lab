'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { User, Globe, Beaker, Flame } from 'lucide-react';

export default function FeaturedPrograms() {
  const programs = [
    {
      title: '1-ON-1 PERSONAL TRAINING',
      desc: 'Exclusive, high-intensity coaching at our private facility or your high-end home gym.',
      icon: User,
      color: 'accent-green'
    },
    {
      title: 'ONLINE COACHING',
      desc: 'Elite guidance and accountability from anywhere in the world. Perfect for busy travelers.',
      icon: Globe,
      color: 'white'
    },
    {
      title: 'NUTRITION SYSTEMS',
      desc: 'Data-driven metabolic engineering tailored to your specific physiology and goals.',
      icon: Beaker,
      color: 'white'
    },
    {
      title: 'BODY TRANSFORMATION',
      desc: 'Our flagship 90-day radical change program focused on fat loss and lean muscle growth.',
      icon: Flame,
      color: 'accent-green'
    }
  ];

  return (
    <section className="py-24 md:py-32 bg-[#080808]">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="text-accent-green font-bold uppercase tracking-[0.3em] text-[10px] mb-4">Select Your Pathway</p>
          <h2 className="font-jumpshot text-white text-4xl md:text-5xl lg:text-7xl uppercase mb-6 tracking-tight">FEATURED PROGRAMS</h2>
          <div className="h-1 w-24 bg-accent-green mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {programs.map((program, index) => (
            <motion.div
              key={program.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group p-10 rounded-[3rem] bg-white/[0.02] backdrop-blur-xl border border-white/5 hover:border-accent-green/30 transition-all duration-500 flex flex-col h-full relative overflow-hidden"
            >
              {/* Subtle Glow */}
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-accent-green/5 blur-[50px] rounded-full pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              
              <div className={`w-16 h-16 rounded-2xl ${program.color === 'accent-green' ? 'bg-accent-green/10 text-accent-green border-accent-green/20' : 'bg-white/10 text-white border-white/10'} border flex items-center justify-center mb-10 group-hover:scale-110 transition-transform duration-500 shadow-xl relative z-10`}>
                <program.icon className="w-8 h-8" />
              </div>

              <h3 className="text-white font-display font-black text-xl mb-6 leading-tight tracking-tight uppercase group-hover:text-accent-green transition-colors duration-500 relative z-10">
                {program.title}
              </h3>
              
              <p className="text-white/50 text-base leading-relaxed font-medium mb-10 flex-grow relative z-10">
                {program.desc}
              </p>

              <div className="h-px w-full bg-white/10 group-hover:bg-accent-green/40 transition-colors duration-500 relative z-10" />
              
              <div className="mt-8 flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.3em] text-white/40 group-hover:text-white transition-colors duration-500 relative z-10">
                Learn More
                <div className="w-6 h-px bg-white/10 group-hover:bg-accent-green transition-all duration-500" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
