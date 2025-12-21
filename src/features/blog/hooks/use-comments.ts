'use client';

// Hooks
import { useEffect, useState } from 'react';

// Utils
import { authClient } from '@/lib/auth-client';

// Types
import type { PostComment, User } from '../types';

interface UseCommentsProps {
  postId: number;
  session: { user: User } | null;
  onLogin: () => void;
  t: (key: string) => string;
}

export function useComments({ postId, session, onLogin, t }: UseCommentsProps) {
  const [comments, setComments] = useState<PostComment[]>([]);
  const [newComment, setNewComment] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [isLoggingOut, setIsLoggingOut] = useState(false);
  const [isRedirecting, setIsRedirecting] = useState(false);
  const [deletingComment, setDeletingComment] = useState<number | null>(null);
  const [commentToDelete, setCommentToDelete] = useState<number | null>(null);

  useEffect(() => {
    const fetchComments = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(`/api/posts/${postId}/comments`);
        const data = await response.json();
        setComments(data.comments || []);
      } catch (error) {
        console.error('Error fetching comments:', error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchComments();
  }, [postId]);

  const handleLogout = async () => {
    setIsLoggingOut(true);
    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          window.location.reload();
        },
      },
    });
  };

  const handleSocialLogin = async () => {
    setIsRedirecting(true);
    try {
      await onLogin();
    } catch (error) {
      setIsRedirecting(false);
      console.error(error);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!session) return setShowLoginModal(true);
    if (newComment.trim().length < 3) return;

    setIsSubmitting(true);
    try {
      const response = await fetch('/api/comments', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ content: newComment, postId }),
      });

      if (response.ok) {
        const data = await response.json();
        setComments((prev) => [data.comment, ...prev]);
        setNewComment('');
      }
    } catch (error) {
      alert(t('status.error'));
    } finally {
      setIsSubmitting(false);
    }
  };

  const openDeleteModal = (id: number) => {
    setCommentToDelete(id);
  };

  const handleDelete = async () => {
    if (!commentToDelete) return;

    setDeletingComment(commentToDelete);
    try {
      const response = await fetch(`/api/comments/${commentToDelete}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        setComments((prev) => prev.filter((c) => c.id !== commentToDelete));
        setCommentToDelete(null);
      } else {
        alert(t('status.errorDelete'));
      }
    } catch (error) {
      console.error('Error deleting comment:', error);
      alert(t('status.errorDelete'));
    } finally {
      setDeletingComment(null);
    }
  };

  return {
    comments,
    newComment,
    isLoading,
    isSubmitting,
    showLoginModal,
    isLoggingOut,
    isRedirecting,
    commentToDelete,
    deletingComment,
    setNewComment,
    setShowLoginModal,
    setCommentToDelete,
    handleLogout,
    handleSocialLogin,
    handleSubmit,
    handleDelete,
    openDeleteModal,
  };
}
