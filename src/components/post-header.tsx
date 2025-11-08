// Components

// Utils
import { cn } from '@/lib/utils';

interface PostHeaderProps {
  title: string;
  description?: string;
}

export function PostHeader({ title, description }: PostHeaderProps) {
  return (
    <header className="space-y-3 border-border border-b pb-3">
      <div className="space-y-1">
        <h1 className={cn('text-lg font-semibold')}>{title}</h1>
        {description && <p className="text-sm text-muted-foreground">{description}</p>}
      </div>
    </header>
  );
}
