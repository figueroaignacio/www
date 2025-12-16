// Hooks
import { useTranslations } from 'next-intl';

// Components
import { Alert, AlertDescription, AlertTitle } from './ui/alert';

export function Error() {
  const t = useTranslations('components');

  return (
    <Alert variant="danger">
      <AlertTitle>Error</AlertTitle>
      <AlertDescription>{t('error')}</AlertDescription>
    </Alert>
  );
}
