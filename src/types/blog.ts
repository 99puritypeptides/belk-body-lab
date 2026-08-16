export type BlogCategory = 'Fat Loss' | 'Muscle Gain' | 'Nutrition' | 'Mindset' | 'Lifestyle' | 'Training' | 'Recovery' | 'Coaching' | 'Reconstitution' | 'Peptide Science';

export interface BlogPostContent {
  title: string;
  excerpt: string;
  content: string; // HTML or MDX string
  metaTitle: string;
  metaDescription: string;
  keywords?: string[];
  canonicalOverride?: string;
  faqs?: { q: string; a: string }[];
  customSchemas?: string[];
}

export interface BlogPost {
  id: string;
  slug: string;
  category: BlogCategory;
  date: string;
  isoDate?: string;
  readTime: string;
  image: string;
  ogImage?: string;
  featured?: boolean;
  en: BlogPostContent;
  // Optional: posts without a Spanish translation omit this entirely. The
  // /es/blog/[slug] route then permanently redirects to the English URL
  // instead of silently rendering duplicate English content under /es/.
  es?: BlogPostContent;
}
