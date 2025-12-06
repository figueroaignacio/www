// Hooks
import { useLocale, useTranslations } from 'next-intl';

// Components
import { Badge } from '@/components/ui/badge';
import { Link } from '@/i18n/navigation';
import { ArrowRight } from 'lucide-react';

// Utils
import { formatFullDateWithWeekday } from '@/lib/format-date';

// Types
import { type Post, PostCategory } from '@/payload-types';

export function PostItem({ slug, title, createdAt, description, categories }: Partial<Post>) {
  const t = useTranslations('components.postItem');
  const locale = useLocale();

  const categoryList =
    categories?.filter((cat): cat is PostCategory => typeof cat === 'object') ?? [];

  return (
    <div className="space-y-6 p-6 border-border border rounded-2xl">
      {createdAt ? (
        <p className="text-sm text-muted-foreground">
          {formatFullDateWithWeekday(createdAt, locale)}
        </p>
      ) : null}
      <Link href={`/blog/${slug}`}>
        <h2 className="text-lg hover:underline">{title}</h2>
      </Link>
      <div className="flex flex-col gap-3 mt-5">
        <p className="text-muted-foreground">{description}</p>
      </div>
      {categoryList.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {categoryList.map((cat) => (
            <div key={cat.id} className="transition-all duration-300">
              <Badge label={cat.label} />
            </div>
          ))}
        </div>
      )}
      <div className="flex justify-self-end">
        <Link href={`/blog/${slug}`} className="hover:underline w-fit flex items-center gap-x-2">
          {t('readMore')}
          <ArrowRight className="size-4" />
        </Link>
      </div>
    </div>
  );
}
