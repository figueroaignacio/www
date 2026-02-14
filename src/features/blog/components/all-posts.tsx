import { getPosts } from '@/features/blog/api/posts';
import type { Post } from '@/payload-types';
import { PostCard } from './post-card';

interface AllPostsProps {
  categorySlug?: string;
  locale: string;
}

export async function AllPosts({ categorySlug, locale }: AllPostsProps) {
  const posts: Post[] = await getPosts(locale, categorySlug);

  if (posts.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-center">
        <p className="text-lg text-muted-foreground">
          {categorySlug ? 'No posts in this category yet.' : 'No posts available yet.'}
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-12">
      {posts.map((post) => (
        <PostCard
          key={post.id}
          createdAt={post.createdAt}
          title={post.title}
          slug={post.slug}
          description={post.description}
          categories={post.categories}
        />
      ))}
    </div>
  );
}
