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

    // Main routes — no lastModified: these are hand-edited marketing pages
    // with no tracked per-page revision date, so we don't fabricate one.
    // A false "changed today on every build" signal is worse than omitting it.
    mainRoutes.forEach((route) => {
      sitemapEntries.push({
        url: `${baseUrl}${prefix}${route}`,
        changeFrequency: 'weekly',
        priority: route === '' ? 1.0 : 0.8,
      });
    });

    // Community routes — same reasoning, no fabricated lastModified.
    Object.keys(communitiesData).forEach((slug) => {
      sitemapEntries.push({
        url: `${baseUrl}${prefix}/${slug}`,
        changeFrequency: 'monthly',
        priority: 0.7,
      });
    });

    // Blog post routes — real per-post date, using the reliable ISO field.
    blogPosts.forEach((post) => {
      sitemapEntries.push({
        url: `${baseUrl}${prefix}/blog/${post.slug}`,
        lastModified: new Date(post.isoDate || post.date),
        changeFrequency: 'monthly',
        priority: 0.8,
      });
    });
  });

  return sitemapEntries;
}