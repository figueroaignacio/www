import { CTACurriculum } from '@/features/home/components/cta-curriculum';
import { ExperienceSection } from '@/features/home/components/experience-section';
import { HomeHero } from '@/features/home/components/home-hero';
import { Interests } from '@/features/home/components/interests';
import { MateUICta } from '@/features/home/components/mate-ui-cta';
import { ProjectsSection } from '@/features/home/components/projects-section';
import { TechStack } from '@/features/home/components/tech-stack';
import { Testimonials } from '@/features/home/components/testimonials';
import { type Locale } from 'next-intl';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { use } from 'react';

interface HomePageProps {
  params: Promise<{ locale: Locale }>;
}

export default function HomePage({ params }: HomePageProps) {
  const { locale } = use(params);
  setRequestLocale(locale);

  return (
    <div className="space-y-24 mb-20">
      <HomeHero />
      <ProjectsSection />
      <Interests />
      <MateUICta />
      <TechStack />
      <ExperienceSection />
      <CTACurriculum />
      <Testimonials />
    </div>
  );
}

export async function generateMetadata({ params }: HomePageProps) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'metadata.home' });

  return {
    title: t('title'),
    description: t('description'),
    keywords: t('keywords'),
  };
}
