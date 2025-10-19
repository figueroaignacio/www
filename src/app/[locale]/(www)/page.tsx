// React
import { use } from 'react';

// next-intl
import { useTranslations, type Locale } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';

// Components
import { PageDescription } from '@/components/page-description';
import { AllPosts } from '@/sections/all-posts';

interface HomePageProps {
  params: Promise<{ locale: Locale }>;
}

export default function HomePage({ params }: HomePageProps) {
  const { locale } = use(params);
  setRequestLocale(locale);
  const t = useTranslations('sections');

  return (
    <div className="space-y-5">
      <PageDescription title={t('thoughts.description')} />
      <AllPosts />
    </div>
  );
}
