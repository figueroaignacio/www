import { FileText } from 'lucide-react';
import { useTranslations } from 'next-intl';

export function CTACurriculum() {
  const t = useTranslations('components.ctaCv');

  return (
    <section className="p-8 bg-card rounded-lg border border-border text-center space-y-4">
      <h2 className="text-xl font-semibold">{t('cta.title')}</h2>
      <p className="text-muted-foreground max-w-md mx-auto">{t('cta.description')}</p>
      <a
        href={t('url')}
        target="_blank"
        className="btn btn-primary"
      >
        <FileText className="h-4 w-4" />
        {t('cta.text')}
      </a>
    </section>
  );
}
