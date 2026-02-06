'use client';

import { Loader2, Trash2 } from 'lucide-react';
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
  currentUserId?: string;
  onDelete: (id: number) => void;
  isDeleting: boolean;
}

export function CommentItem({
  comment,
  locale,
  onDelete,
  currentUserId,
  isDeleting,
}: CommentItemProps) {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString(locale, {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
    });
  };

  const isOwner = currentUserId === comment.user.id;

  return (
    <motion.div
      layout
      initial={{ opacity: 0, x: -20, scale: 0.95 }}
      animate={{ opacity: 1, x: 0, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      className={`flex gap-4 ${isDeleting ? 'opacity-50' : ''}`}
    >
      <div className="relative shrink-0">
        <img
          src={comment.user.image || `https://ui-avatars.com/api/?name=${comment.user.name}`}
          className="w-10 h-10 rounded-full border border-border object-cover bg-muted"
          alt={comment.user.name}
        />
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-px h-full bg-border/50 group-last:hidden" />
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-baseline justify-between mb-1.5 gap-2">
          <div className="flex items-center gap-2">
            <span className="font-bold text-sm text-foreground truncate">{comment.user.name}</span>
            {isOwner && (
              <span className="text-[9px] bg-primary/10 text-primary px-1.5 py-0.5 rounded-full font-bold uppercase tracking-tighter">
                Tú
              </span>
            )}
          </div>
          <div className="flex items-center gap-3">
            <span className="text-[10px] uppercase tracking-widest text-muted-foreground font-medium whitespace-nowrap">
              {formatDate(comment.created_at)}
            </span>
            {isOwner && (
              <button
                onClick={() => onDelete(comment.id)}
                disabled={isDeleting}
                className={`transition-all p-1 text-muted-foreground hover:text-destructive ${isDeleting ? 'opacity-100' : ''}`}
              >
                {isDeleting ? (
                  <Loader2 className="w-3.5 h-3.5 animate-spin" />
                ) : (
                  <Trash2 className="w-3.5 h-3.5" />
                )}
              </button>
            )}
          </div>
        </div>
        <div className="relative bg-card hover:bg-card/50 transition-colors p-4 rounded-2xl rounded-tl-none border border-border/50">
          <p className="text-sm leading-relaxed text-foreground/90 whitespace-pre-wrap wrap-break-word">
            {comment.content}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
