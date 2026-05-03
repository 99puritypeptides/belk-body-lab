import React from 'react';
import { Skeleton } from '@/components/ui/Skeleton';
import HeaderSkeleton from '@/components/layout/HeaderSkeleton';

export default function ServicesLoading() {
  return (
    <div className="bg-[#0A0A0A] min-h-screen">
      <HeaderSkeleton />

      {/* Services Hero Skeleton */}
      <section className="relative pt-40 pb-20 overflow-hidden text-center">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-10">
          <Skeleton className="w-24 h-4 mx-auto mb-8 rounded-full" />
          <Skeleton className="w-3/4 h-20 md:h-28 mx-auto mb-10 rounded-2xl" />
          <Skeleton className="max-w-2xl h-6 mx-auto mb-12 rounded-full" />
        </div>
      </section>

      {/* Pricing Cards Skeleton */}
      <section className="py-20 lg:py-32">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className={`rounded-[2.5rem] p-10 bg-[#141414] border ${i === 2 ? 'border-accent-green/30' : 'border-white/5'} flex flex-col h-[700px]`}>
                <Skeleton className="w-32 h-4 mb-6" />
                <Skeleton className="w-2/3 h-12 mb-8" />
                <div className="flex items-baseline gap-2 mb-10">
                  <Skeleton className="w-24 h-16" />
                  <Skeleton className="w-16 h-4" />
                </div>
                <div className="space-y-6 mb-12">
                  {[1, 2, 3, 4, 5, 6].map(j => <Skeleton key={j} className="w-full h-4 rounded-full" />)}
                </div>
                <div className="mt-auto">
                  <Skeleton className="w-full h-14 rounded-full" />
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-20 flex justify-center">
             <Skeleton className="w-96 h-16 rounded-full" />
          </div>
        </div>
      </section>
    </div>
  );
}
