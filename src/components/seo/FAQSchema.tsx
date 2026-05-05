'use client';

import Script from 'next/script';

interface FAQItem {
  q: string;
  a: string;
}

interface FAQSchemaProps {
  id: string;
  items: FAQItem[];
}

export default function FAQSchema({ id, items }: FAQSchemaProps) {
  if (!items || items.length === 0) return null;

  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": items.map((item) => ({
      "@type": "Question",
      "name": item.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.a
      }
    }))
  };

  return (
    <Script
      id={`faq-schema-${id}`}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
