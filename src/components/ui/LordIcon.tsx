'use client';

import React from 'react';

interface LordIconProps {
  src: string;
  trigger?: 'hover' | 'click' | 'loop' | 'loop-on-hover' | 'morph' | 'boomerang';
  delay?: number;
  size?: number;
  colors?: { primary?: string; secondary?: string };
  className?: string;
}

export default function LordIcon({
  src,
  trigger = 'hover',
  delay,
  size = 24,
  colors = { primary: '#ffffff', secondary: '#AAFF00' },
  className = '',
}: LordIconProps) {
  // Convert colors object to Lordicon string format
  const colorsStr = `primary:${colors.primary},secondary:${colors.secondary}`;

  return (
    <div className={`flex items-center justify-center ${className}`} style={{ width: size, height: size }}>
      {/* @ts-ignore */}
      <lord-icon
        src={src}
        trigger={trigger}
        delay={delay}
        colors={colorsStr}
        style={{ width: size, height: size }}
      />
    </div>
  );
}
