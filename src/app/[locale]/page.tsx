// React
import { use } from 'react';

// next-intl
import { useTranslations, type Locale } from 'next-intl';
import { getTranslations, setRequestLocale } from 'next-intl/server';

// Components

// Types
import { type Metadata } from 'next';

interface HomePageProps {
  params: Promise<{ locale: Locale }>;
}

export async function generateMetadata({ params }: HomePageProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'sections.home' });

  return {
    title: t('title'),
    description: t('description'),
    openGraph: {
      title: t('title'),
      description: t('description'),
      type: 'website',
      locale: locale,
      url: `https://ignaciofigueroa.vercel.app/${locale}`,
      siteName: 'Ignacio Figueroa',
      images: [
        {
          url: `/${locale}/opengraph-image`,
          width: 1200,
          height: 630,
          alt: t('description'),
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: t('title'),
      description: t('description'),
      images: [`/${locale}/opengraph-image`],
    },
  };
}

export default function HomePage({ params }: HomePageProps) {
  const { locale } = use(params);
  setRequestLocale(locale);
  const t = useTranslations('sections.home');

  return (
    <div className="space-y-5">
      <div className="space-y-5">
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-balance">
          Ignacio Figueroa
        </h1>
        <h2 className="text-xl text-muted-foreground leading-relaxed max-w-2xl">{t('title')}</h2>
        <p className="text-muted-foreground leading-relaxed max-w-2xl">{t('description')}</p>
      </div>
    </div>
  );
}
