import { AboutHero } from '@/features/about-me/components/about-hero';
import { Bio } from '@/features/about-me/components/bio';
import { Interests } from '@/features/about-me/components/interests';
import { TechStack } from '@/features/about-me/components/tech-stack';
import { CTACurriculum } from '@/features/home/components/cta-curriculum';
import type { Locale } from 'next-intl';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { use } from 'react';

interface AboutPageProps {
  params: Promise<{ locale: Locale }>;
}

export default function AboutPage({ params }: AboutPageProps) {
  const { locale } = use(params);
  setRequestLocale(locale);

  return (
    <div className="space-y-16">
      <AboutHero />
      <Bio />
      <CTACurriculum />
      <Interests />
      <TechStack />
    </div>
  );
}

export async function generateMetadata({ params }: AboutPageProps) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'metadata.aboutMe' });

  return {
    title: t('title'),
    description: t('description'),
    keywords: t('keywords'),
  };
}
