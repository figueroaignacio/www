"use client"

// Hooks
import { Link, usePathname } from '@/i18n/navigation';
import { useTranslations } from 'next-intl';

type Navigation = {
  label: string;
  href: string;
};

export function Header() {
  const t = useTranslations('ui');
  const pathname = usePathname();
  const navigation = t.raw('navigation') as Navigation[];

  return (
    <header className='border-b border-border hidden lg:block py-4 px-4 sticky inset-0 backdrop-blur-3xl z-50'>
      <div className='max-w-2xl mx-auto flex flex-end'>
        <nav className='flex w-full justify-end'>
          <ul className='flex gap-x-6'>
            {navigation.map((item, index) => (
              <li key={index} className='text-muted-foreground hover:text-foreground hover:underline text-sm'>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}