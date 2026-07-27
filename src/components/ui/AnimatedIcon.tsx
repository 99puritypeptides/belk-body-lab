'use client';

import React from 'react';
import Lottie from 'lottie-react';

interface AnimatedIconProps {
  animationData: any;
  className?: string;
  size?: number;
  loop?: boolean;
  autoplay?: boolean;
  hoverTrigger?: boolean;
}

export default function AnimatedIcon({
  animationData,
  className = '',
  size = 24,
  loop = true,
  autoplay = true,
  hoverTrigger = false,
}: AnimatedIconProps) {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <div 
      className={`flex items-center justify-center ${className}`}
      style={{ width: size, height: size }}
      onMouseEnter={() => hoverTrigger && setIsHovered(true)}
      onMouseLeave={() => hoverTrigger && setIsHovered(false)}
    >
      <Lottie
        animationData={animationData}
        loop={hoverTrigger ? isHovered : loop}
        autoplay={hoverTrigger ? isHovered : autoplay}
        style={{ width: size, height: size }}
      />
    </div>
  );
}
