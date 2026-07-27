'use client';

import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

export default function CustomScrollbar() {
  const { scrollYProgress } = useScroll();
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <>
      <style jsx global>{`
        /* Hide native scrollbar */
        ::-webkit-scrollbar {
          display: none;
        }
        * {
          scrollbar-width: none;
          -ms-overflow-style: none;
        }
      `}</style>

      <div className="fixed right-8 top-1/2 -translate-y-1/2 h-[60vh] w-[2px] bg-white/5 z-[100] hidden lg:block rounded-full overflow-hidden">
        {/* The Track Line */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/10 to-transparent" />
        
        {/* The Progress Fill */}
        <motion.div 
          className="absolute top-0 left-0 w-full bg-accent-green origin-top"
          style={{ scaleY, height: '100%' }}
        />

        {/* The Glowing Handle/Dot */}
        <motion.div 
          className="absolute left-1/2 -translate-x-1/2 w-3 h-3 bg-accent-green rounded-full shadow-[0_0_15px_rgba(170,255,0,0.8)] z-10"
          style={{ 
            top: useSpring(useScroll().scrollYProgress, { stiffness: 100, damping: 30 }) as any,
            y: '-50%' 
          }}
          animate={{
            top: `${scrollYProgress.get() * 100}%`
          }}
        />
      </div>


    </>
  );
}
