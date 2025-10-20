// Hooks
import { useTranslations } from 'next-intl';

// Components
import { AnimateIn } from './animate-in';
import { Alert, AlertDescription, AlertTitle } from './ui/alert';

export function Error() {
  const t = useTranslations('components');

  return (
    <AnimateIn variant="scale">
      <Alert variant="danger">
        <AlertTitle>Error</AlertTitle>
        <AlertDescription>{t('error')}</AlertDescription>
      </Alert>
    </AnimateIn>
  );
}
