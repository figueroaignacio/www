// Components
import { BackButton } from '@/components/back-button';
import { DeveloperWatermark } from '@/features/about/components/developer-watermark';

// Utils
import { cn } from '@/lib/cn';
import { formatFullDateWithWeekday } from '@/lib/format-date';
import { getLocale, getTranslations } from 'next-intl/server';

interface PostHeaderProps {
  title: string;
  description?: string;
  createdAt?: Date | string;
}

export async function PostHeader({ title, description, createdAt }: PostHeaderProps) {
  const t = await getTranslations('sections.blog');
  const locale = await getLocale();

  return (
    <header className="space-y-6 border-border border-b pb-3">
      <div className="flex justify-between items-center mb-5">
        <BackButton />
      </div>
      {createdAt && <p>{formatFullDateWithWeekday(createdAt, locale)}</p>}
      <div className="space-y-6">
        <h1 className={cn('text-xl font-semibold')}>{title}</h1>
        {description && <p className="text-muted-foreground">{description}</p>}
      </div>
      <div className="space-y-3">
        <p className="text-sm">{t('postedBy')}</p>
        <DeveloperWatermark />
      </div>
    </header>
  );
}
