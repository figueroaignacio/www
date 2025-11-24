// Hooks
import { useTranslations } from 'next-intl';

// Components
import { CvCta } from '@/features/about/components/cv-cta';
import { DeveloperWatermark } from '@/features/about/components/developer-watermark';

export function AboutMe() {
  const t = useTranslations('sections.aboutMe');
  const about: { content: string }[] = t.raw('items');

  return (
    <div className="space-y-8">
      <DeveloperWatermark />
      <div className="space-y-4">
        {about.map((section, index) => {
          return (
            <p className="text-sm text-foreground/80 leading-relaxed">
              {t.rich(`items.${index}.content`, {
                b: (chunks) => <strong className="font-semibold">{chunks}</strong>,
              })}
            </p>
          );
        })}
      </div>
      <CvCta />
    </div>
  );
}
