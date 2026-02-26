'use client';

import { useTranslations } from 'next-intl';
import { useEffect, useState } from 'react';
import { ChatSuggestions } from './chat-suggestions';

interface ChatHeroProps {
  onQuickAction: (text: string) => void;
}

export function ChatHero({ onQuickAction }: ChatHeroProps) {
  const t = useTranslations('components.chat.page');
  const [timeGreeting, setTimeGreeting] = useState('');

  useEffect(() => {
    const hour = new Date().getHours();
    if (hour >= 5 && hour < 12) {
      setTimeGreeting(t('goodMorning'));
    } else if (hour >= 12 && hour < 19) {
      setTimeGreeting(t('goodAfternoon'));
    } else {
      setTimeGreeting(t('goodEvening'));
    }
  }, [t]);

  return (
    <div className="flex flex-col items-center justify-center min-h-[40vh] space-y-10 max-w-3xl mx-auto w-full px-4 text-center">
      <div className="space-y-4 flex flex-col items-center">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
          {timeGreeting ? `${timeGreeting} ${t('greeting')}` : t('greeting')}
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground font-medium max-w-[600px] leading-relaxed">
          {t('subtitle')}
        </p>
      </div>
      <div className="max-w-lg ">
        <ChatSuggestions onSuggestionClick={onQuickAction} />
      </div>
    </div>
  );
}
