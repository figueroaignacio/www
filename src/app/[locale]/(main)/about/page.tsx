import { AboutContent } from '@/features/about/components/about-content';
import { DOMAINS } from '@/lib/constants';
import { type Locale } from 'next-intl';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { use } from 'react';

interface AboutPageProps {
  params: Promise<{ locale: Locale }>;
}

export default function AboutPage({ params }: AboutPageProps) {
  const { locale } = use(params);
  setRequestLocale(locale);

  return <AboutContent />;
}

export async function generateMetadata({ params }: AboutPageProps) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'metadata.aboutMe' });

  return {
    title: t('title'),
    description: t('description'),
    keywords: t('keywords'),
    alternates: {
      canonical: '/about',
      languages: {
        en: `${DOMAINS.en}/about`,
        es: `${DOMAINS.es}/about`,
        'x-default': `${DOMAINS.en}/about`,
      },
    },
    openGraph: {
      title: t('title'),
      description: t('description'),
      url: '/about',
      locale: locale === 'en' ? 'en_US' : 'es_ES',
      type: 'website',
      siteName: 'Ignacio Figueroa',
    },
  };
}
