'use client';

import { useChat } from '@/features/assistant/hooks/use-chat';
import { useChatInput } from '@/features/assistant/hooks/use-chat-input';
import { useState } from 'react';
import { ChatHeader } from './chat-header';
import { ChatHero } from './chat-hero';
import { ChatInput } from './chat-input';
import { ChatMessages } from './chat-messages';

export function ChatPage() {
  const { messages, isLoading, sendMessage, handleSuggestionClick, resetChat, isMounted } =
    useChat();
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

  const handleReset = () => {
    resetChat();
    setHasInteracted(false);
  };

  if (!isMounted) {
    return (
      <div className="flex h-screen w-full overflow-hidden bg-background">
        <div className="flex-1 flex flex-col min-w-0 h-full relative">
          <ChatHeader />
        </div>
      </div>
    );
  }

  const showHero = !hasInteracted && messages.length === 0;

  return (
    <div className="flex h-lvh w-full overflow-hidden">
      <div className="flex-1 flex flex-col min-w-0 h-full relative">
        <ChatHeader onResetChat={messages.length > 0 ? handleReset : undefined} />
        <div className="flex-1 flex flex-col w-full">
          {showHero ? (
            <div className="flex-1 flex flex-col justify-center py-20 w-full max-w-3xl mx-auto">
              <ChatHero onQuickAction={handleQuickAction} />
              <div className="mt-8">
                <ChatInput
                  message={message}
                  isLoading={isLoading}
                  onMessageChange={setMessage}
                  onSubmit={handleHeroSubmit}
                  isHero={true}
                />
              </div>
            </div>
          ) : (
            <div className="flex flex-col h-full">
              <div className="flex-1 overflow-hidden relative">
                <div className="absolute inset-0 overflow-y-auto">
                  <div className="py-4">
                    <ChatMessages
                      messages={messages}
                      isLoading={isLoading}
                      onSuggestionClick={handleQuickAction}
                    />
                  </div>
                </div>
              </div>
              <div className="pb-2">
                <ChatInput
                  message={message}
                  isLoading={isLoading}
                  onMessageChange={setMessage}
                  onSubmit={handleSubmit}
                  isHero={false}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
