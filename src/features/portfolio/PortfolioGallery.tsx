'use client';

import React, { useState } from 'react';
import { useTranslations } from 'next-intl';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from '@/i18n/navigation';
import AppImage from '@/components/ui/AppImage';
import PremiumIcon from '@/components/ui/PremiumIcon';
import ScrollRevealText from '@/components/ui/ScrollRevealText';

const MotionLink = motion(Link);

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
  caption?: string;
}

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
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 lg:p-12"
    >
      <div className="absolute inset-0 bg-black/95 backdrop-blur-sm" onClick={onClose} />
      
      <motion.div 
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
        className="relative w-full max-w-6xl bg-[#080808] border border-white/10 rounded-[2rem] overflow-hidden shadow-2xl flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-8 lg:p-10 border-b border-white/5 flex items-center justify-between bg-black/40 backdrop-blur-md">
          <div className="space-y-1">
            <h3 className="font-display font-black text-3xl lg:text-5xl text-white uppercase tracking-tighter leading-none">
              {item.name}
            </h3>
            <p className="text-white/30 text-[10px] font-black uppercase tracking-[0.4em]">
              {item.age} Y/O · {item.location}
            </p>
          </div>
          <button 
            onClick={onClose} 
            className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:bg-white/10 transition-all duration-300"
          >
            <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M18 6L6 18M6 6l12 12" /></svg>
          </button>
        </div>

        <div className="flex-1 overflow-y-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-0 h-full">
            {/* Comparison Images */}
            <div className="flex h-full min-h-[400px] lg:min-h-0 bg-black/20">
              <div className="flex-1 relative overflow-hidden border-r border-white/5 group">
                <AppImage src={item.before} alt={item.beforeAlt} fill className="object-cover grayscale group-hover:grayscale-0 transition-all duration-1000" />
                <div className="absolute top-6 left-6 px-4 py-1.5 bg-black/60 backdrop-blur-md rounded-full text-[9px] font-black uppercase tracking-[0.4em] text-white/40 border border-white/5">Before</div>
              </div>
              <div className="flex-1 relative overflow-hidden group">
                <AppImage src={item.after} alt={item.afterAlt} fill className="object-cover group-hover:scale-105 transition-transform duration-[2s]" />
                <div className="absolute top-6 left-6 px-4 py-1.5 bg-white/90 backdrop-blur-md rounded-full text-[9px] font-black uppercase tracking-[0.4em] text-black shadow-lg shadow-white/10">After</div>
              </div>
            </div>

            {/* Data & Content */}
            <div className="p-8 lg:p-12 space-y-12 flex flex-col justify-between">
              <div className="space-y-12">
                {/* Stats Grid */}
                <div className="grid grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <span className="text-[9px] font-black uppercase tracking-[0.4em] text-white/20">Protocol Result</span>
                    <div className="font-display font-black text-3xl lg:text-4xl text-white tracking-tight">{item.result}</div>
                  </div>
                  <div className="space-y-3">
                    <span className="text-[9px] font-black uppercase tracking-[0.4em] text-white/20">Transformation Time</span>
                    <div className="font-display font-black text-3xl lg:text-4xl text-white/60 tracking-tight">{item.duration}</div>
                  </div>
                </div>

                {/* Testimonial */}
                <div className="space-y-6 pt-12 border-t border-white/5">
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-[1px] bg-accent-green" />
                    <span className="text-[9px] font-black uppercase tracking-[0.4em] text-accent-green">Client Insights</span>
                  </div>
                  <p className="text-white/50 text-lg lg:text-xl font-light leading-relaxed italic">
                    &ldquo;{item.caption || item.quote}&rdquo;
                  </p>
                </div>
              </div>

              {/* Action */}
              <MotionLink 
                href="/contact" 
                onClick={onClose}
                whileHover="hover"
                className="group flex items-center justify-between w-full p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white hover:border-white transition-all duration-500 mt-12"
              >
                <div className="flex flex-col text-left">
                  <span className="text-[9px] font-black uppercase tracking-[0.4em] text-white/40 group-hover:text-black/50 transition-colors mb-1">Begin Your Protocol</span>
                  <span className="text-sm font-black uppercase tracking-[0.2em] text-white group-hover:text-black transition-colors">Apply for Coaching</span>
                </div>
                <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white group-hover:bg-black group-hover:border-black transition-all">
                  <PremiumIcon name="arrow" size={18} />
                </div>
              </MotionLink>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}


