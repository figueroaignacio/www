import { ChatPage } from '@/features/chat/components/chat-page';
import type { Locale } from 'next-intl';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { use } from 'react';

interface ChatPageProps {
  params: Promise<{ locale: Locale }>;
}

export default function Page({ params }: ChatPageProps) {
  const { locale } = use(params);
  setRequestLocale(locale);

  return <ChatPage />;
}

export async function generateMetadata({ params }: ChatPageProps) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'metadata.chat' });

  return {
    title: t('title'),
    description: t('description'),
    openGraph: {
      title: t('title'),
      description: t('description'),
      type: 'website',
      locale: locale,
    },
    twitter: {
      card: 'summary_large_image',
      title: t('title'),
      description: t('description'),
    },
  };
}
