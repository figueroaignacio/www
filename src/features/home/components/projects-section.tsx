import { CommercialProjectsTab } from '@/features/projects/components/commercial-projects';
import { PersonalProjectsTab } from '@/features/projects/components/personal-projects';
import { ProjectsTabs } from '@/features/projects/components/projects-tabs';
import { getTranslations } from 'next-intl/server';
import { AnimatedProjectList } from './animated-project-list';
import { AnimatedSectionHeader } from './animated-section-header';

export async function ProjectsSection() {
  const t = await getTranslations('sections.projects');
  return (
    <section id="projects" className="space-y-6">
      <AnimatedSectionHeader title={t('title')} description={t('description')} />
      <AnimatedProjectList>
        <ProjectsTabs work={<CommercialProjectsTab />} personal={<PersonalProjectsTab />} />
      </AnimatedProjectList>
    </section>
  );
}
