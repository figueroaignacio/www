// Hooks
import { useTranslations, type Locale } from 'next-intl';
import { use } from 'react';

// Utils
import { getTranslations, setRequestLocale } from 'next-intl/server';

// Components
import { Hero } from '@/components/hero';
import { AboutMe } from '@/features/about/components/about-me';

// Types
import type { Metadata } from 'next/types';

interface AboutPageProps {
  params: Promise<{ locale: Locale }>;
}

export async function generateMetadata({ params }: AboutPageProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'sections.aboutMe' });

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
      images: [
        {
          url: `/${locale}/blog/opengraph-image`,
          width: 1200,
          height: 630,
          alt: t('description'),
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: t('title'),
      description: t('description'),
    },
  };
}

export default function AboutPage({ params }: AboutPageProps) {
  const { locale } = use(params);
  setRequestLocale(locale);

  const t = useTranslations('sections.aboutMe');

  return (
    <div className="space-y-5">
      <Hero title={t('title')} description={t('description')} />
      <AboutMe />
    </div>
  );
}
