'use client';

// Hooks
import { signIn, useSession } from '@/lib/auth-client';
import { useLocale } from 'next-intl';
import { useEffect, useState } from 'react';

// Components
import { CommentsSection } from './comments-section';

interface CommentsWithAuthProps {
  postId: number;
  slug: string;
}

export default function CommentsWithAuth({ postId, slug }: CommentsWithAuthProps) {
  const { data: sessionData, isPending } = useSession();
  const locale = useLocale();

  const [isInitialLoading, setIsInitialLoading] = useState(true);

  useEffect(() => {
    if (!isPending) {
      setIsInitialLoading(false);
    }
  }, [isPending]);

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
    <div className="my-20 mx-auto max-w-xl">
      <CommentsSection postId={postId} session={session} onLogin={handleLogin} />
    </div>
  );
}
