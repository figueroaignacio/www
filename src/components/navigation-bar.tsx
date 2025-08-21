'use client';

// Hooks
import { useTranslations } from 'next-intl';

// Components
import { Link, usePathname } from '@/i18n/navigation';
import { ChatBubbleIcon, GearIcon, HomeIcon } from '@radix-ui/react-icons';

// Utils
import clsx from 'clsx';

type Navigation = {
  label: string;
  href: string;
};

const iconMap: Record<string, React.ReactNode> = {
  '/': <HomeIcon className="size-5" />,
  '/projects': <GearIcon className="size-5" />,
  '/blog': <ChatBubbleIcon className="size-5" />,
};

export function NavigationBar() {
  const t = useTranslations('ui');
  const pathname = usePathname();
  const navigation = t.raw('navigation') as Navigation[];

  return (
    <nav className="fixed lg:hidden -bottom-3 inset-x-0 z-50 mx-auto max-w-2xl w-full rounded-3xl backdrop-blur-3xl bg-card/30 border border-border px-6 py-4 flex items-center justify-between">
      <div className="flex w-full items-center justify-evenly gap-4">
        {navigation.map((item) => {
          const icon = iconMap[item.href];
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={clsx(
                'flex flex-col items-center text-xs transition-all duration-200',
                isActive ? 'text-foreground' : 'text-muted-foreground hover:text-foreground',
              )}
            >
              <div
                className={clsx(
                  'p-2 rounded-full transition-colors',
                  isActive ? 'bg-accent text-accent-foreground' : 'bg-transparent',
                )}
              >
                {icon}
              </div>
              <span className="mt-1">{item.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
