// Components
import { Error } from '@/components/error';
import { ProjectItem } from '@/features/projects/components/project-item';

// Utils
import { getFeaturedProjects } from '@/features/projects/api/projects';
import { getLocale, getTranslations } from 'next-intl/server';

// Types
import type { Project } from '@/payload-types';

export async function FeaturedProjects() {
  const t = await getTranslations('sections.projects');
  const locale = await getLocale();
  const projects: Project[] = await getFeaturedProjects(locale);

  if (projects.length === 0) {
    return <Error />;
  }

  return (
    <>
      <h2 className="text-sm font-bold">{t('featuredProjects')}</h2>
      <ul className="space-y-12">
        {projects.map((project) => (
          <li key={project.id}>
            <ProjectItem
              title={project.title}
              subtitle={project.subtitle}
              repository={project.repository}
              technologies={project.technologies}
              slug={project.slug}
              demo={project.demo}
              description={project.description}
            />
          </li>
        ))}
      </ul>
    </>
  );
}
