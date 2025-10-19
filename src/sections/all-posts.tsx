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
    <ul className="space-y-5">
      {posts.map((post) => (
        <PostItem key={post.id} createdAt={post.createdAt} title={post.title} slug={post.slug} />
      ))}
    </ul>
  );
}
