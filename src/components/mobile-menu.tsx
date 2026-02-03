'use client';

import { Link, usePathname } from '@/i18n/navigation';
import { Cross1Icon, HamburgerMenuIcon } from '@radix-ui/react-icons';
import { useTranslations } from 'next-intl';
import { useState } from 'react';
import { HeaderActions } from './header-actions';
import { OpenToWorkBadge } from './open-to-work-badge';

export function MobileMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const t = useTranslations('ui');
  const navigation = t.raw('navigation') as Array<{ label: string; href: string }>;

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <div className="flex w-full items-center justify-between lg:hidden py-4 container sticky top-0 bg-background/80 backdrop-blur-md z-50 border-b border-border/40">
      <button
        onClick={toggleMenu}
        className="p-2 -ml-2 hover:bg-accent rounded-md transition-colors"
        aria-label="Toggle menu"
      >
        <HamburgerMenuIcon className="h-5 w-5" />
      </button>
      <nav
        className={`bg-background/95 backdrop-blur-lg fixed inset-0 z-50 flex flex-col transition-all duration-300 ease-out ${
          isMenuOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
        }`}
      >
        <div className="flex items-center justify-between p-4 border-b border-border/40">
          <span className="text-sm font-medium text-muted-foreground">Menu</span>
          <button
            onClick={toggleMenu}
            className="p-2 hover:bg-accent rounded-md transition-colors"
            aria-label="Close menu"
          >
            <Cross1Icon className="h-5 w-5" />
          </button>
        </div>
        <div className="flex-1 min-h-screen bg-background px-4 py-8">
          <ul className="space-y-1">
            {navigation.map((item, index) => {
              const isActive = pathname === item.href;

              return (
                <li key={`item-${index}`}>
                  <Link
                    href={item.href}
                    onClick={toggleMenu}
                    className={`block px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                      isActive
                        ? 'bg-accent text-foreground'
                        : 'text-muted-foreground hover:text-foreground hover:bg-accent/50'
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
      <div className="flex items-center gap-3">
        <OpenToWorkBadge />
        <HeaderActions />
      </div>
    </div>
  );
}
