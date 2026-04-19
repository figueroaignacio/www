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
    <div className="flex h-screen w-full overflow-hidden bg-background">
      <div className="flex-1 flex flex-col min-w-0 h-full relative">
        <ChatHeader onResetChat={messages.length > 0 ? handleReset : undefined} />
        <div className="flex-1 flex flex-col w-full max-w-4xl mx-auto ">
          {showHero ? (
            <div className="flex-1 flex flex-col justify-center py-20">
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
            </div>
          ) : (
            <div className="flex flex-col h-full py-4">
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
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
