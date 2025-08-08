// Components
import { ExperienceCard } from '@/components/experience-card';
import { Timeline } from '@/components/timeline';

// Utils
import { getExperiences } from '@/api/get-experience';
import { Experience } from '@/lib/definitions';
import { getLocale, getTranslations } from 'next-intl/server';

export async function Experiences() {
  const locale = await getLocale();
  const t = await getTranslations('sections');
  const allExperiences: Experience[] = await getExperiences();
  const experiences = allExperiences.filter((item) => item.locale === locale);

  if (experiences.length === 0) {
    return <p className="text-muted-foreground">{t('experience.empty')}</p>;
  }

  return (
    <div className="rounded-lg">
      <h2 className="mb-8 font-semibold text-foreground underline decoration-2 underline-offset-4 decoration-primary">
        {t('experience.title')}
      </h2>
      <div className="relative">
        <div className="absolute left-2 top-0 bottom-0 w-px bg-border"></div>
        <div className="space-y-12">
          <Timeline>
            {experiences.map((item, index) => (
              <ExperienceCard
                key={item.id}
                title={item.title}
                contractType={item.contractType}
                description={item.description}
                company={item.company}
                startDate={item.startDate}
                endDate={item.endDate}
                technologies={item.technologies}
                isLast={index === experiences.length - 1}
              />
            ))}
          </Timeline>
        </div>
      </div>
    </div>
  );
}
