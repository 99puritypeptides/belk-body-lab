'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import AppLogo from '@/components/ui/AppLogo';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/#about' },
  { label: 'Features', href: '/#features' },
  { label: 'Service', href: '/#service' },
  { label: 'Exercise', href: '/#exercise' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-[500] transition-all duration-500 flex justify-center ${scrolled
          ? 'py-4 bg-[#0B0B0B]/90 backdrop-blur-xl border-b border-white/5' : 'py-6 bg-transparent'
          }`}
      >
        <div className="w-full max-w-7xl px-6 lg:px-12 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <Image
              src="/assets/images/belk-body-lab-logo.png"
              alt="Belk Body Lab"
              width={200}
              height={180}
              className="h-8 md:h-10 w-auto object-contain hover:opacity-80 transition-opacity"
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8 bg-white/5 backdrop-blur-md px-8 py-3 rounded-full border border-white/5">
            {navLinks?.map((link) => (
              <Link
                key={link?.href}
                href={link?.href}
                className={`nav-link text-xs font-semibold tracking-wider transition-colors hover:text-[#AAFF00] ${pathname === link?.href ? 'text-[#AAFF00]' : 'text-gray-300'
                  }`}
              >
                {link?.label}
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <Link
              href="/#contact"
              className="px-6 py-2.5 border border-white/20 text-white text-xs font-bold tracking-widest rounded-full hover:border-[#AAFF00] hover:text-[#AAFF00] transition-all duration-300 glow-subtle"
            >
              Get Started
            </Link>
            <Link
              href="/#contact"
              className="px-6 py-2.5 bg-[#AAFF00] text-black text-xs font-bold tracking-widest rounded-full hover:bg-white transition-all duration-300 hover:scale-105 shadow-[0_0_15px_rgba(170,255,0,0.4)]"
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="lg:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>
      </nav>
      {/* Mobile Menu */}
      <div className={`mobile-menu-overlay ${menuOpen ? 'open' : ''} !bg-[#0B0B0B]`} style={{ zIndex: 490 }}>
        {navLinks?.map((link, i) => (
          <Link
            key={link?.href}
            href={link?.href}
            onClick={() => setMenuOpen(false)}
            className="font-display text-4xl font-bold uppercase text-white hover:text-[#AAFF00] transition-colors"
            style={{ transitionDelay: `${i * 0.05}s` }}
          >
            {link?.label}
          </Link>
        ))}

        <div className="flex flex-col gap-4 mt-8">
          <Link
            href="/#contact"
            onClick={() => setMenuOpen(false)}
            className="text-center px-8 py-4 bg-[#AAFF00] text-black text-sm font-bold uppercase tracking-widest rounded-full hover:bg-white transition-all"
          >
            Contact Us
          </Link>
          <Link
            href="/#contact"
            onClick={() => setMenuOpen(false)}
            className="text-center px-8 py-4 border border-white/20 text-white text-sm font-bold uppercase tracking-widest rounded-full hover:border-[#AAFF00] hover:text-[#AAFF00] transition-all"
          >
            Get Started
          </Link>
        </div>

        <div className="absolute bottom-10 flex gap-6">
          {['Instagram', 'TikTok', 'YouTube']?.map((s) => (
            <a key={s} href="#" className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500 hover:text-[#AAFF00] transition-colors">
              {s}
            </a>
          ))}
        </div>
      </div>
    </>
  );
}