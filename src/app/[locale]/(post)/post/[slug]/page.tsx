// Components
import { PostBodyRenderer } from '@/components/post-body-renderer';

// Utils
import { getPosts } from '@/api/get-posts';
import { notFound } from 'next/navigation';

interface PostPageProps {
  params: {
    slug: string;
  };
}

export default async function PostPage({ params }: PostPageProps) {
  const allPosts = await getPosts();
  const post = allPosts.find((p) => p.slug === params.slug);

  if (!post) return notFound();

  return (
    <article>
      <h1>{post.title}</h1>
      <p>{post.description}</p>
      <PostBodyRenderer body={post.body} />
    </article>
  );
}
