// Hooks
import { useTranslations } from 'next-intl';

// Components
import { DeveloperWatermark } from '@/features/about/components/developer-watermark';
import { Interests } from './interests';

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
      <Interests />
    </div>
  );
}
