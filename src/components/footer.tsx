// Hooks
import { useTranslations } from 'next-intl';

// Components
import { Contact } from './contact';

export function Footer() {
  const t = useTranslations('components.footer');

  return (
    <footer className="max-w-xl mx-auto p-4 w-full flex flex-col space-y-5">
      <p className="text-muted-foreground text-sm">{t('text')}</p>
      <Contact />
    </footer>
  );
}
