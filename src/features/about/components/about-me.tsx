// Hooks
import { useTranslations } from 'next-intl';

// Components
import { CvCta } from '@/features/about/components/cv-cta';
import { DeveloperWatermark } from '@/features/about/components/developer-watermark';
import { AllExperience } from '@/features/experience/components/all-experience';
import { ExperienceItemLoader } from '@/features/experience/components/experience-item-loader';
import { Suspense } from 'react';

export function AboutMe() {
  const t = useTranslations('sections');
  const about: { content: string }[] = t.raw('aboutMe.items');

  return (
    <div className="space-y-8">
      <DeveloperWatermark />
      <div className="space-y-4">
        {about.map((section, index) => {
          return (
            <p className="text-foreground/80 leading-relaxed" key={index}>
              {t.rich(`aboutMe.items.${index}.content`, {
                b: (chunks) => <strong className="font-semibold">{chunks}</strong>,
              })}
            </p>
          );
        })}
      </div>
      <h2>{t('experience.title')}</h2>
      <Suspense fallback={<ExperienceItemLoader />}>
        <AllExperience />
      </Suspense>
      <CvCta />
    </div>
  );
}
