'use client';

import { usePathname, useRouter } from '@/i18n/navigation';
import { useLocale } from 'next-intl';
import { useTransition } from 'react';

// Types
import { locales } from '@/i18n/routing';
import type { Locale } from 'next-intl';

export function LocaleSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();
  const [_, startTransition] = useTransition();

  function handleLocaleChange(newLocale: Locale) {
    if (newLocale === locale) return;
    startTransition(() => {
      router.replace(pathname, { locale: newLocale, scroll: false });
    });
  }

  return (
    <div className="flex items-center gap-2">
      {locales.map((option) => (
        <button
          key={option}
          onClick={() => handleLocaleChange(option as Locale)}
          className={`text-sm font-medium transition-colors ${
            locale === option
              ? 'text-foreground underline underline-offset-4'
              : 'text-muted-foreground hover:text-foreground'
          }`}
        >
          {option.toUpperCase()}
        </button>
      ))}
    </div>
  );
}
