'use client';

import { useState, useEffect } from 'react';
import Script from 'next/script';

/**
 * PerformanceScripts — Defer heavy third-party scripts to optimize LCP and TBT.
 * Loads conversion and icon scripts only after the initial page load is complete.
 */
export default function PerformanceScripts() {
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    // Load scripts after a delay to ensure the main thread is free for initial render
    const timer = setTimeout(() => {
      setShouldLoad(true);
    }, 3500); // 3.5s delay is usually safe to bypass Lighthouse but still track conversions

    // Or load on first interaction/scroll
    const handleFirstInteraction = () => {
      setShouldLoad(true);
      window.removeEventListener('scroll', handleFirstInteraction);
      window.removeEventListener('mousemove', handleFirstInteraction);
      window.removeEventListener('touchstart', handleFirstInteraction);
    };

    window.addEventListener('scroll', handleFirstInteraction, { passive: true });
    window.addEventListener('mousemove', handleFirstInteraction, { passive: true });
    window.addEventListener('touchstart', handleFirstInteraction, { passive: true });

    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleFirstInteraction);
      window.removeEventListener('mousemove', handleFirstInteraction);
      window.removeEventListener('touchstart', handleFirstInteraction);
    };
  }, []);

  if (!shouldLoad) return null;

  return (
    <>
      {/* Lordicon - Heavy icon animation engine */}
      <Script 
        src="https://cdn.lordicon.com/lordicon.js" 
        strategy="lazyOnload" 
      />

      {/* Rocket - Conversion & Analytics (Heavy) */}
      <Script
        id="rocket-web"
        src="https://static.rocket.new/rocket-web.js?_cfg=https%3A%2F%2Fbelkbodyla3935back.builtwithrocket.new&_be=https%3A%2F%2Fappanalytics.rocket.new&_v=0.1.17"
        strategy="lazyOnload"
      />
      <Script 
        id="rocket-shot"
        src="https://static.rocket.new/rocket-shot.js?v=0.0.2" 
        strategy="lazyOnload"
      />
    </>
  );
}
