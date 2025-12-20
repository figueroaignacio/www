'use client';

import { signIn, useSession } from '@/lib/auth-client';
import { useLocale } from 'next-intl';
import { CommentsSection } from './comments-section';

interface CommentsWithAuthProps {
  postId: number;
  slug: string;
}

export default function CommentsWithAuth({ postId, slug }: CommentsWithAuthProps) {
  const { data: sessionData, isPending } = useSession();
  const locale = useLocale();

  const handleLogin = async () => {
    await signIn.social({
      provider: 'github',
      callbackURL: `/${locale}/blog/${slug}`,
    });
  };

  if (isPending) return <div className="animate-pulse h-20 bg-neutral-800 rounded-lg" />;

  const session = sessionData
    ? {
        user: {
          id: sessionData.user.id,
          name: sessionData.user.name,
          email: sessionData.user.email,
          image: sessionData.user.image,
        },
      }
    : null;

  return <CommentsSection postId={postId} session={session} onLogin={handleLogin} />;
}
