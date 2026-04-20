'use client';

import React, { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import AppImage from '@/components/ui/AppImage';

type FilterType = 'all' | 'fat-loss' | 'muscle-gain' | 'total';

interface Transformation {
  id: number;
  name: string;
  age: number;
  location: string;
  before: string;
  after: string;
  result: string;
  duration: string;
  lostGained: string;
  category: FilterType;
  quote: string;
  beforeAlt: string;
  afterAlt: string;
}

const transformations: Transformation[] = [
  { id: 1, name: 'Marcus Thompson', age: 34, location: 'Atlanta, GA', before: "https://img.rocket.new/generatedImages/rocket_gen_img_147ef9d3c-1772900606821.png", after: "https://img.rocket.new/generatedImages/rocket_gen_img_147ef9d3c-1772900606821.png", result: '-42 lbs', duration: '16 weeks', lostGained: 'Lost 42 lbs of fat', category: 'fat-loss', quote: 'Kyle changed my life. Period.', beforeAlt: 'Marcus before training', afterAlt: "Marcus after Kyle's coaching" },
  { id: 2, name: 'Jordan Mitchell', age: 27, location: 'Houston, TX', before: "https://img.rocket.new/generatedImages/rocket_gen_img_1a7531ef5-1768393842142.png", after: "https://img.rocket.new/generatedImages/rocket_gen_img_1a7531ef5-1768393842142.png", result: '+18 lbs', duration: '20 weeks', lostGained: 'Gained 18 lbs of muscle', category: 'muscle-gain', quote: 'Finally packed on real size.', beforeAlt: 'Jordan before', afterAlt: 'Jordan after muscle gain program' },
  { id: 3, name: 'Devon Richardson', age: 41, location: 'Chicago, IL', before: "https://img.rocket.new/generatedImages/rocket_gen_img_16af18dcb-1771537251384.png", after: "https://img.rocket.new/generatedImages/rocket_gen_img_16af18dcb-1771537251384.png", result: '-28 lbs', duration: '14 weeks', lostGained: 'Lost 28 lbs + toned', category: 'total', quote: "At 41, I'm in the best shape of my life.", beforeAlt: 'Devon before', afterAlt: 'Devon after transformation' },
  { id: 4, name: 'Jasmine Rodriguez', age: 29, location: 'Miami, FL', before: "https://img.rocket.new/generatedImages/rocket_gen_img_10da64f19-1772119173105.png", after: "https://img.rocket.new/generatedImages/rocket_gen_img_10da64f19-1772119173105.png", result: '-35 lbs', duration: '18 weeks', lostGained: 'Lost 35 lbs of fat', category: 'fat-loss', quote: 'Best investment of my life.', beforeAlt: 'Jasmine before', afterAlt: 'Jasmine after fat loss program' },
  { id: 5, name: 'Antoine Davis', age: 32, location: 'Dallas, TX', before: "https://img.rocket.new/generatedImages/rocket_gen_img_1084ad59d-1775346217783.png", after: "https://img.rocket.new/generatedImages/rocket_gen_img_1084ad59d-1775346217783.png", result: 'Stage ready', duration: '24 weeks', lostGained: 'Competition prep — 4.8% BF', category: 'total', quote: 'Placed 1st in my NPC class.', beforeAlt: 'Antoine before competition prep', afterAlt: 'Antoine competition ready' },
  { id: 6, name: 'Brittany Chen', age: 38, location: 'Los Angeles, CA', before: "https://img.rocket.new/generatedImages/rocket_gen_img_1c880507b-1769179474495.png", after: "https://img.rocket.new/generatedImages/rocket_gen_img_1c880507b-1769179474495.png", result: '+12 lbs', duration: '16 weeks', lostGained: 'Gained 12 lbs of lean muscle', category: 'muscle-gain', quote: 'I finally have the body I always wanted.', beforeAlt: 'Brittany before', afterAlt: 'Brittany after muscle building program' },
];

interface ModalProps {
  item: Transformation;
  onClose: () => void;
  t: (key: string) => string;
}

function TransformModal({ item, onClose, t }: ModalProps) {
  React.useEffect(() => {
    const handleKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="relative w-full max-w-4xl bg-bg-card border border-border-subtle rounded-2xl overflow-hidden" onClick={(e) => e.stopPropagation()}>
        <button onClick={onClose} className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-bg-primary/80 backdrop-blur-sm flex items-center justify-center text-text-muted hover:text-white transition-colors" aria-label="Close modal">
          <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M18 6L6 18M6 6l12 12" /></svg>
        </button>
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="relative" style={{ aspectRatio: '3/4' }}>
            <AppImage src={item.before} alt={item.beforeAlt} fill sizes="50vw" className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-4 left-4 px-3 py-1.5 bg-black/70 backdrop-blur-sm rounded-full text-[10px] font-bold uppercase tracking-[0.2em] text-white">{t('before')}</div>
          </div>
          <div className="relative" style={{ aspectRatio: '3/4' }}>
            <AppImage src={item.after} alt={item.afterAlt} fill sizes="50vw" className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-4 left-4 px-3 py-1.5 bg-accent-green/90 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] text-bg-primary">{t('after')}</div>
          </div>
        </div>
        <div className="p-6 lg:p-8 border-t border-border-subtle">
          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-4">
            <div>
              <h3 className="font-display font-black text-2xl text-white">{item.name}</h3>
              <p className="text-text-muted text-sm">{item.age} {t('yearsOld')} · {item.location}</p>
            </div>
            <div className="text-right">
              <div className="font-display font-black text-3xl text-accent-green">{item.result}</div>
              <div className="text-text-muted text-xs">{item.duration} {t('program')}</div>
            </div>
          </div>
          <div className="flex flex-wrap gap-3 mb-5">
            <span className="px-3 py-1.5 bg-accent-green/10 border border-accent-green/20 rounded-full text-accent-green text-[10px] font-bold uppercase tracking-[0.15em]">{item.lostGained}</span>
            <span className="px-3 py-1.5 bg-bg-card-hover border border-border-subtle rounded-full text-text-muted text-[10px] font-bold uppercase tracking-[0.15em]">{item.duration}</span>
          </div>
          <blockquote className="text-white text-base font-light italic leading-relaxed border-l-2 border-accent-green pl-4 mb-6">&ldquo;{item.quote}&rdquo;</blockquote>
          <Link href="/#contact" className="inline-flex items-center gap-2 px-8 py-4 bg-accent-green text-bg-primary font-bold text-sm uppercase tracking-[0.15em] rounded-full hover:bg-white transition-all duration-300 hover:scale-105">
            {t('modalCta')}
            <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function PortfolioGallery() {
  const t = useTranslations('portfolioGallery');
  const [activeFilter, setActiveFilter] = useState<FilterType>('all');
  const [selectedItem, setSelectedItem] = useState<Transformation | null>(null);
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  const filters: { label: string; value: FilterType }[] = [
    { label: t('filterAll'), value: 'all' },
    { label: t('filterFatLoss'), value: 'fat-loss' },
    { label: t('filterMuscleGain'), value: 'muscle-gain' },
    { label: t('filterTotal'), value: 'total' },
  ];

  const getCategoryLabel = (category: FilterType): string => {
    if (category === 'fat-loss') return t('catFatLoss');
    if (category === 'muscle-gain') return t('catMuscleGain');
    return t('catTotal');
  };

  const filtered = activeFilter === 'all' ? transformations : transformations.filter((tr) => tr.category === activeFilter);

  return (
    <section className="relative z-10 py-16 lg:py-24">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-10">

        {/* Filters */}
        <div className="flex flex-wrap gap-3 justify-center mb-14">
          {filters.map((f) => (
            <button key={f.value} onClick={() => setActiveFilter(f.value)} className={`filter-btn ${activeFilter === f.value ? 'active' : ''}`}>
              {f.label}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((item, i) => (
            <div
              key={item.id}
              className="transform-card group cursor-pointer"
              style={{ opacity: 1, transform: 'translateY(0)', transition: `opacity 0.5s ease ${i * 0.08}s, transform 0.5s ease ${i * 0.08}s` }}
              onClick={() => setSelectedItem(item)}
              onMouseEnter={() => setHoveredId(item.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div className="relative overflow-hidden rounded-2xl" style={{ aspectRatio: '3/4' }}>
                <div className="absolute inset-0">
                  <AppImage src={item.before} alt={item.beforeAlt} fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" className="object-cover grayscale" />
                </div>
                <div className="absolute inset-0 overflow-hidden transition-all duration-700 ease-out" style={{ width: hoveredId === item.id ? '100%' : '50%' }}>
                  <div className="absolute inset-0" style={{ width: hoveredId === item.id ? '100%' : '200%' }}>
                    <AppImage src={item.after} alt={item.afterAlt} fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" className="object-cover" />
                  </div>
                </div>
                {hoveredId !== item.id && (
                  <div className="absolute top-0 bottom-0 w-0.5 bg-accent-green/60 z-10" style={{ left: '50%' }}>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-accent-green/80 flex items-center justify-center">
                      <svg width="10" height="10" fill="none" stroke="#0A0A0A" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M9 18l-6-6 6-6M15 6l6 6-6 6" /></svg>
                    </div>
                  </div>
                )}
                <div className="absolute top-3 left-3 z-20">
                  <span className="px-2 py-1 bg-black/70 backdrop-blur-sm rounded-full text-[9px] font-bold uppercase tracking-[0.15em] text-white/80">B</span>
                </div>
                <div className="absolute top-3 right-3 z-20">
                  <span className="px-2 py-1 bg-accent-green/80 backdrop-blur-sm rounded-full text-[9px] font-bold uppercase tracking-[0.15em] text-bg-primary">A</span>
                </div>
                <div className="absolute bottom-3 left-3 z-20">
                  <span className="px-3 py-1 bg-bg-primary/80 backdrop-blur-sm rounded-full text-[9px] font-bold uppercase tracking-[0.15em] text-accent-green border border-accent-green/30">
                    {getCategoryLabel(item.category)}
                  </span>
                </div>
                <div className="overlay" />
                <div className="card-info z-30">
                  <h3 className="text-white font-bold text-lg mb-1">{item.name}</h3>
                  <p className="text-accent-green font-black text-xl font-display">{item.result}</p>
                  <p className="text-white/70 text-xs">{item.lostGained} · {item.duration}</p>
                  <div className="mt-3 flex items-center gap-2 text-white/60 text-xs font-bold uppercase tracking-[0.15em]">
                    <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8" /><path d="M21 21l-4.35-4.35" /></svg>
                    {t('clickToView')}
                  </div>
                </div>
              </div>
              <div className="pt-4 px-1 flex items-center justify-between">
                <div>
                  <p className="text-white font-semibold text-sm">{item.name}</p>
                  <p className="text-text-muted text-xs">{item.age} · {item.location}</p>
                </div>
                <div className="text-right">
                  <p className="text-accent-green font-black text-lg font-display">{item.result}</p>
                  <p className="text-text-subtle text-[10px]">{item.duration}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-20">
            <p className="text-text-muted text-lg">{t('emptyState')}</p>
          </div>
        )}

        {/* Bottom CTA */}
        <div className="mt-20 text-center">
          <div className="inline-block p-px rounded-2xl bg-gradient-to-r from-accent-green/30 via-accent-green to-accent-green/30">
            <div className="bg-bg-card rounded-2xl px-10 py-10">
              <h3 className="font-display font-black text-3xl lg:text-4xl text-white mb-4">
                {t('ctaTitle')} <span className="gradient-text">{t('ctaTitleItalic')}</span>
              </h3>
              <p className="text-text-muted text-base mb-8 max-w-md mx-auto">{t('ctaDesc')}</p>
              <Link href="/#contact" className="inline-flex items-center gap-3 px-10 py-5 bg-accent-green text-bg-primary font-black text-sm uppercase tracking-[0.2em] rounded-full hover:bg-white transition-all duration-300 hover:scale-105 glow-green">
                {t('ctaBtn')}
                <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </Link>
              
              <div className="mt-8">
                <Link 
                  href="/packages" 
                  className="text-[11px] font-black uppercase tracking-[0.3em] text-white/40 hover:text-white transition-colors flex items-center justify-center gap-3 group/link"
                >
                  Not sure which one to pick? Browse Packages
                  <div className="w-1 h-1 rounded-full bg-accent-green group-hover/link:scale-[2.5] transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {selectedItem && <TransformModal item={selectedItem} onClose={() => setSelectedItem(null)} t={(key: string) => t(key as any)} />}
    </section>
  );
}