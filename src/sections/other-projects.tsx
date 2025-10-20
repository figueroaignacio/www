// Hooks
import { useTranslations } from 'next-intl';

// Components
import { AnimateIn } from '@/components/animate-in';
import { Error } from '@/components/error';
import { ProjectItem } from '@/components/project-item';

// Utils
import { getOtherProjects } from '@/lib/services';
import { getLocale } from 'next-intl/server';

// Types
import { type Project } from '@/payload-types';

export async function OtherProjects() {
  const t = useTranslations('sections.projects');
  const locale = await getLocale();
  let projects: Project[] = [];

  try {
    projects = await getOtherProjects(locale);
  } catch (error) {
    return <Error />;
  }

  if (projects.length === 0) {
    return <Error />;
  }

  return (
    <>
      <AnimateIn variant="fadeLeft">
        <h2 className="text-sm font-bold">{t('otherProjects')}</h2>
      </AnimateIn>
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
    </>
  );
}
