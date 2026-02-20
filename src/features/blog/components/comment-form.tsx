import { Spinner } from '@/components/ui/spinner';
import { Send, UserCircle2 } from 'lucide-react';

interface User {
  id: string;
  name: string;
  email: string;
  image?: string | null;
}

interface CommentFormProps {
  session: { user: User } | null;
  newComment: string;
  isSubmitting: boolean;
  onCommentChange: (value: string) => void;
  onSubmit: (e: React.FormEvent) => void;
  onLoginClick: () => void;
  t: (key: string, params?: any) => string;
}

export function CommentForm({
  session,
  newComment,
  isSubmitting,
  onCommentChange,
  onSubmit,
  onLoginClick,
  t,
}: CommentFormProps) {
  return (
    <div className="group relative mb-12 rounded-xl bg-card border border-border p-1 focus-within:ring-2 focus-within:ring-primary/20 transition-all ">
      <textarea
        value={newComment}
        onChange={(e) => onCommentChange(e.target.value)}
        onClick={() => !session && onLoginClick()}
        placeholder={session ? t('placeholder.authenticated') : t('placeholder.unauthenticated')}
        readOnly={!session}
        className="w-full min-h-[120px] p-4 bg-transparent border-none resize-none focus:outline-none text-foreground placeholder:text-muted-foreground text-sm leading-relaxed"
      />
      <div className="flex items-center justify-between p-2 bg-muted/30 rounded-xl border-t border-border/50">
        <div className="flex items-center gap-2 pl-2">
          {session ? (
            <div className="flex items-center gap-2">
              <img
                src={session.user.image || `https://ui-avatars.com/api/?name=${session.user.name}`}
                className="w-6 h-6 rounded-full border border-border"
                alt="avatar"
              />
              <span className="text-xs font-medium text-muted-foreground truncate max-w-[150px]">
                {t('status.postingAs', { name: session.user.name })}
              </span>
            </div>
          ) : (
            <UserCircle2 className="w-5 h-5 text-muted-foreground" />
          )}
        </div>
        <button
          onClick={onSubmit}
          disabled={!session || isSubmitting || newComment.trim().length < 3}
          className="flex items-center gap-2 p-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 disabled:bg-muted disabled:text-muted-foreground disabled:cursor-not-allowed"
        >
          {isSubmitting ? (
            <Spinner />
          ) : (
            <>
              <span className="text-xs">{t('button.submit')}</span>
              <Send className="w-3.5 h-3.5" />
            </>
          )}
        </button>
      </div>
    </div>
  );
}
