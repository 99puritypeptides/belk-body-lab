import React from 'react';
import { Skeleton } from '@/components/ui/Skeleton';
import HeaderSkeleton from '@/components/layout/HeaderSkeleton';

export default function PortfolioLoading() {
  return (
    <div className="bg-[#0A0A0A] min-h-screen">
      <HeaderSkeleton />

      {/* Portfolio Hero Skeleton */}
      <section className="relative pt-40 pb-20 overflow-hidden">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-10 text-center">
          <Skeleton className="w-32 h-4 mx-auto mb-8 rounded-full" />
          <Skeleton className="w-3/4 h-20 md:h-28 mx-auto mb-10 rounded-2xl" />
          <Skeleton className="max-w-xl h-6 mx-auto mb-12 rounded-full" />
        </div>
      </section>

      {/* Cards Skeleton */}
      <section className="py-16 lg:py-24">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-10">
          <div className="flex justify-center gap-3 mb-14">
            {[1, 2, 3, 4].map(i => <Skeleton key={i} className="w-28 h-10 rounded-full" />)}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="flex flex-col gap-4">
                <Skeleton className="w-full aspect-[3/4] rounded-2xl" />
                <div className="flex justify-between items-center px-2">
                  <div className="space-y-2">
                    <Skeleton className="w-32 h-5 rounded-full" />
                    <Skeleton className="w-24 h-4 rounded-full" />
                  </div>
                  <div className="text-right space-y-2">
                    <Skeleton className="w-20 h-6 rounded-full" />
                    <Skeleton className="w-12 h-3 rounded-full ml-auto" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
