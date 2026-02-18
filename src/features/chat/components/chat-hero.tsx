'use client';

import { BotMessageSquare } from 'lucide-react';
import { motion } from 'motion/react';
import { useTranslations } from 'next-intl';
import { ChatSuggestions } from './chat-suggestions';

interface ChatHeroProps {
  onQuickAction: (text: string) => void;
}

export function ChatHero({ onQuickAction }: ChatHeroProps) {
  const t = useTranslations('components.chat.page');

  return (
    <div className="flex flex-col items-start justify-center min-h-[40vh] space-y-8 max-w-3xl mx-auto w-full px-4">
      <motion.div className="space-y-2">
        <div className="flex items-center gap-2 flex-wrap">
          <h1 className="text-2xl font-bold tracking-tight">{t('greeting')}</h1>
          <BotMessageSquare className="w-6 h-6 hidden md-block" />
        </div>
        <p className="text-xl  text-muted-foreground font-medium">{t('subtitle')}</p>
      </motion.div>

      <motion.div className="w-full">
        <ChatSuggestions onSuggestionClick={onQuickAction} />
      </motion.div>
    </div>
  );
}
