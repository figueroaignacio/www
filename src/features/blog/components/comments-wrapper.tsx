import { auth } from '@/lib/auth';
import { authClient } from '@/lib/auth-client';
import { headers } from 'next/headers';
import { CommentsSection } from './comments-section';

interface CommentsWrapperProps {
  postId: number;
}

export async function CommentsWrapper({ postId }: CommentsWrapperProps) {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  const handleLogin = async () => {
    'use server';
    await authClient.signIn.social({
      provider: 'github',
      callbackURL: `/blog/${postId}`,
    });
  };

  return <CommentsSection postId={postId} session={session} onLogin={handleLogin} />;
}
