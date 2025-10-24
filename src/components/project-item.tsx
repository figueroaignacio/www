'use client';

// Hooks
import { useTranslations } from 'next-intl';

// Components
import { Link } from '@/i18n/navigation';
import { ExternalLinkIcon, InfoCircledIcon } from '@radix-ui/react-icons';
import { Badge } from './ui/badge';

// Utils
import { getGradientForSlug } from '@/lib/utils';

// Types
import type { Project } from '@/payload-types';

interface ProjectCardProps extends Omit<Partial<Project>, 'projectImage'> {}

export function ProjectItem({
  slug,
  subtitle,
  title,
  demo,
  repository,
  technologies,
  description,
}: ProjectCardProps) {
  const t = useTranslations('components.projectItem.actions');

  const links = [
    repository && { href: repository, label: 'GitHub', icon: <ExternalLinkIcon /> },
    demo && { href: demo, label: 'Demo', icon: <ExternalLinkIcon /> },
    slug && {
      href: `/project/${slug}`,
      label: t('details'),
      icon: <InfoCircledIcon />,
      internal: true,
    },
  ].filter(Boolean) as {
    href: string;
    label: string;
    icon: React.ReactNode;
    internal?: boolean;
  }[];

  return (
    <div className="space-y-3">
      <div className={`aspect-[4/1] ${getGradientForSlug(slug)} rounded-xl p-4`}>
        <h2 className="text-xl text-white font-semibold drop-shadow-md">{title}</h2>
        <h3 className="text-white/90 drop-shadow-sm">{subtitle}</h3>
      </div>
      <div className="flex gap-2 justify-between flex-wrap px-3">
        <div className="flex gap-x-2">
          {links.map((link) =>
            link.internal ? (
              <Link
                key={link.href}
                href={link.href}
                className="flex items-center gap-1 text-xs text-muted-foreground hover:underline"
              >
                {link.label} {link.icon}
              </Link>
            ) : (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-xs text-muted-foreground hover:underline"
              >
                {link.label} {link.icon}
              </a>
            ),
          )}
        </div>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
      <div className="flex gap-1 flex-wrap px-3">
        {technologies?.map((tech) => (
          <Badge key={tech.id} label={tech.name || ''} />
        ))}
      </div>
    </div>
  );
}
