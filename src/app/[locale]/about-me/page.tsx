import { Bio } from '@/features/about-me/components/bio';
import type { Locale } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';
import { use } from 'react';

interface AboutPageProps {
  params: Promise<{ locale: Locale }>;
}

export default function AboutPage({ params }: AboutPageProps) {
  const { locale } = use(params);
  setRequestLocale(locale);

  return (
    <div className="space-y-16">
      <section className="space-y-4">
        <h1 className="text-3xl font-bold tracking-tight">Sobre mí</h1>
        <p className="text-muted-foreground">Construyendo software con propósito</p>
      </section>
      <Bio />
    </div>
  );
}
