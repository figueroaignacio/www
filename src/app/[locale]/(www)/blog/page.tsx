import { use } from 'react';

// Hooks
import { Locale, useTranslations } from 'next-intl';

// Components
import { AllPosts } from '@/sections/all-posts';
import { Hero } from '@/sections/hero';

// next-intl
import { setRequestLocale } from 'next-intl/server';

type BlogPageProps = {
  params: Promise<{ locale: Locale }>;
};

export default function PostsPage({ params }: BlogPageProps) {
  const { locale } = use(params);
  setRequestLocale(locale);

  const t = useTranslations('sections');

  return (
    <section className="space-y-8">
      <Hero title={t('blog.title')} description={t('blog.description')} />
      <AllPosts />
    </section>
  );
}
