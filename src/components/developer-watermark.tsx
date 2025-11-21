// Hooks
import { useTranslations } from 'next-intl';

// Components
import { ViewCvButton } from './view-cv-button';

export function DeveloperWatermark() {
  const t = useTranslations('sections.me');

  return (
    <div className="flex items-center justify-between flex-wrap w-full">
      <div className="flex flex-col">
        <span className="text-foreground text-sm font-semibold">Ignacio Figueroa</span>
        <span className="text-muted-foreground text-xs">{t('headline')}</span>
      </div>
      <div>
        <ViewCvButton />
      </div>
    </div>
  );
}
