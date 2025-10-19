// React
import { use } from 'react';

// next-intl
import { useTranslations, type Locale } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';

// Sections
import { AllProjects } from '@/sections/all-projects';

interface ProjectsPageProps {
  params: Promise<{ locale: Locale }>;
}

export default function ProjectsPage({ params }: ProjectsPageProps) {
  const { locale } = use(params);
  setRequestLocale(locale);
  const t = useTranslations('sections');

  return (
    <div className="space-y-5">
      <h2 className="text-muted-foreground text-sm">{t('projects.description')}</h2>
      <AllProjects />
    </div>
  );
}
