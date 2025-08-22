import { use } from 'react';

// Hooks
import { Locale, useTranslations } from 'next-intl';

// Components
import { Hero } from '@/sections/hero';
import { setRequestLocale } from 'next-intl/server';

type ProjectsPageProps = {
  params: Promise<{ locale: Locale }>;
};

export default function ProjectsPage({ params }: ProjectsPageProps) {
  const { locale } = use(params);
  setRequestLocale(locale);

  const t = useTranslations('sections');

  return (
    <section>
      <Hero title={t('projects.title')} description={t('projects.description')} />
    </section>
  );
}
