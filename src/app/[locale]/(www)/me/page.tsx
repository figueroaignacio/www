// React
import { use } from 'react';

// next-intl
import { useTranslations, type Locale } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';

interface MePageProps {
  params: Promise<{ locale: Locale }>;
}

export default function MePage({ params }: MePageProps) {
  const { locale } = use(params);
  setRequestLocale(locale);
  const t = useTranslations('sections');

  return <h2 className="text-muted-foreground text-sm">{t('me.description')}</h2>;
}
