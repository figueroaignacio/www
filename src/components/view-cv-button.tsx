// Hooks
import { useTranslations } from 'next-intl';

// Components
import Link from 'next/link';

export function ViewCvButton() {
  const t = useTranslations('components.viewCvButton');

  return (
    <Link href={t('url')} target="_blank" rel="noopener noreferrer" className="text-sm underline">
      {t('label')}
    </Link>
  );
}
