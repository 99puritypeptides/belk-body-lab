'use client';

import React, { useRef, useState } from 'react';
import { useTranslations } from 'next-intl';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ShieldCheckIcon, FireIcon, DevicePhoneMobileIcon, TrophyIcon } from '@heroicons/react/24/outline';
import { Link } from '@/i18n/navigation';
import CTAButton from '@/components/ui/CTAButton';

export default function AboutSection() {
  const t = useTranslations('about');
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  });
  const yParallax = useTransform(scrollYProgress, [0, 1], ["0vh", "-20vh"]);

  const credibilityPoints = [
    { icon: <ShieldCheckIcon className="w-6 h-6" />, label: t('cred1') },
    { icon: <FireIcon className="w-6 h-6" />, label: t('cred2') },
    { icon: <DevicePhoneMobileIcon className="w-6 h-6" />, label: t('cred3') },
    { icon: <TrophyIcon className="w-6 h-6" />, label: t('cred4') },
  ];

  const skills = [
    { label: t('skill1'), value: 96 },
    { label: t('skill2'), value: 92 },
    { label: t('skill3'), value: 88 },
    { label: t('skill4'), value: 85 },
  ];

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
        {/* Pinned Background with parallax */}
        <div className="sticky top-0 w-full h-screen overflow-hidden z-0 bg-[#000]">
          <motion.img
            style={{ y: yParallax }}
            src="/images/about/kyle-ocean-rock.png"
            alt="Coach Kyle Belk"
            className="w-full h-[120vh] object-cover object-center opacity-70"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/10 to-black/40" />
        </div>

        {/* Initial Buffer */}
        <div className="h-[20vh] sm:h-[30vh] w-full" />

        {/* Header Plaque */}
        <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="bg-[#FAF9F6] w-full rounded-3xl sm:rounded-[4rem] shadow-[0_30px_80px_rgba(0,0,0,0.5)] px-8 sm:px-16 py-12 sm:py-20 flex flex-col sm:flex-row justify-between items-start sm:items-end mx-auto transition-transform duration-700 pointer-events-none">
            <h2 className="font-heading font-black leading-none tracking-tight text-[#111]" style={{ fontSize: 'clamp(5rem, 12vw, 10rem)' }}>
              {t('label')}
            </h2>
            <span className="font-heading text-sm md:text-lg lg:text-3xl font-bold uppercase tracking-[0.25em] text-[#111] pb-2 sm:pb-3 mt-4 sm:mt-0 opacity-80">
              {t('name')}
            </span>
          </div>
        </div>

        {/* Spacer */}
        <div className="h-[60vh] sm:h-[80vh] w-full" />

        {/* 2-Column Content Layout */}
        <div className="relative z-10 bg-[#FAF9F6] w-full min-h-screen sm:rounded-t-[5rem] rounded-t-[3rem] shadow-[0_-30px_80px_rgba(0,0,0,0.4)] pt-20 lg:pt-36 pb-24 lg:pb-40 border-t border-white/50">
          <div className="max-w-[1600px] mx-auto px-6 lg:px-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-stretch">

              {/* Left: Video */}
              <div className="lg:col-span-5 relative w-full h-full min-h-[500px] lg:min-h-[700px] rounded-[2rem] lg:rounded-[3rem] overflow-hidden group shadow-2xl cursor-pointer" onClick={togglePlay}>
                <video
                  ref={videoRef}
                  src="/images/videos/kyle-intro.webm"
                  poster="/images/brand/thumbnail.jpg"
                  className="absolute inset-0 w-full h-[100%] object-cover scale-100 group-hover:scale-105 transition-transform duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)]"
                  playsInline
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
                {!isPlaying && (
                  <div className="absolute inset-0 flex items-center justify-center p-6 z-20 transition-opacity duration-500 bg-black/5 group-hover:bg-black/10">
                    <div className="w-24 h-24 rounded-full bg-accent-green flex items-center justify-center text-black shadow-[0_0_60px_rgba(170,255,0,0.3)] transition-all duration-700 ease-out group-hover:scale-110 group-hover:shadow-[0_0_80px_rgba(170,255,0,0.5)]">
                      <svg className="w-10 h-10 ml-1.5" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
                    </div>
                  </div>
                )}
                <div className="absolute bottom-6 left-6 right-6 lg:bottom-10 lg:left-10 lg:right-10 p-6 lg:p-8 rounded-2xl lg:rounded-3xl bg-black/40 backdrop-blur-xl border border-white/10 shadow-2xl z-30 translate-y-2 opacity-90 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <p className="text-white text-xs sm:text-sm font-medium leading-relaxed tracking-wide">
                    &ldquo;{t('quote')}&rdquo;
                  </p>
                  <p className="text-accent-green text-[10px] sm:text-[11px] font-bold mt-4 uppercase tracking-[0.3em]">
                    {t('quoteAuthor')}
                  </p>
                </div>
              </div>

              {/* Right: Content */}
              <div className="lg:col-span-7 flex flex-col justify-center lg:py-10">
                <div className="mb-14">
                  <h3 className="text-4xl sm:text-5xl lg:text-6xl font-light text-[#111] leading-[1.1] mb-8 tracking-tight">
                    {t('heading')} <br />
                    <span className="text-gray-400">{t('headingItalic')}</span>
                  </h3>
                  <p className="text-gray-600 text-lg sm:text-xl leading-relaxed font-light mb-6">
                    {t('bio1')}
                  </p>
                  <p className="text-gray-400 text-base sm:text-lg leading-relaxed font-light">
                    {t('bio2')}
                  </p>
                </div>

                {/* Credentials */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6 mb-16 border-y border-gray-200 py-10">
                  {credibilityPoints?.map((point) => (
                    <div key={point.label} className="flex items-center gap-5 group cursor-default">
                      <div className="w-12 h-12 rounded-full bg-gray-100 text-[#111] flex items-center justify-center group-hover:bg-[#111] group-hover:text-white transition-colors duration-500 shadow-sm">
                        <span className="group-hover:scale-110 transition-transform duration-500">{point.icon}</span>
                      </div>
                      <span className="text-[11px] sm:text-[12px] font-bold tracking-[0.15em] text-gray-600 group-hover:text-[#111] uppercase transition-colors duration-500 leading-snug">
                        {point.label}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Skills */}
                <div className="space-y-8 mb-16 px-2">
                  {skills?.map((skill) => (
                    <div key={skill?.label} className="group cursor-default">
                      <div className="flex justify-between mb-3">
                        <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-gray-400 group-hover:text-gray-900 transition-colors duration-300">{skill?.label}</span>
                        <span className="text-[11px] font-bold text-gray-900">{skill?.value}%</span>
                      </div>
                      <div className="h-[2px] w-full bg-gray-200 overflow-hidden rounded-full">
                        <div className="h-full bg-[#111] rounded-full transition-all duration-1000 ease-out" style={{ width: `${skill?.value}%` }} />
                      </div>
                    </div>
                  ))}
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-wrap items-center gap-6">
                  <CTAButton href="/#contact">
                    {t('ctaWork')}
                  </CTAButton>
                  <Link
                    href="/services"
                    className="inline-flex items-center justify-center min-w-[200px] h-14 bg-transparent border border-gray-300 text-[#111] font-bold text-[11px] uppercase tracking-widest rounded-full hover:border-[#111] hover:bg-gray-50 transition-all duration-300"
                  >
                    {t('ctaServices')}
                  </Link>
                  <Link
                    href="/about"
                    className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400 hover:text-accent-green transition-colors flex items-center gap-2 group"
                  >
                    Read Full Bio
                    <div className="w-1 h-1 rounded-full bg-accent-green group-hover:scale-[2] transition-transform" />
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