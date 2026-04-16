import React from 'react';
import { Skeleton } from '@/components/ui/Skeleton';
import HeaderSkeleton from '@/components/layout/HeaderSkeleton';

export default function BlogPostLoading() {
  return (
    <div className="bg-[#050505] min-h-screen">
      <HeaderSkeleton />

      <main className="pt-32">
        <header className="max-w-[1600px] mx-auto px-6 lg:px-10 mb-16 lg:mb-24">
          <Skeleton className="w-32 h-4 mb-12 rounded-full" />
          
          <div className="max-w-[1000px] space-y-6 mb-12">
            <div className="flex gap-4">
               <Skeleton className="w-24 h-3 rounded-full" />
               <Skeleton className="w-24 h-3 rounded-full" />
            </div>
            <Skeleton className="w-full h-16 md:h-24 lg:h-32 rounded-2xl" />
            <Skeleton className="w-3/4 h-16 md:h-24 lg:h-32 rounded-2xl" />
          </div>

          <Skeleton className="w-full h-[300px] md:h-[500px] lg:h-[700px] rounded-[2.5rem] lg:rounded-[4rem]" />
        </header>

        <section className="max-w-[1000px] mx-auto px-6 lg:px-10 pb-32 space-y-8">
          <Skeleton className="w-full h-4 rounded-full" />
          <Skeleton className="w-full h-4 rounded-full" />
          <Skeleton className="w-2/3 h-4 rounded-full" />
          <div className="py-8" />
          <Skeleton className="w-full h-4 rounded-full" />
          <Skeleton className="w-5/6 h-4 rounded-full" />
        </section>
      </main>
    </div>
  );
}
