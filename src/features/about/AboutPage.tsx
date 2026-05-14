'use client';

import React from 'react';
import AboutHero from './AboutHero';
import AboutStory from './AboutStory';
import AboutPhilosophy from './AboutPhilosophy';
import AboutCredentials from './AboutCredentials';
import AboutLifestyle from './AboutLifestyle';
import AboutFinalCTA from './AboutFinalCTA';
import Script from 'next/script';

export default function AboutPage() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.belkbodylab.com';

  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Kyle Belk",
    "jobTitle": "South Carolina's #1 Personal Trainer & Body Transformation Coach",
    "description": "Founder of Belk Body Lab and South Carolina's top-rated personal trainer. NASM-certified specialist in science-based body transformations, fat loss coaching, and muscle building. 500+ successful client transformations across Charleston, Mount Pleasant, Summerville, and all of SC.",
    "url": `${siteUrl}/about`,
    "sameAs": [
      "https://www.instagram.com/kylebelk_",
      "https://www.tiktok.com/@kylebelk"
    ],
    "worksFor": {
      "@type": "Organization",
      "name": "Belk Body Lab"
    }
  };

  return (
    <>
      <Script
        id="person-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <main className="min-h-screen bg-bg-primary">
      <AboutHero />
      <AboutStory />
      <AboutPhilosophy />
      <AboutCredentials />
      <AboutLifestyle />
      <AboutFinalCTA />
    </main>
    </>
  );
}
