import { useTranslations } from 'next-intl';
import { Spinner } from './ui/spinner';

export function Loader() {
  const t = useTranslations('components');

  return (
    <div className="flex min-h-[70svh] items-center justify-center text-muted-foreground gap-x-2">
      <Spinner className="size-6 " />
      <span>{t('loader')}</span>
    </div>
  );
}
