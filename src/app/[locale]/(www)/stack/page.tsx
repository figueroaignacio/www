// React
import { use } from 'react';

// next-intl
import { useTranslations, type Locale } from 'next-intl';
import { getTranslations, setRequestLocale } from 'next-intl/server';

// Components
import { TechStack } from '@/features/stack/components/tech-stack';

// Types
import { Hero } from '@/components/hero';
import { type Metadata } from 'next';

interface StackPageProps {
  params: Promise<{ locale: Locale }>;
}

export async function generateMetadata({ params }: StackPageProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'sections.stack' });

  return {
    title: t('title'),
    description: t('description'),
    openGraph: {
      title: t('title'),
      description: t('description'),
      type: 'website',
      locale: locale,
      url: `https://ignaciofigueroa.vercel.app/${locale}/stack`,
      siteName: 'Ignacio Figueroa',
    },
    twitter: {
      card: 'summary_large_image',
      title: t('title'),
      description: t('description'),
    },
  };
}

export default function StackPage({ params }: StackPageProps) {
  const { locale } = use(params);
  setRequestLocale(locale);
  const t = useTranslations('sections.stack');

  return (
    <div className="space-y-5">
      <Hero title={t('title')} description={t('description')} />
      <TechStack />
    </div>
  );
}
