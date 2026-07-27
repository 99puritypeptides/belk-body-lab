import React from 'react';
import Image from 'next/image';

export default function COAFooter() {
  return (
    <footer className="w-full bg-[#050505] text-white/70 py-16 lg:py-24 border-t border-white/10 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-accent-green/5 blur-[150px] pointer-events-none translate-y-1/2"></div>

      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        
        {/* Top section: Logo, Links, and CTA */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-10 mb-16 border-b border-white/10 pb-16">
          
          {/* Logo */}
          <div className="flex-shrink-0">
            <Image
              src="/images/brand/belk-body-lab-logo.png"
              alt="Belk Body Lab"
              width={160}
              height={45}
              className="h-7 w-auto object-contain brightness-0 invert opacity-100"
              priority={false}
            />
          </div>

          {/* Legal Links */}
          <div className="flex flex-wrap justify-center gap-8 text-[11px] font-bold uppercase tracking-[0.2em]">
            <a href="https://99puritypeptides.com/privacy-policy" target="_blank" rel="noopener noreferrer nofollow" className="text-white/50 hover:text-accent-green transition-colors">Privacy Policy</a>
            <a href="https://99puritypeptides.com/terms-and-conditions" target="_blank" rel="noopener noreferrer nofollow" className="text-white/50 hover:text-accent-green transition-colors">Terms & Conditions</a>
          </div>

          {/* Footer CTA */}
          <div>
            <a
              href="https://99puritypeptides.com/certificates"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="cta-coa group inline-flex items-center justify-center px-8 py-4 text-[11px] font-black text-white uppercase tracking-[0.2em] bg-transparent border border-white/20 hover:border-accent-green hover:text-accent-green transition-all"
              data-cta="footer-view-coa"
            >
              Access the COA Repository
              <svg className="w-4 h-4 ml-3 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
        </div>



        {/* Copyright */}
        <div className="text-center text-[10px] font-bold uppercase tracking-[0.3em] text-white/30">
          <p>&copy; {new Date().getFullYear()} Belk Body Lab. All rights reserved.</p>
        </div>

      </div>
    </footer>
  );
}
