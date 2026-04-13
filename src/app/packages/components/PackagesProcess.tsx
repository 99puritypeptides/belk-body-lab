'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

const steps = [
  {
    number: '01',
    title: 'Free Consultation Call',
    description: 'A 20-minute strategy call with Kyle to discuss your goals, current fitness level, and lifestyle. No sales pitch — just real conversation.',
    icon: '📞',
    tag: 'Discovery',
    image: '/images/process/step-1.png',
  },
  {
    number: '02',
    title: 'Custom Plan Built',
    description: 'Within 48 hours, Kyle delivers your fully personalized training and nutrition program — built specifically for your body and goals.',
    icon: '📋',
    tag: 'Strategy',
    image: '/images/process/step-2.png',
  },
  {
    number: '03',
    title: 'Training Begins',
    description: 'You start your program with full access to exercise video demonstrations, tracking tools, and Kyle\'s direct support.',
    icon: '🏋️',
    tag: 'Execution',
    image: '/images/process/step-3.png',
  },
  {
    number: '04',
    title: 'Weekly Monitoring',
    description: 'Regular check-ins, progress tracking, and plan adjustments ensure you\'re always moving forward — never plateauing.',
    icon: '📊',
    tag: 'Optimization',
    image: '/images/process/step-4.png',
  },
  {
    number: '05',
    title: 'Final Transformation',
    description: 'Reach your goal, document your results, and decide on your next phase. Many clients continue — the transformation never has to stop.',
    icon: '🏆',
    tag: 'Results',
    image: '/images/process/step-5.png',
  },
];

