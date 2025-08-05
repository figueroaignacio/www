// Components
import { Link } from '@/i18n/navigation';

// Utils
import { getPosts } from '@/api/get-posts';

export async function AllPosts() {
  const allPosts = await getPosts();

  return (
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
  );
}
