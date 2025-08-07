// Components
import { EducationCard } from '@/components/education-card';
// Utils

import { getEducation } from '@/api/get-education';
import { getLocale, getTranslations } from 'next-intl/server';

// Definitions
import { type Education } from '@/lib/definitions';

export async function Education() {
  const locale = await getLocale();
  const t = await getTranslations('sections');
  const allEducations: Education[] = await getEducation();
  const educations = allEducations.filter((item) => item.locale === locale);

  if (educations.length === 0) {
    return <p className="text-muted-foreground">{t('education.empty')}</p>;
  }

  return (
    <div className="mt-16">
      <h2 className="mb-8 font-semibold text-foreground underline decoration-2 underline-offset-4 decoration-primary">
        {t('education.title')}
      </h2>
      <div className="relative">
        <div className="absolute left-2 top-0 bottom-0 w-px bg-border"></div>
        <div className="space-y-12">
          {educations.map((item, index) => (
            <EducationCard
              key={item.id}
              title={item.title}
              institution={item.institution}
              startDate={item.startDate}
              description={item.description}
              isCurrent={item.isCurrent}
              endDate={item.endDate || ''}
              isLast={index === educations.length - 1}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
