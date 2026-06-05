import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.belkbodylab.com';

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/api/', 
          '/_next/', 
          '/admin/',
          '/*.mp4',
          '/lab-verification-coa-transparency/'
        ],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}