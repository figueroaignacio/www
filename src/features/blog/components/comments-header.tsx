import { Button } from '@/components/ui/button';
import { LogOut, MessageSquare } from 'lucide-react';

interface User {
  id: string;
  name: string;
  email: string;
  image?: string | null;
}

interface CommentsHeaderProps {
  session: { user: User } | null;
  commentsCount: number;
  isLoggingOut: boolean;
  onLogout: () => void;
  t: (key: string) => string;
}

export function CommentsHeader({
  session,
  commentsCount,
  isLoggingOut,
  onLogout,
  t,
}: CommentsHeaderProps) {
  return (
    <div className="flex items-center justify-between mb-8">
      <div className="flex items-center gap-3">
        <div className="p-2 rounded-xl bg-primary/10 text-primary">
          <MessageSquare className="w-5 h-5" />
        </div>
        <h2 className="text-xl font-bold tracking-tight text-foreground">
          {t('title')}{' '}
          <span className="text-muted-foreground font-normal ml-1">({commentsCount})</span>
        </h2>
      </div>
      {session && (
        <Button
          variant="destructive"
          size="sm"
          onClick={onLogout}
          disabled={isLoggingOut}
          className="space-x-3"
        >
          {isLoggingOut ? (
            <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
          ) : (
            <LogOut className="w-4 h-4" />
          )}
          <span className="hidden sm:inline">{t('logout')}</span>
        </Button>
      )}
    </div>
  );
}
