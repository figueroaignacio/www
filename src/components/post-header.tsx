// Components
import { Thumbnail } from '@/components/thumbnail';

// Utils
import { cn } from '@/lib/utils';

interface PostHeaderProps {
  title: string;
  description?: string;
  variant?: 'post' | 'project';
}

export function PostHeader({ title, description, variant = 'post' }: PostHeaderProps) {
  return (
    <header className="space-y-3">
      {variant === 'post' && <Thumbnail title={title} />}
      <div className="space-y-1">
        <h1 className={cn('text-lg')}>{title}</h1>
        {description && <p className="max-w-2xl text-muted-foreground">{description}</p>}
      </div>
    </header>
  );
}
