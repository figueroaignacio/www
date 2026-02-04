import { BackButton } from '@/components/back-button';
import { Badge } from '@/components/ui/badge';
import { formatFullDateWithWeekday } from '@/lib/format-date';
import type { Post, PostCategory } from '@/payload-types';
import { useLocale, useTranslations } from 'next-intl';

export function PostHeader({ title, description, createdAt, categories }: Partial<Post>) {
  const t = useTranslations('sections.blog');
  const locale = useLocale();

  const categoryList =
    categories?.filter((cat): cat is PostCategory => typeof cat === 'object') ?? [];

  return (
    <header className="space-y-6 pb-3 ">
      <div className="flex justify-between items-center mb-5">
        <BackButton />
      </div>
      <div className="flex text-muted-foreground gap-x-2 text-sm flex-wrap">
        {createdAt && <p>{formatFullDateWithWeekday(createdAt, locale)}</p>}
        <div className="hidden md:block">|</div>
        <p>{t('postedBy')} Ignacio Figueroa</p>
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
      <div className="space-y-3"></div>
    </header>
  );
}
