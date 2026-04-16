import React from 'react';
import { Skeleton } from '@/components/ui/Skeleton';
import HeaderSkeleton from '@/components/layout/HeaderSkeleton';

export default function AboutLoading() {
  return (
    <div className="bg-[#0A0A0A] min-h-screen">
      <HeaderSkeleton />

      {/* About Hero Skeleton */}
      <section className="relative h-screen flex items-center justify-center pt-20">
        <div className="max-w-[1600px] w-full mx-auto px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <Skeleton className="w-32 h-4 rounded-full" />
            <Skeleton className="w-full h-20 md:h-32 rounded-2xl" />
            <Skeleton className="w-3/4 h-20 md:h-32 rounded-2xl" />
            <div className="flex gap-4 pt-10">
              <Skeleton className="w-48 h-14 rounded-full" />
              <Skeleton className="w-48 h-14 rounded-full" />
            </div>
          </div>
          <div className="hidden lg:block relative aspect-square">
            <Skeleton className="absolute inset-0 rounded-[4rem] rotate-3" />
            <Skeleton className="absolute inset-4 rounded-[4rem] -rotate-3 opacity-50" />
          </div>
        </div>
      </section>

      {/* Story Sections Skeleton */}
      <section className="py-24 space-y-32">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-10">
           <Skeleton className="w-full h-[600px] rounded-[3rem]" />
        </div>
        <div className="max-w-[1600px] mx-auto px-6 lg:px-10 grid grid-cols-1 md:grid-cols-2 gap-20">
           <Skeleton className="w-full h-[500px] rounded-[2rem]" />
           <Skeleton className="w-full h-[500px] rounded-[2rem]" />
        </div>
      </section>
    </div>
  );
}
