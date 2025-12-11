// React
import { Suspense, use } from 'react';

// next-intl
import { useTranslations, type Locale } from 'next-intl';
import { getTranslations, setRequestLocale } from 'next-intl/server';

// Components
import { Hero } from '@/components/hero';
import { CvCta } from '@/features/about/components/cv-cta';
import { GreetingMessage } from '@/features/about/components/greeting-message';
import { RecentPosts } from '@/features/blog/components/recent-posts';
import { AllExperience } from '@/features/experience/components/all-experience';
import { AllTestimonials } from '@/features/experience/components/all-testimonials';
import { ExperienceItemLoader } from '@/features/experience/components/experience-item-loader';

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
      <Hero title={<GreetingMessage />} description={t('description')} />
      <Suspense fallback={<ExperienceItemLoader />}>
        <AllExperience />
      </Suspense>
      <CvCta />
      <AllTestimonials />
      <RecentPosts />
    </div>
  );
}
