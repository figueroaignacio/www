// React
import { use } from 'react';

// next-intl
import { useTranslations, type Locale } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';

// Components
import { PageDescription } from '@/components/page-description';
import { TechStack } from '@/sections/tech-stack';

interface StackPageProps {
  params: Promise<{ locale: Locale }>;
}

export default function StackPage({ params }: StackPageProps) {
  const { locale } = use(params);
  setRequestLocale(locale);
  const t = useTranslations('sections');

  return (
    <div className="space-y-5">
      <PageDescription title={t('stack.description')} />
      <TechStack />
    </div>
  );
}
