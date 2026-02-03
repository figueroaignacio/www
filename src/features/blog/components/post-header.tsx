// Components
import { BackButton } from '@/components/back-button';
import { cn } from '@/lib/cn';
import { useTranslations } from 'next-intl';

interface PostHeaderProps {
  title: string;
  description?: string;
}

export function PostHeader({ title, description }: PostHeaderProps) {
  const t = useTranslations('sections.blog');

  return (
    <header className="space-y-6 border-border border-b pb-3">
      <div className="flex justify-between items-center mb-5">
        <BackButton />
      </div>{' '}
      <div className="space-y-6">
        <h1 className={cn('text-xl font-semibold')}>{title}</h1>
        {description && <p className="text-muted-foreground">{description}</p>}
      </div>
      <div className="space-y-3">
        <p className="text-sm">{t('postedBy')}</p>
        Ignacio Figueroa
      </div>
    </header>
  );
}
