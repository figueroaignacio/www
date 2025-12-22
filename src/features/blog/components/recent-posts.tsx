// Hooks
import { useTranslations } from 'next-intl';

// Components
import { Link } from '@/i18n/navigation';
import { ArrowRight } from 'lucide-react';
import { PostCard } from './post-card';

// Utils
import { getLocale } from 'next-intl/server';
import { getRecentPosts } from '../api/posts';

export async function RecentPosts() {
  const t = useTranslations('sections.recentPosts');
  const locale = await getLocale();
  const posts = await getRecentPosts(locale);

  return (
    <>
      <div className="flex justify-between items-center flex-wrap">
        <h2>&gt;{t('title')}</h2>
        <Link
          href="/blog"
          className="underline text-muted-foreground hover:text-foreground text-xs flex items-center gap-x-3"
        >
          {t('allPosts')}
          <ArrowRight className="size-3" />
        </Link>
      </div>
      <ul className="space-y-3">
        {posts.map((post) => {
          return (
            <div key={post.id} className="space-y-5">
              <PostCard
                createdAt={post.createdAt}
                title={post.title}
                slug={post.slug}
                description={post.description}
                categories={post.categories}
              />
            </div>
          );
        })}
      </ul>
    </>
  );
}
