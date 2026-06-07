import React from 'react';
import { Metadata } from 'next';
import CommunitiesHubHero from '@/features/communities/CommunitiesHubHero';
import CommunitiesIntro from '@/features/communities/CommunitiesIntro';
import CommunitiesGrid from '@/features/communities/CommunitiesGrid';
import ServicesCTA from '@/features/services/ServicesCTA';
import TestimonialsSection from '@/features/home/TestimonialsSection';
import FAQSection from '@/features/home/FAQSection';

import { locales } from '@/i18n/config';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.belkbodylab.com';
  return {
    title: 'Personal Training Communities South Carolina | Belk Body Lab',
    description: 'Explore the South Carolina communities served by Belk Body Lab. Elite personal training and body transformation coaching in Charleston, Mount Pleasant, Summerville, West Ashley, North Charleston, Daniel Island, James Island, Goose Creek, Johns Island, Isle of Palms, and online across SC.',
    keywords: [
      'personal trainer near me South Carolina',
      'personal training communities SC',
      'fitness coach Charleston SC',
      'personal trainer Mount Pleasant SC',
      'personal trainer Summerville SC',
      'personal trainer West Ashley SC',
      'personal trainer North Charleston SC',
      'personal trainer Daniel Island SC',
      'personal trainer James Island SC',
      'personal trainer Goose Creek SC',
      'personal trainer Johns Island SC',
      'personal trainer Isle of Palms SC',
      'fitness coaching Lowcountry SC',
      'gym trainer near me South Carolina',
      'body transformation coaching SC communities',
      'personal trainer near me Charleston area',
      'South Carolina fitness communities',
      'Belk Body Lab locations',
    ],
    alternates: {
      canonical: locale === 'en' ? `${siteUrl}/communities` : `${siteUrl}/${locale}/communities`,
      languages: { en: `${siteUrl}/communities`, es: `${siteUrl}/es/communities` },
    },
    openGraph: {
      title: 'Personal Training Communities Across South Carolina | Belk Body Lab',
      description: 'Explore the South Carolina communities served by Belk Body Lab. Elite personal training in Charleston, Mount Pleasant, Summerville, and all of the Lowcountry.',
      url: locale === 'en' ? `${siteUrl}/communities` : `${siteUrl}/${locale}/communities`,
      type: 'website',
      images: [
        {
          url: '/og-home.png',
          width: 1200,
          height: 630,
          alt: 'Personal Training Communities - South Carolina | Belk Body Lab',
        },
      ],
    },
  };
}

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function CommunitiesPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.belkbodylab.com';

  return (
    <main className="relative bg-bg-primary min-h-screen">
      <div className="noise-overlay" aria-hidden="true" />
      <div className="bg-grid hidden lg:grid" aria-hidden="true">
        {Array.from({ length: 8 })?.map((_, i) => (
          <div key={i} className="bg-grid-line" />
        ))}
      </div>
      <CommunitiesHubHero />
      <CommunitiesIntro />
      <CommunitiesGrid />

      {/* SEO Content Section — Community-Focused Keyword-Rich Copy */}
      <section className="py-20 md:py-32 bg-[#050505]">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="font-jumpshot text-white text-3xl md:text-5xl uppercase mb-10 leading-none tracking-tight">
              South Carolina&apos;s <span className="text-accent-green">Premier</span> Personal Training Network
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
              <div className="space-y-6 text-white/50 text-base leading-relaxed">
                <p>
                  Finding a personal trainer near you in South Carolina shouldn&apos;t be a gamble. Belk Body Lab has established a comprehensive fitness coaching presence across the entire Lowcountry and beyond — providing world-class personal training whether you&apos;re in the heart of downtown Charleston, the suburbs of Summerville, or the coastal community of Isle of Palms.
                </p>
                <p>
                  Unlike gym chains that assign you a random trainer, Kyle Belk personally designs every program and coaches every client. This means whether you&apos;re a busy professional in Mount Pleasant looking for early morning sessions, a parent in West Ashley who needs flexible scheduling, or a military service member in Goose Creek seeking structured strength training — you get the same elite-level, science-backed coaching that has produced 500+ body transformations across South Carolina.
                </p>
              </div>
              <div className="space-y-6 text-white/50 text-base leading-relaxed">
                <p>
                  Each South Carolina community we serve has unique fitness needs. Charleston professionals need efficient, high-intensity programs that fit between meetings. Daniel Island residents want private, premium coaching experiences. Summerville families need flexible plans that work around busy schedules. North Charleston clients want affordable, results-driven personal training. Our community-specific approach means your program is designed not just for your body — but for your lifestyle.
                </p>
                <p>
                  Can&apos;t find your city? No problem. Our online personal training program serves clients across all of South Carolina — from Columbia to Greenville, Myrtle Beach to Rock Hill. You get the same custom training programs, nutrition coaching, weekly check-ins, and direct access to Kyle that our in-person clients enjoy.
                </p>
              </div>
            </div>
            
            {/* Community Quick Links */}
            <div className="bg-white/[0.02] border border-white/5 rounded-[2rem] p-8 md:p-12">
              <h3 className="text-white font-bold text-sm uppercase tracking-widest mb-8">
                Find a Personal Trainer Near You in South Carolina
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {[
                  { name: 'Charleston', tag: 'Elite Training' },
                  { name: 'Mount Pleasant', tag: 'Professional Fitness' },
                  { name: 'Summerville', tag: 'Weight Loss' },
                  { name: 'West Ashley', tag: 'Strength Training' },
                  { name: 'North Charleston', tag: 'Body Transformation' },
                  { name: 'Daniel Island', tag: 'Private Coaching' },
                  { name: 'James Island', tag: 'Lifestyle Coaching' },
                  { name: 'Goose Creek', tag: 'Consistency' },
                  { name: 'Johns Island', tag: 'Active Living' },
                  { name: 'Isle of Palms', tag: 'Athletic Performance' },
                ].map((community) => (
                  <div key={community.name} className="text-center p-4 rounded-xl bg-white/[0.02] border border-white/5">
                    <p className="text-white font-bold text-sm mb-1">{community.name}</p>
                    <p className="text-accent-green text-[10px] font-bold uppercase tracking-widest">{community.tag}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Additional SEO content block */}
            <div className="mt-16 space-y-6 text-white/40 text-sm leading-relaxed">
              <h3 className="text-white/60 font-bold text-base uppercase tracking-wider mb-4">
                Why South Carolina Residents Choose Belk Body Lab
              </h3>
              <p>
                South Carolina&apos;s fitness landscape ranges from large gym chains to independent personal trainers — but Belk Body Lab stands apart through a complete transformation system. Where most personal trainers in SC charge $50-$150 per session for just exercise guidance, our monthly coaching packages deliver a fully customized training program, personalized nutrition and macro planning, weekly video check-ins, real-time plan adjustments, and direct coaching access from a NASM-certified professional.
              </p>
              <p>
                This comprehensive approach is why our clients consistently achieve 15-40+ lbs of fat loss in 90 days, significant muscle gains, and lasting body composition improvements. Whether you&apos;re searching for a personal trainer in Charleston, a fitness coach in Mount Pleasant, a weight loss program in Summerville, or online fitness coaching anywhere in South Carolina — Belk Body Lab delivers the same proven system that has transformed 500+ bodies across the Palmetto State.
              </p>
              <p>
                Areas served include: Charleston SC, Mount Pleasant SC, Summerville SC, West Ashley SC, North Charleston SC, Daniel Island SC, James Island SC, Goose Creek SC, Hanahan SC, Johns Island SC, Isle of Palms SC, Folly Beach SC, Sullivan&apos;s Island SC, Ladson SC, Moncks Corner SC, and online coaching clients across Columbia, Greenville, Spartanburg, Myrtle Beach, Florence, Rock Hill, and all of South Carolina.
              </p>
            </div>
          </div>
        </div>
      </section>

      <TestimonialsSection />
      
      {/* Communities FAQ Section */}
      <section className="py-20 md:py-32 bg-[#050505]">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-jumpshot text-white text-3xl md:text-5xl uppercase mb-4 leading-none tracking-tight">
              Community <span className="text-accent-green">Questions</span>
            </h2>
            <p className="text-white/40 text-base mb-12 max-w-2xl">
              Common questions from South Carolina residents looking for a personal trainer in their area.
            </p>
            <div className="space-y-4">
              {[
                {
                  q: 'Do you offer personal training near me in South Carolina?',
                  a: 'Yes! Belk Body Lab serves clients across all of South Carolina — including Charleston, Mount Pleasant, Summerville, West Ashley, North Charleston, Daniel Island, James Island, Goose Creek, Johns Island, Isle of Palms, and beyond. We also offer comprehensive online coaching for SC residents who prefer remote training or live outside the Charleston metro area.'
                },
                {
                  q: 'How much does personal training cost in South Carolina?',
                  a: 'Traditional per-session personal training in South Carolina typically costs $50-$150 per hour. Belk Body Lab offers monthly coaching packages starting at $75/month that include far more value — custom training programs, personalized nutrition planning, weekly check-ins, and ongoing support — delivering better long-term results for a fraction of the per-session cost.'
                },
                {
                  q: 'What South Carolina communities do you serve?',
                  a: 'We offer in-person personal training throughout the Greater Charleston area including downtown Charleston, Mount Pleasant, Summerville, West Ashley, North Charleston, Daniel Island, James Island, Goose Creek, Johns Island, and Isle of Palms. Our online coaching program serves clients statewide across Columbia, Greenville, Myrtle Beach, and beyond.'
                },
                {
                  q: 'Is online personal training as effective as in-person training in SC?',
                  a: 'Absolutely. Over 80% of our best transformation results come from online coaching clients. Online personal training provides the same custom programs, nutrition coaching, and accountability — with greater schedule flexibility. It\'s perfect for busy South Carolina professionals, parents, and anyone who travels frequently.'
                },
                {
                  q: 'Can I switch between in-person and online training?',
                  a: 'Yes. Many of our South Carolina clients use a hybrid approach — combining in-person sessions in the Charleston area with online coaching support for consistency. Your program seamlessly adapts to your schedule and location needs.'
                },
              ].map((faq, index) => (
                <details key={index} className="group bg-white/[0.02] border border-white/5 rounded-2xl overflow-hidden">
                  <summary className="flex items-center justify-between p-6 cursor-pointer text-white font-bold text-sm md:text-base uppercase tracking-tight hover:text-accent-green transition-colors">
                    {faq.q}
                    <span className="text-accent-green ml-4 group-open:rotate-45 transition-transform duration-300 text-xl">+</span>
                  </summary>
                  <div className="px-6 pb-6 text-white/50 text-sm md:text-base leading-relaxed">
                    {faq.a}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="py-20 md:py-32">
        <ServicesCTA />
      </div>

      {/* BreadcrumbList Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": `https://www.belkbodylab.com/`
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "South Carolina Communities",
                "item": locale === 'en' ? `${siteUrl}/communities` : `${siteUrl}/${locale}/communities`
              }
            ]
          })
        }}
      />
      {/* FAQPage Schema for community FAQs */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "Do you offer personal training near me in South Carolina?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes! Belk Body Lab serves clients across all of South Carolina — including Charleston, Mount Pleasant, Summerville, West Ashley, North Charleston, Daniel Island, James Island, Goose Creek, Johns Island, Isle of Palms, and beyond. We also offer comprehensive online coaching for SC residents."
                }
              },
              {
                "@type": "Question",
                "name": "How much does personal training cost in South Carolina?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Traditional per-session personal training in South Carolina typically costs $50-$150 per hour. Belk Body Lab offers monthly coaching packages starting at $75/month that include custom training programs, personalized nutrition planning, weekly check-ins, and ongoing support."
                }
              },
              {
                "@type": "Question",
                "name": "What South Carolina communities do you serve?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "We offer in-person personal training throughout the Greater Charleston area including downtown Charleston, Mount Pleasant, Summerville, West Ashley, North Charleston, Daniel Island, James Island, Goose Creek, Johns Island, and Isle of Palms. Our online coaching program serves clients statewide."
                }
              },
              {
                "@type": "Question",
                "name": "Is online personal training as effective as in-person training?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Absolutely. Over 80% of our best transformation results come from online coaching clients. Online personal training provides the same custom programs, nutrition coaching, and accountability — with greater schedule flexibility."
                }
              },
              {
                "@type": "Question",
                "name": "Can I switch between in-person and online training?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes. Many of our South Carolina clients use a hybrid approach — combining in-person sessions in the Charleston area with online coaching support for consistency."
                }
              }
            ]
          })
        }}
      />
    </main>
  );
}
