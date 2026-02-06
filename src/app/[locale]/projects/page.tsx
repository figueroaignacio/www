import { AllProjects } from '@/features/projects/components/all-projects';
import { ProjectHero } from '@/features/projects/components/project-hero';
import type { Locale } from 'next-intl';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { use } from 'react';

interface ProjectsPageProps {
  params: Promise<{ locale: Locale }>;
}

export default function ProjectsPage({ params }: ProjectsPageProps) {
  const { locale } = use(params);
  setRequestLocale(locale);

  return (
    <div className="space-y-16">
      <ProjectHero />
      <AllProjects />
    </div>
  );
}

export async function generateMetadata({ params }: ProjectsPageProps) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'metadata.projects' });

  return {
    title: t('title'),
    description: t('description'),
    keywords: t('keywords'),
  };
}
