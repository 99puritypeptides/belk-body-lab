'use client';

import React, { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';
import { ZoomParallax } from './zoom-parallax';
import { cn } from '@/lib/utils';

export default function ZoomParallaxDemo() {
  useEffect(() => {
    const lenis = new Lenis();
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
    return () => lenis.destroy();
  }, []);

  const images = [
    { src: '/images/client-transformation/client-1.jpeg', alt: 'Client 1 Result' },
    { src: '/images/client-transformation/client-2.jpeg', alt: 'Client 2 Result' },
    { src: '/images/client-transformation/client-3.jpeg', alt: 'Client 3 Result' },
    { src: '/images/client-transformation/client-4.jpeg', alt: 'Client 4 Result' },
    { src: '/images/client-transformation/client-5.jpeg', alt: 'Client 5 Result' },
    { src: '/images/client-transformation/client-6.jpeg', alt: 'Client 6 Result' },
    { src: '/images/client-transformation/client-7.jpeg', alt: 'Client 7 Result' },
  ];

  return (
    <main className="min-h-screen w-full bg-[#080808]">
      <section className="relative flex h-screen items-center justify-center overflow-hidden">
        {/* Radial spotlight */}
        <div
          aria-hidden="true"
          className={cn(
            'pointer-events-none absolute -top-1/2 left-1/2 h-[120vmin] w-[120vmin] -translate-x-1/2 rounded-full',
            'bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.05),transparent_50%)]',
            'blur-[60px]',
          )}
        />
        <div className="z-10 text-center px-6">
          <h2 className="text-[11px] font-black uppercase tracking-[0.4em] text-white/30 mb-6">Demo</h2>
          <h1 className="font-display font-black leading-tight tracking-tight text-white" style={{ fontSize: 'clamp(3rem, 7vw, 6rem)' }}>
            SCROLL DOWN FOR <br />
            <span className="gradient-text filter drop-shadow-[0_0_20px_rgba(255,255,255,0.3)]">IMMERSIVE ZOOM</span>
          </h1>
        </div>
      </section>

      <ZoomParallax images={images} />

      <section className="h-screen flex items-center justify-center bg-[#080808] border-t border-white/[0.05]">
        <h2 className="text-white/20 font-black uppercase tracking-widest">End of Parallax</h2>
      </section>
    </main>
  );
}
