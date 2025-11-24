// Components
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
        <ChatMessage key={idx} message={msg} />
      ))}
      {isLoading && <ChatLoading />}
      <div ref={messagesEndRef} />
    </div>
  );
}
