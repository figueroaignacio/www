import { getPersonalProjects } from '@/features/projects/api/projects';
import type { Project } from '@/payload-types';
import { getLocale, getTranslations } from 'next-intl/server';
import { ProjectCard } from './project-card';

export async function PersonalProjects() {
  const locale = await getLocale();
  const projects: Project[] = await getPersonalProjects(locale);
  const t = await getTranslations('sections.projects');

  return (
    <section>
      <h2 className="mb-6 text-xl font-bold">{t('personalProjects')}</h2>
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
              videoUrl={project.videoUrl}
              description={project.description}
            />
          </li>
        ))}
      </ul>
    </section>
  );
}
