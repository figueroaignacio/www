'use client'

// Hooks
import { usePathname, useRouter } from '@/i18n/navigation'
import { useLocale } from 'next-intl'
import { useTransition } from 'react'

// Components
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from './ui/dropdown-menu'

// Config
import { locales } from '@/i18n/routing'

// Types
import { Locale } from 'next-intl'

export function LocaleSwitcher() {
  const router = useRouter()
  const [, startTransition] = useTransition()
  const pathname = usePathname()
  const locale = useLocale()

  function onLocaleChange(value: string) {
    const newLocale = value as Locale
    startTransition(() => {
      router.replace({ pathname }, { locale: newLocale })
    })
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="items-center">
        <span>{locale.toUpperCase()}</span>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-48">
        {locales.map((localeOption) => (
          <DropdownMenuItem
            key={localeOption}
            onClick={() => onLocaleChange(localeOption)}
            className={`flex items-center justify-between ${
              locale === localeOption ? 'text-accent-foreground' : ''
            }`}
          >
            {localeOption.toUpperCase()}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
