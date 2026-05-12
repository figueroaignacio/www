import { getPersonalProjects } from '@/features/projects/api/projects';
import type { Project } from '@/payload-types';
import { getLocale } from 'next-intl/server';
import { ProjectCard } from './project-card';

export async function PersonalProjectsTab() {
  const locale = await getLocale();
  const projects: Project[] = await getPersonalProjects(locale);

  return (
    <section id="projects" className="space-y-6" aria-labelledby="projects-title">
      {projects.map((project) => (
        <ProjectCard
          key={project.id}
          slug={project.slug}
          title={project.title}
          subtitle={project.subtitle}
          technologies={project.technologies}
          repository={project.repository}
          demo={project.demo}
          icon={project.icon}
          labels={project.labels}
        />
      ))}
    </section>
  );
}
