// Components
import { PostCard } from '@/components/post-card';

// Utils
import { getPosts } from '@/api/get-posts';

export async function AllPosts() {
  const allPosts = await getPosts();

  return (
    <ul >
      {allPosts.map((post) => (
        <li key={post.id} >
          <PostCard description={post.description} slug={post.slug} title={post.title} />
        </li>
      ))}
    </ul>
  );
}
