'use client';

// Hooks
import { useRouter } from 'next/navigation';

// Components
import { ArrowLeftIcon } from '@radix-ui/react-icons';

export function BackButton() {
  const router = useRouter();

  function onBack() {
    router.back();
  }

  return (
    <button
      onClick={onBack}
      className="hover:scale-[1.1] transition-transform duration-100 ease cursor-pointer"
    >
      <ArrowLeftIcon className="size-6" />
    </button>
  );
}
