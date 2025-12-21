'use client';

// Hooks
import { usePathname } from '@/i18n/navigation';
import { useTranslations } from 'next-intl';
import { useState } from 'react';

// Components
import { Contact } from '@/features/about/components/contact';
import { DeveloperWatermark } from '@/features/about/components/developer-watermark';
import { Link } from '@/i18n/navigation';
import { Cross1Icon, HamburgerMenuIcon } from '@radix-ui/react-icons';
import { ArrowRightIcon } from 'lucide-react';
import { HeaderActions } from './header-actions';

export function MobileMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const t = useTranslations('ui');
  const navigation = t.raw('navigation') as Array<{ label: string; href: string }>;

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <div className="flex w-full items-center justify-between lg:hidden py-5 container sticky top-0 bg-background/60 backdrop-blur-lg z-100">
      <button onClick={toggleMenu} className="flex items-center gap-x-3">
        <HamburgerMenuIcon className="h-6 w-6 cursor-pointer" />
        menu
      </button>
      <nav
        className={`bg-background fixed inset-0 z-600 flex h-screen w-full flex-col transition-all duration-300 ease-in-out ${
          isMenuOpen
            ? 'pointer-events-auto scale-100 opacity-100'
            : 'pointer-events-none scale-95 opacity-0'
        }`}
      >
        <div className="py-3 px-5">
          <button onClick={toggleMenu}>
            <Cross1Icon className="size-8 cursor-pointer" />
          </button>
        </div>
        <div className="flex-1 overflow-y-auto py-5">
          <ul>
            {navigation.map((item, index) => {
              const isActive = pathname === item.href;

              return (
                <li key={`item-${index}`} onClick={toggleMenu} className="border-y border-border">
                  <Link
                    href={item.href}
                    className={`animate-show-soft text-2xl py-5 flex items-center justify-between px-5 transition-colors ${
                      isActive ? 'bg-primary text-primary-foreground border-y-0' : 'hover:bg-accent'
                    }`}
                  >
                    {item.label}
                    <ArrowRightIcon className={`size-5 ${isActive ? 'translate-x-1' : ''}`} />
                  </Link>
                </li>
              );
            })}
          </ul>
          <div className="mt-3 p-5">
            <Contact />
          </div>
        </div>
        <div className="px-5 py-4 border-t border-border">
          <DeveloperWatermark />
        </div>
      </nav>
      <HeaderActions />
    </div>
  );
}
