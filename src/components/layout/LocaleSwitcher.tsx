'use client';

import { useLocale } from 'next-intl';
import { usePathname, useRouter } from '@/i18n/navigation';
import { locales } from '@/i18n/config';
import { useTransition } from 'react';
import { motion } from 'framer-motion';

export default function LocaleSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const handleSwitch = (newLocale: string) => {
    if (newLocale === locale) return;
    startTransition(() => {
      router.replace(pathname, { locale: newLocale });
    });
  };

  return (
    <div
      className={`relative flex items-center gap-0.5 bg-[#2A2A2A] rounded-full p-1 border border-white/5 transition-all duration-500 ${
        isPending ? 'opacity-60 cursor-wait shadow-[0_0_20px_rgba(170,255,0,0.1)]' : 'opacity-100 shadow-lg'
      }`}
      aria-label="Language switcher"
    >
      {locales.map((l) => (
        <button
          key={l}
          onClick={() => handleSwitch(l)}
          disabled={isPending}
          aria-pressed={l === locale}
          className="relative px-3.5 py-1.5 rounded-full text-[10px] sm:text-xs font-black uppercase tracking-widest transition-colors duration-500 outline-none"
        >
          {/* Animated Background Pill */}
          {l === locale && (
            <motion.div
              layoutId="active-pill"
              className="absolute inset-0 bg-accent-green rounded-full shadow-[0_0_15px_rgba(170,255,0,0.4)]"
              transition={{ 
                type: "spring", 
                stiffness: 400, 
                damping: 30,
                duration: 0.5 
              }}
            />
          )}
          
          {/* Text color animation */}
          <motion.span
            animate={{ 
              color: l === locale ? '#000000' : 'rgba(255, 255, 255, 0.5)',
              scale: l === locale ? 1.05 : 1
            }}
            transition={{ duration: 0.3 }}
            className="relative z-10 inline-block"
          >
            {l}
          </motion.span>
        </button>
      ))}

      {/* Subtle bottom line loading indicator during transition */}
      {isPending && (
        <motion.div 
          className="absolute -bottom-[1px] left-[10%] right-[10%] h-[1px] bg-accent-green/50"
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
        />
      )}
    </div>
  );
}
