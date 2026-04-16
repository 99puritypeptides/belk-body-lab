import React from 'react';

interface SkeletonProps {
  className?: string;
}

export function Skeleton({ className = '' }: SkeletonProps) {
  return (
    <div 
      className={`bg-white/5 rounded-md animate-shimmer ${className}`}
      aria-hidden="true"
    />
  );
}
