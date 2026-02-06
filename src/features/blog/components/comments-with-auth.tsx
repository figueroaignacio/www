'use client';

import { signIn, useSession } from '@/lib/auth-client';
import { useLocale } from 'next-intl';
import { CommentsSection } from './comments-section';

interface CommentsWithAuthProps {
  postId: number;
  slug: string;
}

export function CommentsWithAuth({ postId, slug }: CommentsWithAuthProps) {
  const { data: sessionData } = useSession();
  const locale = useLocale();

  const handleLogin = async () => {
    await signIn.social({
      provider: 'github',
      callbackURL: `/${locale}/blog/${slug}`,
    });
  };

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

  return (
    <div className="my-20">
      <CommentsSection postId={postId} session={session} onLogin={handleLogin} />
    </div>
  );
}
