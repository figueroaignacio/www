// Hooks
import { useTranslations } from 'next-intl';

// Components
import { AnimateIn } from '@/components/animate-in';
import { CvCta } from '@/components/cv-cta';
import { DeveloperWatermark } from '@/components/developer-watermark';

export function AboutMe() {
  const t = useTranslations('sections.aboutMe');
  const about: { content: string }[] = t.raw('items');

  return (
    <div className="space-y-8 mt-12">
      <AnimateIn variant="scale" delay={0}>
        <DeveloperWatermark />
      </AnimateIn>
      <div className="space-y-4">
        {about.map((section, index) => {
          const delay = 0.1 + index * 0.08;
          return (
            <AnimateIn key={index} variant="scale" delay={delay}>
              <p className="text-sm text-foreground/80 leading-relaxed">
                {t.rich(`items.${index}.content`, {
                  b: (chunks) => <strong className="font-semibold">{chunks}</strong>,
                })}
              </p>
            </AnimateIn>
          );
        })}
      </div>
      <CvCta />
    </div>
  );
}
