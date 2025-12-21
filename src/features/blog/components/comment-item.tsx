'use client';

import { motion } from 'motion/react';

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

interface CommentItemProps {
  comment: Comment;
  locale: string;
}

export function CommentItem({ comment, locale }: CommentItemProps) {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString(locale, {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -20, scale: 0.95 }}
      animate={{ opacity: 1, x: 0, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{
        type: 'spring',
        stiffness: 260,
        damping: 20,
      }}
      layout
      className="group flex gap-4"
    >
      <div className="relative shrink-0">
        <img
          src={comment.user.image || `https://ui-avatars.com/api/?name=${comment.user.name}`}
          className="w-10 h-10 rounded-full border border-border object-cover"
          alt={comment.user.name}
        />
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-px h-full bg-border/50 group-last:hidden" />
      </div>

      <div className="flex-1 min-w-0">
        <div className="flex items-baseline justify-between mb-1.5 gap-2">
          <span className="font-bold text-sm text-foreground truncate">{comment.user.name}</span>
          <span className="text-[10px] uppercase tracking-widest text-muted-foreground font-medium whitespace-nowrap">
            {formatDate(comment.created_at)}
          </span>
        </div>

        <div className="relative bg-muted/30 hover:bg-muted/50 transition-colors p-4 rounded-2xl rounded-tl-none border border-border/50">
          <p className="text-sm leading-relaxed text-foreground/90 whitespace-pre-wrap wrap-break-word">
            {comment.content}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
