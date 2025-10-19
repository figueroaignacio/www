// React
import { use } from 'react';

// next-intl
import { type Locale } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';

interface HomePageProps {
  params: Promise<{ locale: Locale }>;
}

export default function HomePage({ params }: HomePageProps) {
  const { locale } = use(params);
  setRequestLocale(locale);

  return <div className="space-y-12">Thoughts</div>;
}
