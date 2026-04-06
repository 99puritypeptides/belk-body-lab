import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from '@/app/sections/HeroSection';
import AboutSection from '@/app/sections/AboutSection';
import BMICalculator from '@/app/sections/BMICalculator';
import TransformationsSection from '@/app/sections/TransformationSection';
import TestimonialsSection from '@/app/sections/TestimonialsSection';
import ContactSection from '@/app/sections/ContactSection';

export default function Home() {
  return (
    <main className="relative bg-bg-primary min-h-screen" suppressHydrationWarning>
      {/* Background effects */}
      <div className="noise-overlay" aria-hidden="true" />
      <div className="bg-grid hidden lg:grid" aria-hidden="true">
        {Array.from({ length: 8 })?.map((_, i) => (
          <div key={i} className="bg-grid-line" />
        ))}
      </div>
      <Header />
      <HeroSection />
      <AboutSection />
      <BMICalculator />
      <TransformationsSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </main>
  );
}

