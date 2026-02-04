import { Error } from '@/components/error';
import { getProjects } from '@/features/projects/api/projects';
import { ProjectCard } from '@/features/projects/components/project-card';
import type { Project } from '@/payload-types';
import { getLocale } from 'next-intl/server';

export async function AllProjects() {
  const locale = await getLocale();
  const projects: Project[] = await getProjects(locale);

  if (projects.length === 0) {
    return <Error />;
  }

  return (
    <section>
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
