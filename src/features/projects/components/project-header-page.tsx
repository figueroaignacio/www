import { BackButton } from '@/components/back-button';
import { GitHubIcon } from '@/components/tech-icons';
import { Button } from '@/components/ui/button';
import type { Project } from '@/payload-types';
import { ExternalLink } from 'lucide-react';

export function ProjectHeaderPage({ title, description, demo, repository }: Partial<Project>) {
  return (
    <header className="space-y-6">
      <div className="flex justify-between items-center mb-5">
        <BackButton />
      </div>
      <div className="space-y-6">
        <h1 className="text-3xl font-semibold">{title}</h1>
        {description && <p className="text-muted-foreground">{description}</p>}
      </div>
      <div className="mb-5 gap-x-2 flex items-center">
        {demo && (
          <a href={demo} target="_blank" rel="noopener noreferrer">
            <Button
              variant="outline"
              size="sm"
              className="gap-x-3 items-center"
              leftIcon={<ExternalLink className="size-4" />}
            >
              Demo
            </Button>
          </a>
        )}
        {repository && (
          <a href={repository} target="_blank" rel="noopener noreferrer">
            <Button
              variant="ghost"
              size="sm"
              className="gap-x-3 items-center"
              leftIcon={<GitHubIcon />}
            >
              Source Code
            </Button>
          </a>
        )}
      </div>
    </header>
  );
}
