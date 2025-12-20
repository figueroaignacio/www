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
    <div className="group flex gap-4 transition-all animate-in fade-in slide-in-from-bottom-2 duration-300">
      <div className="relative shrink-0">
        <img
          src={comment.user.image || `https://ui-avatars.com/api/?name=${comment.user.name}`}
          className="w-10 h-10 rounded-full ring-2 ring-background border border-border bg-card object-cover"
          alt={comment.user.name}
        />
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-baseline justify-between mb-1 gap-2">
          <span className="font-bold text-sm text-foreground truncate">{comment.user.name}</span>
          <span className="text-[10px] uppercase tracking-widest text-muted-foreground font-medium whitespace-nowrap">
            {formatDate(comment.created_at)}
          </span>
        </div>
        <p className="text-sm leading-relaxed text-foreground/90 whitespace-pre-wrap wrap-break-word">
          {comment.content}
        </p>
      </div>
    </div>
  );
}
