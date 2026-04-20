'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import { StaggerTestimonials, type TestimonialData } from '@/components/ui/stagger-testimonials';

export default function TestimonialsSection() {
  const t = useTranslations('testimonials');

  const testimonialsData: TestimonialData[] = [
    {
      id: 't1',
      testimonial: t('t1'),
      by: `Marcus Thompson — ${t('r1')} (${t('d1')})`,
      imgSrc: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 't2',
      testimonial: t('t2'),
      by: `Jasmine Rodriguez — ${t('r2')} (${t('d2')})`,
      imgSrc: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 't3',
      testimonial: t('t3'),
      by: `DeShawn Williams — ${t('r3')} (${t('d3')})`,
      imgSrc: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 't4',
      testimonial: t('t4'),
      by: `Brittany Chen — ${t('r4')} (${t('d4')})`,
      imgSrc: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 't5',
      testimonial: t('t5'),
      by: `Antoine Davis — ${t('r5')} (${t('d5')})`,
      imgSrc: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <section id="testimonials" className="relative z-10 py-24 lg:py-32 bg-bg-primary overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] opacity-[0.03] rounded-full" style={{ background: 'radial-gradient(ellipse, #AAFF00, transparent)' }} aria-hidden="true" />

      <div className="max-w-[1600px] mx-auto px-6 lg:px-10">
        <div className="text-center mb-16">
          <div className="flex justify-center items-center gap-4 mb-6">
            <div className="w-0.5 h-5 bg-accent-green" />
            <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-text-muted">{t('label')}</span>
            <div className="w-0.5 h-5 bg-accent-green" />
          </div>
          <h2 className="font-display font-black leading-tight tracking-tight text-white" style={{ fontSize: 'clamp(2rem, 5vw, 5rem)' }}>
            {t('title')} <span className="gradient-text">{t('titleItalic')}</span>
          </h2>
          <p className="text-text-muted text-sm mt-4">{t('subtitle')}</p>
        </div>

        <div className="relative">
          <StaggerTestimonials data={testimonialsData} />
        </div>
      </div>
    </section>
  );
}