'use client';

import { useTranslations } from 'next-intl';
import { ChatSuggestions } from './chat-suggestions';

interface ChatHeroProps {
  onQuickAction: (text: string) => void;
}

export function ChatHero({ onQuickAction }: ChatHeroProps) {
  const t = useTranslations('components.chat.page');

  return (
    <div className="flex flex-col items-center justify-center min-h-[40vh] space-y-10 max-w-3xl mx-auto w-full px-4 text-center">
      <div className="space-y-4 flex flex-col ">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight">{t('greeting')}</h1>
      </div>
      <div>
        <ChatSuggestions onSuggestionClick={onQuickAction} />
      </div>
    </div>
  );
}
