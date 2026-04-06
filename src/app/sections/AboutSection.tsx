'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';

const credibilityPoints = [
  { icon: '🏋️', label: 'NASM Certified Personal Trainer' },
  { icon: '🥗', label: 'Precision Nutrition Level 1' },
  { icon: '📱', label: 'Online & In-Person Coaching' },
  { icon: '🏆', label: 'NPC Physique Competitor' }];


const skills = [
  { label: 'Fat Loss Programming', value: 96 },
  { label: 'Muscle Building', value: 92 },
  { label: 'Nutrition Strategy', value: 88 },
  { label: 'Mindset Coaching', value: 85 }];


export default function AboutSection() {
  useEffect(() => {
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
    document.querySelectorAll('.scroll-reveal-init')?.forEach((el) => observer?.observe(el));
    return () => observer?.disconnect();
  }, []);

  return (
    <section id="about" className="relative z-10 py-24 lg:py-36">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">

        {/* Header */}
        <div className="mb-16 scroll-reveal-init">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-0.5 h-5 bg-accent-green" />
            <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-text-muted">Your Coach</span>
          </div>
          <h2 className="font-display font-black leading-none tracking-tight text-white" style={{ fontSize: 'clamp(2.5rem, 6vw, 6rem)' }}>
            Meet <span className="italic gradient-text">Kyle.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">

          {/* Left: Image stack */}
          <div className="lg:col-span-5 relative scroll-reveal-init stagger-1">
            {/* Main image */}
            <div className="relative overflow-hidden rounded-2xl" style={{ aspectRatio: '3/4' }}>
              <AppImage
                src="https://img.rocket.new/generatedImages/rocket_gen_img_152d799f3-1772107488902.png"
                alt="Coach Kyle Belk training client in modern gym, focused and professional, dark gym environment with equipment"
                fill
                sizes="(max-width: 768px) 100vw, 40vw"
                className="object-cover grayscale hover:grayscale-0 transition-all duration-1000" />

              <div className="absolute inset-0 bg-gradient-to-t from-bg-primary/60 to-transparent" />
            </div>

            {/* Rotated accent card */}
            <div className="absolute -bottom-8 -right-4 lg:-right-10 bg-bg-card border border-border-subtle p-6 rounded-xl max-w-[160px] rotate-[3deg] hover:rotate-0 transition-transform duration-500 shadow-2xl z-10">
              <div className="text-3xl font-black text-accent-green font-display">7+</div>
              <div className="text-[10px] font-bold uppercase tracking-[0.15em] text-text-muted mt-1">Years of Elite Coaching</div>
            </div>

            {/* Floating quote */}
            <div className="absolute -top-6 -left-4 lg:-left-8 bg-accent-green p-5 rounded-xl max-w-[180px] rotate-[-2deg] shadow-2xl z-10">
              <p className="text-[10px] font-bold text-bg-primary leading-relaxed uppercase tracking-wide">
                &ldquo;Your body is capable of more than your mind believes.&rdquo;
              </p>
              <p className="text-[9px] font-black text-bg-primary/70 mt-2 uppercase tracking-[0.2em]">— Kyle Belk</p>
            </div>
          </div>

          {/* Right: Content */}
          <div className="lg:col-span-7 lg:pl-8">
            <p className="text-text-muted text-lg font-light leading-relaxed mb-8 scroll-reveal-init stagger-2">
              I&apos;m Kyle Belk — a certified personal trainer from Atlanta, GA with 7 years of hands-on coaching experience. I&apos;ve helped over 500 clients shed fat, build muscle, and completely rewrite their relationship with their body.
            </p>
            <p className="text-text-muted text-base font-light leading-relaxed mb-12 scroll-reveal-init stagger-3">
              My approach is simple: no cookie-cutter plans. Every program I build is rooted in your unique metabolism, schedule, and goals. I&apos;ve been where you are — and I know exactly what it takes to get to where you want to be.
            </p>

            {/* Credentials */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12 scroll-reveal-init stagger-3">
              {credibilityPoints?.map((point) =>
                <div
                  key={point?.label}
                  className="flex items-center gap-4 p-4 bg-bg-card border border-border-subtle rounded-xl hover:border-border-accent transition-colors">

                  <span className="text-xl">{point?.icon}</span>
                  <span className="text-sm font-medium text-white">{point?.label}</span>
                </div>
              )}
            </div>

            {/* Skills */}
            <div className="space-y-5 mb-12 scroll-reveal-init stagger-4">
              {skills?.map((skill) =>
                <div key={skill?.label}>
                  <div className="flex justify-between mb-2">
                    <span className="text-[11px] font-bold uppercase tracking-[0.15em] text-white">{skill?.label}</span>
                    <span className="text-[11px] font-bold text-accent-green">{skill?.value}%</span>
                  </div>
                  <div className="h-1.5 bg-bg-card-hover rounded-full overflow-hidden">
                    <div
                      className="h-full bg-accent-green rounded-full transition-all duration-1000"
                      style={{ width: `${skill?.value}%` }} />

                  </div>
                </div>
              )}
            </div>

            <div className="flex flex-wrap gap-4 scroll-reveal-init stagger-5">
              <Link
                href="/homepage#contact"
                className="px-8 py-4 bg-accent-green text-bg-primary font-bold text-sm uppercase tracking-[0.15em] rounded-full hover:bg-white transition-all duration-300 hover:scale-105">

                Work With Kyle
              </Link>
              <Link
                href="/packages"
                className="px-8 py-4 border border-border-subtle text-white font-semibold text-sm uppercase tracking-[0.15em] rounded-full hover:border-accent-green hover:text-accent-green transition-all duration-300">

                View Packages
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>);

}