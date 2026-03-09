'use client';

import { Spinner } from '@/components/ui/spinner';
import { ArrowUp } from 'lucide-react';
import { motion } from 'motion/react';
import { useTranslations } from 'next-intl';
import React, { useEffect, useRef, useState } from 'react';

interface ChatInputProps {
  message: string;
  isLoading: boolean;
  onMessageChange: (value: string) => void;
  onSubmit: (e?: React.FormEvent) => void;
  onKeyPress: (e: React.KeyboardEvent<HTMLTextAreaElement>) => void;
  isHero?: boolean;
}

export function ChatInput({
  message,
  isLoading,
  onMessageChange,
  onSubmit,
  onKeyPress,
  isHero = false,
}: ChatInputProps) {
  const t = useTranslations('components.chat.page');
  const tChat = useTranslations('components.chat');
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const disclaimers = tChat.raw('disclaimers') as string[];
  const [disclaimerIndex, setDisclaimerIndex] = useState<number>(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setDisclaimerIndex(Math.floor(Math.random() * disclaimers.length));
  }, [disclaimers.length]);

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = `${Math.min(textareaRef.current.scrollHeight, 200)}px`;
    }
  }, [message]);

  const handleKeyDown = React.useCallback(
    (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
      if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        onSubmit();
      }
    },
    [onSubmit],
  );

  const handleSubmit = React.useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      onSubmit();
    },
    [onSubmit],
  );

  return (
    <motion.div
      className={`relative w-full ${isHero ? 'max-w-3xl mx-auto container' : 'max-w-3xl container mx-auto'}`}
    >
      <form
        onSubmit={handleSubmit}
        className={`relative flex items-end gap-2 p-2 rounded-lg bg-card hover:bg-secondary ${
          isHero ? 'min-h-[64px]' : 'min-h-[56px] border border-border'
        } ${isLoading ? 'opacity-90' : ''}`}
      >
        <textarea
          ref={textareaRef}
          value={message}
          onChange={(e) => onMessageChange(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder={t('inputPlaceholder')}
          rows={1}
          disabled={isLoading}
          className={`w-full bg-transparent resize-none border-0 focus:ring-0 focus:outline-none px-6 py-4 max-h-[200px] overflow-y-auto placeholder:text-muted-foreground/70 ${
            isHero ? 'text-lg' : 'text-base'
          }`}
          style={{ minHeight: isHero ? '64px' : '56px' }}
        />
        <div className="flex pb-2 pr-2">
          <motion.button
            type="submit"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            disabled={!message.trim() && !isLoading}
            className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full ${
              message.trim() || isLoading
                ? 'bg-foreground text-background shadow-md cursor-pointer'
                : 'bg-transparent text-muted-foreground/30 cursor-not-allowed'
            }`}
          >
            {isLoading ? <Spinner /> : <ArrowUp className="h-5 w-5" />}
          </motion.button>
        </div>
      </form>
      {isHero && (
        <div className="absolute -bottom-8 left-0 right-0 flex justify-center text-xs text-muted-foreground/60 transition-opacity duration-300">
          {mounted && (
            <span key={disclaimerIndex} className="text-center px-4">
              {disclaimers[disclaimerIndex]}
            </span>
          )}
        </div>
      )}
    </motion.div>
  );
}
