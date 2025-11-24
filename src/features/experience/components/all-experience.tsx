// Components
import { Error } from '@/components/error';
import { ExperienceItem } from './experience-item';

// Utils
import { getExperience } from '@/features/experience/api/experience';
import { getLocale } from 'next-intl/server';

// Types
import type { Experience } from '@/payload-types';

export async function AllExperience() {
  const locale = await getLocale();
  const experience: Experience[] = await getExperience(locale);

  if (experience.length === 0) {
    return <Error />;
  }

  return (
    <div className="relative">
      <div className="space-y-12">
        {experience.map((item) => (
          <ExperienceItem
            key={item.id}
            title={item.title}
            company={item.company}
            startDate={item.startDate}
            endDate={item.endDate}
            tasks={item.tasks}
            technologies={item.technologies || []}
          />
        ))}
      </div>
    </div>
  );
}
