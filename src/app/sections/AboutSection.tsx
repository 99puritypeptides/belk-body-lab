'use client';

import React, { useEffect, useState, useRef } from 'react';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ShieldCheckIcon, FireIcon, DevicePhoneMobileIcon, TrophyIcon } from '@heroicons/react/24/outline';

const credibilityPoints = [
  { icon: <ShieldCheckIcon className="w-6 h-6" />, label: 'NASM Certified Personal Trainer' },
  { icon: <FireIcon className="w-6 h-6" />, label: 'Precision Nutrition Level 1' },
  { icon: <DevicePhoneMobileIcon className="w-6 h-6" />, label: 'Online & In-Person Coaching' },
  { icon: <TrophyIcon className="w-6 h-6" />, label: 'NPC Physique Competitor' }
];

const skills = [
  { label: 'Fat Loss Programming', value: 96 },
  { label: 'Muscle Building', value: 92 },
  { label: 'Nutrition Strategy', value: 88 },
  { label: 'Mindset Coaching', value: 85 }
];

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  });

  const yParallax = useTransform(scrollYProgress, [0, 1], ["0vh", "-20vh"]);

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

  return (
    <section ref={sectionRef} id="about" className="relative z-10 bg-[#111] overflow-x-clip">
      
      <div className="relative w-full z-10">
        
        {/* 1. Pinned Background Dummy Image with soft parallax */}
        <div className="sticky top-0 w-full h-screen overflow-hidden z-0 bg-[#000]">
           <motion.img 
              style={{ y: yParallax }}
              src="https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=2669&auto=format&fit=crop" 
              alt="Coach Background"
              className="w-full h-[120vh] object-cover object-center opacity-70" 
           />
           <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/10 to-black/40" />
        </div>

        {/* 2. Initial Buffer */}
        <div className="h-[20vh] sm:h-[30vh] w-full" />

        {/* 3. The Header Plaque */}
        <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 lg:px-10">
           <div className="bg-[#FAF9F6] w-full rounded-3xl sm:rounded-[4rem] shadow-[0_30px_80px_rgba(0,0,0,0.5)] px-8 sm:px-16 py-12 sm:py-20 flex flex-col sm:flex-row justify-between items-start sm:items-end mx-auto transition-transform duration-700 pointer-events-none">
              <h2 className="font-jumpshot font-black leading-none tracking-tight text-[#111]" style={{ fontSize: 'clamp(5rem, 12vw, 10rem)' }}>
                Meet
              </h2>
              <span className="text-sm md:text-lg lg:text-3xl font-bold uppercase tracking-[0.25em] text-[#111] pb-2 sm:pb-3 mt-4 sm:mt-0 opacity-80">
                Kyle Belk
              </span>
           </div>
        </div>

        {/* 4. Shortened Spacer */}
        <div className="h-[60vh] sm:h-[80vh] w-full" />

        {/* 5. The 2-Column Content Layout (Redesigned Ultra-Premium) */}
        <div className="relative z-10 bg-[#FAF9F6] w-full min-h-screen sm:rounded-t-[5rem] rounded-t-[3rem] shadow-[0_-30px_80px_rgba(0,0,0,0.4)] pt-20 lg:pt-36 pb-24 lg:pb-40 border-t border-white/50">
           <div className="max-w-[1600px] mx-auto px-6 lg:px-10">

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-stretch opacity-100 transform-none">
                
                {/* Left: Premium Video Stack */}
                <div className="lg:col-span-5 relative w-full h-full min-h-[500px] lg:min-h-[700px] rounded-[2rem] lg:rounded-[3rem] overflow-hidden group shadow-2xl cursor-pointer" onClick={togglePlay}>
                  <video
                      ref={videoRef}
                      src="/assets/videos/Let me reintroduce myself.I’m Kyle Belk. I was the kid who hid in oversized shirts, pulled my ha.webm"
                      poster="/assets/images/thumbnail.jpg"
                      className="absolute inset-0 w-full h-[100%] object-cover scale-100 group-hover:scale-105 transition-transform duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)]"
                      playsInline
                  />
                  
                  {/* Subtle elegant gradient overlay for text readability at bottom */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />

                  {/* Frosted Glassmorphism Play Button */}
                  {!isPlaying && (
                    <div className="absolute inset-0 flex items-center justify-center p-6 z-20 transition-opacity duration-500">
                      <div className="w-24 h-24 rounded-full border border-white/30 bg-white/10 backdrop-blur-md flex items-center justify-center transition-all duration-500 group-hover:scale-95 group-hover:bg-white/20 shadow-[0_0_40px_rgba(255,255,255,0.1)]">
                        <svg className="w-10 h-10 text-white ml-2" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
                      </div>
                    </div>
                  )}

                  {/* High-end Sleek Quote Panel */}
                  <div className="absolute bottom-6 left-6 right-6 lg:bottom-10 lg:left-10 lg:right-10 p-6 lg:p-8 rounded-2xl lg:rounded-3xl bg-black/40 backdrop-blur-xl border border-white/10 shadow-2xl z-30 translate-y-2 opacity-90 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    <p className="text-white text-xs sm:text-sm font-medium leading-relaxed tracking-wide">
                      &ldquo;Your body is capable of more than your mind believes.&rdquo;
                    </p>
                    <p className="text-accent-green text-[10px] sm:text-[11px] font-bold mt-4 uppercase tracking-[0.3em]">
                      — Kyle Belk
                    </p>
                  </div>
                </div>

                {/* Right: Editorial Typography & Minimalist Content */}
                <div className="lg:col-span-7 flex flex-col justify-center lg:py-10">
                  
                  <div className="mb-14">
                    <h3 className="text-4xl sm:text-5xl lg:text-6xl font-light text-[#111] leading-[1.1] mb-8 tracking-tight">
                      Transforming bodies, <br/>
                      <span className="font-serif italic text-gray-400">rewriting limits.</span>
                    </h3>
                    <p className="text-gray-600 text-lg sm:text-xl leading-relaxed font-light mb-6">
                      I&apos;m Kyle Belk — a certified personal trainer from Atlanta, GA with 7 years of coaching experience. I&apos;ve helped over 500 clients shed fat, build muscle, and completely rewrite their relationship with their body.
                    </p>
                    <p className="text-gray-400 text-base sm:text-lg leading-relaxed font-light">
                      My approach is simple: no cookie-cutter plans. Every program I build is rooted in your unique metabolism, schedule, and goals. 
                    </p>
                  </div>

                  {/* Refined Minimalist Credentials */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6 mb-16 border-y border-gray-200 py-10">
                    {credibilityPoints?.map((point) =>
                      <div key={point.label} className="flex items-center gap-5 group cursor-default">
                        <div className="w-12 h-12 rounded-full bg-gray-100 text-[#111] flex items-center justify-center group-hover:bg-[#111] group-hover:text-white transition-colors duration-500 shadow-sm">
                           <span className="group-hover:scale-110 transition-transform duration-500">{point.icon}</span>
                        </div>
                        <span className="text-[11px] sm:text-[12px] font-bold tracking-[0.15em] text-gray-600 group-hover:text-[#111] uppercase transition-colors duration-500 leading-snug">
                          {point.label}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Editorial Razor-Thin Progress Bars */}
                  <div className="space-y-8 mb-16 px-2">
                    {skills?.map((skill) =>
                      <div key={skill?.label} className="group cursor-default">
                        <div className="flex justify-between mb-3">
                          <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-gray-400 group-hover:text-gray-900 transition-colors duration-300">{skill?.label}</span>
                          <span className="text-[11px] font-bold text-gray-900">{skill?.value}%</span>
                        </div>
                        <div className="h-[2px] w-full bg-gray-200 overflow-hidden rounded-full">
                          <div
                            className="h-full bg-[#111] rounded-full transition-all duration-1000 ease-out"
                            style={{ width: `${skill?.value}%` }} 
                          />
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Awwwards-style Action Buttons */}
                  <div className="flex flex-wrap gap-4">
                    <Link
                      href="/#contact"
                      className="group relative overflow-hidden inline-flex items-center justify-center min-w-[200px] h-14 bg-[#111] text-white text-[11px] font-bold tracking-widest uppercase rounded-full shadow-lg"
                    >
                      <span className="relative z-10 transition-transform duration-500 group-hover:-translate-y-12">Work With Kyle</span>
                      <span className="absolute inset-0 flex items-center justify-center z-10 translate-y-12 transition-transform duration-500 group-hover:translate-y-0 text-accent-green">Work With Kyle</span>
                      <div className="absolute inset-0 bg-gray-900 translate-y-full transition-transform duration-500 group-hover:translate-y-0" />
                    </Link>
                    <Link
                      href="/packages"
                      className="inline-flex items-center justify-center min-w-[200px] h-14 bg-transparent border border-gray-300 text-[#111] font-bold text-[11px] uppercase tracking-widest rounded-full hover:border-[#111] hover:bg-gray-50 transition-all duration-300"
                    >
                      View Packages
                    </Link>
                  </div>
                </div>
              </div>

           </div>
        </div>
      </div>
    </section>
  );
}