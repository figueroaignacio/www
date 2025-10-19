'use client';

// Hooks
import { usePathname } from '@/i18n/navigation';
import { useTranslations } from 'next-intl';

// Components
import { Link } from '@/i18n/navigation';

interface Navigation {
  label: string;
  href: string;
}

export function NavigationBar() {
  const t = useTranslations('ui');
  const navigation: Navigation[] = t.raw('navigation');
  const pathname = usePathname();

  return (
    <nav className="space-x-5">
      {navigation.map((item) => {
        const isActive = pathname === item.href;
        return (
          <Link
            key={item.href}
            href={item.href}
            className={`inline-block text-sm transition-all ${
              isActive
                ? 'text-foreground font-medium scale-110'
                : 'text-muted-foreground hover:text-foreground '
            }`}
          >
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}
