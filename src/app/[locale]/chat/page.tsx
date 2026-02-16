import { ChatPage } from '@/features/chat/components/chat-page';
import { getTranslations } from 'next-intl/server';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'metadata.chat' });

  return {
    title: t('title'),
    description: t('description'),
  };
}

export default function Page() {
  return <ChatPage />;
}
