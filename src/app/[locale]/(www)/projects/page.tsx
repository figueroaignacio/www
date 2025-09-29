import { use } from 'react';

// Sections
import { AllProjects } from '@/sections/all-projects';
import { Hero } from '@/sections/hero';

// next-intl
import { type Locale, useTranslations } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';

interface ProjectsPageProps {
  params: Promise<{ locale: Locale }>;
}

export default function ProjectsPage({ params }: ProjectsPageProps) {
  const { locale } = use(params);
  setRequestLocale(locale);
  const t = useTranslations('sections');

  return (
    <section className="container space-y-3">
      <Hero title={t('projects.heading')} description={t('projects.description')} />
      <AllProjects />
    </section>
  );
}
