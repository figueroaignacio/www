// Components
import { Error } from '@/components/error';
import { PostItem } from './post-item';

// Utils
import { getLocale } from 'next-intl/server';

// Types
import { getPosts } from '@/features/blog/api/posts';
import { type Post } from '@/payload-types';

export async function AllPosts() {
  const locale = await getLocale();
  let posts: Post[] = [];

  try {
    posts = await getPosts(locale);
  } catch (error) {
    return <Error />;
  }

  if (posts.length === 0) {
    return <Error />;
  }

  return (
    <ul className="space-y-10">
      {posts.map((post, index) => {
        const delay = 0.1 + index * 0.1;
        return (
          <div key={post.id} className="space-y-5">
            <PostItem
              createdAt={post.createdAt}
              title={post.title}
              slug={post.slug}
              description={post.description}
            />
          </div>
        );
      })}
    </ul>
  );
}
