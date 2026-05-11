import React from 'react';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import CommunityHero from '@/features/communities/CommunityHero';
import CommunityLifestyle from '@/features/communities/CommunityLifestyle';
import CommunityBenefits from '@/features/communities/CommunityBenefits';
import CommunityWhoItsFor from '@/features/communities/CommunityWhoItsFor';
import WhyChooseSection from '@/features/communities/WhyChooseSection';
import FeaturedPrograms from '@/features/communities/FeaturedPrograms';
import LocalTestimonials from '@/features/communities/LocalTestimonials';
import CommunityFAQ from '@/features/communities/CommunityFAQ';
import RelatedCommunities from '@/features/communities/RelatedCommunities';
import ServicesCTA from '@/features/services/ServicesCTA';
import { communitiesData } from '@/data/communities/content';
import { locales } from '@/i18n/config';

interface PageProps {
  params: Promise<{
    locale: string;
    slug: string;
  }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const data = communitiesData[resolvedParams.slug];
  if (!data) return {};

  const baseUrl = 'https://www.belkbodylab.com';
  const prefix = resolvedParams.locale === 'en' ? '' : `/${resolvedParams.locale}`;
  const url = `${baseUrl}${prefix}/${data.slug}`;

  return {
    title: data.seoTitle,
    description: data.metaDesc,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: data.seoTitle,
      description: data.metaDesc,
      url: url,
      siteName: 'Belk Body Lab',
      images: [
        {
          url: '/og-communities.png',
          width: 1200,
          height: 630,
          alt: `Belk Body Lab - Elite Fitness Coaching in ${data.name} SC`,
        },
      ],
      locale: resolvedParams.locale,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: data.seoTitle,
      description: data.metaDesc,
      images: ['/og-communities.png'],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };
}

export async function generateStaticParams() {
  const slugs = Object.keys(communitiesData);

  return locales.flatMap((locale) => 
    slugs.map((slug) => ({
      locale,
      slug,
    }))
  );
}

export default async function CommunityPage({ params }: PageProps) {
  const resolvedParams = await params;
  const data = communitiesData[resolvedParams.slug];

  if (!data) {
    notFound();
  }

  const baseUrl = 'https://www.belkbodylab.com';
  const prefix = resolvedParams.locale === 'en' ? '' : `/${resolvedParams.locale}`;
  const pageUrl = `${baseUrl}${prefix}/${data.slug}`;

  // Structured Data Objects
  const localBusinessSchema = {
    "@type": "LocalBusiness",
    "@id": `${baseUrl}/#localbusiness`,
    "name": `Belk Body Lab - ${data.name}`,
    "image": data.image,
    "url": pageUrl,
    "telephone": "+18430000000", // Update with real phone if available
    "priceRange": "$$$",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": data.name,
      "addressRegion": "SC",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "32.7765",
      "longitude": "-79.9311"
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "05:00",
        "closes": "21:00"
      }
    ],
    "sameAs": [
      "https://www.instagram.com/kylebelk",
      "https://www.tiktok.com/@belkbodylab"
    ]
  };

  const faqSchema = {
    "@type": "FAQPage",
    "mainEntity": data.faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  const breadcrumbSchema = {
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": `${baseUrl}${prefix}`
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Communities",
        "item": `${baseUrl}${prefix}/communities`
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": data.name,
        "item": pageUrl
      }
    ]
  };

  const serviceSchema = {
    "@type": "Service",
    "serviceType": "Personal Training & Fitness Coaching",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Belk Body Lab"
    },
    "areaServed": {
      "@type": "City",
      "name": data.name
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Fitness Coaching Programs",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Elite 1-on-1 Personal Training"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Online Body Transformation Coaching"
          }
        }
      ]
    }
  };

  return (
    <main className="relative bg-bg-primary min-h-screen">
      <div className="noise-overlay" aria-hidden="true" />
      <div className="bg-grid hidden lg:grid" aria-hidden="true">
        {Array.from({ length: 8 })?.map((_, i) => (
          <div key={i} className="bg-grid-line" />
        ))}
      </div>
      {/* 1. HERO SECTION */}
      <CommunityHero 
        h1={data.h1} 
        subheading={data.subheading} 
        image={data.image} 
        name={data.name} 
        slug={data.slug}
      />

      {/* 2. LOCALIZED INTRO & LIFESTYLE */}
      <CommunityLifestyle 
        title={data.lifestyle.title}
        content={data.lifestyle.content}
        landmarks={data.lifestyle.landmarks}
        name={data.name}
      />

      {/* 3. TRAINING BENEFITS SECTION */}
      <CommunityBenefits 
        title={data.benefits.title}
        items={data.benefits.items}
      />

      {/* 4. WHO THIS IS FOR */}
      <CommunityWhoItsFor 
        title={data.whoItsFor.title}
        items={data.whoItsFor.items}
      />

      {/* 5. WHY CLIENTS FROM [CITY] CHOOSE */}
      <WhyChooseSection 
        title={data.whyChoose.title}
        points={data.whyChoose.points}
      />

      {/* 6. FEATURED PROGRAMS (Incl. Online Coaching) */}
      <FeaturedPrograms />

      {/* 7. TRANSFORMATION / TESTIMONIAL SECTION */}
      <LocalTestimonials 
        testimonials={data.testimonials}
        name={data.name}
      />

      {/* 8. FAQ SECTION */}
      <CommunityFAQ 
        faqs={data.faqs}
        name={data.name}
      />

      {/* 8.5 RELATED COMMUNITIES (Internal Linking) */}
      <RelatedCommunities 
        currentSlug={resolvedParams.slug} 
        locale={resolvedParams.locale} 
      />

      {/* 9. STRONG CTA SECTION */}
      <div className="py-20 md:py-32">
        <ServicesCTA />
      </div>
      
      {/* Advanced Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              localBusinessSchema,
              faqSchema,
              breadcrumbSchema,
              serviceSchema
            ]
          })
        }}
      />
    </main>
  );
}
