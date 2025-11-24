// Hooks
import { useTranslations } from 'next-intl';

// Components
import Image from 'next/image';

export function DeveloperWatermark() {
  const t = useTranslations('sections.aboutMe');
  const githubUsername = 'figueroaignacio';
  const avatarUrl = `https://github.com/${githubUsername}.png`;

  return (
    <div className="flex items-center gap-x-5  w-full">
      <Image
        src={avatarUrl}
        alt="Ignacio Figueroa"
        className="w-14 h-14 rounded-full ring-1 ring-border"
        loading="eager"
        width={54}
        height={54}
      />
      <div className="flex gap-x-3 flex-col">
        <span className="text-foreground text-sm font-semibold">Ignacio Figueroa</span>
        <span className="text-muted-foreground text-xs">{t('headline')}</span>
      </div>
    </div>
  );
}