export default function PackagesProcess() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const startTimeRef = useRef(Date.now());
  const duration = 6000; // 6 seconds per step

  const handleCardClick = (idx: number) => {
    setActiveIndex(idx);
    startTimeRef.current = Date.now();
    setProgress(0);
  };

  useEffect(() => {
    let animationFrameId: number;
    // Reset timer purely on activeIndex change
    startTimeRef.current = Date.now();

    const updateProgress = () => {
      const elapsed = Date.now() - startTimeRef.current;
      const newProgress = Math.min((elapsed / duration) * 100, 100);
      
      setProgress(newProgress);
      
      if (newProgress >= 100) {
        setActiveIndex((prev) => (prev + 1) % steps.length);
      } else {
        animationFrameId = requestAnimationFrame(updateProgress);
      }
    };

    animationFrameId = requestAnimationFrame(updateProgress);

    return () => cancelAnimationFrame(animationFrameId);
  }, [activeIndex]);

  return (
    <section className="relative z-10 py-20 lg:py-28 bg-[#070707]">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-10">

        <div className="text-center mb-16 lg:mb-20">
          <div className="flex justify-center items-center gap-4 mb-6">
            <div className="w-0.5 h-5 bg-accent-green" />
            <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-text-muted">How It Works</span>
            <div className="w-0.5 h-5 bg-accent-green" />
          </div>
          <h2 className="font-jumpshot font-black leading-tight tracking-tight text-white mb-6" style={{ fontSize: 'clamp(2rem, 5vw, 4.5rem)' }}>
            The <span className="gradient-text">Process.</span>
          </h2>
        </div>

        {/* Desktop / Tablet Layout */}
        <div className="hidden md:flex flex-row gap-4 xl:gap-6 h-[480px] lg:h-[550px]">
          {steps.map((step, i) => {
            const isActive = activeIndex === i;
            return (
              <div
                key={step.number}
                onClick={() => handleCardClick(i)}
                className={`group relative flex flex-col h-full bg-bg-card border border-border-subtle rounded-3xl p-5 lg:p-8 cursor-pointer overflow-hidden transition-all duration-[700ms] ease-[cubic-bezier(0.25,1,0.3,1)] ${
                  isActive ? 'flex-[14] min-w-[280px] bg-[#101010]' : 'flex-[3] min-w-[80px] lg:min-w-[120px] opacity-60 hover:opacity-100 hover:bg-[#141414]'
                }`}
              >
                {/* Progress Vertical Line */}
                <div className="absolute top-6 bottom-6 left-0 w-1.5 bg-white/5 rounded-r-full overflow-hidden">
                  <div
                    className="w-full bg-accent-green"
                    style={{ 
                      height: isActive ? `${progress}%` : '0%',
                    }}
                  />
                </div>

                {/* Content Wrapper */}
                <div className="pl-3 lg:pl-4 h-full flex flex-col">
                  {/* Step Number */}
                  <span className={`font-display font-medium text-3xl lg:text-4xl tracking-tight transition-colors duration-500 mb-2 lg:mb-4 ${
                    isActive ? 'text-accent-green' : 'text-text-muted/40'
                  }`}>
                    {step.number}
                  </span>
                  
                  {/* Title area to allow reading when collapsed */}
                  <div className={`transition-all duration-500 flex-shrink-0 ${isActive ? 'mb-4' : 'opacity-80'}`}>
                     <h3 className={`font-display font-bold text-sm md:text-base lg:text-xl transition-colors duration-500 ${
                       isActive ? 'text-white' : 'text-text-muted group-hover:text-white'
                     } ${isActive ? '' : 'line-clamp-3'}`}>
                       {step.title}
                     </h3>
                  </div>

                  {/* Expandable Body */}
                  <div className={`flex flex-col flex-grow overflow-hidden transition-all duration-[700ms] ease-[cubic-bezier(0.25,1,0.3,1)] ${
                    isActive ? 'opacity-100 translate-y-0 mt-2' : 'opacity-0 translate-y-8 flex-grow-0 mt-0 h-0'
                  }`}>
                    <p className="text-text-muted text-xs lg:text-sm leading-relaxed mb-6 max-w-[90%] lg:max-w-[85%]">
                      {step.description}
                    </p>

                    {/* Image / Mockup Placeholder Context */}
                    <div className="mt-auto w-full h-[180px] xl:h-[220px] rounded-2xl bg-[#080808] border border-border-subtle relative overflow-hidden z-10 group-hover:border-white/10 transition-colors">
                      <Image 
                        src={step.image} 
                        alt={step.title} 
                        fill 
                        sizes="(max-width: 1024px) 100vw, 30vw"
                        className={`object-cover transition-all duration-[700ms] ${isActive ? 'opacity-70 scale-100' : 'opacity-30 scale-110 group-hover:opacity-50'}`} 
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/10 to-transparent z-10" />
                      <span className="text-[10px] lg:text-xs uppercase tracking-[0.2em] text-accent-green font-bold absolute bottom-4 left-4 z-20">{step.tag}</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Mobile Layout */}
        <div className="md:hidden flex flex-col gap-6">
          {steps.map((step) => (
            <div
              key={step.number}
              className="relative flex flex-col bg-bg-card border border-border-subtle rounded-3xl p-6 overflow-hidden"
            >
              {/* Static full green line on left */}
              <div className="absolute top-6 bottom-6 left-0 w-1.5 bg-accent-green rounded-r-full" />
              
              <div className="pl-4">
                <span className="font-display font-medium text-3xl text-accent-green tracking-tight block mb-2">
                  {step.number}
                </span>
                <h3 className="font-display font-bold text-lg text-white mb-3">
                  {step.title}
                </h3>
                <p className="text-text-muted text-sm leading-relaxed mb-6">
                  {step.description}
                </p>
                <div className="w-full h-[220px] rounded-2xl bg-[#080808] border border-border-subtle relative overflow-hidden">
                   <Image 
                     src={step.image} 
                     alt={step.title} 
                     fill 
                     sizes="100vw"
                     className="object-cover opacity-70" 
                   />
                   <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/10 to-transparent z-10" />
                   <span className="text-[10px] uppercase tracking-[0.2em] text-accent-green font-bold absolute bottom-4 left-4 z-20">{step.tag}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}