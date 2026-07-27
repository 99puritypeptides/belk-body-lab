'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import CTAButton from '@/components/ui/CTAButton';

interface CommunityHeroProps {
  h1: string;
  subheading: string;
  image: string;
  name: string;
  slug?: string;
}

export default function CommunityHero({ h1, subheading, image, name, slug }: CommunityHeroProps) {
  return (
    <section className="relative min-h-[80svh] w-full flex items-center justify-center overflow-hidden bg-[#050505] pt-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src={image}
          alt={`Elite Personal Training and Body Transformation in ${name} SC - Belk Body Lab`}
          fill
          className="object-cover brightness-[0.4] contrast-[1.1] transition-all duration-1000"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/40 to-transparent" />
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent-green/10 border border-accent-green/20 text-accent-green text-[10px] font-black uppercase tracking-[0.2em] mb-8">
            {name} Premium Fitness
          </span>
          <h1 className="font-jumpshot text-white leading-[0.85] uppercase mb-8 tracking-tighter max-w-6xl mx-auto text-balance"
              style={{ fontSize: 'clamp(2.5rem, 10vw, 8.5rem)' }}>
            {h1}
          </h1>
          <p className="text-white/50 text-base md:text-lg lg:text-xl font-medium max-w-2xl mx-auto mb-12">
            {subheading}
          </p>
          <div className="flex justify-center">
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group relative flex items-center gap-4 bg-accent-green px-8 py-4 rounded-full text-black font-black uppercase tracking-widest text-sm transition-all shadow-[0_0_40px_rgba(170,255,0,0.2)] hover:shadow-[0_0_60px_rgba(170,255,0,0.4)]"
            >
              Start Your Transformation
              <div className="w-8 h-8 rounded-full bg-black/10 flex items-center justify-center group-hover:translate-x-1 transition-transform">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* Floating Cards for Community Hero */}
      <div className="absolute inset-0 pointer-events-none z-20 hidden lg:block">
        <div className="absolute top-[30%] left-[5%] rotate-[-6deg]">
           <div className="p-4 rounded-2xl bg-black/40 backdrop-blur-xl border border-white/10 shadow-2xl flex items-center gap-4 min-w-[200px]">
              <div className="w-10 h-10 rounded-xl bg-accent-green/10 flex items-center justify-center">
                <svg className="w-5 h-5 text-accent-green" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
              </div>
              <div>
                <p className="text-white font-black text-xs uppercase tracking-tight">90-Day Results</p>
                <p className="text-white/40 text-[8px] font-bold uppercase tracking-widest">Guaranteed Protocol</p>
              </div>
           </div>
        </div>
        
        <div className="absolute bottom-[20%] right-[5%] rotate-[4deg]">
           <div className="p-4 rounded-2xl bg-black/40 backdrop-blur-xl border border-white/10 shadow-2xl flex items-center gap-4 min-w-[200px]">
              <div className="w-10 h-10 rounded-xl bg-accent-green/10 flex items-center justify-center">
                <svg className="w-5 h-5 text-accent-green" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>
              <div>
                <p className="text-white font-black text-xs uppercase tracking-tight">24/7 Access</p>
                <p className="text-white/40 text-[8px] font-bold uppercase tracking-widest">Elite Support</p>
              </div>
           </div>
        </div>
      </div>

      {/* Social Proof Footer - Matching Homepage */}
      <motion.div 
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 right-10 flex items-center gap-6 py-4 px-6 rounded-2xl bg-white/[0.02] border border-white/5 backdrop-blur-xl z-50 hidden xl:flex"
      >
        <div className="flex -space-x-3">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="w-8 h-8 rounded-full border-2 border-black overflow-hidden bg-gray-800">
               <Image src={`https://i.pravatar.cc/100?img=${i + 15}`} alt="Client" width={32} height={32} />
            </div>
          ))}
        </div>
        <div className="h-4 w-px bg-white/10" />
        <p className="text-[10px] font-black uppercase tracking-widest text-white/40">
           Trusted by <span className="text-white">500+ Elite</span>
        </p>
      </motion.div>

      {/* Decorative Grid Overlay */}
      <div className="absolute inset-0 z-[1] pointer-events-none opacity-[0.03]" 
           style={{ backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)`, backgroundSize: '40px 40px, 40px 40px, 40px 40px' }} 
      />
    </section>
  );
}
