// React
import { use } from 'react';

// next-intl
import { useTranslations, type Locale } from 'next-intl';
import { getTranslations, setRequestLocale } from 'next-intl/server';

// Sections
import { Hero } from '@/components/hero';
import { AllExperience } from '@/sections/all-experience';

// Types
import { type Metadata } from 'next';

interface ExeperiencePageProps {
  params: Promise<{ locale: Locale }>;
}

export async function generateMetadata({ params }: ExeperiencePageProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'sections.experience' });

  return {
    title: t('title'),
    description: t('description'),
    openGraph: {
      title: t('title'),
      description: t('description'),
      type: 'website',
      locale: locale,
      url: `https://ignaciofigueroa.vercel.app/${locale}/experience`,
      siteName: 'Ignacio Figueroa',
    },
    twitter: {
      card: 'summary_large_image',
      title: t('title'),
      description: t('description'),
    },
  };
}

export default function ExperiencePage({ params }: ExeperiencePageProps) {
  const { locale } = use(params);
  setRequestLocale(locale);
  const t = useTranslations('sections.experience');

  return (
    <div className="space-y-5">
      <Hero title={t('title')} description={t('description')} />
      <AllExperience />
    </div>
  );
}
