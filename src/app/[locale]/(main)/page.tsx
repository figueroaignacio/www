import { type Locale } from 'next-intl';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { use } from 'react';

interface HomePageProps {
  params: Promise<{ locale: Locale }>;
}

export default function HomePage({ params }: HomePageProps) {
  const { locale } = use(params);
  setRequestLocale(locale);

  return (
    <div className="space-y-5 grid place-items-center">
      <h1>This is the beggining of my Portfolio V2</h1>
    </div>
  );
}

export async function generateMetadata({ params }: HomePageProps) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'metadata.home' });

  return {
    title: t('title'),
    description: t('description'),
    keywords: t('keywords'),
  };
}
