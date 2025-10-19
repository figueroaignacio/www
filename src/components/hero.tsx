// Hooks
import { useTranslations } from 'next-intl';

// Components
import { AnimateIn } from '@/components/animate-in';
import { Contact } from './contact';
import { LocaleSwitcher } from './locale-switcher';
import { ThemeToggle } from './theme-toggle';

export function Hero() {
  const t = useTranslations('sections.hero');

  return (
    <div className="space-y-3">
      <AnimateIn variant="fadeUp" delay={0.1}>
        <div className="flex justify-between items-center">
          <h1 className="text-xl">{t('greeting')}</h1>
          <div className="flex gap-x-3">
            <LocaleSwitcher />
            <ThemeToggle />
          </div>
        </div>
      </AnimateIn>

      <AnimateIn variant="fadeUp" delay={0.2}>
        <p className="text-sm text-muted-foreground">{t('description')}</p>
      </AnimateIn>

      <AnimateIn variant="fadeUp" delay={0.3}>
        <Contact />
      </AnimateIn>
    </div>
  );
}
