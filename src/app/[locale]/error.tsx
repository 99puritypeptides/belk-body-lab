'use client';

import { useEffect } from 'react';
import { Link } from '@/i18n/navigation';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // eslint-disable-next-line no-console
    console.error(error);
  }, [error]);

  return (
    <main className="relative min-h-screen bg-[#050505] flex flex-col items-center justify-center text-center px-6 pt-32 pb-12 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent-green/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 space-y-12 max-w-2xl">
        <div className="space-y-4">
          <span className="text-accent-green font-mono text-sm tracking-[0.5em] uppercase">Status: Error — Something Broke</span>
          <h1 className="text-white font-display font-black text-5xl md:text-8xl lg:text-9xl uppercase tracking-tighter leading-none">
            Signal <br />
            <span className="text-white/20">Lost</span>
          </h1>
        </div>

        <p className="text-white/40 text-lg md:text-xl font-light leading-relaxed max-w-lg mx-auto">
          Something went wrong loading this page. It's on our end, not yours — try again, or head back to safe ground.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8">
          <button
            onClick={reset}
            className="w-full sm:w-auto px-10 py-5 bg-accent-green rounded-2xl text-black font-black text-xs uppercase tracking-widest hover:scale-105 transition-transform"
          >
            Try Again
          </button>
          <Link
            href="/"
            className="w-full sm:w-auto px-10 py-5 bg-white/5 border border-white/10 rounded-2xl text-white font-black text-xs uppercase tracking-widest hover:bg-white/10 transition-colors flex items-center justify-center gap-3"
          >
            Return Home
          </Link>
        </div>
      </div>
    </main>
  );
}
