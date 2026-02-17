import { ChatPage } from '@/features/chat/components/chat-page';
import type { Locale } from 'next-intl';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { use } from 'react';

interface HomePageProps {
  params: Promise<{ locale: Locale }>;
}

export default function Page({ params }: HomePageProps) {
  const { locale } = use(params);
  setRequestLocale(locale);

  return <ChatPage />;
}

export async function generateMetadata({ params }: HomePageProps) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'metadata.chat' });

  return {
    title: t('title'),
    description: t('description'),
  };
}
