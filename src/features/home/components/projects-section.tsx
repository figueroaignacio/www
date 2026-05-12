import { getProjects } from '@/features/projects/api/projects';
import { ProjectCard } from '@/features/projects/components/project-card';
import type { Project } from '@/payload-types';
import { getLocale, getTranslations } from 'next-intl/server';
import { AnimatedProjectList } from './animated-project-list';
import { AnimatedSectionHeader } from './animated-section-header';

export async function ProjectsSection() {
  const t = await getTranslations('sections.projects');
  const locale = await getLocale();
  const projects: Project[] = await getProjects(locale);

  return (
    <section id="projects" className="space-y-6" aria-labelledby="projects-title">
      <AnimatedSectionHeader title={t('title')} description={t('description')} />
      <AnimatedProjectList>
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
      </AnimatedProjectList>
    </section>
  );
}
