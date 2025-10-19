'use client';

// Hooks
import { usePathname } from '@/i18n/navigation';
import { useTranslations } from 'next-intl';

// Components
import { AnimateIn } from '@/components/animate-in';
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
      {navigation.map((item, index) => {
        const isActive = pathname === item.href;
        const delay = 0.1 + index * 0.1;
        return (
          <AnimateIn key={item.href} variant="fadeUp" delay={delay} className="inline-block">
            <Link
              href={item.href}
              className={`inline-block text-sm transition-all ${
                isActive
                  ? 'text-foreground font-medium scale-110'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              {item.label}
            </Link>
          </AnimateIn>
        );
      })}
    </nav>
  );
}
