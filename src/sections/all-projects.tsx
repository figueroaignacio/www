// Components
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
    <ul className="space-y-5 ">
      {projects.map((post) => (
        <li key={post.slug}>
          <ProjectItem
            title={post.title}
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
