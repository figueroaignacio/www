'use client';

import { AnimatePresence, motion } from 'motion/react';
import { CommentItem } from './comment-item';

interface User {
  id: string;
  name: string;
  email: string;
  image?: string | null;
}

interface Comment {
  id: number;
  content: string;
  created_at: string;
  user: User;
}

interface CommentsListProps {
  comments: Comment[];
  isLoading: boolean;
  locale: string;
  t: (key: string) => string;
}

export function CommentsList({ comments, isLoading, locale, t }: CommentsListProps) {
  if (isLoading) {
    return (
      <div className="space-y-4">
        {[1, 2].map((n) => (
          <div key={n} className="flex gap-4 animate-pulse">
            <div className="w-10 h-10 rounded-full bg-muted" />
            <div className="flex-1 space-y-2 mt-1">
              <div className="h-3 w-24 bg-muted rounded" />
              <div className="h-10 bg-muted/50 rounded-xl" />
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (comments.length === 0) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center py-12 px-6 rounded-3xl border border-dashed border-border bg-muted/10"
      >
        <p className="text-muted-foreground text-sm italic">{t('status.empty')}</p>
      </motion.div>
    );
  }

  return (
    <div className="space-y-8">
      <AnimatePresence initial={false} mode="popLayout">
        {comments.map((comment) => (
          <CommentItem key={comment.id} comment={comment} locale={locale} />
        ))}
      </AnimatePresence>
    </div>
  );
}
