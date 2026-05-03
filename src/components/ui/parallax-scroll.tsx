'use client';
import { useScroll, useTransform } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { cn } from '@/lib/utils';

export const ParallaxScroll = ({
  images,
  className,
}: {
  images: { src: string; alt: string }[];
  className?: string;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Use scroll over the whole window for this section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'], 
  });

  // Create stronger parallax effects for the columns
  // Mobile and desktop will share these transforms
  const translateYFirst = useTransform(scrollYProgress, [0, 1], [250, -250]);
  const translateYSecond = useTransform(scrollYProgress, [0, 1], [-250, 250]);
  const translateYThird = useTransform(scrollYProgress, [0, 1], [250, -250]);

  // Calculations for desktop (3 columns)
  const third = Math.ceil(images.length / 3);
  const desktopFirstPart = images.slice(0, third);
  const desktopSecondPart = images.slice(third, 2 * third);
  const desktopThirdPart = images.slice(2 * third);

  // Calculations for mobile (2 columns)
  const half = Math.ceil(images.length / 2);
  const mobileFirstPart = images.slice(0, half);
  const mobileSecondPart = images.slice(half);

  return (
    <div
      className={cn('w-full relative py-10 lg:py-20 overflow-hidden', className)}
      ref={containerRef}
    >
      {/* ── DESKTOP & TABLET LAYOUT (3 Columns) ── */}
      <div className="hidden md:grid grid-cols-3 items-start max-w-[1600px] mx-auto gap-6 lg:gap-10 px-6 lg:px-10">
        <div className="grid gap-6 lg:gap-10">
          {desktopFirstPart.map((el, idx) => (
            <motion.div style={{ y: translateYFirst }} key={'desktop-1-' + idx} className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl group">
              <Image src={el.src} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" fill sizes="33vw" alt={el.alt} />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-500" />
            </motion.div>
          ))}
        </div>
        <div className="grid gap-6 lg:gap-10">
          {desktopSecondPart.map((el, idx) => (
            <motion.div style={{ y: translateYSecond }} key={'desktop-2-' + idx} className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl group md:mt-20">
              <Image src={el.src} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" fill sizes="33vw" alt={el.alt} />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-500" />
            </motion.div>
          ))}
        </div>
        <div className="grid gap-6 lg:gap-10">
          {desktopThirdPart.map((el, idx) => (
            <motion.div style={{ y: translateYThird }} key={'desktop-3-' + idx} className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl group">
              <Image src={el.src} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" fill sizes="33vw" alt={el.alt} />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-500" />
            </motion.div>
          ))}
        </div>
      </div>

      {/* ── MOBILE LAYOUT (2 Columns) ── */}
      <div className="grid md:hidden grid-cols-2 items-start gap-4 px-4">
        <div className="grid gap-4">
          {mobileFirstPart.map((el, idx) => (
            <motion.div style={{ y: translateYFirst }} key={'mobile-1-' + idx} className="relative w-full aspect-[4/5] rounded-xl overflow-hidden shadow-xl group">
              <Image src={el.src} className="w-full h-full object-cover" fill sizes="50vw" alt={el.alt} />
              <div className="absolute inset-0 bg-black/10" />
            </motion.div>
          ))}
        </div>
        <div className="grid gap-4">
          {mobileSecondPart.map((el, idx) => (
            <motion.div style={{ y: translateYSecond }} key={'mobile-2-' + idx} className="relative w-full aspect-[4/5] rounded-xl overflow-hidden shadow-xl group mt-12">
              <Image src={el.src} className="w-full h-full object-cover" fill sizes="50vw" alt={el.alt} />
              <div className="absolute inset-0 bg-black/10" />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
