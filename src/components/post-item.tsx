// Hooks
import { useLocale } from 'next-intl';

// Components
import { Link } from '@/i18n/navigation';

// Utils
import { formatFullDateWithWeekday } from '@/lib/utils';

// Types
import { type Post } from '@/payload-types';

interface PostItemProps extends Pick<Post, 'title' | 'slug' | 'createdAt'> {}

export function PostItem({ slug, title, createdAt }: PostItemProps) {
  const locale = useLocale();

  return (
    <div>
      <p className="text-xs text-muted-foreground mb-2">
        {formatFullDateWithWeekday(createdAt, locale)}
      </p>
      <Link href={`/blog/${slug}`} className="underline">
        <h3 className="text-sm transition-transform hover:scale-[1.02] active:scale-[0.99]">
          {title}
        </h3>
      </Link>
    </div>
  );
}
