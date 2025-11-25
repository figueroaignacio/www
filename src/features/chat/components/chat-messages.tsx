// Components
import { BotMessageSquare } from 'lucide-react';
import { ChatLoading } from './chat-loading';
import { ChatMessage } from './chat-message';

// Types
import type { Message } from '../types';

interface ChatMessagesProps {
  messages: Message[];
  isLoading: boolean;
  messagesEndRef: React.RefObject<HTMLDivElement>;
}

export function ChatMessages({ messages, isLoading, messagesEndRef }: ChatMessagesProps) {
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
      {isLoading && <ChatLoading />}
      <div ref={messagesEndRef} />
    </div>
  );
}
