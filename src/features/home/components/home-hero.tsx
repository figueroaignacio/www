// Hooks
import { useTranslations } from 'next-intl';

// Components
import { Link } from '@/i18n/navigation';
import { ArrowRight, FileText } from 'lucide-react';

export function HomeHero() {
  const t = useTranslations('sections.home');

  return (
    <section className="space-y-6 py-14">
      <p className="text-sm text-muted-foreground">{t('greeting')}</p>
      <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-balance">{t('name')}</h1>
      <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
        <span className="text-foreground font-medium">{t('title')}</span> {t('titleComplement')}.{' '}
        {t('subtitle')}
      </p>
      <p className="text-muted-foreground leading-relaxed max-w-2xl">{t('description')}</p>
      <div className="flex flex-wrap items-center gap-4 pt-4">
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 bg-foreground text-background px-5 py-2.5 text-sm font-medium rounded-lg hover:bg-foreground/90 transition-colors"
        >
          {t('actions.viewProjects')}
          <ArrowRight className="h-4 w-4" />
        </Link>
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 border border-border px-5 py-2.5 text-sm font-medium rounded-lg hover:bg-card hover:border-muted-foreground/50 transition-colors"
        >
          <FileText className="h-4 w-4" />
          {t('actions.viewBlog')}
        </Link>
        <Link
          href="/about-me"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          {t('actions.learnMore')}
        </Link>
      </div>
    </section>
  );
}
