// Hooks
import { useTranslations } from 'next-intl';

export function Footer() {
  const t = useTranslations('components.footer');

  return (
    <footer className="max-w-xl mx-auto p-4 w-full flex justify-between">
      <span className="text-xs text-muted-foreground">ignaciofigueroa.vercel.app</span>
      <span className="text-xs text-muted-foreground">{t('builtIn')}</span>
    </footer>
  );
}
