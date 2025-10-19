// React
import { use } from 'react';

// next-intl
import { useTranslations, type Locale } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';

// Sections
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
      <h2 className="text-muted-foreground text-sm">{t('stack.description')}</h2>
      <TechStack />
    </div>
  );
}
