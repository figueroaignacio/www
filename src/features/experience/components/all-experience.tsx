// Components
import { Error } from '@/components/error';
import { ExperienceItem } from './experience-item';

// Utils
import { getExperience } from '@/features/experience/api/experience';
import { getLocale } from 'next-intl/server';

// Types
import { type Experience } from '@/payload-types';

export async function AllExperience() {
  const locale = await getLocale();
  let experience: Experience[] = [];

  try {
    experience = await getExperience(locale);
  } catch (error) {
    return <Error />;
  }

  if (experience.length === 0) {
    return <Error />;
  }

  return (
    <div className="relative">
      <div className="space-y-12">
        {experience.map((item, index) => (
          <ExperienceItem
            title={item.title}
            description={item.description}
            company={item.company}
            startDate={item.startDate}
            endDate={item.endDate}
            technologies={item.technologies || []}
          />
        ))}
      </div>
    </div>
  );
}
