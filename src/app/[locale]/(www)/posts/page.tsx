import { getPosts } from '@/api/get-posts';
import { Link } from '@/i18n/navigation';

export default async function PostsPage() {
  const allPosts = await getPosts();

  return (
    <section>
      <h2>Blog</h2>
      <ul>
        {allPosts.map((post) => (
          <li key={post.id}>
            <h3>
              <Link href={`/post/${post.slug}`}>{post.title}</Link>
            </h3>
            <p>{post.description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
