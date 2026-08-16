'use client';

import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { ReactNode } from 'react';

export default function TransitionWrapper({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  return (
    <motion.div
      key={pathname}
      initial={false}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4, ease: 'easeInOut' }}
      className="w-full max-w-full overflow-x-hidden min-h-screen flex flex-col"
      suppressHydrationWarning
    >
      {children}
    </motion.div>
  );
}
