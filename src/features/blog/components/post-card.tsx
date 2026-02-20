import { Badge } from '@/components/ui/badge';
import { Link } from '@/i18n/navigation';
import { formatDateOnly } from '@/lib/format-date';
import { type Post, PostCategory } from '@/payload-types';
import { ArrowRight } from 'lucide-react';
import { useLocale, useTranslations } from 'next-intl';

import { getReadingTime } from '@/lib/reading-time';

export function PostCard({ slug, title, createdAt, description, categories, body }: Partial<Post>) {
  const t = useTranslations('components.postItem');
  const locale = useLocale();

  const categoryList =
    categories?.filter((cat): cat is PostCategory => typeof cat === 'object') ?? [];

  const readingTime = getReadingTime(body);

  return (
    <Link
      href={`/blog/${slug}`}
      className="group block p-6 -mx-6 hover:bg-muted/50 transition-all duration-300 rounded-lg"
    >
      <article className="space-y-4">
        <div className="flex items-center gap-4 text-muted-foreground/70 flex-wrap">
          {createdAt && <time className="text-xs">{formatDateOnly(createdAt, locale)}</time>}
          {categoryList.length > 0 && (
            <div className="flex gap-2">
              {categoryList.slice(0, 1).map((cat) => (
                <Badge key={cat.id} variant="outline" className="text-xs font-normal">
                  {cat.label}
                </Badge>
              ))}
              {categoryList.length > 2 && (
                <Badge variant="outline" className="text-xs font-normal">
                  +{categoryList.length - 1}
                </Badge>
              )}
            </div>
          )}
          {readingTime > 0 && (
            <span className="text-xs">{t('minRead', { count: readingTime })}</span>
          )}
        </div>
        <h2 className="text-2xl font-semibold text-foreground group-hover:text-foreground/80 transition-colors leading-tight">
          {title}
        </h2>
        {description && (
          <p className="text-muted-foreground leading-relaxed line-clamp-2">{description}</p>
        )}
        <div className="flex items-center gap-2 text-sm font-medium text-foreground/70 group-hover:text-foreground pt-2">
          {t('readMore')}
          <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
        </div>
      </article>
    </Link>
  );
}
