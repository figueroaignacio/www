// Components
import { AnimateIn } from '@/components/animate-in';
import { ProjectItem } from '@/components/project-item';

// Utils
import { getProjects } from '@/lib/services';
import { getLocale } from 'next-intl/server';

// Types
import { type Project } from '@/payload-types';

export async function AllProjects() {
  const locale = await getLocale();
  const projects: Project[] = await getProjects(locale);

  return (
    <ul className="space-y-5">
      {projects.map((project, index) => {
        const delay = 0.1 + index * 0.1;
        return (
          <AnimateIn key={project.slug} variant="fadeUp" delay={delay}>
            <li>
              <ProjectItem
                title={project.title}
                subtitle={project.subtitle}
                repository={project.repository}
                technologies={project.technologies}
                slug={project.slug}
              />
            </li>
          </AnimateIn>
        );
      })}
    </ul>
  );
}
