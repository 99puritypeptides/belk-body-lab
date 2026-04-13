import React from 'react';
import Link from 'next/link';
import AppLogo from '@/components/ui/AppLogo';

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-border-subtle">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-10 py-16">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo + Brand */}
          <Link href="/" className="flex items-center gap-3 group">
            <AppLogo size={32} />
            <span className="font-display font-bold text-base tracking-tight text-white group-hover:text-accent-green transition-colors">
              BelkBodyLab
            </span>
          </Link>

          {/* Links */}
          <div className="flex items-center gap-8">
            <Link href="/" className="text-[11px] font-semibold uppercase tracking-[0.15em] text-text-muted hover:text-white transition-colors">
              Home
            </Link>
            <Link href="/packages" className="text-[11px] font-semibold uppercase tracking-[0.15em] text-text-muted hover:text-white transition-colors">
              Packages
            </Link>
            <Link href="/portfolio" className="text-[11px] font-semibold uppercase tracking-[0.15em] text-text-muted hover:text-white transition-colors">
              Portfolio
            </Link>
            <a href="/#contact" className="text-[11px] font-semibold uppercase tracking-[0.15em] text-text-muted hover:text-white transition-colors">
              Contact
            </a>
          </div>

          {/* Social + Legal */}
          <div className="flex items-center gap-6">
            {[
              { label: 'IG', href: '#' },
              { label: 'TT', href: '#' },
              { label: 'YT', href: '#' },
            ]?.map((s) => (
              <a
                key={s?.label}
                href={s?.href}
                className="w-9 h-9 rounded-full border border-border-subtle flex items-center justify-center text-[10px] font-bold text-text-muted hover:border-accent-green hover:text-accent-green transition-all"
                aria-label={s?.label}
              >
                {s?.label}
              </a>
            ))}
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-border-subtle flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-text-subtle">
            © 2026 BelkBodyLab. All Rights Reserved.
          </p>
          <div className="flex gap-8">
            <a href="#" className="text-[10px] font-medium uppercase tracking-[0.2em] text-text-subtle hover:text-white transition-colors">Privacy</a>
            <a href="#" className="text-[10px] font-medium uppercase tracking-[0.2em] text-text-subtle hover:text-white transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}