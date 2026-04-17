'use client';

import { useTranslations } from 'next-intl';
import { AssistantAvatar } from './assistant-avatar';
import { ChatSuggestions } from './chat-suggestions';

interface ChatHeroProps {
  onQuickAction: (text: string) => void;
}

export function ChatHero({ onQuickAction }: ChatHeroProps) {
  const t = useTranslations('components.chat.page');

  return (
    <div className="flex flex-col justify-center items-center min-h-[40vh] space-y-5 max-w-3xl mx-auto w-full text-center">
      <AssistantAvatar size="xl" />
      <div className="space-y-4">
        <h1 className="text-3xl font-bold tracking-tight text-balance">{t('greeting')}</h1>
        <p className="text-muted-foreground text-base max-w-2xl mx-auto text-balance">
          {t('subtitle')}
        </p>
      </div>
      <ChatSuggestions onSuggestionClick={onQuickAction} />
    </div>
  );
}
