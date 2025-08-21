// Components
import { LocaleSwitcher } from '@/components/locale-switcher';
import { ToggleTheme } from '@/components/toggle-theme';
import { SocialMedias } from './social-medias';

interface HeroProps {
  title: string;
  description: string;
}

export function Hero({ description, title }: HeroProps) {
  return (
    <section className="space-y-4">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">{title}</h1>
        <div className="flex items-center px-1">
          <ToggleTheme />
          <LocaleSwitcher />
        </div>
      </div>
      <p className="text-sm text-muted-foreground sm:text-base">{description}</p>
      <div className="flex items-center gap-x-4">
        <SocialMedias />
      </div>
    </section>
  );
}
