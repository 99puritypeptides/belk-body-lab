'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';

const transformations = [
  {
    id: 1,
    before: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=600&q=80',
    after: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=600&q=80',
    name: 'Marcus T.',
    result: '-42 lbs in 16 weeks',
    type: 'Fat Loss'
  },
  {
    id: 2,
    before: "https://img.rocket.new/generatedImages/rocket_gen_img_1aeae434b-1773034290808.png",
    after: "https://img.rocket.new/generatedImages/rocket_gen_img_1aeae434b-1773034290808.png",
    name: 'Jordan M.',
    result: '+18 lbs muscle in 20 weeks',
    type: 'Muscle Gain'
  },
  {
    id: 3,
    before: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=600&q=80',
    after: 'https://images.unsplash.com/photo-1605296867304-46d5465a13f1?auto=format&fit=crop&w=600&q=80',
    name: 'Devon R.',
    result: '-28 lbs + toned physique',
    type: 'Total Transformation'
  }];


interface SliderProps {
  beforeSrc: string;
  afterSrc: string;
  beforeAlt: string;
  afterAlt: string;
}

function BeforeAfterSlider({ beforeSrc, afterSrc, beforeAlt, afterAlt }: SliderProps) {
  const [sliderPos, setSliderPos] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  const updateSlider = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const pos = Math.max(5, Math.min(95, (clientX - rect.left) / rect.width * 100));
    setSliderPos(pos);
  };

  const onMouseDown = () => { isDragging.current = true; };
  const onMouseMove = (e: React.MouseEvent) => { if (isDragging.current) updateSlider(e.clientX); };
  const onMouseUp = () => { isDragging.current = false; };
  const onTouchMove = (e: React.TouchEvent) => { updateSlider(e.touches[0].clientX); };

  return (
    <div
      ref={containerRef}
      className="ba-slider w-full h-full"
      onMouseDown={onMouseDown}
      onMouseMove={onMouseMove}
      onMouseUp={onMouseUp}
      onMouseLeave={onMouseUp}
      onTouchMove={onTouchMove}>

      {/* Before */}
      <div className="absolute inset-0">
        <AppImage src={beforeSrc} alt={beforeAlt} fill sizes="50vw" className="object-cover" />
        <div className="absolute top-3 left-3 px-3 py-1 bg-black/70 rounded-full text-[9px] font-bold uppercase tracking-[0.2em] text-white">Before</div>
      </div>

      {/* After */}
      <div className="absolute inset-0 overflow-hidden" style={{ width: `${sliderPos}%` }}>
        <div className="absolute inset-0" style={{ width: `${100 / (sliderPos / 100)}%` }}>
          <AppImage src={afterSrc} alt={afterAlt} fill sizes="50vw" className="object-cover" />
        </div>
        <div className="absolute top-3 right-3 px-3 py-1 bg-accent-green/90 rounded-full text-[9px] font-bold uppercase tracking-[0.2em] text-bg-primary">After</div>
      </div>

      {/* Handle */}
      <div className="ba-handle" style={{ left: `${sliderPos}%` }}>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-accent-green border-2 border-bg-primary flex items-center justify-center shadow-lg">
          <svg width="16" height="16" fill="none" stroke="#0A0A0A" strokeWidth="2.5" viewBox="0 0 24 24">
            <path d="M9 18l-6-6 6-6M15 6l6 6-6 6" />
          </svg>
        </div>
      </div>
    </div>);

}

export default function TransformationsSection() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => { entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('visible'); }); },
      { threshold: 0.1 }
    );
    document.querySelectorAll('.scroll-reveal-init').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="transformations" className="relative z-10 py-24 lg:py-32">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-10">

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="scroll-reveal-init">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-0.5 h-5 bg-accent-green" />
              <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-text-muted">Real Results</span>
            </div>
            <h2 className="font-display font-black leading-tight tracking-tight text-white" style={{ fontSize: 'clamp(2rem, 5vw, 5rem)' }}>
              Client <span className="italic gradient-text">Transformations.</span>
            </h2>
          </div>
          <p className="text-text-muted text-sm max-w-xs scroll-reveal-init stagger-2">
            Every result is real. No filters, no tricks — just dedicated clients and a proven system.
          </p>
        </div>

        {/* Transformation cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {transformations.map((t, i) =>
            <div
              key={t.id}
              className={`scroll-reveal-init stagger-${i + 1} bg-bg-card border border-border-subtle rounded-2xl overflow-hidden card-hover`}>

              {/* Slider */}
              <div className="relative" style={{ aspectRatio: '4/5' }}>
                <BeforeAfterSlider
                  beforeSrc={t.before}
                  afterSrc={t.after}
                  beforeAlt={`${t.name} before transformation, gym setting, overweight physique`}
                  afterAlt={`${t.name} after transformation with Kyle, lean athletic physique, gym setting`} />

              </div>

              {/* Info */}
              <div className="p-5">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-white font-bold text-base">{t.name}</span>
                  <span
                    className="text-[9px] font-bold uppercase tracking-[0.15em] px-3 py-1 rounded-full"
                    style={{ background: 'rgba(170,255,0,0.1)', color: '#AAFF00', border: '1px solid rgba(170,255,0,0.2)' }}>

                    {t.type}
                  </span>
                </div>
                <p className="text-accent-green font-bold text-sm">{t.result}</p>
                <p className="text-text-subtle text-xs mt-1">Drag the slider to compare</p>
              </div>
            </div>
          )}
        </div>

        <div className="text-center scroll-reveal-init">
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-3 px-10 py-4 border border-border-subtle text-white font-bold text-sm uppercase tracking-[0.15em] rounded-full hover:border-accent-green hover:text-accent-green transition-all duration-300">

            View All Transformations
            <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>);

}