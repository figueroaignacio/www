// Hooks
import { useTranslations } from 'next-intl';

// Components
import { Link } from '@/i18n/navigation';
import { ExternalLinkIcon, InfoCircledIcon } from '@radix-ui/react-icons';
import { Badge } from './ui/badge';

// Types
import type { Media, Project } from '@/payload-types';

interface ProjectCardProps extends Omit<Partial<Project>, 'projectImage'> {
  projectImage?: Media;
}

export function ProjectItem({
  slug,
  subtitle,
  title,
  demo,
  repository,
  technologies,
  projectImage,
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
      {projectImage ? (
        <div className="relative overflow-hidden rounded-xl border border-border bg-muted">
          <img
            src={projectImage.url ?? ''}
            alt={title}
            className="h-[260px] object-cover w-full transition-transform hover:scale-105"
          />
        </div>
      ) : null}

      <div className="flex justify-between">
        <Link href={`/project/${slug}`}>
          <h3 className="text-sm underline">{title}</h3>
        </Link>
        <div className="flex gap-2">
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
      </div>
      <h4 className="text-sm text-muted-foreground">{subtitle}</h4>
      <div className="flex gap-1 flex-wrap">
        {technologies?.map((tech) => (
          <Badge key={tech.id} label={tech.name || ''} />
        ))}
      </div>
    </div>
  );
}
