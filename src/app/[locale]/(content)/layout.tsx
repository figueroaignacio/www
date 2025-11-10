// Components
import { BackButton } from '@/components/back-button';
import { ThemeToggle } from '@/components/theme-toggle';

// next-intl
import { routing } from '@/i18n/routing';
import { hasLocale, Locale } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';

interface BlogLayoutProps {
  children: React.ReactNode;
  params: Promise<{ locale: Locale }>;
}

export default async function ContentLayout({ children, params }: BlogLayoutProps) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);

  return (
    <div>
      <header className="flex justify-between items-center mb-5">
        <BackButton />
        <ThemeToggle />
      </header>
      {children}
    </div>
  );
}
