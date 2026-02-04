import { useTranslations } from 'next-intl';

export function BlogHero() {
  const t = useTranslations('sections.blog');

  return (
    <section className="space-y-4 mt-10">
      <h1 className="text-3xl font-bold tracking-tight">Blog</h1>
      <p className="text-muted-foreground">{t('description')}</p>
    </section>
  );
}
