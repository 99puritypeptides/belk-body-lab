import React from 'react';
import { Skeleton } from '@/components/ui/Skeleton';
import HeaderSkeleton from '@/components/layout/HeaderSkeleton';

export default function BlogLoading() {
  return (
    <div className="bg-[#050505] min-h-screen">
      {/* Required for the "everytime" header skeleton effect */}
      <HeaderSkeleton />

      {/* Blog Hero Skeleton */}
      <section className="relative pt-40 pb-20 overflow-hidden bg-[#0A0A0A]">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-10">
          <Skeleton className="w-24 h-4 mb-8 rounded-full" />
          <Skeleton className="w-1/2 h-16 md:h-24 mb-10 rounded-2xl" />
          <Skeleton className="max-w-xl h-6 mb-12 rounded-full" />
          
          {/* Featured Post Skeleton */}
          <div className="relative rounded-[40px] overflow-hidden border border-white/5 bg-[#111] h-[450px] mb-20">
            <div className="flex flex-col lg:flex-row h-full">
              <Skeleton className="lg:w-1/2 h-1/2 lg:h-full" />
              <div className="lg:w-1/2 p-10 flex flex-col justify-center">
                <Skeleton className="w-32 h-4 mb-4" />
                <Skeleton className="w-3/4 h-12 mb-6" />
                <Skeleton className="w-full h-20 mb-8" />
                <Skeleton className="w-40 h-10 rounded-full" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Grid Skeleton */}
      <section className="py-24 bg-[#050505]">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-10">
          <div className="flex justify-center gap-3 mb-20">
            {[1, 2, 3, 4].map(i => <Skeleton key={i} className="w-32 h-12 rounded-full" />)}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="rounded-[32px] overflow-hidden bg-[#111] border border-white/5 p-0">
                <Skeleton className="w-full h-[240px] rounded-t-[32px]" />
                <div className="p-8">
                  <div className="flex gap-4 mb-4">
                    <Skeleton className="w-20 h-3" />
                    <Skeleton className="w-20 h-3" />
                  </div>
                  <Skeleton className="w-full h-8 mb-4" />
                  <Skeleton className="w-2/3 h-8 mb-6" />
                  <Skeleton className="w-full h-16 mb-8" />
                  <Skeleton className="w-32 h-6" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
