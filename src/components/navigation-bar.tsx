'use client'

import type React from 'react'

// Hooks
import { useTranslations } from 'next-intl'

// Components
import { Link, usePathname } from '@/i18n/navigation'
import { ChatBubbleIcon, GearIcon, HomeIcon } from '@radix-ui/react-icons'

// Utils
import clsx from 'clsx'

type Navigation = {
  label: string
  href: string
}

const iconMap: Record<string, React.ReactNode> = {
  '/': <HomeIcon className="size-5" />,
  '/projects': <GearIcon className="size-5" />,
  '/blog': <ChatBubbleIcon className="size-5" />,
}

export function NavigationBar() {
  const t = useTranslations('')
  const pathname = usePathname()
  const navigation = t.raw('navigation') as Navigation[]

  return (
    <nav className="fixed md:hidden -bottom-1 sm:-bottom-1 sm:rounded-2xl inset-x-0 z-50 mx-auto max-w-2xl w-full backdrop-blur-3xl bg-card/80 border border-border/50 px-4 py-3 shadow-lg shadow-black/5">
      <div className="flex w-full items-center justify-around gap-2">
        {navigation.map((item) => {
          const icon = iconMap[item.href]
          const isActive = pathname === item.href
          return (
            <Link
              key={item.href}
              href={item.href}
              className={clsx(
                'relative flex flex-col items-center text-xs transition-all duration-300 ease-out group',
                'min-w-0 flex-1 py-1',
                isActive ? 'text-foreground' : 'text-muted-foreground hover:text-foreground',
              )}
            >
              <div
                className={clsx(
                  'relative z-10 p-2.5 rounded-xl transition-all duration-300 ease-out',
                  isActive ? 'text-primary' : '',
                )}
              >
                {icon}
              </div>
              <span
                className={clsx(
                  'relative z-10 mt-1 font-medium transition-all duration-300 truncate max-w-full',
                  isActive ? 'text-primary scale-105' : 'scale-100',
                )}
              >
                {item.label}
              </span>
            </Link>
          )
        })}
      </div>
    </nav>
  )
}
