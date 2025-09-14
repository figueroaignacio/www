// Hooks
import { useTranslations } from 'next-intl'

// Components
import Link from 'next/link'

type Navigation = {
  label: string
  href: string
}

export function Header() {
  const t = useTranslations('')
  const navigation = t.raw('navigation') as Navigation[]

  return (
    <header className="border-border border-b py-2 sticky top-0 z-50 backdrop-blur-xs">
      <div className="container flex justify-end">
        <nav className="space-x-5">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-muted-foreground hover:text-primary hover:underline"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  )
}
