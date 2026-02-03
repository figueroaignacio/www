import { Badge } from '@/components/ui/badge';
import { Link } from '@/i18n/navigation';
import { formatFullDateWithWeekday } from '@/lib/format-date';
import { type Post, PostCategory } from '@/payload-types';
import { ArrowRight } from 'lucide-react';
import { useLocale, useTranslations } from 'next-intl';

export function PostCard({ slug, title, createdAt, description, categories }: Partial<Post>) {
  const t = useTranslations('components.postItem');
  const locale = useLocale();

  const categoryList =
    categories?.filter((cat): cat is PostCategory => typeof cat === 'object') ?? [];

  return (
    <Link
      href={`/blog/${slug}`}
      className="group block py-6 border-b border-border last:border-0 hover:border-muted-foreground/30 transition-colors"
    >
      <article className="space-y-3">
        {createdAt && (
          <div className="text-sm text-muted-foreground">
            <time>{formatFullDateWithWeekday(createdAt, locale)}</time>
          </div>
        )}
        <h2 className="text-xl font-medium text-foreground group-hover:text-foreground/80 transition-colors">
          {title}
        </h2>
        {description && <p className="text-muted-foreground leading-relaxed">{description}</p>}
        {categoryList.length > 0 && (
          <div className="flex flex-wrap gap-2 pt-2">
            {categoryList.map((cat) => (
              <Badge key={cat.id} variant="secondary" className="text-xs px-3 py-1 rounded-lg">
                {cat.label}
              </Badge>
            ))}
          </div>
        )}
        <div className="flex w-full justify-end">
          <Link
            href={`/blog/${slug}`}
            className="flex items-center gap-x-3 pt-2 text-sm text-muted-foreground group-hover:underline"
          >
            {t('readMore')}
            <ArrowRight className="size-4" />
          </Link>
        </div>
      </article>
    </Link>
  );
}
