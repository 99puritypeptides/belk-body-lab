'use client';

import { useScroll, useTransform, motion, MotionValue } from 'framer-motion';
import { useRef } from 'react';
import AppImage from './AppImage';

interface ParallaxImage {
  src: string;
  alt?: string;
}

interface ZoomParallaxProps {
  /** Array of images to be displayed in the parallax effect max 7 images */
  images: ParallaxImage[];
}

export function ZoomParallax({ images }: ZoomParallaxProps) {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end'],
  });

  const scale4 = useTransform(scrollYProgress, [0, 1], [1, 4]);
  const scale5 = useTransform(scrollYProgress, [0, 1], [1, 5]);
  const scale6 = useTransform(scrollYProgress, [0, 1], [1, 6]);
  const scale8 = useTransform(scrollYProgress, [0, 1], [1, 8]);
  const scale9 = useTransform(scrollYProgress, [0, 1], [1, 9]);

  const scales: MotionValue<number>[] = [scale4, scale5, scale6, scale5, scale6, scale8, scale9];

  return (
    <div ref={container} className="relative h-[300vh] bg-[#080808]">
      <div className="sticky top-0 h-screen overflow-hidden">
        {images.map(({ src, alt }, index) => {
          const scale = scales[index % scales.length];

          // NEW OVERHAUL: Vertical focus for mobile, horizontal spread for desktop
          const positionClasses = [
            /* 0: Center (Hero) */
            'z-10',
            /* 1: Mobile: Far Top | Desktop: Top Left */
            '[&>div]:!-top-[40vh] md:[&>div]:!-top-[30vh] md:[&>div]:!left-[5vw] md:[&>div]:!h-[30vh] md:[&>div]:!w-[35vw]',
            /* 2: Mobile: Far Bottom | Desktop: Top Right */
            '[&>div]:!top-[40vh] md:[&>div]:!-top-[10vh] md:[&>div]:!-left-[25vw] md:[&>div]:!h-[45vh] md:[&>div]:!w-[20vw]',
            /* 3: Mobile: Near Top Left | Desktop: Center Left */
            '[&>div]:!-top-[18vh] [&>div]:!-left-[5vw] md:[&>div]:!left-[27.5vw] md:[&>div]:!h-[25vh] md:[&>div]:!w-[25vw]',
            /* 4: Mobile: Near Bottom Right | Desktop: Bottom Right */
            '[&>div]:!top-[18vh] [&>div]:!left-[5vw] md:[&>div]:!top-[27.5vh] md:[&>div]:!left-[5vw] md:[&div]:!h-[25vh] md:[&>div]:!w-[20vw]',
            /* 5: Mobile: Mid Top Right | Desktop: Bottom Left */
            '[&>div]:!-top-[28vh] [&>div]:!left-[8vw] md:[&>div]:!top-[27.5vh] md:[&>div]:!-left-[22.5vw] md:[&>div]:!h-[25vh] md:[&>div]:!w-[30vw]',
            /* 6: Mobile: Mid Bottom Left | Desktop: Bottom Center */
            '[&>div]:!top-[28vh] [&>div]:!-left-[8vw] md:[&>div]:!top-[22.5vh] md:[&>div]:!left-[25vw] md:[&>div]:!h-[15vh] md:[&>div]:!w-[15vw]',
          ];

          const posClass = positionClasses[index] || '';

          return (
            <motion.div
              key={index}
              style={{ scale }}
              className={`absolute top-0 flex h-full w-full items-center justify-center ${posClass}`}
            >
              <div className="relative h-[45vh] w-[75vw] md:h-[25vh] md:w-[25vw] overflow-hidden rounded-2xl border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.8)]">
                {/* Stealth Aesthetic: Subtle overlay and metallic border */}
                <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                <div className="absolute inset-0 z-20 border border-white/5 rounded-2xl pointer-events-none" />
                
                <AppImage
                  src={src || '/placeholder.svg'}
                  alt={alt || `Transformation client ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
