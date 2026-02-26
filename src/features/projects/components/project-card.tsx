'use client';

import { Badge } from '@/components/ui/badge';
import { Link } from '@/i18n/navigation';
import type { Project, TechStack } from '@/payload-types';
import { ExternalLinkIcon, InfoCircledIcon } from '@radix-ui/react-icons';
import { useTranslations } from 'next-intl';

import dynamic from 'next/dynamic';

const ProjectVideo = dynamic(() => import('./project-video').then((mod) => mod.ProjectVideo), {
  ssr: false,
});

export function ProjectCard({
  slug,
  subtitle,
  title,
  demo,
  repository,
  technologies,
  videoUrl,
  description,
}: Partial<Project>) {
  const t = useTranslations('components.projectItem.actions');

  const links = [
    repository && { href: repository, label: 'GitHub', icon: <ExternalLinkIcon />, type: 'repo' },
    demo && { href: demo, label: 'Demo', icon: <ExternalLinkIcon />, type: 'demo' },
    slug && {
      href: `/projects/${slug}`,
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
    <div className="relative space-y-4 border-border border p-6 rounded-xl bg-card">
      <ProjectVideo
        videoUrl={videoUrl}
        className="my-0 mb-6"
        autoPlay
        muted
        loop
        controls={false}
      />
      <div className="relative">
        <div className="relative flex h-full flex-col justify-center">
          <h2 className="text-lg font-bold text-foreground">{title}</h2>
          <h3 className="mt-1">{subtitle}</h3>
        </div>
        <div className="space-y-4 pt-4">
          <div className="space-y-3">
            {description && (
              <p className="text-pretty leading-relaxed text-foreground/70 line-clamp-3">
                {description}
              </p>
            )}
          </div>
          {techList.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {techList.map((tech) => (
                <div key={tech.id} className="transition-all duration-300">
                  <Badge variant="secondary">{tech.name}</Badge>
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
                  className="flex items-center gap-1 text-muted-foreground hover:underline"
                >
                  {link.label} {link.icon}
                </Link>
              ) : (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-muted-foreground hover:underline"
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
