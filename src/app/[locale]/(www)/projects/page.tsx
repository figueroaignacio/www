// React
import { Suspense, use } from 'react';

// next-intl
import { useTranslations, type Locale } from 'next-intl';
import { getTranslations, setRequestLocale } from 'next-intl/server';

// Components
import { Hero } from '@/components/hero';
import { Loader } from '@/components/loader';
import { Separator } from '@/components/ui/separator';
import { FeaturedProjects } from '@/sections/featured-projects';
import { OtherProjects } from '@/sections/other-projects';

// Types
import { type Metadata } from 'next';

interface ProjectsPageProps {
  params: Promise<{ locale: Locale }>;
}

export async function generateMetadata({ params }: ProjectsPageProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'sections.projects' });

  return {
    title: t('title'),
    description: t('description'),
    openGraph: {
      title: t('title'),
      description: t('description'),
      type: 'website',
      locale: locale,
      url: `https://ignaciofigueroa.vercel.app/${locale}/projects`,
      siteName: 'Ignacio Figueroa',
    },
    twitter: {
      card: 'summary_large_image',
      title: t('title'),
      description: t('description'),
    },
  };
}

export default function ProjectsPage({ params }: ProjectsPageProps) {
  const { locale } = use(params);
  setRequestLocale(locale);
  const t = useTranslations('sections.projects');

  return (
    <div className="space-y-5">
      <Hero title={t('title')} description={t('description')} />
      <Suspense fallback={<Loader />}>
        <FeaturedProjects />
        <Separator />
        <OtherProjects />
      </Suspense>
    </div>
  );
}
