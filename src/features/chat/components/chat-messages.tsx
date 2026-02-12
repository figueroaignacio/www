'use client';

import { BotMessageSquare } from 'lucide-react';
import { useEffect, useRef } from 'react';
import type { Message } from '../types';
import { ChatLoading } from './chat-loading';
import { ChatMessage } from './chat-message';
import { ChatSuggestions } from './chat-suggestions';

interface ChatMessagesProps {
  messages: Message[];
  isLoading: boolean;
  onSuggestionClick: (text: string) => void;
}

export function ChatMessages({ messages, isLoading, onSuggestionClick }: ChatMessagesProps) {
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'end',
      });
    }
  }, [messages]);

  const showSuggestions = messages.length === 1 && messages[0].role === 'assistant';

  return (
    <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-background">
      {messages.map((msg, idx) => (
        <div key={idx} className="flex items-start space-x-3">
          <div className="mt-1">
            {msg.role === 'assistant' ? (
              <BotMessageSquare className="w-6 h-6 text-foreground" />
            ) : (
              <div className="w-6 h-6" />
            )}
          </div>
          <div className="flex-1">
            <ChatMessage message={msg} />
          </div>
        </div>
      ))}

      {showSuggestions && !isLoading && <ChatSuggestions onSuggestionClick={onSuggestionClick} />}

      {isLoading && <ChatLoading />}
      <div ref={messagesEndRef} />
    </div>
  );
}
