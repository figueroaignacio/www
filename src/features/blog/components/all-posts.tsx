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
      <div>
        <p className="text-gray-400 font-light tracking-wide">
          {categorySlug ? 'No hay posts en esta categoría' : 'No hay posts disponibles'}
        </p>
      </div>
    );
  }

  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>
          <PostCard
            createdAt={post.createdAt}
            title={post.title}
            slug={post.slug}
            description={post.description}
            categories={post.categories}
          />
        </li>
      ))}
    </ul>
  );
}
