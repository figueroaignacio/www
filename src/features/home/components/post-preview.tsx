import { Link } from '@/i18n/navigation';
import { formatFullDateWithWeekday } from '@/lib/format-date';
import { Post } from '@/payload-types';
import { ArrowRight } from 'lucide-react';
import { getLocale } from 'next-intl/server';

export async function PostPreview({ title, createdAt, slug }: Partial<Post>) {
  const locale = await getLocale();

  return (
    <Link
      href={`/blog/${slug}`}
      className="group flex items-center gap-3 justify-between py-3 border-b border-border last:border-0 hover:border-muted-foreground/50 transition-colors"
    >
      <div className="max-w-md space-y-3">
        {createdAt ? (
          <p className="text-xs text-muted-foreground ">
            {formatFullDateWithWeekday(createdAt, locale)}
          </p>
        ) : null}
        <span className="font-medium text-foreground group-hover:text-foreground/80 transition-colors  group-hover:underline">
          {title}
        </span>
      </div>
      <ArrowRight className="size-5 text-muted-foreground group-hover:text-foreground/80 transition-colors" />
    </Link>
  );
}
