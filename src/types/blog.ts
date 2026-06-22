export type BlogCategory = 'Fat Loss' | 'Muscle Gain' | 'Nutrition' | 'Mindset' | 'Lifestyle' | 'Training' | 'Recovery' | 'Coaching';

export interface BlogPostContent {
  title: string;
  excerpt: string;
  content: string; // HTML or MDX string
  metaTitle: string;
  metaDescription: string;
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
  es: BlogPostContent;
}
