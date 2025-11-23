'use client';

// Hooks
import { useTranslations } from 'next-intl';
import { useState } from 'react';

// Components
import { Link } from '@/i18n/navigation';
import { Cross1Icon, HamburgerMenuIcon } from '@radix-ui/react-icons';
import { DeveloperWatermark } from './developer-watermark';
import { HeaderActions } from './header-actions';

export function MobileMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const t = useTranslations('ui');
  const navigation = t.raw('navigation') as Array<{ label: string; href: string }>;

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <div className="relative z-50 flex w-full items-center justify-between lg:hidden mt-3 mb-6">
      <button onClick={toggleMenu} className="flex items-center gap-x-3">
        <HamburgerMenuIcon className="h-6 w-6 cursor-pointer" />
        menu
      </button>
      <nav
        className={`bg-background/60 backdrop-blur-xl fixed inset-0 z-50 flex h-screen w-full flex-col transition-all duration-300 ease-in-out ${
          isMenuOpen
            ? 'pointer-events-auto scale-100 opacity-100'
            : 'pointer-events-none scale-95 opacity-0'
        }`}
      >
        <div className="flex items-center justify-between px-4 py-3">
          <button onClick={toggleMenu}>
            <Cross1Icon className="size-8 cursor-pointer" />
          </button>
        </div>
        <div className="flex-1 overflow-y-auto px-5 py-4">
          <ul>
            {navigation.map((item, index) => (
              <li key={`item-${index}`} onClick={toggleMenu} className="mr-6">
                <Link href={item.href} className="animate-show-soft block py-2 text-2xl">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="px-5 py-4 border-t border-border">
          <DeveloperWatermark />
        </div>
      </nav>
      <HeaderActions />
    </div>
  );
}
