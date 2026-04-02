import { Link } from '@/i18n/navigation';
import { formatFullDateWithWeekday } from '@/lib/format-date';
import { Post } from '@/payload-types';
import { ArrowRight } from 'lucide-react';
import { getLocale, getTranslations } from 'next-intl/server';

import { getReadingTime } from '@/lib/reading-time';

export async function PostPreview({ title, createdAt, slug, body }: Partial<Post>) {
  const locale = await getLocale();
  const t = await getTranslations('components.postItem');
  const readingTime = getReadingTime(body);

  return (
    <article>
      <Link
        href={`/blog/${slug}`}
        aria-label={`Read more about ${title}`}
        className="group flex items-center gap-3 justify-between py-3 border-b border-border last:border-0 hover:border-muted-foreground/50 transition-colors"
      >
        <div className="max-w-md space-y-3">
          {createdAt ? (
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <time dateTime={new Date(createdAt).toISOString()}>{formatFullDateWithWeekday(createdAt, locale)}</time>
              {readingTime > 0 && (
                <>
                  <span>•</span>
                  <span>{t('minRead', { count: readingTime })}</span>
                </>
              )}
            </div>
          ) : null}
          <h3 className="font-medium text-foreground group-hover:text-foreground/80 transition-colors group-hover:underline m-0 p-0 text-base">
            {title}
          </h3>
        </div>
        <ArrowRight aria-hidden="true" className="size-5 text-muted-foreground group-hover:text-foreground/80 transition-colors" />
      </Link>
    </article>
  );
}
