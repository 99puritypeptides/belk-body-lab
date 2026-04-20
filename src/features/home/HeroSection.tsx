'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { motion, useScroll, useTransform, useMotionValue } from 'framer-motion';
import { ShieldCheckIcon, MapPinIcon, TrophyIcon } from '@heroicons/react/24/outline';
import CTAButton from '@/components/ui/CTAButton';

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
  const opacityImage = useTransform(scrollYProgress, [0, 0.5], [1, 0.5]);

  // Mouse hover glow effect
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = ({ clientX, clientY, currentTarget }: React.MouseEvent) => {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  };

  return (
    <section 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative h-screen w-full bg-[#050505] flex items-center justify-center overflow-hidden"
    >
      {/* Background radial glow */}
      <motion.div 
        className="absolute inset-0 z-0 pointer-events-none opacity-30"
        style={{
          background: useTransform(
            [mouseX, mouseY],
            ([x, y]) => `radial-gradient(600px circle at ${x}px ${y}px, rgba(170, 255, 0, 0.08), transparent 80%)`
          )
        }}
      />

      {/* Grid Overlay */}
      <div 
        className="absolute inset-0 z-0 opacity-10 pointer-events-none" 
        style={{ 
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)', 
          backgroundSize: '60px 60px' 
        }} 
      />

      <div className="max-w-[1700px] mx-auto h-full flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-12 lg:gap-24 px-6 lg:px-12 relative z-20">
        
        {/* Left Column: Typography & CTAs */}
        <motion.div 
          style={{ y: yText }}
          className="flex-1 text-center lg:text-left z-30"
        >
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 mb-6"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-accent-green animate-pulse" />
            <span className="text-[9px] font-black uppercase tracking-[0.3em] text-white/50">Engineered for Performance</span>
          </motion.div>

          <h1 className="font-jumpshot text-white text-4xl md:text-6xl lg:text-7xl xl:text-8xl leading-[0.9] uppercase tracking-tighter mb-8">
            <motion.span 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="block"
            >
              {t('title')}
            </motion.span>
            <motion.span 
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="block gradient-text filter drop-shadow-[0_0_25px_rgba(255,255,255,0.15)]"
            >
              {t('titleHighlight')}
            </motion.span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="max-w-[500px] text-gray-400 text-base md:text-lg font-medium leading-relaxed mb-10 mx-auto lg:mx-0"
          >
            {t('subtitle')}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6"
          >
            <CTAButton href="/#contact">
              {t('ctaPrimary')}
            </CTAButton>
            
            <motion.button 
              whileHover={{ x: 5 }}
              className="group text-white/40 text-[11px] font-black uppercase tracking-[0.3em] hover:text-white transition-colors flex items-center gap-3"
            >
              Browse Results
              <div className="w-8 h-[1px] bg-white/20 group-hover:w-12 group-hover:bg-accent-green transition-all" />
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Right Column: Visual Centerpiece */}
        <div className="flex-1 lg:flex-[1.2] relative w-full h-full flex items-end justify-center lg:justify-end">
          {/* Main Hero Image with Parallax */}
          <motion.div 
            style={{ y: yImage, opacity: opacityImage }}
            className="relative w-full h-[90%] lg:h-[110%] z-10 origin-bottom scale-100 lg:scale-110"
          >
            <Image
              src="/images/hero/model-image.png"
              alt="Elite Transformation"
              fill
              className="object-contain object-bottom"
              priority
            />
          </motion.div>

          {/* Floating Glass Cards */}
          <FloatingCard 
            icon={<ShieldCheckIcon className="w-5 h-5 text-accent-green" />}
            title="90-Day Results"
            subtitle="Guaranteed Protocol"
            className="top-[5%] left-0 lg:left-0"
            delay={1.2}
          />
          
          <FloatingCard 
            icon={<MapPinIcon className="w-5 h-5 text-accent-green" />}
            title="Atlanta & Remote"
            subtitle="Global Coaching"
            className="bottom-[15%] right-0 lg:right-0"
            delay={1.4}
          />

          <FloatingCard 
            icon={<TrophyIcon className="w-5 h-5 text-accent-green" />}
            title="500+ Clients"
            subtitle="Physics Mastered"
            className="top-[35%] -right-2 lg:right-10"
            delay={1.6}
          />

          {/* Background Ambient Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] bg-accent-green/5 blur-[120px] rounded-full pointer-events-none z-0" />
        </div>

      </div>

      {/* Social Proof Footer - Integrated */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex items-center gap-6 py-4 px-8 rounded-full bg-white/[0.02] border border-white/5 backdrop-blur-md z-40 hidden md:flex"
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
           Trusted by <span className="text-white">500+ Elite Performers</span>
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
      className={`absolute z-30 p-5 rounded-3xl bg-black/40 backdrop-blur-xl border border-white/10 shadow-2xl flex items-center gap-4 min-w-[200px] group hover:border-accent-green/50 transition-colors ${className}`}
    >
      <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center shrink-0 group-hover:bg-accent-green/10 transition-colors">
        {icon}
      </div>
      <div>
        <p className="text-white font-black text-sm uppercase tracking-tight">{title}</p>
        <p className="text-white/40 text-[10px] font-bold uppercase tracking-widest">{subtitle}</p>
      </div>
    </motion.div>
  );
}