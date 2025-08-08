import { use } from 'react';

// Next intl
import { Locale, useTranslations } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';

// Sections
import CVCallToAction from '@/components/cv-call-to-action';
import { Education } from '@/sections/education';
import { Experiences } from '@/sections/experiences';

// Components
import { Hero } from '@/sections/hero';

type HomePageProps = {
  params: Promise<{ locale: Locale }>;
};

export default function HomePage({ params }: HomePageProps) {
  const { locale } = use(params);
  setRequestLocale(locale);

  const t = useTranslations('sections');

  return (
    <div className="space-y-8">
      <Hero title={t('hero.title')} description={t('hero.description')} />
      <Experiences />
      <CVCallToAction />
      <Education />
    </div>
  );
}
