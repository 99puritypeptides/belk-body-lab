import React from 'react';
import { Link } from '@/i18n/navigation';
import { getTranslations } from 'next-intl/server';
import PremiumIcon from '@/components/ui/PremiumIcon';

export default async function NotFound() {
  const t = await getTranslations('metadata');

  return (
    <main className="relative min-h-[90vh] bg-[#050505] flex flex-col items-center justify-center text-center px-6 overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent-green/10 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="relative z-10 space-y-12 max-w-2xl">
        <div className="space-y-4">
          <span className="text-accent-green font-mono text-sm tracking-[0.5em] uppercase">Status: 404 — Path Not Found</span>
          <h1 className="text-white font-display font-black text-6xl md:text-8xl lg:text-9xl uppercase tracking-tighter leading-none">
            Lost in the <br />
            <span className="text-white/20">Void</span>
          </h1>
        </div>

        <p className="text-white/40 text-lg md:text-xl font-light leading-relaxed max-w-lg mx-auto">
          The coordinates you followed seem to be offline. Re-calibrate your path using the navigation below.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8">
          <Link 
            href="/"
            className="w-full sm:w-auto px-10 py-5 bg-accent-green rounded-2xl text-black font-black text-xs uppercase tracking-widest hover:scale-105 transition-transform"
          >
            Return Home
          </Link>
          <Link 
            href="/services"
            className="w-full sm:w-auto px-10 py-5 bg-white/5 border border-white/10 rounded-2xl text-white font-black text-xs uppercase tracking-widest hover:bg-white/10 transition-colors flex items-center justify-center gap-3"
          >
            View Services
            <PremiumIcon name="arrow" size={14} />
          </Link>
        </div>

        <div className="pt-20">
            <span className="block text-[10px] font-black uppercase tracking-[0.3em] text-white/10 mb-8">Or explore latest insights</span>
            <Link 
                href="/blog"
                className="text-white/40 hover:text-accent-green transition-colors text-sm font-bold uppercase tracking-widest border-b border-white/10 pb-1"
            >
                Read the Blog
            </Link>
        </div>
      </div>
    </main>
  );
}
