import { BlogHero } from '@/features/blog/components/blog-hero';
import type { Locale } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';

interface BlogPageProps {
  params: Promise<{ locale: Locale }>;
  searchParams: Promise<{
    category?: string;
  }>;
}

export default async function BlogPage({ params }: BlogPageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <div className="space-y-16">
      <BlogHero />
    </div>
  );
}
