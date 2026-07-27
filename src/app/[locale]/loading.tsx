import React from 'react';
import HeaderSkeleton from '@/components/layout/HeaderSkeleton';
import { Skeleton } from '@/components/ui/Skeleton';

export default function GlobalLoading() {
  return (
    <div className="relative min-h-screen bg-[#0A0A0A] overflow-hidden">
      {/* Header Skeleton */}
      <HeaderSkeleton />
      
      {/* Main Content Skeleton Area */}
      <main className="pt-32 pb-24 px-6 lg:px-10 max-w-[1600px] mx-auto">
        {/* Generic Hero Skeleton */}
        <div className="mb-24">
          <Skeleton className="w-1/3 h-4 mb-8 rounded-full" />
          <Skeleton className="w-2/3 h-16 md:h-24 mb-10 rounded-2xl" />
          <Skeleton className="w-1/2 h-6 mb-12 rounded-full" />
          <div className="flex gap-4">
            <Skeleton className="w-48 h-14 rounded-full" />
            <Skeleton className="w-48 h-14 rounded-full" />
          </div>
        </div>

        {/* Generic Grid Skeleton */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="space-y-4">
              <Skeleton className="w-full aspect-[4/3] rounded-[2.5rem]" />
              <div className="space-y-2 px-2">
                <Skeleton className="w-full h-6 rounded-full" />
                <Skeleton className="w-2/3 h-4 rounded-full" />
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
