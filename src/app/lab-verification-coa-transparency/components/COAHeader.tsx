import React from 'react';
import Image from 'next/image';

export default function COAHeader() {
  return (
    <header className="sticky top-0 z-50 w-full bg-[#050505]/90 backdrop-blur-xl border-b border-white/10 shadow-2xl">
      {/* Eyebrow Strip - Brutalist Style */}
      <div className="w-full bg-accent-green text-black py-2 px-4 text-center text-[10px] sm:text-[11px] font-black uppercase tracking-[0.25em]">
        <span className="hidden sm:inline">Analytical Transparency / Verified Documentation / Batch-Level Traceability</span>
        <span className="inline sm:hidden">Verified Batch-Level Documentation</span>
      </div>

      {/* Main Header */}
      <div className="max-w-[1400px] mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <a href="#top" className="flex-shrink-0 flex items-center hover:opacity-80 transition-opacity" aria-label="Back to top">
          <Image
            src="/images/brand/belk-body-lab-logo.png"
            alt="Belk Body Lab Logo"
            width={140}
            height={40}
            className="h-6 w-auto object-contain brightness-0 invert"
            priority
          />
        </a>

        {/* CTA */}
        <a
          href="https://99puritypeptides.com/certificates"
          target="_blank"
          rel="noopener noreferrer nofollow"
          className="cta-coa group relative inline-flex items-center justify-center px-6 py-3 bg-white text-black font-heading text-[12px] font-black uppercase tracking-[0.1em] overflow-hidden transition-transform hover:scale-[1.02] active:scale-95 border border-white/20"
          data-cta="header-view-coa"
        >
          <div className="absolute inset-0 w-full h-full bg-accent-green -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out z-0"></div>
          <span className="relative z-10 flex items-center gap-2">
            View COA Reports
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </span>
        </a>
      </div>
    </header>
  );
}
