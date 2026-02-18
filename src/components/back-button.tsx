'use client';

import { useRouter } from '@/i18n/navigation';
import { ArrowLeftIcon } from '@radix-ui/react-icons';

export function BackButton({ className }: { className?: string }) {
  const router = useRouter();

  function onBack() {
    router.back();
  }

  return (
    <button
      onClick={onBack}
      className={`hover:scale-[1.1] transition-transform duration-100 ease cursor-pointer ${className}`}
    >
      <ArrowLeftIcon className="size-6" />
    </button>
  );
}
