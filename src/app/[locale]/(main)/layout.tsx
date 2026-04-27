import { Footer } from '@/components/footer';
import { Header } from '@/components/header';
import { ChatFloatingLink } from '@/features/assistant/components/ui/chat-floating-link';
import { routing } from '@/i18n/routing';
import { hasLocale, type Locale } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';

interface LocaleLayoutProps {
  children: React.ReactNode;
  params: Promise<{ locale: Locale }>;
}

export default async function MainLayout({ children, params }: LocaleLayoutProps) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main id="main-content" className="flex-1 container" tabIndex={-1}>
        {children}
      </main>
      <Footer />
      <ChatFloatingLink />
    </div>
  );
}
