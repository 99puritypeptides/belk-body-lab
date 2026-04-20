'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Link } from '@/i18n/navigation';
import CTAButton from '@/components/ui/CTAButton';

export default function BlogCTA() {
  return (
    <section className="relative py-24 lg:py-32 bg-[#050505] overflow-hidden">
      <div className="container-custom px-6 lg:px-10 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative h-[600px] lg:h-[700px] w-full rounded-[3rem] lg:rounded-[4rem] overflow-hidden border border-white/5 shadow-2xl group"
        >
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/blog_cta_redesign_bg_1776324593741.png"
              alt="Coach Kyle Belk Cinematic"
              fill
              className="object-cover transition-transform duration-1000 group-hover:scale-105"
              priority
            />
            {/* Cinematic Overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors duration-700" />
          </div>

          {/* Floating Glass Content Card */}
          <div className="absolute bottom-6 lg:bottom-12 left-1/2 -translate-x-1/2 w-[92%] lg:w-[94%] z-20">
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative p-8 lg:p-16 rounded-[2.5rem] lg:rounded-[3.5rem] overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-24"
            >
              {/* Glass Background */}
              <div className="absolute inset-0 bg-white/[0.03] backdrop-blur-[40px] border border-white/10 shadow-[0_32px_64px_rgba(0,0,0,0.5)]" />
              <div className="absolute inset-0 bg-gradient-to-br from-white/[0.05] to-transparent pointer-events-none" />

              {/* Content Side */}
              <div className="relative z-10 text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start gap-3 mb-6">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent-green" />
                  <span className="text-[10px] font-black uppercase tracking-[0.3em] text-accent-green">Blueprint to Elite</span>
                </div>
                <h2 className="font-heading font-black text-white text-4xl md:text-5xl lg:text-7xl uppercase leading-[0.9] mb-6 tracking-tighter">
                  Stop Guessing. <br />
                  <span className="text-accent-green">Engineer Your Results.</span>
                </h2>
                <p className="text-text-muted text-base lg:text-xl font-medium max-w-[500px] leading-relaxed">
                  I bridge the gap between biological theory and physical output. Your custom protocol starts with a single click.
                </p>
              </div>

              {/* CTA Action Side */}
              <div className="relative z-10 flex flex-col items-center gap-8 min-w-[320px]">
                <CTAButton href="/#contact" className="w-full justify-start">
                  Apply for Coaching
                </CTAButton>
                <Link
                  href="/portfolio"
                  className="group/sub inline-flex items-center gap-3 text-white/40 text-[11px] font-black uppercase tracking-[0.25em] hover:text-white transition-all underline-offset-8 hover:underline"
                >
                  Browse Success Stories
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="opacity-0 -translate-x-2 group-hover/sub:opacity-100 group-hover/sub:translate-x-0 transition-all">
                    <path d="M5 12h14m-7-7l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </motion.div>
          </div>

          {/* Decorative Corner Element */}
          <div className="absolute top-12 left-12 z-10 hidden lg:block">
            <div className="flex gap-1.5">
              {[1, 2, 3].map((i) => (
                <div key={i} className="w-1.5 h-1.5 rounded-full border border-white/20" />
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Modern Grid Background Overlay */}
      <div className="absolute inset-0 opacity-5 pointer-events-none z-0" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.1) 1px, transparent 0)', backgroundSize: '80px 80px' }} />
    </section>
  );
}
