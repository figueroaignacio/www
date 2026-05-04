'use client';

import { GitHubIcon } from '@/components/tech-icons';
import { Badge } from '@/components/ui/badge';
import type { Contribution, TechStack } from '@/payload-types';
import { GitFork } from 'lucide-react';
import { useTranslations } from 'next-intl';

type ContributionCardProps = Pick<
  Contribution,
  'title' | 'description' | 'technologies' | 'repository' | 'fork'
>;

export function ContributionCard({
  title,
  description,
  technologies,
  repository,
  fork,
}: ContributionCardProps) {
  const t = useTranslations('sections.contributions');

  const techList =
    technologies?.filter((tech): tech is TechStack => typeof tech === 'object') ?? [];

  const actions = [
    {
      icon: <GitHubIcon />,
      label: t('viewRepo'),
      href: repository,
    },
    {
      icon: <GitFork className="size-3.5" />,
      label: t('viewFork'),
      href: fork,
    },
  ];

  return (
    <article className="group relative flex flex-col gap-3 border border-foreground/10 rounded-xl p-5 bg-card transition-colors duration-200">
      <div className="flex items-start justify-between gap-3">
        <div className="space-y-1 min-w-0">
          <h3 className="font-semibold text-foreground text-sm leading-tight">{title}</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
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
      <div className="flex items-center justify-end pt-0.5 gap-x-2">
        {actions.map((action) => (
          <a
            href={action.href}
            key={action.label}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${action.label} ${title}`}
            className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors"
          >
            {action.icon}
            {action.label}
          </a>
        ))}
      </div>
    </article>
  );
}
