'use client';

import React, { useEffect, useState, useRef } from 'react';
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
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
        setIsPlaying(true);
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    }
  };

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
    <section id="about" className="relative z-10 py-24 lg:py-36 bg-white overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">

        {/* Header */}
        <div className="mb-16 scroll-reveal-init">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-0.5 h-5 bg-accent-green" />
            <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-gray-500">Your Coach</span>
          </div>
          <h2 className="racing-sans-one-regular font-regular font-black leading-none tracking-tight text-black" style={{ fontSize: 'clamp(2.5rem, 6vw, 6rem)' }}>
            Meet <span className="italic racing-sans-one-regular text-black">Kyle.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">

          {/* Left: Image stack */}
          <div className="lg:col-span-5 relative scroll-reveal-init stagger-1">
            {/* Main Video Section */}
            <div
              className="relative overflow-hidden rounded-2xl group cursor-pointer"
              style={{ aspectRatio: '3/4' }}
              onClick={togglePlay}
            >
              <video
                ref={videoRef}
                src="/assets/videos/Let me reintroduce myself.I’m Kyle Belk. I was the kid who hid in oversized shirts, pulled my ha.webm"
                poster="/assets/images/thumbnail.jpg"
                className="w-full h-[100%] object-cover transition-all duration-1000"
                playsInline
              />

              {!isPlaying && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/10 group-hover:bg-black/30 transition-all z-20">
                  <div className="w-16 h-16 bg-accent-green rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(170,255,0,0.4)] text-black pl-1 group-hover:scale-110 transition-transform">
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
                  </div>
                </div>
              )}

            </div>


            {/* Floating quote */}
            <div className="absolute -top-6 -left-4 lg:-left-8 bg-accent-green p-5 rounded-xl max-w-[180px] rotate-[-2deg] shadow-xl z-10">
              <p className="text-[10px] font-bold text-black leading-relaxed uppercase tracking-wide">
                &ldquo;Your body is capable of more than your mind believes.&rdquo;
              </p>
              <p className="text-[9px] font-black text-black/70 mt-2 uppercase tracking-[0.2em]">— Kyle Belk</p>
            </div>
          </div>

          {/* Right: Content */}
          <div className="lg:col-span-7 lg:pl-8">
            <p className="text-gray-600 text-lg font-light leading-relaxed mb-8 scroll-reveal-init stagger-2">
              I&apos;m Kyle Belk — a certified personal trainer from Atlanta, GA with 7 years of hands-on coaching experience. I&apos;ve helped over 500 clients shed fat, build muscle, and completely rewrite their relationship with their body.
            </p>
            <p className="text-gray-600 text-base font-light leading-relaxed mb-12 scroll-reveal-init stagger-3">
              My approach is simple: no cookie-cutter plans. Every program I build is rooted in your unique metabolism, schedule, and goals. I&apos;ve been where you are — and I know exactly what it takes to get to where you want to be.
            </p>

            {/* Credentials */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12 scroll-reveal-init stagger-3">
              {credibilityPoints?.map((point) =>
                <div
                  key={point?.label}
                  className="flex items-center gap-4 p-4 bg-gray-50 border border-gray-200 rounded-xl hover:border-accent-green transition-colors">

                  <span className="text-xl">{point?.icon}</span>
                  <span className="text-sm font-medium text-black">{point?.label}</span>
                </div>
              )}
            </div>

            {/* Skills */}
            <div className="space-y-5 mb-12 scroll-reveal-init stagger-4">
              {skills?.map((skill) =>
                <div key={skill?.label}>
                  <div className="flex justify-between mb-2">
                    <span className="text-[11px] font-bold uppercase tracking-[0.15em] text-black">{skill?.label}</span>
                    <span className="text-[11px] font-bold text-black">{skill?.value}%</span>
                  </div>
                  <div className="h-1.5 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-accent-green rounded-full transition-all duration-1000"
                      style={{ width: `${skill?.value}%` }} />

                  </div>
                </div>
              )}
            </div>

            <div className="flex flex-wrap gap-4 scroll-reveal-init stagger-5">
              <Link
                href="/#contact"
                className="inline-flex items-center gap-3 px-8 py-4 bg-white text-black text-sm font-bold tracking-widest uppercase rounded-full hover:bg-accent-green hover:scale-105 transition-all duration-300">

                Work With Kyle
              </Link>
              <Link
                href="/packages"
                className="px-8 py-4 border border-gray-300 text-black font-semibold text-sm uppercase tracking-[0.15em] rounded-full hover:border-accent-green hover:text-accent-green transition-all duration-300">

                View Packages
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}