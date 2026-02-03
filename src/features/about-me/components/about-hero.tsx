import { useTranslations } from 'next-intl';

export function AboutHero() {
  const t = useTranslations('sections.aboutMe');

  return (
    <section className="space-y-4">
      <h1 className="text-3xl font-bold tracking-tight">{t('title')}</h1>
      <p className="text-muted-foreground">{t('description')}</p>
    </section>
  );
}
