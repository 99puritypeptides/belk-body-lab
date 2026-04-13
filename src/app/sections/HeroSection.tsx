'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';

const floatingCards = [
  {
    label: '1.5', sublabel: 'Hours', top: '45%', left: '26%', delay: '0s', rotate: '25deg', icon: (
      <svg className="w-6 h-6 text-[#AAFF00]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
    )
  },
  {
    label: '20', sublabel: 'Poses', top: '45%', right: '26%', delay: '1s', rotate: '-25deg', icon: (
      <svg className="w-6 h-6 text-[#AAFF00]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
    )
  },
  {
    label: '550', sublabel: 'Kcal', bottom: '15%', left: '26%', delay: '0.5s', rotate: '-25deg', icon: (
      <svg className="w-6 h-6 text-[#AAFF00]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" /></svg>
    )
  },
  {
    label: '5', sublabel: 'Sets', bottom: '15%', right: '26%', delay: '1.5s', rotate: '25deg', icon: (
      <svg className="w-6 h-6 text-[#AAFF00]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zm10 0a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zm10 0a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" /></svg>
    )
  }
];

export default function HeroSection() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <div className="h-dvh bg-[#0B0B0B]" />;

  return (
    <section className="relative h-dvh w-full bg-[#0B0B0B] flex items-center justify-center overflow-hidden">
      {/* Background grid lines */}
      <div className="bg-grid">
        <div className="bg-grid-line" />
        <div className="bg-grid-line" />
        <div className="bg-grid-line" />
        <div className="bg-grid-line" />
        <div className="bg-grid-line" />
        <div className="bg-grid-line" />
        <div className="bg-grid-line" />
        <div className="bg-grid-line" />
      </div>

      {/* Layer 1: Background Heading (Behind Subject) */}
      <div className="absolute top-[20%] w-full flex flex-col items-center justify-center z-0 px-4 text-center select-none">
        <h1 className="racing-sans-one-regular uppercase text-transparent bg-clip-text bg-gradient-to-r from-[#D6FF7F] to-[#A3FF3F]" style={{ fontSize: 'clamp(2rem, 6vw, 6.5rem)', lineHeight: 0.85, letterSpacing: '-0.02em' }}>
          Sculpt <span className='text-white'>Your</span> Body<br />
          <span className="text-white bg-none opacity-90">Elevate <span className='text-[#AAFF00]'>Your</span> Spirit</span>
        </h1>
      </div>

      {/* Layer 2: Main Subject Image */}
      <div className="absolute bottom-0 z-10 w-[90%] max-w-[600px] h-[60vh] md:h-[75vh] flex justify-center pointer-events-none">
        <Image
          src="/generatedImages/model-image.png"
          alt="Muscular Bodybuilder"
          fill
          className="object-contain object-bottom drop-shadow-[0_20px_50px_rgba(0,0,0,0.8)]"
          sizes="(max-width: 768px) 100vw, 600px"
          priority
        />
        {/* Dark gradient fade at the bottom to blend into the background */}
        <div className="absolute bottom-0 left-0 w-full h-[15vh] bg-gradient-to-t from-[#0B0B0B] to-transparent z-10" />
      </div>

      {/* Layer 3: Floating Elements (Z-20) */}
      <div className="absolute inset-0 z-20 pointer-events-none max-w-7xl mx-auto w-full h-full">
        {/* Floating Cards */}
        {floatingCards.map((card, idx) => (
          <div
            key={idx}
            className={`hidden md:flex absolute pointer-events-auto cursor-default`}
            style={{
              top: card.top,
              bottom: card.bottom,
              left: card.left,
              right: card.right,
              transform: `rotate(${card.rotate})`,
            }}
          >
            <div className={`flex flex-col items-center justify-center bg-[#1A1A1A]/90 backdrop-blur-md border border-white/5 rounded-3xl p-4 shadow-2xl transition-transform hover:scale-105 min-w-[110px] ${idx % 2 === 0 ? 'animate-float-slow' : 'animate-float-delayed'}`}>
              <div className="mb-2">
                {card.icon}
              </div>
              <span className="text-xs racing-sans-one-regular font-medium tracking-wide text-gray-400">{card.sublabel}</span>
              <span className="racing-sans-one-regular font-display font-black text-3xl text-white mt-1 leading-none">{card.label}</span>
            </div>
          </div>
        ))}

      </div>

      {/* Layer 4: Bottom Content */}
      <div className="absolute bottom-4 md:bottom-8 w-full max-w-7xl mx-auto px-4 lg:px-12 flex flex-row items-end flex-wrap md:flex-nowrap md:items-center justify-between z-30 pointer-events-auto gap-4 md:gap-6 mt-8 md:mt-0">

        {/* Left Widget: Happy Spirits */}
        <div className="flex flex-col items-start gap-1 md:gap-2">
          <div className="flex -space-x-2 md:-space-x-3">
            {[1, 2, 3].map((i) => (
              <div key={i} className="w-8 h-8 md:w-10 md:h-10 rounded-full border-2 border-[#0B0B0B] overflow-hidden bg-gray-800">
                <Image src={`https://i.pravatar.cc/100?img=${i + 10}`} alt={`User ${i}`} width={40} height={40} className="object-cover" />
              </div>
            ))}
            <div className="w-8 h-8 md:w-10 md:h-10 rounded-full border-2 border-[#0B0B0B] bg-[#AAFF00] flex items-center justify-center text-black">
              <svg className="w-3 h-3 md:w-4 md:h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M12 4v16m8-8H4" /></svg>
            </div>
          </div>
          <p className="text-white text-[10px] md:text-xs font-semibold tracking-wider">
            12k+ <span className="text-gray-400">Happy Spirits</span>
          </p>
        </div>

        {/* Right Widget: Let's Start Button */}
        <button className="group relative flex items-center gap-2 md:gap-4 bg-[#AAFF00] rounded-full p-1.5 pr-4 md:p-2 md:pr-6 hover:scale-105 transition-all duration-300 shadow-[0_0_20px_rgba(170,255,0,0.3)] hover:shadow-[0_0_40px_rgba(170,255,0,0.6)]">
          <div className="w-8 h-8 md:w-12 md:h-12 bg-white rounded-full flex items-center justify-center text-black transform group-hover:rotate-45 transition-transform duration-300">
            <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
          </div>
          <span className="text-black font-black uppercase tracking-widest text-[10px] md:text-sm">Let&apos;s Start</span>
        </button>

      </div>
    </section>
  );
}