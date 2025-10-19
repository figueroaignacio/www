'use client';

// Components
import { AnimateIn } from '@/components/animate-in';
import { PostItem } from '@/components/post-item';

// Types
import { type Post } from '@/payload-types';

interface AllPostsListProps {
  posts: Post[];
}

export function AllPostsList({ posts }: AllPostsListProps) {
  return (
    <ul className="space-y-5">
      {posts.map((post, index) => {
        const delay = 0.1 + index * 0.1;
        return (
          <AnimateIn key={post.id} variant="fadeLeft" delay={delay}>
            <PostItem createdAt={post.createdAt} title={post.title} slug={post.slug} />
          </AnimateIn>
        );
      })}
    </ul>
  );
}
