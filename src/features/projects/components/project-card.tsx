'use client';

import { GitHubIcon } from '@/components/tech-icons';
import { Badge } from '@/components/ui/badge';
import type { Icon } from '@/lib/constants';
import type { Project, TechStack } from '@/payload-types';
import { Globe02Icon, InformationCircleIcon } from '@hugeicons/core-free-icons';
import { HugeiconsIcon, type IconSvgElement } from '@hugeicons/react';
import { useTranslations } from 'next-intl';

export function ProjectCard({
  slug,
  subtitle,
  title,
  demo,
  repository,
  technologies,
  icon,
}: Partial<Project> & { icon?: Icon }) {
  const t = useTranslations('components.projectItem.actions');

  const techList =
    technologies?.filter((tech): tech is TechStack => typeof tech === 'object') ?? [];

  const actions = [
    {
      label: t('source'),
      href: repository,
      icon: GitHubIcon,
    },
    {
      label: t('preview'),
      href: demo,
      icon: Globe02Icon,
    },
    {
      label: t('details'),
      href: `/projects/${slug}`,
      icon: InformationCircleIcon,
    },
  ];

  return (
    <article
      className="group relative flex flex-col justify-between gap-4 border p-6 rounded-xl bg-card border-foreground/10 transition-colors duration-200"
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
      <div className="flex items-center gap-3 pt-1  justify-end">
        {actions.map((action) => {
          const IconComp =
            typeof action.icon === 'function' ? (action.icon as React.ElementType) : null;
          return (
            <a
              key={action.label}
              href={action.href || ''}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={action.label}
              className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors hover:underline"
            >
              {IconComp ? (
                <IconComp className="size-3.5" />
              ) : (
                <HugeiconsIcon icon={action.icon as IconSvgElement} className="size-3.5" />
              )}
              {action.label}
            </a>
          );
        })}
      </div>
    </article>
  );
}
