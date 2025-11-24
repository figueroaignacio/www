// React
import { use } from 'react';

// next-intl
import { AllPosts } from '@/features/blog/components/all-posts';
import { useTranslations, type Locale } from 'next-intl';
import { getTranslations, setRequestLocale } from 'next-intl/server';

// Components
import { Hero } from '@/components/hero';

// Types
import { type Metadata } from 'next';

interface MePageProps {
  params: Promise<{ locale: Locale }>;
}

export async function generateMetadata({ params }: MePageProps): Promise<Metadata> {
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
      url: `https://ignaciofigueroa.vercel.app/${locale}/me`,
      siteName: 'Ignacio Figueroa',
    },
    twitter: {
      card: 'summary_large_image',
      title: t('title'),
      description: t('description'),
    },
  };
}

export default function MePage({ params }: MePageProps) {
  const { locale } = use(params);
  setRequestLocale(locale);
  const t = useTranslations('sections.blog');

  return (
    <div className="space-y-5">
      <Hero title={t('title')} description={t('description')} />
      <AllPosts />
    </div>
  );
}
