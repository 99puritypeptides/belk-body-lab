'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';

export default function HeroSection() {
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Cursor
    const cursor = document.createElement('div');
    cursor.className = 'custom-cursor';
    const ring = document.createElement('div');
    ring.className = 'custom-cursor-ring';
    document.body.appendChild(cursor);
    document.body.appendChild(ring);

    let ringX = 0, ringY = 0;
    let curX = 0, curY = 0;

    const onMove = (e: MouseEvent) => {
      curX = e.clientX;
      curY = e.clientY;
    };
    document.addEventListener('mousemove', onMove);

    const animate = () => {
      ringX += (curX - ringX) * 0.12;
      ringY += (curY - ringY) * 0.12;
      cursor.style.left = `${curX - 5}px`;
      cursor.style.top = `${curY - 5}px`;
      ring.style.left = `${ringX - 18}px`;
      ring.style.top = `${ringY - 18}px`;
      requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);

    // Hover effects
    const interactives = document.querySelectorAll('a, button');
    interactives.forEach((el) => {
      el.addEventListener('mouseenter', () => {
        cursor.style.transform = 'scale(3)';
        ring.style.transform = 'scale(1.5)';
      });
      el.addEventListener('mouseleave', () => {
        cursor.style.transform = 'scale(1)';
        ring.style.transform = 'scale(1)';
      });
    });

    // Scroll reveal
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.scroll-reveal-init').forEach((el) => observer.observe(el));

    return () => {
      document.removeEventListener('mousemove', onMove);
      document.body.removeChild(cursor);
      document.body.removeChild(ring);
      observer.disconnect();
    };
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col pt-24 overflow-hidden animated-gradient">
      {/* Blob atmospherics */}
      <div
        className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full opacity-[0.06] blob-shape"
        style={{ background: 'radial-gradient(circle, #AAFF00 0%, transparent 70%)' }}
        aria-hidden="true" />

      <div
        className="absolute bottom-[10%] left-[-10%] w-[400px] h-[400px] rounded-full opacity-[0.04] blob-shape"
        style={{ background: 'radial-gradient(circle, #FF6B00 0%, transparent 70%)', animationDelay: '4s' }}
        aria-hidden="true" />


      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-10 flex-1 flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-0 w-full items-center py-12">

          {/* Left: Text */}
          <div className="lg:col-span-6 xl:col-span-5">
            <div className="flex items-center gap-4 mb-8 scroll-reveal-init stagger-1">
              <div className="w-0.5 h-5 bg-accent-green" />
              <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-text-muted">
                Personal Coaching · Est. 2019
              </span>
            </div>

            <h1
              ref={headlineRef}
              className="font-display font-black leading-[0.88] tracking-tight mb-8"
              style={{ fontSize: 'clamp(3.2rem, 8vw, 7.5rem)' }}>

              <span className="block scroll-reveal-init stagger-1 text-white">Transform</span>
              <span className="block scroll-reveal-init stagger-2 text-white">Your</span>
              <span className="block scroll-reveal-init stagger-3 gradient-text italic">Body.</span>
            </h1>

            <p className="text-text-muted text-base lg:text-lg font-light leading-relaxed max-w-md mb-10 scroll-reveal-init stagger-4">
              Personalized coaching programs designed around your goals. Real plans. Real accountability. Real results — in 90 days or less.
            </p>

            <div className="flex flex-wrap gap-4 mb-14 scroll-reveal-init stagger-5">
              <Link
                href="/homepage#contact"
                className="px-8 py-4 bg-accent-green text-bg-primary font-bold text-sm uppercase tracking-[0.15em] rounded-full hover:bg-white transition-all duration-300 hover:scale-105 glow-green">

                Get Started
              </Link>
              <Link
                href="/portfolio"
                className="px-8 py-4 border border-border-subtle text-white font-bold text-sm uppercase tracking-[0.15em] rounded-full hover:border-accent-green hover:text-accent-green transition-all duration-300">

                View Transformations
              </Link>
            </div>

            {/* Stats row */}
            <div ref={statsRef} className="flex gap-10 scroll-reveal-init stagger-5">
              {[
                { value: '500+', label: 'Clients Transformed' },
                { value: '7', label: 'Years Coaching' },
                { value: '98%', label: 'Success Rate' }].
                map((stat) =>
                  <div key={stat.label}>
                    <div className="font-display font-black text-2xl text-accent-green leading-none mb-1">
                      {stat.value}
                    </div>
                    <div className="text-[10px] font-semibold uppercase tracking-[0.15em] text-text-muted">
                      {stat.label}
                    </div>
                  </div>
                )}
            </div>
          </div>

          {/* Right: Coach image */}
          <div className="lg:col-span-6 xl:col-span-7 relative flex justify-center lg:justify-end">
            {/* Yellow accent box */}
            <div className="absolute top-0 right-0 lg:-top-6 lg:-right-4 w-36 h-36 lg:w-48 lg:h-48 bg-accent-green flex flex-col items-center justify-center p-6 z-20 hover:scale-105 transition-transform cursor-pointer rounded-2xl lg:rounded-none">
              <svg width="24" height="24" fill="none" stroke="#0A0A0A" strokeWidth="2.5" viewBox="0 0 24 24">
                <line x1="7" y1="17" x2="17" y2="7" />
                <polyline points="7 7 17 7 17 17" />
              </svg>
              <span className="text-bg-primary text-sm font-black uppercase leading-tight text-center mt-2">
                Start<br />Free Call
              </span>
            </div>

            <div className="relative w-full max-w-[500px]">
              <div className="relative overflow-hidden rounded-2xl lg:rounded-none" style={{ aspectRatio: '3/4' }}>
                <AppImage
                  src="https://img.rocket.new/generatedImages/rocket_gen_img_1677870b9-1772381961418.png"
                  alt="Athletic male coach Kyle in gym, dark dramatic lighting, muscular physique, confident stance, dark steel walls, low-key industrial lighting"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover object-top grayscale hover:grayscale-0 transition-all duration-1000"
                  priority />

                {/* Scrim for text overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-bg-primary/80 via-transparent to-transparent" />
              </div>

              {/* Floating badge */}
              <div className="absolute bottom-6 left-6 bg-bg-card/90 backdrop-blur-sm border border-border-subtle rounded-xl p-4 max-w-[180px]">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-2 h-2 rounded-full bg-accent-green animate-pulse" />
                  <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-accent-green">Live Coaching</span>
                </div>
                <p className="text-white text-xs font-semibold leading-tight">Kyle Belk</p>
                <p className="text-text-muted text-[10px]">NASM Certified · 7 Yrs</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 z-10">
        <span className="text-[9px] font-bold uppercase tracking-[0.4em] text-text-subtle vertical-text h-12">Scroll</span>
        <div className="w-px h-16 bg-gradient-to-b from-text-subtle to-transparent" />
      </div>
    </section>);

}