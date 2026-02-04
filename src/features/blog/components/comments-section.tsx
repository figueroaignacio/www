'use client';

import { useLocale, useTranslations } from 'next-intl';
import { useComments } from '../hooks/use-comments';
import type { CommentsSectionProps } from '../types';
import { CommentForm } from './comment-form';
import { CommentsHeader } from './comments-header';
import { CommentsList } from './comments-list';
import { DeleteConfirmModal } from './delete-confirm-modal';
import { LoadingOverlay } from './loading-overlay';
import { LoginModal } from './login-modal';

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
    openDeleteModal,
    commentToDelete,
    deletingComment,
    setCommentToDelete,
  } = useComments({ postId, session, onLogin, t });

  return (
    <div className="relative">
      <LoadingOverlay isVisible={isRedirecting} />
      <div className="my-20 mx-auto">
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
          onDeleteComment={openDeleteModal}
          deletingId={deletingComment}
        />

        <DeleteConfirmModal
          isOpen={!!commentToDelete}
          onOpenChange={(open) => !open && setCommentToDelete(null)}
          onConfirm={handleDelete}
          isDeleting={!!deletingComment}
          t={t}
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
