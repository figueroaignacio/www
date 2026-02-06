import { getCategories } from '@/features/blog/api/categories';
import { AllPosts } from '@/features/blog/components/all-posts';
import { BlogHero } from '@/features/blog/components/blog-hero';
import { CategoryFilter } from '@/features/blog/components/category-filter';
import { PostCardLoader } from '@/features/blog/components/post-card-loader';
import type { Locale } from 'next-intl';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { Suspense } from 'react';

interface BlogPageProps {
  params: Promise<{ locale: Locale }>;
  searchParams: Promise<{
    category?: string;
  }>;
}

export default async function BlogPage({ params, searchParams }: BlogPageProps) {
  const { locale } = await params;
  const { category } = await searchParams;
  const categories = await getCategories(locale);
  setRequestLocale(locale);

  return (
    <div className="space-y-16">
      <BlogHero />
      <div className="space-y-5">
        <CategoryFilter categories={categories} currentCategory={category || null} />
        <Suspense fallback={<PostCardLoader />}>
          <AllPosts categorySlug={category} locale={locale} />
        </Suspense>
      </div>
    </div>
  );
}

export async function generateMetadata({ params }: BlogPageProps) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'metadata.blog' });

  return {
    title: t('title'),
    description: t('description'),
    keywords: t('keywords'),
  };
}
