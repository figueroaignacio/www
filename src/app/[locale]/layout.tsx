import { Providers } from '@/components/providers';
import { SkipLink } from '@/components/ui/skip-link';
import { TerminalPrompt } from '@/components/ui/terminal-prompt';
import { routing } from '@/i18n/routing';
import { fontHeading, fontSans } from '@/lib/fonts';
import type { Metadata, Viewport } from 'next';
import { hasLocale, Locale, NextIntlClientProvider } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';

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

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={`${fontSans.variable} ${fontHeading.variable} antialiased`}>
        <NextIntlClientProvider>
          <Providers>
            <SkipLink />
            {children}
            <TerminalPrompt />
          </Providers>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0a0a0a' },
  ],
  colorScheme: 'dark light',
  width: 'device-width',
  initialScale: 1,
};

const baseMetadata: Metadata = {
  title: {
    default: 'Ignacio Figueroa - Full Stack Developer',
    template: '%s | Ignacio Figueroa',
  },
  description:
    'Full Stack Developer specializing in React, Next.js, and TypeScript. Portfolio and projects.',
  keywords: [
    'Full Stack Developer',
    'React',
    'Next.js',
    'TypeScript',
    'Frontend Developer',
    'Portfolio',
  ],
  authors: [{ name: 'Ignacio Figueroa' }],
  creator: 'Ignacio Figueroa',
  publisher: 'Ignacio Figueroa',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  twitter: {
    card: 'summary_large_image',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
  },
};

export async function generateMetadata({ params }: Omit<LocaleLayoutProps, 'children'>): Promise<Metadata> {
  const { locale } = await params;
  
  const domains: Record<string, string> = {
    en: 'https://en.ignaciofigueroa.dev',
    es: 'https://es.ignaciofigueroa.dev',
  };
  
  const domain = domains[locale] || domains.en;

  return {
    ...baseMetadata,
    metadataBase: new URL(domain),
    openGraph: {
      type: 'website',
      locale: locale === 'es' ? 'es_ES' : 'en_US',
      alternateLocale: locale === 'es' ? ['en_US'] : ['es_ES'],
      siteName: 'Ignacio Figueroa',
      url: '/',
    },
    alternates: {
      canonical: '/',
      languages: {
        en: domains.en,
        es: domains.es,
        'x-default': domains.en,
      },
    },
  };
}
