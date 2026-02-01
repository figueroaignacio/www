import { getRecentPosts } from '@/features/blog/api/posts';
import { Link } from '@/i18n/navigation';
import { getLocale, getTranslations } from 'next-intl/server';
import { PostPreview } from './post-preview';

export async function RecentPosts() {
  const t = await getTranslations('sections.recentPosts');
  const locale = await getLocale();
  const posts = await getRecentPosts(locale);

  return (
    <section className="py-12 space-y-5">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-medium">{t('title')}</h2>
        <Link
          href="/blog"
          className="text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          {t('viewAll')}
        </Link>
      </div>
      <ul className="space-y-3">
        {posts.map((post) => {
          return (
            <div key={post.id} className="space-y-5">
              <PostPreview
                title={post.title}
                slug={post.slug}
                description={post.description}
                createdAt={post.createdAt}
              />
            </div>
          );
        })}
      </ul>
    </section>
  );
}
