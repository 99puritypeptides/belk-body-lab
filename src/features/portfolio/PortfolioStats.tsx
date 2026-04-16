'use client';

import React, { useEffect, useRef, useState } from 'react';
import { useTranslations } from 'next-intl';

function CountUp({ end, suffix, started }: { end: number; suffix: string; started: boolean }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!started) return;
    const duration = 1500;
    const steps = 60;
    const increment = end / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [started, end]);

  return (
    <span>
      {count}{suffix}
    </span>
  );
}

export default function PortfolioStats() {
  const t = useTranslations('portfolioStats');
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const stats = [
    { value: 500, suffix: '+', label: t('stat1Label'), icon: '🏆' },
    { value: 42, suffix: t('stat2Suffix'), label: t('stat2Label'), icon: '🔥' },
    { value: 98, suffix: '%', label: t('stat3Label'), icon: '⭐' },
    { value: 7, suffix: t('stat4Suffix'), label: t('stat4Label'), icon: '📅' },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setStarted(true); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="relative z-10 py-16 border-y border-border-subtle">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl mb-3">{stat.icon}</div>
              <div className="font-display font-black text-3xl lg:text-5xl text-accent-green leading-none mb-2">
                <CountUp end={stat.value} suffix={stat.suffix} started={started} />
              </div>
              <div className="text-[10px] font-bold uppercase tracking-[0.15em] text-text-muted">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}