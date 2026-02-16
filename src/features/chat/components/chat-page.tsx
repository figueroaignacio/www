'use client';

import { useChat } from '@/features/chat/hooks/use-chat';
import { useChatInput } from '@/features/chat/hooks/use-chat-input';
import { AnimatePresence, motion } from 'motion/react';
import { useState } from 'react';
import { ChatHero } from './chat-hero';
import { ChatInput } from './chat-input';
import { ChatMessages } from './chat-messages';

export function ChatPage() {
  const { messages, isLoading, messagesEndRef, sendMessage, handleSuggestionClick } = useChat();
  const { message, setMessage, handleSubmit } = useChatInput(sendMessage);
  const [hasInteracted, setHasInteracted] = useState(false);

  const handleHeroSubmit = (e?: React.FormEvent) => {
    if (message.trim()) {
      setHasInteracted(true);
      handleSubmit(e);
    }
  };

  const handleQuickAction = (text: string) => {
    setHasInteracted(true);
    handleSuggestionClick(text);
  };

  const showHero = !hasInteracted && messages.length <= 1;

  return (
    <div className="flex flex-col h-[calc(100vh-80px)] w-full max-w-5xl mx-auto py-6">
      <AnimatePresence mode="wait">
        {showHero ? (
          <motion.div
            key="hero"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, y: -20 }}
            className="flex-1 flex flex-col justify-center"
          >
            <ChatHero onQuickAction={handleQuickAction} />
            <div className="mt-8">
              <ChatInput
                message={message}
                isLoading={isLoading}
                onMessageChange={setMessage}
                onSubmit={handleHeroSubmit}
                onKeyPress={() => {}}
                isHero={true}
              />
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="chat"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col h-full"
          >
            <div className="flex-1 overflow-hidden relative mb-4">
              <div className="absolute inset-0 overflow-y-auto">
                <ChatMessages
                  messages={messages}
                  isLoading={isLoading}
                  onSuggestionClick={handleQuickAction}
                />
              </div>
            </div>
            <ChatInput
              message={message}
              isLoading={isLoading}
              onMessageChange={setMessage}
              onSubmit={handleSubmit}
              onKeyPress={() => {}}
              isHero={false}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
