'use client';
import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { motion, AnimatePresence } from 'framer-motion';
import { StarIcon } from '@heroicons/react/24/solid';

interface Testimonial {
  id: string;
  name: string;
  role: string;
  text: string;
  rating: number;
  date: string;
  image: string;
}

export default function TestimonialsSection() {
  const t = useTranslations('testimonials');
  
  const testimonials: Testimonial[] = [
    {
      id: '1',
      name: 'Diana Johnston',
      role: t('r1'),
      text: t('t1'),
      rating: 4.9,
      date: t('d1'),
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80'
    },
    {
      id: '2',
      name: 'Edward Alexander',
      role: t('r2'),
      text: t('t2'),
      rating: 5.0,
      date: t('d2'),
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80'
    },
    {
      id: '3',
      name: 'Lauren Contreras',
      role: t('r3'),
      text: t('t3'),
      rating: 4.8,
      date: t('d3'),
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80'
    },
    {
      id: '4',
      name: 'Marcus Thompson',
      role: t('r4'),
      text: t('t4'),
      rating: 4.9,
      date: t('d4'),
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80'
    },
    {
      id: '5',
      name: 'Sarah Jenkins',
      role: t('r5'),
      text: t('t5'),
      rating: 5.0,
      date: t('d5'),
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80'
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const nextTestimonial = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  }, [testimonials.length]);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(nextTestimonial, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, nextTestimonial]);

  const activeTestimonial = testimonials[activeIndex];

  return (
    <section id="testimonials" className="relative py-20 lg:py-32 bg-[#050505] overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute top-1/2 left-1/2 lg:left-0 -translate-x-1/2 lg:translate-x-0 -translate-y-1/2 w-[600px] lg:w-[800px] h-[600px] lg:h-[800px] bg-accent-green/5 rounded-full blur-[100px] lg:blur-[120px] pointer-events-none" />

      <div className="max-w-[1600px] mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="mb-16 lg:mb-28 text-center lg:text-left">
          <div className="w-12 h-1 bg-accent-green mb-6 mx-auto lg:mx-0" />
          <h2 className="text-white text-3xl md:text-4xl lg:text-5xl font-black uppercase tracking-tight">
            {t('title')} <span className="text-accent-green">{t('titleItalic')}</span>
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-32">
          
          {/* LEFT: The Rotating Arc (Desktop: Side Arc, Mobile: Top Arc) */}
          <div className="relative w-full lg:w-1/2 flex justify-center h-[200px] sm:h-[250px] lg:h-[500px]">
            {/* The Circle - Centered on Mobile, Offset on Desktop */}
            <div className="absolute w-[600px] h-[600px] md:w-[800px] md:h-[800px] lg:w-[700px] lg:h-[700px] top-[100px] lg:top-1/2 left-1/2 lg:left-[-300px] -translate-x-1/2 lg:translate-x-0 lg:-translate-y-1/2 transition-all duration-700">
              
              {/* The Arc Line */}
              <div className="absolute inset-0 rounded-full border border-white/5 mask-arc-mobile lg:mask-arc-desktop" />

              {/* Avatars on Arc */}
              {testimonials.map((item, index) => {
                const relativeIndex = (index - activeIndex + testimonials.length) % testimonials.length;
                let offset = relativeIndex;
                if (offset > testimonials.length / 2) offset -= testimonials.length;
                
                const angleStep = 40; 
                const angle = offset * angleStep;
                const isVisible = Math.abs(offset) <= 2;
                
                return (
                  <motion.div
                    key={item.id}
                    initial={false}
                    animate={{
                      rotate: angle,
                      opacity: isVisible ? (offset === 0 ? 1 : 0.3) : 0,
                      scale: offset === 0 ? 1.15 : 0.75,
                    }}
                    transition={{ type: 'spring', stiffness: 100, damping: 20 }}
                    style={{ 
                      position: 'absolute',
                      inset: 0,
                      transformOrigin: 'center center',
                    }}
                    className="pointer-events-none"
                  >
                    {/* Avatar Container - Responsive Position (Top on Mobile, Right on Desktop) */}
                    <div 
                      className="absolute top-0 lg:top-1/2 left-1/2 lg:left-auto lg:right-0 -translate-x-1/2 lg:translate-x-1/2 -translate-y-1/2 pointer-events-auto cursor-pointer"
                      onClick={() => {
                        setActiveIndex(index);
                        setIsAutoPlaying(false);
                      }}
                    >
                      <motion.div 
                        animate={{ rotate: -angle }}
                        transition={{ type: 'spring', stiffness: 100, damping: 20 }}
                        className="flex flex-col lg:flex-row items-center gap-4 lg:gap-6"
                      >
                        <div className={`relative w-14 h-14 md:w-20 lg:w-24 h-14 md:h-20 lg:h-24 rounded-full p-1 transition-all duration-500 ${offset === 0 ? 'bg-accent-green shadow-[0_0_30px_rgba(170,255,0,0.25)]' : 'bg-white/10 opacity-60'}`}>
                           <div className="w-full h-full rounded-full overflow-hidden bg-gray-900 border-2 border-black relative">
                              <Image 
                                src={item.image} 
                                alt={item.name} 
                                fill 
                                className={`object-cover transition-all duration-500 ${offset === 0 ? 'grayscale-0' : 'grayscale'}`}
                              />
                           </div>
                        </div>

                        {/* Name next to active avatar (Desktop only) */}
                        <AnimatePresence mode="wait">
                          {offset === 0 && (
                            <motion.div
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              exit={{ opacity: 0, x: -10 }}
                              className="hidden lg:block whitespace-nowrap"
                            >
                              <h4 className="text-white font-black text-xl uppercase leading-none mb-1">{item.name}</h4>
                              <div className="flex items-center gap-2">
                                <StarIcon className="w-3 h-3 text-accent-green" />
                                <span className="text-white/40 text-[9px] font-bold uppercase tracking-widest">
                                  {item.rating} • {item.date}
                                </span>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </motion.div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* RIGHT: Testimonial Content */}
          <div 
            className="w-full lg:w-1/2 text-center lg:text-left"
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
          >
            <div className="relative pt-8 lg:pt-0 lg:pl-12">
              {/* Large Quote Mark */}
              <span className="absolute left-1/2 lg:left-0 -translate-x-1/2 lg:translate-x-0 -top-4 lg:-top-12 text-[80px] lg:text-[140px] font-serif text-accent-green/10 leading-none select-none pointer-events-none">
                &ldquo;
              </span>

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.4, ease: 'easeOut' }}
                  className="relative z-10"
                >
                  <p className="text-white/90 text-lg md:text-xl lg:text-3xl font-medium italic leading-relaxed mb-10 font-serif">
                    <span className="text-accent-green text-3xl lg:text-5xl mr-1 leading-none inline-block align-middle">&ldquo;</span>
                    {activeTestimonial.text}
                  </p>
                  
                  {/* Name Display for Mobile/Tablet */}
                  <div className="lg:hidden mb-8">
                    <h4 className="text-white font-black text-xl uppercase tracking-tighter mb-1">{activeTestimonial.name}</h4>
                    <div className="flex items-center justify-center gap-3">
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <StarIcon 
                            key={i} 
                            className={`w-3 h-3 ${i < Math.floor(activeTestimonial.rating) ? 'text-accent-green' : 'text-white/10'}`} 
                          />
                        ))}
                      </div>
                      <span className="text-accent-green/60 text-[10px] font-bold uppercase tracking-[0.2em]">{activeTestimonial.role}</span>
                    </div>
                  </div>

                  <div className="hidden lg:flex items-center gap-6">
                    <div className="flex items-center gap-1.5">
                      {[...Array(5)].map((_, i) => (
                        <StarIcon 
                          key={i} 
                          className={`w-4 h-4 ${i < Math.floor(activeTestimonial.rating) ? 'text-accent-green' : 'text-white/10'}`} 
                        />
                      ))}
                    </div>
                    <div className="h-4 w-px bg-white/10" />
                    <span className="text-white/30 text-[10px] font-bold uppercase tracking-[0.3em]">
                      Verified Client Result
                    </span>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Progress Indicators */}
              <div className="flex justify-center lg:justify-start gap-3 mt-12 lg:mt-20">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setActiveIndex(index);
                      setIsAutoPlaying(false);
                    }}
                    className={`h-1.5 transition-all duration-500 rounded-full ${index === activeIndex ? 'w-10 md:w-16 bg-accent-green' : 'w-4 md:w-6 bg-white/10'}`}
                  />
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>

      <style jsx>{`
        .mask-arc-desktop {
          mask-image: radial-gradient(circle at right, black 35%, transparent 65%);
          -webkit-mask-image: radial-gradient(circle at right, black 35%, transparent 65%);
        }
        .mask-arc-mobile {
          mask-image: radial-gradient(circle at top, black 35%, transparent 65%);
          -webkit-mask-image: radial-gradient(circle at top, black 35%, transparent 65%);
        }
      `}</style>
    </section>
  );
}