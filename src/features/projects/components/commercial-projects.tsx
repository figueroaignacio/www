import { getCommercialProjects } from '@/features/projects/api/projects';
import type { Project } from '@/payload-types';
import { getLocale, getTranslations } from 'next-intl/server';
import { ProjectCard } from './project-card';

export async function CommercialProjects() {
  const locale = await getLocale();
  const projects: Project[] = await getCommercialProjects(locale);
  const t = await getTranslations('sections.projects');

  return (
    <section>
      <h2 className="mb-6 text-xl font-bold">{t('commercialProjects')}</h2>
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
    </section>
  );
}
