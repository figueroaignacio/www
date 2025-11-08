// Hooks
import { useTranslations } from 'next-intl';

// Components
import { AnimateIn } from '@/components/animate-in';

export function AboutMe() {
  const t = useTranslations('sections.me');
  const about: { content: string }[] = t.raw('items');
  const githubUsername = 'figueroaignacio';
  const avatarUrl = `https://github.com/${githubUsername}.png`;

  return (
    <div className="space-y-8 mt-12">
      <AnimateIn variant="scale" delay={0}>
        <div className="flex items-center gap-4">
          <img
            src={avatarUrl}
            alt="Ignacio Figueroa"
            className="w-14 h-14 rounded-full ring-1 ring-border"
            loading="eager"
          />
          <div>
            <h2 className="text-base font-semibold">Ignacio Figueroa</h2>
            <p className="text-xs text-muted-foreground">{t('headline')}</p>
          </div>
        </div>
      </AnimateIn>
      <div className="space-y-4">
        {about.map((section, index) => {
          const delay = 0.1 + index * 0.08;
          return (
            <AnimateIn key={index} variant="scale" delay={delay}>
              <p className="text-sm text-foreground/80 leading-relaxed">{section.content}</p>
            </AnimateIn>
          );
        })}
      </div>
    </div>
  );
}
