// Hooks
import { useTranslations } from 'next-intl';

// Components
import { Contact } from './contact';
import { LocaleSwitcher } from './locale-switcher';
import { ThemeToggle } from './theme-toggle';

export function Hero() {
  const t = useTranslations('sections.hero');

  return (
    <div className="space-y-3">
      <div className="flex justify-between items-center">
        <h1 className="text-xl">{t('greeting')}</h1>
        <div className="flex gap-x-3">
          <LocaleSwitcher />
          <ThemeToggle />
        </div>
      </div>
      <p className="text-sm text-muted-foreground">{t('description')}</p>
      <Contact />
    </div>
  );
}
