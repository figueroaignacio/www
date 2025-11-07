// Hooks
import { useLocale, useTranslations } from 'next-intl';

// Components
import { Link } from '@/i18n/navigation';
import { ArrowRight } from 'lucide-react';

// Utils
import { formatFullDateWithWeekday } from '@/lib/utils';

// Types
import { type Post } from '@/payload-types';

interface PostItemProps extends Pick<Post, 'title' | 'slug' | 'createdAt' | 'description'> {}

export function PostItem({ slug, title, createdAt, description }: PostItemProps) {
  const t = useTranslations('components.postItem');
  const locale = useLocale();

  return (
    <div className="space-y-3">
      <p className="text-xs text-muted-foreground">
        {formatFullDateWithWeekday(createdAt, locale)}
      </p>
      <Link href={`/blog/${slug}`}>
        <h2 className="hover:underline hover:text-primary">{title}</h2>
      </Link>
      <div className="flex flex-col gap-3">
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
      <div className="flex justify-self-end">
        <Link
          href={`/blog/${slug}`}
          className="underline hover:text-primary w-fit flex items-center gap-x-2 text-sm active:scale-[0.98] transition duration-200 "
        >
          {t('readMore')}
          <ArrowRight className="size-4" />
        </Link>
      </div>
    </div>
  );
}
