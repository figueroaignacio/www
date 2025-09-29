// Components
import { ProjectCard } from '@/components/project-card';

// Utils
import { getProjects } from '@/lib/services';
import { getLocale } from 'next-intl/server';

// Types
import { type Project } from '@/payload-types';

export async function AllProjects() {
  const locale = await getLocale();
  const projects: Project[] = await getProjects(locale);

  return (
    <ul className="space-y-5 mt-12">
      {projects.map((post) => (
        <li key={post.slug}>
          <ProjectCard
            title={post.title}
            description={post.description}
            subtitle={post.subtitle}
            repository={post.repository}
            technologies={post.technologies}
            slug={post.slug}
          />
        </li>
      ))}
    </ul>
  );
}
