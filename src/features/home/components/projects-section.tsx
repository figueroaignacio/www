import { getProjects } from '@/features/projects/api/projects';
import { ProjectCard } from '@/features/projects/components/project-card';
import type { Project } from '@/payload-types';
import { getLocale, getTranslations } from 'next-intl/server';

export async function ProjectsSection() {
  const t = await getTranslations('sections.projects');
  const locale = await getLocale();
  const projects: Project[] = await getProjects(locale);

  return (
    <section className="space-y-6" aria-labelledby="projects-title">
      <div>
        <h2 id="projects-title" className="text-lg font-medium">{t('title')}</h2>
        <p className="text-sm text-muted-foreground mt-1">{t('description')}</p>
      </div>
      <div className="grid gap-4">
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
          />
        ))}
      </div>
    </section>
  );
}
