// Hooks
import { useTranslations } from 'next-intl';

// Components
import { DeveloperWatermark } from './developer-watermark';

export function Footer() {
  const t = useTranslations('components.footer');

  return (
    <footer className="max-w-xl mx-auto p-4 w-full flex flex-col gap-3">
      <DeveloperWatermark />
      <span className="text-xs text-muted-foreground">{t('builtIn')}</span>
    </footer>
  );
}
