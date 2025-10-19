// Components
import { AnimateIn } from '@/components/animate-in';
import { ExperienceItem } from '@/components/experience-item';

// Utils
import { getExperience } from '@/lib/services';
import { getLocale, getTranslations } from 'next-intl/server';

// Types
import { type Experience } from '@/payload-types';

export async function AllExperience() {
  const locale = await getLocale();
  const t = await getTranslations('sections');
  const experience: Experience[] = await getExperience(locale);

  if (experience.length === 0) {
    return <p className="text-muted-foreground">{t('experience.empty')}</p>;
  }

  return (
    <div className="relative">
      <div className="space-y-12">
        {experience.map((item, index) => {
          const delay = 0.1 + index * 0.15;
          return (
            <AnimateIn key={item.id} variant="fadeLeft" delay={delay}>
              <ExperienceItem
                title={item.title}
                description={item.description}
                company={item.company}
                startDate={item.startDate}
                endDate={item.endDate}
                technologies={item.technologies || []}
              />
            </AnimateIn>
          );
        })}
      </div>
    </div>
  );
}
