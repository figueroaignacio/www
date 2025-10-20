// Hooks
import { useLocale } from 'next-intl';

// Components
import { Link } from '@/i18n/navigation';

// Utils
import { formatFullDateWithWeekday } from '@/lib/utils';

// Types
import { type Post } from '@/payload-types';

interface PostItemProps extends Pick<Post, 'title' | 'slug' | 'createdAt' | 'description'> {}

export function PostItem({ slug, title, createdAt, description }: PostItemProps) {
  const locale = useLocale();

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between flex-wrap-reverse gap-3">
        <Link href={`/blog/${slug}`} className="underline">
          <h3 className="text-sm transition-transform hover:scale-[1.02] active:scale-[0.99]">
            {title}
          </h3>
        </Link>
        <p className="text-xs text-muted-foreground">
          {formatFullDateWithWeekday(createdAt, locale)}
        </p>
      </div>
      <p className="text-sm text-muted-foreground mt-3">{description}</p>
    </div>
  );
}
