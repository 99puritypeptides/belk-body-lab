'use client';

/**
 * CTAButton — Site-wide primary call-to-action button.
 *
 * Matches the hero-section design: accent-green pill with a rotating
 * white circle icon on the left and uppercase bold text on the right.
 *
 * Use as a Link (pass `href`) or as a plain button (omit `href`).
 */

import React from 'react';
import { motion } from 'framer-motion';
import { Link } from '@/i18n/navigation';
import PremiumIcon from './PremiumIcon';

interface CTAButtonProps {
  /** Link destination. When provided renders a <Link>; otherwise renders a <button>. */
  href?: string;
  children: React.ReactNode;
  /** Extra Tailwind classes applied to the root element */
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  id?: string;
  /** "lg" increases the icon circle and overall padding slightly */
  size?: 'default' | 'lg';
}

export default function CTAButton({
  href,
  children,
  className = '',
  onClick,
  type = 'button',
  id,
  size = 'default',
}: CTAButtonProps) {
  const iconSize  = size === 'lg' ? 'w-14 h-14' : 'w-11 h-11';
  const pr        = size === 'lg' ? 'pr-10' : 'pr-8';
  const textSize  = size === 'lg' ? 'text-sm' : 'text-xs';

  const inner = (
    <>
      {/* Green rotating circle icon — LEFT side like the hero button */}
      <div
        className={`${iconSize} bg-accent-green rounded-full flex items-center justify-center shrink-0 transition-all duration-400 overflow-hidden`}
      >
        <PremiumIcon 
          name="arrow" 
          size={size === 'lg' ? 28 : 22}
          color="#000000"
        />
      </div>
      <span className={`${textSize} font-black uppercase tracking-widest text-white`}>
        {children}
      </span>
    </>
  );

  const base = `group relative inline-flex items-center gap-4 bg-black border-2 border-accent-green/30 hover:border-accent-green text-white rounded-full p-2 ${pr} shadow-[0_0_20px_rgba(170,255,0,0.05)] hover:shadow-[0_0_40px_rgba(170,255,0,0.15)] transition-all duration-300 ${className}`;

  if (href) {
    return (
      <motion.div whileHover="hover" className="inline-block">
        <Link id={id} href={href as any} className={base} onClick={onClick}>
          {inner}
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.button 
      id={id} 
      type={type} 
      className={base} 
      onClick={onClick}
      whileHover="hover"
    >
      {inner}
    </motion.button>
  );
}
