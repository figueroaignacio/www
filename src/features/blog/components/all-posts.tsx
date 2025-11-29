// Components
import { PostItem } from './post-item';

// Utils
import { getPosts } from '@/features/blog/api/posts';

// Types
import { type Post } from '@/payload-types';

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
    <ul className="space-y-3">
      {posts.map((post) => (
        <li key={post.id} className="space-y-5">
          <PostItem
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
