// React
import { use } from 'react';

// next-intl
import { useTranslations, type Locale } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';

// Sections
import { PageDescription } from '@/components/page-description';
import { AllExperience } from '@/sections/all-experience';

interface ExeperiencePageProps {
  params: Promise<{ locale: Locale }>;
}

export default function ExperiencePage({ params }: ExeperiencePageProps) {
  const { locale } = use(params);
  setRequestLocale(locale);
  const t = useTranslations('sections');

  return (
    <div className="space-y-5">
      <PageDescription title={t('experience.description')} />
      <AllExperience />
    </div>
  );
}
