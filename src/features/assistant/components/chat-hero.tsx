'use client';

import { motion } from 'motion/react';
import { useTranslations } from 'next-intl';
import { AssistantAvatar } from './ui/assistant-avatar';
import { ChatSuggestions } from './ui/chat-suggestions';

interface ChatHeroProps {
  onQuickAction: (text: string) => void;
}

export function ChatHero({ onQuickAction }: ChatHeroProps) {
  const t = useTranslations('components.chat.page');

  return (
    <div className="flex flex-col justify-center items-center min-h-[40vh] max-w-3xl mx-auto w-full text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      >
        <AssistantAvatar size="xl" />
      </motion.div>

      <motion.div
        className="space-y-2 mt-6"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
      >
        <h1 className="text-3xl font-bold tracking-tight text-balance">{t('greeting')}</h1>
        <p className="text-muted-foreground text-sm max-w-md mx-auto text-balance">
          {t('subtitle')}
        </p>
      </motion.div>

      <motion.div
        className="mt-8"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
      >
        <ChatSuggestions onSuggestionClick={onQuickAction} />
      </motion.div>
    </div>
  );
}
