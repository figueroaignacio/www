import { CTACurriculum } from '@/features/home/components/cta-curriculum';
import { HomeHero } from '@/features/home/components/home-hero';
import { QuickLinks } from '@/features/home/components/quick-links';
import { RecentPosts } from '@/features/home/components/recent-posts';
import { type Metadata } from 'next';
import { type Locale } from 'next-intl';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { use } from 'react';

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

  return (
    <div className="space-y-5">
      <HomeHero />
      <QuickLinks />
      <RecentPosts />
      <CTACurriculum />
    </div>
  );
}
