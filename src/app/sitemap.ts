import { MetadataRoute } from 'next';
import { locales } from '@/i18n/config';
import { blogPosts } from '@/data/blog/posts';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.belkbodylab.com';

  const mainRoutes = ['', '/about', '/services', '/portfolio', '/blog', '/contact'];

  const sitemapEntries: MetadataRoute.Sitemap = [];

  locales.forEach((locale) => {
    // Main routes
    mainRoutes.forEach((route) => {
      sitemapEntries.push({
        url: `${baseUrl}/${locale}${route}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: route === '' ? 1.0 : 0.8,
      });
    });

    // Blog post routes
    blogPosts.forEach((post) => {
      sitemapEntries.push({
        url: `${baseUrl}/${locale}/blog/${post.slug}`,
        lastModified: new Date(post.date),
        changeFrequency: 'monthly',
        priority: 0.6,
      });
    });
  });

  return sitemapEntries;
}