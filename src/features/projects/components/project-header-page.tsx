import { BackButton } from '@/components/back-button';
import { GitHubIcon } from '@/components/tech-icons/github-icon';
import { Button } from '@/components/ui/button';
import type { Project } from '@/payload-types';
import { ExternalLink } from 'lucide-react';

export function ProjectHeaderPage({
  title,
  description,
  demo,
  repository,
  icon,
}: Partial<Project>) {
  return (
    <header className="space-y-6">
      <div className="flex justify-between items-center mb-5">
        <BackButton />
      </div>
      <div className="space-y-6">
        {icon && (
          <div
            className="mt-1 size-8 shrink-0 [&>svg]:size-full [&>svg]:text-foreground"
            dangerouslySetInnerHTML={{ __html: icon }}
          />
        )}
        <h1 className="text-3xl font-semibold">{title}</h1>
        {description && <p className="text-muted-foreground">{description}</p>}
      </div>
      <div className="mb-5 gap-x-2 flex items-center">
        {demo && (
          <a href={demo} target="_blank" rel="noopener noreferrer">
            <Button
              variant="link"
              size="sm"
              className="px-0"
              leftIcon={<ExternalLink className="size-4" />}
            >
              Demo
            </Button>
          </a>
        )}
        <span>|</span>
        {repository && (
          <a href={repository} target="_blank" rel="noopener noreferrer">
            <Button variant="link" size="sm" className=" px-0" leftIcon={<GitHubIcon />}>
              Source Code
            </Button>
          </a>
        )}
      </div>
    </header>
  );
}
