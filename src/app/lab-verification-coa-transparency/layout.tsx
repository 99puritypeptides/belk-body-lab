import type { Metadata, Viewport } from 'next';
import Script from 'next/script';
import '@/styles/tailwind.css';

export const viewport: Viewport = {
  themeColor: '#0B1F3A',
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  title: 'Laboratory Verification & Certificate of Analysis (COA) Transparency | Belk Body Lab',
  description: 'See how analytical testing, batch verification, and Certificates of Analysis (COA) document quality and traceability. Review the full COA repository and verify the data for yourself.',
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
    },
  },
  openGraph: {
    title: 'Laboratory Verification & COA Transparency',
    description: 'How analytical testing and Certificates of Analysis document quality, purity, and batch traceability. Review the COA repository.',
    type: 'website',
  },
};

export default function COALayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="coa-landing-page bg-white min-h-screen text-slate-900 antialiased">
      <Script
        id="coa-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Laboratory Verification & Certificate of Analysis (COA) Transparency",
            about: "Analytical testing, batch verification, and Certificate of Analysis (COA) documentation.",
            isAccessibleForFree: true
          })
        }}
      />
      {children}
    </div>
  );
}
