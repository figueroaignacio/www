'use client';

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
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="space-y-2"
      >
        <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
          <span className="bg-clip-text text-transparent bg-linear-to-r from-blue-600 via-purple-500 to-indigo-600 dark:from-blue-400 dark:via-purple-400 dark:to-indigo-400">
            {t('greeting')}
          </span>
        </h1>
        <p className="text-2xl md:text-3xl text-muted-foreground font-medium">{t('subtitle')}</p>
      </motion.div>

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6, ease: 'easeOut' }}
        className="w-full"
      >
        <ChatSuggestions onSuggestionClick={onQuickAction} />
      </motion.div>
    </div>
  );
}
