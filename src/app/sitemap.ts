import { MetadataRoute } from 'next';
import { locales } from '@/i18n/config';
import { blogPosts } from '@/data/blog/posts';
import { communitiesData } from '@/data/communities/content';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.belkbodylab.com';

  const mainRoutes = ['', '/about', '/services', '/portfolio', '/blog', '/contact', '/communities', '/faq'];

  const sitemapEntries: MetadataRoute.Sitemap = [];

  locales.forEach((locale) => {
    const isDefault = locale === 'en';
    const prefix = isDefault ? '' : `/${locale}`;

    // Main routes
    mainRoutes.forEach((route) => {
      sitemapEntries.push({
        url: `${baseUrl}${prefix}${route}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: route === '' ? 1.0 : 0.8,
      });
    });

    // Community routes
    Object.keys(communitiesData).forEach((slug) => {
      sitemapEntries.push({
        url: `${baseUrl}${prefix}/${slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.7,
      });
    });

    // Blog post routes
    blogPosts.forEach((post) => {
      sitemapEntries.push({
        url: `${baseUrl}${prefix}/blog/${post.slug}`,
        lastModified: post.isoDate ? new Date(post.isoDate) : new Date(post.date),
        changeFrequency: 'monthly',
        priority: 0.8,
      });
    });
  });

  return sitemapEntries;
}