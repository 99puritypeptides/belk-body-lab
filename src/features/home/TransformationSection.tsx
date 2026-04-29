'use client';

import React, { useEffect } from 'react';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { ZoomParallax } from '@/components/ui/zoom-parallax';

/**
 * TransformationsSection — Site-wide client results showcase.
 *
 * Transitions from a clean editorial header into an immersive
 * ZoomParallax effect using real client transformation images.
 */

const TRANSFORMATION_IMAGES = [
  { src: '/images/client-transformation/client-1.jpeg', alt: 'Elite Physique Transformation' },
  { src: '/images/client-transformation/client-2.jpeg', alt: 'Sustainable Fat Loss Result' },
  { src: '/images/client-transformation/client-3.jpeg', alt: 'Muscle Building Milestone' },
  { src: '/images/client-transformation/client-4.jpeg', alt: 'Competition Prep Success' },
  { src: '/images/client-transformation/client-5.jpeg', alt: 'Functional Strength Gain' },
  { src: '/images/client-transformation/client-6.jpeg', alt: 'Lifestyle Habit Transformation' },
  { src: '/images/client-transformation/client-7.jpeg', alt: 'Complete Body Recomposition' },
];

export default function TransformationsSection() {
  const t = useTranslations('transformations');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add('visible');
        });
      },
      { threshold: 0.1 }
    );
    document.querySelectorAll('.scroll-reveal-init').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="transformations" className="relative z-10 bg-[#080808]">
      {/* ── Section Intro ── */}
      <div className="max-w-[1600px] mx-auto px-6 lg:px-10 pt-24 lg:pt-32 pb-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="scroll-reveal-init">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-0.5 h-5 bg-white/20" />
              <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-white/40">
                {t('label')}
              </span>
            </div>
            <h2
              className="font-display font-black leading-tight tracking-tight text-white"
              style={{ fontSize: 'clamp(2.5rem, 6vw, 5.5rem)' }}
            >
              {t('title')}{' '}
              <span className="text-white">
                {t('titleItalic')}
              </span>
            </h2>
          </div>
          <p className="text-white/40 text-base md:text-lg font-light max-w-sm scroll-reveal-init stagger-2 leading-relaxed">
            {t('description')}
          </p>
        </div>
      </div>

      {/* ── Immersive Parallax Effect ── */}
      <div className="w-full">
        <ZoomParallax images={TRANSFORMATION_IMAGES} />
      </div>

      {/* ── Section Outro ── */}
      <div className="max-w-[1600px] mx-auto px-6 lg:px-10 pt-16 pb-24 lg:pb-32 text-center">
        <div className="scroll-reveal-init">
          <p className="text-white/20 text-xs font-black uppercase tracking-[0.3em] mb-10">
            Real Science. Raw Results.
          </p>
          <Link
            href="/portfolio"
            className="group inline-flex items-center gap-5 px-12 py-5 border border-white/10 text-white font-black text-[13px] uppercase tracking-[0.25em] rounded-full hover:bg-white hover:text-black hover:border-white transition-all duration-500 shadow-xl"
          >
            {t('viewAll')}
            <div className="w-6 h-6 rounded-full bg-white/10 group-hover:bg-black flex items-center justify-center transition-colors">
              <svg
                width="14"
                height="14"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                viewBox="0 0 24 24"
                className="group-hover:translate-x-0.5 transition-transform"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}