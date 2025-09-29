// Components
import { ProjectCard } from '@/components/project-card';

// Utils
import { getFeaturedProjects } from '@/lib/services';
import { getLocale, getTranslations } from 'next-intl/server';

// Types
import { type Project } from '@/payload-types';

export async function FeaturesProjects() {
  const locale = await getLocale();
  const featuredProjects: Project[] = await getFeaturedProjects(locale);
  const t = await getTranslations('sections');

  return (
    <section>
      <h2 className="text-lg font-bold mb-3">{t('featuredProjects.heading')}</h2>
      <ul className="space-y-5">
        {featuredProjects.map((project) => (
          <li key={project.id}>
            <ProjectCard
              title={project.title}
              subtitle={project.subtitle}
              description={project.description}
              demo={project.demo}
              repository={project.repository}
              technologies={project.technologies}
              featured={project.featured}
              slug={project.slug}
            />
          </li>
        ))}
      </ul>
    </section>
  );
}
