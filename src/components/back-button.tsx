'use client';

// Hooks
import { useTranslations } from 'next-intl';
import { useRouter } from 'next/navigation';

// Components
import { ArrowLeftIcon } from '@radix-ui/react-icons';

export function BackButton() {
  const router = useRouter();
  const t = useTranslations('components');

  function onBack() {
    router.back();
  }

  return (
    <button
      onClick={onBack}
      className="text-sm flex items-center gap-x-2 text-muted-foreground hover:text-primary hover:underline"
    >
      <ArrowLeftIcon /> {t('backButton.label')}
    </button>
  );
}
