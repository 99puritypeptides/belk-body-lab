'use client';

import React from 'react';
import { motion, Variants } from 'framer-motion';
import { 
  ArrowRight, 
  Beaker, 
  Target, 
  ShieldCheck, 
  Zap,
  Activity,
  Award
} from 'lucide-react';

const icons = {
  arrow: ArrowRight,
  science: Beaker,
  target: Target,
  shield: ShieldCheck,
  zap: Zap,
  activity: Activity,
  pulse: Activity, // Alias for pulse
  award: Award
};

interface PremiumIconProps {
  name: keyof typeof icons;
  size?: number;
  color?: string;
  className?: string;
  trigger?: 'hover' | 'always';
}

export default function PremiumIcon({
  name,
  size = 24,
  color = 'currentColor',
  className = '',
  trigger = 'hover'
}: PremiumIconProps) {
  const Icon = icons[name];

  const variants: Variants = {
    initial: { scale: 1, rotate: 0 },
    animate: trigger === 'always' ? {
      scale: [1, 1.1, 1],
      transition: { repeat: Infinity, duration: 2 }
    } : {},
    hover: {
      scale: 1.2,
      rotate: name === 'arrow' ? 45 : 0,
      transition: { type: 'spring' as const, stiffness: 300 }
    }
  };

  return (
    <motion.div
      className={`inline-flex items-center justify-center ${className}`}
      initial="initial"
      whileHover="hover"
      animate="animate"
      variants={variants}
    >
      <Icon size={size} color={color} strokeWidth={1.5} />
      
      {/* Decorative pulse effect for some icons */}
      {(name === 'science' || name === 'target') && (
        <motion.div
          className="absolute inset-0 rounded-full border border-accent-green/20"
          initial={{ scale: 0.8, opacity: 0 }}
          whileHover={{ 
            scale: 1.5, 
            opacity: [0, 0.5, 0],
            transition: { repeat: Infinity, duration: 1.5 } 
          }}
        />
      )}
    </motion.div>
  );
}
