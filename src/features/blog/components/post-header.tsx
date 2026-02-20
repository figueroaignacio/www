import { BackButton } from '@/components/back-button';
import { Badge } from '@/components/ui/badge';
import { formatFullDateWithWeekday } from '@/lib/format-date';
import { getReadingTime } from '@/lib/reading-time';
import type { Post, PostCategory } from '@/payload-types';
import { Clock } from 'lucide-react';
import { useLocale, useTranslations } from 'next-intl';

export function PostHeader({ title, description, createdAt, categories, body }: Partial<Post>) {
  const t = useTranslations('');
  const locale = useLocale();

  const readingTime = getReadingTime(body);

  const categoryList =
    categories?.filter((cat): cat is PostCategory => typeof cat === 'object') ?? [];

  return (
    <header className="space-y-6 pb-3 ">
      <div className="flex justify-between items-center mb-5">
        <BackButton />
      </div>
      <div className="flex text-muted-foreground gap-4 text-sm flex-wrap items-center">
        <p>
          {t('sections.blog.postedBy')} {formatFullDateWithWeekday(createdAt || '', locale)}
        </p>
        {readingTime > 0 && (
          <div className="flex items-center gap-1.5">
            <Clock className="size-4" />
            <span>{t('components.postItem.minRead', { count: readingTime })}</span>
          </div>
        )}
      </div>
      <div className="space-y-3">
        <h1 className="text-3xl font-semibold">{title}</h1>
        {description && <p className="text-muted-foreground">{description}</p>}
      </div>
      {categoryList.length > 0 && (
        <div className="flex flex-wrap gap-2 pt-2">
          {categoryList.map((cat) => (
            <Badge key={cat.id} variant="secondary" className="text-xs px-3 py-1 rounded-lg">
              {cat.label}
            </Badge>
          ))}
        </div>
      )}
    </header>
  );
}
