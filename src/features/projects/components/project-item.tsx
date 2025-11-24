// Hooks
import { useTranslations } from 'next-intl';

// Components
import { Link } from '@/i18n/navigation';
import { ExternalLinkIcon, InfoCircledIcon } from '@radix-ui/react-icons';
import { Badge } from '../../../components/ui/badge';

// Types
import type { Project } from '@/payload-types';

interface ProjectItemProps extends Omit<Partial<Project>, 'projectImage'> {
  index?: number;
}

const cardStyles = [
  {
    header: 'bg-gradient-to-br from-primary/40 via-primary/25 to-accent/35',
  },
  {
    header: 'bg-gradient-to-br from-accent/40 via-accent/25 to-primary/35',
  },
  {
    header: 'bg-gradient-to-br from-primary/35 via-accent/30 to-primary/35',
  },
];

export function ProjectItem({
  slug,
  subtitle,
  title,
  demo,
  repository,
  technologies,
  description,
  index = 0,
}: ProjectItemProps) {
  const t = useTranslations('components.projectItem.actions');

  const links = [
    repository && { href: repository, label: 'GitHub', icon: <ExternalLinkIcon />, type: 'repo' },
    demo && { href: demo, label: 'Demo', icon: <ExternalLinkIcon />, type: 'demo' },
    slug && {
      href: `/project/${slug}`,
      label: t('details'),
      icon: <InfoCircledIcon />,
      internal: true,
      type: 'details',
    },
  ].filter(Boolean) as {
    href: string;
    label: string;
    icon: React.ReactNode;
    internal?: boolean;
    type: string;
  }[];

  return (
    <div className="group relative space-y-4 transition-all duration-300 ease-out">
      <div className="relative">
        <div className="relative flex h-full flex-col justify-center">
          <h2 className={`text-lg font-bold text-foreground`}>{title}</h2>
          <h3 className={`mt-1 text-sm text-muted-foreground`}>{subtitle}</h3>
        </div>

        <div className="space-y-4 pt-4">
          <div className="space-y-3">
            <div className="flex  gap-2">
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
            {description && (
              <p
                className={`text-pretty text-sm leading-relaxed text-foreground/70 transition-colors duration-300`}
              >
                {description}
              </p>
            )}
          </div>
          {technologies && technologies.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {technologies.map((tech, idx) => (
                <div key={tech.id} className={`transition-all duration-300`}>
                  <Badge label={tech.name || ''} />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
