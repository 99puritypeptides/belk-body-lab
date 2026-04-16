import React from 'react';
import { Skeleton } from '../ui/Skeleton';

export default function HeaderSkeleton() {
  return (
    <nav className="fixed top-0 left-0 w-full z-[510] py-6 flex justify-center pointer-events-none bg-[#0A0A0A]">
      <div className="w-full max-w-[1600px] px-4 md:px-8 lg:px-12 flex items-center justify-between">
        
        {/* LEFT SIDE */}
        <div className="flex items-center gap-3 md:gap-4">
          {/* Logo Skeleton */}
          <Skeleton className="w-[140px] md:w-[180px] h-[48px] md:h-[56px] rounded-full" />
          
          {/* Nav Skeleton (Desktop) */}
          <div className="hidden lg:flex items-center bg-white/5 px-8 py-3.5 rounded-full border border-white/5">
            <Skeleton className="w-[400px] h-4 rounded-full" />
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-3">
          {/* Locale Switcher */}
          <Skeleton className="w-10 h-10 rounded-full" />
          
          {/* Desktop CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            <Skeleton className="w-32 h-12 rounded-full" />
            <Skeleton className="w-48 h-12 rounded-full" />
          </div>
          
          {/* Mobile Menu Button */}
          <Skeleton className="lg:hidden w-14 h-14 rounded-full" />
        </div>

      </div>
    </nav>
  );
}
