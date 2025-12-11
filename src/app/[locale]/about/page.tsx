// Hooks
import { setRequestLocale } from 'next-intl/server';

// Components
import { Hero } from '@/components/hero';
import { AboutMe } from '@/features/about/components/about-me';

// Types
import { useTranslations, type Locale } from 'next-intl';
import { use } from 'react';

interface AboutPageProps {
  params: Promise<{ locale: Locale }>;
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
