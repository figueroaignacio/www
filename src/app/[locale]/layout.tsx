import { Footer } from '@/components/footer';
import { Header } from '@/components/header';
import { Providers } from '@/components/providers';
import { NBotChat } from '@/features/chat/components/n-bot-chat';
import { routing } from '@/i18n/routing';
import { fontHeading, fontSans } from '@/lib/fonts';
import { hasLocale, Locale, NextIntlClientProvider } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';
import { cookies } from 'next/headers';
import { notFound } from 'next/navigation';

export const metadata = {
  title: {
    template: `Ignacio Figueroa | %s`,
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
      <body className={`${fontSans.variable} ${fontHeading.variable} antialiased`}>
        <NextIntlClientProvider>
          <Providers>
            <NBotChat />
            <div className="min-h-screen flex flex-col">
              <Header />
              <main className="flex-1 container">{children}</main>
              <Footer />
            </div>
          </Providers>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
