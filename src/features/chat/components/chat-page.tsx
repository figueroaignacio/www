'use client';

import { useChat } from '@/features/chat/hooks/use-chat';
import { useChatInput } from '@/features/chat/hooks/use-chat-input';
import { Menu } from 'lucide-react';
import { useState } from 'react';
import { ChatHero } from './chat-hero';
import { ChatInput } from './chat-input';
import { ChatMessages } from './chat-messages';
import { ChatSidebar } from './chat-sidebar';

export function ChatPage() {
  const { messages, isLoading, sendMessage, handleSuggestionClick, resetChat } = useChat();
  const { message, setMessage, handleSubmit } = useChatInput(sendMessage);
  const [hasInteracted, setHasInteracted] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

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

  const handleNewChat = () => {
    resetChat();
    setHasInteracted(false);
    setIsSidebarOpen(false);
  };

  const showHero = !hasInteracted && messages.length <= 1;

  return (
    <div className="flex h-screen w-full overflow-hidden bg-background">
      <ChatSidebar
        onNewChat={handleNewChat}
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
      />
      <main className="flex-1 flex flex-col min-w-0 h-full relative">
        <div className="lg:hidden absolute top-4 left-4 z-40">
          <button
            onClick={() => setIsSidebarOpen(true)}
            className="p-2 rounded-lg bg-card border border-border/50 shadow-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <Menu className="w-5 h-5" />
          </button>
        </div>
        <div className="flex-1 flex flex-col w-full max-w-4xl mx-auto px-4 md:px-6">
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
      </main>
    </div>
  );
}
