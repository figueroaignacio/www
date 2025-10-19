// Components
import { BackButton } from '@/components/back-button';
import { PostHeader } from '@/components/post-header';
import { RichText } from '@payloadcms/richtext-lexical/react';

// Utils
import { getPostBySlug } from '@/lib/services';

// Types
import { type Post } from '@/payload-types';

interface PostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function PostPage({ params }: PostPageProps) {
  const { slug } = await params;
  const post: Post = await getPostBySlug(slug);

  if (!post) {
    return <p className="text-red-600/30">Error</p>;
  }

  return (
    <article className="space-y-3">
      <BackButton />
      <PostHeader description={post.description} title={post.title} />
      <RichText data={post.body} className="prose" />
    </article>
  );
}
