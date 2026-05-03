'use client';

import React, { useRef, useEffect } from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { motion, useScroll, useTransform, useMotionValue, animate } from 'framer-motion';
import { ShieldCheckIcon, MapPinIcon, TrophyIcon } from '@heroicons/react/24/outline';
import { Link } from '@/i18n/navigation';
import CTAButton from '@/components/ui/CTAButton';
import PremiumIcon from '@/components/ui/PremiumIcon';

const MotionLink = motion(Link);

export default function HeroSection() {
  const t = useTranslations('hero');
  const containerRef = useRef<HTMLElement>(null);

  // Parallax effects for scroll
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const yText = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const yImage = useTransform(scrollYProgress, [0, 1], [0, -100]);
  
  // More aggressive scroll fade to reveal text naturally on mobile
  const opacityImage = useTransform(scrollYProgress, [0, 0.25], [1, 0.1]);

  const peekValue = useMotionValue(0); // Start at 0 (revealed text) for mount animation
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    // Initial mount reveal
    animate(peekValue, 1, { duration: 1.5, delay: 0.8, ease: [0.16, 1, 0.3, 1] });
  }, []);

  const handleMouseMove = ({ clientX, clientY, currentTarget }: React.MouseEvent) => {
    animate(peekValue, 0, { duration: 0.3, ease: "easeOut" });

    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      animate(peekValue, 1, { duration: 1.2, ease: [0.16, 1, 0.3, 1] });
    }, 500); 
  };

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onTouchStart={() => animate(peekValue, 0, { duration: 0.3 })}
      onTouchEnd={() => animate(peekValue, 1, { duration: 1.2 })}
      className="relative h-[100svh] w-full bg-[#050505] flex items-center justify-center overflow-hidden"
    >
      {/* 1. Background Layer: Typography behind the image (Constrained to top half, below header) */}
      <div className="absolute inset-x-0 top-0 h-1/2 z-0 flex flex-col items-center justify-start pt-[15vh] md:pt-[18vh] pointer-events-none select-none">
        <motion.div
          style={{ 
            y: yText,
            scale: useTransform(peekValue, [0, 1], [1.05, 1]),
            filter: useTransform(peekValue, [0, 1], ['blur(0px)', 'blur(2px)']),
            willChange: "transform, filter"
          }}
          className="w-full text-center px-4"
        >
          <h1 className="font-jumpshot text-white text-[9vw] md:text-[7vw] leading-[0.85] uppercase tracking-[-0.04em] opacity-100">
            <motion.span 
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="block text-white/90"
            >
              {t('title')}
            </motion.span>
            <motion.span 
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="block text-accent-green drop-shadow-[0_0_30px_rgba(170,255,0,0.3)]"
            >
              {t('titleHighlight')}
            </motion.span>
          </h1>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="max-w-[550px] text-white/40 text-[10px] md:text-[12px] font-bold uppercase tracking-[0.25em] leading-relaxed mx-auto mt-6"
          >
            {t('subtitle')}
          </motion.p>
        </motion.div>
      </div>

      {/* 2. Middle Layer: The Hero Image (Enlarged, Animates away on movement) */}
      <div className="absolute inset-0 z-10 pointer-events-none flex items-end justify-center">
        <motion.div
          style={{ 
            opacity: useTransform(peekValue, [0, 1], [0.15, 1]),
            scale: useTransform(peekValue, [0, 1], [0.96, 1]),
            filter: useTransform(peekValue, [0, 1], ['blur(15px)', 'blur(0px)']),
            willChange: "transform, opacity, filter"
          }}
          className="relative w-full h-full flex items-end justify-center"
        >
          <motion.div
            style={{ y: yImage, opacity: opacityImage }}
            className="relative w-full h-[85vh] md:h-[95vh] lg:h-[100vh] max-w-[1400px]"
          >
            <Image
              src="/images/hero/model-image.png"
              alt="Elite Transformation"
              fill
              className="object-contain object-bottom brightness-[1.1] contrast-[1.1]"
              priority
            />
          </motion.div>
        </motion.div>
      </div>

      {/* 2.5 Bottom Gradient Overlay for Button Visibility */}
      <div className="absolute inset-x-0 bottom-0 h-[35vh] bg-gradient-to-t from-black via-black/80 to-transparent z-20 pointer-events-none" />

      {/* 3. Foreground Layer: UI Elements & CTAs */}

      <div className="relative z-50 w-full h-full flex flex-col items-center justify-between py-12 px-6">
        {/* Top Spacer */}
        <div className="h-20" />

        {/* Removed Performance Lab Pill */}

        {/* CTA Section - Fixed at the bottom */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-10 mt-auto mb-12"
        >
          <CTAButton href="/#contact">
            {t('ctaPrimary')}
          </CTAButton>

          <MotionLink
            href="/#process"
            whileHover="hover"
            className="group text-white/50 text-[11px] font-black uppercase tracking-[0.3em] hover:text-white transition-colors flex items-center gap-4"
          >
            {t('ctaSecondary')}
            <PremiumIcon name="arrow" size={14} />
          </MotionLink>
        </motion.div>
      </div>

      {/* Floating Stat Cards - Strategically Positioned */}
      <motion.div 
        style={{ 
          opacity: useTransform(peekValue, [0, 1], [0, 1]),
          x: useTransform(peekValue, [0, 1], [-20, 0]),
          filter: useTransform(peekValue, [0, 1], ['blur(10px)', 'blur(0px)']),
          willChange: "transform, opacity, filter"
        }}
        className="absolute inset-0 pointer-events-none z-40"
      >
        <FloatingCard 
          icon={<ShieldCheckIcon className="w-5 h-5 text-accent-green" />}
          title="90-Day Results"
          subtitle="Guaranteed Protocol"
          className="top-[25%] md:top-[45%] left-[4%] lg:left-[8%]"
          delay={1.2}
        />
        
        <FloatingCard 
          icon={<MapPinIcon className="w-5 h-5 text-accent-green" />}
          title="Atlanta & Remote"
          subtitle="Global Coaching"
          className="top-[40%] md:top-[70%] left-[2%] lg:left-[6%]"
          delay={1.4}
        />

        <FloatingCard 
          icon={<TrophyIcon className="w-5 h-5 text-accent-green" />}
          title="500+ Clients"
          subtitle="Physics Mastered"
          className="top-[15%] md:top-[35%] right-[4%] lg:right-[8%]"
          delay={1.6}
        />
      </motion.div>

      {/* Social Proof Footer */}
      <motion.div 
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 2 }}
        className="absolute bottom-10 right-10 flex items-center gap-6 py-4 px-6 rounded-2xl bg-white/[0.02] border border-white/5 backdrop-blur-xl z-50 hidden xl:flex"
      >
        <div className="flex -space-x-3">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="w-8 h-8 rounded-full border-2 border-black overflow-hidden bg-gray-800">
               <Image src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="user" width={32} height={32} />
            </div>
          ))}
        </div>
        <div className="h-4 w-px bg-white/10" />
        <p className="text-[10px] font-black uppercase tracking-widest text-white/40">
           Trusted by <span className="text-white">500+ Elite</span>
        </p>
      </motion.div>

    </section>
  );
}

interface FloatingCardProps {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  className: string;
  delay: number;
}

function FloatingCard({ icon, title, subtitle, className, delay }: FloatingCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
      className={`absolute z-30 p-3 md:p-5 rounded-2xl md:rounded-3xl bg-black/40 backdrop-blur-xl border border-white/10 shadow-2xl flex items-center gap-3 md:gap-4 min-w-[160px] md:min-w-[200px] group hover:border-accent-green/50 transition-colors ${className}`}
    >
      <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-white/5 flex items-center justify-center shrink-0 group-hover:bg-accent-green/10 transition-colors">
        {icon}
      </div>
      <div>
        <p className="text-white font-black text-[11px] md:text-sm uppercase tracking-tight">{title}</p>
        <p className="text-white/40 text-[8px] md:text-[10px] font-bold uppercase tracking-widest">{subtitle}</p>
      </div>
    </motion.div>
  );
}