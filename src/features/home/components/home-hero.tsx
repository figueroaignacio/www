// Hooks
import { useTranslations } from 'next-intl';

// Components
import { Link } from '@/i18n/navigation';
import { ArrowRight, FileText } from 'lucide-react';

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
      <Link href="/about-me" className="btn-link">
        {t('actions.learnMore')}
        <ArrowRight className="size-4" />
      </Link>
      <div className="flex flex-wrap items-center gap-4 pt-4">
        <Link href="/projects" className="btn btn-primary">
          {t('actions.viewProjects')}
          <ArrowRight className="size-4" />
        </Link>
        <Link href="/blog" className="btn btn-outline">
          <FileText className="size-4" />
          {t('actions.viewBlog')}
        </Link>
      </div>
    </section>
  );
}
