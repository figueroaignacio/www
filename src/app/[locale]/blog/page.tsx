// React
import { Suspense } from 'react';

// next-intl
import { type Locale } from 'next-intl';
import { getTranslations, setRequestLocale } from 'next-intl/server';

// Components
import { Hero } from '@/components/hero';
import { AllPosts } from '@/features/blog/components/all-posts';
import { CategoryFilter } from '@/features/blog/components/category-filter';
import { PostCardLoader } from '@/features/blog/components/post-card-loader';

// Utils
import { getCategories } from '@/features/blog/api/categories';

// Types
import { type Metadata } from 'next';

interface BlogPageProps {
  params: Promise<{ locale: Locale }>;
  searchParams: Promise<{
    category?: string;
  }>;
}

export async function generateMetadata({ params }: BlogPageProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'sections.blog' });

  return {
    title: t('title'),
    description: t('description'),
    openGraph: {
      title: t('title'),
      description: t('description'),
      type: 'website',
      locale: locale,
      url: `https://ignaciofigueroa.vercel.app/${locale}/blog`,
      siteName: 'Ignacio Figueroa',
    },
    twitter: {
      card: 'summary_large_image',
      title: t('title'),
      description: t('description'),
    },
  };
}

export default async function BlogPage({ params, searchParams }: BlogPageProps) {
  const { locale } = await params;
  const { category } = await searchParams;

  setRequestLocale(locale);
  const t = await getTranslations('sections.blog');
  const categories = await getCategories(locale);

  return (
    <div className="space-y-5">
      <Hero title={t('title')} description={t('description')} />
      <CategoryFilter categories={categories} currentCategory={category || null} />
      <Suspense key={category || 'all'} fallback={<PostCardLoader />}>
        <AllPosts categorySlug={category} locale={locale} />
      </Suspense>
    </div>
  );
}
