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
            <a href="/privacy-policy" className="text-white/50 hover:text-accent-green transition-colors">Privacy Policy</a>
            <a href="/terms-and-conditions" className="text-white/50 hover:text-accent-green transition-colors">Terms & Conditions</a>
            <a href="/disclaimer" className="text-white/50 hover:text-accent-green transition-colors">Disclaimer</a>
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

        {/* Disclaimer section */}
        <div className="max-w-5xl mx-auto text-center mb-12 border border-white/5 bg-white/[0.02] p-8">
          <p className="text-xs sm:text-sm leading-relaxed text-white/40 text-left sm:text-center font-sans">
            <strong className="text-white/60 font-bold uppercase tracking-widest text-[10px] block mb-3">Disclaimer</strong> 
            The analytical data, chromatograms, and Certificates of Analysis discussed on this page are provided for informational and transparency purposes only. This page relies strictly on documented analytical methods to demonstrate batch characteristics and makes no performance or outcome claims. Analytical results, including purity and identity confirmations, may vary by material and by lot; all Certificates of Analysis are strictly batch-specific. Always review the documentation applicable to the specific batch you are evaluating.
          </p>
        </div>

        {/* Copyright */}
        <div className="text-center text-[10px] font-bold uppercase tracking-[0.3em] text-white/30">
          <p>&copy; {new Date().getFullYear()} Belk Body Lab. All rights reserved.</p>
        </div>

      </div>
    </footer>
  );
}
