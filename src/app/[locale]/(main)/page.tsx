import { CTACurriculum } from '@/features/home/components/cta-curriculum';
import { ExperienceSection } from '@/features/home/components/experience-section';
import { HomeHero } from '@/features/home/components/home-hero';
import { Interests } from '@/features/home/components/interests';
import { NachUICta } from '@/features/home/components/nach-ui-cta';
import { ProjectsSection } from '@/features/home/components/projects-section';
import { TechStack } from '@/features/home/components/tech-stack';
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

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ProfilePage',
    mainEntity: {
      '@type': 'Person',
      name: 'Ignacio Figueroa',
      url: `https://ignaciofigueroa.com/${locale === 'en' ? '' : locale}`,
      jobTitle: 'Full Stack Developer',
      sameAs: ['https://github.com/figueroaignacio', 'https://linkedin.com/in/ignaciofigueroa'],
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="space-y-24 mb-20">
        <HomeHero />
        <ProjectsSection />
        <Interests />
        <NachUICta />
        <TechStack />
        <ExperienceSection />
        <CTACurriculum />
        <Testimonials />
      </div>
    </>
  );
}

export async function generateMetadata({ params }: HomePageProps) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'metadata.home' });

  const url = locale === 'en' ? '/' : `/${locale}`;

  return {
    title: t('title'),
    description: t('description'),
    keywords: t('keywords'),
    alternates: {
      canonical: url,
      languages: {
        en: '/en',
        es: '/es',
        'x-default': '/en',
      },
    },
    openGraph: {
      title: t('title'),
      description: t('description'),
      url,
      locale: locale === 'en' ? 'en_US' : 'es_ES',
      type: 'website',
      siteName: 'Ignacio Figueroa Portfolio',
    },
  };
}
