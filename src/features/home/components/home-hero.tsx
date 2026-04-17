import { AssistantAvatar } from '@/features/assistant/components/assistant-avatar';
import { Link } from '@/i18n/navigation';
import { FileText } from 'lucide-react';
import { useTranslations } from 'next-intl';

export function HomeHero() {
  const t = useTranslations('sections.home');
  const tCv = useTranslations('components.ctaCv');

  return (
    <section className="space-y-6 mt-10">
      <p className="text-sm text-muted-foreground">{t('greeting')}</p>
      <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-balance">{t('name')}</h1>
      <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
        <span className="text-foreground font-medium">{t('title')}</span> {t('titleComplement')}.{' '}
        {t('subtitle')}
      </p>
      <p className="text-muted-foreground leading-relaxed max-w-2xl">{t('description')}</p>
      <div className="flex flex-wrap gap-3 pt-2">
        <Link href="/assistant" className="btn btn-primary">
          {t('actions.chatAssistant')}
          <AssistantAvatar size="24" />
        </Link>
        <a href={tCv('url')} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
          <FileText className="size-4" />
          {t('actions.viewCv')}
        </a>
      </div>
    </section>
  );
}
