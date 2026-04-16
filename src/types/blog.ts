export type BlogCategory = 'Fat Loss' | 'Muscle Gain' | 'Nutrition' | 'Mindset' | 'Lifestyle';

export interface BlogPostContent {
  title: string;
  excerpt: string;
  content: string; // HTML or MDX string
  metaTitle: string;
  metaDescription: string;
}

export interface BlogPost {
  id: string;
  slug: string;
  category: BlogCategory;
  date: string;
  readTime: string;
  image: string;
  featured?: boolean;
  en: BlogPostContent;
  es: BlogPostContent;
}
