import { AboutHero } from '@/features/about-me/components/about-hero';
import { Bio } from '@/features/about-me/components/bio';
import { Interests } from '@/features/about-me/components/interests';
import { TechStack } from '@/features/about-me/components/tech-stack';
import type { Locale } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';
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
      <Interests />
      <TechStack />
    </div>
  );
}
