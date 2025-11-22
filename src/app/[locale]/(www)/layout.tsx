// Components
import { MobileMenu } from '@/components/mobile-menu';
import { NavigationBar } from '@/components/navigation-bar';

// next-intl
import { routing } from '@/i18n/routing';
import { hasLocale, Locale } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';

interface LocaleLayoutProps {
  children: React.ReactNode;
  params: Promise<{ locale: Locale }>;
}

export default async function WwwLayout({ children, params }: LocaleLayoutProps) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);

  return (
    <div className="space-y-5">
      <div>
        <NavigationBar />
        <MobileMenu />
        {children}
      </div>
    </div>
  );
}
