// Hooks
import { useTranslations } from 'next-intl';

// Components
import { Link } from '@/i18n/navigation';
import { ExternalLinkIcon, InfoCircledIcon } from '@radix-ui/react-icons';

// Types
import { type Project } from '@/payload-types';

interface ProjectCardProps extends Partial<Project> {}

export function ProjectItem({
  slug,
  subtitle,
  title,
  demo,
  repository,
  technologies,
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
      <div className="flex gap-1 flex-wrap text-xs text-muted-foreground">
        {technologies?.map((tech, index) => (
          <span key={tech.id}>
            {tech.name}
            {index < technologies.length - 1 && ' / '}
          </span>
        ))}
      </div>
    </div>
  );
}
