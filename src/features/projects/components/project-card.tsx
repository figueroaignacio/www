'use client';

import { Badge } from '@/components/ui/badge';
import { Link } from '@/i18n/navigation';
import type { Project, TechStack } from '@/payload-types';
import { CodeIcon, ExternalLinkIcon, InfoCircledIcon } from '@radix-ui/react-icons';
import { useTranslations } from 'next-intl';

export function ProjectCard({
  slug,
  subtitle,
  title,
  demo,
  repository,
  technologies,
  icon,
}: Partial<Project> & { icon?: string | null }) {
  const t = useTranslations('components.projectItem.actions');

  const techList =
    technologies?.filter((tech): tech is TechStack => typeof tech === 'object') ?? [];

  return (
    <article
      className="group relative flex flex-col justify-between gap-4 border-border border p-6 rounded-xl bg-card hover:border-foreground/20 transition-colors duration-200"
      aria-labelledby={`project-title-${title}`}
    >
      <div className="space-y-3">
        {icon && (
          <div
            className="mt-1 size-8 shrink-0 [&>svg]:size-full [&>svg]:text-foreground"
            dangerouslySetInnerHTML={{ __html: icon }}
          />
        )}
        <div className="flex items-start gap-3">
          <div>
            <h3 id={`project-title-${title}`} className="font-semibold text-foreground">
              {title}
            </h3>
            {subtitle && <p className="text-sm text-muted-foreground mt-0.5">{subtitle}</p>}
          </div>
        </div>
        {techList.length > 0 && (
          <div className="flex flex-wrap gap-1.5">
            {techList.map((tech) => (
              <Badge key={tech.id} variant="secondary" className="text-[11px]">
                {tech.name}
              </Badge>
            ))}
          </div>
        )}
      </div>
      <div className="flex items-center gap-3 pt-1">
        {repository && (
          <a
            href={repository}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View source code for ${title}`}
            className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors"
          >
            <CodeIcon className="size-3.5" />
            {t('source')}
          </a>
        )}
        {demo && (
          <a
            href={demo}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View live demo for ${title}`}
            className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors"
          >
            <ExternalLinkIcon className="size-3.5" />
            {t('preview')}
          </a>
        )}
        {slug && (
          <Link
            href={`/projects/${slug}`}
            aria-label={`View details for ${title}`}
            className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors ml-auto"
          >
            <InfoCircledIcon className="size-3.5" />
            {t('details')}
          </Link>
        )}
      </div>
    </article>
  );
}
