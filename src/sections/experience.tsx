// Components
import { ExperienceItem } from '@/components/experience-item';
import { Timeline } from '@/components/ui/timeline';

// Utils
import { getExperience } from '@/lib/services';
import { getLocale, getTranslations } from 'next-intl/server';

// Types
import { type Experience } from '@/payload-types';

export async function Experience() {
  const locale = await getLocale();
  const experience: Experience[] = await getExperience(locale);
  const t = await getTranslations('sections');

  return (
    <section className="scape-y-3">
      <h2 className="text-lg font-bold mb-3">{t('experience.heading')}</h2>
      <Timeline>
        {experience.map((item) => (
          <ExperienceItem
            key={item.id}
            title={item.title}
            description={item.description}
            company={item.company}
            startDate={item.startDate}
            endDate={item.endDate || ''}
          />
        ))}
      </Timeline>
    </section>
  );
}
