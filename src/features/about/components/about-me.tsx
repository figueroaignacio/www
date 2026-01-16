// Hooks
import { useTranslations } from 'next-intl';

// Components
import { DeveloperWatermark } from '@/features/about/components/developer-watermark';
import { TechStack } from '@/features/about/components/tech-stack';
import { Interests } from './interests';
import { SocialPostCard } from './social-post-card';

export function AboutMe() {
  const t = useTranslations('sections');
  const about: { content: string }[] = t.raw('aboutMe.items');

  return (
    <div className="space-y-8">
      <DeveloperWatermark />
      <div className="space-y-4">
        {about.map((section, index) => {
          return (
            <SocialPostCard key={index}>
              {t.rich(`aboutMe.items.${index}.content`, {
                b: (chunks) => <strong className="font-semibold">{chunks}</strong>,
              })}
            </SocialPostCard>
          );
        })}
      </div>
      <TechStack />
      <Interests />
    </div>
  );
}
