// Hooks
import { useLocale } from 'next-intl';

// Components
import { Link } from '@/i18n/navigation';
import { Thumbnail } from './thumbnail';

// Utils
import { formatFullDateWithWeekday } from '@/lib/utils';

// Types
import { type Post } from '@/payload-types';

interface PostItemProps extends Pick<Post, 'title' | 'slug' | 'createdAt' | 'description'> {}

export function PostItem({ slug, title, createdAt, description }: PostItemProps) {
  const locale = useLocale();

  return (
    <div className="space-y-3">
      <Link href={`/blog/${slug}`}>
        <Thumbnail title={title} />
      </Link>
      <div className="flex flex-col px-3 gap-3">
        <p className="text-xs text-muted-foreground">
          {formatFullDateWithWeekday(createdAt, locale)}
        </p>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
    </div>
  );
}
