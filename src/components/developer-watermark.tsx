// Hooks
import { useTranslations } from 'next-intl';

export function DeveloperWatermark() {
  const t = useTranslations('components.footer');

  return (
    <div className="flex items-center gap-3">
      <div className="flex flex-col">
        <span className="text-foreground text-sm font-semibold">Ignacio Figueroa</span>
        <span className="text-muted-foreground text-xs">{t('headline')}</span>
      </div>
    </div>
  );
}
