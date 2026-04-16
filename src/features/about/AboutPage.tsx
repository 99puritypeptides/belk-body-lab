'use client';

import React from 'react';
import AboutHero from './AboutHero';
import AboutStory from './AboutStory';
import AboutPhilosophy from './AboutPhilosophy';
import AboutCredentials from './AboutCredentials';
import AboutLifestyle from './AboutLifestyle';
import AboutFinalCTA from './AboutFinalCTA';

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-bg-primary">
      <AboutHero />
      <AboutStory />
      <AboutPhilosophy />
      <AboutCredentials />
      <AboutLifestyle />
      <AboutFinalCTA />
    </main>
  );
}
