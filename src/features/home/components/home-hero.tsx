import { useTranslations } from 'next-intl';

export function HomeHero() {
  const t = useTranslations('sections.home');

  return (
    <section className="space-y-6 mt-10">
      <p className="text-sm text-muted-foreground">{t('greeting')}</p>
      <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-balance">{t('name')}</h1>
      <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
        <span className="text-foreground font-medium">{t('title')}</span> {t('titleComplement')}.{' '}
        {t('subtitle')}
      </p>
      <p className="text-muted-foreground leading-relaxed max-w-2xl">{t('description')}</p>
    </section>
  );
}
