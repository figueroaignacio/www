// Components
import { BackButton } from '@/components/back-button';
import { Button } from '@/components/ui/button';
import { GitHubIcon } from '@/features/stack/components/tech-icons';
import { ExternalLink } from 'lucide-react';

// Utils
import { cn } from '@/lib/cn';

interface PostHeaderProps {
  title: string;
  description?: string;
  demo: string;
  repository: string;
}

export function ProjectHeaderPost({ title, description, demo, repository }: PostHeaderProps) {
  return (
    <header className="space-y-6 border-border border-b ret">
      <div className="flex justify-between items-center mb-5">
        <BackButton />
      </div>
      <div className="space-y-6">
        <h1 className={cn('text-xl font-semibold')}>{title}</h1>
        {description && <p className="text-muted-foreground">{description}</p>}
      </div>
      <div className="mb-5 space-x-3">
        {demo && (
          <a href={demo} target="_blank" rel="noopener noreferrer">
            <Button variant="outline" size="sm" className="gap-x-3 items-center">
              Demo
              <ExternalLink className="size-4" />
            </Button>
          </a>
        )}
        {repository && (
          <a href={repository} target="_blank" rel="noopener noreferrer">
            <Button variant="ghost" size="sm" className="gap-x-3 items-center">
              Source Code
              <GitHubIcon />
            </Button>
          </a>
        )}
      </div>
    </header>
  );
}
