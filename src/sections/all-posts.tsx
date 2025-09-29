// Components
import { PostItem } from '@/components/post-item';

// Utils
import { getPosts } from '@/lib/services';
import { getLocale } from 'next-intl/server';

// Types
import { type Post } from '@/payload-types';

export async function AllPosts() {
  const locale = await getLocale();
  const posts: Post[] = await getPosts(locale);

  return (
    <ul className="space-y-5 mt-12">
      {posts.map((post) => (
        <li key={post.slug}>
          <PostItem title={post.title} description={post.description} slug={post.slug} />
        </li>
      ))}
    </ul>
  );
}
