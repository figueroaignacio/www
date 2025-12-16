'use client';

// Hooks
import { usePathname, useRouter } from '@/i18n/navigation';
import { useLocale } from 'next-intl';
import { useTransition } from 'react';

// Components
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Check } from 'lucide-react';

// Types
import type { Locale } from 'next-intl';

// Config
import { locales } from '@/i18n/routing';

const LOCALE_LABELS: Record<string, string> = {
  es: 'ES',
  en: 'EN',
};

export function LocaleSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();
  const [isPending, startTransition] = useTransition();

  function handleLocaleChange(newLocale: Locale) {
    startTransition(() => {
      router.replace({ pathname }, { locale: newLocale });
    });
  }

  const getLocaleLabel = (code: string) => {
    return LOCALE_LABELS[code] || code.toUpperCase();
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <span className="text-xs">{getLocaleLabel(locale)}</span>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="min-w-[140px]">
        {locales.map((localeOption) => (
          <DropdownMenuItem
            key={localeOption}
            onClick={() => handleLocaleChange(localeOption as Locale)}
            disabled={isPending}
            className="justify-between"
          >
            <span className={locale === localeOption ? 'font-medium' : ''}>
              {getLocaleLabel(localeOption)}
            </span>
            {locale === localeOption && <Check className="text-foreground ml-2 h-3.5 w-3.5" />}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
