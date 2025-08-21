// Components
import { BackButton } from '@/components/back-button';
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
    <article className='space-y-4'>
      <BackButton />
      <div className='space-y-4'>
        <h1 className='text-2xl font-semibold'>{post.title}</h1>
        <p className='text-lg text-muted-foreground'>{post.description}</p>
        <div className='w-full h-[1px] bg-border'></div>
      </div>
      <div className='my-4'>
        <PostBodyRenderer body={post.body} />
      </div>
    </article>
  );
}
