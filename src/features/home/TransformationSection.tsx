'use client';

import React, { useEffect } from 'react';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { ParallaxScroll } from '@/components/ui/parallax-scroll';
import { motion } from 'framer-motion';
import PremiumIcon from '@/components/ui/PremiumIcon';

const MotionLink = motion(Link);

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
  { src: '/images/client-transformation/client-1.jpeg', alt: 'Elite Physique Transformation' },
  { src: '/images/client-transformation/client-2.jpeg', alt: 'Sustainable Fat Loss Result' },
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
        <ParallaxScroll images={TRANSFORMATION_IMAGES} />
      </div>

      {/* ── Section Outro ── */}
      <div className="max-w-[1600px] mx-auto px-6 lg:px-10 pt-16 pb-24 lg:pb-32 text-center">
        <div className="scroll-reveal-init">
          <p className="text-white/40 text-xs sm:text-sm font-bold uppercase tracking-[0.2em] mb-10 max-w-2xl mx-auto leading-relaxed">
            {t('outro')}
          </p>
          <MotionLink
            href="/portfolio"
            whileHover="hover"
            className="group inline-flex items-center gap-5 px-12 py-5 border border-white/10 text-white font-black text-[13px] uppercase tracking-[0.25em] rounded-full hover:bg-white hover:text-black hover:border-white transition-all duration-500 shadow-xl"
          >
            {t('viewAll')}
            <div className="w-8 h-8 rounded-full bg-white/10 group-hover:bg-black flex items-center justify-center transition-colors text-white">
              <PremiumIcon name="arrow" size={18} />
            </div>
          </MotionLink>
        </div>
      </div>
    </section>
  );
}