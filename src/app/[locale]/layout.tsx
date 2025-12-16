import { cookies } from 'next/headers';

// Components
import { BgBlur } from '@/components/bg-blur';
import { Footer } from '@/components/footer';
import { Providers } from '@/components/providers';

// next-intl
import { routing } from '@/i18n/routing';
import { hasLocale, Locale, NextIntlClientProvider } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';

// Font
import { MobileMenu } from '@/components/mobile-menu';
import { NavigationBar } from '@/components/navigation-bar';
import { NBotChat } from '@/features/chat/components/n-bot-chat';
import { fontSans } from '@/lib/fonts';

export const metadata = {
  title: {
    template: `Ignacio Figueroa - %s`,
  },
};

interface LocaleLayoutProps {
  children: React.ReactNode;
  params: Promise<{ locale: Locale }>;
}

export default async function LocaleLayout({ children, params }: LocaleLayoutProps) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);

  const cookieStore = await cookies();
  const themeCookie = cookieStore.get('theme');
  const theme = themeCookie?.value === 'light' ? 'light' : 'dark';

  return (
    <html lang={locale} suppressHydrationWarning className={theme}>
      <body className={`${fontSans.className} antialiased flex flex-col min-h-screen relative`}>
        <BgBlur />
        <NextIntlClientProvider>
          <Providers>
            <div className="min-h-screen flex flex-col">
              <NBotChat />
              <NavigationBar />
              <MobileMenu />
              <main className="flex-1 container">{children}</main>
              <Footer />
            </div>
          </Providers>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
