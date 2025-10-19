// Hooks
import { useTranslations } from 'next-intl';

// Components
import { Contact } from './contact';
import { ThemeToggle } from './theme-toggle';

export function Hero() {
  const t = useTranslations('sections.hero');

  return (
    <div className="space-y-3">
      <div className="flex justify-between items-center">
        <h1 className="text-xl">{t('greeting')}</h1>
        <ThemeToggle />
      </div>
      <p className="text-sm text-muted-foreground">{t('description')}</p>
      <Contact />
    </div>
  );
}
