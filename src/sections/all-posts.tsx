// Components
import { PostCard } from '@/components/post-card';

// Utils
import { getPosts } from '@/api/get-posts';
import { getLocale } from 'next-intl/server';

export async function AllPosts() {
  const allPosts = await getPosts();
  const locale = await getLocale()
  const posts = allPosts.filter((post) => post.locale === locale)

  return (
    <ul className='space-y-6'>
      {posts.map((post) => (
        <li key={post.id} >
          <PostCard description={post.description} slug={post.slug} title={post.title} />
        </li>
      ))}
    </ul>
  );
}
