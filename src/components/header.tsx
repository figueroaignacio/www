// Hooks
import { useTranslations } from 'next-intl';

// Components
import { Link } from '@/i18n/navigation';
import { LocaleSwitcher } from './locale-switcher';
import { ToggleTheme } from './toggle-theme';

interface Navigation {
  label: string;
  href: string;
}

export function Header() {
  const t = useTranslations('');
  const navigation = t.raw('navigation') as Navigation[];

  return (
    <header className="border-border border-b py-2 sticky top-0 z-50 backdrop-blur-xs">
      <div className="container flex justify-between items-center gap-x-2">
        <nav className="space-x-5">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-muted-foreground hover:text-primary hover:underline hidden md:inline-block"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-x-3">
          <LocaleSwitcher />
          <ToggleTheme />
        </div>
      </div>
    </header>
  );
}
