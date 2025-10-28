// Components
import { AnimateIn } from '@/components/animate-in';
import { Error } from '@/components/error';
import { PostItem } from '@/components/post-item';

// Utils
import { getLocale } from 'next-intl/server';

// Types
import { getPosts } from '@/lib/services';
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
    <ul className="space-y-12">
      {posts.map((post, index) => {
        const delay = 0.1 + index * 0.1;
        return (
          <div key={post.id} className="space-y-5">
            <AnimateIn variant="fadeLeft" delay={delay}>
              <PostItem
                createdAt={post.createdAt}
                title={post.title}
                slug={post.slug}
                description={post.description}
              />
            </AnimateIn>
          </div>
        );
      })}
    </ul>
  );
}
