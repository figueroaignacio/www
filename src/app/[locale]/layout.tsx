import React from 'react';

// Components
import { ThemeProvider } from '@/components/theme-provider';

// next-intl
import { routing } from '@/i18n/routing';
import { hasLocale, Locale, NextIntlClientProvider } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';

// Font
import { Footer } from '@/components/footer';
import { fontSans } from '@/lib/fonts';

export const metadata = {
  description: 'A blank template using Payload in a Next.js app.',
  title: 'Payload Blank Template',
};

interface LocaleLayoutProps {
  children: React.ReactNode;
  params: Promise<{ locale: Locale }>;
}

export default async function RootLayout({ children, params }: LocaleLayoutProps) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);

  return (
    <html lang="en">
      <body className={`${fontSans.className} antialiased flex flex-col min-h-screen`}>
        <NextIntlClientProvider>
          <ThemeProvider attribute="class" defaultTheme="dark">
            <div className="min-h-screen grid grid-rows-[1fr_auto]">
              <main className="max-w-xl mx-auto p-4 space-y-5 w-full">{children}</main>
              <Footer />
            </div>
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
