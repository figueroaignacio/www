// Hooks
import { useTranslations } from 'next-intl';

// Components
import { Badge } from '@/components/ui/badge';
import { Link } from '@/i18n/navigation';
import { ExternalLinkIcon, InfoCircledIcon } from '@radix-ui/react-icons';

// Types
import type { Project, TechStack } from '@/payload-types';

export function ProjectItem({
  slug,
  subtitle,
  title,
  demo,
  repository,
  technologies,
  description,
}: Partial<Project>) {
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

  const techList =
    technologies?.filter((tech): tech is TechStack => typeof tech === 'object') ?? [];

  return (
    <div className="relative space-y-4 border-border border p-6 rounded-2xl">
      <div className="relative">
        <div className="relative flex h-full flex-col justify-center">
          <h2 className="text-lg font-bold text-foreground">{title}</h2>
          <h3 className="mt-1 text-sm text-muted-foreground">{subtitle}</h3>
        </div>
        <div className="space-y-4 pt-4">
          <div className="space-y-3">
            {description && (
              <p className="text-pretty text-sm leading-relaxed text-foreground/70">
                {description}
              </p>
            )}
          </div>
          {techList.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {techList.map((tech) => (
                <div key={tech.id} className="transition-all duration-300">
                  <Badge label={tech.name} />
                </div>
              ))}
            </div>
          )}
          <div className="flex gap-2 justify-end mt-12">
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
      </div>
    </div>
  );
}
