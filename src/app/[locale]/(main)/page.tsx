import { CTACurriculum } from '@/features/home/components/cta-curriculum';
import { HomeHero } from '@/features/home/components/home-hero';
import { QuickLinks } from '@/features/home/components/quick-links';
import { RecentPosts } from '@/features/home/components/recent-posts';
import { Testimonials } from '@/features/home/components/testimonials';
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
    <div className="space-y-5">
      <HomeHero />
      <QuickLinks />
      <RecentPosts />
      <Testimonials />
      <CTACurriculum />
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
