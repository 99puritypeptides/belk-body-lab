import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.belkbodylab.com';

  const disallowedPaths = [
    '/api/',
    '/_next/',
    '/admin/',
    '/*.mp4',
    '/lab-verification-coa-transparency/',
  ];

  return {
    rules: [
      // Default rule — all general crawlers
      {
        userAgent: '*',
        allow: '/',
        disallow: disallowedPaths,
      },
      // OpenAI / ChatGPT Search
      { userAgent: 'GPTBot', allow: '/' },
      { userAgent: 'ChatGPT-User', allow: '/' },
      { userAgent: 'OAI-SearchBot', allow: '/' },
      // Perplexity AI
      { userAgent: 'PerplexityBot', allow: '/' },
      // Anthropic / Claude
      { userAgent: 'ClaudeBot', allow: '/' },
      { userAgent: 'anthropic-ai', allow: '/' },
      // Google Gemini / AI Overviews training
      { userAgent: 'Google-Extended', allow: '/' },
      // Apple AI (Siri, Apple Intelligence)
      { userAgent: 'Applebot', allow: '/' },
      { userAgent: 'Applebot-Extended', allow: '/' },
      // Common Crawl — used by most open-source LLMs (LLaMA, Mistral, etc.)
      { userAgent: 'CCBot', allow: '/' },
      // Meta AI
      { userAgent: 'FacebookBot', allow: '/' },
      // Cohere
      { userAgent: 'cohere-ai', allow: '/' },
      // Diffbot — used by many AI knowledge graphs
      { userAgent: 'Diffbot', allow: '/' },
      // You.com AI search
      { userAgent: 'YouBot', allow: '/' },
      // Bing / Microsoft Copilot
      { userAgent: 'bingbot', allow: '/' },
      { userAgent: 'BingPreview', allow: '/' },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  };
}