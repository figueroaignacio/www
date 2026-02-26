'use client';

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
      const el = messagesEndRef.current;
      const parent = el.closest('.overflow-y-auto');

      if (parent) {
        const isNearBottom = parent.scrollHeight - parent.scrollTop - parent.clientHeight < 150;

        if (isNearBottom || !isLoading) {
          el.scrollIntoView({
            behavior: isLoading ? 'auto' : 'smooth',
            block: 'end',
          });
        }
      } else {
        el.scrollIntoView({
          behavior: isLoading ? 'auto' : 'smooth',
          block: 'end',
        });
      }
    }
  }, [messages.length, isLoading]);

  const showSuggestions = messages.length === 1 && messages[0].role === 'assistant';

  return (
    <div className="space-y-4 container">
      {messages.map((msg, idx) => (
        <div key={idx} className="flex items-start space-x-3 ">
          <div className="mt-1">
            {msg.role === 'assistant' ? <div className="" /> : <div className="w-6 h-6" />}
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
