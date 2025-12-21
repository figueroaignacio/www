'use client';

// Hooks
import { useLocale, useTranslations } from 'next-intl';
import { useComments } from '../hooks/use-comments';

// Components
import { CommentForm } from './comment-form';
import { CommentsHeader } from './comments-header';
import { CommentsList } from './comments-list';
import { LoadingOverlay } from './loading-overlay';
import { LoginModal } from './login-modal';

// Types
import type { CommentsSectionProps } from '../types';

export function CommentsSection({ postId, session, onLogin }: CommentsSectionProps) {
  const t = useTranslations('components.comments');
  const locale = useLocale();

  const {
    comments,
    newComment,
    setNewComment,
    isLoading,
    isSubmitting,
    showLoginModal,
    setShowLoginModal,
    isLoggingOut,
    isRedirecting,
    handleLogout,
    handleSocialLogin,
    handleSubmit,
    handleDelete,
  } = useComments({ postId, session, onLogin, t });

  return (
    <div className="relative">
      <LoadingOverlay isVisible={isRedirecting} />
      <div className="my-20 mx-auto max-w-xl">
        <CommentsHeader
          session={session}
          commentsCount={comments.length}
          isLoggingOut={isLoggingOut}
          onLogout={handleLogout}
          t={t}
        />
        <CommentForm
          session={session}
          newComment={newComment}
          isSubmitting={isSubmitting}
          onCommentChange={setNewComment}
          onSubmit={handleSubmit}
          onLoginClick={() => setShowLoginModal(true)}
          t={t}
        />
        <CommentsList
          comments={comments}
          isLoading={isLoading}
          locale={locale}
          t={t}
          currentUserId={session?.user.id}
          onDeleteComment={handleDelete}
        />
        <LoginModal
          isOpen={showLoginModal}
          isRedirecting={isRedirecting}
          onOpenChange={setShowLoginModal}
          onLogin={handleSocialLogin}
          t={t}
        />
      </div>
    </div>
  );
}
