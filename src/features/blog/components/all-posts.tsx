// Components
import { Error } from '@/components/error';
import { PostItem } from './post-item';

// Utils
import { getPosts } from '@/features/blog/api/posts';
import { getLocale } from 'next-intl/server';

// Types
import { type Post } from '@/payload-types';

export async function AllPosts() {
  const locale = await getLocale();
  const posts: Post[] = await getPosts(locale);

  if (posts.length === 0) {
    return <Error />;
  }

  return (
    <ul className="space-y-3">
      {posts.map((post) => {
        return (
          <div key={post.id} className="space-y-5">
            <PostItem
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
  );
}
