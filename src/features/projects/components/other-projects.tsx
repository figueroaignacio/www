// Components
import { Error } from '@/components/error';
import { ProjectCard } from '@/features/projects/components/project-card';

// Utils
import { getOtherProjects } from '@/features/projects/api/projects';
import { getLocale, getTranslations } from 'next-intl/server';

// Types
import type { Project } from '@/payload-types';

export async function OtherProjects() {
  const t = await getTranslations('sections.projects');
  const locale = await getLocale();
  const projects: Project[] = await getOtherProjects(locale);

  if (projects.length === 0) {
    return <Error />;
  }

  return (
    <>
      <h2>&gt;{t('otherProjects')}</h2>
      <ul className="space-y-3">
        {projects.map((project) => (
          <li key={project.id}>
            <ProjectCard
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