export default function PortfolioGallery() {
  const t = useTranslations('portfolioGallery');
  const [activeFilter, setActiveFilter] = useState<FilterType>('all');
  const [selectedItem, setSelectedItem] = useState<any | null>(null);

  // @ts-ignore
  const transformationsRaw = t.raw('items') || [];
  
  const transformations = React.useMemo(() => transformationsRaw.map((item: any, index: number) => ({
    ...item,
    id: index + 1,
    before: index === 0 ? "/male_fat_loss_before_1777845687856.png" : 
            index === 1 ? "/female_toning_before_1777845726658.png" :
            index === 2 ? "/male_bulk_before_1777845763138.png" :
            index === 3 ? "/male_fat_loss_before_1777845687856.png" :
            index === 4 ? "/female_toning_before_1777845726658.png" :
            "/male_bulk_before_1777845763138.png",
    after: index === 0 ? "/male_fat_loss_after_1777845707144.png" : 
           index === 1 ? "/female_toning_after_1777845742643.png" :
           index === 2 ? "/male_bulk_after_1777845780399.png" :
           index === 3 ? "/male_fat_loss_after_1777845707144.png" :
           index === 4 ? "/female_toning_after_1777845742643.png" :
           "/male_bulk_after_1777845780399.png",
    beforeAlt: `${item.name} before`,
    afterAlt: `${item.name} after`,
    lostGained: item.caption,
    quote: item.caption
  })), [transformationsRaw]);

  const filters: { label: string; value: FilterType }[] = [
    { label: t('filterAll'), value: 'all' },
    { label: t('filterFatLoss'), value: 'fat-loss' },
    { label: t('filterMuscleGain'), value: 'muscle-gain' },
    { label: t('filterTotal'), value: 'total' },
  ];

  const filtered = activeFilter === 'all' ? transformations : transformations.filter((tr: any) => tr.category === activeFilter);

  return (
    <>
    <section className="relative z-10 pt-48 pb-24 lg:pt-64 lg:pb-40 bg-black">
      <div className="max-w-[1800px] mx-auto px-6 lg:px-20">

        {/* Filters */}
        <div className="flex flex-wrap gap-6 justify-start mb-24">
          {filters.map((f) => (
            <button 
              key={f.value} 
              onClick={() => setActiveFilter(f.value)} 
              className={`px-10 py-4 rounded-full text-[11px] font-black uppercase tracking-[0.4em] transition-all duration-700 border ${
                activeFilter === f.value ? 'bg-white text-black border-white' : 'text-white/30 border-white/5 hover:border-white/20'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Short SEO Intro */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mb-32 lg:mb-48 space-y-10"
        >
          <div className="flex items-center gap-4">
            <div className="w-12 h-[1px] bg-accent-green" />
            <span className="text-[10px] font-black uppercase tracking-[0.5em] text-accent-green">
              {t('introTitle')}
            </span>
          </div>
          <h2 className="text-white/80 text-xl md:text-3xl font-light leading-relaxed tracking-tight border-l border-white/10 pl-10">
            {t('introText')}
          </h2>
        </motion.div>

        {/* Cinematic Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          <AnimatePresence mode="popLayout">
            {filtered.map((item: any, i: number) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.8, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
                className="group cursor-pointer relative aspect-[3/4] overflow-hidden bg-[#050505]"
                onClick={() => setSelectedItem(item)}
              >
                {/* Image States */}
                <div className="absolute inset-0">
                  <AppImage src={item.before} alt={item.beforeAlt} fill className="object-cover grayscale opacity-40 group-hover:opacity-0 transition-opacity duration-[1.5s] ease-in-out" />
                </div>
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-[1.5s] ease-in-out">
                  <AppImage src={item.after} alt={item.afterAlt} fill className="object-cover group-hover:scale-105 transition-transform duration-[3s] ease-out" />
                </div>

                {/* Dark Gradient Overlay for Text */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-700" />
                
                {/* Hover UI Overlay */}
                <div className="absolute inset-0 p-8 flex flex-col justify-end translate-y-8 group-hover:translate-y-0 transition-transform duration-700 ease-out">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                    <span className="inline-block px-4 py-2 bg-white backdrop-blur-md rounded-full text-[9px] font-black uppercase tracking-[0.4em] text-black shadow-lg shadow-white/10 mb-6">
                      View Dossier
                    </span>
                    <div className="space-y-2">
                      <h3 className="font-display font-black text-4xl lg:text-5xl text-white uppercase tracking-tighter leading-none line-clamp-1">
                        {item.name}
                      </h3>
                      <div className="flex items-center gap-4">
                        <div className="font-display font-black text-2xl lg:text-3xl text-accent-green leading-none">
                          {item.result}
                        </div>
                        <div className="w-1 h-1 rounded-full bg-white/20" />
                        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white/50">{item.duration}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Default UI (Visible before hover) */}
                <div className="absolute top-8 left-8 flex items-center gap-4 group-hover:opacity-0 transition-opacity duration-500">
                  <div className="w-8 h-[1px] bg-white/20" />
                  <span className="text-[9px] font-black uppercase tracking-[0.5em] text-white/40">Case.{String(i+1).padStart(2, '0')}</span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Empty State */}
        {filtered.length === 0 && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-48">
            <p className="text-white/20 text-[10px] font-black uppercase tracking-[1em]">{t('emptyState')}</p>
          </motion.div>
        )}
      </div>
      </section>

      <AnimatePresence>
        {selectedItem && <TransformModal item={selectedItem} onClose={() => setSelectedItem(null)} t={(key: string) => t(key as any)} />}
      </AnimatePresence>
    </>
  );
}