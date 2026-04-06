'use client';

import React, { useState, useEffect, useRef } from 'react';
import AppImage from '@/components/ui/AppImage';

const testimonials = [
  {
    id: 1,
    name: 'Marcus Thompson',
    handle: '@marcus.fit',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
    result: '-42 lbs',
    rating: 5,
    text: "Kyle completely changed how I think about fitness. I&apos;d tried everything before — keto, fasting, random YouTube programs. None of it stuck. In 16 weeks with Kyle, I lost 42 pounds and actually understand WHY it worked.",
    duration: '16 weeks'
  },
  {
    id: 2,
    name: 'Jasmine Rodriguez',
    handle: '@jasmine.transforms',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80',
    result: '-28 lbs',
    rating: 5,
    text: "As a mom of two with zero time, I needed something that actually fit my life. Kyle built around my schedule, my stress levels, even my meal preferences. Down 28 lbs and I feel stronger than I did in my 20s.",
    duration: '20 weeks'
  },
  {
    id: 3,
    name: 'DeShawn Williams',
    handle: '@deshawn_lifts',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    result: '+18 lbs muscle',
    rating: 5,
    text: "I came to Kyle as a skinny guy who&apos;d been lifting for 2 years with no results. He identified the exact issues with my training and nutrition. 20 weeks later — 18 pounds of muscle and a completely different physique.",
    duration: '20 weeks'
  },
  {
    id: 4,
    name: 'Brittany Chen',
    handle: '@brittany.wellness',
    avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_19afc7ba0-1772402519403.png",
    result: '-35 lbs',
    rating: 5,
    text: "The check-ins, the adjustments, the accountability — Kyle is always there. I never felt like just another client. He genuinely cares about your progress. Best investment I&apos;ve ever made.",
    duration: '18 weeks'
  },
  {
    id: 5,
    name: 'Antoine Davis',
    handle: '@antoinedavis_fit',
    avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_1de94545b-1767813603344.png",
    result: 'Competed + won',
    rating: 5,
    text: "Kyle prepped me for my first NPC show. The man knows competition prep better than anyone I&apos;ve worked with. Walked on stage at 4.8% body fat and placed first in my class. Unreal.",
    duration: '24 weeks'
  }];


export default function TestimonialsSection() {
  const [active, setActive] = useState(2);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (!isPaused) {
      intervalRef.current = setInterval(() => {
        setActive((prev) => (prev + 1) % testimonials.length);
      }, 5000);
    }
    return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
  }, [isPaused]);

  return (
    <section id="testimonials" className="relative z-10 py-24 lg:py-32 overflow-hidden">
      {/* BG accent */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] opacity-[0.03] rounded-full"
        style={{ background: 'radial-gradient(ellipse, #AAFF00, transparent)' }}
        aria-hidden="true" />


      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">

        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center items-center gap-4 mb-6">
            <div className="w-0.5 h-5 bg-accent-green" />
            <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-text-muted">Client Stories</span>
            <div className="w-0.5 h-5 bg-accent-green" />
          </div>
          <h2 className="font-display font-black leading-tight tracking-tight text-white" style={{ fontSize: 'clamp(2rem, 5vw, 5rem)' }}>
            Real People. <span className="italic gradient-text">Real Results.</span>
          </h2>
          <p className="text-text-muted text-sm mt-4">Trusted by 500+ clients across the US.</p>
        </div>

        {/* Testimonial carousel */}
        <div
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}>

          <div className="flex gap-6 overflow-hidden">
            {testimonials.map((t, i) => {
              const offset = i - active;
              const isActive = offset === 0;
              const isAdjacent = Math.abs(offset) === 1;

              return (
                <div
                  key={t.id}
                  onClick={() => setActive(i)}
                  className={`insta-card flex-shrink-0 cursor-pointer transition-all duration-500 ${isActive ?
                      'w-full md:w-[400px] opacity-100 scale-100' :
                      isAdjacent ?
                        'hidden md:block md:w-[320px] opacity-50 scale-95' :
                        'hidden lg:block lg:w-[280px] opacity-25 scale-90'}`
                  }
                  style={{
                    transform: `translateX(${offset * 0}px)`
                  }}>

                  {/* Instagram header */}
                  <div className="flex items-center justify-between p-4 border-b border-border-subtle">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-accent-green/30">
                        <AppImage
                          src={t.avatar}
                          alt={`${t.name} profile photo`}
                          width={40}
                          height={40}
                          className="object-cover w-full h-full" />

                      </div>
                      <div>
                        <p className="text-white text-sm font-bold">{t.name}</p>
                        <p className="text-text-muted text-[10px]">{t.handle}</p>
                      </div>
                    </div>
                    {/* IG dots */}
                    <svg width="20" height="20" fill="white" viewBox="0 0 24 24">
                      <circle cx="12" cy="5" r="1.5" />
                      <circle cx="12" cy="12" r="1.5" />
                      <circle cx="12" cy="19" r="1.5" />
                    </svg>
                  </div>

                  {/* Message content */}
                  <div className="p-5">
                    {/* Stars */}
                    <div className="flex gap-1 mb-3">
                      {Array.from({ length: t.rating }).map((_, j) =>
                        <svg key={j} width="14" height="14" fill="#AAFF00" viewBox="0 0 24 24">
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                        </svg>
                      )}
                    </div>

                    <p className="text-text-muted text-sm leading-relaxed mb-5">
                      &ldquo;{t.text}&rdquo;
                    </p>

                    <div className="flex items-center justify-between pt-4 border-t border-border-subtle">
                      <div>
                        <div className="text-accent-green font-black text-xl font-display">{t.result}</div>
                        <div className="text-text-subtle text-[10px] uppercase tracking-[0.15em]">{t.duration} program</div>
                      </div>
                      {/* IG heart */}
                      <div className="flex items-center gap-1 text-text-muted">
                        <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                        </svg>
                        <span className="text-[10px]">❤️</span>
                      </div>
                    </div>
                  </div>
                </div>);

            })}
          </div>

          {/* Navigation */}
          <div className="flex justify-center items-center gap-6 mt-10">
            <button
              onClick={() => setActive((p) => (p - 1 + testimonials.length) % testimonials.length)}
              className="w-12 h-12 rounded-full border border-border-subtle flex items-center justify-center text-text-muted hover:border-accent-green hover:text-accent-green transition-all"
              aria-label="Previous testimonial">

              <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, i) =>
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`h-0.5 rounded-full transition-all duration-300 ${i === active ? 'w-12 bg-accent-green' : 'w-7 bg-border-subtle'}`
                  }
                  aria-label={`Go to testimonial ${i + 1}`} />

              )}
            </div>

            <button
              onClick={() => setActive((p) => (p + 1) % testimonials.length)}
              className="w-12 h-12 rounded-full border border-accent-green/40 flex items-center justify-center text-accent-green hover:bg-accent-green hover:text-bg-primary transition-all"
              aria-label="Next testimonial">

              <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>);

}