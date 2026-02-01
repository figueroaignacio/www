import { Link } from '@/i18n/navigation';
import { FileText } from 'lucide-react';
import { useTranslations } from 'next-intl';

export function CTACurriculum() {
  const t = useTranslations('components.ctaCv');

  return (
    <section className="p-8 bg-card rounded-lg border border-border text-center space-y-4">
      <h2 className="text-xl font-semibold">{t('cta.title')}</h2>
      <p className="text-muted-foreground max-w-md mx-auto">{t('cta.description')}</p>
      <Link
        href={t('cta.url')}
        target="_blank"
        className="inline-flex items-center gap-2 bg-foreground text-background px-6 py-3 text-sm font-medium rounded-lg hover:bg-foreground/90 transition-colors"
      >
        <FileText className="h-4 w-4" />
        {t('cta.text')}
      </Link>
    </section>
  );
}
